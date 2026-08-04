import React from 'react';

const CourseOverview: React.FC = () => {
  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 16px' }}>
      <div style={{ padding: '24px 0', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--heading)' }}>Welcome to Software Testing & QA</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Learn complete QA processes. This course guides you from manual test case designs, defect tracking matrices, and STLC lifecycles up to automating end-to-end browser specifications using Selenium and Cypress.
        </p>
        
        <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--heading)' }}>Learning Outcomes</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          <li>Write professional test case definitions and track bugs in Jira</li>
          <li>Understand manual exploratory, system, and regression runs</li>
          <li>Construct automated browser execution scripts with Cypress</li>
        </ul>

        <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--heading)' }}>Prerequisites</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          None. No coding experience is required to start this program.
        </p>
      </div>
    </div>
  );
};

export default CourseOverview;
