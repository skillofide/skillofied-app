import React, { useState, useEffect } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const Module13: React.FC<Props> = ({ page }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  // useEffect interactive state
  const [effectCounter, setEffectCounter] = useState(0);
  const [triggerCount, setTriggerCount] = useState(0);

  useEffect(() => {
    if (effectCounter > 0) {
      setTriggerCount(t => t + 1);
    }
  }, [effectCounter]);

  // Project simulation (Stopwatch/Timer using hooks)
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const quizQuestions = [
    { id: 1, question: 'Q1: Which useEffect dependency array configuration triggers the effect only once on mount?', options: ['A. No dependency array at all', 'B. Empty dependency array []', 'C. Dependency array listing all state variables', 'D. Dependency array containing true/false values'], correctAnswer: 'B. Empty dependency array []' },
    { id: 2, question: 'Q2: What is the main purpose of the useRef hook?', options: ['A. To run asynchronous API calls', 'B. To create mutable references that persist across renders without triggering a re-render', 'C. To style dynamic elements', 'D. To memoize functions'], correctAnswer: 'B. To create mutable references that persist across renders without triggering a re-render' },
    { id: 3, question: 'Q3: How does useMemo differ from useCallback?', options: ['A. useMemo caches functions, useCallback caches variables', 'B. useMemo memoizes computed values, useCallback memoizes function instances', 'C. useMemo runs only on mount, useCallback runs on every click', 'D. There is no difference'], correctAnswer: 'B. useMemo memoizes computed values, useCallback memoizes function instances' },
    { id: 4, question: 'Q4: What naming convention should all React hooks (including custom hooks) follow?', options: ['A. start with capital letters', 'B. prefix with the word "use" (e.g. useFetch)', 'C. end with "Hook"', 'D. camelCase only'], correctAnswer: 'B. prefix with the word "use" (e.g. useFetch)' },
    { id: 5, question: 'Q5: How do you return a cleanup function from inside a useEffect hook?', options: ['A. call a cleanup() function at the end', 'B. Return a function inside the effect body', 'C. add a finally block', 'D. None of the above'], correctAnswer: 'B. Return a function inside the effect body' },
  ];

  const handleSubmitQuiz = () => {
    let s = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) s++;
    });
    setQuizScore(s);
    setQuizSubmitted(true);
  };

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 13.1: useEffect</h2>
          <p className={styles.paragraph}>The <code>useEffect</code> hook allows you to perform side effects in functional components. Side effects include data fetching, manual DOM updates, timers, subscriptions, and logging.</p>
          
          <h3 className={styles.subtitle}>Dependency Array Scenarios</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
            <li><code>useEffect(() =&gt; {})</code>: Runs on **every** render.</li>
            <li><code>useEffect(() =&gt; {}, [])</code>: Runs **only once** when component mounts.</li>
            <li><code>useEffect(() =&gt; {}, [var1])</code>: Runs on mount, and whenever <code>var1</code> changes.</li>
          </ul>

          <h3 className={styles.subtitle}>Interactive Dependency Simulator</h3>
          <div style={{ background: 'var(--bg-surface-2)', padding: '16px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <button className={styles.saveBtn} onClick={() => setEffectCounter(c => c + 1)}>Increment state variable (Current: {effectCounter})</button>
            </div>
            <p style={{ margin: 0, fontSize: '13.5px' }}>
              Effect executed count: <strong>{triggerCount}</strong> (triggered because state variable changed).
            </p>
          </div>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 13.2: useRef</h2>
          <p className={styles.paragraph}>The <code>useRef</code> hook returns a mutable ref object whose <code>.current</code> property is initialized to the passed argument. The returned object will persist for the full lifetime of the component.</p>
          
          <h3 className={styles.subtitle}>Key Characteristics</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
            <li>Modifying the <code>.current</code> value **does not** trigger a re-render.</li>
            <li>Commonly used to directly access and interact with DOM nodes (e.g. calling focus on input elements).</li>
          </ul>

          <div className={styles.codeLabel}>Direct DOM reference</div>
          <pre className={styles.codeBlock}><code>{`import React, { useRef } from 'react';

function InputFocus() {
  const inputEl = useRef(null);
  
  const onButtonClick = () => {
    // Set focus on input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}`}</code></pre>
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 13.3: useMemo</h2>
          <p className={styles.paragraph}>The <code>useMemo</code> hook returns a memoized value. It caches the result of an expensive calculation so it doesn't need to run on every single render unless dependencies change.</p>
          
          <div className={styles.codeLabel}>useMemo Syntax</div>
          <pre className={styles.codeBlock}><code>{`const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);`}</code></pre>

          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Performance Guidelines</p>
            <p className={styles.tipBoxText}>Do not wrap every single calculation in useMemo! Caching has overhead. Use it only for computationally expensive tasks or when verifying reference checks to prevent children re-renders.</p>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 13.4: useCallback</h2>
          <p className={styles.paragraph}>The <code>useCallback</code> hook returns a memoized version of a callback function that only changes if one of the dependencies has changed.</p>
          
          <div className={styles.codeLabel}>useCallback Syntax</div>
          <pre className={styles.codeBlock}><code>{`const handleEvent = useCallback(() => {
  doSomething(a);
}, [a]);`}</code></pre>

          <p className={styles.paragraph}>This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
        </div>
      );

    case 5:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 13.5: Custom Hooks</h2>
          <p className={styles.paragraph}>Custom hooks let you extract component logic into reusable functions. A custom hook is a Javascript function whose name starts with <code>use</code> and that can call other hooks.</p>
          
          <div className={styles.codeLabel}>Custom useWindowSize Hook</div>
          <pre className={styles.codeBlock}><code>{`import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`}</code></pre>
        </div>
      );

    case 6:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Hooks Project</h2>
          <p className={styles.paragraph}>Build a Stopwatch using useEffect and useRef hooks to manage accurate intervals and state mutations.</p>
          
          <h3 className={styles.subtitle}>Timer Project Playground</h3>
          <div style={{ background: 'var(--bg-surface-2)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--accent)', fontFamily: 'monospace', marginBottom: '16px' }}>
              {Math.floor(timerSeconds / 60)}m : {timerSeconds % 60}s
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <button className={styles.saveBtn} onClick={() => setTimerActive(!timerActive)}>
                {timerActive ? 'Pause Timer' : 'Start Timer'}
              </button>
              <button className={styles.backBtn} onClick={() => { setTimerActive(false); setTimerSeconds(0); }}>Reset</button>
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 13 Quiz</h2>
          <p className={styles.paragraph}>Verify your React Hooks knowledge:</p>
          <div className={styles.quizCardList}>
            {quizQuestions.map(q => {
              const selected = quizAnswers[q.id];
              return (
                <div key={q.id} className={styles.quizBlock}>
                  <h4 className={styles.quizBlockQuestion}>{q.question}</h4>
                  <div className={styles.quizBlockOptions}>
                    {q.options.map(opt => {
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
                <span className={styles.quizScoreText}>Score: {quizScore} / {quizQuestions.length} {quizScore === quizQuestions.length ? '🎉 Perfect!' : '👍 Review key points!'}</span>
                <button className={styles.backBtn} onClick={() => { setQuizSubmitted(false); setQuizScore(null); setQuizAnswers({}); }}>Retry Quiz</button>
              </div>
            )}
          </div>
        </div>
      );

    case 8:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 13 Assignment</h2>
          <p className={styles.paragraph}>Write down short answers for the following prompts to complete Module 13:</p>
          <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
            <li>1. Explain the execution phases of useEffect and dependency parameters.</li>
            <li>2. How is a cleanup function returned from useEffect and when is it executed?</li>
            <li>3. In what scenarios would you choose useRef over useState?</li>
            <li>4. Contrast useMemo and useCallback with examples.</li>
            <li>5. Create a simple custom hook called useToggle that toggles a boolean state.</li>
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

export default Module13;
