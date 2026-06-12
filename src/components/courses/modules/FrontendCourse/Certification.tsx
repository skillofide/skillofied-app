import React from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const Certification: React.FC<Props> = ({ page }) => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className={styles.cardTitle}>Course Certificate</h2>
          <p className={styles.paragraph} style={{ textAlign: 'center' }}>Congratulations on completing the Frontend Development Mastery course! Below is your official Course Completion Certificate.</p>
          
          {/* Certificate Design */}
          <div style={{
            width: '100%',
            maxWidth: '650px',
            background: '#ffffff',
            color: '#1e293b',
            border: '10px double #3b82f6',
            borderRadius: '8px',
            padding: '40px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            fontFamily: 'serif',
            position: 'relative',
            marginTop: '20px'
          }}>
            {/* Corner decorations */}
            <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '24px', color: '#3b82f6' }}>❖</div>
            <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '24px', color: '#3b82f6' }}>❖</div>
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '24px', color: '#3b82f6' }}>❖</div>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '24px', color: '#3b82f6' }}>❖</div>

            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', textTransform: 'uppercase', color: '#3b82f6', letterSpacing: '2px', fontFamily: 'sans-serif' }}>Certificate of Completion</h3>
            <p style={{ margin: '0 0 24px 0', fontSize: '14px', fontStyle: 'italic', fontFamily: 'serif' }}>This credential is proudly presented to</p>
            
            <h1 style={{ margin: '0 0 16px 0', fontSize: '36px', borderBottom: '2px solid #e2e8f0', display: 'inline-block', paddingBottom: '8px', fontFamily: 'serif', fontWeight: 'bold' }}>Skillofied Student</h1>
            
            <p style={{ margin: '0 auto 30px auto', fontSize: '14px', maxWidth: '450px', lineHeight: '1.6', fontFamily: 'serif' }}>
              for successfully completing all interactive lessons, coding challenges, quizzes, projects, and final evaluations in the intensive specialization program:
            </p>
            
            <h2 style={{ margin: '0 0 30px 0', fontSize: '22px', fontWeight: 'bold', color: '#1e293b', textTransform: 'uppercase', fontFamily: 'sans-serif', letterSpacing: '1px' }}>Frontend Development Mastery</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px', padding: '0 20px', fontFamily: 'sans-serif' }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ borderBottom: '1px solid #94a3b8', width: '150px', marginBottom: '4px', fontSize: '13px', fontStyle: 'italic', textAlign: 'center', height: '24px' }}>Skillofied Registrar</div>
                <span style={{ fontSize: '10px', color: '#64748b' }}>AUTHORIZED SIGNATURE</span>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', color: '#f59e0b', marginBottom: '8px' }}>★ ★ ★</div>
                <span style={{ fontSize: '9px', color: '#94a3b8', display: 'block' }}>ID: SK-FDM-2026-9871</span>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ borderBottom: '1px solid #94a3b8', width: '150px', marginBottom: '4px', fontSize: '11px', textAlign: 'center' }}>{currentDate}</div>
                <span style={{ fontSize: '10px', color: '#64748b' }}>DATE OF ISSUANCE</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Project Achievement Badges</h2>
          <p className={styles.paragraph}>Showcase of skill badges unlocked during the course of learning modules and projects execution:</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {[
              { title: 'HTML Builder', icon: '🧱', desc: 'Unlocked after compiling correct document markup lists.', color: '#ef4444' },
              { title: 'CSS Stylist', icon: '🎨', desc: 'Unlocked for configuring layout alignment margins.', color: '#3b82f6' },
              { title: 'JS Architect', icon: '⚡', desc: 'Unlocked for completing logic calculator arrays.', color: '#eab308' },
              { title: 'React Master', icon: '⚛️', desc: 'Unlocked for integrating state models routing.', color: '#06b6d4' },
              { title: 'Deploy Expert', icon: '🚀', desc: 'Unlocked for configuring cloud release SEO parameters.', color: '#10b981' }
            ].map((badge, idx) => (
              <div key={idx} style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.2s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: `${badge.color}20`,
                  fontSize: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                  border: `2px solid ${badge.color}`
                }}>{badge.icon}</div>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '14px', fontWeight: 'bold' }}>{badge.title}</h4>
                <p style={{ margin: 0, fontSize: '11.5px', color: 'var(--text-secondary)' }}>{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Verified Skills Certificate</h2>
          <p className={styles.paragraph}>Here is a breakdown of your verified technical capabilities across the program curriculum:</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
            {[
              { skill: 'Semantic HTML Structure & SEO', val: 95, color: '#ef4444' },
              { skill: 'CSS Page Layout (Flexbox & Grid)', val: 92, color: '#3b82f6' },
              { skill: 'JavaScript Logic & DOM manipulation', val: 88, color: '#eab308' },
              { skill: 'Asynchronous API Integrations', val: 85, color: '#ec4899' },
              { skill: 'React SPA State & Routing', val: 90, color: '#06b6d4' },
              { skill: 'Git & GitHub Collaboration Pipeline', val: 94, color: '#8b5cf6' }
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-surface-2)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px', fontWeight: 'bold' }}>
                  <span>{item.skill}</span>
                  <span>{item.val}% Competency</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'var(--bg-surface-1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${item.val}%`, height: '100%', background: item.color, borderRadius: '4px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default Certification;
