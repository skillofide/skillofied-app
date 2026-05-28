import React from 'react';
import { PracticeSet } from '../../types';
import styles from './PracticeCard.module.css';

interface Props {
  practiceSet: PracticeSet;
}

const TrophyIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2.2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z" />
  </svg>
);

const getLevelTheme = (level: string) => {
  const lvl = level.toLowerCase();
  if (lvl.includes('advanced')) {
    return {
      accent: '#9b5cf6', // purple
      lightBg: '#f5f0ff',
      darkText: '#7c3aed',
      trackColor: 'rgba(155, 92, 246, 0.12)',
      label: 'Advanced Challenge',
    };
  } else if (lvl.includes('intermediate')) {
    return {
      accent: '#3b82f6', // blue
      lightBg: '#eff6ff',
      darkText: '#1d4ed8',
      trackColor: 'rgba(59, 130, 246, 0.12)',
      label: 'Intermediate Challenge',
    };
  } else {
    return {
      accent: '#22c55e', // green
      lightBg: '#f0fdf4',
      darkText: '#15803d',
      trackColor: 'rgba(34, 197, 94, 0.12)',
      label: 'Beginner Challenge',
    };
  }
};

const getPracticeStatus = (progress: number) => {
  if (progress === 0) return 'Not started';
  if (progress === 100) return 'Completed';
  return 'In progress';
};

const getActionButtonText = (progress: number) => {
  return progress === 0 ? 'Start practice' : 'Continue';
};

const formatTitle = (title: string) => {
  if (title === 'Masters of Algorith...') {
    return 'Masters of Algorithms';
  }
  return title;
};

const PracticeCard: React.FC<Props> = ({ practiceSet }) => {
  const theme = getLevelTheme(practiceSet.level);
  const status = getPracticeStatus(practiceSet.progress);
  const actionText = getActionButtonText(practiceSet.progress);

  // Format progress for display (e.g. 4.5%)
  const displayProgress = practiceSet.progress.toFixed(1).replace(/\.0$/, '');

  // Circular progress calculations (r=36, strokeWidth=6, sqSize=90)
  const radius = 36;
  const strokeWidth = 6;
  const sqSize = 90;
  const center = sqSize / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (practiceSet.progress / 100) * circumference;

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.iconWrap} style={{ background: theme.lightBg }}>
          <TrophyIcon color={theme.accent} />
        </div>
        <div className={styles.titleBlock}>
          <h3 className={styles.title} title={formatTitle(practiceSet.title)}>
            {formatTitle(practiceSet.title)}
          </h3>
          <p className={styles.level}>{theme.label}</p>
        </div>
      </div>

      {/* Circular Progress Section */}
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
              style={{ stroke: theme.trackColor }}
            />
            {/* Active Stroke */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              className={styles.progressFillCircle}
              style={{
                stroke: theme.accent,
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
              }}
              transform={`rotate(-90 ${center} ${center})`}
            />
          </svg>
          <div className={styles.progressTextContainer}>
            <span className={styles.progressPercent}>{displayProgress}%</span>
            <span className={styles.progressLabelText}>progress</span>
          </div>
        </div>
      </div>

      {/* Time / Stats & Status Row */}
      <div className={styles.timeStatusRow}>
        <div className={styles.problemsContainer}>
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={styles.problemsIcon}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className={styles.problemsCountValue}>
            {practiceSet.totalProblems} Problems
          </span>
        </div>
        
        <span 
          className={styles.statusBadge}
          style={{ background: theme.lightBg, color: theme.darkText }}
        >
          {status}
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
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
        <span>{actionText}</span>
      </button>
    </div>
  );
};

export default PracticeCard;
