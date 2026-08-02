import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  page: number;
}

interface ProjectData {
  title: string;
  desc: string;
  scope: string[];
  techStack: string[];
  tips: string;
}

const PROJECTS_LIST: ProjectData[] = [
  {
    title: 'Project 1: CLI Calculator',
    desc: 'Develop a command-line Go application performing multi-digit evaluations, operations logging, and input validations.',
    scope: [
      'Parse math operators (+, -, *, /) and inputs.',
      'Check validation for divisions-by-zero.',
      'Log calculated audit histories inside files.'
    ],
    techStack: ['Go CLI', 'os Package', 'bufio Scanner'],
    tips: 'Use string formatting methods and handle pointer inputs cleanly.'
  },
  {
    title: 'Project 2: Student Management System',
    desc: 'Construct a command-line system managing student records using structs, receiver methods, and maps.',
    scope: [
      'Define Student and Classroom structs.',
      'Implement method receivers to add/remove profiles.',
      'Use maps for unique lookup lookups.'
    ],
    techStack: ['Structs', 'Receiver Methods', 'Go Maps'],
    tips: 'Implement map lookups using check exist validation checks.'
  },
  {
    title: 'Project 3: File Manager CLI',
    desc: 'Create a command line manager allowing directories browsing, reading file lines, writing strings, and file stats printing.',
    scope: [
      'Read files dynamically using os/bufio.',
      'Create sub-directories and check stats.',
      'Write outputs concurrently.'
    ],
    techStack: ['os Package', 'io/ioutil', 'bufio'],
    tips: 'Close all open file streams using defer statements.'
  },
  {
    title: 'Project 4: Task Manager API',
    desc: 'Build a REST API to create, read, update, and delete tasks in-memory using net/http routers.',
    scope: [
      'Build net/http handlers.',
      'Expose GET, POST, PUT, DELETE endpoints.',
      'Parse incoming JSON request payloads.'
    ],
    techStack: ['net/http', 'encoding/json', 'REST Spec'],
    tips: 'Ensure correct content-type header values are returned.'
  },
  {
    title: 'Project 5: URL Shortener API',
    desc: 'Develop a url shortener service generating hash codes and redirecting users dynamically.',
    scope: [
      'Write hash generator logic.',
      'Store hash-to-url values in local maps.',
      'Route redirects using http.Redirect.'
    ],
    techStack: ['net/http', 'Custom Hashes', 'Redirect Handlers'],
    tips: 'Generate unique hashes to avoid collisions.'
  },
  {
    title: 'Project 6: Authentication Service',
    desc: 'Create a security service using Bcrypt password hashing and signed JWT validation.',
    scope: [
      'Hash password inputs.',
      'Generate Signed JWT tokens.',
      'Write JWT verification routers.'
    ],
    techStack: ['Bcrypt', 'golang-jwt/jwt', 'Middleware'],
    tips: 'Ensure signing keys are loaded from environment configurations.'
  },
  {
    title: 'Project 7: E-Commerce REST API',
    desc: 'Develop a rich catalog REST API built with PostgreSQL database and pgx pool drivers.',
    scope: [
      'Configure connection pools.',
      'Map catalog entities.',
      'Write parameterized CRUD queries.'
    ],
    techStack: ['Gin Web Framework', 'PostgreSQL', 'pgx Driver'],
    tips: 'Close connection pools on application shutdowns.'
  },
  {
    title: 'Project 8: Blog Backend API',
    desc: 'Construct a multi-user blogging engine using relational migrations and repository pattern.',
    scope: [
      'Write schema migration profiles.',
      'Map repositories interfaces.',
      'Run relational transactions.'
    ],
    techStack: ['Gin Framework', 'Migrations', 'Repository Interface'],
    tips: 'Implement rollback operations inside database transaction handlers.'
  },
  {
    title: 'Final Capstone Project: Learning Management System Backend',
    desc: 'Construct a backend system managing courses, modules, assessments, and authentication modules matching real world architectures.',
    scope: [
      'Build gRPC microservice interfaces.',
      'Integrate NATS messaging queues.',
      'Dockerize setup into compose modules.'
    ],
    techStack: ['gRPC/Protobuf', 'NATS Messaging', 'Docker Compose'],
    tips: 'Write comprehensive table-driven tests checking API routes.'
  }
];

const MajorProjects: React.FC<Props> = ({ page }) => {
  const [submissionLink, setSubmissionLink] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const project = PROJECTS_LIST[page - 1] || PROJECTS_LIST[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submissionLink.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>{project.title}</h2>
      <p className={styles.paragraph} style={{ fontSize: '15px', color: 'var(--text)' }}>{project.desc}</p>
      
      <div style={{ marginTop: '20px' }}>
        <h3 className={styles.subtitle}>Project Scope & Requirements</h3>
        <ul style={{ paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {project.scope.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3 className={styles.subtitle}>Suggested Tech Stack</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.techStack.map((tech, idx) => (
            <span key={idx} style={{ padding: '4px 10px', background: 'var(--bg-secondary)', borderRadius: '6px', fontSize: '12px', border: '1px solid var(--border)' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(70, 72, 212, 0.04)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
        <h4 style={{ margin: '0 0 6px 0', fontSize: '14px', fontWeight: 600 }}>💡 Mentor Implementation Tips</h4>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>{project.tips}</p>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: 'var(--bg-surface-2)', borderRadius: '12px', border: '1px solid var(--border)' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>📤 Submit Project Repository Link</h4>
        {submitted ? (
          <div style={{ color: '#10b981', fontWeight: 600, fontSize: '14px' }}>
            ✓ Project link submitted successfully! Our mentors will review your code shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
            <input 
              className={styles.inputField} 
              placeholder="GitHub Repository URL (e.g., https://github.com/...)" 
              value={submissionLink}
              onChange={e => setSubmissionLink(e.target.value)}
              required
            />
            <button className={styles.saveBtn} type="submit">Submit Link</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MajorProjects;
