import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Group as PanelGroup, Panel, Separator as PanelResizeHandle } from 'react-resizable-panels';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info, XCircle } from 'lucide-react';

import WorkspaceHeader from './WorkspaceHeader';
import ProblemDescriptionPanel from './ProblemDescriptionPanel';
import IDEPanel from './IDEPanel';
import ConsolePanel from './ConsolePanel';

import { getProblemDetail, ProblemDetail } from '../../data/problemsData';
import { practiceProblems } from '../../data/mockData';
import { graphqlRequest } from '../../api';

// Toast interface
interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface Submission {
  status: 'Accepted' | 'Wrong Answer' | 'Runtime Error';
  timestamp: string;
  language: string;
  runtime: string;
  code: string;
}

const SolveProblemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find overall problem name from initial list if exists
  const baseProb = practiceProblems.find((p) => p.id === id);
  const problemName = baseProb ? baseProb.title : 'Challenge';

  // Load problem details
  const [problem, setProblem] = useState<ProblemDetail>(() => getProblemDetail(id || '', problemName));

  // Workspace settings state
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem(`lang_${id}`) || 'javascript';
  });
  const [code, setCode] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [consoleTab, setConsoleTab] = useState<'testcases' | 'output' | 'custom'>('testcases');
  const [customInput, setCustomInput] = useState<string>('');

  // Runner and submission states
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [runResults, setRunResults] = useState<any>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Reload problem and submissions when id changes
  useEffect(() => {
    setIsLoading(true);
    setRunResults(null);
    setConsoleTab('testcases');

    graphqlRequest(`
      query($id: String!) {
        getProblem(id: $id) {
          id
          slug
          title
          difficulty
          topic
          xp
          statement
          constraints
          tags
          examples {
            input
            output
            explanation
          }
          hints {
            order
            title
            body
          }
          starterCodes {
            javascript
            python
            java
            cpp
            go
          }
          setId
          userStatus
        }
      }
    `, { id })
      .then((data) => {
        if (data && data.getProblem) {
          const prob = data.getProblem;
          setProblem(prob);

          // Load saved code or default
          const savedCode = localStorage.getItem(`code_${id}_${language}`);
          if (savedCode) {
            setCode(savedCode);
          } else {
            setCode(prob.starterCodes[language as keyof typeof prob.starterCodes] || '');
          }

          // Load custom input default
          if (prob.examples && prob.examples.length > 0) {
            setCustomInput(prob.examples[0].input);
          } else {
            setCustomInput('');
          }
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load problem details from API:", err);
        const detail = getProblemDetail(id || '', problemName);
        setProblem(detail);
        setCode(detail.starterCodes[language as keyof typeof detail.starterCodes] || '');
        setIsLoading(false);
      });

    // Load historical submissions from API
    graphqlRequest(`
      query($problemId: String) {
        listSubmissions(problemId: $problemId) {
          submissions {
            id
            problemId
            language
            status
            runtimeMs
            memoryKb
            submittedAt
          }
        }
      }
    `, { problemId: id })
      .then((data) => {
        if (data && data.listSubmissions && data.listSubmissions.submissions) {
          const list = data.listSubmissions.submissions.map((s: any) => ({
            status: (s.status === 'Accepted' ? 'Accepted' : (s.status === 'WrongAnswer' ? 'Wrong Answer' : 'Runtime Error')) as any,
            timestamp: new Date(s.submittedAt).toLocaleString(),
            language: s.language.toUpperCase(),
            runtime: `${s.runtimeMs}ms`,
            code: ''
          }));
          setSubmissions(list);
        }
      })
      .catch((err) => console.error("Failed to load submissions from API:", err));

  }, [id, problemName, language]);

  // Load default/saved code on language change
  useEffect(() => {
    const savedCode = localStorage.getItem(`code_${id}_${language}`);
    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode(problem.starterCodes[language as keyof typeof problem.starterCodes] || '');
    }
    localStorage.setItem(`lang_${id}`, language);
  }, [language, id, problem]);

  // Auto-save code to localStorage when updated
  useEffect(() => {
    if (code) {
      localStorage.setItem(`code_${id}_${language}`, code);
    }
  }, [code, id, language]);

  // Keyboard shortcut Ctrl + Enter to run code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRunCode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code, language, problem]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const toastId = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id: toastId, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    }, 4000);
  };

  const handleResetCode = () => {
    const confirmReset = window.confirm("Are you sure you want to reset your editor to the default starter code?");
    if (confirmReset) {
      const defaultCode = problem.starterCodes[language as keyof typeof problem.starterCodes] || '';
      setCode(defaultCode);
      showToast("Code reset to starter template.", "info");
    }
  };


  // Run code synchronously via API gateway
  const handleRunCode = async () => {
    setIsRunning(true);
    setConsoleTab('output');

    try {
      const data = await graphqlRequest(`
        mutation($problemId: String!, $language: String!, $code: String!) {
          runCode(problemId: $problemId, language: $language, code: $code) {
            jobId
            overallStatus
            testResults {
              testCaseId
              input
              expectedOutput
              actualOutput
              status
              executionMs
              error
            }
            compileError
            runtimeMs
          }
        }
      `, { problemId: id, language, code });

      const run = data.runCode;
      const results = run.testResults.map((tr: any) => ({
        input: tr.input,
        expected: tr.expectedOutput,
        actual: tr.actualOutput,
        passed: tr.status === 'Accepted',
        stdout: tr.error,
      }));

      setRunResults({
        success: run.overallStatus === 'Accepted',
        totalCases: run.testResults.length,
        passedCases: run.testResults.filter((tr: any) => tr.status === 'Accepted').length,
        results: results,
        runtime: `${run.runtimeMs}ms`,
        memory: 'N/A',
      });

      setIsRunning(false);

      if (run.overallStatus === 'Accepted') {
        showToast("Code ran successfully! All test cases passed.", "success");
      } else {
        showToast(`Code failed correctness checks: ${run.overallStatus}`, "error");
      }
    } catch (err: any) {
      console.error("Run code error:", err);
      setIsRunning(false);
      showToast(err.message || "Failed to run code", "error");
    }
  };

  // Submit code asynchronously via API gateway and poll status
  const handleSubmitCode = async () => {
    setIsSubmitting(true);
    setIsRunning(true);
    setConsoleTab('output');

    try {
      const data = await graphqlRequest(`
        mutation($problemId: String!, $language: String!, $code: String!) {
          submitCode(problemId: $problemId, language: $language, code: $code) {
            submissionId
          }
        }
      `, { problemId: id, language, code });

      const submissionId = data.submitCode.submissionId;
      showToast("Code submitted! Awaiting evaluation...", "info");

      // Poll getSubmission until it's graded
      let pollCount = 0;
      const pollInterval = setInterval(async () => {
        pollCount++;
        if (pollCount > 15) {
          clearInterval(pollInterval);
          setIsSubmitting(false);
          setIsRunning(false);
          showToast("Evaluation timed out. Please check submissions history.", "error");
          return;
        }

        try {
          const subData = await graphqlRequest(`
            query($id: String!) {
              getSubmission(id: $id) {
                id
                status
                runtimeMs
                memoryKb
                testResults {
                  testCaseId
                  input
                  expectedOutput
                  actualOutput
                  status
                  executionMs
                  error
                }
                submittedAt
              }
            }
          `, { id: submissionId });

          const sub = subData.getSubmission;
          if (sub.status !== 'Pending' && sub.status !== 'Running') {
            clearInterval(pollInterval);
            setIsSubmitting(false);
            setIsRunning(false);

            const results = sub.testResults.map((tr: any) => ({
              input: tr.input,
              expected: tr.expectedOutput,
              actual: tr.actualOutput,
              passed: tr.status === 'Accepted',
              stdout: tr.error,
            }));

            setRunResults({
              success: sub.status === 'Accepted',
              totalCases: sub.testResults.length,
              passedCases: sub.testResults.filter((tr: any) => tr.status === 'Accepted').length,
              results: results,
              runtime: `${sub.runtimeMs}ms`,
              memory: `${(sub.memoryKb / 1024).toFixed(1)}MB`,
            });

            // Update submissions list
            const newSubmission: Submission = {
              status: (sub.status === 'Accepted' ? 'Accepted' : (sub.status === 'WrongAnswer' ? 'Wrong Answer' : 'Runtime Error')) as any,
              timestamp: new Date(sub.submittedAt).toLocaleString(),
              language: language.toUpperCase(),
              runtime: `${sub.runtimeMs}ms`,
              code: code,
            };
            setSubmissions(prev => [newSubmission, ...prev]);

            if (sub.status === 'Accepted') {
              showToast("Submission Accepted! All test cases passed.", "success");
            } else {
              showToast(`Submission Rejected: ${sub.status}`, "error");
            }
          }
        } catch (err) {
          console.error("Failed to poll submission status:", err);
        }
      }, 1000);

    } catch (err: any) {
      console.error("Submit code error:", err);
      setIsRunning(false);
      setIsSubmitting(false);
      showToast(err.message || "Failed to submit code", "error");
    }
  };

  if (isLoading || !problem) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-bg-page text-text-secondary font-semibold">
        Loading challenge workspace...
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-bg-page text-text-primary overflow-hidden font-sans select-none antialiased">
      {/* Toast notifications */}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col space-y-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl border shadow-xl text-xs font-semibold pointer-events-auto bg-surface ${toast.type === 'success'
                  ? 'border-green-500/20 text-green-500 shadow-green-500/5'
                  : toast.type === 'error'
                    ? 'border-red-500/20 text-red-500 shadow-red-500/5'
                    : 'border-accent/20 text-accent shadow-accent/5'
                }`}
            >
              {toast.type === 'success' && <CheckCircle className="h-4 w-4" />}
              {toast.type === 'error' && <XCircle className="h-4 w-4" />}
              {toast.type === 'info' && <Info className="h-4 w-4" />}
              <span>{toast.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Header */}
      <WorkspaceHeader
        currentProblemId={id || ''}
        problemTitle={problem.title}
        onResetCode={handleResetCode}
        onRunCode={handleRunCode}
        onSubmitCode={handleSubmitCode}
        isSubmitting={isSubmitting}
        isRunning={isRunning}
      />

      {/* Resizable panels layout */}
      <div className="flex-1 w-full p-4 overflow-hidden bg-bg-page transition-colors duration-200">
        <PanelGroup orientation="horizontal">
          {!isFullscreen && (
            <>
              <Panel defaultSize={42} minSize={25} className="h-full">
                <ProblemDescriptionPanel problem={problem} submissions={submissions} />
              </Panel>
              {/* Vertical resizer gutter */}
              <PanelResizeHandle className="w-2.5 group relative flex items-center justify-center cursor-col-resize focus:outline-none select-none">
                <div className="h-12 w-0.5 rounded-full bg-border/60 group-hover:bg-accent group-focus:bg-accent transition-colors" />
              </PanelResizeHandle>
            </>
          )}

          <Panel defaultSize={isFullscreen ? 100 : 58} minSize={25} className="h-full">
            <PanelGroup orientation="vertical">
              <Panel defaultSize={62} minSize={30} className="w-full">
                <IDEPanel
                  language={language}
                  onLanguageChange={setLanguage}
                  code={code}
                  onCodeChange={setCode}
                  onReset={handleResetCode}
                  isFullscreen={isFullscreen}
                  onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
                />
              </Panel>

              {/* Horizontal resizer gutter */}
              <PanelResizeHandle className="h-2.5 group relative flex items-center justify-center cursor-row-resize focus:outline-none select-none">
                <div className="w-12 h-0.5 rounded-full bg-border/60 group-hover:bg-accent group-focus:bg-accent transition-colors" />
              </PanelResizeHandle>

              <Panel defaultSize={38} minSize={20} className="w-full">
                <ConsolePanel
                  examples={problem.examples}
                  isRunning={isRunning}
                  runResults={runResults}
                  customInput={customInput}
                  onCustomInputChange={setCustomInput}
                  onRunCode={handleRunCode}
                  onSubmitCode={handleSubmitCode}
                  isSubmitting={isSubmitting}
                  activeTab={consoleTab}
                  setActiveTab={setConsoleTab}
                />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default SolveProblemPage;
