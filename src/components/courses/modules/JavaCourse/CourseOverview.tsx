import React from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  page: number;
}

const CourseOverview: React.FC<Props> = ({ page }) => {
  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Welcome to Java Programming Mastery!</h2>
          <p className={styles.paragraph}>
            Welcome student! You are about to embark on an intensive journey to master professional Java software engineering. This course has been structured to guide you from absolute programming basics up to building enterprise REST APIs using Spring Boot, securing endpoints, and deploying production code.
          </p>
          <p className={styles.paragraph}>
            Each module includes high-fidelity explanations, code examples, compiler outputs, interactive practice tasks, quizzes, and assignments to evaluate your learning progress.
          </p>
          <h3 className={styles.subtitle}>Let's Hustle!</h3>
          <p className={styles.paragraph}>
            Select <strong>Course Introduction Video</strong> or expand <strong>Module 1</strong> in the syllabus navigator to start your learning!
          </p>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Course Introduction</h2>
          <p className={styles.paragraph}>
            Watch this brief intro video to align on what we'll build, how to compile Java code, and how to setup your study routines:
          </p>
          <div className={styles.videoContainer}>
            <div className={styles.videoMock}>
              <button className={styles.videoPlayBtn} aria-label="Play video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </button>
              <span className={styles.videoTitle}>Java Mastery Course Intro - Playback (04:45)</span>
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Learning Outcomes</h2>
          <p className={styles.paragraph}>
            By the end of this comprehensive specialization, you will be fully qualified to:
          </p>
          <div className={styles.outcomesGrid}>
            <div className={styles.outcomeCard}>
              <span className={styles.outcomeCheck}>✓</span>
              <p className={styles.outcomeText}>Solve complex problems using Core Java, arrays, strings, collections, and algorithms.</p>
            </div>
            <div className={styles.outcomeCard}>
              <span className={styles.outcomeCheck}>✓</span>
              <p className={styles.outcomeText}>Apply advanced OOP principles (abstraction, interfaces, polymorphism) to design scalable software architectures.</p>
            </div>
            <div className={styles.outcomeCard}>
              <span className={styles.outcomeCheck}>✓</span>
              <p className={styles.outcomeText}>Build production-ready REST APIs using Spring Boot, Spring Data JPA, Hibernate, and SQL databases.</p>
            </div>
            <div className={styles.outcomeCard}>
              <span className={styles.outcomeCheck}>✓</span>
              <p className={styles.outcomeText}>Secure applications using Spring Security and JWT token-based authentication.</p>
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Course Roadmap</h2>
          <p className={styles.paragraph}>
            Here is your learning trajectory across the course modules:
          </p>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}>
              <span className={styles.stepNum}>A</span>
              <p className={styles.stepText}><strong>Basics & Logic (Modules 1-5)</strong>: Setup tools, syntax variables, Scanner controls, loop cycles, and method operations.</p>
            </div>
            <div className={styles.stepBlock}>
              <span className={styles.stepNum}>B</span>
              <p className={styles.stepText}><strong>Core Concepts (Modules 6-10)</strong>: Multi-dimensional arrays, String builder tools, OOP pillars, Exceptions try-catch, and Collection frameworks.</p>
            </div>
            <div className={styles.stepBlock}>
              <span className={styles.stepNum}>C</span>
              <p className={styles.stepText}><strong>Advanced Java (Modules 11-15)</strong>: File handling reader/writers, Multithreading synchronization, Stream APIs (Java 8), JDBC database drivers, and DSAs.</p>
            </div>
            <div className={styles.stepBlock}>
              <span className={styles.stepNum}>D</span>
              <p className={styles.stepText}><strong>Spring Boot APIs (Modules 16-18)</strong>: REST controllers, services, repositories dependency injection, JPA Hibernate entities, validation, and JWT security.</p>
            </div>
            <div className={styles.stepBlock}>
              <span className={styles.stepNum}>E</span>
              <p className={styles.stepText}><strong>Major Projects & Deployment (Module 19 + Evaluation)</strong>: Packaging JAR executable applications, Docker containers setup, AWS cloud hosting, and capstone evaluations.</p>
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Prerequisites</h2>
          <p className={styles.paragraph}>
            No prior coding experience is required! This course starts from absolute ground zero. You only need:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
            <li>A desktop computer or laptop (Windows, Mac, or Linux).</li>
            <li>A stable internet connection to run development downloads.</li>
            <li>Basic computer literacy (creating folders, running commands).</li>
            <li>Patience, commitment, and a growth mindset!</li>
          </ul>
        </div>
      );

    case 6:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Course Resources</h2>
          <p className={styles.paragraph}>
            Here are several recommended references to accompany your learning pathway:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
            <li><strong>Oracle Java Tutorials</strong>: The official source for core Java tutorials.</li>
            <li><strong>Baeldung</strong>: Exceptional guides on Spring Boot and Java topics.</li>
            <li><strong>Spring Framework Guides</strong>: Official documentation for Spring REST and Data JPA.</li>
            <li><strong>Knovate Discord Guild</strong>: Chat with mentors and submit queries to coding channels.</li>
          </ul>
        </div>
      );

    default:
      return null;
  }
};

export default CourseOverview;
