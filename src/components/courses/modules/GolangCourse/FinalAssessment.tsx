import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  page: number;
}

const FinalAssessment: React.FC<Props> = ({ page }) => {
  const [submitted, setSubmitted] = useState(false);
  const [repo, setRepo] = useState('');

  if (page === 1) {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>Final Theory Assessment</h2>
        <p className={styles.paragraph}>Answer comprehensive multiple-choice questions assessing your Go architecture knowledge.</p>
        <button className={styles.saveBtn}>Launch Assessment Portal</button>
      </div>
    );
  }

  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>API Development Final Test</h2>
      <p className={styles.paragraph}>Implement a concurrent order-matching backend service using gRPC and PostgreSQL.</p>
      {submitted ? (
        <div style={{ color: '#10b981', fontWeight: 600 }}>✓ Code submission received!</div>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <input className={styles.inputField} placeholder="GitHub link" value={repo} onChange={e => setRepo(e.target.value)} />
          <button className={styles.saveBtn} onClick={() => setSubmitted(true)} style={{ marginTop: '10px' }}>Submit Code</button>
        </div>
      )}
    </div>
  );
};

export default FinalAssessment;
