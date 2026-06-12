import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const Module14: React.FC<Props> = ({ page }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  // Router sandbox state
  const [currentSimUrl, setCurrentSimUrl] = useState('/');
  const [isSimAuth, setIsSimAuth] = useState(false);

  const quizQuestions = [
    { id: 1, question: 'Q1: What is a key characteristic of Single Page Applications (SPAs) routing?', options: ['A. The server loads a new HTML page on every navigation click', 'B. Page changes happen client-side in the browser without reloading the page', 'C. Routing must use hashes only', 'D. JavaScript is compiled to native code'], correctAnswer: 'B. Page changes happen client-side in the browser without reloading the page' },
    { id: 2, question: 'Q2: Which React Router component is used to link to different routes instead of standard anchor tags?', options: ['A. <a href>', 'B. <Link>', 'C. <RouterLink>', 'D. <Navigate>'], correctAnswer: 'B. <Link>' },
    { id: 3, question: 'Q3: How do you extract dynamic path parameters like "/user/:id" inside components?', options: ['A. useParams() hook', 'B. useRoute() hook', 'C. props.match.params', 'D. document.location.search'], correctAnswer: 'A. useParams() hook' },
    { id: 4, question: 'Q4: What component serves as a placeholder for child routes in a nested routing setup?', options: ['A. <Routes>', 'B. <Outlet />', 'C. <Fragment>', 'D. <Navigate>'], correctAnswer: 'B. <Outlet />' },
    { id: 5, question: 'Q5: How do you redirect a user programmatically inside event handlers or hooks?', options: ['A. useNavigate() hook', 'B. window.location.href', 'C. <Link to="...">', 'D. useParams()'], correctAnswer: 'A. useNavigate() hook' },
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
          <h2 className={styles.cardTitle}>Lesson 14.1: Routing Basics</h2>
          <p className={styles.paragraph}>In standard websites, browser clicks trigger HTTP server requests, fetching entirely new HTML documents. This causes visible white screen flashes.</p>
          <p className={styles.paragraph}>In a **Single Page Application (SPA)**, client-side routing intercepts browser transitions. It updates the layout view by swapping React components dynamically, resulting in smooth, instant transitions.</p>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 14.2: Browser Router</h2>
          <p className={styles.paragraph}>React Router is the standard routing library for React applications. It maps URLs to specific component hierarchies.</p>
          
          <div className={styles.codeLabel}>Router Configuration (App.tsx)</div>
          <pre className={styles.codeBlock}><code>{`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}</code></pre>
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 14.3: Route Parameters</h2>
          <p className={styles.paragraph}>Dynamic routing allows matching variable path values using colon syntax <code>:paramName</code>. These parameters can be extracted inside components via the <code>useParams</code> hook.</p>
          
          <div className={styles.codeLabel}>Route Mapping</div>
          <pre className={styles.codeBlock}><code>{`<Route path="/profile/:userId" element={<UserProfile />} />`}</code></pre>

          <div className={styles.codeLabel}>UserProfile Component</div>
          <pre className={styles.codeBlock}><code>{`import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <h3>Viewing profile for user ID: {userId}</h3>;
}`}</code></pre>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 14.4: Nested Routes</h2>
          <p className={styles.paragraph}>Nested routing enables rendering sub-layouts inside parent templates. The parent component uses the <code>&lt;Outlet /&gt;</code> component to specify where child routes should mount.</p>
          
          <div className={styles.codeLabel}>Nested Routes Definition</div>
          <pre className={styles.codeBlock}><code>{`<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="analytics" element={<Analytics />} />
  <Route path="settings" element={<Settings />} />
</Route>`}</code></pre>

          <div className={styles.codeLabel}>DashboardLayout Component</div>
          <pre className={styles.codeBlock}><code>{`import { Outlet, Link } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="dashboard-grid">
      <aside>
        <Link to="analytics">Analytics</Link>
        <Link to="settings">Settings</Link>
      </aside>
      <main>
        {/* Child components render here */}
        <Outlet />
      </main>
    </div>
  );
}`}</code></pre>
        </div>
      );

    case 5:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 14.5: Protected Routes</h2>
          <p className={styles.paragraph}>Protected routes guard page access, checking credentials (e.g. login tokens) and redirecting unauthenticated visitors to auth screens.</p>
          
          <div className={styles.codeLabel}>Protected Route wrapper</div>
          <pre className={styles.codeBlock}><code>{`import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Usage in App:
// <Route path="/admin" element={
//   <ProtectedRoute isAuthenticated={isLogged}>
//     <AdminPanel />
//   </ProtectedRoute>
// } />`}</code></pre>
        </div>
      );

    case 6:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Routing Project</h2>
          <p className={styles.paragraph}>Build an Admin Dashboard with multiple sub-routes (Overview, Settings, Profile) protected by simulated credentials check.</p>
          
          <h3 className={styles.subtitle}>Tab-Based Router Simulator</h3>
          <div style={{ background: 'var(--bg-surface-2)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', fontFamily: 'monospace' }}>Mock Address Bar: <code>http://app.local{currentSimUrl}</code></span>
              <button className={styles.backBtn} onClick={() => {
                setIsSimAuth(!isSimAuth);
                if (isSimAuth) setCurrentSimUrl('/');
              }}>
                {isSimAuth ? 'Log Out' : 'Simulate Log In'}
              </button>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <button className={styles.saveBtn} onClick={() => setCurrentSimUrl('/')}>Go to Home</button>
              <button className={styles.saveBtn} onClick={() => setCurrentSimUrl('/dashboard')}>Go to /dashboard</button>
              <button className={styles.saveBtn} onClick={() => setCurrentSimUrl('/dashboard/settings')}>Go to /dashboard/settings</button>
            </div>

            <div style={{ background: 'var(--bg-surface-1)', padding: '16px', borderRadius: '8px' }}>
              {currentSimUrl === '/' && <div><h4>🏠 Home Page</h4><p style={{ margin: 0, fontSize: '13px' }}>Public home screen. Anyone can view this!</p></div>}
              
              {currentSimUrl.startsWith('/dashboard') && (
                !isSimAuth ? (
                  <div style={{ color: '#ef4444' }}>
                    <h4>🔒 Protected Route Access Denied!</h4>
                    <p style={{ margin: 0, fontSize: '13px' }}>Please click "Simulate Log In" above to access protected dashboard pages.</p>
                  </div>
                ) : (
                  <div>
                    <h4>📊 Admin Dashboard Outlet</h4>
                    {currentSimUrl === '/dashboard' && <p style={{ margin: 0, fontSize: '13px' }}>Viewing Dashboard Analytics Overview.</p>}
                    {currentSimUrl === '/dashboard/settings' && <p style={{ margin: 0, fontSize: '13px' }}>Viewing Dashboard Settings configurations panel.</p>}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 14 Quiz</h2>
          <p className={styles.paragraph}>Verify your React Router knowledge:</p>
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
          <h2 className={styles.cardTitle}>Module 14 Assignment</h2>
          <p className={styles.paragraph}>Write down short answers for the following prompts to complete Module 14:</p>
          <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
            <li>1. Describe single-page application (SPA) routing advantages over traditional multi-page setups.</li>
            <li>2. Compare the use of Link and standard anchor (a) tags in React Router.</li>
            <li>3. How are dynamic route parameters defined and retrieved inside React components?</li>
            <li>4. What is nested routing? Why is Outlet required?</li>
            <li>5. Explain the execution workflow of a ProtectedRoute wrapper component.</li>
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

export default Module14;
