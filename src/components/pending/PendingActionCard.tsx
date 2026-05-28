import React from 'react';
import { PendingAction } from '../../types';
import styles from './PendingActionCard.module.css';

interface Props {
  action: PendingAction;
}

const AlertIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12" y2="16" />
  </svg>
);

const PendingActionCard: React.FC<Props> = ({ action }) => {
  const accentColor = '#ff4757';
  const lightBgColor = '#fff0f2';
  const darkTextColor = '#d63031';
  const trackColor = 'rgba(255, 71, 87, 0.12)';

  const initial = action.title.charAt(0).toUpperCase();
  const count = action.topicsCount !== undefined ? action.topicsCount : 0;

  // Circular count metric calculations (r=36, strokeWidth=6, sqSize=90)
  const radius = 36;
  const strokeWidth = 6;
  const sqSize = 90;
  const center = sqSize / 2;
  const circumference = 2 * Math.PI * radius;
  // Fill the circle fully (or partially if we want, say 100% since it's an action count)
  const strokeDashoffset = 0;

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <div 
          className={styles.initial} 
          style={{ background: lightBgColor, color: darkTextColor }}
        >
          {initial}
        </div>
        <div className={styles.info}>
          <h3 className={styles.title} title={action.title}>{action.title}</h3>
          <p className={styles.level}>{action.type}</p>
        </div>
      </div>

      {/* Circular Count Metric Section */}
      <div className={styles.progressSection}>
        <div className={styles.progressCircleContainer}>
          <svg 
            width={sqSize} 
            height={sqSize} 
            viewBox={`0 0 ${sqSize} ${sqSize}`} 
            className={styles.progressSvg}
          >
            {/* Background Track */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              className={styles.progressTrack}
              style={{ stroke: trackColor }}
            />
            {/* Active Stroke */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              className={styles.progressFillCircle}
              style={{
                stroke: accentColor,
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
              }}
              transform={`rotate(-90 ${center} ${center})`}
            />
          </svg>
          <div className={styles.progressTextContainer}>
            <span className={styles.progressPercent}>{count}</span>
            <span className={styles.progressLabelText}>topics</span>
          </div>
        </div>
      </div>

      {/* Alert & Priority Badge Footer Row */}
      <div className={styles.timeStatusRow}>
        <div className={styles.problemsContainer}>
          <AlertIcon color={accentColor} />
          <span className={styles.problemsCountValue}>Urgent Action</span>
        </div>
        
        <span 
          className={styles.statusBadge}
          style={{ background: lightBgColor, color: darkTextColor }}
        >
          High Alert
        </span>
      </div>

      {/* Action Button */}
      <button className={styles.joinBtn}>
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={styles.joinIcon}
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span>Complete now!</span>
      </button>
    </div>
  );
};

export default PendingActionCard;
