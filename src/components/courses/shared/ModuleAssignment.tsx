import React, { useState } from 'react';
import styles from '../FrontendCoursePage.module.css';

interface ModuleAssignmentProps {
  title?: string;
  questions: string[];
}

/**
 * A fully self-contained, reusable assignment submission component used at
 * the end of every course module. Manages its own text and submitted state.
 */
const ModuleAssignment: React.FC<ModuleAssignmentProps> = ({
  title = 'Module Assignment',
  questions,
}) => {
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.paragraph}>Answer the following questions to complete this module:</p>

      <ol style={{
        fontSize: '13px',
        color: 'var(--text-secondary)',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        paddingLeft: '20px',
        marginBottom: '16px',
      }}>
        {questions.map((q, idx) => (
          <li key={idx}>{idx + 1}. {q}</li>
        ))}
      </ol>

      {!assignmentSubmitted ? (
        <div>
          <textarea
            className={styles.assignmentBox}
            placeholder="Type your answers here..."
            value={assignmentText}
            onChange={e => setAssignmentText(e.target.value)}
          />
          <button
            className={styles.saveBtn}
            onClick={() => { if (assignmentText.trim().length > 10) setAssignmentSubmitted(true); }}
            disabled={assignmentText.trim().length < 10}
          >
            Submit Assignment
          </button>
        </div>
      ) : (
        <div className={styles.completeBadge} style={{ marginTop: '24px' }}>
          <span>✓ Assignment Submitted! A mentor will review your work shortly. 🎉</span>
        </div>
      )}
    </div>
  );
};

export default ModuleAssignment;
