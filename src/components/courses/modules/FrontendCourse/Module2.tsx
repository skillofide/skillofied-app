import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const Module2: React.FC<Props> = ({ page }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);
  const quizQuestions = [
    { id: 1, question: 'Q1: What does HTML stand for?', options: ['A. Hyper Transfer Markup Language', 'B. HyperText Markup Language', 'C. Home Tool Markup Language', 'D. Hyperlinks and Text Markup Language'], correctAnswer: 'B. HyperText Markup Language' },
    { id: 2, question: 'Q2: Which tag is used for the largest heading?', options: ['A. <heading>', 'B. <h6>', 'C. <h1>', 'D. <head>'], correctAnswer: 'C. <h1>' },
    { id: 3, question: 'Q3: Which element is used for creating a hyperlink?', options: ['A. <link>', 'B. <a>', 'C. <href>', 'D. <nav>'], correctAnswer: 'B. <a>' },
    { id: 4, question: 'Q4: Which tag is used for an unordered list?', options: ['A. <ol>', 'B. <li>', 'C. <ul>', 'D. <list>'], correctAnswer: 'C. <ul>' },
    { id: 5, question: 'Q5: What is the correct HTML element for inserting a line break?', options: ['A. <break>', 'B. <lb>', 'C. <br>', 'D. <newline>'], correctAnswer: 'C. <br>' },
    { id: 6, question: 'Q6: Which input type creates a checkbox?', options: ['A. <input type="check">', 'B. <input type="checkbox">', 'C. <input type="tick">', 'D. <checkbox>'], correctAnswer: 'B. <input type="checkbox">' },
  ];

  const handleSubmitQuiz = () => { let s = 0; quizQuestions.forEach(q => { if (quizAnswers[q.id] === q.correctAnswer) s++; }); setQuizScore(s); setQuizSubmitted(true); };

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.1: Introduction to HTML</h2>
          <p className={styles.paragraph}>HTML (<strong>HyperText Markup Language</strong>) is the standard language used to create and structure content on the web. Every website you have ever visited is built with HTML at its core.</p>
          <p className={styles.paragraph}>HTML is not a programming language — it is a <strong>markup language</strong>. It uses "tags" to define elements on a webpage, such as headings, paragraphs, images, and links.</p>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Key Concept</p>
            <p className={styles.tipBoxText}>Think of HTML as the skeleton of a website. Just like a building needs a steel frame before walls and paint, a website needs HTML before CSS (styling) and JavaScript (interactivity).</p>
          </div>
          <h3 className={styles.subtitle}>Your First HTML Code</h3>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>Welcome to HTML.</p>
  </body>
</html>`}</code></pre>
          <div className={styles.outputBlock}>
            <strong>Output:</strong> A page with "Hello, World!" as a large heading and "Welcome to HTML." as a paragraph.
          </div>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.2: HTML Document Structure</h2>
          <p className={styles.paragraph}>Every HTML document follows a specific structure. Understanding this structure is essential before writing any HTML code.</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<!DOCTYPE html>        <!-- Declares HTML5 -->
<html lang="en">       <!-- Root element -->
  <head>                <!-- Metadata section -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
  </head>
  <body>                <!-- Visible content -->
    <h1>Content goes here</h1>
  </body>
</html>`}</code></pre>
          <h3 className={styles.subtitle}>Structure Breakdown</h3>
          <table className={styles.table}>
            <thead><tr><th>Element</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>Tells the browser this is an HTML5 document</td></tr>
              <tr><td><code>&lt;html&gt;</code></td><td>Root element that wraps everything</td></tr>
              <tr><td><code>&lt;head&gt;</code></td><td>Contains metadata (title, charset, links to CSS)</td></tr>
              <tr><td><code>&lt;meta&gt;</code></td><td>Defines metadata like character encoding and viewport</td></tr>
              <tr><td><code>&lt;title&gt;</code></td><td>Sets the browser tab title</td></tr>
              <tr><td><code>&lt;body&gt;</code></td><td>Contains all visible page content</td></tr>
            </tbody>
          </table>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Remember</p>
            <p className={styles.tipBoxText}>The <code>&lt;head&gt;</code> is invisible to users — it provides instructions to the browser. The <code>&lt;body&gt;</code> is everything the user actually sees.</p>
          </div>
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.3: Headings and Paragraphs</h2>
          <p className={styles.paragraph}>HTML provides six levels of headings (<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>) and the <code>&lt;p&gt;</code> tag for paragraphs. Headings create a hierarchical structure for your content.</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<h1>Main Title (Largest)</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>

<p>This is a paragraph of text. Paragraphs are
   block-level elements that create spacing.</p>

<p>Use <br> for a line break within a paragraph.</p>`}</code></pre>
          <h3 className={styles.subtitle}>Heading Hierarchy</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}><span className={styles.stepNum}>1</span><p className={styles.stepText}><strong>&lt;h1&gt;</strong> — Use only once per page. Represents the main topic (like a book title).</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>2</span><p className={styles.stepText}><strong>&lt;h2&gt;</strong> — Major sections (like chapter titles).</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>3</span><p className={styles.stepText}><strong>&lt;h3&gt; to &lt;h6&gt;</strong> — Sub-sections with decreasing importance.</p></div>
          </div>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>⚠️ Best Practice</p>
            <p className={styles.tipBoxText}>Never skip heading levels (e.g., don't jump from &lt;h1&gt; to &lt;h4&gt;). This hurts SEO and accessibility. Always use &lt;h1&gt; → &lt;h2&gt; → &lt;h3&gt; in order.</p>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.4: Text Formatting Tags</h2>
          <p className={styles.paragraph}>HTML provides several tags to format and emphasize text. Understanding the semantic difference between these tags is important for accessibility.</p>
          <table className={styles.table}>
            <thead><tr><th>Tag</th><th>Purpose</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;strong&gt;</code></td><td>Important text (bold, semantic)</td><td><strong>Bold text</strong></td></tr>
              <tr><td><code>&lt;em&gt;</code></td><td>Emphasized text (italic, semantic)</td><td><em>Italic text</em></td></tr>
              <tr><td><code>&lt;b&gt;</code></td><td>Bold (visual only)</td><td><b>Bold</b></td></tr>
              <tr><td><code>&lt;i&gt;</code></td><td>Italic (visual only)</td><td><i>Italic</i></td></tr>
              <tr><td><code>&lt;u&gt;</code></td><td>Underline</td><td><u>Underlined</u></td></tr>
              <tr><td><code>&lt;mark&gt;</code></td><td>Highlighted text</td><td><mark>Highlighted</mark></td></tr>
              <tr><td><code>&lt;del&gt;</code></td><td>Deleted/strikethrough</td><td><del>Deleted</del></td></tr>
              <tr><td><code>&lt;sub&gt;</code></td><td>Subscript</td><td>H<sub>2</sub>O</td></tr>
              <tr><td><code>&lt;sup&gt;</code></td><td>Superscript</td><td>x<sup>2</sup></td></tr>
            </tbody>
          </table>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<p>This is <strong>very important</strong> text.</p>
<p>Water formula: H<sub>2</sub>O</p>
<p>Area = πr<sup>2</sup></p>
<p>This is <mark>highlighted</mark> for attention.</p>
<p>Price: <del>₹999</del> <strong>₹499</strong></p>`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Semantic vs Visual</p>
            <p className={styles.tipBoxText}><code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> carry meaning (screen readers announce them differently). <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> are purely visual. Always prefer semantic tags.</p>
          </div>
        </div>
      );

    case 5:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.5: Links and Navigation</h2>
          <p className={styles.paragraph}>The anchor tag <code>&lt;a&gt;</code> is one of the most important HTML elements. It creates clickable hyperlinks that connect pages together — the foundation of the web.</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<!-- External link -->
<a href="https://www.google.com">Visit Google</a>

<!-- Open in new tab -->
<a href="https://www.google.com" target="_blank">
  Open Google in New Tab
</a>

<!-- Internal page link -->
<a href="about.html">About Us</a>

<!-- Email link -->
<a href="mailto:info@skillofied.com">Email Us</a>

<!-- Anchor link (jump to section) -->
<a href="#contact">Go to Contact Section</a>
...
<section id="contact">
  <h2>Contact Us</h2>
</section>`}</code></pre>
          <h3 className={styles.subtitle}>Key Attributes</h3>
          <table className={styles.table}>
            <thead><tr><th>Attribute</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><code>href</code></td><td>URL or path the link points to</td></tr>
              <tr><td><code>target="_blank"</code></td><td>Opens link in a new browser tab</td></tr>
              <tr><td><code>rel="noopener"</code></td><td>Security attribute for external links</td></tr>
              <tr><td><code>title</code></td><td>Tooltip text on hover</td></tr>
            </tbody>
          </table>
        </div>
      );

    case 6:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.6: Images and Multimedia</h2>
          <p className={styles.paragraph}>The <code>&lt;img&gt;</code> tag embeds images into your webpage. Unlike most HTML elements, it is a <strong>self-closing tag</strong> (no closing tag needed).</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<!-- Basic image -->
<img src="photo.jpg" alt="A beautiful sunset" width="400">

<!-- Image with figure caption -->
<figure>
  <img src="team.jpg" alt="Our development team">
  <figcaption>The Skillofied development team, 2024</figcaption>
</figure>

<!-- Video element -->
<video width="640" controls>
  <source src="intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!-- Audio element -->
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
</audio>`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>⚠️ Always Add Alt Text</p>
            <p className={styles.tipBoxText}>The <code>alt</code> attribute is required for accessibility. Screen readers read it aloud, and it displays if the image fails to load. Never leave it empty for meaningful images.</p>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.7: Lists (Ordered & Unordered)</h2>
          <p className={styles.paragraph}>HTML supports three types of lists to organize content in a structured way.</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<!-- Unordered List (bullet points) -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered List (numbered) -->
<ol>
  <li>Learn HTML basics</li>
  <li>Practice CSS styling</li>
  <li>Build a project</li>
</ol>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>Structure of web pages</dd>
  <dt>CSS</dt>
  <dd>Styling and layout</dd>
</dl>

<!-- Nested Lists -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>`}</code></pre>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 When to Use Which</p>
            <p className={styles.tipBoxText}><code>&lt;ul&gt;</code> for unordered items (shopping list), <code>&lt;ol&gt;</code> for sequential steps (recipe), <code>&lt;dl&gt;</code> for term-definition pairs (glossary).</p>
          </div>
        </div>
      );

    case 8:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.8: Tables</h2>
          <p className={styles.paragraph}>HTML tables organize data into rows and columns. They are ideal for displaying structured data like schedules, pricing, and comparison charts.</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Course</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Frontend</td>
      <td>95</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Backend</td>
      <td>88</td>
    </tr>
  </tbody>
</table>`}</code></pre>
          <h3 className={styles.subtitle}>Table Structure</h3>
          <table className={styles.table}>
            <thead><tr><th>Tag</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;table&gt;</code></td><td>Container for the entire table</td></tr>
              <tr><td><code>&lt;thead&gt;</code></td><td>Table header section</td></tr>
              <tr><td><code>&lt;tbody&gt;</code></td><td>Table body section</td></tr>
              <tr><td><code>&lt;tr&gt;</code></td><td>Table row</td></tr>
              <tr><td><code>&lt;th&gt;</code></td><td>Header cell (bold, centered by default)</td></tr>
              <tr><td><code>&lt;td&gt;</code></td><td>Data cell</td></tr>
              <tr><td><code>colspan</code></td><td>Merge cells horizontally</td></tr>
              <tr><td><code>rowspan</code></td><td>Merge cells vertically</td></tr>
            </tbody>
          </table>
        </div>
      );

    case 9:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.9: Forms and Inputs</h2>
          <p className={styles.paragraph}>Forms are essential for collecting user data — login credentials, search queries, contact messages, and registration details.</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<form action="/submit" method="POST">
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="18" max="100">

  <label for="course">Course:</label>
  <select id="course" name="course">
    <option value="frontend">Frontend</option>
    <option value="backend">Backend</option>
    <option value="fullstack">Full Stack</option>
  </select>

  <label>
    <input type="checkbox" name="terms"> I agree to terms
  </label>

  <textarea name="message" rows="4" 
    placeholder="Your message..."></textarea>

  <button type="submit">Submit</button>
</form>`}</code></pre>
          <h3 className={styles.subtitle}>Common Input Types</h3>
          <div className={styles.activityGrid}>
            {['text', 'email', 'password', 'number', 'date', 'file', 'checkbox', 'radio', 'range', 'color'].map((type) => (
              <div key={type} className={styles.activityRow}>
                <span className={styles.activityName}><code>type="{type}"</code></span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{type === 'text' ? 'Single-line text' : type === 'email' ? 'Email with validation' : type === 'password' ? 'Masked input' : type === 'number' ? 'Numeric spinner' : type === 'date' ? 'Date picker' : type === 'file' ? 'File upload' : type === 'checkbox' ? 'Toggle option' : type === 'radio' ? 'Single selection' : type === 'range' ? 'Slider control' : 'Color picker'}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 10:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.10: Semantic HTML</h2>
          <p className={styles.paragraph}>Semantic HTML elements clearly describe their meaning to both the browser and the developer. Instead of using generic <code>&lt;div&gt;</code> tags everywhere, semantic elements make your code readable and accessible.</p>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<!-- Non-Semantic (bad) -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="content">...</div>

<!-- Semantic (good) ✅ -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>Content here...</p>
  </article>
  <aside>
    <h3>Related Links</h3>
  </aside>
</main>
<footer>
  <p>&copy; 2024 Skillofied</p>
</footer>`}</code></pre>
          <h3 className={styles.subtitle}>Semantic Elements</h3>
          <table className={styles.table}>
            <thead><tr><th>Element</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><code>&lt;header&gt;</code></td><td>Page or section header</td></tr>
              <tr><td><code>&lt;nav&gt;</code></td><td>Navigation links</td></tr>
              <tr><td><code>&lt;main&gt;</code></td><td>Main content area (only one per page)</td></tr>
              <tr><td><code>&lt;article&gt;</code></td><td>Self-contained content (blog post, news)</td></tr>
              <tr><td><code>&lt;section&gt;</code></td><td>Thematic grouping of content</td></tr>
              <tr><td><code>&lt;aside&gt;</code></td><td>Side content (sidebars, related links)</td></tr>
              <tr><td><code>&lt;footer&gt;</code></td><td>Page or section footer</td></tr>
            </tbody>
          </table>
        </div>
      );

    case 11:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 2.11: Accessibility Basics</h2>
          <p className={styles.paragraph}>Web accessibility (a11y) ensures that websites are usable by everyone, including people with visual, auditory, motor, or cognitive disabilities.</p>
          <h3 className={styles.subtitle}>Key Accessibility Principles</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}><span className={styles.stepNum}>1</span><p className={styles.stepText}><strong>Alt Text</strong>: Always provide <code>alt</code> attributes on images. Screen readers use them to describe images to blind users.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>2</span><p className={styles.stepText}><strong>Semantic HTML</strong>: Use proper tags (<code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;button&gt;</code>) instead of generic <code>&lt;div&gt;</code> with click handlers.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>3</span><p className={styles.stepText}><strong>Keyboard Navigation</strong>: All interactive elements must be accessible via Tab key. Use <code>tabindex</code> when needed.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>4</span><p className={styles.stepText}><strong>ARIA Attributes</strong>: Use <code>aria-label</code>, <code>aria-describedby</code>, <code>role</code> to provide extra context for assistive technologies.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>5</span><p className={styles.stepText}><strong>Color Contrast</strong>: Ensure text has sufficient contrast against backgrounds (WCAG recommends 4.5:1 ratio for normal text).</p></div>
          </div>
          <div className={styles.codeLabel}>HTML</div>
          <pre className={styles.codeBlock}><code>{`<!-- Good accessibility practices -->
<img src="logo.png" alt="Skillofied company logo">

<button aria-label="Close modal">✕</button>

<input type="text" id="search" aria-label="Search courses">

<nav aria-label="Main navigation">
  <a href="/">Home</a>
  <a href="/courses">Courses</a>
</nav>`}</code></pre>
        </div>
      );

    case 12:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>HTML Mini Project: Personal Profile Page</h2>
          <p className={styles.paragraph}>Apply everything you've learned in Module 2 by building a <strong>Personal Profile Page</strong> using only HTML.</p>
          <h3 className={styles.subtitle}>Project Requirements</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}><span className={styles.stepNum}>1</span><p className={styles.stepText}>Create a proper HTML5 document structure with <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>2</span><p className={styles.stepText}>Add a <code>&lt;header&gt;</code> with your name as <code>&lt;h1&gt;</code> and a navigation bar with at least 3 links.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>3</span><p className={styles.stepText}>Create an "About Me" section with a paragraph and a profile image using <code>&lt;figure&gt;</code>.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>4</span><p className={styles.stepText}>Add a "Skills" section with an unordered list of at least 5 technologies.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>5</span><p className={styles.stepText}>Create a "Contact" form with name, email, message textarea, and submit button.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>6</span><p className={styles.stepText}>Add a <code>&lt;footer&gt;</code> with copyright text and social media links.</p></div>
          </div>
          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>🎯 Deliverable</p>
            <p className={styles.tipBoxText}>Create a file named <code>profile.html</code>. It should open correctly in a browser showing your personal profile page with all the above elements. No CSS required yet — focus on structure only!</p>
          </div>
        </div>
      );

    case 13:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 2 Quiz: HTML Fundamentals</h2>
          <p className={styles.paragraph}>Test your understanding of HTML concepts covered in this module:</p>
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
                      if (quizSubmitted) {
                        if (opt === q.correctAnswer) optStyle = styles.quizBlockOptionCorrect;
                        else if (selected === opt) optStyle = styles.quizBlockOptionIncorrect;
                      }
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
                <span className={styles.quizScoreText}>Score: {quizScore} / {quizQuestions.length} {quizScore === quizQuestions.length ? '🎉 Perfect!' : '👍 Keep studying!'}</span>
                <button className={styles.backBtn} onClick={() => { setQuizSubmitted(false); setQuizScore(null); setQuizAnswers({}); }}>Retry Quiz</button>
              </div>
            )}
          </div>
        </div>
      );

    case 14:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 2 Assignment</h2>
          <p className={styles.paragraph}>Answer the following questions to complete the HTML Fundamentals module:</p>
          <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
            <li>1. What is the difference between <code>&lt;div&gt;</code> and <code>&lt;section&gt;</code>?</li>
            <li>2. List all the input types you know and their purposes.</li>
            <li>3. Why is semantic HTML important for accessibility?</li>
            <li>4. Write the HTML code for a table showing a 3-student grade sheet.</li>
            <li>5. What is the difference between <code>&lt;strong&gt;</code> and <code>&lt;b&gt;</code>?</li>
          </ol>
          {!assignmentSubmitted ? (
            <div>
              <textarea className={styles.assignmentBox} placeholder="Type your answers here..." value={assignmentText} onChange={(e) => setAssignmentText(e.target.value)} />
              <button className={styles.saveBtn} onClick={() => { if (assignmentText.trim().length > 10) setAssignmentSubmitted(true); }} disabled={assignmentText.trim().length < 10}>Submit Assignment</button>
            </div>
          ) : (
            <div className={styles.completeBadge} style={{ marginTop: '24px' }}>
              <span>✓ Assignment Submitted! A mentor will review your work. 🎉</span>
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Module2;
