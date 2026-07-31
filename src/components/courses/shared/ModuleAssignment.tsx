import React, { useState } from 'react';
import { Group as PanelGroup, Panel, Separator as PanelResizeHandle } from 'react-resizable-panels';
import AssignmentCodeEditor from './AssignmentCodeEditor';
import styles from '../FrontendCoursePage.module.css';

/**
 * An assignment question is either written (answered in a textarea) or a coding
 * task (answered in an embedded editor the learner can actually run).
 *
 * Plain strings are still accepted so existing course data keeps working; they
 * are treated as written questions.
 */
export interface AssignmentCodeQuestion {
  kind: 'code';
  prompt: string;
  language: string;
  starterCode: string;
  /** Show a stdin box when the program is meant to read input. */
  stdin?: boolean;
  /**
   * Fixture passed to the runner as stdin. SQL questions need this: the runner
   * builds the tables from it, so without a fixture every query fails with
   * "relation does not exist". Supplying it also hides the stdin box, since
   * the learner should not have to hand-write the sample data.
   */
  fixture?: string;
  /**
   * Set false for languages the sandbox cannot execute (Dockerfile, shell).
   * The learner still gets a proper editor with syntax highlighting; the Run
   * button is hidden rather than offered and then failing.
   */
  runnable?: boolean;
}

export interface AssignmentTextQuestion {
  kind: 'text';
  prompt: string;
}

export type AssignmentQuestion = string | AssignmentTextQuestion | AssignmentCodeQuestion;

interface ModuleAssignmentProps {
  title?: string;
  questions: AssignmentQuestion[];
}

const normalise = (q: AssignmentQuestion): AssignmentTextQuestion | AssignmentCodeQuestion =>
  typeof q === 'string' ? { kind: 'text', prompt: q } : q;

/**
 * Module assignment, presented one task at a time like the practice IDE:
 * the brief on the left, the answer on the right, and a footer that runs the
 * code and moves to the next task once this one is submitted.
 *
 * Showing every task at once left too little height for the editor, and made
 * it unclear which task the learner was actually on.
 *
 * Nothing here is auto-graded — submissions go to a mentor for review.
 */
const ModuleAssignment: React.FC<ModuleAssignmentProps> = ({
  title = 'Module Assignment',
  questions,
}) => {
  const items = questions.map(normalise);

  const [answers, setAnswers] = useState<string[]>(() =>
    items.map((q) => (q.kind === 'code' ? q.starterCode : ''))
  );
  const [index, setIndex] = useState(0);
  const [submittedTasks, setSubmittedTasks] = useState<boolean[]>(() => items.map(() => false));
  const [error, setError] = useState<string | null>(null);

  const setAnswer = (value: string) =>
    setAnswers((prev) => prev.map((a, i) => (i === index ? value : a)));

  const active = items[index];
  const answer = answers[index];
  const isLast = index === items.length - 1;
  const allSubmitted = submittedTasks.every(Boolean);

  // A written answer needs real content; a code answer must differ from the
  // starter, otherwise nothing was actually attempted.
  const hasAttempt =
    active.kind === 'code'
      ? answer.trim().length > 0 && answer.trim() !== active.starterCode.trim()
      : answer.trim().length >= 10;

  const handleSubmitTask = () => {
    if (!hasAttempt) {
      setError(
        active.kind === 'code'
          ? 'Write your solution before submitting — the starter code is unchanged.'
          : 'Write a fuller answer before submitting.'
      );
      return;
    }
    setError(null);
    setSubmittedTasks((prev) => prev.map((v, i) => (i === index ? true : v)));
    if (!isLast) setIndex(index + 1);
  };

  const goTo = (next: number) => {
    setError(null);
    setIndex(next);
  };

  if (allSubmitted) {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.completeBadge} style={{ marginTop: '24px' }}>
          <span>
            ✓ All {items.length} task{items.length === 1 ? '' : 's'} submitted. A mentor will review
            your work shortly. 🎉
          </span>
        </div>
      </div>
    );
  }

  const submitLabel = isLast ? 'Submit assignment' : 'Submit & next task →';

  const footer = (
    <>
      <button
        className={styles.saveBtn}
        onClick={handleSubmitTask}
        title={hasAttempt ? submitLabel : 'Answer this task first'}
      >
        {submitLabel}
      </button>
      {error && <span style={{ fontSize: '11.5px', color: '#f87171' }}>{error}</span>}
    </>
  );

  return (
    <div className={styles.assignmentWorkspace}>
      <PanelGroup orientation="horizontal" className={styles.assignmentSplit}>
        {/* Left: the brief for this task only. Resizable, because prompts vary
            wildly in length and a fixed width wastes space on short ones. */}
        <Panel defaultSize="40%" minSize="20%" maxSize="60%">
          <div className={styles.assignmentBrief}>
            <div className={styles.assignmentBriefHead}>
              <span className={styles.assignmentTaskLabel}>
                Task {index + 1} of {items.length}
                {active.kind === 'code' ? ` · ${active.language}` : ' · written'}
              </span>
              {submittedTasks[index] && (
                <span className={styles.assignmentSubmittedTag}>✓ submitted</span>
              )}
            </div>
            <p className={styles.assignmentBriefText}>{active.prompt}</p>
            {active.kind === 'code' && active.runnable !== false && (
              <p className={styles.assignmentBriefHint}>
                Write your solution on the right and press Run to try it. Nothing is auto-graded —
                a mentor reviews your work.
              </p>
            )}
          </div>
        </Panel>

        <PanelResizeHandle className={styles.assignmentResizer} />

        {/* Right: the answer */}
        <Panel defaultSize="60%" minSize="40%">
          <div className={styles.assignmentAnswer}>
          {active.kind === 'code' ? (
            <AssignmentCodeEditor
              // Remount per task so the previous task's editor and output
              // do not carry over.
              key={index}
              language={active.language}
              starterCode={active.starterCode}
              showStdin={active.stdin}
              fixture={active.fixture}
              runnable={active.runnable}
              value={answer}
              onChange={setAnswer}
              footerSlot={footer}
            />
          ) : (
            <>
              <textarea
                key={index}
                className={styles.assignmentTextArea}
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <div className={styles.assignmentFooter}>{footer}</div>
            </>
          )}
          </div>
        </Panel>
      </PanelGroup>

      {/* Task pagination, mirroring the practice IDE */}
      <div className={styles.assignmentPager}>
        <button
          className={styles.navBtn}
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
        >
          ← Previous task
        </button>
        <span className={styles.assignmentPagerCount}>
          {index + 1} / {items.length}
        </span>
        <button
          className={styles.navBtn}
          onClick={() => goTo(index + 1)}
          disabled={isLast}
        >
          Next task →
        </button>
      </div>
    </div>
  );
};

export default ModuleAssignment;
