import React, { useState, useEffect } from 'react';
import CodeSnippet from '../../../common/CodeSnippet';
import ModuleQuiz from '../../shared/ModuleQuiz';
import ModuleAssignment from '../../shared/ModuleAssignment';
import { SYLLABUS } from '../../TestingCoursePage';
import { SyllabusModule } from '../../../../types';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  moduleId: string;
  page: number;
}

const renderFormattedTheory = (text: string) => {
  const parts = text.split(/(```[\s\S]*?```)/g);

  return parts.map((part, idx) => {
    if (part.startsWith('```')) {
      const lines = part.split('\n');
      const firstLine = lines[0];
      const language = firstLine.replace('```', '').trim() || 'code';
      const code = lines.slice(1, -1).join('\n');
      return (
        <CodeSnippet 
          key={idx} 
          title={language === 'javascript' ? 'Test.js' : 'Code Block'} 
          code={code} 
          language={language}
          isRunnable={false}
        />
      );
    } else {
      const paragraphs = part.split('\n');
      return paragraphs.map((para, pIdx) => {
        if (!para.trim()) return null;

        const inlineParts = para.split(/(\*\*.*?\*\*|`.*?`)/g);
        const parsedElements = inlineParts.map((inlinePart, iIdx) => {
          if (inlinePart.startsWith('**') && inlinePart.endsWith('**')) {
            return <strong key={iIdx} style={{ color: 'var(--text-primary)' }}>{inlinePart.slice(2, -2)}</strong>;
          } else if (inlinePart.startsWith('`') && inlinePart.endsWith('`')) {
            return <code key={iIdx} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: '6px', fontFamily: 'monospace', color: '#ef4444', fontSize: '90%' }}>{inlinePart.slice(1, -1)}</code>;
          } else {
            return inlinePart;
          }
        });

        const isListItem = /^\d+\.\s/.test(para) || para.trim().startsWith('-') || para.trim().startsWith('*');
        if (isListItem) {
          return (
            <div key={`${pIdx}`} style={{ margin: '8px 0 8px 16px', fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {parsedElements}
            </div>
          );
        }

        return (
          <p key={`${pIdx}`} className={styles.paragraph} style={{ margin: '0 0 14px' }}>
            {parsedElements}
          </p>
        );
      });
    }
  });
};

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

  const syllabusModule = SYLLABUS.find((m: SyllabusModule) => m.id === moduleId);
  const itemId = syllabusModule?.items[page - 1]?.id ?? '';
  const itemTitle = syllabusModule?.items[page - 1]?.title ?? '';

  let pageType: 'lesson' | 'quiz' | 'assignment' | 'missing' = 'lesson';
  let activeLesson: any = null;

  if (itemId.endsWith('-quiz')) {
    pageType = 'quiz';
  } else if (
    itemId.endsWith('-assignment') || 
    itemId.endsWith('-proj') || 
    itemId.includes('-p') || 
    itemId.endsWith('-final') ||
    itemId.startsWith('interview-') ||
    itemId.startsWith('assessment-') ||
    itemId.startsWith('cert-')
  ) {
    pageType = 'assignment';
  } else {
    activeLesson = moduleData.lessons?.find((l: any) => l.id === itemId) ?? null;
    pageType = activeLesson ? 'lesson' : 'missing';
  }

  if (pageType === 'missing') {
    return (
      <div className={styles.contentArea}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--heading)' }}>{itemTitle || 'Lesson'}</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          This lesson is being written and will be published shortly. Continue with the next item in the sidebar in the meantime.
        </p>
      </div>
    );
  }

  // 1. Quizzes
  if (pageType === 'quiz') {
    const questions = moduleData.quiz || [];
    return <ModuleQuiz key={itemId} moduleId={`testing-${moduleId}`} questions={questions} />;
  }

  // 2. Assignments & Projects
  if (pageType === 'assignment') {
    const assignment = moduleData.assignment || { prompts: [] };
    const prompts = assignment.prompts.length > 0 ? assignment.prompts : [itemTitle];
    return <ModuleAssignment key={itemId} moduleId={`testing-${moduleId}`} title="Module Practice Set" questions={prompts} />;
  }

  // 3. Lessons
  if (pageType === 'lesson' && activeLesson) {
    return (
      <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 16px' }}>
        <div className={styles.contentArea}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--heading)' }}>
            {activeLesson.title}
          </h2>
          <div style={{ marginBottom: '20px' }}>{renderFormattedTheory(activeLesson.theory)}</div>
          
          {activeLesson.objectives && activeLesson.objectives.length > 0 && (
            <>
              <h3 className={styles.subtitle} style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: 'var(--heading)' }}>Learning Objectives</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                {activeLesson.objectives.map((obj: string, i: number) => <li key={i}>{obj}</li>)}
              </ul>
            </>
          )}

          {activeLesson.syntax && (
            <>
              <h3 className={styles.subtitle} style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: 'var(--heading)' }}>Syntax Definition</h3>
              <CodeSnippet title="Syntax Definition" code={activeLesson.syntax} language="javascript" isRunnable={false} />
            </>
          )}

          {activeLesson.takeaways && activeLesson.takeaways.length > 0 && (
            <>
              <h3 className={styles.subtitle} style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: 'var(--heading)' }}>Key Takeaways</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                {activeLesson.takeaways.map((takeaway: string, i: number) => <li key={i}>{takeaway}</li>)}
              </ul>
            </>
          )}
        </div>
      </div>
    );
  }

  return <div className={styles.contentArea}>Content not available.</div>;
};

export default TestingModuleRenderer;
