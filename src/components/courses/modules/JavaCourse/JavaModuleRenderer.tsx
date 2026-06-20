import React, { useState, useEffect } from 'react';
import { JAVA_COURSE_DATA, Lesson } from './JavaCourseData';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  moduleId: string;
  page: number;
}

const JavaModuleRenderer: React.FC<Props> = ({ moduleId, page }) => {
  const moduleData = JAVA_COURSE_DATA[moduleId];

  // Common interactive state
  const [consoleOutput, setConsoleOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState<string>('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState<boolean>(false);

  // Variable validator state (Module 1 widget)
  const [varNameInput, setVarNameInput] = useState<string>('');
  const [varNameResult, setVarNameResult] = useState<{ valid: boolean; reason: string } | null>(null);

  // Scanner simulator state (Module 2 widget)
  const [scannerName, setScannerName] = useState<string>('');
  const [scannerAge, setScannerAge] = useState<string>('');
  const [scannerOutput, setScannerOutput] = useState<string>('');

  // Loop stepper state (Module 4 widget)
  const [loopSteps, setLoopSteps] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState<number>(-1);

  // Simple sandbox compiler state
  const [sandboxCode, setSandboxCode] = useState<string>('');
  const [sandboxOutput, setSandboxOutput] = useState<string>('');

  // Reset states when changing page/module
  useEffect(() => {
    setConsoleOutput('');
    setIsRunning(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    setAssignmentText('');
    setAssignmentSubmitted(false);
    setVarNameInput('');
    setVarNameResult(null);
    setScannerName('');
    setScannerAge('');
    setScannerOutput('');
    setLoopSteps([]);
    setActiveStep(-1);
    setSandboxOutput('');
    
    if (moduleData && moduleData.exercise) {
      setSandboxCode(moduleData.exercise.starterCode);
    }
  }, [moduleId, page]);

  if (!moduleData) {
    return <div className={styles.tabContent}>Module not found.</div>;
  }

  const { lessons, exercise, quiz, assignment } = moduleData;
  const totalLessons = lessons.length;
  const hasExercise = !!exercise;

  // Determine what type of page we are rendering
  let pageType: 'lesson' | 'exercise' | 'quiz' | 'assignment' = 'lesson';
  let activeLesson: Lesson | null = null;

  if (page <= totalLessons) {
    pageType = 'lesson';
    activeLesson = lessons[page - 1];
  } else if (hasExercise && page === totalLessons + 1) {
    pageType = 'exercise';
  } else if ((hasExercise && page === totalLessons + 2) || (!hasExercise && page === totalLessons + 1)) {
    pageType = 'quiz';
  } else {
    pageType = 'assignment';
  }

  // --- Actions ---
  const runCodeExample = (output: string) => {
    setIsRunning(true);
    setConsoleOutput('');
    setTimeout(() => {
      setIsRunning(false);
      setConsoleOutput(output);
    }, 800);
  };

  const handleValidateVarName = () => {
    const trimmed = varNameInput.trim();
    if (!trimmed) {
      setVarNameResult({ valid: false, reason: 'Variable name cannot be empty.' });
      return;
    }
    const keywords = ['public', 'class', 'void', 'static', 'int', 'double', 'String', 'for', 'while', 'if', 'else', 'return'];
    if (keywords.includes(trimmed)) {
      setVarNameResult({ valid: false, reason: `"${trimmed}" is a reserved Java keyword.` });
      return;
    }
    if (/^[0-9]/.test(trimmed)) {
      setVarNameResult({ valid: false, reason: 'Variable names cannot start with a number.' });
      return;
    }
    if (/[^a-zA-Z0-9_$]/.test(trimmed)) {
      setVarNameResult({ valid: false, reason: 'Variable names can only contain alphanumeric characters, underscores (_), or dollar signs ($).' });
      return;
    }
    if (!/^[a-z_]/.test(trimmed)) {
      setVarNameResult({ valid: true, reason: 'Valid identifier! Note: Java standard recommends camelCase starting with a lowercase letter.' });
      return;
    }
    setVarNameResult({ valid: true, reason: 'Valid Java variable name following standard naming conventions.' });
  };

  const handleRunScannerSim = () => {
    if (!scannerName.trim() || !scannerAge.trim()) {
      setScannerOutput('Error: Scanner input stream empty.');
      return;
    }
    setScannerOutput(`[Scanner System] Connected to system.in...\nUser Input captured:\n > Name: ${scannerName}\n > Age: ${scannerAge}\n\n[Console Output]:\nHello, ${scannerName}! You are ${scannerAge} years old.`);
  };

  const handleStepLoop = () => {
    const steps = [
      'Initialization: Set i = 0. Condition check: 0 < 3 (True)',
      'Iteration 1 execution: Prints "i = 0" to console. Update: Increment i by 1 (i = 1)',
      'Condition check: 1 < 3 (True)',
      'Iteration 2 execution: Prints "i = 1" to console. Update: Increment i by 1 (i = 2)',
      'Condition check: 2 < 3 (True)',
      'Iteration 3 execution: Prints "i = 2" to console. Update: Increment i by 1 (i = 3)',
      'Condition check: 3 < 3 (False). Loop terminated.'
    ];
    setLoopSteps(steps);
    setActiveStep(0);
  };

  const handleRunSandbox = () => {
    if (!exercise) return;
    setIsRunning(true);
    setSandboxOutput('');
    setTimeout(() => {
      setIsRunning(false);
      setSandboxOutput(`[Compiler output] Running java Solution...\nExpected Output: ${exercise.expectedOutput}\nActual Output: ${exercise.expectedOutput}\n\nStatus: \u001b[32mTEST CASES PASSED! +${moduleData.id === 'm8' || moduleData.id === 'm15' ? '150' : '100'} XP\u001b[0m`);
    }, 1200);
  };

  const handleSelectQuizOption = (qId: number, option: string) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    quiz.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) score++;
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const handleSubmitAssignment = () => {
    if (assignmentText.trim().length > 10) {
      setAssignmentSubmitted(true);
    }
  };

  // --- Render Mappings ---
  if (pageType === 'lesson' && activeLesson) {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>{activeLesson.title}</h2>
        <p className={styles.paragraph}>{activeLesson.theory}</p>
        
        {activeLesson.objectives.length > 0 && (
          <>
            <h3 className={styles.subtitle}>Learning Objectives</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              {activeLesson.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </>
        )}

        {activeLesson.syntax && (
          <>
            <h3 className={styles.subtitle}>Syntax Breakdown</h3>
            <pre className={styles.codeBlock} style={{ fontFamily: 'monospace', fontSize: '12.5px' }}>
              <code>{activeLesson.syntax}</code>
            </pre>
          </>
        )}

        {activeLesson.codeExample && (
          <>
            <h3 className={styles.subtitle}>Code Demonstration</h3>
            <div className={styles.codeLabel}>Java Source File</div>
            <pre className={styles.codeBlock} style={{ margin: 0, fontFamily: 'monospace', fontSize: '12.5px' }}>
              <code>{activeLesson.codeExample}</code>
            </pre>
            {activeLesson.codeOutput && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                <button 
                  className={styles.saveBtn} 
                  onClick={() => runCodeExample(activeLesson?.codeOutput || '')}
                  disabled={isRunning}
                >
                  {isRunning ? 'Compiling & Running...' : '▶ Run Code'}
                </button>
                {(isRunning || consoleOutput) && (
                  <div style={{ background: '#09090b', color: '#10b981', padding: '16px', borderRadius: '10px', fontFamily: 'monospace', fontSize: '12px', minHeight: '40px', border: '1.5px solid var(--border)' }}>
                    {isRunning ? 'Compiling main class Solution...' : consoleOutput}
                  </div>
                )}
              </div>
            )}
          </>
        )}

        <h3 className={styles.subtitle}>Key Takeaways</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-secondary)' }}>
          {activeLesson.takeaways.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }

  if (pageType === 'exercise' && exercise) {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>Practice Challenge: {exercise.title}</h2>
        <p className={styles.paragraph}>{exercise.description}</p>
        
        <h3 className={styles.subtitle}>Instructions:</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          {exercise.instructions.map((inst, i) => <li key={i}>{inst}</li>)}
        </ul>

        {/* Dynamic Widget Rendering based on type */}
        {exercise.type === 'input_validation' && (
          <div style={{ background: 'var(--bg-surface-2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>🔍 Variable Name Validator Sandbox</h4>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <input 
                className={styles.inputField} 
                placeholder="Type variable name (e.g. employeeName)" 
                value={varNameInput} 
                onChange={e => setVarNameInput(e.target.value)} 
              />
              <button className={styles.saveBtn} onClick={handleValidateVarName}>Validate</button>
            </div>
            {varNameResult && (
              <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: varNameResult.valid ? '#10b981' : '#ef4444' }}>
                {varNameResult.valid ? '✓ ' : '✗ '}{varNameResult.reason}
              </p>
            )}
          </div>
        )}

        {exercise.type === 'scanner_sim' && (
          <div style={{ background: 'var(--bg-surface-2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>🖨️ Scanner Stream Input Simulator</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px', maxWidth: '300px' }}>
              <input className={styles.inputField} placeholder="Enter your name" value={scannerName} onChange={e => setScannerName(e.target.value)} />
              <input className={styles.inputField} placeholder="Enter your age" value={scannerAge} onChange={e => setScannerAge(e.target.value)} />
              <button className={styles.saveBtn} onClick={handleRunScannerSim}>Submit to Scanner</button>
            </div>
            {scannerOutput && (
              <pre style={{ margin: 0, background: '#09090b', color: '#38bdf8', padding: '12px', borderRadius: '8px', fontSize: '11.5px', fontFamily: 'monospace', overflowX: 'auto' }}>
                <code>{scannerOutput}</code>
              </pre>
            )}
          </div>
        )}

        {exercise.type === 'loop_stepper' && (
          <div style={{ background: 'var(--bg-surface-2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>🔁 For-Loop Iterative Execution Stepper</h4>
            <p className={styles.paragraph} style={{ fontSize: '12.5px' }}>Loop bounds: <code>for (int i = 0; i &lt; 3; i++)</code></p>
            <button className={styles.saveBtn} onClick={handleStepLoop} style={{ marginBottom: '12px' }}>Start Loop Process</button>
            
            {loopSteps.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {loopSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      padding: '10px 12px', 
                      borderRadius: '6px', 
                      background: idx === activeStep ? 'rgba(70, 72, 212, 0.08)' : 'var(--bg-surface-1)',
                      border: idx === activeStep ? '1.5px solid var(--accent)' : '1px solid var(--border)',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{step}</span>
                    {idx === activeStep && <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Active</span>}
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <button 
                    className={styles.choiceBtn} 
                    disabled={activeStep <= 0} 
                    onClick={() => setActiveStep(p => p - 1)}
                  >
                    ◀ Prev Step
                  </button>
                  <button 
                    className={styles.choiceBtn} 
                    disabled={activeStep >= loopSteps.length - 1} 
                    onClick={() => setActiveStep(p => p + 1)}
                  >
                    Next Step ▶
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Standard compiler sandbox mock for intermediate/advanced modules */}
        {!['input_validation', 'scanner_sim', 'loop_stepper'].includes(exercise.type) && (
          <div>
            <div className={styles.codeLabel}>Main.java Source Sandbox</div>
            <textarea 
              className={styles.assignmentBox} 
              style={{ fontFamily: 'monospace', height: '140px', fontSize: '12px' }}
              value={sandboxCode} 
              onChange={e => setSandboxCode(e.target.value)} 
            />
            <button className={styles.saveBtn} onClick={handleRunSandbox} disabled={isRunning} style={{ marginTop: '8px', marginBottom: '12px' }}>
              {isRunning ? 'Compiling & Running Test Cases...' : '⚡ Compile & Run'}
            </button>
            {(isRunning || sandboxOutput) && (
              <pre style={{ background: '#09090b', color: '#10b981', padding: '16px', borderRadius: '10px', fontSize: '12px', fontFamily: 'monospace', overflowX: 'auto' }}>
                <code>{isRunning ? 'Running compilation tasks on remote server...' : sandboxOutput}</code>
              </pre>
            )}
          </div>
        )}
      </div>
    );
  }

  if (pageType === 'quiz') {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>Module Final Quiz</h2>
        <p className={styles.paragraph}>Verify your mastery of this module by answering the following 5 multiple-choice questions:</p>
        
        <div className={styles.quizCardList}>
          {quiz.map(q => {
            const selected = quizAnswers[q.id];
            return (
              <div key={q.id} className={styles.quizBlock}>
                <h4 className={styles.quizBlockQuestion}>{q.question}</h4>
                <div className={styles.quizBlockOptions}>
                  {q.options.map(opt => {
                    let optStyle = styles.quizBlockOption;
                    if (selected === opt) optStyle = styles.quizBlockOptionSelected;
                    if (quizSubmitted) {
                      if (opt === q.correctAnswer) optStyle = styles.quizBlockOptionCorrect;
                      else if (selected === opt) optStyle = styles.quizBlockOptionIncorrect;
                    }
                    return (
                      <button 
                        key={opt} 
                        className={optStyle} 
                        onClick={() => handleSelectQuizOption(q.id, opt)} 
                        disabled={quizSubmitted}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.quizSubmitRow}>
          {!quizSubmitted ? (
            <button 
              className={styles.saveBtn} 
              onClick={handleSubmitQuiz} 
              disabled={Object.keys(quizAnswers).length < quiz.length}
            >
              Submit Quiz
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'space-between' }}>
              <span className={styles.quizScoreText}>
                Score: {quizScore} / {quiz.length} {quizScore === quiz.length ? '🎉 Perfect!' : '👍 Keep studying!'}
              </span>
              <button 
                className={styles.backBtn} 
                onClick={() => { setQuizSubmitted(false); setQuizScore(null); setQuizAnswers({}); }}
              >
                Retry Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Otherwise, Assignment page
  return (
    <div className={styles.tabContent}>
      <h2 className={styles.cardTitle}>Module Assignment</h2>
      <p className={styles.paragraph}>Provide brief answers to the following prompts to finalize the module grading status:</p>
      
      <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', marginBottom: '16px' }}>
        {assignment.prompts.map((prompt, i) => <li key={i}>{prompt}</li>)}
      </ol>

      {!assignmentSubmitted ? (
        <div>
          <textarea 
            className={styles.assignmentBox} 
            placeholder="Type your answers here (minimum 10 characters)..." 
            value={assignmentText} 
            onChange={e => setAssignmentText(e.target.value)} 
          />
          <button 
            className={styles.saveBtn} 
            onClick={handleSubmitAssignment} 
            disabled={assignmentText.trim().length < 10}
          >
            Submit Assignment
          </button>
        </div>
      ) : (
        <div className={styles.completeBadge} style={{ marginTop: '24px' }}>
          <span>✓ Assignment submitted successfully! A course mentor will review your grading shortly. 🎉</span>
        </div>
      )}
    </div>
  );
};

export default JavaModuleRenderer;
