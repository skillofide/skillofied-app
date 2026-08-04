import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

interface QAItem {
  q: string;
  a: string;
}

const FAQS_DATA: Record<number, { title: string; list: QAItem[] }> = {
  1: {
    title: 'HTML & CSS Interview Questions',
    list: [
      { q: 'What is the difference between block, inline and inline-block elements?', a: 'A block element starts on a new line and fills the available width (div, p, h1). An inline element flows within text and ignores width, height and vertical margins (span, a, strong). An inline-block element flows inline like text but does accept width, height and all margins, which makes it useful for buttons and nav items.' },
      { q: 'Explain the CSS box model.', a: 'Every element is a box made of content, padding, border and margin, in that order outward. By default width applies only to the content, so padding and border are added on top. Setting box-sizing: border-box makes width include padding and border, which is why most projects apply it globally.' },
      { q: 'What is the difference between position relative, absolute, fixed and sticky?', a: 'Relative offsets an element from its normal position while keeping its space reserved. Absolute removes it from flow and positions it against the nearest positioned ancestor. Fixed positions it against the viewport so it does not scroll. Sticky behaves as relative until a scroll threshold is crossed, then behaves as fixed.' },
      { q: 'How does CSS specificity work?', a: 'Specificity is scored as inline styles, then IDs, then classes, attributes and pseudo-classes, then elements. A higher score wins regardless of source order; equal scores are resolved by whichever rule comes last. !important overrides the cascade entirely and should be a last resort because it makes styles hard to override later.' },
      { q: 'What are semantic HTML elements and why do they matter?', a: 'Semantic elements describe their meaning rather than their appearance: header, nav, main, article, section, aside, footer. They improve accessibility because screen readers use them to build a navigable document outline, they help search engines understand page structure, and they make markup easier for other developers to read.' },
      { q: 'Explain Flexbox versus CSS Grid.', a: 'Flexbox is one-dimensional, laying items out along a single row or column, and is ideal for navigation bars, toolbars and distributing space among siblings. Grid is two-dimensional, controlling rows and columns simultaneously, and is ideal for page layouts. They compose well: a Grid page layout containing Flexbox components is a common pattern.' },
    ],
  },
  2: {
    title: 'JavaScript Interview Questions',
    list: [
      { q: 'What is the difference between var, let and const?', a: 'var is function-scoped and hoisted with an initial value of undefined, which causes surprising bugs. let and const are block-scoped and sit in the temporal dead zone until declared, so accessing them early throws a clear ReferenceError. const prevents reassignment of the binding but does not make objects immutable — you can still mutate their properties.' },
      { q: 'Explain closures with a practical use.', a: 'A closure is a function that retains access to variables from the scope in which it was defined, even after that scope has returned. This is what powers data privacy in the module pattern, function factories, and the way event handlers and React hooks capture values. The classic bug is a closure inside a loop capturing the wrong variable, which let fixes because it creates a fresh binding per iteration.' },
      { q: 'What is the difference between == and ===?', a: '== performs type coercion before comparing, so "5" == 5 is true and null == undefined is true. === compares type and value with no coercion. Always use === unless you deliberately want the loose null-or-undefined check, because coercion rules are full of surprises.' },
      { q: 'Explain the event loop.', a: 'JavaScript is single-threaded with one call stack. Asynchronous work is handed to the browser or Node, and when it completes its callback is queued. The event loop moves queued callbacks onto the stack once the stack is empty. Microtasks (promise callbacks) drain completely before the next macrotask (setTimeout, I/O), which is why a resolved promise runs before a setTimeout of 0.' },
      { q: 'How does the this keyword resolve?', a: 'In a regular function, this depends on how the function is called: the object before the dot for a method, the new instance for a constructor, undefined in strict mode for a bare call. Arrow functions have no own this and inherit it lexically from the enclosing scope, which is why they are preferred for callbacks inside class methods.' },
      { q: 'What is the difference between map, filter, reduce and forEach?', a: 'map transforms each element and returns a new array of the same length. filter returns a new array containing only elements passing a test. reduce folds the array into a single accumulated value. forEach runs a side effect and returns undefined, so it cannot be chained. Choose based on what you want back, not on habit.' },
      { q: 'Explain promises versus async/await.', a: 'Both handle asynchronous results. Promises chain with .then and .catch. async/await is syntactic sugar over promises that lets you write asynchronous code in a sequential style, with try/catch for errors. Await pauses only the enclosing async function, not the thread. Use Promise.all when independent operations should run concurrently rather than awaiting each in turn.' },
    ],
  },
  3: {
    title: 'React Interview Questions',
    list: [
      { q: 'What is the virtual DOM and how does reconciliation work?', a: 'The virtual DOM is a lightweight in-memory representation of the UI. When state changes React builds a new tree, diffs it against the previous one, and applies only the minimal set of real DOM mutations. Real DOM operations are expensive, so batching and minimising them is what makes React fast.' },
      { q: 'Why do lists need a key prop?', a: 'Keys let React match elements between renders. Without stable keys React cannot tell whether an item moved or changed, so it may recreate DOM nodes and lose component state such as input focus or scroll position. Using the array index as a key is safe only for static lists that are never reordered, inserted into, or filtered.' },
      { q: 'Explain useState versus useReducer.', a: 'useState is right for independent, simple values. useReducer is better when several pieces of state change together, when the next state depends on the previous one in non-trivial ways, or when update logic is complex enough to benefit from being centralised in a pure reducer function that is easy to test.' },
      { q: 'How does useEffect work, and what does the dependency array do?', a: 'useEffect runs after render to perform side effects such as data fetching or subscriptions. An empty dependency array runs it once on mount. Listing dependencies re-runs it whenever any of them change. Omitting the array entirely re-runs it after every render. Returning a function from the effect provides cleanup, which is essential for cancelling subscriptions and timers.' },
      { q: 'What causes an infinite re-render loop with useEffect?', a: 'Typically setting state inside an effect whose dependency array contains that same state, or depending on an object or function recreated on every render. The fix is to correct the dependencies, or to memoise the dependency with useMemo or useCallback so its identity is stable across renders.' },
      { q: 'When would you use useMemo and useCallback?', a: 'useMemo caches an expensive computed value between renders; useCallback caches a function identity. Both exist to prevent unnecessary work or unnecessary re-renders of memoised children. They are not free — each adds memory and comparison cost — so apply them to measured problems rather than by default.' },
      { q: 'What is prop drilling and how do you avoid it?', a: 'Prop drilling is passing props through intermediate components that do not use them, purely to reach a deep descendant. The Context API solves this for genuinely global values such as theme, locale or the current user. For large, frequently-changing application state a dedicated store such as Redux Toolkit or Zustand is usually a better fit than context.' },
      { q: 'What is the difference between controlled and uncontrolled components?', a: 'A controlled input has its value driven by React state and updated through onChange, making React the single source of truth and enabling validation on every keystroke. An uncontrolled input keeps its value in the DOM and is read via a ref. Controlled is the default recommendation; uncontrolled suits file inputs and integrations with non-React code.' },
    ],
  },
  4: {
    title: 'Performance & Tooling Questions',
    list: [
      { q: 'How would you improve the load performance of a React app?', a: 'Code-split routes with React.lazy and Suspense so users download only what they need. Compress and correctly size images, and serve modern formats. Enable gzip or brotli on the server. Remove unused dependencies and check the bundle with a visualiser. Cache static assets aggressively with content hashes in the filenames.' },
      { q: 'What are the Core Web Vitals?', a: 'Largest Contentful Paint measures loading, and should be under 2.5 seconds. Interaction to Next Paint measures responsiveness, and should be under 200 milliseconds. Cumulative Layout Shift measures visual stability, and should be under 0.1. They are real user metrics and affect search ranking.' },
      { q: 'How do you prevent layout shift?', a: 'Always set explicit width and height (or aspect-ratio) on images and video so the browser reserves space before the asset loads. Reserve space for ads and embeds. Avoid inserting content above existing content after load. Use font-display: swap with a metric-compatible fallback to reduce shift when web fonts arrive.' },
      { q: 'Explain debouncing versus throttling.', a: 'Debouncing delays execution until a pause in events, so a search-as-you-type input fires one request after the user stops typing. Throttling guarantees execution at most once per interval, which suits scroll and resize handlers. Debounce when you only care about the final state; throttle when you need periodic updates during a continuous stream.' },
      { q: 'What is the difference between localStorage, sessionStorage and cookies?', a: 'localStorage persists until explicitly cleared and is not sent to the server. sessionStorage is cleared when the tab closes. Cookies are sent with every matching HTTP request, which makes them suitable for authentication but adds overhead. For auth tokens an httpOnly cookie is safer than localStorage, which any XSS payload can read.' },
      { q: 'How do you handle errors in a React application?', a: 'Wrap route or feature boundaries in an error boundary component to catch render-time errors and show a fallback rather than a blank screen. Note that error boundaries do not catch errors in event handlers, asynchronous code, or the boundary itself — handle those with try/catch. Report caught errors to a monitoring service.' },
    ],
  },
};

const CODING_CHALLENGES = [
  { title: 'Debounce implementation', focus: 'Closures and setTimeout. Return a function that clears and resets a pending timer on each call.' },
  { title: 'Deep clone an object', focus: 'Recursion plus handling arrays, dates and null. Discuss why structuredClone is now the built-in answer.' },
  { title: 'Flatten a nested array', focus: 'Recursion or Array.prototype.flat(Infinity). Be ready to write it without the built-in.' },
  { title: 'Build a custom useFetch hook', focus: 'useState and useEffect with loading, error and data states, plus cleanup to avoid setting state after unmount.' },
  { title: 'Implement Promise.all from scratch', focus: 'Resolve when every promise settles, reject immediately on the first rejection, and preserve input order.' },
  { title: 'Group an array of objects by a key', focus: 'reduce building an accumulator object. The modern answer is Object.groupBy.' },
  { title: 'Infinite scroll list', focus: 'IntersectionObserver on a sentinel element, with pagination state and a guard against duplicate fetches.' },
  { title: 'Controlled form with validation', focus: 'Controlled inputs, per-field error state, and validating on blur rather than on every keystroke.' },
];

const MOCK_QUESTIONS: Record<string, string[]> = {
  'JavaScript': [
    'Explain the event loop and the difference between microtasks and macrotasks.',
    'What is a closure? Give a practical example where you have used one.',
  ],
  'React': [
    'Walk me through what happens when you call setState. Why is it asynchronous?',
    'How would you diagnose and fix a component that re-renders too often?',
  ],
  'CSS & Layout': [
    'When would you reach for Grid over Flexbox, and why?',
    'How does specificity decide which rule wins, and how do you avoid !important?',
  ],
};

const InterviewPrep: React.FC<Props> = ({ page }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Mock interview simulator state
  const [selectedTopic, setSelectedTopic] = useState('JavaScript');
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [generatingFeedback, setGeneratingFeedback] = useState(false);

  const handleStartInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestionIdx(0);
    setUserAnswer('');
    setFeedback(null);
  };

  const handleNextQuestion = () => {
    setGeneratingFeedback(true);
    setTimeout(() => {
      const words = userAnswer.trim().split(/\s+/).length;
      const depth = words > 60 ? 'strong' : words > 25 ? 'adequate' : 'thin';
      setFeedback(
        `[Answer Analysis]\n\n` +
        `Length      : ${words} words (${depth} depth)\n` +
        `Topic       : ${selectedTopic}\n\n` +
        `Guidance:\n` +
        (depth === 'thin'
          ? '- Expand your answer. Interviewers expect a definition, then a trade-off, then a concrete example from your own work.'
          : '- Good depth. Make sure you closed with a concrete example, which is what separates memorised answers from real experience.') +
        `\n- Name the trade-off explicitly. Every technical choice costs something.` +
        `\n- Finish by stating when you would NOT use the approach.`
      );
      setGeneratingFeedback(false);
    }, 900);
  };

  // ─── Pages 1-4: Question banks ──────────────────────────────────────────
  if (page >= 1 && page <= 4) {
    const section = FAQS_DATA[page];

    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>{section.title}</h2>
        <p className={styles.paragraph}>
          Click any question to reveal a model answer. Practise saying your version aloud before
          reading the answer — recall is what an interview actually tests.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
          {section.list.map((item, idx) => (
            <div
              key={idx}
              style={{
                border: '1.5px solid var(--border)',
                borderRadius: '10px',
                background: 'var(--bg-surface-2)',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '14px 16px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span>{item.q}</span>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>
                  {expandedIndex === idx ? '−' : '+'}
                </span>
              </button>

              {expandedIndex === idx && (
                <div
                  style={{
                    padding: '0 16px 16px',
                    fontSize: '13px',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    borderTop: '1px solid var(--border)',
                    paddingTop: '12px',
                  }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ─── Page 5: Coding challenges ──────────────────────────────────────────
  if (page === 5) {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>Coding Challenges Guide</h2>
        <p className={styles.paragraph}>
          These problems come up repeatedly in frontend technical rounds. Implement each one from
          scratch without looking at the focus hint, then compare.
        </p>

        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            paddingLeft: '20px',
            fontSize: '13.5px',
            color: 'var(--text-secondary)',
            marginTop: '16px',
          }}
        >
          {CODING_CHALLENGES.map((c, idx) => (
            <li key={idx}>
              <strong>
                {idx + 1}. {c.title}
              </strong>
              <br />
              <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>Focus: {c.focus}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // ─── Page 6: Mock interview simulator ───────────────────────────────────
  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>Interactive Mock Interview Simulator</h2>
      <p className={styles.paragraph}>
        Pick a topic and answer as you would out loud in a real interview. Typing the answer forces
        you to structure it, which is the hardest part under pressure.
      </p>

      {!interviewStarted ? (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '16px' }}>
          <select
            className={styles.inputField}
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            style={{ minWidth: '160px' }}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="CSS & Layout">CSS &amp; Layout</option>
          </select>
          <button className={styles.saveBtn} onClick={handleStartInterview}>
            Start Mock Interview
          </button>
        </div>
      ) : (
        <div
          style={{
            background: 'var(--bg-surface-2)',
            padding: '20px',
            borderRadius: '12px',
            border: '1.5px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            marginTop: '16px',
          }}
        >
          <h4 style={{ margin: 0, color: 'var(--accent)', fontSize: '14px' }}>
            Question {currentQuestionIdx + 1} of {MOCK_QUESTIONS[selectedTopic].length}
          </h4>
          <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>
            💬 "{MOCK_QUESTIONS[selectedTopic][currentQuestionIdx]}"
          </p>

          <textarea
            className={styles.assignmentBox}
            placeholder="Type your explanation here..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className={styles.saveBtn}
              onClick={handleNextQuestion}
              disabled={userAnswer.trim().length < 5 || generatingFeedback}
            >
              {generatingFeedback ? 'Analyzing...' : 'Generate Answer Feedback'}
            </button>

            {currentQuestionIdx < MOCK_QUESTIONS[selectedTopic].length - 1 ? (
              <button
                className={styles.choiceBtn}
                onClick={() => {
                  setCurrentQuestionIdx((i) => i + 1);
                  setUserAnswer('');
                  setFeedback(null);
                }}
              >
                Next Question
              </button>
            ) : (
              <button className={styles.choiceBtn} onClick={() => setInterviewStarted(false)}>
                Exit Interview
              </button>
            )}
          </div>

          {feedback && (
            <pre
              style={{
                margin: '10px 0 0 0',
                background: '#09090b',
                color: '#38bdf8',
                padding: '16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap',
              }}
            >
              <code>{feedback}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default InterviewPrep;
