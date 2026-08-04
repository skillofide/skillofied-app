import React from 'react';
import { AttemptQuestion } from '../../../api';
import styles from './Tests.module.css';

interface Props {
  questions: AttemptQuestion[];
  currentIndex: number;
  onJump: (index: number) => void;
  /** No-backtrack tests disable jumping to an earlier question. */
  allowBacktrack: boolean;
}

/** True when the candidate has committed something for this question. */
export function isAnswered(q: AttemptQuestion): boolean {
  if (q.kind === 'coding') return !!q.submissionId;
  if (q.mcqKind === 'numeric' || q.kind === 'descriptive') return q.textAnswer.trim().length > 0;
  return q.selectedOptionIds.length > 0;
}

const QuestionPalette: React.FC<Props> = ({ questions, currentIndex, onJump, allowBacktrack }) => {
  const answered = questions.filter(isAnswered).length;
  const flagged = questions.filter((q) => q.markedReview).length;

  return (
    <div>
      <p className={styles.paletteTitle}>Questions</p>
      <div className={styles.paletteGrid}>
        {questions.map((q, i) => {
          const locked = !allowBacktrack && i < currentIndex;
          const cls = [
            styles.paletteCell,
            isAnswered(q) ? styles.paletteAnswered : '',
            q.markedReview ? styles.paletteReview : '',
            i === currentIndex ? styles.paletteCurrent : '',
          ].filter(Boolean).join(' ');

          return (
            <button
              key={q.id}
              className={cls}
              onClick={() => onJump(i)}
              disabled={locked}
              title={locked ? 'This test does not allow going back' : `Question ${i + 1}`}
              style={locked ? { opacity: 0.35, cursor: 'not-allowed' } : undefined}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className={styles.legend}>
        <div className={styles.legendRow}>
          <span className={styles.legendDot} style={{ background: '#22c55e' }} />
          Answered · {answered}
        </div>
        <div className={styles.legendRow}>
          <span className={styles.legendDot} style={{ background: '#a855f7' }} />
          Marked for review · {flagged}
        </div>
        <div className={styles.legendRow}>
          <span className={styles.legendDot} style={{ background: '#1f2235' }} />
          Not answered · {questions.length - answered}
        </div>
      </div>
    </div>
  );
};

export default QuestionPalette;
