import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import BottomNav from './components/layout/BottomNav';
import CoursesSection from './components/courses/CoursesSection';
import PracticeSection from './components/practice/PracticeSection';
import PendingActionsSection from './components/pending/PendingActionsSection';
import Login from './components/auth/Login';
import ProfilePage from './components/profile/ProfilePage';
import styles from './App.module.css';

type Tab  = 'Home' | 'Course' | 'Practice' | 'Placement';
type Page = 'dashboard' | 'profile';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn]   = useState(false);
  const [activeTab, setActiveTab]     = useState<Tab>('Home');
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  if (currentPage === 'profile') {
    return (
      <div className={styles.appShell}>
        <Navbar onProfileClick={() => setCurrentPage('dashboard')} />
        <ProfilePage onBack={() => setCurrentPage('dashboard')} />
      </div>
    );
  }

  return (
    <div className={styles.appShell}>
      <Navbar onProfileClick={() => setCurrentPage('profile')} />
      <main className={styles.main}>
        <CoursesSection />
        <PracticeSection />
        <PendingActionsSection />
      </main>
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export default App;
