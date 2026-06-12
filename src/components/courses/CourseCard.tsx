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



const CourseCard: React.FC<Props> = ({ course }) => {
  const theme = getCourseTheme(course.initial);
  
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
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
