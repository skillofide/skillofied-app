import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const FinalAssessment: React.FC<Props> = ({ page }) => {
  const [theoryAnswers, setTheoryAnswers] = useState<Record<number, string>>({});
  const [theorySubmitted, setTheorySubmitted] = useState(false);
  const [theoryScore, setTheoryScore] = useState<number | null>(null);

  const [codeAnswer, setCodeAnswer] = useState('');
  const [codeChecked, setCodeChecked] = useState<boolean | null>(null);

  const [expandedViva, setExpandedViva] = useState<number | null>(null);

  const theoryQuestions = [
    { id: 1, question: 'Q1: What does CSS Box Model consist of, from outside to inside?', options: ['A. Padding, Border, Margin, Content', 'B. Margin, Border, Padding, Content', 'C. Content, Padding, Border, Margin', 'D. Border, Margin, Content, Padding'], correctAnswer: 'B. Margin, Border, Padding, Content' },
    { id: 2, question: 'Q2: What is the main difference between LocalStorage and SessionStorage?', options: ['A. Storage size limits', 'B. Data deletion timeline', 'C. Encryption types', 'D. None of the above'], correctAnswer: 'B. Data deletion timeline' },
    { id: 3, question: 'Q3: Why is React state mutation directly discouraged?', options: ['A. It compiles slowly', 'B. It blocks type checks', 'C. It skips rendering updates', 'D. It throws syntax errors'], correctAnswer: 'C. It skips rendering updates' },
    { id: 4, question: 'Q4: What is the main utility of git remote repository origin references?', options: ['A. Storing backup config settings', 'B. Mapping local folders to cloud databases', 'C. Hosting assets lists', 'D. Linking local repositories to remote GitHub locations'], correctAnswer: 'D. Linking local repositories to remote GitHub locations' },
  ];

  const handleTheorySubmit = () => {
    let s = 0;
    theoryQuestions.forEach(q => {
      if (theoryAnswers[q.id] === q.correctAnswer) s++;
    });
    setTheoryScore(s);
    setTheorySubmitted(true);
  };

  const handleCheckCode = () => {
    const cleaned = codeAnswer.replace(/\s+/g, '').toLowerCase();
    if (cleaned.includes('returnstr.split(\'\').reverse().join(\'\')') || 
        cleaned.includes('returnstr.split("").reverse().join("")') || 
        cleaned.includes('return[...str].reverse().join(\'\')') ||
        cleaned.includes('return[...str].reverse().join("")')) {
      setCodeChecked(true);
    } else {
      setCodeChecked(false);
    }
  };

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Final Theory Test</h2>
          <p className={styles.paragraph}>Verify your complete understanding of web building blocks, styling, programming logic, React, and deployments.</p>
          
          <div className={styles.quizCardList}>
            {theoryQuestions.map(q => {
              const selected = theoryAnswers[q.id];
              return (
                <div key={q.id} className={styles.quizBlock}>
                  <h4 className={styles.quizBlockQuestion}>{q.question}</h4>
                  <div className={styles.quizBlockOptions}>
                    {q.options.map(opt => {
                      let optStyle = styles.quizBlockOption;
                      if (selected === opt) optStyle = styles.quizBlockOptionSelected;
                      if (theorySubmitted) {
                        if (opt === q.correctAnswer) optStyle = styles.quizBlockOptionCorrect;
                        else if (selected === opt) optStyle = styles.quizBlockOptionIncorrect;
                      }
                      return <button key={opt} className={optStyle} onClick={() => { if (!theorySubmitted) setTheoryAnswers(p => ({...p, [q.id]: opt})); }} disabled={theorySubmitted}>{opt}</button>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.quizSubmitRow}>
            {!theorySubmitted ? (
              <button className={styles.saveBtn} onClick={handleTheorySubmit} disabled={Object.keys(theoryAnswers).length < theoryQuestions.length}>Submit Theory Answers</button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'space-between' }}>
                <span className={styles.quizScoreText}>Score: {theoryScore} / {theoryQuestions.length} {theoryScore === theoryQuestions.length ? '🎉 Certificate Unlocked!' : '👍 Review incorrect options.'}</span>
                <button className={styles.backBtn} onClick={() => { setTheorySubmitted(false); setTheoryScore(null); setTheoryAnswers({}); }}>Retry Test</button>
              </div>
            )}
          </div>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Final Coding Test</h2>
          <p className={styles.paragraph}>Complete the Javascript function below to return the reverse of a string. e.g. <code>reverseString("hello")</code> returns <code>"olleh"</code>.</p>
          
          <div className={styles.codeLabel}>Write the return statement inside:</div>
          <pre className={styles.codeBlock}><code>{`function reverseString(str) {`}</code></pre>
          <input className={styles.inputField} style={{ fontFamily: 'monospace', width: '100%', maxWidth: '450px', marginBottom: '8px' }} placeholder="e.g. return str.split('').reverse().join('');" value={codeAnswer} onChange={e => setCodeAnswer(e.target.value)} />
          <pre className={styles.codeBlock}><code>{`}`}</code></pre>

          <button className={styles.saveBtn} onClick={handleCheckCode}>Compile & Run Code</button>
          {codeChecked === true && <p className={styles.successMessage} style={{ marginTop: '12px' }}>🎉 Code compilations passed! String reversed correctly.</p>}
          {codeChecked === false && <p className={styles.errorMessage} style={{ marginTop: '12px' }}>❌ Compilation error or incorrect output. Try using split, reverse, and join methods.</p>}
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Project Evaluation Rubric</h2>
          <p className={styles.paragraph}>To pass the Frontend Mastery course, your submitted projects must satisfy these grading rubrics:</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            {[
              { title: '1. Semantic Structure (15%)', desc: 'Valid HTML layout tags, appropriate header/main/footer configurations, and alt attribute definitions.' },
              { title: '2. Layout & Styles (25%)', desc: 'Flawless responsive layouts, mobile-first styling queries, container flexbox rules, grid spacing parameters.' },
              { title: '3. Programming & DOM Logic (20%)', desc: 'Proper event listeners attachments, error catches, fetch parses, LocalStorage state tracking.' },
              { title: '4. React Design (30%)', desc: 'Component structures reusability, modular props, state update bindings, routing Outlet placeholders, Context integration.' },
              { title: '5. Repository & CI Pipeline (10%)', desc: 'Descriptive Git commits history, clean README, deployed cloud build logs link.' }
            ].map((rubric, idx) => (
              <div key={idx} style={{ background: 'var(--bg-surface-2)', padding: '14px', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
                <h4 style={{ margin: '0 0 4px 0' }}>{rubric.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>{rubric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Viva / Technical Interview Prep</h2>
          <p className={styles.paragraph}>Review these standard technical interview questions commonly asked by employers hiring Junior Frontend Developers:</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
            {[
              { q: 'Q1: What does semantic HTML mean and why is it important?', a: 'Semantic HTML refers to writing tag names that clearly describe their meaning and contents (e.g. <header> instead of <div class="header">). It is critical for SEO indexes mapping, browser compatibility, screen readers, and code readability.' },
              { q: 'Q2: How does the browser rendering engine handle script tags?', a: 'When the browser parser hits a script tag, it halts HTML parsing to download and execute it. Adding "defer" or "async" allows non-blocking background downloads, resolving page speed bottlenecks.' },
              { q: 'Q3: What is Event Delegation and how does it work?', a: 'Event delegation is a design pattern where you attach a single event listener to a parent element rather than individual child elements. The parent intercepts events that bubble up from children, improving memory performance.' },
              { q: 'Q4: What is the Virtual DOM and why does React use it?', a: 'The Virtual DOM is an in-memory representation of the real browser DOM. When component state changes, React updates this virtual tree first, compares it with a snapshot, and updates only the changed parts of the real DOM, optimizing page rendering speed.' },
              { q: 'Q5: Compare arrow functions and traditional functions.', a: 'Arrow functions feature cleaner implicit return syntaxes. Crucially, arrow functions inherit "this" lexical context from their surrounding scope, whereas traditional functions bind "this" dynamically based on invocation.' }
            ].map((viva, idx) => {
              const isOpen = expandedViva === idx;
              return (
                <div key={idx} style={{ background: 'var(--bg-surface-2)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => setExpandedViva(isOpen ? null : idx)}>
                    <h4 style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-primary)' }}>{viva.q}</h4>
                    <span>{isOpen ? '▲' : '▼'}</span>
                  </div>
                  {isOpen && (
                    <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4', borderTop: '1px dashed var(--border)', paddingTop: '8px' }}>
                      {viva.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default FinalAssessment;
