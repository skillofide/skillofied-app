import React from 'react';

const CourseOverview: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto', color: 'var(--text)' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--heading)' }}>Welcome to SQL Mastery</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
        Welcome to the SQL Mastery course! This course is designed to take you from a complete beginner to an industry-ready backend developer. You'll learn the fundamentals of databases, deep dive into complex SQL commands, and finally build a capstone project mirroring real-world architectures.
      </p>
      
      <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--heading)' }}>Learning Outcomes</h2>
      <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
        <li>Understand RDBMS and database architectures</li>
        <li>Master DDL, DML, and DQL operations</li>
        <li>Write complex queries utilizing Joins, Subqueries, and Window Functions</li>
        <li>Design normalized databases up to BCNF</li>
        <li>Connect Node.js with SQL databases and use ORMs</li>
      </ul>

      <h2 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--heading)' }}>Prerequisites</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        No prior database experience is required. Basic programming knowledge is helpful but not strictly necessary.
      </p>
    </div>
  );
};

export default CourseOverview;
