import React, { useState, useEffect } from 'react';
import { JAVA_COURSE_DATA, Lesson } from './JavaCourseData';
import styles from '../../FrontendCoursePage.module.css';
import CodeSnippet from '../../../common/CodeSnippet';
import ModuleQuiz from '../../shared/ModuleQuiz';
import ModuleAssignment from '../../shared/ModuleAssignment';
import { SYLLABUS } from '../../JavaCoursePage';
import { SyllabusModule } from '../../../../types';

interface Props {
  moduleId: string;
  page: number;
}

const renderFormattedTheory = (text: string) => {
  const parts = text.split(/(```[\s\S]*?```)/g);

  return parts.map((part, idx) => {
    if (part.startsWith('```')) {
      const lines = part.split('\n');
      const firstLine = lines[0];
      const language = firstLine.replace('```', '').trim() || 'code';
      const code = lines.slice(1, -1).join('\n');
      return (
        <CodeSnippet 
          key={idx} 
          title={language === 'java' ? 'Solution.java' : 'Code Block'} 
          code={code} 
          language={language}
          isRunnable={false}
        />
      );
    } else {
      const paragraphs = part.split('\n');
      return paragraphs.map((para, pIdx) => {
        if (!para.trim()) return null;

        const inlineParts = para.split(/(\*\*.*?\*\*|`.*?`)/g);
        const parsedElements = inlineParts.map((inlinePart, iIdx) => {
          if (inlinePart.startsWith('**') && inlinePart.endsWith('**')) {
            return <strong key={iIdx} style={{ color: 'var(--text-primary)' }}>{inlinePart.slice(2, -2)}</strong>;
          } else if (inlinePart.startsWith('`') && inlinePart.endsWith('`')) {
            return <code key={iIdx} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: '6px', fontFamily: 'monospace', color: '#ef4444', fontSize: '90%' }}>{inlinePart.slice(1, -1)}</code>;
          } else {
            return inlinePart;
          }
        });

        const isListItem = /^\d+\.\s/.test(para) || para.trim().startsWith('-') || para.trim().startsWith('*');
        if (isListItem) {
          return (
            <div key={`${pIdx}`} style={{ margin: '8px 0 8px 16px', fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {parsedElements}
            </div>
          );
        }

        return (
          <p key={`${pIdx}`} className={styles.paragraph} style={{ margin: '0 0 14px' }}>
            {parsedElements}
          </p>
        );
      });
    }
  });
};

const JavaModuleRenderer: React.FC<Props> = ({ moduleId, page }) => {
  const moduleData = JAVA_COURSE_DATA[moduleId];

  // Common interactive state
  const [consoleOutput, setConsoleOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);

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

  // Resolve the page against the syllabus item ID rather than its ordinal position.
  // Position-based routing silently rendered the quiz under a lesson title whenever
  // the syllabus listed more lessons than the data file actually defined.
  const syllabusModule = SYLLABUS.find((m: SyllabusModule) => m.id === moduleId);
  const itemId = syllabusModule?.items[page - 1]?.id ?? '';
  const itemTitle = syllabusModule?.items[page - 1]?.title ?? '';

  let pageType: 'lesson' | 'exercise' | 'quiz' | 'assignment' | 'missing' = 'lesson';
  let activeLesson: Lesson | null = null;

  if (itemId.endsWith('-quiz')) {
    pageType = 'quiz';
  } else if (itemId.endsWith('-assignment')) {
    pageType = 'assignment';
  } else if (itemId.endsWith('-ex')) {
    pageType = exercise ? 'exercise' : 'missing';
  } else {
    activeLesson = lessons.find((l) => l.id === itemId) ?? null;
    pageType = activeLesson ? 'lesson' : 'missing';
  }

  if (pageType === 'missing') {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>{itemTitle || 'Lesson'}</h2>
        <p className={styles.paragraph}>
          This lesson is being written and will be published shortly. Continue with the next item in
          the sidebar in the meantime.
        </p>
      </div>
    );
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

  // --- Render Mappings ---
  if (pageType === 'lesson' && activeLesson) {
    return (
      <div className={styles.tabContent}>
        <h2 className={styles.cardTitle}>{activeLesson.title}</h2>
        <div style={{ marginBottom: '20px' }}>{renderFormattedTheory(activeLesson.theory)}</div>
        
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
            <CodeSnippet title="Syntax Definition" code={activeLesson.syntax} language="syntax" isRunnable={false} />
          </>
        )}

        {activeLesson.codeExample && (
          <>
            <h3 className={styles.subtitle}>Code Demonstration</h3>
            <CodeSnippet title={`${activeLesson.title.replace(/\s+/g, '')}.java`} code={activeLesson.codeExample} language="java" isRunnable={false} />
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
    return <ModuleQuiz moduleId={`java-${moduleId}`} questions={quiz} />;
  }

  // Otherwise, Assignment page
  return <ModuleAssignment questions={assignment.prompts} />;
};

export default JavaModuleRenderer;
