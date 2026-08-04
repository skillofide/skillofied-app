import React, { useCallback, useEffect, useRef, useState } from 'react';
import Editor from '@monaco-editor/react';

import {
  AttemptQuestion,
  RunAttemptCodeResult,
  getAttemptSubmissionApi,
  graphqlRequest,
  runAttemptCodeApi,
  submitAttemptCodeApi,
} from '../../../api';
import styles from './Tests.module.css';

interface ProblemDetail {
  title: string;
  statement: string;
  constraints: string[];
  examples: { input: string; output: string; explanation: string }[];
  starterCodes: Record<string, string>;
}

const LANGUAGES = [
  { id: 'javascript', label: 'JavaScript', monaco: 'javascript' },
  { id: 'python', label: 'Python', monaco: 'python' },
  { id: 'java', label: 'Java', monaco: 'java' },
  { id: 'cpp', label: 'C++', monaco: 'cpp' },
  { id: 'go', label: 'Go', monaco: 'go' },
];

interface Props {
  attemptId: string;
  question: AttemptQuestion;
  index: number;
  total: number;
  onSubmitted: (submissionId: string, language: string, code: string) => void;
  onSecondsLeft: (seconds: number) => void;
}

/**
 * The coding question view inside a test.
 *
 * Run executes against visible test cases only and scores nothing. Submit hands
 * the code to the same judge the practice section uses; the verdict arrives
 * asynchronously, so this component polls for it and reports pass counts only —
 * hidden test-case content is never shown mid-test.
 *
 * Scoring keeps the BEST submission for a question, so a candidate is safe to
 * keep experimenting after a good result.
 */
const CodingQuestionView: React.FC<Props> = ({
  attemptId, question, index, total, onSubmitted, onSecondsLeft,
}) => {
  const [problem, setProblem] = useState<ProblemDetail | null>(null);
  const [language, setLanguage] = useState(question.language || 'javascript');
  const [code, setCode] = useState(question.code || '');
  const [running, setRunning] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [runResult, setRunResult] = useState<RunAttemptCodeResult | null>(null);
  const [verdict, setVerdict] = useState<string>('');
  const [error, setError] = useState('');
  const pollRef = useRef<number | null>(null);

  // Load the statement. The paper only carries the problem id to keep the
  // attempt payload small.
  useEffect(() => {
    let cancelled = false;
    if (!question.problemId) return;

    (async () => {
      try {
        const data = await graphqlRequest<{ getProblem: ProblemDetail }>(`
          query GetProblem($id: String!) {
            getProblem(id: $id) {
              title statement constraints
              examples { input output explanation }
              starterCodes { javascript python java cpp go }
            }
          }
        `, { id: question.problemId });
        if (cancelled) return;
        setProblem(data.getProblem);
        // Only seed starter code when the candidate has not written anything.
        if (!question.code && data.getProblem?.starterCodes) {
          setCode(data.getProblem.starterCodes[language] || '');
        }
      } catch {
        if (!cancelled) setError('Could not load the problem statement.');
      }
    })();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.problemId]);

  // Switching language swaps in that language's scaffold, but never discards
  // code the candidate has already written for the current one.
  const changeLanguage = (next: string) => {
    const starter = problem?.starterCodes?.[language] || '';
    const untouched = code.trim() === '' || code.trim() === starter.trim();
    setLanguage(next);
    if (untouched) setCode(problem?.starterCodes?.[next] || '');
  };

  const poll = useCallback((submissionId: string) => {
    let tries = 0;
    const tick = async () => {
      tries += 1;
      try {
        const res = await getAttemptSubmissionApi(attemptId, submissionId);
        if (res.status && res.status !== 'Pending' && res.status !== 'Running') {
          setVerdict(
            res.compileError
              ? `Compile error\n${res.compileError}`
              : `${res.status} — ${res.passedCount}/${res.totalCount} hidden tests passed`,
          );
          setSubmitting(false);
          return;
        }
      } catch {
        // keep polling; a transient failure should not strand the UI
      }
      // Give up after ~2 minutes: the judge queue can be deep during a drive,
      // and the score still lands server-side once it finishes.
      if (tries > 60) {
        setVerdict('Still evaluating — your score will be updated automatically.');
        setSubmitting(false);
        return;
      }
      pollRef.current = window.setTimeout(tick, 2000);
    };
    pollRef.current = window.setTimeout(tick, 1500);
  }, [attemptId]);

  useEffect(() => () => { if (pollRef.current) window.clearTimeout(pollRef.current); }, []);

  const run = async () => {
    setRunning(true);
    setError('');
    setRunResult(null);
    try {
      setRunResult(await runAttemptCodeApi(attemptId, question.id, language, code));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not run your code.');
    } finally {
      setRunning(false);
    }
  };

  const submit = async () => {
    setSubmitting(true);
    setError('');
    setVerdict('Queued for evaluation…');
    try {
      const res = await submitAttemptCodeApi(attemptId, question.id, language, code);
      onSubmitted(res.submissionId, language, code);
      onSecondsLeft(res.secondsLeft);
      poll(res.submissionId);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not submit your code.');
      setVerdict('');
      setSubmitting(false);
    }
  };

  const monacoLang = LANGUAGES.find((l) => l.id === language)?.monaco ?? 'plaintext';

  return (
    <div className={styles.codingLayout}>
      <div className={styles.questionHead}>
        <span className={styles.questionNo}>Question {index + 1} of {total} · Coding</span>
        <span className={styles.marks}>{question.marks} marks</span>
      </div>

      <div className={styles.codingStatement}>
        <h3 style={{ margin: '0 0 10px', fontSize: 16 }}>
          {problem?.title || question.problemTitle || 'Loading…'}
        </h3>
        <div className={styles.questionBody}>{problem?.statement || ''}</div>

        {problem?.examples?.length ? (
          <div className={styles.consoleBox}>
            {problem.examples.map((ex, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <div>Input: {ex.input}</div>
                <div>Output: {ex.output}</div>
                {ex.explanation ? <div>Note: {ex.explanation}</div> : null}
              </div>
            ))}
          </div>
        ) : null}

        {problem?.constraints?.length ? (
          <ul style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 10 }}>
            {problem.constraints.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        ) : null}
      </div>

      <div className={styles.runBar}>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className={styles.ghostBtn}
          style={{ padding: '8px 12px' }}
        >
          {LANGUAGES.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
        </select>
        <div className={styles.spacer} />
        <button className={styles.ghostBtn} onClick={run} disabled={running || submitting}>
          {running ? 'Running…' : 'Run'}
        </button>
        <button className={styles.primaryBtn} onClick={submit} disabled={submitting || running}>
          {submitting ? 'Submitting…' : 'Submit'}
        </button>
      </div>

      <div className={styles.editorWrap}>
        <Editor
          height="100%"
          language={monacoLang}
          theme="vs-dark"
          value={code}
          onChange={(v) => setCode(v ?? '')}
          options={{ minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false }}
        />
      </div>

      {error ? <div className={styles.errorBox}>{error}</div> : null}

      {verdict ? (
        <div className={styles.consoleBox}>
          <span className={submitting ? styles.verdictWait : styles.verdictOk}>{verdict}</span>
        </div>
      ) : null}

      {runResult ? (
        <div className={styles.consoleBox}>
          {runResult.compileError ? (
            <span className={styles.verdictBad}>{runResult.compileError}</span>
          ) : (
            <>
              <div className={runResult.overallStatus === 'Accepted' ? styles.verdictOk : styles.verdictBad}>
                {runResult.overallStatus} · {runResult.runtimeMs} ms
              </div>
              {runResult.testResults.map((tr, i) => (
                <div key={i} style={{ marginTop: 8 }}>
                  <div>Case {i + 1}: {tr.status}</div>
                  <div>Input: {tr.input}</div>
                  <div>Expected: {tr.expectedOutput}</div>
                  <div>Got: {tr.actualOutput}</div>
                  {tr.error ? <div className={styles.verdictBad}>{tr.error}</div> : null}
                </div>
              ))}
            </>
          )}
        </div>
      ) : null}

    </div>
  );
};

export default CodingQuestionView;
