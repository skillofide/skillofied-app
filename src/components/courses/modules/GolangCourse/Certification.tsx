import React from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  page: number;
}

const Certification: React.FC<Props> = () => {
  return (
    <div className={styles.tabContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center' }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
      <h2 className={styles.cardTitle}>Golang Mastery Certification</h2>
      <p className={styles.paragraph} style={{ maxWidth: '400px', margin: '0 auto 20px auto' }}>
        Complete all modules, major projects, and the final assessment to unlock your official verification certificate credentials.
      </p>
      <button className={styles.choiceBtn} disabled style={{ opacity: 0.6 }}>Download Certificate (Locked)</button>
    </div>
  );
};

export default Certification;
