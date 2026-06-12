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
          <h2 className={styles.cardTitle}>Welcome to Frontend Development Mastery!</h2>
          <p className={styles.paragraph}>
            Welcome student! You are about to embark on an intensive journey to master professional frontend software engineering. This course has been structured to guide you from absolute web basics up to deploying advanced React single-page applications.
          </p>
          <p className={styles.paragraph}>
            Each module includes high-fidelity explanations, visual workflow diagrams, coding practice sets, quizzes, and projects to evaluate your progress.
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
            Watch this brief intro video to align on what we'll build, how to ask questions, and how to set up your learning routine:
          </p>
          <div className={styles.videoContainer}>
            <div className={styles.videoMock}>
              <button className={styles.videoPlayBtn} aria-label="Play video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </button>
              <span className={styles.videoTitle}>Skillofied Intro Video - Playback (03:15)</span>
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
              <p className={styles.outcomeText}>Build completely responsive, mobile-first websites using modern HTML/CSS paradigms.</p>
            </div>
            <div className={styles.outcomeCard}>
              <span className={styles.outcomeCheck}>✓</span>
              <p className={styles.outcomeText}>Understand programming fundamentals in ES6+ JavaScript, DOM manipulation, asynchronous fetching, and client stores.</p>
            </div>
            <div className={styles.outcomeCard}>
              <span className={styles.outcomeCheck}>✓</span>
              <p className={styles.outcomeText}>Build highly performant component-based web apps with React, Vite, state managers, and React Router.</p>
            </div>
            <div className={styles.outcomeCard}>
              <span className={styles.outcomeCheck}>✓</span>
              <p className={styles.outcomeText}>Configure developer pipelines with Git/GitHub, deploy portfolios to cloud services, and align with SEO checklists.</p>
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
              <p className={styles.stepText}><strong>Basics (Modules 1-5)</strong>: Web flow, HTML, CSS, Flexbox/Grid, and responsive layout styling.</p>
            </div>
            <div className={styles.stepBlock}>
              <span className={styles.stepNum}>B</span>
              <p className={styles.stepText}><strong>JavaScript (Modules 6-9)</strong>: Code logic, loops, DOM events, promises, async/await, and REST APIs.</p>
            </div>
            <div className={styles.stepBlock}>
              <span className={styles.stepNum}>C</span>
              <p className={styles.stepText}><strong>Git (Module 10)</strong>: Git command lines, merging, pull requests, and code version control.</p>
            </div>
            <div className={styles.stepBlock}>
              <span className={styles.stepNum}>D</span>
              <p className={styles.stepText}><strong>React (Modules 11-16)</strong>: Props/states, Hooks (useEffect, useMemo), routing, CRUD fetching, Context, and Redux.</p>
            </div>
            <div className={styles.stepBlock}>
              <span className={styles.stepNum}>E</span>
              <p className={styles.stepText}><strong>Capstone (Module 17 + Projects)</strong>: Cloud optimization, builds deployment, SEO, and major projects evaluations.</p>
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
            <li>A stable internet connection to load resources and watch lessons.</li>
            <li>Basic computer literacy (creating directories, downloading files, using browsers).</li>
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
            <li><strong>MDN Web Docs</strong>: The ultimate reference documentation for HTML, CSS, and JS.</li>
            <li><strong>React Official Documentation</strong>: Reference guides for modern functional hooks.</li>
            <li><strong>W3Schools CSS Flexbox/Grid</strong>: Visual sandboxes to learn layouts.</li>
            <li><strong>Skillofied Discord Guild</strong>: Chat with mentors and submit queries to coding channels.</li>
          </ul>
        </div>
      );

    default:
      return null;
  }
};

export default CourseOverview;
