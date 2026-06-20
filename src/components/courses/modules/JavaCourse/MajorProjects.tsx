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
    title: 'Project 1: Student Grade Calculator',
    desc: 'Develop a command-line Java application that calculates student grades based on multiple subject marks inputs, displaying averages, totals, and final letter grades.',
    scope: [
      'Read dynamic subject marks inputs using the Scanner class.',
      'Check validation for inputs bounds (0 to 100).',
      'Compute sum, average percentage, and map to grades A, B, C, D, F.'
    ],
    techStack: ['Java SE', 'Scanner Class', 'Console System'],
    tips: 'Ensure correct double-division logic while calculating the average, and handle potential scanner parsing exceptions.'
  },
  {
    title: 'Project 2: Banking System',
    desc: 'Construct a console-based bank accounts manager allowing users to create accounts, check balances, deposit funds, withdraw funds, and view transactional logs.',
    scope: [
      'Implement object encapsulation with private variables.',
      'Handle deposits and withdrawals validation logic (prevent overdrafts).',
      'Track transactions using an array of Strings or transaction structures.'
    ],
    techStack: ['Java Class Encapsulation', 'Control statements', 'Scanner loops'],
    tips: 'Use dynamic IDs generator logic and define specific methods for checkings and withdraw checks.'
  },
  {
    title: 'Project 3: Library Management System',
    desc: 'Design an application representing a library, housing details of books and patrons. Support borrowing actions, book returns, search parameters, and inventory management.',
    scope: [
      'Build relationships between Book, Patron, and Library classes.',
      'Track borrowing state flags.',
      'Use methods overloading to search books by title or author name.'
    ],
    techStack: ['Constructors', 'Object References', 'OOP Inheritance'],
    tips: 'Inherit reference entities dynamically and map borrow states correctly using boolean fields.'
  },
  {
    title: 'Project 4: Employee Management System',
    desc: 'Write an administration system storing details of salaried and hourly employees. Use polymorphism to calculate payrolls dynamically.',
    scope: [
      'Define an abstract Employee base class.',
      'Derive SalariedEmployee and HourlyEmployee classes.',
      'Override calculateSalary() in subclasses to demonstrate polymorphism.'
    ],
    techStack: ['Abstract Classes', 'Method Overriding', 'Polymorphic Arrays'],
    tips: 'Use array lists of base references (Employee[]) and invoke methods dynamically inside print loops.'
  },
  {
    title: 'Project 5: File Management Application',
    desc: 'Create a console application that reads data records from database text files, parses strings, modifies data rows, and writes back outputs to disk.',
    scope: [
      'Read system configurations using BufferedReader.',
      'Write data modifications using BufferedWriter.',
      'Configure try-with-resources to release file pointers.'
    ],
    techStack: ['BufferedReader/Writer', 'File IO', 'Exceptions Handling'],
    tips: 'Ensure you split CSV columns correctly using regex separators, and handle missing file pathways gracefully.'
  },
  {
    title: 'Project 6: Student Management System (JDBC)',
    desc: 'Establish database communication inside your Java CLI. Hook into a MySQL or PostgreSQL database, inserting, updating, deleting, and querying student records.',
    scope: [
      'Configure JDBC Postgres connection URL properties.',
      'Integrate PreparedStatements dynamically parameterized to query records safely.',
      'Parse ResultSet maps and serialize details to objects.'
    ],
    techStack: ['JDBC Driver', 'PostgreSQL', 'PreparedStatements'],
    tips: 'Register driver dependencies correctly in Maven and write clean close connections protocols.'
  },
  {
    title: 'Project 7: Spring Boot REST API',
    desc: 'Transition your logic to the web! Launch a local Spring Boot server, configure REST routing controllers, and expose endpoints to complete CRUD operations in-memory.',
    scope: [
      'Define request controller routes using @RestController annotation.',
      'Expose GET, POST, PUT, and DELETE actions.',
      'Use @Autowired dependencies injection mapping controllers to services.'
    ],
    techStack: ['Spring Boot Starter Web', 'Dependency Injection', 'REST API JSON'],
    tips: 'Validate payloads using standard validation annotations and test your endpoints using API clients like Postman.'
  },
  {
    title: 'Project 8: E-Commerce Backend',
    desc: 'Build an enterprise backend representing a digital catalog and shopping cart. Integrate database mappings with Hibernate and JPA entities.',
    scope: [
      'Define Entity mappings with relational constraints (@ManyToOne).',
      'Extend JpaRepository templates for custom CRUD queries.',
      'Construct a global Exception Handler using advice annotations.'
    ],
    techStack: ['Spring Data JPA', 'PostgreSQL Integration', 'Hibernate ORM'],
    tips: 'Turn on SQL logs in application.properties to audit what queries Hibernate constructs dynamically.'
  },
  {
    title: 'Final Capstone Project: Learning Management System Backend',
    desc: 'Compile all your skills! Design, code, and secure a complete backend for a Learning Management System. Support course registers, student progress checkpoints, protected routes, and database entities.',
    scope: [
      'Integrate Spring Security filters disabling CSRF and enabling custom CORS.',
      'Configure JWT token creation, signature validation, and claims parsing.',
      'Encrypt passwords in databases using BCrypt.',
      'Write Dockerfiles compiling JAR packages into container images.'
    ],
    techStack: ['Spring Security + JWT', 'BCrypt Encoder', 'Docker Containers', 'AWS Beanstalk'],
    tips: 'Keep keys securely separated using environment configurations, and write detailed endpoint tests.'
  }
];

const MajorProjects: React.FC<Props> = ({ page }) => {
  const [repoLink, setRepoLink] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const idx = Math.min(Math.max(0, page - 1), PROJECTS_LIST.length - 1);
  const project = PROJECTS_LIST[idx];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repoLink.trim().length > 10) {
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>{project.title}</h2>
      <p className={styles.paragraph}>{project.desc}</p>

      <h3 className={styles.subtitle}>Project Scope & Requirements</h3>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
        {project.scope.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>

      <h3 className={styles.subtitle}>Suggested Technology Stack</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
        {project.techStack.map((tech, i) => (
          <span key={i} style={{ padding: '4px 10px', background: 'rgba(70, 72, 212, 0.08)', color: 'var(--accent)', border: '1px solid var(--accent)', borderRadius: '99px', fontSize: '11px', fontWeight: 'bold' }}>
            {tech}
          </span>
        ))}
      </div>

      <h3 className={styles.subtitle}>Architectural Tips</h3>
      <p className={styles.paragraph} style={{ fontStyle: 'italic', fontSize: '13px' }}>
        💡 {project.tips}
      </p>

      <h3 className={styles.subtitle}>Project Submission Portal</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ background: 'var(--bg-surface-2)', padding: '20px', borderRadius: '12px', border: '1px dashed var(--border)', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <label style={{ fontSize: '12.5px', fontWeight: '700', color: 'var(--text-primary)' }}>GitHub Repository URL:</label>
          <input 
            type="url" 
            className={styles.inputField} 
            placeholder="https://github.com/username/project-repo" 
            value={repoLink} 
            onChange={e => setRepoLink(e.target.value)} 
            required 
          />
          <button type="submit" className={styles.saveBtn} disabled={repoLink.trim().length < 10}>
            Submit Repository
          </button>
        </form>
      ) : (
        <div className={styles.completeBadge} style={{ marginTop: '20px' }}>
          <span>✓ Project Repository submitted successfully! Mentors will review your source code shortly. 🎉</span>
        </div>
      )}
    </div>
  );
};

export default MajorProjects;
