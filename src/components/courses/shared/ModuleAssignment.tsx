import React, { useState } from 'react';
import AssignmentIDE from './AssignmentIDE';
import { usePublishLessonFooter, useCourseHeader } from '../../../context/CourseHeaderContext';
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
  /** Examples of inputs/outputs for the task */
  examples?: { input: string; output: string; explanation?: string }[];
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
 * Module assignment, presented one task at a time.
 *
 * - Code tasks: rendered using the full Practice IDE (AssignmentIDE) — same
 *   Monaco editor, ConsolePanel and ProblemDescriptionPanel as SolveProblemPage.
 * - Text tasks: rendered as a simple textarea.
 *
 * Task navigation (prev/next + count) is published to CourseHeaderContext so
 * CoursePageShell can display it in the shared lessonBottomBar.
 *
 * Nothing is auto-graded — submissions go to a mentor for review.
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

  const { onAdvanceLesson } = useCourseHeader();

  const setAnswer = (value: string) => {
    setError(null);
    setAnswers((prev) => prev.map((a, i) => (i === index ? value : a)));
  };

  const active = items[index];
  const answer = answers[index];
  const isLast = index === items.length - 1;
  const allSubmitted = submittedTasks.every(Boolean);



  const handleSubmitTask = () => {
    setError(null);
    setSubmittedTasks((prev) => prev.map((v, i) => (i === index ? true : v)));
    
    if (!isLast) {
      setIndex(index + 1);
    } else {
      if (onAdvanceLesson) {
        onAdvanceLesson();
      }
    }
  };

  const goTo = (next: number) => {
    setError(null);
    setIndex(next);
  };

  // Publish task nav to the shared lessonBottomBar
  usePublishLessonFooter(
    allSubmitted
      ? null
      : {
          label: `${index + 1} / ${items.length}`,
          onPrev: () => goTo(index - 1),
          onNext: handleSubmitTask,
          prevDisabled: index === 0,
          nextDisabled: false,
          prevLabel: '← Previous Assignment',
          nextLabel: isLast ? 'Submit & Next Lesson →' : 'Next Assignment →',
        }
  );

  // ── All tasks done ───────────────────────────────────────────────────────────
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

  // ── Code task: full Practice IDE ─────────────────────────────────────────────
  if (active.kind === 'code') {
    return (
      // Fill the card edge-to-edge — card padding is 0 for assignments
      <div style={{ flex: 1, minHeight: 0, height: '100%' }}>
        <AssignmentIDE
          key={index}
          taskIndex={index + 1}
          taskTotal={items.length}
          language={active.language}
          starterCode={active.starterCode}
          value={answer}
          onChange={setAnswer}
          prompt={active.prompt}
          submitted={submittedTasks[index]}
          onSubmit={handleSubmitTask}
          runnable={active.runnable}
          fixture={active.fixture}
          error={error}
          examples={(active as any).examples}
        />
      </div>
    );
  }

  // ── Text task: simple textarea ───────────────────────────────────────────────
  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 12px' }}>
        Task {index + 1} of {items.length} · written
      </p>
      <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-primary)', margin: '0 0 16px' }}>
        {active.prompt}
      </p>
      <textarea
        key={index}
        className={styles.assignmentTextArea}
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      {error && (
        <p style={{ fontSize: 12, color: '#f87171', margin: '8px 0 0' }}>{error}</p>
      )}
      <div className={styles.assignmentFooter}>
        <button
          className={styles.saveBtn}
          onClick={handleSubmitTask}
          title={submitLabel}
        >
          {submitLabel}
        </button>
      </div>
    </div>
  );
};

export default ModuleAssignment;
