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
    title: 'Core Java Interview Questions',
    list: [
      { q: 'What is the difference between JDK, JRE, and JVM?', a: 'JVM executes bytecode. JRE contains the JVM and runtime libraries required to run Java apps. JDK is the development kit including JRE and the java compiler (javac) used to compile source code.' },
      { q: 'Why is String immutable in Java?', a: 'String literals are cached in the String Constant Pool. If strings were mutable, modifying one would corrupt references for other variables. Immutability also guarantees thread safety, security, and hashmap key consistency.' },
      { q: 'What is the difference between equals() and ==?', a: '== compares reference variables memory addresses. equals() is a method that evaluates whether the internal character sequences or object values match.' }
    ]
  },
  2: {
    title: 'OOP Interview Questions',
    list: [
      { q: 'What is runtime polymorphism and how is it achieved?', a: 'Runtime polymorphism (Dynamic Method Dispatch) allows a call to an overridden method to be resolved at runtime rather than compile-time. It is achieved by subclass overriding superclass methods and invoking them using superclass references.' },
      { q: 'Differentiate between Abstract Class and Interface.', a: 'Abstract classes can hold instance states (variables) and constructors, and support single class inheritance. Interfaces define stateless behaviors contracts, support multiple inheritance, and default to public static final variables.' },
      { q: 'Explain Encapsulation and its advantages.', a: 'Encapsulation is wrapping variables and methods together inside a class and restricting direct attribute access using private fields and public getter/setter methods, which protects attributes from unauthorized corruptions.' }
    ]
  },
  3: {
    title: 'Collections Interview Questions',
    list: [
      { q: 'Differentiate ArrayList vs LinkedList.', a: 'ArrayList is backed by dynamic arrays offering fast O(1) random reads but slower O(N) intermediate insertions. LinkedList uses doubly-linked nodes, making insertions/deletions at endpoints fast O(1) but random lookup slow O(N).' },
      { q: 'How does HashMap work internally in Java?', a: 'HashMap stores key-value pairs using hashing. It computes a key hashcode to determine bucket index. If bucket collisions occur, items link in a Singly Linked List (which converts to a Red-Black Tree in Java 8+ if count exceeds 8 items).' },
      { q: 'What is the difference between HashSet and TreeSet?', a: 'HashSet is backed by a HashMap and offers O(1) add/contains/remove operations in no sorted order. TreeSet is backed by a Red-Black tree, sorting elements automatically in O(log N) runtime.' }
    ]
  },
  4: {
    title: 'Multithreading Interview Questions',
    list: [
      { q: 'What is the difference between start() and run() methods?', a: 'Calling start() allocates a new system execution stack frame and invokes run() concurrently in a separate thread. Calling run() directly executes the method synchronously in the caller thread context without spawning a new thread.' },
      { q: 'What are race conditions and how does synchronization solve them?', a: 'A race condition occurs when multiple threads concurrently write to shared memory, leaving state variables inconsistent. Synchronized blocks serialize access, allowing only one thread to execute locked methods at a time.' },
      { q: 'Differentiate wait() vs sleep().', a: 'wait() is an Object class method that releases class locks and suspends threads until notified. sleep() is a static Thread class method that suspends execution for a timed duration without releasing locks.' }
    ]
  },
  5: {
    title: 'Spring Boot Interview Questions',
    list: [
      { q: 'What is Dependency Injection in Spring Boot?', a: 'Dependency Injection (DI) is an implementation of Inversion of Control (IoC). Rather than classes instantiating dependencies manually, the Spring IoC container instantiates, configures, and injects dependencies dynamically using @Autowired annotations.' },
      { q: 'Differentiate @Controller vs @RestController.', a: '@Controller maps routes to server-rendered template views (Thymeleaf/JSP). @RestController is @Controller + @ResponseBody, which serializes return objects directly into HTTP response bodies (JSON format).' },
      { q: 'What does spring.jpa.hibernate.ddl-auto=update do?', a: 'Automatically parses JPA entity class mappings and alters existing database table structures dynamically at startup to align with entity fields mutations.' }
    ]
  }
};

const InterviewPrep: React.FC<Props> = ({ page }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  // Mock interview simulator state
  const [selectedTopic, setSelectedTopic] = useState('Core Java');
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [generatingFeedback, setGeneratingFeedback] = useState(false);

  const mockQuestions: Record<string, string[]> = {
    'Core Java': [
      'Can you explain why Java does not support multiple inheritance of classes?',
      'How does Java handle garbage collection automatically?'
    ],
    'OOP': [
      'Explain the difference between method overloading and method overriding.',
      'How does encapsulation improve code maintenance?'
    ],
    'Spring Boot': [
      'What are the advantages of using Spring Data JPA repositories over standard JDBC?',
      'Explain the role of Spring Boot auto-configuration.'
    ]
  };

  const handleStartInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestionIdx(0);
    setUserAnswer('');
    setFeedback(null);
  };

  const handleNextQuestion = () => {
    setGeneratingFeedback(true);
    setFeedback(null);
    setTimeout(() => {
      setGeneratingFeedback(false);
      setFeedback(`[Mock Interview Feedback]
      ✓ Answer Integrity: Strong
      💡 Suggested Improvement: Mentioning specific heap/stack memory references or Spring framework design annotations would make this response perfect.
      Score: 8.5 / 10`);
    }, 1000);
  };

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  // Render Q&A tabs (Pages 1 to 5)
  if (page >= 1 && page <= 5) {
    const faq = FAQS_DATA[page];
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>{faq.title}</h2>
        <p className={styles.paragraph}>Expand each common interview question to view verified technical answers:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
          {faq.list.map((item, idx) => (
            <div key={idx} style={{ border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--bg-surface-2)', overflow: 'hidden' }}>
              <button 
                onClick={() => toggleExpand(idx)}
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

  // Render Coding Challenges (Page 6)
  if (page === 6) {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>Coding Challenges Guide</h2>
        <p className={styles.paragraph}>Here are common Java coding problems frequently asked in technical interviews. Review implementation logic and practice writing them:</p>
        
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '16px' }}>
          <li>
            <strong>1. Two Sum Problem</strong>: Find two array indices that add up to a target value.
            <br /><span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Focus: HashMap complement lookup - O(N) time.</span>
          </li>
          <li>
            <strong>2. Reverse a Linked List</strong>: Reverse pointers in a singly linked list in-place.
            <br /><span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Focus: Node references iteration - O(1) space.</span>
          </li>
          <li>
            <strong>3. Check Balanced Parentheses</strong>: Match opening and closing brackets characters.
            <br /><span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Focus: Stack push/pop operations - O(N) time.</span>
          </li>
          <li>
            <strong>4. Longest Substring Without Duplicates</strong>: Find longest unique letters slice.
            <br /><span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Focus: Sliding Window set technique - O(N) time.</span>
          </li>
        </ul>
      </div>
    );
  }

  // Render Mock Interview (Page 7)
  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>Interactive Mock Interview Simulator</h2>
      <p className={styles.paragraph}>Practice speaking and typing responses to random questions. Select a topic and launch the interviewer:</p>

      {!interviewStarted ? (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '16px' }}>
          <select 
            className={styles.inputField} 
            value={selectedTopic} 
            onChange={e => setSelectedTopic(e.target.value)}
            style={{ minWidth: '150px' }}
          >
            <option value="Core Java">Core Java</option>
            <option value="OOP">OOP Pillars</option>
            <option value="Spring Boot">Spring Boot APIs</option>
          </select>
          <button className={styles.saveBtn} onClick={handleStartInterview}>
            Start Mock Interview
          </button>
        </div>
      ) : (
        <div style={{ background: 'var(--bg-surface-2)', padding: '20px', borderRadius: '12px', border: '1.5px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
          <h4 style={{ margin: 0, color: 'var(--accent)', fontSize: '14px' }}>Question {currentQuestionIdx + 1} of 2</h4>
          <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>
            💬 "{mockQuestions[selectedTopic][currentQuestionIdx]}"
          </p>
          <textarea 
            className={styles.assignmentBox} 
            placeholder="Type your explanation here..." 
            value={userAnswer} 
            onChange={e => setUserAnswer(e.target.value)} 
          />
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className={styles.saveBtn} onClick={handleNextQuestion} disabled={userAnswer.trim().length < 5 || generatingFeedback}>
              {generatingFeedback ? 'Analyzing...' : 'Generate Answer Feedback'}
            </button>
            {currentQuestionIdx < 1 ? (
              <button 
                className={styles.choiceBtn} 
                onClick={() => { setCurrentQuestionIdx(1); setUserAnswer(''); setFeedback(null); }}
              >
                Skip Question
              </button>
            ) : (
              <button className={styles.choiceBtn} onClick={() => setInterviewStarted(false)}>
                Exit Interview
              </button>
            )}
          </div>

          {feedback && (
            <pre style={{ margin: '10px 0 0 0', background: '#09090b', color: '#38bdf8', padding: '16px', borderRadius: '8px', fontSize: '12px', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
              <code>{feedback}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default InterviewPrep;
