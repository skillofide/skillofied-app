import React from 'react';
import styles from './Navbar.module.css';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onProfileClick?: () => void;
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onProfileClick, onLogoClick }) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logoContainer} onClick={onLogoClick} role="button" tabIndex={0} aria-label="Go to home">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#logo-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.logoIcon}
          >
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6c5ce7" />
                <stop offset="100%" stopColor="#10ac84" />
              </linearGradient>
            </defs>
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
          <span className={styles.logoText}>Skillofied</span>
        </div>
      </div>
      <div className={styles.right}>
        <button
          id="theme-toggle-btn"
          className={styles.themeBtn}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggle}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          <span className={`${styles.themeBtnInner} ${isDark ? styles.dark : styles.light}`}>
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </span>
        </button>

        <button
          id="profile-avatar-btn"
          className={styles.avatar}
          aria-label="Open profile"
          onClick={onProfileClick}
          title="View Profile"
        >
          <span>A</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
