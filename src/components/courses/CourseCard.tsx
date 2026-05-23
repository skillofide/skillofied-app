import React from 'react';
import { Course } from '../../types';
import styles from './CourseCard.module.css';

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.initial} style={{ background: course.color }}>
          {course.initial}
        </div>
        <div className={styles.info}>
          <span className={styles.title}>{course.title}</span>
          <span className={styles.mentor}>Mentor: {course.mentor}</span>
        </div>
        <span className={styles.statusBadge}>
          <span className={styles.statusIcon}>⚠</span>
          {course.status}
        </span>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressLabel}>
          <span>Progress</span>
          <span className={styles.progressValue}>{course.progress}%</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <div className={styles.classTime}>
        <span className={styles.classLabel}>Class Time</span>
        <span className={styles.classValue}>{course.classTime}</span>
      </div>

      <button className={styles.joinBtn}>
        <span className={styles.joinIcon}>→</span>
        Join Class
      </button>
    </div>
  );
};

export default CourseCard;
