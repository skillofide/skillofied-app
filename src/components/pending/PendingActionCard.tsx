import React from 'react';
import { PendingAction } from '../../types';
import styles from './PendingActionCard.module.css';

interface Props {
  action: PendingAction;
}

const PendingActionCard: React.FC<Props> = ({ action }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <span className={styles.title}>{action.title}</span>
          <span className={styles.type}>{action.type}</span>
        </div>
        {action.hasAlert && (
          <span className={styles.alertIcon} aria-label="Alert">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#e05050" strokeWidth="2" />
              <path d="M12 7v6M12 17h.01" stroke="#e05050" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        )}
      </div>

      {action.topicsCount !== undefined && (
        <div className={styles.topics}>
          <span className={styles.topicsIcon}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#e05050" strokeWidth="2" />
              <path d="M12 7v6M12 17h.01" stroke="#e05050" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className={styles.topicsText}>Topics requiring immediate attention</span>
          <span className={styles.topicsCount}>{action.topicsCount}</span>
        </div>
      )}

      <button className={styles.actionBtn}>
        <div className={styles.actionBtnContent}>
          <span className={styles.actionBtnText}>
            <strong>Complete it now!</strong>
            <br />
            <span className={styles.actionSubtext}>It will impact your placement</span>
          </span>
          <span className={styles.arrow}>›</span>
        </div>
      </button>
    </div>
  );
};

export default PendingActionCard;
