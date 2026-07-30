import React from 'react';
import CodeSnippet from '../../../common/CodeSnippet';
import ModuleQuiz from '../../shared/ModuleQuiz';
import ModuleAssignment from '../../shared/ModuleAssignment';
import { sqlLessons, sqlQuizzes, sqlAssignments, LessonBlock } from './SqlCourseData';
import { SYLLABUS } from '../../SqlCoursePage';
import { SyllabusModule } from '../../../../types';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  moduleId: string;
  page: number;
}

const SqlModuleRenderer: React.FC<Props> = ({ moduleId, page }) => {
  const moduleItem = SYLLABUS.find((m: SyllabusModule) => m.id === moduleId);
  const itemId = moduleItem ? moduleItem.items[page - 1]?.id : '';

  if (!itemId) {
    return <div className={styles.contentArea}>Item not found</div>;
  }

  // 1. Quizzes
  if (itemId.endsWith('-quiz')) {
    const questions = sqlQuizzes[itemId] || [];
    return <ModuleQuiz moduleId={`sql-${moduleId}`} questions={questions} />;
  }

  // 2. Assignments
  if (itemId.endsWith('-assignment')) {
    const assignment = sqlAssignments[itemId];
    if (!assignment) {
      return (
        <div style={{ padding: '24px' }}>
          <h2>Assignment</h2>
          <p>Assignment content is being prepared.</p>
        </div>
      );
    }
    return <ModuleAssignment title={assignment.title} questions={assignment.questions} />;
  }

  // 3. Standard Lesson or Capstone
  const lessonData = sqlLessons[itemId];

  if (!lessonData) {
    return (
      <div className={styles.contentArea}>
        <h2>{itemId}</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Detailed content for this lesson is coming soon!
        </p>
      </div>
    );
  }

  return (
    <div className={styles.contentArea}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--heading)' }}>
        {lessonData.title}
      </h2>
      
      {lessonData.content.map((block: LessonBlock, idx: number) => {
        if (block.type === 'text') {
          return (
            <p key={idx} style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', color: 'var(--text)' }}>
              {block.value}
            </p>
          );
        }
        
        if (block.type === 'code') {
          return (
            <div key={idx} style={{ marginBottom: '24px' }}>
              <CodeSnippet 
                language={block.language || 'sql'} 
                code={block.value} 
                isRunnable={false} 
              />
            </div>
          );
        }

        if (block.type === 'alert') {
          return (
            <div key={idx} style={{ 
              background: 'var(--bg-surface-2)', 
              borderLeft: '4px solid var(--accent)', 
              padding: '16px', 
              marginBottom: '20px',
              borderRadius: '0 8px 8px 0'
            }}>
              <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--heading)' }}>
                Note:
              </strong>
              <p style={{ margin: 0, color: 'var(--text)' }}>{block.value}</p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default SqlModuleRenderer;
