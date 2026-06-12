import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FrontendCoursePage.module.css';

interface SortItem {
  id: string;
  name: string;
  correctType: 'Static' | 'Dynamic';
  selected?: 'Static' | 'Dynamic';
}

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const FrontendCoursePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 10; // 0 to 10 (0: Toc/Overview, 1-8: Lessons, 9: Quiz, 10: Assignment)

  // ─── Interaction States ───────────────────────────────────────────────────
  // Page 1 input
  const [websites, setWebsites] = useState<string[]>(['', '', '']);
  const [isWebsitesSaved, setIsWebsitesSaved] = useState<boolean>(false);

  // Page 2 Sorting activity
  const [sortItems, setSortItems] = useState<SortItem[]>([
    { id: '1', name: 'Portfolio Website', correctType: 'Static' },
    { id: '2', name: 'Instagram', correctType: 'Dynamic' },
    { id: '3', name: 'Amazon', correctType: 'Dynamic' },
    { id: '4', name: 'Restaurant Menu Website', correctType: 'Static' },
  ]);

  // Page 3 Quick Quiz
  const [page3Answer, setPage3Answer] = useState<string | null>(null);

  // Page 4 Tab selector
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'database'>('frontend');

  // Page 5 timeline selection
  const [activeRoadmapNode, setActiveRoadmapNode] = useState<number>(0);

  // Page 6 Collapsible website type cards
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Page 7 checklist items
  const [checkedTools, setCheckedTools] = useState<Record<string, boolean>>({
    chrome: false,
    vscode: false,
    git: false,
    nodejs: false,
  });

  // Page 9 Final Quiz states
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Page 10 Assignment state
  const [assignmentText, setAssignmentText] = useState<string>('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState<boolean>(false);

  // Read progress tracker
  const [maxPageRead, setMaxPageRead] = useState<number>(0);

  useEffect(() => {
    if (currentPage > maxPageRead) {
      setMaxPageRead(currentPage);
    }
  }, [currentPage, maxPageRead]);

  // Calculate percentage of module read
  const progressPercent = Math.round((maxPageRead / totalPages) * 100);

  // ─── Quiz Questions ────────────────────────────────────────────────────────
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: 'Q1: What does HTML stand for?',
      options: [
        'A. Hyper Transfer Markup Language',
        'B. HyperText Markup Language',
        'C. High Text Machine Language',
        'D. Hyper Tool Markup Language',
      ],
      correctAnswer: 'B. HyperText Markup Language',
    },
    {
      id: 2,
      question: 'Q2: Which technology adds styling?',
      options: ['A. HTML', 'B. CSS', 'C. Java', 'D. SQL'],
      correctAnswer: 'B. CSS',
    },
    {
      id: 3,
      question: 'Q3: Which technology adds interactivity?',
      options: ['A. CSS', 'B. HTML', 'C. JavaScript', 'D. MySQL'],
      correctAnswer: 'C. JavaScript',
    },
    {
      id: 4,
      question: 'Q4: Which part stores data?',
      options: ['A. Frontend', 'B. Backend', 'C. Database', 'D. Browser'],
      correctAnswer: 'C. Database',
    },
  ];

  // ─── Actions ───────────────────────────────────────────────────────────────
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleBackToCourses = () => {
    navigate('/courses');
  };

  const handleWebsiteChange = (index: number, val: string) => {
    const nextWebs = [...websites];
    nextWebs[index] = val;
    setWebsites(nextWebs);
    setIsWebsitesSaved(false);
  };

  const handleClassification = (itemId: string, selectedType: 'Static' | 'Dynamic') => {
    setSortItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, selected: selectedType } : item))
    );
  };

  const toggleCheckTool = (key: string) => {
    setCheckedTools((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectQuizOption = (questionId: number, option: string) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const handleSubmitAssignment = () => {
    if (assignmentText.trim().length > 10) {
      setAssignmentSubmitted(true);
    }
  };

  // ─── Page Render Helpers ───────────────────────────────────────────────────
  const renderPageContent = () => {
    switch (currentPage) {
      case 0:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Frontend Development Mastery</h2>
            <p className={styles.paragraph} style={{ fontSize: '15px', fontWeight: '500' }}>
              Welcome! Let's start with <strong>Module 1: Introduction to Web Development</strong>.
            </p>
            <div className={styles.visualFlow} style={{ padding: '24px', alignItems: 'flex-start', fontFamily: 'inherit' }}>
              <h3 style={{ margin: '0 0 12px', fontSize: '15px', color: 'var(--text-primary)' }}>📚 Module Outline:</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                <li>1. What is Web Development? {maxPageRead >= 2 ? '✅' : '⏳'}</li>
                <li>2. How Websites Work {maxPageRead >= 3 ? '✅' : '⏳'}</li>
                <li>3. Frontend vs Backend vs Database {maxPageRead >= 4 ? '✅' : '⏳'}</li>
                <li>4. Types of Websites {maxPageRead >= 6 ? '✅' : '⏳'}</li>
                <li>5. Tools Required for Web Development {maxPageRead >= 7 ? '✅' : '⏳'}</li>
                <li>6. Career Opportunities in Frontend Development {maxPageRead >= 8 ? '✅' : '⏳'}</li>
              </ul>
            </div>
            <p className={styles.paragraph}>
              Click the **Next Page** button below to begin your first lesson!
            </p>
          </div>
        );

      case 1:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Lesson 1: Welcome to Web Development</h2>
            <p className={styles.paragraph}>
              Have you ever wondered how websites like Google, Amazon, YouTube, Netflix, or Instagram work?
            </p>
            <p className={styles.paragraph}>
              Every website you visit is built using web development technologies. Web development is the process of creating websites and web applications that run on the internet.
            </p>
            
            <h3 className={styles.subtitle}>Real-World Examples</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Website</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google</td>
                  <td>Search Engine</td>
                </tr>
                <tr>
                  <td>Amazon</td>
                  <td>E-commerce</td>
                </tr>
                <tr>
                  <td>Netflix</td>
                  <td>Streaming</td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td>Professional Networking</td>
                </tr>
                <tr>
                  <td>YouTube</td>
                  <td>Video Sharing</td>
                </tr>
              </tbody>
            </table>

            <h3 className={styles.subtitle}>Think About It</h3>
            <p className={styles.paragraph}>
              Can you name three websites you use every day? Type them below:
            </p>
            <div className={styles.websiteInputs}>
              {websites.map((w, idx) => (
                <input
                  key={idx}
                  className={styles.inputField}
                  type="text"
                  placeholder={`Website ${idx + 1}`}
                  value={w}
                  onChange={(e) => handleWebsiteChange(idx, e.target.value)}
                  disabled={isWebsitesSaved}
                />
              ))}
              {!isWebsitesSaved ? (
                <button
                  className={styles.saveBtn}
                  onClick={() => setIsWebsitesSaved(true)}
                  disabled={websites.some((w) => !w.trim())}
                >
                  Save Websites
                </button>
              ) : (
                <div className={styles.successMessage}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Saved to notes!</span>
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Lesson 2: What is Web Development?</h2>
            <p className={styles.paragraph}>
              Web Development is the process of building and maintaining websites and web applications.
            </p>
            <p className={styles.paragraph}>
              A website can be categorized as **Static** (rarely changes, same for everyone) or **Dynamic** (interactive, updates based on action or user context).
            </p>

            <h3 className={styles.subtitle}>Interactive Activity</h3>
            <p className={styles.paragraph}>
              Identify whether the following websites are <strong>Static</strong> or <strong>Dynamic</strong>:
            </p>
            <div className={styles.activityGrid}>
              {sortItems.map((item) => {
                const isAnswered = item.selected !== undefined;
                const isCorrect = isAnswered && item.selected === item.correctType;
                return (
                  <div key={item.id} className={styles.activityRow}>
                    <span className={styles.activityName}>{item.name}</span>
                    <div className={styles.buttonGroup}>
                      {['Static', 'Dynamic'].map((type) => {
                        const isThisOption = item.selected === type;
                        let btnStyle = styles.choiceBtn;
                        if (isThisOption) {
                          btnStyle = isCorrect ? styles.choiceBtnCorrect : styles.choiceBtnIncorrect;
                        }
                        return (
                          <button
                            key={type}
                            className={btnStyle}
                            onClick={() => handleClassification(item.id, type as any)}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            {sortItems.every((item) => item.selected !== undefined) && (
              <p className={styles.paragraph} style={{ color: '#10b981', fontWeight: '700', marginTop: '10px' }}>
                🎉 Great job! You identified: Portfolio/Menu → Static, Instagram/Amazon → Dynamic!
              </p>
            )}
          </div>
        );

      case 3:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Lesson 3: How Does a Website Work?</h2>
            <p className={styles.paragraph}>
              When you visit a website (e.g. typing `www.amazon.com` in your browser), a sequence of background requests takes place.
            </p>

            <h3 className={styles.subtitle}>Interactive Timeline Process</h3>
            <div className={styles.stepsContainer}>
              <div className={styles.stepBlock}>
                <span className={styles.stepNum}>1</span>
                <p className={styles.stepText}>
                  <strong>Request Send</strong>: You type the website address in Chrome/Safari, which triggers a request message.
                </p>
              </div>
              <div className={styles.stepBlock}>
                <span className={styles.stepNum}>2</span>
                <p className={styles.stepText}>
                  <strong>Internet Routing</strong>: The request travels across the internet to the host server.
                </p>
              </div>
              <div className={styles.stepBlock}>
                <span className={styles.stepNum}>3</span>
                <p className={styles.stepText}>
                  <strong>Processing</strong>: The server handles the request, accessing HTML, CSS, JavaScript, and database products.
                </p>
              </div>
              <div className={styles.stepBlock}>
                <span className={styles.stepNum}>4</span>
                <p className={styles.stepText}>
                  <strong>Response delivery</strong>: The server returns files back as a response stream.
                </p>
              </div>
              <div className={styles.stepBlock}>
                <span className={styles.stepNum}>5</span>
                <p className={styles.stepText}>
                  <strong>Display rendering</strong>: The browser parses those scripts and renders the products page!
                </p>
              </div>
            </div>

            <div className={styles.visualFlow}>
              <div className={styles.flowItem}>User / Browser</div>
              <div className={styles.flowArrow}>↓ (Request)</div>
              <div className={styles.flowItem}>Internet Server</div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowItem}>Database Lookup</div>
              <div className={styles.flowArrow}>↓ (Response Data)</div>
              <div className={styles.flowItem}>Website Displayed</div>
            </div>

            <div className={styles.inlineQuiz}>
              <h4 className={styles.quizQuestion}>⚡ Quick Quiz: When you open a website, who sends the request?</h4>
              <div className={styles.quizOptions}>
                {['A. Server', 'B. Browser', 'C. Database', 'D. Internet'].map((opt) => {
                  const hasAnswered = page3Answer !== null;
                  const isCorrect = opt.startsWith('B');
                  const isSelected = page3Answer === opt;
                  let optStyle = styles.optionBtn;
                  if (isSelected) {
                    optStyle = isCorrect ? styles.optionBtnCorrect : styles.optionBtnIncorrect;
                  }
                  return (
                    <button
                      key={opt}
                      className={optStyle}
                      onClick={() => !hasAnswered && setPage3Answer(opt)}
                      disabled={hasAnswered}
                    >
                      {opt} {isSelected && (isCorrect ? '✅' : '❌')}
                    </button>
                  );
                })}
              </div>
              {page3Answer && (
                <p className={styles.paragraph} style={{ marginTop: '12px', fontWeight: '600', color: page3Answer.startsWith('B') ? '#10b981' : '#ef4444' }}>
                  {page3Answer.startsWith('B') ? 'Correct! The browser starts the connection.' : 'Oops! Try again (hint: the software you write on sends it).'}
                  {page3Answer.startsWith('B') === false && (
                    <button onClick={() => setPage3Answer(null)} style={{ marginLeft: '10px', background: 'transparent', border: 'none', color: 'var(--accent)', textDecoration: 'underline', cursor: 'pointer' }}>Retry</button>
                  )}
                </p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Lesson 4: Frontend vs Backend vs Database</h2>
            <p className={styles.paragraph}>
              A modern web application relies on three distinct layers working together. Click on the tabs below to explore each layer:
            </p>

            <div className={styles.tabHeader}>
              <button
                className={`${styles.tabBtn} ${activeTab === 'frontend' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('frontend')}
              >
                Frontend (Client)
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'backend' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('backend')}
              >
                Backend (Server)
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'database' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('database')}
              >
                Database
              </button>
            </div>

            <div className={styles.tabContent} style={{ background: 'var(--bg-surface-2)', padding: '20px', borderRadius: '12px' }}>
              {activeTab === 'frontend' && (
                <div>
                  <h4 style={{ margin: '0 0 8px', color: 'var(--text-primary)', fontSize: '15px' }}>🎨 Frontend is what users see</h4>
                  <p className={styles.paragraph}>
                    Includes buttons, interactive menus, product images, feedback forms, and written text.
                  </p>
                  <p className={styles.paragraph}>
                    <strong>Core Stack</strong>: HTML (structure), CSS (styling), JavaScript (logic), and React (components).
                  </p>
                </div>
              )}
              {activeTab === 'backend' && (
                <div>
                  <h4 style={{ margin: '0 0 8px', color: 'var(--text-primary)', fontSize: '15px' }}>⚙️ Backend handles business logic</h4>
                  <p className={styles.paragraph}>
                    Processes logins, validates payments, handles authentication, and constructs data APIs out of user requests.
                  </p>
                  <p className={styles.paragraph}>
                    <strong>Core Languages</strong>: Node.js (JavaScript/TS), Java, Python, Go, PHP.
                  </p>
                </div>
              )}
              {activeTab === 'database' && (
                <div>
                  <h4 style={{ margin: '0 0 8px', color: 'var(--text-primary)', fontSize: '15px' }}>🗄️ Database stores information securely</h4>
                  <p className={styles.paragraph}>
                    Holds product listings, customer accounts, payment receipts, logs, and relationships.
                  </p>
                  <p className={styles.paragraph}>
                    <strong>Popular Options</strong>: PostgreSQL, MySQL, MongoDB, Redis.
                  </p>
                </div>
              )}
            </div>

            <div className={styles.visualFlow} style={{ fontSize: '11px', lineHeight: '1.6' }}>
              User clicks login on Frontend → Sends credentials to Backend → Backend checks Database → Returns success token to Frontend → Opens Home Dashboard!
            </div>
          </div>
        );

      case 5:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Lesson 5: Frontend Development Roadmap</h2>
            <p className={styles.paragraph}>
              To become an effective frontend engineer, you must master the fundamental stack step-by-step. Click each step below to learn more:
            </p>

            <div className={styles.timeline}>
              {[
                { step: '1. HTML (Structure)', desc: 'Provides the raw structure of a page. E.g. tags like <h1>Welcome</h1> or <button>Submit</button>.' },
                { step: '2. CSS (Styling)', desc: 'Defines typography, custom spacing, margins, layouts, grid/flexbox elements, gradients, and custom dark modes.' },
                { step: '3. JavaScript (Interactivity)', desc: 'Adds functional logic to buttons, loads remote network APIs dynamically, handles state transformations, and builds responsive sliders.' },
                { step: '4. React Framework', desc: 'Allows you to compile components into modular, performant client interfaces. Powers products like Facebook, Netflix, and Instagram.' },
                { step: '5. Projects & Deployment', desc: 'Build real-world portfolios and deploy them to cloud hostings (Vercel, AWS S3/CloudFront) for public viewing.' }
              ].map((node, i) => {
                const isActive = activeRoadmapNode === i;
                return (
                  <div
                    key={i}
                    className={`${styles.timelineNode} ${isActive ? styles.timelineNodeActive : ''}`}
                    onClick={() => setActiveRoadmapNode(i)}
                  >
                    <div className={styles.timelineDot} />
                    <h4 className={styles.timelineTitle}>{node.step}</h4>
                    <p className={styles.timelineDesc}>{node.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 6:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Lesson 6: Types of Websites</h2>
            <p className={styles.paragraph}>
              Websites serve different core functions. Click on the cards below to reveal their features:
            </p>

            <div className={styles.websiteTypesGrid}>
              {[
                { title: '1. Personal Portfolio Website', body: 'Showcases your skills, bio, resume, and coding projects. Used to get hired or land freelance work.' },
                { title: '2. Business Website', body: 'Promotes products, outlines services, holds contacting forms, and represents corporate brands online.' },
                { title: '3. E-Commerce Platform', body: 'Sells merchandise online. Features dynamic catalogs, shopping carts, credit checkout APIs, and orders history (e.g. Amazon, Flipkart).' },
                { title: '4. Social Media Hub', body: 'Connects people. Requires feed algorithms, messaging boxes, active profiles, and instant notifications (e.g. LinkedIn, Instagram).' },
                { title: '5. Learning Platforms', body: 'Delivers educational materials, video courses, quizzes, and certificates.' }
              ].map((card, i) => {
                const isExpanded = expandedCard === i;
                return (
                  <div
                    key={i}
                    className={`${styles.typeCard} ${isExpanded ? styles.typeCardExpanded : ''}`}
                    onClick={() => setExpandedCard(isExpanded ? null : i)}
                  >
                    <div className={styles.typeCardHeader}>
                      <h4 className={styles.typeCardTitle}>{card.title}</h4>
                      <span className={styles.typeCardArrow}>▶</span>
                    </div>
                    {isExpanded && (
                      <div className={styles.typeCardContent}>
                        {card.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 7:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Lesson 7: Tools Every Frontend Developer Needs</h2>
            <p className={styles.paragraph}>
              Before you begin writing lines of code, you must initialize your local development environment:
            </p>

            <div className={styles.checklist}>
              <div className={styles.checkItem} onClick={() => toggleCheckTool('chrome')}>
                <div className={`${styles.checkbox} ${checkedTools.chrome ? styles.checkboxChecked : ''}`}>
                  {checkedTools.chrome && '✓'}
                </div>
                <span className={`${styles.checkLabel} ${checkedTools.chrome ? styles.checkLabelChecked : ''}`}>
                  1. Google Chrome (For debugging and loading inspector consoles)
                </span>
              </div>

              <div className={styles.checkItem} onClick={() => toggleCheckTool('vscode')}>
                <div className={`${styles.checkbox} ${checkedTools.vscode ? styles.checkboxChecked : ''}`}>
                  {checkedTools.vscode && '✓'}
                </div>
                <span className={`${styles.checkLabel} ${checkedTools.vscode ? styles.checkLabelChecked : ''}`}>
                  2. Visual Studio Code (The industry standard editor for code structure)
                </span>
              </div>

              <div className={styles.checkItem} onClick={() => toggleCheckTool('git')}>
                <div className={`${styles.checkbox} ${checkedTools.git ? styles.checkboxChecked : ''}`}>
                  {checkedTools.git && '✓'}
                </div>
                <span className={`${styles.checkLabel} ${checkedTools.git ? styles.checkLabelChecked : ''}`}>
                  3. Git version control (To track code commits and changes locally)
                </span>
              </div>

              <div className={styles.checkItem} onClick={() => toggleCheckTool('nodejs')}>
                <div className={`${styles.checkbox} ${checkedTools.nodejs ? styles.checkboxChecked : ''}`}>
                  {checkedTools.nodejs && '✓'}
                </div>
                <span className={`${styles.checkLabel} ${checkedTools.nodejs ? styles.checkLabelChecked : ''}`}>
                  4. Node.js runtime (To run tools, scripts, and build React bundles)
                </span>
              </div>
            </div>

            {Object.values(checkedTools).every(Boolean) ? (
              <div className={styles.completeBadge}>
                <span>🚀 Setup Complete! You have checked all checklist items.</span>
              </div>
            ) : (
              <p className={styles.paragraph} style={{ fontSize: '12.5px', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                *Click on the tools checklist above as you review/install them.*
              </p>
            )}
          </div>
        );

      case 8:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Lesson 8: Career Opportunities</h2>
            <p className={styles.paragraph}>
              Modern frontend expertise opens doors to multiple exciting job roles:
            </p>

            <div className={styles.careersGrid}>
              <div className={styles.careerCard}>
                <h4>Frontend Developer</h4>
                <p>Constructs user-facing layouts, styling logic, and integrates remote REST APIs.</p>
              </div>
              <div className={styles.careerCard}>
                <h4>React Developer</h4>
                <p>Builds complex single-page apps (SPA) using component hierarchies and state managers.</p>
              </div>
              <div className={styles.careerCard}>
                <h4>UI Developer</h4>
                <p>Bridges the gap between UI design layouts and production-level HTML/CSS structures.</p>
              </div>
              <div className={styles.careerCard}>
                <h4>Freelancer</h4>
                <p>Helps small businesses construct marketing pages, portfolios, or custom ecommerce setups.</p>
              </div>
            </div>
            <h3 className={styles.subtitle} style={{ marginTop: '20px' }}>Average Requirements</h3>
            <p className={styles.paragraph}>
              HTML, CSS, JavaScript, React, Git, Responsive layouts design, and general problem-solving.
            </p>
          </div>
        );

      case 9:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Module 1 Final Quiz</h2>
            <p className={styles.paragraph}>
              Verify your knowledge of introductory web concepts by answering the questions below:
            </p>

            <div className={styles.quizCardList}>
              {quizQuestions.map((q) => {
                const selected = quizAnswers[q.id];
                return (
                  <div key={q.id} className={styles.quizBlock}>
                    <h4 className={styles.quizBlockQuestion}>{q.question}</h4>
                    <div className={styles.quizBlockOptions}>
                      {q.options.map((opt) => {
                        const isThisOption = selected === opt;
                        let optStyle = styles.quizBlockOption;
                        if (isThisOption) {
                          optStyle = styles.quizBlockOptionSelected;
                        }
                        if (quizSubmitted) {
                          const isCorrectOpt = opt === q.correctAnswer;
                          if (isCorrectOpt) {
                            optStyle = styles.quizBlockOptionCorrect;
                          } else if (isThisOption) {
                            optStyle = styles.quizBlockOptionIncorrect;
                          }
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
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                >
                  Submit Quiz
                </button>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'space-between' }}>
                  <span className={styles.quizScoreText}>
                    Score: {quizScore} / {quizQuestions.length} {quizScore === 4 ? '🎉 Perfect!' : '👍 Keep studying!'}
                  </span>
                  <button
                    className={styles.backBtn}
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizScore(null);
                      setQuizAnswers({});
                    }}
                  >
                    Retry Quiz
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 10:
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.cardTitle}>Module 1 Assignment</h2>
            <p className={styles.paragraph}>
              Write down short answers for the following prompts to complete Module 1:
            </p>
            <ol style={{ fontSize: '13.5px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
              <li>1. What is Web Development in your own words?</li>
              <li>2. What is the difference between Frontend and Backend?</li>
              <li>3. Give 2 examples of dynamic websites.</li>
              <li>4. List 3 key tools needed for Frontend Development.</li>
              <li>5. What are your specific frontend learning goals?</li>
            </ol>

            {!assignmentSubmitted ? (
              <div>
                <textarea
                  className={styles.assignmentBox}
                  placeholder="Type your answers here..."
                  value={assignmentText}
                  onChange={(e) => setAssignmentText(e.target.value)}
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
                <span>✓ Assignment Submitted successfully! A mentor will review your notes shortly. 🎉</span>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {/* Top Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={handleBackToCourses}>
          ← Back to Courses
        </button>
        <div className={styles.headerTitleBlock}>
          <h1 className={styles.moduleTitle}>Module 1: Introduction to Web Development</h1>
          <p className={styles.courseName}>Frontend Development Mastery</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressWrapper}>
        <div className={styles.progressLabelRow}>
          <span>Progress</span>
          <span>{progressPercent}% Complete</span>
        </div>
        <div className={styles.progressBarTrack}>
          <div className={styles.progressBarFill} style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Main Card */}
      <div className={styles.card}>
        {renderPageContent()}
      </div>

      {/* Navigation Buttons */}
      <div className={styles.footer}>
        <button
          className={styles.navBtn}
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          ← Previous Page
        </button>
        <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-secondary)' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`${styles.navBtn} ${currentPage === totalPages ? styles.navBtnActive : ''}`}
          onClick={currentPage === totalPages ? handleBackToCourses : handleNext}
        >
          {currentPage === totalPages ? 'Finish Module' : 'Next Page →'}
        </button>
      </div>
    </div>
  );
};

export default FrontendCoursePage;
