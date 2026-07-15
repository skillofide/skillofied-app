import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BottomNav from './components/layout/BottomNav';
import Sidebar from './components/layout/Sidebar';
import CoursesSection from './components/courses/CoursesSection';
import FrontendCoursePage from './components/courses/FrontendCoursePage';
import JavaCoursePage from './components/courses/JavaCoursePage';
import SqlCoursePage from './components/courses/SqlCoursePage';
import CoursePlaceholderPage from './components/courses/CoursePlaceholderPage';
import PracticeSection from './components/practice/PracticeSection';
import PracticeDetail from './components/practice/PracticeDetail';
import SolveProblemPage from './components/practice/SolveProblemPage';
import PendingActionsSection from './components/pending/PendingActionsSection';
import PlacementSection from './components/placement/PlacementSection';
import Login from './components/auth/Login';
import ProfilePage from './components/profile/ProfilePage';
import { getMyCoursesApi } from './api';
import styles from './App.module.css';
import TodaySchedule from './components/dashboard/TodaySchedule';

type Tab = 'Home' | 'Course' | 'Practice' | 'Placement';



const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    // Require both the flag AND a real token — guards against stale sessions
    return localStorage.getItem('isLoggedIn') === 'true' && !!localStorage.getItem('token');
  });

  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      getMyCoursesApi()
        .then((data) => setEnrolledCourses(data))
        .catch((err) => console.error('Failed to load enrolled courses:', err));
    } else {
      setEnrolledCourses([]);
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login', { replace: true });
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

  const isCourseDetailPage = location.pathname.startsWith('/courses/') && location.pathname !== '/courses';

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
                onLogout={handleLogout}
                onMenuClick={() => setIsSidebarOpen(true)}
              />
              <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                enrolledCourses={enrolledCourses}
              />
              <main className={isCourseDetailPage ? styles.mainCoursePage : styles.main}>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <TodaySchedule />
                        <CoursesSection />
                        <PracticeSection isHomePage />
                        <PendingActionsSection />
                      </>
                    }
                  />
                  <Route path="/courses" element={<CoursesSection />} />
                  <Route path="/courses/frontend" element={<FrontendCoursePage />} />
                  <Route path="/courses/java" element={<JavaCoursePage />} />
                  <Route path="/courses/sql" element={<SqlCoursePage />} />
                  <Route path="/courses/:courseId" element={<CoursePlaceholderPage />} />
                  <Route path="/courses/seo" element={<CoursePlaceholderPage />} />
                  <Route path="/courses/digital-marketing" element={<CoursePlaceholderPage />} />
                  <Route path="/courses/testing" element={<CoursePlaceholderPage />} />
                  <Route path="/practice" element={<PracticeSection />} />
                  <Route path="/practice/:id" element={<PracticeDetail />} />
                  <Route path="/placement" element={<PlacementSection />} />
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

