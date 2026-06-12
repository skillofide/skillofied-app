import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const Module3: React.FC<Props> = ({ page }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  const quizQuestions = [
    { id: 1, question: 'Q1: What does CSS stand for?', options: ['A. Computer Style Sheets', 'B. Cascading Style Sheets', 'C. Creative Style Syntax', 'D. Colorful Style Sheets'], correctAnswer: 'B. Cascading Style Sheets' },
    { id: 2, question: 'Q2: Which property changes text color?', options: ['A. font-color', 'B. text-color', 'C. color', 'D. foreground'], correctAnswer: 'C. color' },
    { id: 3, question: 'Q3: Which CSS property controls the space between content and border?', options: ['A. margin', 'B. padding', 'C. spacing', 'D. gap'], correctAnswer: 'B. padding' },
    { id: 4, question: 'Q4: What does "display: none" do?', options: ['A. Makes element invisible but keeps space', 'B. Removes element from the page completely', 'C. Shows the element', 'D. Fades out the element'], correctAnswer: 'B. Removes element from the page completely' },
    { id: 5, question: 'Q5: Which selector has the highest specificity?', options: ['A. Element (p)', 'B. Class (.box)', 'C. ID (#main)', 'D. Universal (*)'], correctAnswer: 'C. ID (#main)' },
  ];

  const handleSubmitQuiz = () => { let s = 0; quizQuestions.forEach(q => { if (quizAnswers[q.id] === q.correctAnswer) s++; }); setQuizScore(s); setQuizSubmitted(true); };

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.1: Introduction to CSS</h2>
          <p className={styles.paragraph}><strong>CSS (Cascading Style Sheets)</strong> is the language used to style and layout HTML elements. While HTML provides the structure, CSS makes it visually appealing with colors, fonts, spacing, and layouts.</p>
          <p className={styles.paragraph}>There are three ways to apply CSS to an HTML document:</p>
          <div className={styles.codeLabel}>Inline CSS</div>
          <pre className={styles.codeBlock}><code>{`<h1 style="color: blue; font-size: 24px;">Hello</h1>`}</code></pre>
          <div className={styles.codeLabel}>Internal CSS</div>
          <pre className={styles.codeBlock}><code>{`<head>
  <style>
    h1 { color: blue; font-size: 24px; }
  </style>
</head>`}</code></pre>
          <div className={styles.codeLabel}>External CSS (Recommended ✅)</div>
          <pre className={styles.codeBlock}><code>{`<!-- In HTML -->
<link rel="stylesheet" href="styles.css">

/* In styles.css */
h1 {
  color: blue;
  font-size: 24px;
}`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Best Practice</p>
            <p className={styles.tipBoxText}>Always use external CSS files. It keeps your HTML clean, enables reuse across pages, and makes maintenance easier.</p>
          </div>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.2: CSS Syntax</h2>
          <p className={styles.paragraph}>Every CSS rule consists of a <strong>selector</strong> and a <strong>declaration block</strong>. The declaration block contains one or more property-value pairs.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`selector {
  property: value;
  property: value;
}

/* Example */
h1 {
  color: #333333;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
}`}</code></pre>
          <div className={styles.visualFlow}>
            <div className={styles.flowItem}>Selector → h1</div>
            <div className={styles.flowArrow}>↓</div>
            <div className={styles.flowItem}>Property → color</div>
            <div className={styles.flowArrow}>:</div>
            <div className={styles.flowItem}>Value → #333333</div>
            <div className={styles.flowArrow}>;</div>
          </div>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Remember</p>
            <p className={styles.tipBoxText}>Every declaration ends with a semicolon (<code>;</code>). Missing semicolons are one of the most common CSS bugs!</p>
          </div>
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.3: Selectors</h2>
          <p className={styles.paragraph}>CSS selectors determine which HTML elements receive your styles. Mastering selectors is crucial for writing efficient CSS.</p>
          <table className={styles.table}>
            <thead><tr><th>Selector</th><th>Syntax</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Element</td><td><code>element</code></td><td><code>p {'{ color: blue; }'}</code></td></tr>
              <tr><td>Class</td><td><code>.classname</code></td><td><code>.card {'{ padding: 16px; }'}</code></td></tr>
              <tr><td>ID</td><td><code>#idname</code></td><td><code>#header {'{ background: #000; }'}</code></td></tr>
              <tr><td>Universal</td><td><code>*</code></td><td><code>* {'{ margin: 0; }'}</code></td></tr>
              <tr><td>Descendant</td><td><code>A B</code></td><td><code>nav a {'{ color: white; }'}</code></td></tr>
              <tr><td>Child</td><td><code>A {'>'} B</code></td><td><code>ul {'>'} li {'{ list-style: none; }'}</code></td></tr>
              <tr><td>Attribute</td><td><code>[attr]</code></td><td><code>input[type="email"] {'{ ... }'}</code></td></tr>
              <tr><td>Pseudo-class</td><td><code>:state</code></td><td><code>a:hover {'{ color: red; }'}</code></td></tr>
              <tr><td>Pseudo-element</td><td><code>::part</code></td><td><code>p::first-line {'{ font-weight: bold; }'}</code></td></tr>
            </tbody>
          </table>
          <h3 className={styles.subtitle}>Specificity Hierarchy</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}><span className={styles.stepNum}>1</span><p className={styles.stepText}><strong>Inline styles</strong> (highest priority) — <code>style="..."</code></p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>2</span><p className={styles.stepText}><strong>ID selectors</strong> — <code>#header</code></p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>3</span><p className={styles.stepText}><strong>Class selectors</strong> — <code>.card</code>, <code>:hover</code></p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>4</span><p className={styles.stepText}><strong>Element selectors</strong> (lowest) — <code>p</code>, <code>div</code></p></div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.4: Colors and Backgrounds</h2>
          <p className={styles.paragraph}>CSS provides multiple ways to define colors. Understanding color systems is essential for creating visually appealing designs.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Named Colors */
color: red;
color: cornflowerblue;

/* Hexadecimal (#RRGGBB) */
color: #ff5733;
color: #333;           /* shorthand for #333333 */

/* RGB / RGBA */
color: rgb(255, 87, 51);
color: rgba(255, 87, 51, 0.5);  /* 50% transparent */

/* HSL / HSLA */
color: hsl(14, 100%, 60%);
color: hsla(14, 100%, 60%, 0.5);

/* Backgrounds */
background-color: #f5f5f5;
background-image: url('bg.jpg');
background: linear-gradient(135deg, #667eea, #764ba2);
background-size: cover;
background-position: center;`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Pro Tip</p>
            <p className={styles.tipBoxText}>Use <strong>HSL</strong> for easier color manipulation. Changing hue rotates the color wheel, saturation controls vibrancy, and lightness controls brightness.</p>
          </div>
        </div>
      );

    case 5:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.5: Typography</h2>
          <p className={styles.paragraph}>Typography controls how text appears on your page. Good typography significantly improves readability and user experience.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Font Family */
font-family: 'Inter', 'Segoe UI', sans-serif;

/* Font Size */
font-size: 16px;       /* absolute */
font-size: 1rem;       /* relative to root */
font-size: 1.2em;      /* relative to parent */

/* Font Weight */
font-weight: 400;      /* normal */
font-weight: 700;      /* bold */
font-weight: 800;      /* extra bold */

/* Line Height */
line-height: 1.6;      /* 1.5-1.8 is ideal for body text */

/* Text Properties */
text-align: center;
text-decoration: underline;
text-transform: uppercase;
letter-spacing: 0.5px;
word-spacing: 2px;

/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Typography Best Practices</p>
            <p className={styles.tipBoxText}>Use <code>rem</code> for font sizes (scalable), limit to 2-3 font families per page, and maintain a line-height of 1.5-1.8 for body text readability.</p>
          </div>
        </div>
      );

    case 6:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.6: The Box Model</h2>
          <p className={styles.paragraph}>Every HTML element is treated as a rectangular box. The CSS Box Model defines the space an element occupies, consisting of four layers.</p>
          <div className={styles.visualFlow}>
            <div className={styles.flowItem} style={{ padding: '20px 40px', background: 'rgba(239, 68, 68, 0.1)', border: '2px dashed #ef4444' }}>Margin (outer spacing)</div>
            <div className={styles.flowItem} style={{ padding: '16px 36px', background: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b' }}>Border</div>
            <div className={styles.flowItem} style={{ padding: '12px 32px', background: 'rgba(16, 185, 129, 0.1)', border: '2px dashed #10b981' }}>Padding (inner spacing)</div>
            <div className={styles.flowItem} style={{ background: 'rgba(59, 130, 246, 0.15)', border: '2px solid #3b82f6' }}>Content</div>
          </div>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Box Model Properties */
.card {
  width: 300px;
  padding: 20px;          /* inner space */
  border: 2px solid #ccc; /* border */
  margin: 16px;           /* outer space */
}

/* box-sizing: border-box (IMPORTANT!) */
* {
  box-sizing: border-box;
}
/* Now width INCLUDES padding and border
   300px total = content + padding + border */`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>⚠️ Critical</p>
            <p className={styles.tipBoxText}>Always add <code>box-sizing: border-box</code> to your global reset. Without it, padding and border are ADDED to the width, causing unexpected layout overflow.</p>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.7: Display Property</h2>
          <p className={styles.paragraph}>The <code>display</code> property controls how an element behaves in the page flow. Understanding display values is fundamental to CSS layout.</p>
          <table className={styles.table}>
            <thead><tr><th>Value</th><th>Behavior</th><th>Example Elements</th></tr></thead>
            <tbody>
              <tr><td><code>block</code></td><td>Takes full width, starts on new line</td><td><code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code></td></tr>
              <tr><td><code>inline</code></td><td>Only takes needed width, stays in line</td><td><code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code></td></tr>
              <tr><td><code>inline-block</code></td><td>Inline flow but accepts width/height</td><td>Custom buttons, badges</td></tr>
              <tr><td><code>none</code></td><td>Completely hidden, no space occupied</td><td>Toggle visibility</td></tr>
              <tr><td><code>flex</code></td><td>Flexbox container (1D layout)</td><td>Navbars, card rows</td></tr>
              <tr><td><code>grid</code></td><td>Grid container (2D layout)</td><td>Page layouts, dashboards</td></tr>
            </tbody>
          </table>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Block vs Inline */
.block-example  { display: block; }   /* full width */
.inline-example { display: inline; }  /* content width */

/* Hiding elements */
.hidden  { display: none; }       /* removed from flow */
.invisible { visibility: hidden; } /* hidden but keeps space */`}</code></pre>
        </div>
      );

    case 8:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.8: Position Property</h2>
          <p className={styles.paragraph}>The <code>position</code> property controls how an element is positioned in the document. Combined with <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, it gives precise placement control.</p>
          <table className={styles.table}>
            <thead><tr><th>Value</th><th>Behavior</th><th>Use Case</th></tr></thead>
            <tbody>
              <tr><td><code>static</code></td><td>Default flow (top/left ignored)</td><td>Normal elements</td></tr>
              <tr><td><code>relative</code></td><td>Offset from normal position</td><td>Slight nudges, parent for absolute</td></tr>
              <tr><td><code>absolute</code></td><td>Positioned relative to nearest positioned ancestor</td><td>Badges, tooltips, overlays</td></tr>
              <tr><td><code>fixed</code></td><td>Fixed to viewport (doesn't scroll)</td><td>Sticky navbars, floating buttons</td></tr>
              <tr><td><code>sticky</code></td><td>Toggles between relative and fixed</td><td>Sticky headers, table headers</td></tr>
            </tbody>
          </table>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Fixed Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/* Badge on a card */
.card { position: relative; }
.badge {
  position: absolute;
  top: -8px;
  right: -8px;
}`}</code></pre>
        </div>
      );

    case 9:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.9: Borders and Shadows</h2>
          <p className={styles.paragraph}>Borders and shadows add depth and visual separation to your designs. Modern UI heavily relies on subtle shadows for elevated, premium-feeling interfaces.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Borders */
border: 2px solid #e5e7eb;
border-radius: 12px;          /* rounded corners */
border-radius: 50%;            /* perfect circle */
border-bottom: 3px solid #4648d4; /* accent underline */

/* Box Shadows */
box-shadow: 0 1px 3px rgba(0,0,0,0.12);     /* subtle */
box-shadow: 0 4px 6px rgba(0,0,0,0.1);       /* medium */
box-shadow: 0 10px 25px rgba(0,0,0,0.15);    /* elevated */
box-shadow: 0 20px 40px rgba(0,0,0,0.2);     /* floating */

/* Inset Shadow (inner shadow) */
box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);

/* Text Shadow */
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

/* Multiple Shadows */
box-shadow: 
  0 1px 3px rgba(0,0,0,0.12),
  0 4px 12px rgba(0,0,0,0.08);`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Design Tip</p>
            <p className={styles.tipBoxText}>Use <code>rgba()</code> colors for shadows so they blend naturally with any background. Avoid solid black shadows — use low-opacity shadows for a premium look.</p>
          </div>
        </div>
      );

    case 10:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.10: CSS Units</h2>
          <p className={styles.paragraph}>CSS supports both absolute and relative units. Choosing the right unit impacts responsiveness and accessibility.</p>
          <table className={styles.table}>
            <thead><tr><th>Unit</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>px</code></td><td>Absolute</td><td>Fixed pixels, not scalable</td></tr>
              <tr><td><code>rem</code></td><td>Relative</td><td>Relative to root font-size (usually 16px)</td></tr>
              <tr><td><code>em</code></td><td>Relative</td><td>Relative to parent element's font-size</td></tr>
              <tr><td><code>%</code></td><td>Relative</td><td>Percentage of parent element</td></tr>
              <tr><td><code>vw</code></td><td>Viewport</td><td>1% of viewport width</td></tr>
              <tr><td><code>vh</code></td><td>Viewport</td><td>1% of viewport height</td></tr>
              <tr><td><code>fr</code></td><td>Fractional</td><td>Fraction of available space (Grid only)</td></tr>
              <tr><td><code>ch</code></td><td>Relative</td><td>Width of the "0" character</td></tr>
            </tbody>
          </table>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* When to use what */
font-size: 1rem;        /* ✅ scalable text */
font-size: 14px;        /* ⚠️ fixed text */

width: 100%;            /* ✅ responsive container */
max-width: 1200px;      /* ✅ limit max width */

height: 100vh;          /* full viewport height */
padding: 1.5rem;        /* scalable spacing */`}</code></pre>
        </div>
      );

    case 11:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 3.11: CSS Variables (Custom Properties)</h2>
          <p className={styles.paragraph}>CSS Variables (Custom Properties) let you define reusable values that can be referenced throughout your stylesheets. They are the foundation of design systems and theme switching.</p>
          <div className={styles.codeLabel}>CSS</div>
          <pre className={styles.codeBlock}><code>{`/* Define variables in :root (global) */
:root {
  --primary: #4648d4;
  --bg-surface: #ffffff;
  --text-primary: #1a1a2e;
  --border: #e5e7eb;
  --radius: 12px;
  --shadow: 0 4px 12px rgba(0,0,0,0.08);
}

/* Use variables */
.card {
  background: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.button {
  background: var(--primary);
  border-radius: var(--radius);
}

/* Dark theme override */
[data-theme="dark"] {
  --bg-surface: #1a1a2e;
  --text-primary: #e5e7eb;
  --border: #2d2d44;
}`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Why Variables Matter</p>
            <p className={styles.tipBoxText}>Change one variable value and it updates everywhere it's used. This is how professional apps implement dark mode, brand theming, and design tokens.</p>
          </div>
        </div>
      );

    case 12:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>CSS Mini Project: Styled Profile Card</h2>
          <p className={styles.paragraph}>Take the HTML profile page from Module 2 and style it with everything you've learned in CSS Fundamentals.</p>
          <h3 className={styles.subtitle}>Project Requirements</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}><span className={styles.stepNum}>1</span><p className={styles.stepText}>Create an external <code>styles.css</code> file and link it to your HTML.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>2</span><p className={styles.stepText}>Define CSS variables for your color scheme (primary, background, text, border).</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>3</span><p className={styles.stepText}>Style the header with a gradient background, white text, and padding.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>4</span><p className={styles.stepText}>Add card styling with rounded corners, shadows, and hover effects to skill items.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>5</span><p className={styles.stepText}>Style the contact form with custom input borders, focus states, and a styled submit button.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>6</span><p className={styles.stepText}>Add a dark footer with light text and proper padding.</p></div>
          </div>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>🎯 Deliverable</p>
            <p className={styles.tipBoxText}>Submit both <code>profile.html</code> and <code>styles.css</code>. The page should look professional with consistent colors, clean typography, and proper spacing.</p>
          </div>
        </div>
      );

    case 13:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 3 Quiz: CSS Fundamentals</h2>
          <p className={styles.paragraph}>Test your understanding of CSS concepts:</p>
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

    case 14:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 3 Assignment</h2>
          <p className={styles.paragraph}>Answer these questions to complete CSS Fundamentals:</p>
          <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
            <li>1. Explain the CSS Box Model with a diagram description.</li>
            <li>2. What is the difference between <code>margin</code> and <code>padding</code>?</li>
            <li>3. Write CSS to create a card with rounded corners, shadow, and a hover effect.</li>
            <li>4. Explain CSS specificity with examples of each level.</li>
            <li>5. How would you implement a dark theme using CSS variables?</li>
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

export default Module3;
