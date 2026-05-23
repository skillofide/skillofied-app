import React, { useState } from 'react';
import styles from './Login.module.css';
import loginIllustration from '../../assets/login_illustration.png';

interface LoginProps {
  onLogin: () => void;
}

const DUMMY_EMAIL = 'admin@skillofied.com';
const DUMMY_PASSWORD = 'skillofied123';

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate async auth
    await new Promise((res) => setTimeout(res, 900));

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      setIsLoading(false);
      onLogin();
    } else {
      setIsLoading(false);
      setError('Invalid email or password. Try admin@skillofied.com / skillofied123');
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className={styles.page}>
      {/* Left illustration panel */}
      <div className={styles.illustrationPanel}>
        <img
          src={loginIllustration}
          alt="Skillofied community illustration"
          className={styles.illustration}
        />
      </div>

      {/* Right login form panel */}
      <div className={styles.formPanel}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoSkill}>Skill</span><span className={styles.logoOfied}>ofied</span>
        </div>

        <div className={`${styles.formCard} ${shake ? styles.shake : ''}`}>
          <h1 className={styles.heading}>Welcome Back, Skillofieds!</h1>
          <p className={styles.subheading}>Let's hustle and make your dreams come true!</p>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className={styles.errorMsg} role="alert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.errorIcon}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <a href="#" className={styles.forgotLink} onClick={(e) => e.preventDefault()}>
              Forgot your password?
            </a>

            <button
              id="login-submit-btn"
              type="submit"
              className={styles.loginBtn}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles.spinner} aria-label="Logging in…" />
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.btnIcon}>
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  Log In
                </>
              )}
            </button>
          </form>

          <p className={styles.hint}>
            <span className={styles.hintLabel}>Demo credentials:</span>{' '}
            <code className={styles.hintCode}>admin@skillofied.com</code> /{' '}
            <code className={styles.hintCode}>skillofied123</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
