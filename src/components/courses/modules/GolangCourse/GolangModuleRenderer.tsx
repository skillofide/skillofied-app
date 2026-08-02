import React, { useState, useEffect } from 'react';
import CodeSnippet from '../../../common/CodeSnippet';
import ModuleQuiz from '../../shared/ModuleQuiz';
import ModuleAssignment from '../../shared/ModuleAssignment';
import styles from '../../FrontendCoursePage.module.css';

import MajorProjects from './MajorProjects';
import InterviewPrep from './InterviewPrep';
import FinalAssessment from './FinalAssessment';
import Certification from './Certification';

interface Props {
  moduleId: string;
  page: number;
}

const GolangModuleRenderer: React.FC<Props> = ({ moduleId, page }) => {
  const [courseData, setCourseData] = useState<any>(null);

  useEffect(() => {
    import('./GolangCourseData').then((module) => {
      setCourseData(module.GOLANG_COURSE_DATA);
    });
  }, []);

  // Isolate non-module renders
  if (moduleId === 'projects') return <MajorProjects page={page} />;
  if (moduleId === 'interview') return <InterviewPrep page={page} />;
  if (moduleId === 'assessment') return <FinalAssessment page={page} />;
  if (moduleId === 'certification') return <Certification page={page} />;

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

  // Calculate length of lessons
  const lessons = moduleData.lessons || [];
  const totalLessons = lessons.length;

  // 1. Quizzes (Always active on page totalLessons + 1)
  if (page === totalLessons + 1) {
    const questions = moduleData.quiz || [];
    return <ModuleQuiz key={moduleId} moduleId={`golang-${moduleId}`} questions={questions} />;
  }

  // 2. Assignments (Always active on page totalLessons + 2)
  if (page === totalLessons + 2) {
    const assignment = moduleData.assignment || { prompts: [] };
    return <ModuleAssignment key={moduleId} title="Module Practice Set" questions={assignment.prompts} />;
  }

  // 3. Lessons
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
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px', color: 'var(--heading)' }}>
          {lessonData.title}
        </h2>
        <div style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '16px', color: 'var(--text)' }}>
          {lessonData.theory.split('\n').map((p: string, idx: number) => (
            <p key={idx} style={{ marginBottom: '12px' }}>{p}</p>
          ))}
        </div>
        {lessonData.syntax && (
          <div style={{ marginBottom: '24px' }}>
            <CodeSnippet language="go" code={lessonData.syntax} isRunnable={false} />
          </div>
        )}
        {lessonData.takeaways && lessonData.takeaways.length > 0 && (
          <div style={{ marginTop: '20px', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Key Takeaways</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--text-secondary)' }}>
              {lessonData.takeaways.map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '4px' }}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GolangModuleRenderer;
