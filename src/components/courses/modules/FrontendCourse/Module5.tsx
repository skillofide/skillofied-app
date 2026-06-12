import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const Module5: React.FC<Props> = ({ page }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  const quizQuestions = [
    { id: 1, question: 'Q1: What does "mobile-first" design mean?', options: ['A. Only design for mobile', 'B. Design for mobile first, then scale up', 'C. Mobile apps only', 'D. Use mobile frameworks'], correctAnswer: 'B. Design for mobile first, then scale up' },
    { id: 2, question: 'Q2: Which CSS feature enables responsive design?', options: ['A. @import', 'B. @media', 'C. @responsive', 'D. @mobile'], correctAnswer: 'B. @media' },
    { id: 3, question: 'Q3: What does the viewport meta tag do?', options: ['A. Sets page color', 'B. Controls how page scales on mobile devices', 'C. Adds navigation', 'D. Loads JavaScript'], correctAnswer: 'B. Controls how page scales on mobile devices' },
    { id: 4, question: 'Q4: What unit is relative to viewport width?', options: ['A. px', 'B. em', 'C. vw', 'D. rem'], correctAnswer: 'C. vw' },
  ];

  const handleSubmitQuiz = () => { let s = 0; quizQuestions.forEach(q => { if (quizAnswers[q.id] === q.correctAnswer) s++; }); setQuizScore(s); setQuizSubmitted(true); };

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 5.1: What is Responsive Design?</h2>
          <p className={styles.paragraph}><strong>Responsive Web Design</strong> is an approach where websites automatically adjust their layout, images, and content to fit any screen size — from large desktop monitors to small mobile phones.</p>
          <p className={styles.paragraph}>Over 60% of web traffic now comes from mobile devices. A website that doesn't work well on mobile is losing more than half its potential audience.</p>
          <h3 className={styles.subtitle}>The Three Pillars of Responsive Design</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}><span className={styles.stepNum}>1</span><p className={styles.stepText}><strong>Fluid Grids</strong>: Use percentages and <code>fr</code> units instead of fixed pixels for layout widths.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>2</span><p className={styles.stepText}><strong>Flexible Images</strong>: Images scale within their containers using <code>max-width: 100%</code>.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>3</span><p className={styles.stepText}><strong>Media Queries</strong>: Apply different CSS rules at different screen widths (breakpoints).</p></div>
          </div>
          <div className={styles.codeLabel}>HTML (Required Meta Tag)</div>
          <pre className={styles.codeBlock}><code>{`<!-- This MUST be in every responsive page -->
<meta name="viewport" 
  content="width=device-width, initial-scale=1.0">`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>⚠️ Critical</p>
            <p className={styles.tipBoxText}>Without the viewport meta tag, mobile browsers render the page at desktop width (typically 980px) and zoom out. Your media queries won't work properly.</p>
          </div>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 5.2: Mobile-First Design</h2>
          <p className={styles.paragraph}><strong>Mobile-First</strong> means writing your base CSS for mobile screens, then using <code>min-width</code> media queries to add styles as the screen gets larger.</p>
          <div className={styles.codeLabel}>CSS — Mobile-First Approach ✅</div>
          <pre className={styles.codeBlock}><code>{`/* Base styles (mobile) */
.container {
  padding: 16px;
}

.card-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Tablet and up (min-width: 768px) */
@media (min-width: 768px) {
  .container { padding: 24px; }
  .card-grid {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card { flex: 1 1 45%; }
}

/* Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
  .container { padding: 32px; max-width: 1200px; }
  .card { flex: 1 1 30%; }
}`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Why Mobile-First?</p>
            <p className={styles.tipBoxText}>Mobile-first loads less CSS on slower mobile connections. It forces you to prioritize content. And it's the industry standard approach recommended by Google.</p>
          </div>
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 5.3: Media Queries</h2>
          <p className={styles.paragraph}>Media queries let you apply CSS rules conditionally based on device characteristics like screen width, orientation, and resolution.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Common Breakpoints */
/* Mobile:  0 - 767px    (base styles) */
/* Tablet:  768px - 1023px */
/* Desktop: 1024px+       */

/* Min-width (mobile-first ✅) */
@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Max-width (desktop-first) */
@media (max-width: 767px) {
  /* Mobile overrides */
}

/* Combining conditions */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablet only */
}

/* Orientation */
@media (orientation: landscape) {
  /* Landscape mode */
}

/* Prefers dark mode */
@media (prefers-color-scheme: dark) {
  :root { --bg: #1a1a2e; --text: #e5e7eb; }
}`}</code></pre>
          <h3 className={styles.subtitle}>Standard Breakpoints</h3>
          <table className={styles.table}>
            <thead><tr><th>Device</th><th>Breakpoint</th></tr></thead>
            <tbody>
              <tr><td>Small phone</td><td>0 – 480px</td></tr>
              <tr><td>Large phone</td><td>481 – 767px</td></tr>
              <tr><td>Tablet</td><td>768 – 1023px</td></tr>
              <tr><td>Laptop</td><td>1024 – 1279px</td></tr>
              <tr><td>Desktop</td><td>1280px+</td></tr>
            </tbody>
          </table>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 5.4: Responsive Navigation</h2>
          <p className={styles.paragraph}>Navbars need to transform between desktop (horizontal links) and mobile (hamburger menu) layouts. This is one of the most common responsive patterns.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Mobile: vertical menu, hidden by default */
.nav-links {
  display: none;
  flex-direction: column;
  gap: 8px;
}

.nav-links.active { display: flex; }

.hamburger { display: block; cursor: pointer; }

/* Desktop: horizontal, always visible */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
  .hamburger { display: none; }
}`}</code></pre>
          <div className={styles.codeLabel}>JavaScript (Toggle)</div>
          <pre className={styles.codeBlock}><code>{`const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});`}</code></pre>
        </div>
      );

    case 5:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 5.5: Responsive Images</h2>
          <p className={styles.paragraph}>Images must scale fluidly and load appropriate sizes for different devices to optimize performance and visual quality.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Fluid images (essential!) */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Object-fit for fixed-size containers */
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;    /* crop to fill */
  object-position: center;
  border-radius: 12px;
}

/* Background images */
.hero {
  background-image: url('hero-mobile.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero {
    background-image: url('hero-desktop.jpg');
  }
}`}</code></pre>
          <div className={styles.codeLabel}>HTML (Responsive srcset)</div>
          <pre className={styles.codeBlock}><code>{`<img
  src="photo-400.jpg"
  srcset="photo-400.jpg 400w,
          photo-800.jpg 800w,
          photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px,
         (max-width: 1024px) 800px,
         1200px"
  alt="Responsive photo">`}</code></pre>
        </div>
      );

    case 6:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 5.6: Responsive Layouts</h2>
          <p className={styles.paragraph}>Combining Flexbox, Grid, and media queries creates fully responsive layouts that look great on every screen size.</p>
          <div className={styles.codeLabel}>CSS — Complete Responsive Layout</div>
          <pre className={styles.codeBlock}><code>{`/* Mobile-first responsive grid */
.page {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
  gap: 16px;
  padding: 16px;
}

/* Tablet: sidebar beside main */
@media (min-width: 768px) {
  .page {
    grid-template-areas:
      "header  header"
      "main    sidebar"
      "footer  footer";
    grid-template-columns: 2fr 1fr;
    padding: 24px;
  }
}

/* Desktop: wider with max-width */
@media (min-width: 1024px) {
  .page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px;
  }
}

/* Responsive utility classes */
.hide-mobile { display: none; }
@media (min-width: 768px) {
  .hide-mobile { display: block; }
  .hide-desktop { display: none; }
}`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Testing Tip</p>
            <p className={styles.tipBoxText}>Use Chrome DevTools (F12 → Toggle Device Toolbar) to test your responsive design at different screen sizes. Test at 375px (phone), 768px (tablet), and 1280px (desktop).</p>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Responsive Website Project</h2>
          <p className={styles.paragraph}>Build a fully responsive multi-section website that works flawlessly on mobile, tablet, and desktop.</p>
          <h3 className={styles.subtitle}>Project Requirements</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}><span className={styles.stepNum}>1</span><p className={styles.stepText}><strong>Mobile-First CSS</strong>: Write base styles for mobile, then scale up with <code>min-width</code> media queries.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>2</span><p className={styles.stepText}><strong>Responsive Navbar</strong>: Hamburger menu on mobile, horizontal links on desktop.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>3</span><p className={styles.stepText}><strong>Hero Section</strong>: Full-width on mobile, two-column on desktop.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>4</span><p className={styles.stepText}><strong>Cards Grid</strong>: 1 column on mobile, 2 on tablet, 3 on desktop.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>5</span><p className={styles.stepText}><strong>Fluid Images</strong>: All images must scale properly with <code>max-width: 100%</code>.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>6</span><p className={styles.stepText}><strong>Test</strong>: Verify at 375px, 768px, and 1280px using DevTools.</p></div>
          </div>
        </div>
      );

    case 8:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 5 Quiz: Responsive Design</h2>
          <p className={styles.paragraph}>Test your responsive design knowledge:</p>
          <div className={styles.quizCardList}>
            {quizQuestions.map((q) => {
              const selected = quizAnswers[q.id];
              return (
                <div key={q.id} className={styles.quizBlock}>
                  <h4 className={styles.quizBlockQuestion}>{q.question}</h4>
                  <div className={styles.quizBlockOptions}>
                    {q.options.map((opt) => {
                      let optStyle = styles.quizBlockOption;
                      if (selected === opt) optStyle = styles.quizBlockOptionSelected;
                      if (quizSubmitted) { if (opt === q.correctAnswer) optStyle = styles.quizBlockOptionCorrect; else if (selected === opt) optStyle = styles.quizBlockOptionIncorrect; }
                      return <button key={opt} className={optStyle} onClick={() => { if (!quizSubmitted) setQuizAnswers(p => ({...p, [q.id]: opt})); }} disabled={quizSubmitted}>{opt}</button>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.quizSubmitRow}>
            {!quizSubmitted ? (
              <button className={styles.saveBtn} onClick={handleSubmitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length}>Submit Quiz</button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'space-between' }}>
                <span className={styles.quizScoreText}>Score: {quizScore} / {quizQuestions.length} {quizScore === quizQuestions.length ? '🎉 Perfect!' : '👍 Review the lessons!'}</span>
                <button className={styles.backBtn} onClick={() => { setQuizSubmitted(false); setQuizScore(null); setQuizAnswers({}); }}>Retry Quiz</button>
              </div>
            )}
          </div>
        </div>
      );

    case 9:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 5 Assignment</h2>
          <p className={styles.paragraph}>Answer these questions:</p>
          <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
            <li>1. Explain mobile-first design and why it's the industry standard.</li>
            <li>2. Write a media query that targets tablet screens (768px - 1023px).</li>
            <li>3. How does <code>srcset</code> optimize image loading?</li>
            <li>4. What is the purpose of the viewport meta tag?</li>
            <li>5. Describe 3 common responsive design patterns (e.g., hamburger menu).</li>
          </ol>
          {!assignmentSubmitted ? (
            <div>
              <textarea className={styles.assignmentBox} placeholder="Type your answers here..." value={assignmentText} onChange={(e) => setAssignmentText(e.target.value)} />
              <button className={styles.saveBtn} onClick={() => { if (assignmentText.trim().length > 10) setAssignmentSubmitted(true); }} disabled={assignmentText.trim().length < 10}>Submit Assignment</button>
            </div>
          ) : (
            <div className={styles.completeBadge} style={{ marginTop: '24px' }}><span>✓ Assignment Submitted! 🎉</span></div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Module5;
