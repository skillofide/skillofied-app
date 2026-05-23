import React from 'react';
import { PracticeSet } from '../../types';
import styles from './PracticeCard.module.css';

interface Props {
  practiceSet: PracticeSet;
}

const TrophyIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path
      d="M8 21h8M12 17v4M5 3H3v5a4 4 0 0 0 4 4M19 3h2v5a4 4 0 0 1-4 4M7 3h10v6a5 5 0 0 1-10 0V3z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PracticeCard: React.FC<Props> = ({ practiceSet }) => {
  return (
    <div className={styles.card} style={{ borderColor: `${practiceSet.iconColor}33` }}>
      <div className={styles.topRow}>
        <div className={styles.iconWrap} style={{ background: practiceSet.bgColor }}>
          <TrophyIcon color={practiceSet.iconColor} />
        </div>
        <div className={styles.titleBlock}>
          <span className={styles.title}>{practiceSet.title}</span>
          <span className={styles.level} style={{ color: practiceSet.levelColor }}>
            {practiceSet.level}
          </span>
        </div>
        <div className={styles.progressBlock}>
          <span className={styles.progressPct}>{practiceSet.progress}%</span>
          <span className={styles.progressLabel}>Progress</span>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.problemsRow}>
        <span className={styles.problemsLabel}>Total Problems</span>
        <div className={styles.problemsRight}>
          <span className={styles.problemsCount}>{practiceSet.totalProblems}</span>
        </div>
      </div>

      {practiceSet.progress > 0 && (
        <div className={styles.miniBar}>
          <div
            className={styles.miniBarFill}
            style={{
              width: `${practiceSet.progress}%`,
              background: practiceSet.iconColor,
            }}
          />
        </div>
      )}

      <div className={styles.actions}>
        <button className={styles.viewBtn}>
          <span>☰</span> View Problems
        </button>
        <button className={styles.continueBtn}>
          → Continue
        </button>
      </div>
    </div>
  );
};

export default PracticeCard;
