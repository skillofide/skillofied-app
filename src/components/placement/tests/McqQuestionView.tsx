import React from 'react';
import { AttemptQuestion } from '../../../api';
import styles from './Tests.module.css';

interface Props {
  question: AttemptQuestion;
  index: number;
  total: number;
  onSelect: (optionIds: string[]) => void;
  onText: (value: string) => void;
}

const LETTERS = 'ABCDEFGHIJ';

/**
 * Renders a single-choice, multi-choice, numeric or descriptive question.
 *
 * Options are rendered in the order the server sent them — that order was
 * frozen per attempt, so it must not be re-sorted here.
 */
const McqQuestionView: React.FC<Props> = ({ question, index, total, onSelect, onText }) => {
  const isMulti = question.mcqKind === 'multiple';
  const isNumeric = question.mcqKind === 'numeric';
  const isDescriptive = question.kind === 'descriptive';
  const selected = new Set(question.selectedOptionIds);

  const toggle = (optionId: string) => {
    if (isMulti) {
      const next = new Set(selected);
      if (next.has(optionId)) next.delete(optionId);
      else next.add(optionId);
      onSelect(Array.from(next));
    } else {
      // Clicking the chosen option again clears it, so a candidate can undo an
      // answer on a test with negative marking.
      onSelect(selected.has(optionId) ? [] : [optionId]);
    }
  };

  return (
    <div>
      <div className={styles.questionHead}>
        <span className={styles.questionNo}>Question {index + 1} of {total}</span>
        <span className={styles.marks}>
          {question.marks} mark{question.marks === 1 ? '' : 's'}
          {isMulti ? ' · select all that apply' : ''}
        </span>
      </div>

      <div className={styles.questionBody}>{question.body}</div>

      {isNumeric || isDescriptive ? (
        isDescriptive ? (
          <textarea
            className={styles.textAnswer}
            value={question.textAnswer}
            onChange={(e) => onText(e.target.value)}
            placeholder="Type your answer…"
          />
        ) : (
          <input
            className={styles.numericInput}
            value={question.textAnswer}
            onChange={(e) => onText(e.target.value)}
            placeholder="Your answer"
            inputMode="decimal"
          />
        )
      ) : (
        <div className={styles.options}>
          {question.options.map((opt, i) => {
            const isSelected = selected.has(opt.id);
            const cls = [
              styles.option,
              isSelected ? styles.optionSelected : '',
            ].filter(Boolean).join(' ');

            return (
              <div key={opt.id} className={cls} onClick={() => toggle(opt.id)} role="button" tabIndex={0}>
                <span className={`${styles.optionMarker} ${isMulti ? styles.optionMarkerSquare : ''}`}>
                  {LETTERS[i] ?? i + 1}
                </span>
                <span>{opt.body}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default McqQuestionView;
