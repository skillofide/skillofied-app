import React, { useState, useEffect } from 'react';
import CodeSnippet from '../../../common/CodeSnippet';
import ModuleQuiz from '../../shared/ModuleQuiz';
import ModuleAssignment from '../../shared/ModuleAssignment';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  moduleId: string;
  page: number;
}

const TestingModuleRenderer: React.FC<Props> = ({ moduleId, page }) => {
  const [courseData, setCourseData] = useState<any>(null);

  useEffect(() => {
    import('./TestingCourseData').then((module) => {
      setCourseData(module.TESTING_COURSE_DATA);
    });
  }, []);

  if (!courseData) {
    return (
      <div className={styles.contentArea} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
        <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--accent)', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }} />
      </div>
    );
  }

  const moduleData = courseData[moduleId];
  if (!moduleData) {
    return <div className={styles.contentArea}>Item not found</div>;
  }

  // 1. Quizzes
  if (moduleId === 'm1' && page === 3) {
    const questions = moduleData.quiz || [];
    return <ModuleQuiz key={moduleId} moduleId={`testing-${moduleId}`} questions={questions} />;
  }
  if (moduleId === 'm2' && page === 3) {
    const questions = moduleData.quiz || [];
    return <ModuleQuiz key={moduleId} moduleId={`testing-${moduleId}`} questions={questions} />;
  }

  // 2. Assignments
  if (moduleId === 'm1' && page === 4) {
    const assignment = moduleData.assignment || { prompts: [] };
    return <ModuleAssignment key={moduleId} title="Module Practice Set" questions={assignment.prompts} />;
  }
  if (moduleId === 'm2' && page === 4) {
    const assignment = moduleData.assignment || { prompts: [] };
    return <ModuleAssignment key={moduleId} title="Module Practice Set" questions={assignment.prompts} />;
  }

  // 3. Lessons
  const lessons = moduleData.lessons || [];
  const lessonData = lessons[page - 1];
  if (!lessonData) {
    return (
      <div className={styles.contentArea}>
        <h2>Lesson Content</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Content loading...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 16px' }}>
      <div className={styles.contentArea}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--heading)' }}>
          {lessonData.title}
        </h2>
        <p style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '16px', color: 'var(--text)' }}>
          {lessonData.theory}
        </p>
        {lessonData.syntax && (
          <div style={{ marginBottom: '24px' }}>
            <CodeSnippet language="javascript" code={lessonData.syntax} isRunnable={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestingModuleRenderer;
