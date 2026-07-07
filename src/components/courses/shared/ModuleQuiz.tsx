import React, { useState } from 'react';
import { QuizQuestion } from '../../../types';
import styles from '../FrontendCoursePage.module.css';

interface ModuleQuizProps {
  title?: string;
  questions: QuizQuestion[];
}

/**
 * A fully self-contained, reusable quiz component used at the end of every
 * course module. Manages its own answer/submission/score state internally.
 */
const ModuleQuiz: React.FC<ModuleQuizProps> = ({ title = 'Module Quiz', questions }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const handleSubmitQuiz = () => {
    let score = 0;
    questions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) score++;
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const handleRetry = () => {
    setQuizSubmitted(false);
    setQuizScore(null);
    setQuizAnswers({});
  };

  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.paragraph}>Test your understanding of the concepts covered in this module:</p>

      <div className={styles.quizCardList}>
        {questions.map(q => {
          const selected = quizAnswers[q.id];
          return (
            <div key={q.id} className={styles.quizBlock}>
              <h4 className={styles.quizBlockQuestion}>{q.question}</h4>
              <div className={styles.quizBlockOptions}>
                {q.options.map(opt => {
                  let optStyle = styles.quizBlockOption;
                  if (selected === opt) optStyle = styles.quizBlockOptionSelected;
                  if (quizSubmitted) {
                    if (opt === q.correctAnswer) optStyle = styles.quizBlockOptionCorrect;
                    else if (selected === opt) optStyle = styles.quizBlockOptionIncorrect;
                  }
                  return (
                    <button
                      key={opt}
                      className={optStyle}
                      onClick={() => { if (!quizSubmitted) setQuizAnswers(p => ({ ...p, [q.id]: opt })); }}
                      disabled={quizSubmitted}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.quizSubmitRow}>
        {!quizSubmitted ? (
          <button
            className={styles.saveBtn}
            onClick={handleSubmitQuiz}
            disabled={Object.keys(quizAnswers).length < questions.length}
          >
            Submit Quiz
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'space-between' }}>
            <span className={styles.quizScoreText}>
              Score: {quizScore} / {questions.length}{' '}
              {quizScore === questions.length ? '🎉 Perfect!' : '👍 Review the lessons!'}
            </span>
            <button className={styles.backBtn} onClick={handleRetry}>
              Retry Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleQuiz;
