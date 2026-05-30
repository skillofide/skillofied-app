import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BottomNav from './components/layout/BottomNav';
import CoursesSection from './components/courses/CoursesSection';
import PracticeSection from './components/practice/PracticeSection';
import PracticeDetail from './components/practice/PracticeDetail';
import SolveProblemPage from './components/practice/SolveProblemPage';
import PendingActionsSection from './components/pending/PendingActionsSection';
import Login from './components/auth/Login';
import ProfilePage from './components/profile/ProfilePage';
import styles from './App.module.css';

type Tab = 'Home' | 'Course' | 'Practice' | 'Placement';

const ComingSoon: React.FC<{ label: string }> = ({ label }) => (
  <div className={styles.comingSoon}>
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
    <h2>{label}</h2>
    <p>This section is coming soon!</p>
  </div>
);

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  const getActiveTab = (pathname: string): Tab => {
    if (pathname === '/courses') return 'Course';
    if (pathname === '/practice') return 'Practice';
    if (pathname === '/placement') return 'Placement';
    return 'Home';
  };

  const activeTab = getActiveTab(location.pathname);

  const handleTabChange = (tab: Tab) => {
    if (tab === 'Home') navigate('/');
    else if (tab === 'Course') navigate('/courses');
    else if (tab === 'Practice') navigate('/practice');
    else if (tab === 'Placement') navigate('/placement');
  };

  useEffect(() => {
    if (!isLoggedIn && location.pathname !== '/login') {
      navigate('/login', { replace: true });
    } else if (isLoggedIn && location.pathname === '/login') {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, location.pathname, navigate]);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login onLogin={handleLogin} />}
      />
      <Route
        path="/problems/:id/solve"
        element={isLoggedIn ? <SolveProblemPage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/*"
        element={
          isLoggedIn ? (
            <div className={styles.appShell}>
              <Navbar
                onProfileClick={() => navigate('/profile')}
                onLogoClick={() => navigate('/')}
              />
              <main className={styles.main}>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <CoursesSection />
                        <PracticeSection />
                        <PendingActionsSection />
                      </>
                    }
                  />
                  <Route path="/courses" element={<CoursesSection />} />
                  <Route path="/practice" element={<PracticeSection />} />
                  <Route path="/practice/:id" element={<PracticeDetail />} />
                  <Route path="/placement" element={<ComingSoon label="Placement" />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <BottomNav active={activeTab} onChange={handleTabChange} />
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default App;

