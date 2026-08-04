import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';
import welcomeCover from '../../../../assets/java_welcome_cover.png';

interface Props {
  page: number;
}

const CourseOverview: React.FC<Props> = ({ page }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerStyle = { maxWidth: '850px', margin: '0 auto', padding: '0 16px' };

  switch (page) {
    case 1:
      return (
        <div style={containerStyle}>
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Welcome to Java Programming Mastery!</h2>
            <p className={styles.paragraph}>
              Welcome student! You are about to embark on an intensive journey to master professional Java software engineering. This course has been structured to guide you from absolute programming basics up to building enterprise REST APIs using Spring Boot, securing endpoints, and deploying production code.
            </p>
            <p className={styles.paragraph}>
              Each module includes high-fidelity explanations, code examples, compiler outputs, interactive practice tasks, quizzes, and assignments to evaluate your learning progress.
            </p>
            <h3 className={styles.subtitle}>Let's Hustle!</h3>
            <p className={styles.paragraph}>
              Select <strong>Course Introduction Video</strong> or expand <strong>Module 1</strong> in the syllabus navigator to start your learning!
            </p>
          </div>
        </div>
      );

    case 2:
      return (
        <div style={containerStyle}>
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Course Introduction</h2>
            <p className={styles.paragraph}>
              Watch this brief intro video to align on what we'll build, how to compile Java code, and how to setup your study routines:
            </p>
            <div className={styles.videoContainer}>
              {isPlaying ? (
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/A74TOX803D0?autoplay=1"
                  title="Java Course Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ aspectRatio: '16/9', display: 'block', width: '100%' }}
                />
              ) : (
                <div 
                  className={styles.videoMock} 
                  onClick={() => setIsPlaying(true)} 
                  style={{ 
                    cursor: 'pointer',
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${welcomeCover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <button className={styles.videoPlayBtn} aria-label="Play video">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </button>
                  <span className={styles.videoTitle}>Java Mastery Course Intro - Playback (04:45)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div style={containerStyle}>
          <div className={styles.tabContent} style={{ padding: '32px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
            <h2 className={styles.cardTitle} style={{ fontSize: '28px', fontWeight: '800', background: 'linear-gradient(to right, #f97316, #facc15)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>
              Learning Outcomes
            </h2>
            <p className={styles.paragraph} style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
              By the end of this comprehensive specialization, you will be fully qualified to:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
              
              {/* Card 1 */}
              <div 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.border = '1px solid rgba(249, 115, 22, 0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(249, 115, 22, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.05em', color: '#f97316', background: 'rgba(249, 115, 22, 0.1)', padding: '6px 12px', borderRadius: '20px', textTransform: 'uppercase' }}>
                    Core Logic
                  </span>
                  <span style={{ color: '#10b981', fontSize: '18px', fontWeight: 'bold' }}>✓</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--heading)', margin: '4px 0 0 0' }}>Problem Solving Mastery</h3>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                  Solve complex problems using Core Java, arrays, strings, collections, and algorithms.
                </p>
              </div>

              {/* Card 2 */}
              <div 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.border = '1px solid rgba(250, 204, 21, 0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(250, 204, 21, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.05em', color: '#facc15', background: 'rgba(250, 204, 21, 0.1)', padding: '6px 12px', borderRadius: '20px', textTransform: 'uppercase' }}>
                    Software Design
                  </span>
                  <span style={{ color: '#10b981', fontSize: '18px', fontWeight: 'bold' }}>✓</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--heading)', margin: '4px 0 0 0' }}>OOP Architecture</h3>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                  Apply advanced OOP principles (abstraction, interfaces, polymorphism) to design scalable software architectures.
                </p>
              </div>

              {/* Card 3 */}
              <div 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.border = '1px solid rgba(16, 185, 129, 0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(16, 185, 129, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.05em', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '6px 12px', borderRadius: '20px', textTransform: 'uppercase' }}>
                    Enterprise APIs
                  </span>
                  <span style={{ color: '#10b981', fontSize: '18px', fontWeight: 'bold' }}>✓</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--heading)', margin: '4px 0 0 0' }}>Spring Boot Backend</h3>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                  Build production-ready REST APIs using Spring Boot, Spring Data JPA, Hibernate, and SQL databases.
                </p>
              </div>

              {/* Card 4 */}
              <div 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.border = '1px solid rgba(139, 92, 246, 0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(139, 92, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.05em', color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.1)', padding: '6px 12px', borderRadius: '20px', textTransform: 'uppercase' }}>
                    Security Shield
                  </span>
                  <span style={{ color: '#10b981', fontSize: '18px', fontWeight: 'bold' }}>✓</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--heading)', margin: '4px 0 0 0' }}>Spring Security & JWT</h3>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                  Secure applications using Spring Security and JWT token-based authentication.
                </p>
              </div>

            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div style={containerStyle}>
          <div className={styles.tabContent} style={{ padding: '32px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
            <h2 className={styles.cardTitle} style={{ fontSize: '28px', fontWeight: '800', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>
              Course Roadmap
            </h2>
            <p className={styles.paragraph} style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '36px' }}>
              Here is your learning trajectory across the course modules:
            </p>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '24px', paddingLeft: '24px', borderLeft: '2px dashed rgba(255,255,255,0.08)' }}>
              
              {/* Step 1 */}
              <div 
                style={{ 
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)', 
                  borderRadius: '16px', 
                  padding: '20px 24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'absolute', left: '-36px', top: '22px', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', color: '#fff', border: '3px solid #09090b', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}>1</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--heading)', margin: 0 }}>Basics & Logic</h4>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '4px 10px', borderRadius: '12px' }}>MODULES 1-5</span>
                </div>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                  Setup tools, syntax variables, Scanner controls, loop cycles, and method operations.
                </p>
              </div>

              {/* Step 2 */}
              <div 
                style={{ 
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)', 
                  borderRadius: '16px', 
                  padding: '20px 24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.border = '1px solid rgba(249, 115, 22, 0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(249, 115, 22, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'absolute', left: '-36px', top: '22px', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', color: '#fff', border: '3px solid #09090b', boxShadow: '0 0 10px rgba(249, 115, 22, 0.5)' }}>2</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--heading)', margin: 0 }}>Core Concepts</h4>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', background: 'rgba(249, 115, 22, 0.1)', color: '#f97316', padding: '4px 10px', borderRadius: '12px' }}>MODULES 6-10</span>
                </div>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                  Multi-dimensional arrays, String builder tools, OOP pillars, Exceptions try-catch, and Collection frameworks.
                </p>
              </div>

              {/* Step 3 */}
              <div 
                style={{ 
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)', 
                  borderRadius: '16px', 
                  padding: '20px 24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.border = '1px solid rgba(16, 185, 129, 0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(16, 185, 129, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'absolute', left: '-36px', top: '22px', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', color: '#fff', border: '3px solid #09090b', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}>3</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--heading)', margin: 0 }}>Advanced Java</h4>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 10px', borderRadius: '12px' }}>MODULES 11-15</span>
                </div>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                  File handling reader/writers, Multithreading synchronization, Stream APIs (Java 8), JDBC database drivers, and DSAs.
                </p>
              </div>

              {/* Step 4 */}
              <div 
                style={{ 
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)', 
                  borderRadius: '16px', 
                  padding: '20px 24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.border = '1px solid rgba(139, 92, 246, 0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(139, 92, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'absolute', left: '-36px', top: '22px', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', color: '#fff', border: '3px solid #09090b', boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}>4</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--heading)', margin: 0 }}>Spring Boot APIs</h4>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', padding: '4px 10px', borderRadius: '12px' }}>MODULES 16-18</span>
                </div>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                  REST controllers, services, repositories dependency injection, JPA Hibernate entities, validation, and JWT security.
                </p>
              </div>

              {/* Step 5 */}
              <div 
                style={{ 
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)', 
                  borderRadius: '16px', 
                  padding: '20px 24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.border = '1px solid rgba(236, 72, 153, 0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(236, 72, 153, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'absolute', left: '-36px', top: '22px', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', color: '#fff', border: '3px solid #09090b', boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}>5</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--heading)', margin: 0 }}>Deploy & Capstone</h4>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899', padding: '4px 10px', borderRadius: '12px' }}>MODULE 19 + FINAL</span>
                </div>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                  Packaging JAR applications, Docker setups, cloud deployment, and final capstone evaluations.
                </p>
              </div>

            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div style={containerStyle}>
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Prerequisites</h2>
            <p className={styles.paragraph}>
              No prior coding experience is required! This course starts from absolute ground zero. You only need:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
              <li>A desktop computer or laptop (Windows, Mac, or Linux).</li>
              <li>A stable internet connection to run development downloads.</li>
              <li>Basic computer literacy (creating folders, running commands).</li>
              <li>Patience, commitment, and a growth mindset!</li>
            </ul>
          </div>
        </div>
      );

    case 6:
      return (
        <div style={containerStyle}>
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Course Resources</h2>
            <p className={styles.paragraph}>
              Here are several recommended references to accompany your learning pathway:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
              <li><strong>Oracle Java Tutorials</strong>: The official source for core Java tutorials.</li>
              <li><strong>Baeldung</strong>: Exceptional guides on Spring Boot and Java topics.</li>
              <li><strong>Spring Framework Guides</strong>: Official documentation for Spring REST and Data JPA.</li>
              <li><strong>Knovate Discord Guild</strong>: Chat with mentors and submit queries to coding channels.</li>
            </ul>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default CourseOverview;
