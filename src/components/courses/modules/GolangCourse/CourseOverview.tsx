import React from 'react';

const CourseOverview: React.FC = () => {
  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 16px' }}>
      <div style={{ padding: '24px 0', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--heading)' }}>Welcome to Golang Engineering</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          Learn Google's Go programming language from scratch. You will master standard syntax syntax variables, parallel processing with goroutines/channels, and construct REST microservices using Gin and SQL connection pools.
        </p>
        
        <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--heading)' }}>Learning Outcomes</h2>
        <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
          <li>Write clear, idiomatic, clean Go codebase layouts</li>
          <li>Implement parallel concurrent workers with Channels</li>
          <li>Deploy microservices routed using the Gin web framework</li>
        </ul>

        <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--heading)' }}>Prerequisites</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Basic logic loop and programming understanding is helpful.
        </p>
      </div>
    </div>
  );
};

export default CourseOverview;
