import React from 'react';
import { Course } from '../../types';
import styles from './CourseCard.module.css';

interface Props {
  course: Course;
}

const getCourseTheme = (initial: string) => {
  const char = initial.toUpperCase();
  if (char === 'J') {
    return {
      accent: '#6c5ce7', // purple
      lightBg: '#ebe7ff',
      darkText: '#5346bc',
      trackColor: 'rgba(108, 92, 231, 0.12)',
    };
  } else if (char === 'F') {
    return {
      accent: '#d85d38', // orange/rust
      lightBg: '#fff1eb',
      darkText: '#c25028',
      trackColor: 'rgba(216, 93, 56, 0.12)',
    };
  } else if (char === 'M') {
    return {
      accent: '#10ac84', // teal/green
      lightBg: '#e8f7f0',
      darkText: '#108c5c',
      trackColor: 'rgba(16, 172, 132, 0.12)',
    };
  }
  return {
    accent: '#3b4cf0',
    lightBg: '#ebe7ff',
    darkText: '#3b4cf0',
    trackColor: 'rgba(59, 76, 240, 0.12)',
  };
};

const formatTitle = (title: string) => {
  if (title === 'Front-End Technologies') {
    return 'Front-End Tech';
  }
  return title;
};
const formatStatus = (status: string) => {
  if (status === 'NOT STARTED') return 'Not started';
  if (status === 'IN PROGRESS') return 'In progress';
  if (status === 'COMPLETED') return 'Completed';
  return status;
};

const CourseCard: React.FC<Props> = ({ course }) => {
  const theme = getCourseTheme(course.initial);
  
  // Format progress for display (hardcoded to 0% as requested)
  const displayProgress = "0";

  // Circular progress calculations (r=36, strokeWidth=6, sqSize=90)
  const radius = 36;
  const strokeWidth = 6;
  const sqSize = 90;
  const center = sqSize / 2;
  const circumference = 2 * Math.PI * radius;
  // Progress is 0, so strokeDashoffset is equal to full circumference
  const strokeDashoffset = circumference;

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <div 
          className={styles.initial} 
          style={{ background: theme.lightBg, color: theme.darkText }}
        >
          {course.initial}
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{formatTitle(course.title)}</h3>
          <p className={styles.mentor}>{course.mentor}</p>
        </div>
      </div>

      {/* Progress Circle Section */}
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

      {/* Time & Status Row */}
      <div className={styles.timeStatusRow}>
        <div className={styles.classTime}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.clockIcon}
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className={styles.classValue}>{course.classTime}</span>
        </div>
        
        <span 
          className={styles.statusBadge}
          style={{ background: theme.lightBg, color: theme.darkText }}
        >
          {formatStatus(course.status)}
        </span>
      </div>

      {/* Join Class Button */}
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
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
        <span>Join class</span>
      </button>
    </div>
  );
};

export default CourseCard;
