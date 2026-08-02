import React from 'react';

const CourseOverview: React.FC = () => {
  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 16px' }}>
      <div style={{ padding: '24px 0', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--heading)' }}>Welcome to Full Stack Engineering</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Become a complete engineer. You will learn to construct responsive frontend clients, scalable API servers, and configure complex relational database models.
        </p>
        
        <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--heading)' }}>Learning Outcomes</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          <li>Build modern client UIs using React & CSS Grid</li>
          <li>Implement REST API endpoints matching specifications</li>
          <li>Model normalized PostgreSQL database relationships</li>
        </ul>

        <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--heading)' }}>Prerequisites</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          No coding experience is required. We start from absolute ground zero.
        </p>
      </div>
    </div>
  );
};

export default CourseOverview;
