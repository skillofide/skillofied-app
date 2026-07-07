import React, { useState } from 'react';
import styles from './Login.module.css';
import loginIllustration from '../../assets/login_illustration.png';
import { loginApi } from '../../api';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const data = await loginApi(email, password);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setIsLoading(false);
      onLogin();
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message || 'Invalid email or password. Try admin@knovate.com / knovate123');
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className={styles.page}>
      {/* Left illustration panel with light theme background */}
      <div className={styles.illustrationPanel}>
        <div className={styles.leftLogo}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 60" width="200" height="48">
            <defs>
              <linearGradient id="knovateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E5C07B" />
                <stop offset="100%" stopColor="#56B6C2" />
              </linearGradient>
            </defs>

            {/* Open Book (Teal Outline) */}
            <path d="M 20 40 Q 30 35 40 40 L 40 22 Q 30 18 20 22 Z" fill="none" stroke="#56B6C2" strokeWidth="2.5" strokeLinejoin="round"/>
            <path d="M 40 40 Q 50 35 60 40 L 60 22 Q 50 18 40 22 Z" fill="none" stroke="#56B6C2" strokeWidth="2.5" strokeLinejoin="round"/>
            
            {/* Book Center Fold */}
            <line x1="40" y1="22" x2="40" y2="40" stroke="#56B6C2" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Lightbulb (Yellow Glow and Base) */}
            <circle cx="40" cy="16" r="6" fill="#F4D03F" />
            <path d="M 37 18 L 43 18 L 42 24 L 38 24 Z" fill="#E67E22" />
            
            {/* Light Rays / Sparks */}
            <line x1="40" y1="4" x2="40" y2="7" stroke="#F4D03F" strokeWidth="2" strokeLinecap="round"/>
            <line x1="29" y1="10" x2="32" y2="12" stroke="#F4D03F" strokeWidth="2" stroke-linecap="round"/>
            <line x1="51" y1="10" x2="48" y2="12" stroke="#F4D03F" strokeWidth="2" stroke-linecap="round"/>
            
            {/* Logo Text */}
            <text x="70" y="38" fontFamily="Arial, Helvetica, sans-serif" fontSize="26" fontWeight="bold" fill="url(#knovateGrad)">Knovate</text>
          </svg>
        </div>
        <img
          src={loginIllustration}
          alt="Knovate illustration"
          className={styles.illustration}
        />
      </div>

      {/* Right login form panel with light theme warm background */}
      <div className={styles.formPanel}>
        <div className={`${styles.formCard} ${shake ? styles.shake : ''}`}>
          <h1 className={styles.heading}>Login</h1>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email@gmail.com"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                id="password"
                type="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </div>

            <span className={styles.forgotLink}>Forgot password?</span>

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

            <button
              id="login-submit-btn"
              type="submit"
              className={styles.loginBtn}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles.spinner} aria-label="Logging in…" />
              ) : (
                "Log in"
              )}
            </button>
          </form>

          <div className={styles.hint}>
            Already user your account?
          </div>

          {/* Social Logins */}
          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialBtn}>
              <span className={styles.socialIcon}>G</span> Google
            </button>
            <button type="button" className={styles.socialBtn}>
              <span className={styles.socialIcon}></span> Apple
            </button>
            <button type="button" className={styles.socialBtn}>
              <span className={styles.socialIcon}>❖</span> Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
