import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const Module4: React.FC<Props> = ({ page }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  const quizQuestions = [
    { id: 1, question: 'Q1: Which property makes a container a flex container?', options: ['A. flex: 1', 'B. display: flex', 'C. flexbox: true', 'D. flex-direction: row'], correctAnswer: 'B. display: flex' },
    { id: 2, question: 'Q2: What does justify-content control?', options: ['A. Vertical alignment', 'B. Horizontal alignment (main axis)', 'C. Font size', 'D. Item order'], correctAnswer: 'B. Horizontal alignment (main axis)' },
    { id: 3, question: 'Q3: Which property creates columns in CSS Grid?', options: ['A. grid-columns', 'B. grid-template-columns', 'C. column-template', 'D. display: columns'], correctAnswer: 'B. grid-template-columns' },
    { id: 4, question: 'Q4: What does flex-wrap: wrap do?', options: ['A. Prevents wrapping', 'B. Wraps items to next line when no space', 'C. Reverses items', 'D. Centers items'], correctAnswer: 'B. Wraps items to next line when no space' },
    { id: 5, question: 'Q5: What does "fr" unit stand for in CSS Grid?', options: ['A. Frame', 'B. Fraction', 'C. Full Row', 'D. Flex Ratio'], correctAnswer: 'B. Fraction' },
  ];

  const handleSubmitQuiz = () => { let s = 0; quizQuestions.forEach(q => { if (quizAnswers[q.id] === q.correctAnswer) s++; }); setQuizScore(s); setQuizSubmitted(true); };

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 4.1: Introduction to Flexbox</h2>
          <p className={styles.paragraph}><strong>Flexbox</strong> (Flexible Box Layout) is a one-dimensional layout system designed for arranging items in rows or columns. It makes alignment, spacing, and distribution of space between items effortless.</p>
          <p className={styles.paragraph}>Before Flexbox, developers relied on floats and positioning hacks. Flexbox replaced all of that with clean, predictable layout behavior.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Enable Flexbox */
.container {
  display: flex;
}

/* All direct children become flex items */
/* They automatically align in a row */

<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Key Concept</p>
            <p className={styles.tipBoxText}>Flexbox works along a <strong>main axis</strong> (default: horizontal) and a <strong>cross axis</strong> (perpendicular). <code>justify-content</code> controls the main axis, <code>align-items</code> controls the cross axis.</p>
          </div>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 4.2: Flex Container Properties</h2>
          <p className={styles.paragraph}>The flex container is the parent element with <code>display: flex</code>. These properties control the overall layout behavior.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Direction */
flex-direction: row;           /* → horizontal (default) */
flex-direction: row-reverse;   /* ← reversed */
flex-direction: column;        /* ↓ vertical */
flex-direction: column-reverse;/* ↑ reversed */

/* Main Axis Alignment */
justify-content: flex-start;    /* items at start */
justify-content: center;        /* items centered */
justify-content: flex-end;      /* items at end */
justify-content: space-between; /* even gaps, no edge space */
justify-content: space-around;  /* even gaps with edge space */
justify-content: space-evenly;  /* perfectly even gaps */

/* Cross Axis Alignment */
align-items: stretch;    /* fill container height (default) */
align-items: flex-start; /* top aligned */
align-items: center;     /* vertically centered */
align-items: flex-end;   /* bottom aligned */

/* Wrapping */
flex-wrap: nowrap; /* default - single line */
flex-wrap: wrap;   /* wrap to next line */

/* Gap */
gap: 16px;         /* space between items */`}</code></pre>
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 4.3: Flex Item Properties</h2>
          <p className={styles.paragraph}>Individual flex items (children) can be controlled with these properties for sizing, ordering, and self-alignment.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* flex-grow: how much to grow relative to siblings */
.item { flex-grow: 1; }  /* grow equally */
.sidebar { flex-grow: 0; width: 250px; }  /* fixed */
.main    { flex-grow: 1; }  /* takes remaining */

/* flex-shrink: how much to shrink */
.item { flex-shrink: 0; }  /* don't shrink */

/* flex-basis: initial size before growing/shrinking */
.item { flex-basis: 200px; }

/* Shorthand */
.item { flex: 1; }           /* grow:1, shrink:1, basis:0 */
.item { flex: 0 0 300px; }   /* fixed 300px, no grow/shrink */

/* Order: change visual order */
.first  { order: -1; }  /* appears first */
.last   { order: 99; }  /* appears last */

/* Self Alignment */
.item { align-self: center; }  /* override parent's align-items */`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Common Pattern</p>
            <p className={styles.tipBoxText}><code>flex: 1</code> makes items grow equally to fill space. <code>flex: 0 0 auto</code> keeps items at their natural size. These two patterns cover 90% of use cases.</p>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 4.4: Building a Navbar with Flexbox</h2>
          <p className={styles.paragraph}>Navigation bars are one of the most common Flexbox use cases. Let's build a professional navbar step by step.</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<nav class="navbar">
  <div class="logo">Skillofied</div>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/courses">Courses</a></li>
    <li><a href="/about">About</a></li>
  </ul>
  <button class="cta-btn">Sign Up</button>
</nav>`}</code></pre>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #1a1a2e;
}

.logo {
  font-size: 20px;
  font-weight: 800;
  color: #fff;
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}

.nav-links a {
  color: #a1a1aa;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover { color: #fff; }

.cta-btn {
  padding: 10px 20px;
  background: #4648d4;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}`}</code></pre>
        </div>
      );

    case 5:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 4.5: Responsive Cards with Flexbox</h2>
          <p className={styles.paragraph}>Card layouts that wrap responsively are another perfect Flexbox use case. Using <code>flex-wrap</code> and <code>flex-basis</code>, cards automatically adjust to screen width.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;   /* grow, shrink, min 300px */
  max-width: 400px;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* On small screens, cards stack vertically */
/* No media query needed — flex-wrap handles it! */`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 The Magic Formula</p>
            <p className={styles.tipBoxText}><code>flex: 1 1 300px</code> means: "grow to fill space, shrink if needed, but try to be at least 300px". Combined with <code>flex-wrap: wrap</code>, this creates responsive grids without media queries!</p>
          </div>
        </div>
      );

    case 6:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 4.6: Introduction to CSS Grid</h2>
          <p className={styles.paragraph}><strong>CSS Grid</strong> is a two-dimensional layout system that handles both rows and columns simultaneously. While Flexbox is great for one-dimensional layouts, Grid excels at full page layouts and complex designs.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Enable Grid */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
  gap: 16px;
}

/* Grid items automatically fill cells left to right,
   top to bottom */`}</code></pre>
          <h3 className={styles.subtitle}>Flexbox vs Grid</h3>
          <table className={styles.table}>
            <thead><tr><th>Feature</th><th>Flexbox</th><th>Grid</th></tr></thead>
            <tbody>
              <tr><td>Dimension</td><td>One-dimensional (row OR column)</td><td>Two-dimensional (rows AND columns)</td></tr>
              <tr><td>Best for</td><td>Component layouts (navbar, card row)</td><td>Page layouts (dashboard, gallery)</td></tr>
              <tr><td>Content vs Layout</td><td>Content drives layout</td><td>Layout drives content</td></tr>
              <tr><td>Alignment</td><td>Along one axis</td><td>Along both axes</td></tr>
            </tbody>
          </table>
        </div>
      );

    case 7:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 4.7: Grid Rows & Columns</h2>
          <p className={styles.paragraph}>Grid's power comes from its ability to define precise row and column templates, place items across multiple cells, and create complex layouts with minimal code.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Define columns and rows */
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;   /* fixed + flexible */
  grid-template-columns: repeat(3, 1fr);   /* 3 equal columns */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto 1fr auto;       /* header, content, footer */
  gap: 16px;
  row-gap: 20px;
  column-gap: 12px;
}

/* Spanning multiple cells */
.header {
  grid-column: 1 / -1;  /* span all columns */
}
.sidebar {
  grid-row: 2 / 4;      /* span rows 2-3 */
}

/* Named Grid Areas */
.page {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main   main"
    "footer footer footer";
  grid-template-columns: 250px 1fr 1fr;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`}</code></pre>
        </div>
      );

    case 8:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 4.8: Dashboard Layout with Grid</h2>
          <p className={styles.paragraph}>Let's build a complete dashboard layout using CSS Grid — the kind of layout used in admin panels, analytics tools, and learning platforms like Skillofied.</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<div class="dashboard">
  <header class="dash-header">Dashboard</header>
  <aside class="dash-sidebar">Sidebar Nav</aside>
  <main class="dash-main">
    <div class="stat-card">Users: 1,234</div>
    <div class="stat-card">Revenue: ₹45K</div>
    <div class="stat-card">Orders: 89</div>
    <div class="chart">Chart Area</div>
  </main>
</div>`}</code></pre>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`.dashboard {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 260px 1fr;
  grid-template-rows: 70px 1fr;
  min-height: 100vh;
}

.dash-header  { grid-area: header; }
.dash-sidebar { grid-area: sidebar; }
.dash-main    { grid-area: main; }

/* Nested grid for stat cards */
.dash-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 24px;
}

.chart {
  grid-column: 1 / -1;  /* full width */
}`}</code></pre>
        </div>
      );

    case 9:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Flexbox & Grid Project: Landing Page</h2>
          <p className={styles.paragraph}>Build a complete landing page using both Flexbox and Grid to demonstrate mastery of both layout systems.</p>
          <h3 className={styles.subtitle}>Project Requirements</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}><span className={styles.stepNum}>1</span><p className={styles.stepText}><strong>Navbar</strong> (Flexbox): Logo left, navigation links center, CTA button right.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>2</span><p className={styles.stepText}><strong>Hero Section</strong> (Flexbox): Two-column layout with text left and image right.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>3</span><p className={styles.stepText}><strong>Features Grid</strong> (CSS Grid): 3-column grid of feature cards with icons.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>4</span><p className={styles.stepText}><strong>Testimonials</strong> (Flexbox): Horizontally scrolling testimonial cards.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>5</span><p className={styles.stepText}><strong>Footer</strong> (Grid): Multi-column footer with company info, links, and newsletter signup.</p></div>
          </div>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>🎯 Deliverable</p>
            <p className={styles.tipBoxText}>Submit HTML + CSS files. The page should use Flexbox for component-level layouts (navbar, hero) and Grid for section-level layouts (features, footer).</p>
          </div>
        </div>
      );

    case 10:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 4 Quiz: Flexbox & Grid</h2>
          <p className={styles.paragraph}>Test your understanding of layout techniques:</p>
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

    case 11:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 4 Assignment</h2>
          <p className={styles.paragraph}>Answer these questions:</p>
          <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
            <li>1. When would you choose Flexbox over Grid, and vice versa?</li>
            <li>2. Write CSS for a navbar with logo, links, and button using Flexbox.</li>
            <li>3. Create a 3-column, 2-row dashboard layout using CSS Grid named areas.</li>
            <li>4. Explain <code>flex: 1 1 300px</code> — what does each value mean?</li>
            <li>5. What does <code>repeat(auto-fill, minmax(250px, 1fr))</code> do?</li>
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

export default Module4;
