import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const Module10: React.FC<Props> = ({ page }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  // Git commands activity
  const [commandGuess, setCommandGuess] = useState<Record<string, string>>({});

  // Git branching simulator
  const [commits, setCommits] = useState<{ id: string; branch: 'main' | 'feature' }[]>([
    { id: 'c1', branch: 'main' },
    { id: 'c2', branch: 'main' },
  ]);

  const quizQuestions = [
    { id: 1, question: 'Q1: Which command initializes a new local Git repository?', options: ['A. git clone', 'B. git init', 'C. git start', 'D. git create'], correctAnswer: 'B. git init' },
    { id: 2, question: 'Q2: How do you stage specific changes in file "index.html" to be committed?', options: ['A. git add index.html', 'B. git stage index.html', 'C. git commit index.html', 'D. git save index.html'], correctAnswer: 'A. git add index.html' },
    { id: 3, question: 'Q3: What is the main purpose of GitHub compared to Git?', options: ['A. GitHub compiles Git code', 'B. GitHub is a hosting service for Git repositories', 'C. GitHub is the backend of Git', 'D. GitHub is local only'], correctAnswer: 'B. GitHub is a hosting service for Git repositories' },
    { id: 4, question: 'Q4: Which command switches to a branch named "feature-login"?', options: ['A. git branch feature-login', 'B. git checkout feature-login', 'C. git merge feature-login', 'D. git push feature-login'], correctAnswer: 'B. git checkout feature-login' },
    { id: 5, question: 'Q5: What Git command displays the history of commits?', options: ['A. git history', 'B. git status', 'C. git log', 'D. git diff'], correctAnswer: 'C. git log' },
  ];

  const handleSubmitQuiz = () => {
    let s = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) s++;
    });
    setQuizScore(s);
    setQuizSubmitted(true);
  };

  const handleAddCommit = (br: 'main' | 'feature') => {
    setCommits(p => [...p, { id: `c${p.length + 1}`, branch: br }]);
  };

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 10.1: Introduction to Git</h2>
          <p className={styles.paragraph}><strong>Git</strong> is a free and open-source **Distributed Version Control System (VCS)** designed to track changes in source code files over time. It allows teams to collaborate, roll back to previous states, and manage different feature pipelines concurrently.</p>
          
          <h3 className={styles.subtitle}>Why Version Control Matters:</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
            <li><strong>Backup</strong>: Every team member has a complete copy of the project history locally.</li>
            <li><strong>Undo Button</strong>: Easily revert files to a working state if code breaks.</li>
            <li><strong>Branching</strong>: Safely work on new features without changing the production code line.</li>
            <li><strong>Audit Log</strong>: See who changed what lines of code, when, and why.</li>
          </ul>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 10.2: Installing Git</h2>
          <p className={styles.paragraph}>Git runs from the terminal command-line interface. Let's outline the installation methods:</p>
          
          <h3 className={styles.subtitle}>Installation Instructions</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.stepBlock}><span className={styles.stepNum}>1</span><p className={styles.stepText}><strong>Mac</strong>: Open terminal and type <code>git --version</code>. If not installed, macOS will prompt you to install Apple developer command line tools.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>2</span><p className={styles.stepText}><strong>Windows</strong>: Download and run the setup installer from <a href="https://git-scm.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>git-scm.com</a>, selecting Git Bash as terminal.</p></div>
            <div className={styles.stepBlock}><span className={styles.stepNum}>3</span><p className={styles.stepText}><strong>Linux</strong>: Install using your package manager (e.g. <code>sudo apt install git</code> on Debian/Ubuntu).</p></div>
          </div>

          <div className={styles.codeLabel}>Verify Git Installation</div>
          <pre className={styles.codeBlock}><code>{`$ git --version
git version 2.39.2`}</code></pre>
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 10.3: Basic Git Commands</h2>
          <p className={styles.paragraph}>These five commands form the foundation of local version tracking workflow:</p>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>git init</code></td>
                <td>Initializes a new local Git repository inside current directory</td>
              </tr>
              <tr>
                <td><code>git status</code></td>
                <td>Shows state of working directory and staging area (tracked/untracked changes)</td>
              </tr>
              <tr>
                <td><code>git add</code></td>
                <td>Adds file changes to staging area</td>
              </tr>
              <tr>
                <td><code>git commit -m "msg"</code></td>
                <td>Saves staged snapshot to local repository history with a message</td>
              </tr>
              <tr>
                <td><code>git log</code></td>
                <td>Shows list of all commits saved to this branch</td>
              </tr>
            </tbody>
          </table>

          <h3 className={styles.subtitle}>Test: Match Command to Purpose</h3>
          <div className={styles.activityGrid}>
            <div className={styles.activityRow}>
              <span className={styles.activityName}>"Which command stages all modified files?"</span>
              <div className={styles.buttonGroup}>
                {['git add .', 'git commit'].map(cmd => (
                  <button key={cmd} className={commandGuess['stage'] === cmd ? styles.choiceBtnCorrect : styles.choiceBtn} onClick={() => setCommandGuess(p => ({...p, stage: cmd}))}>{cmd}</button>
                ))}
              </div>
            </div>
            <div className={styles.activityRow}>
              <span className={styles.activityName}>"Which command checks current branch changes?"</span>
              <div className={styles.buttonGroup}>
                {['git status', 'git log'].map(cmd => (
                  <button key={cmd} className={commandGuess['check'] === cmd ? styles.choiceBtnCorrect : styles.choiceBtn} onClick={() => setCommandGuess(p => ({...p, check: cmd}))}>{cmd}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 10.4: Staging Area & Commits</h2>
          <p className={styles.paragraph}>Git has a three-tier architecture that files travel through before being saved in project history.</p>
          
          <div className={styles.visualFlow}>
            <div className={styles.flowItem}>1. Working Directory (Unsaved sandbox)</div>
            <div className={styles.flowArrow}>↓ (git add)</div>
            <div className={styles.flowItem}>2. Staging Area (Staged checklist)</div>
            <div className={styles.flowArrow}>↓ (git commit)</div>
            <div className={styles.flowItem}>3. Local Repository (Saved commits history)</div>
          </div>

          <div className={styles.codeLabel}>Complete local Git workflow:</div>
          <pre className={styles.codeBlock}><code>{`# 1. Edit your files (e.g. index.html)
# 2. Stage changes
git add index.html

# 3. Commit changes locally
git commit -m "Add index heading structure"`}</code></pre>
        </div>
      );

    case 5:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 10.5: Remote Repositories & GitHub</h2>
          <p className={styles.paragraph}><strong>GitHub</strong> is a cloud hosting platform for Git repositories. It lets developers collaborate on projects globally.</p>
          
          <h3 className={styles.subtitle}>Connecting Local to Cloud</h3>
          <div className={styles.codeLabel}>Git Remote Commands</div>
          <pre className={styles.codeBlock}><code>{`# Add remote URL name 'origin'
git remote add origin https://github.com/user/project.git

# Push changes from main branch to origin
git push -u origin main

# Pull latest changes from origin to local
git pull origin main

# Copy remote repository locally
git clone https://github.com/user/project.git`}</code></pre>
        </div>
      );

    case 6:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 10.6: Branching</h2>
          <p className={styles.paragraph}>A <strong>branch</strong> is an independent line of development. Branches allow you to work on new features or bug fixes without affecting the stable <code>main</code> codebase branch.</p>
          
          <div className={styles.codeLabel}>Branching Commands</div>
          <pre className={styles.codeBlock}><code>{`# Create new branch
git branch feature-login

# Switch to branch
git checkout feature-login
# (Alternative newer command: git switch feature-login)

# Create AND switch at once
git checkout -b feature-login`}</code></pre>

          <h3 className={styles.subtitle}>Branch commits simulator</h3>
          <p className={styles.paragraph}>Simulate adding commits to separate parallel branches:</p>
          <div style={{ background: 'var(--bg-surface-2)', padding: '16px', borderRadius: '8px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <button className={styles.saveBtn} onClick={() => handleAddCommit('main')}>Commit to main</button>
              <button className={styles.saveBtn} onClick={() => handleAddCommit('feature')}>Commit to feature</button>
            </div>
            <div style={{ fontSize: '13px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {commits.map(c => (
                <div key={c.id} style={{ background: c.branch === 'main' ? 'var(--accent)' : '#ec4899', color: 'white', padding: '6px 10px', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span>{c.id}</span>
                  <span style={{ fontSize: '10px', opacity: 0.8 }}>({c.branch})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 10.7: Merging</h2>
          <p className={styles.paragraph}><strong>Merging</strong> combines changes from one branch into another (e.g. merging <code>feature-login</code> back into <code>main</code>).</p>
          
          <div className={styles.codeLabel}>Merge Workflow</div>
          <pre className={styles.codeBlock}><code>{`# 1. Switch back to main
git checkout main

# 2. Merge changes
git merge feature-login`}</code></pre>

          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>⚠️ Merge Conflicts</p>
            <p className={styles.tipBoxText}>If the same line of code was edited in both branches, Git stops the merge and flags a Conflict. You must open the flagged files, pick which version to keep, remove Git markers (`{"<<<<<<<"}`, `=======`, `{">>>>>>>"}`), save, and commit manually.</p>
          </div>
        </div>
      );

    case 8:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 10.8: Pull Requests (PR)</h2>
          <p className={styles.paragraph}>A <strong>Pull Request (PR)</strong> is a GitHub feature that lets you propose changes you've made to a repository branch and request feedback. Other developers can review your commits, suggest edits, and approve them before they are merged into the main branch.</p>
          
          <h3 className={styles.subtitle}>Standard PR Lifecycle:</h3>
          <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
            <li>1. Create local feature branch, add commits.</li>
            <li>2. Push feature branch to GitHub (remote origin).</li>
            <li>3. Open Pull Request on GitHub UI.</li>
            <li>4. Request review comments, make corrections as requested.</li>
            <li>5. Reviewer approves, and clicks "Merge Pull Request" on GitHub website.</li>
          </ol>
        </div>
      );

    case 9:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 10 Quiz</h2>
          <p className={styles.paragraph}>Verify your Git & GitHub knowledge:</p>
          <div className={styles.quizCardList}>
            {quizQuestions.map(q => {
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
                      return <button key={opt} className={optStyle} onClick={() => { if (!quizSubmitted) setQuizAnswers(p => ({...p, [q.id]: opt})); }} disabled={quizSubmitted}>{opt}</button>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.quizSubmitRow}>
            {!quizSubmitted ? (
              <button className={styles.saveBtn} onClick={handleSubmitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length}>Submit Quiz</button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'space-between' }}>
                <span className={styles.quizScoreText}>Score: {quizScore} / {quizQuestions.length} {quizScore === quizQuestions.length ? '🎉 Perfect!' : '👍 Review key points!'}</span>
                <button className={styles.backBtn} onClick={() => { setQuizSubmitted(false); setQuizScore(null); setQuizAnswers({}); }}>Retry Quiz</button>
              </div>
            )}
          </div>
        </div>
      );

    case 10:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 10 Assignment</h2>
          <p className={styles.paragraph}>Write down short answers for the following prompts to complete Module 10:</p>
          <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
            <li>1. What is the difference between Git and GitHub?</li>
            <li>2. Outline the steps to save local work to a git repository.</li>
            <li>3. Why do developers use branches? How do you switch branches?</li>
            <li>4. What causes a merge conflict, and how is it resolved?</li>
            <li>5. Explain the role of a Pull Request in collaborative development.</li>
          </ol>
          {!assignmentSubmitted ? (
            <div>
              <textarea className={styles.assignmentBox} placeholder="Type your answers here..." value={assignmentText} onChange={(e) => setAssignmentText(e.target.value)} />
              <button className={styles.saveBtn} onClick={() => { if (assignmentText.trim().length > 10) setAssignmentSubmitted(true); }} disabled={assignmentText.trim().length < 10}>Submit Assignment</button>
            </div>
          ) : (
            <div className={styles.completeBadge} style={{ marginTop: '24px' }}><span>✓ Assignment Submitted! 🎉</span></div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Module10;
