import React from 'react';
import ModuleQuiz from '../../shared/ModuleQuiz';
import ModuleAssignment from '../../shared/ModuleAssignment';
import { SyllabusModule } from '../../../../types';
import { MarketingBlock, MarketingCourseContent } from './types';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  syllabus: SyllabusModule[];
  content: MarketingCourseContent;
  moduleId: string;
  page: number;
}

const Block: React.FC<{ block: MarketingBlock }> = ({ block }) => {
  switch (block.type) {
    case 'heading':
      return (
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 700,
            margin: '26px 0 10px',
            color: 'var(--heading, var(--text-primary))',
          }}
        >
          {block.value}
        </h3>
      );

    case 'text':
      return (
        <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '14px', color: 'var(--text)' }}>
          {block.value}
        </p>
      );

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag
          style={{
            margin: '0 0 16px',
            paddingLeft: '22px',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
            fontSize: '14.5px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
          }}
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </Tag>
      );
    }

    case 'alert':
      return (
        <div
          style={{
            background: 'var(--bg-surface-2)',
            borderLeft: '4px solid var(--accent)',
            padding: '14px 16px',
            marginBottom: '18px',
            borderRadius: '0 8px 8px 0',
          }}
        >
          <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--heading, var(--text-primary))' }}>
            In practice
          </strong>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--text)' }}>
            {block.value}
          </p>
        </div>
      );

    case 'example':
      return (
        <div
          style={{
            background: 'var(--bg-surface-2)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '16px',
            marginBottom: '18px',
          }}
        >
          <h4 style={{ margin: '0 0 8px', fontSize: '13.5px', color: 'var(--accent)' }}>
            {block.title}
          </h4>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              whiteSpace: 'pre-wrap',
            }}
          >
            {block.value}
          </p>
        </div>
      );

    case 'table':
      return (
        <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '13.5px',
              border: '1px solid var(--border)',
            }}
          >
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '10px 12px',
                      background: 'var(--bg-surface-2)',
                      borderBottom: '1px solid var(--border)',
                      color: 'var(--heading, var(--text-primary))',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: '10px 12px',
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                        verticalAlign: 'top',
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
};

const MarketingModuleRenderer: React.FC<Props> = ({ syllabus, content, moduleId, page }) => {
  const module = syllabus.find((m) => m.id === moduleId);
  const item = module?.items[page - 1];

  if (!item) {
    return <div className={styles.tabContent}>Item not found.</div>;
  }

  if (item.id.endsWith('-quiz')) {
    const questions = content.quizzes[item.id] ?? [];
    return (
      <ModuleQuiz
        // Syllabus module ids already carry the course prefix ("seo-m1",
        // "dm-m1"), so they are unique across courses without further wrapping.
        moduleId={moduleId}
        title={module?.title ? `${module.title} — Quiz` : 'Module Quiz'}
        questions={questions}
      />
    );
  }

  if (item.id.endsWith('-assignment')) {
    const assignment = content.assignments[item.id];
    if (!assignment) {
      return <div className={styles.tabContent}>Assignment not found.</div>;
    }
    return <ModuleAssignment title={assignment.title} questions={assignment.questions} />;
  }

  const lesson = content.lessons[item.id];
  if (!lesson) {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>{item.title}</h2>
        <p className={styles.paragraph}>
          This lesson is being written and will be published shortly.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>{lesson.title}</h2>

      <p
        style={{
          fontSize: '13.5px',
          color: 'var(--text-secondary)',
          marginBottom: '20px',
          paddingBottom: '14px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <strong style={{ color: 'var(--accent)' }}>By the end of this lesson: </strong>
        {lesson.objective}
      </p>

      {lesson.content.map((block, i) => (
        <Block key={i} block={block} />
      ))}

      {lesson.takeaways.length > 0 && (
        <>
          <h3 className={styles.subtitle}>Key takeaways</h3>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              paddingLeft: '20px',
              fontSize: '13.5px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
            }}
          >
            {lesson.takeaways.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MarketingModuleRenderer;
