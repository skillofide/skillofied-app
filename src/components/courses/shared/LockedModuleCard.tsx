import React from 'react';
import { SyllabusModule } from '../../../types';
import styles from '../FrontendCoursePage.module.css';

interface LockedModuleCardProps {
  currentModule: SyllabusModule;
  selectedItemId: string;
  unlockModuleName: string;
}

/**
 * Renders the "This module is locked" screen shown when a user tries to
 * access a module before completing the required prerequisite module.
 */
const LockedModuleCard: React.FC<LockedModuleCardProps> = ({
  currentModule,
  selectedItemId,
  unlockModuleName,
}) => {
  const currentLesson = currentModule.items.find(item => item.id === selectedItemId);

  return (
    <div className={`${styles.tabContent} ${styles.lockedCard}`}>
      <div className={styles.lockedIconWrapper}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      </div>
      <h2 className={styles.lockTitle}>{currentLesson?.title || currentModule.title}</h2>
      <p className={styles.lockDesc}>
        This section is currently locked. Complete all previous lessons, quizzes, and assignments in{' '}
        <strong>{unlockModuleName}</strong> to unlock this module!
      </p>

      <div className={styles.lockedModulePreview}>
        <h4 className={styles.lockedPreviewTitle}>📋 Module Syllabus Preview:</h4>
        <ul className={styles.lockedPreviewList}>
          {currentModule.items.map(item => (
            <li
              key={item.id}
              style={{
                opacity: item.id === selectedItemId ? 1 : 0.6,
                fontWeight: item.id === selectedItemId ? 700 : 500,
              }}
            >
              {item.title} {item.id === selectedItemId ? ' (Previewing)' : ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LockedModuleCard;
