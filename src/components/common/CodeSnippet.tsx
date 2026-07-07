import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from '../courses/FrontendCoursePage.module.css';

interface Props {
  language: string;
  code: string;
  title?: string;
  isRunnable?: boolean;
}

const CodeSnippet: React.FC<Props> = ({ language, code, title, isRunnable = true }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const previewHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
            padding: 16px; 
            margin: 0;
            color: #333;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>${code}</body>
    </html>
  `;

  const handleRun = () => {
    setIsRunning(true);
    setShowPreview(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowPreview(true);
    }, 800);
  };

  return (
    <div style={{ margin: '16px 0' }}>
      
      {/* IDE Design (Exact Match to Java Section) */}
      <div style={{
        background: '#1e1e2e',
        border: '1.5px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
        fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
        fontSize: '13px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}>
        {/* IDE Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#151521',
          padding: '10px 16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {/* Windows Buttons */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
          </div>
          {/* Tab Title */}
          <div style={{ color: '#a1a1aa', fontSize: '12px', fontWeight: '600' }}>
            {title || (language.toLowerCase() === 'html' ? 'index.html' : 'Code Block')}
          </div>
          {/* Language Badge */}
          <div style={{ color: '#6b7280', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {language}
          </div>
        </div>

        {/* Editor Body */}
        <div style={{ display: 'flex', background: '#1e1e2e', padding: '16px 0', overflowX: 'auto' }}>
          {/* Line Numbers */}
          <div style={{
            textAlign: 'right',
            padding: '0 12px 0 16px',
            color: '#4b5563',
            userSelect: 'none',
            borderRight: '1px solid rgba(255, 255, 255, 0.05)',
            marginRight: '16px'
          }}>
            {code.trim().split('\\n').map((_, idx) => (
              <div key={idx} style={{ height: '20px', lineHeight: '20px' }}>{idx + 1}</div>
            ))}
          </div>
          
          {/* Code Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <SyntaxHighlighter
              language={language.toLowerCase()}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: 0,
                background: 'transparent',
                border: 'none',
                fontSize: '13px',
                lineHeight: '20px',
                fontFamily: 'inherit'
              }}
            >
              {code.trim()}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      {/* Action Area (Run Button + Output) */}
      {isRunnable && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
          <div>
            <button 
              className={styles.saveBtn} 
              onClick={handleRun}
              disabled={isRunning}
            >
              {isRunning ? 'Rendering Preview...' : '▶ Run Code'}
            </button>
          </div>
          
          {(isRunning || showPreview) && (
            <div style={{ 
              marginTop: '8px',
              border: '2px solid var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              animation: 'slideDown 0.3s ease-out',
              opacity: isRunning ? 0.6 : 1,
              transition: 'opacity 0.2s'
            }}>
              <div style={{ backgroundColor: '#f1f5f9', padding: '8px 16px', borderBottom: '1px solid var(--border)', fontSize: '12px', fontWeight: 600, color: '#64748b', display: 'flex', gap: '6px', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                </div>
                <span style={{ marginLeft: '8px' }}>Live HTML Output</span>
              </div>
              
              {isRunning ? (
                <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  Rendering preview...
                </div>
              ) : (
                <iframe 
                  srcDoc={previewHtml}
                  style={{ width: '100%', height: '250px', border: 'none', display: 'block' }}
                  title="Live Code Preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;
