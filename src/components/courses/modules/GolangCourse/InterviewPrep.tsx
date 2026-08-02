import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  page: number;
}

interface QAItem {
  q: string;
  a: string;
}

const FAQS_DATA: Record<number, { title: string; list: QAItem[] }> = {
  1: {
    title: 'Golang Core Interview Questions',
    list: [
      { q: 'What is the difference between GOROOT and GOPATH?', a: 'GOROOT points to the installation directory of the Go compiler and standard libraries. GOPATH points to the user workspace directory containing downloaded third-party source modules and compiled executables.' },
      { q: 'Why does Go compile so fast?', a: 'Go\'s compiler resolves import dependencies linearly and avoids circular imports. Also, variables and symbols are parsed without complex inheritance maps, resulting in immediate compilation cycles.' },
      { q: 'Explain implicit interfaces in Go.', a: 'A struct type implements an interface implicitly simply by implementing its method signatures. There is no need for implements keywords. This simplifies writing mocks and test packages.' }
    ]
  },
  2: {
    title: 'Goroutines & Concurrency Questions',
    list: [
      { q: 'What is a Goroutine?', a: 'A goroutine is a lightweight execution thread managed by the Go runtime scheduler. They start with an initial 2KB stack size, which is much cheaper than standard OS threads (typically 1MB).' },
      { q: 'Differentiate Buffered vs Unbuffered Channels.', a: 'Unbuffered channels block sending and receiving goroutines until both sides are ready. Buffered channels only block sends when the queue buffer capacity is full, allowing asynchronous messaging.' }
    ]
  },
  3: {
    title: 'REST API Questions',
    list: [
      { q: 'Why is Gin preferred over standard net/http for complex routing?', a: 'Gin utilizes a Radix tree-based router which handles parameterized paths and grouping far faster, and includes built-in binding validations and JSON response helpers.' }
    ]
  },
  4: {
    title: 'Database Questions',
    list: [
      { q: 'How do you prevent SQL Injection in Go?', a: 'Always execute query methods using placeholder parameters ($1, $2, ?) instead of concatenating raw values inside sql query strings.' }
    ]
  },
  5: {
    title: 'System Design Basics',
    list: [
      { q: 'When should you use gRPC instead of REST?', a: 'Use gRPC for fast internal microservice communications due to its binary Protocol Buffers format. REST is preferred for public-facing client integrations.' }
    ]
  }
};

const InterviewPrep: React.FC<Props> = ({ page }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [generatingFeedback, setGeneratingFeedback] = useState(false);

  const mockQuestions: Record<string, string[]> = {
    'Golang Core': [
      'Why does Go not support structural class-based inheritance?',
      'How does Go manage garbage collection heap references?'
    ]
  };

  const handleStartInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestionIdx(0);
    setUserAnswer('');
    setFeedback(null);
  };

  if (page >= 1 && page <= 5) {
    const faq = FAQS_DATA[page] || FAQS_DATA[1];
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>{faq.title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
          {faq.list.map((item, idx) => (
            <div key={idx} style={{ border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--bg-surface-2)', overflow: 'hidden' }}>
              <button 
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                style={{ width: '100%', padding: '16px', background: 'transparent', border: 'none', textAlign: 'left', fontWeight: 'bold', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>{item.q}</span>
                <span>{expandedIndex === idx ? '▼' : '▶'}</span>
              </button>
              {expandedIndex === idx && (
                <div style={{ padding: '16px', borderTop: '1px solid var(--border)', background: 'var(--bg-surface-1)', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (page === 6) {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>Coding Challenges Guide</h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '16px' }}>
          <li><strong>1. Two Sum</strong>: Complement lookups using maps - O(N) runtime.</li>
          <li><strong>2. Concurrent Scraper</strong>: Throttled fetches using WaitGroups and worker channels.</li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>Interactive Mock Interview Simulator</h2>
      {!interviewStarted ? (
        <button className={styles.saveBtn} onClick={handleStartInterview} style={{ marginTop: '16px' }}>
          Start Mock Interview
        </button>
      ) : (
        <div style={{ background: 'var(--bg-surface-2)', padding: '20px', borderRadius: '12px', border: '1.5px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
          <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>
            💬 "{mockQuestions['Golang Core'][currentQuestionIdx]}"
          </p>
          <textarea 
            className={styles.assignmentBox} 
            value={userAnswer} 
            onChange={e => setUserAnswer(e.target.value)} 
          />
            <button className={styles.saveBtn} onClick={() => {
              setGeneratingFeedback(true);
              setTimeout(() => {
                setGeneratingFeedback(false);
                setFeedback(`✓ Good technical explanation of Golang structures composition!`);
              }, 800);
            }} disabled={generatingFeedback}>
              {generatingFeedback ? 'Analyzing...' : 'Submit Answer'}
            </button>
          {feedback && <pre style={{ padding: '12px', background: '#09090b', color: '#10b981', borderRadius: '8px' }}><code>{feedback}</code></pre>}
        </div>
      )}
    </div>
  );
};

export default InterviewPrep;
