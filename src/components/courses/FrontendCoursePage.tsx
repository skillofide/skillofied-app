import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FrontendCoursePage.module.css';

// ─── TYPES & SYLLABUS DATA ──────────────────────────────────────────────────
interface SyllabusItem {
  id: string;
  title: string;
}

interface SyllabusModule {
  id: string;
  title: string;
  items: SyllabusItem[];
}

const SYLLABUS: SyllabusModule[] = [
  {
    id: 'overview',
    title: 'COURSE OVERVIEW',
    items: [
      { id: 'overview-welcome', title: 'Welcome Message' },
      { id: 'overview-video', title: 'Course Introduction Video' },
      { id: 'overview-outcomes', title: 'Learning Outcomes' },
      { id: 'overview-roadmap', title: 'Course Roadmap' },
      { id: 'overview-prereqs', title: 'Prerequisites' },
      { id: 'overview-resources', title: 'Course Resources' },
    ],
  },
  {
    id: 'm1',
    title: 'MODULE 1: INTRODUCTION TO WEB DEVELOPMENT',
    items: [
      { id: 'm1-l1', title: 'Lesson 1.1 Welcome to Web Development' },
      { id: 'm1-l2', title: 'Lesson 1.2 What is Web Development?' },
      { id: 'm1-l3', title: 'Lesson 1.3 How Websites Work' },
      { id: 'm1-l4', title: 'Lesson 1.4 Frontend vs Backend vs Database' },
      { id: 'm1-l5', title: 'Lesson 1.5 Frontend Development Roadmap' },
      { id: 'm1-l6', title: 'Lesson 1.6 Types of Websites' },
      { id: 'm1-l7', title: 'Lesson 1.7 Developer Tools Setup' },
      { id: 'm1-l8', title: 'Lesson 1.8 Career Opportunities' },
      { id: 'm1-quiz', title: 'Module Quiz' },
      { id: 'm1-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm2',
    title: 'MODULE 2: HTML FUNDAMENTALS',
    items: [
      { id: 'm2-l1', title: 'Lesson 2.1 Introduction to HTML' },
      { id: 'm2-l2', title: 'Lesson 2.2 HTML Document Structure' },
      { id: 'm2-l3', title: 'Lesson 2.3 Headings and Paragraphs' },
      { id: 'm2-l4', title: 'Lesson 2.4 Text Formatting Tags' },
      { id: 'm2-l5', title: 'Lesson 2.5 Links and Navigation' },
      { id: 'm2-l6', title: 'Lesson 2.6 Images and Multimedia' },
      { id: 'm2-l7', title: 'Lesson 2.7 Lists (Ordered & Unordered)' },
      { id: 'm2-l8', title: 'Lesson 2.8 Tables' },
      { id: 'm2-l9', title: 'Lesson 2.9 Forms and Inputs' },
      { id: 'm2-l10', title: 'Lesson 2.10 Semantic HTML' },
      { id: 'm2-l11', title: 'Lesson 2.11 Accessibility Basics' },
      { id: 'm2-proj', title: 'HTML Mini Project' },
      { id: 'm2-quiz', title: 'Module Quiz' },
      { id: 'm2-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm3',
    title: 'MODULE 3: CSS FUNDAMENTALS',
    items: [
      { id: 'm3-l1', title: 'Lesson 3.1 Introduction to CSS' },
      { id: 'm3-l2', title: 'Lesson 3.2 CSS Syntax' },
      { id: 'm3-l3', title: 'Lesson 3.3 Selectors' },
      { id: 'm3-l4', title: 'Lesson 3.4 Colors and Backgrounds' },
      { id: 'm3-l5', title: 'Lesson 3.5 Typography' },
      { id: 'm3-l6', title: 'Lesson 3.6 Box Model' },
      { id: 'm3-l7', title: 'Lesson 3.7 Display Property' },
      { id: 'm3-l8', title: 'Lesson 3.8 Position Property' },
      { id: 'm3-l9', title: 'Lesson 3.9 Borders and Shadows' },
      { id: 'm3-l10', title: 'Lesson 3.10 CSS Units' },
      { id: 'm3-l11', title: 'Lesson 3.11 CSS Variables' },
      { id: 'm3-proj', title: 'CSS Mini Project' },
      { id: 'm3-quiz', title: 'Module Quiz' },
      { id: 'm3-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm4',
    title: 'MODULE 4: FLEXBOX & GRID',
    items: [
      { id: 'm4-l1', title: 'Lesson 4.1 Introduction to Flexbox' },
      { id: 'm4-l2', title: 'Lesson 4.2 Flex Container' },
      { id: 'm4-l3', title: 'Lesson 4.3 Flex Items' },
      { id: 'm4-l4', title: 'Lesson 4.4 Navbar using Flexbox' },
      { id: 'm4-l5', title: 'Lesson 4.5 Responsive Cards' },
      { id: 'm4-l6', title: 'Lesson 4.6 Introduction to CSS Grid' },
      { id: 'm4-l7', title: 'Lesson 4.7 Grid Rows & Columns' },
      { id: 'm4-l8', title: 'Lesson 4.8 Dashboard Layout using Grid' },
      { id: 'm4-proj', title: 'Flexbox & Grid Project' },
      { id: 'm4-quiz', title: 'Module Quiz' },
      { id: 'm4-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm5',
    title: 'MODULE 5: RESPONSIVE WEB DESIGN',
    items: [
      { id: 'm5-l1', title: 'Lesson 5.1 What is Responsive Design' },
      { id: 'm5-l2', title: 'Lesson 5.2 Mobile First Design' },
      { id: 'm5-l3', title: 'Lesson 5.3 Media Queries' },
      { id: 'm5-l4', title: 'Lesson 5.4 Responsive Navigation' },
      { id: 'm5-l5', title: 'Lesson 5.5 Responsive Images' },
      { id: 'm5-l6', title: 'Lesson 5.6 Responsive Layouts' },
      { id: 'm5-proj', title: 'Responsive Website Project' },
      { id: 'm5-quiz', title: 'Module Quiz' },
      { id: 'm5-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm6',
    title: 'MODULE 6: JAVASCRIPT FUNDAMENTALS',
    items: [
      { id: 'm6-l1', title: 'Lesson 6.1 Introduction to JavaScript' },
      { id: 'm6-l2', title: 'Lesson 6.2 Variables' },
      { id: 'm6-l3', title: 'Lesson 6.3 Data Types' },
      { id: 'm6-l4', title: 'Lesson 6.4 Operators' },
      { id: 'm6-l5', title: 'Lesson 6.5 Conditional Statements' },
      { id: 'm6-l6', title: 'Lesson 6.6 Loops' },
      { id: 'm6-l7', title: 'Lesson 6.7 Functions' },
      { id: 'm6-l8', title: 'Lesson 6.8 Arrays' },
      { id: 'm6-l9', title: 'Lesson 6.9 Objects' },
      { id: 'm6-l10', title: 'Lesson 6.10 Scope' },
      { id: 'm6-l11', title: 'Lesson 6.11 Hoisting' },
      { id: 'm6-proj', title: 'JavaScript Exercises' },
      { id: 'm6-quiz', title: 'Module Quiz' },
      { id: 'm6-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm7',
    title: 'MODULE 7: DOM MANIPULATION & EVENTS',
    items: [
      { id: 'm7-l1', title: 'Lesson 7.1 Introduction to DOM' },
      { id: 'm7-l2', title: 'Lesson 7.2 Selecting Elements' },
      { id: 'm7-l3', title: 'Lesson 7.3 Updating Elements' },
      { id: 'm7-l4', title: 'Lesson 7.4 Creating Elements' },
      { id: 'm7-l5', title: 'Lesson 7.5 Event Listeners' },
      { id: 'm7-l6', title: 'Lesson 7.6 Form Validation' },
      { id: 'm7-l7', title: 'Lesson 7.7 Local Storage' },
      { id: 'm7-l8', title: 'Lesson 7.8 Session Storage' },
      { id: 'm7-proj', title: 'Todo App Project' },
      { id: 'm7-quiz', title: 'Module Quiz' },
      { id: 'm7-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm8',
    title: 'MODULE 8: MODERN JAVASCRIPT (ES6+)',
    items: [
      { id: 'm8-l1', title: 'Lesson 8.1 let vs const' },
      { id: 'm8-l2', title: 'Lesson 8.2 Arrow Functions' },
      { id: 'm8-l3', title: 'Lesson 8.3 Template Literals' },
      { id: 'm8-l4', title: 'Lesson 8.4 Destructuring' },
      { id: 'm8-l5', title: 'Lesson 8.5 Spread Operator' },
      { id: 'm8-l6', title: 'Lesson 8.6 Rest Operator' },
      { id: 'm8-l7', title: 'Lesson 8.7 Default Parameters' },
      { id: 'm8-l8', title: 'Lesson 8.8 Modules' },
      { id: 'm8-l9', title: 'Lesson 8.9 Classes' },
      { id: 'm8-l10', title: 'Lesson 8.10 Object-Oriented JavaScript' },
      { id: 'm8-quiz', title: 'Module Quiz' },
      { id: 'm8-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm9',
    title: 'MODULE 9: ASYNCHRONOUS JAVASCRIPT',
    items: [
      { id: 'm9-l1', title: 'Lesson 9.1 Synchronous vs Asynchronous' },
      { id: 'm9-l2', title: 'Lesson 9.2 Callbacks' },
      { id: 'm9-l3', title: 'Lesson 9.3 Promises' },
      { id: 'm9-l4', title: 'Lesson 9.4 Async/Await' },
      { id: 'm9-l5', title: 'Lesson 9.5 Fetch API' },
      { id: 'm9-l6', title: 'Lesson 9.6 Error Handling' },
      { id: 'm9-l7', title: 'Lesson 9.7 API Integration' },
      { id: 'm9-proj', title: 'Weather App Project' },
      { id: 'm9-quiz', title: 'Module Quiz' },
      { id: 'm9-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm10',
    title: 'MODULE 10: GIT & GITHUB',
    items: [
      { id: 'm10-l1', title: 'Lesson 10.1 Introduction to Git' },
      { id: 'm10-l2', title: 'Lesson 10.2 Installing Git' },
      { id: 'm10-l3', title: 'Lesson 10.3 Git Commands' },
      { id: 'm10-l4', title: 'Lesson 10.4 Creating Repositories' },
      { id: 'm10-l5', title: 'Lesson 10.5 GitHub Basics' },
      { id: 'm10-l6', title: 'Lesson 10.6 Branching' },
      { id: 'm10-l7', title: 'Lesson 10.7 Merging' },
      { id: 'm10-l8', title: 'Lesson 10.8 Pull Requests' },
      { id: 'm10-quiz', title: 'Module Quiz' },
      { id: 'm10-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm11',
    title: 'MODULE 11: INTRODUCTION TO REACT',
    items: [
      { id: 'm11-l1', title: 'Lesson 11.1 What is React' },
      { id: 'm11-l2', title: 'Lesson 11.2 Installing React with Vite' },
      { id: 'm11-l3', title: 'Lesson 11.3 Project Structure' },
      { id: 'm11-l4', title: 'Lesson 11.4 JSX' },
      { id: 'm11-l5', title: 'Lesson 11.5 React Components' },
      { id: 'm11-l6', title: 'Lesson 11.6 Props' },
      { id: 'm11-l7', title: 'Lesson 11.7 Component Reusability' },
      { id: 'm11-proj', title: 'React Mini Project' },
      { id: 'm11-quiz', title: 'Module Quiz' },
      { id: 'm11-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm12',
    title: 'MODULE 12: REACT STATE MANAGEMENT',
    items: [
      { id: 'm12-l1', title: 'Lesson 12.1 State Introduction' },
      { id: 'm12-l2', title: 'Lesson 12.2 useState Hook' },
      { id: 'm12-l3', title: 'Lesson 12.3 Event Handling' },
      { id: 'm12-l4', title: 'Lesson 12.4 Forms in React' },
      { id: 'm12-l5', title: 'Lesson 12.5 Conditional Rendering' },
      { id: 'm12-l6', title: 'Lesson 12.6 Lists and Keys' },
      { id: 'm12-proj', title: 'Counter App Project' },
      { id: 'm12-quiz', title: 'Module Quiz' },
      { id: 'm12-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm13',
    title: 'MODULE 13: REACT HOOKS',
    items: [
      { id: 'm13-l1', title: 'Lesson 13.1 useEffect' },
      { id: 'm13-l2', title: 'Lesson 13.2 useRef' },
      { id: 'm13-l3', title: 'Lesson 13.3 useMemo' },
      { id: 'm13-l4', title: 'Lesson 13.4 useCallback' },
      { id: 'm13-l5', title: 'Lesson 13.5 Custom Hooks' },
      { id: 'm13-proj', title: 'Hooks Project' },
      { id: 'm13-quiz', title: 'Module Quiz' },
      { id: 'm13-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm14',
    title: 'MODULE 14: REACT ROUTER',
    items: [
      { id: 'm14-l1', title: 'Lesson 14.1 Routing Basics' },
      { id: 'm14-l2', title: 'Lesson 14.2 Browser Router' },
      { id: 'm14-l3', title: 'Lesson 14.3 Route Parameters' },
      { id: 'm14-l4', title: 'Lesson 14.4 Nested Routes' },
      { id: 'm14-l5', title: 'Lesson 14.5 Protected Routes' },
      { id: 'm14-proj', title: 'Routing Project' },
      { id: 'm14-quiz', title: 'Module Quiz' },
      { id: 'm14-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm15',
    title: 'MODULE 15: REACT API INTEGRATION',
    items: [
      { id: 'm15-l1', title: 'Lesson 15.1 Fetching Data' },
      { id: 'm15-l2', title: 'Lesson 15.2 Loading States' },
      { id: 'm15-l3', title: 'Lesson 15.3 Error States' },
      { id: 'm15-l4', title: 'Lesson 15.4 CRUD Operations' },
      { id: 'm15-l5', title: 'Lesson 15.5 Authentication UI' },
      { id: 'm15-proj', title: 'Movie App Project' },
      { id: 'm15-quiz', title: 'Module Quiz' },
      { id: 'm15-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm16',
    title: 'MODULE 16: ADVANCED REACT',
    items: [
      { id: 'm16-l1', title: 'Lesson 16.1 Context API' },
      { id: 'm16-l2', title: 'Lesson 16.2 Reducers' },
      { id: 'm16-l3', title: 'Lesson 16.3 Zustand Basics' },
      { id: 'm16-l4', title: 'Lesson 16.4 Redux Toolkit Basics' },
      { id: 'm16-l5', title: 'Lesson 16.5 Performance Optimization' },
      { id: 'm16-proj', title: 'Advanced Project' },
      { id: 'm16-quiz', title: 'Module Quiz' },
      { id: 'm16-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm17',
    title: 'MODULE 17: DEPLOYMENT & OPTIMIZATION',
    items: [
      { id: 'm17-l1', title: 'Lesson 17.1 Build Process' },
      { id: 'm17-l2', title: 'Lesson 17.2 Environment Variables' },
      { id: 'm17-l3', title: 'Lesson 17.3 Deploying on Vercel' },
      { id: 'm17-l4', title: 'Lesson 17.4 Deploying on Netlify' },
      { id: 'm17-l5', title: 'Lesson 17.5 Custom Domain Setup' },
      { id: 'm17-l6', title: 'Lesson 17.6 SEO Basics' },
      { id: 'm17-quiz', title: 'Module Quiz' },
      { id: 'm17-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'projects',
    title: 'MAJOR PROJECTS',
    items: [
      { id: 'proj-1', title: 'Project 1: Personal Portfolio Website' },
      { id: 'proj-2', title: 'Project 2: Responsive Landing Page' },
      { id: 'proj-3', title: 'Project 3: Calculator App' },
      { id: 'proj-4', title: 'Project 4: Todo App' },
      { id: 'proj-5', title: 'Project 5: Weather Application' },
      { id: 'proj-6', title: 'Project 6: Movie Search Application' },
      { id: 'proj-7', title: 'Project 7: E-Commerce Frontend' },
      { id: 'proj-8', title: 'Project 8: Admin Dashboard' },
      { id: 'proj-capstone', title: 'Final Capstone Project' },
    ],
  },
  {
    id: 'assessment',
    title: 'FINAL ASSESSMENT',
    items: [
      { id: 'test-theory', title: 'Theory Test' },
      { id: 'test-coding', title: 'Coding Test' },
      { id: 'test-eval', title: 'Project Evaluation' },
      { id: 'test-viva', title: 'Viva / Interview Questions' },
    ],
  },
];

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

  const handleBackToCourses = () => {
    navigate('/courses');
  };

  // ─── Navigation / Drawer States ───────────────────────────────────────────
  const [selectedItemId, setSelectedItemId] = useState<string>('overview-welcome');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    overview: true,
    m1: true,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // ─── Module 1 Textbook Progress & States ──────────────────────────────────
  const [m1Page, setM1Page] = useState<number>(1);
  const [websites, setWebsites] = useState<string[]>(['', '', '']);
  const [isWebsitesSaved, setIsWebsitesSaved] = useState<boolean>(false);
  const [sortItems, setSortItems] = useState<SortItem[]>([
    { id: '1', name: 'Portfolio Website', correctType: 'Static' },
    { id: '2', name: 'Instagram', correctType: 'Dynamic' },
    { id: '3', name: 'Amazon', correctType: 'Dynamic' },
    { id: '4', name: 'Restaurant Menu Website', correctType: 'Static' },
  ]);
  const [page3Answer, setPage3Answer] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'database'>('frontend');
  const [activeRoadmapNode, setActiveRoadmapNode] = useState<number>(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [checkedTools, setCheckedTools] = useState<Record<string, boolean>>({
    chrome: false,
    vscode: false,
    git: false,
    nodejs: false,
  });
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState<string>('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState<boolean>(false);

  // Read progress metrics
  const [maxPageRead, setMaxPageRead] = useState<number>(0);

  // When clicking items from sidebar
  const handleSelectSidebarItem = (itemId: string) => {
    setSelectedItemId(itemId);
    setIsMobileMenuOpen(false);

    // If selecting Module 1 item, auto-map it to corresponding page
    if (itemId.startsWith('m1-')) {
      if (itemId === 'm1-quiz') {
        setM1Page(9);
      } else if (itemId === 'm1-assignment') {
        setM1Page(10);
      } else {
        const pageNum = parseInt(itemId.replace('m1-l', ''), 10);
        if (!isNaN(pageNum)) setM1Page(pageNum);
      }
    }
  };

  // Track max page read to calculate progress
  useEffect(() => {
    if (selectedItemId.startsWith('m1-')) {
      let currentVal = m1Page;
      if (currentVal > maxPageRead) setMaxPageRead(currentVal);
    } else if (selectedItemId.startsWith('overview-')) {
      if (maxPageRead === 0) setMaxPageRead(0.5); // Just overview started
    }
  }, [m1Page, selectedItemId]);

  const progressPercent = Math.round((maxPageRead / 10) * 100);

  const toggleModuleExpanded = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }));
  };

  // ─── Module 1 Quiz questions data ──────────────────────────────────────────
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

  // ─── Module 1 Actions ──────────────────────────────────────────────────────
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

  // ─── Content Render Engine ─────────────────────────────────────────────────
  const renderMainContent = () => {
    const isOverview = selectedItemId.startsWith('overview-');
    const isModule1 = selectedItemId.startsWith('m1-');

    // Case 1: Course Overview content
    if (isOverview) {
      switch (selectedItemId) {
        case 'overview-welcome':
          return (
            <div className={styles.tabContent}>
              <h2 className={styles.cardTitle}>Welcome to Frontend Development Mastery!</h2>
              <p className={styles.paragraph}>
                Welcome student! You are about to embark on an intensive journey to master professional frontend software engineering. This course has been structured to guide you from absolute web basics up to deploying advanced React single-page applications.
              </p>
              <p className={styles.paragraph}>
                Each module includes high-fidelity explanations, visual workflow diagrams, coding practice sets, quizzes, and projects to evaluate your progress.
              </p>
              <h3 className={styles.subtitle}>Let's Hustle!</h3>
              <p className={styles.paragraph}>
                Select <strong>Course Introduction Video</strong> or expand <strong>Module 1</strong> in the syllabus navigator to start your learning!
              </p>
            </div>
          );

        case 'overview-video':
          return (
            <div className={styles.tabContent}>
              <h2 className={styles.cardTitle}>Course Introduction</h2>
              <p className={styles.paragraph}>
                Watch this brief intro video to align on what we'll build, how to ask questions, and how to set up your learning routine:
              </p>
              <div className={styles.videoContainer}>
                <div className={styles.videoMock}>
                  <button className={styles.videoPlayBtn} aria-label="Play video">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </button>
                  <span className={styles.videoTitle}>Skillofied Intro Video - Playback (03:15)</span>
                </div>
              </div>
            </div>
          );

        case 'overview-outcomes':
          return (
            <div className={styles.tabContent}>
              <h2 className={styles.cardTitle}>Learning Outcomes</h2>
              <p className={styles.paragraph}>
                By the end of this comprehensive specialization, you will be fully qualified to:
              </p>
              <div className={styles.outcomesGrid}>
                <div className={styles.outcomeCard}>
                  <span className={styles.outcomeCheck}>✓</span>
                  <p className={styles.outcomeText}>Build completely responsive, mobile-first websites using modern HTML/CSS paradigms.</p>
                </div>
                <div className={styles.outcomeCard}>
                  <span className={styles.outcomeCheck}>✓</span>
                  <p className={styles.outcomeText}>Understand programming fundamentals in ES6+ JavaScript, DOM manipulation, asynchronous fetching, and client stores.</p>
                </div>
                <div className={styles.outcomeCard}>
                  <span className={styles.outcomeCheck}>✓</span>
                  <p className={styles.outcomeText}>Build highly performant component-based web apps with React, Vite, state managers, and React Router.</p>
                </div>
                <div className={styles.outcomeCard}>
                  <span className={styles.outcomeCheck}>✓</span>
                  <p className={styles.outcomeText}>Configure developer pipelines with Git/GitHub, deploy portfolios to cloud services, and align with SEO checklists.</p>
                </div>
              </div>
            </div>
          );

        case 'overview-roadmap':
          return (
            <div className={styles.tabContent}>
              <h2 className={styles.cardTitle}>Course Roadmap</h2>
              <p className={styles.paragraph}>
                Here is your learning trajectory across the course modules:
              </p>
              <div className={styles.stepsContainer}>
                <div className={styles.stepBlock}>
                  <span className={styles.stepNum}>A</span>
                  <p className={styles.stepText}><strong>Basics (Modules 1-5)</strong>: Web flow, HTML, CSS, Flexbox/Grid, and responsive layout styling.</p>
                </div>
                <div className={styles.stepBlock}>
                  <span className={styles.stepNum}>B</span>
                  <p className={styles.stepText}><strong>JavaScript (Modules 6-9)</strong>: Code logic, loops, DOM events, promises, async/await, and REST APIs.</p>
                </div>
                <div className={styles.stepBlock}>
                  <span className={styles.stepNum}>C</span>
                  <p className={styles.stepText}><strong>Git (Module 10)</strong>: Git command lines, merging, pull requests, and code version control.</p>
                </div>
                <div className={styles.stepBlock}>
                  <span className={styles.stepNum}>D</span>
                  <p className={styles.stepText}><strong>React (Modules 11-16)</strong>: Props/states, Hooks (useEffect, useMemo), routing, CRUD fetching, Context, and Redux.</p>
                </div>
                <div className={styles.stepBlock}>
                  <span className={styles.stepNum}>E</span>
                  <p className={styles.stepText}><strong>Capstone (Module 17 + Projects)</strong>: Cloud optimization, builds deployment, SEO, and major projects evaluations.</p>
                </div>
              </div>
            </div>
          );

        case 'overview-prereqs':
          return (
            <div className={styles.tabContent}>
              <h2 className={styles.cardTitle}>Prerequisites</h2>
              <p className={styles.paragraph}>
                No prior coding experience is required! This course starts from absolute ground zero. You only need:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                <li>A desktop computer or laptop (Windows, Mac, or Linux).</li>
                <li>A stable internet connection to load resources and watch lessons.</li>
                <li>Basic computer literacy (creating directories, downloading files, using browsers).</li>
                <li>Patience, commitment, and a growth mindset!</li>
              </ul>
            </div>
          );

        case 'overview-resources':
          return (
            <div className={styles.tabContent}>
              <h2 className={styles.cardTitle}>Course Resources</h2>
              <p className={styles.paragraph}>
                Here are several recommended references to accompany your learning pathway:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                <li><strong>MDN Web Docs</strong>: The ultimate reference documentation for HTML, CSS, and JS.</li>
                <li><strong>React Official Documentation</strong>: Reference guides for modern functional hooks.</li>
                <li><strong>W3Schools CSS Flexbox/Grid</strong>: Visual sandboxes to learn layouts.</li>
                <li><strong>Skillofied Discord Guild</strong>: Chat with mentors and submit queries to coding channels.</li>
              </ul>
            </div>
          );

        default:
          return null;
      }
    }

    // Case 2: Module 1 interactive slide content
    if (isModule1) {
      switch (m1Page) {
        case 1:
          return (
            <div className={styles.tabContent}>
              <h2 className={styles.cardTitle}>Lesson 1.1: Welcome to Web Development</h2>
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
              <h2 className={styles.cardTitle}>Lesson 1.2: What is Web Development?</h2>
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
              <h2 className={styles.cardTitle}>Lesson 1.3: How Does a Website Work?</h2>
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
              <h2 className={styles.cardTitle}>Lesson 1.4: Frontend vs Backend vs Database</h2>
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
            </div>
          );

        case 5:
          return (
            <div className={styles.tabContent}>
              <h2 className={styles.cardTitle}>Lesson 1.5: Frontend Development Roadmap</h2>
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
              <h2 className={styles.cardTitle}>Lesson 1.6: Types of Websites</h2>
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
              <h2 className={styles.cardTitle}>Lesson 1.7: Tools Every Frontend Developer Needs</h2>
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
              <h2 className={styles.cardTitle}>Lesson 1.8: Career Opportunities</h2>
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
              <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
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
    }

    // Case 3: Other modules - locked syllabus preview cards
    const currentModule = SYLLABUS.find((m) => selectedItemId.startsWith(m.id));
    const currentLesson = currentModule?.items.find((item) => item.id === selectedItemId);

    if (currentModule) {
      return (
        <div className={`${styles.tabContent} ${styles.lockedCard}`}>
          <div className={styles.lockedIconWrapper}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h2 className={styles.lockTitle}>{currentLesson?.title || currentModule.title}</h2>
          <p className={styles.lockDesc}>
            This section is currently locked. Complete all previous lessons, quizzes, and assignments in <strong>Module 1: Introduction to Web Development</strong> to unlock this module!
          </p>

          <div className={styles.lockedModulePreview}>
            <h4 className={styles.lockedPreviewTitle}>📋 Module Syllabus Preview:</h4>
            <ul className={styles.lockedPreviewList}>
              {currentModule.items.map((item) => (
                <li key={item.id} style={{ opacity: item.id === selectedItemId ? 1 : 0.6, fontWeight: item.id === selectedItemId ? 700 : 500 }}>
                  {item.title} {item.id === selectedItemId ? ' (Previewing)' : ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    return null;
  };

  // ─── Study Area Navigation actions ─────────────────────────────────────────
  const handlePageNext = () => {
    // If selected is in overview, go to next overview page, or transition to module 1
    if (selectedItemId.startsWith('overview-')) {
      const idx = SYLLABUS[0].items.findIndex((item) => item.id === selectedItemId);
      if (idx !== -1 && idx < SYLLABUS[0].items.length - 1) {
        handleSelectSidebarItem(SYLLABUS[0].items[idx + 1].id);
      } else {
        handleSelectSidebarItem('m1-l1'); // transition to module 1
      }
    }
    // If selected is in module 1
    else if (selectedItemId.startsWith('m1-')) {
      if (m1Page < 10) {
        setM1Page((prev) => prev + 1);
        // Sync sidebar active selection
        const nextId = m1Page === 8 ? 'm1-quiz' : m1Page === 9 ? 'm1-assignment' : `m1-l${m1Page + 1}`;
        setSelectedItemId(nextId);
      } else {
        handleSelectSidebarItem('m2-l1'); // transition to module 2 (preview)
      }
    }
    // If selected is in other modules
    else {
      // Find current module index
      const modIdx = SYLLABUS.findIndex((m) => selectedItemId.startsWith(m.id));
      if (modIdx !== -1) {
        const itemIdx = SYLLABUS[modIdx].items.findIndex((item) => item.id === selectedItemId);
        if (itemIdx !== -1 && itemIdx < SYLLABUS[modIdx].items.length - 1) {
          handleSelectSidebarItem(SYLLABUS[modIdx].items[itemIdx + 1].id);
        } else if (modIdx < SYLLABUS.length - 1) {
          handleSelectSidebarItem(SYLLABUS[modIdx + 1].items[0].id); // transition to next module
        }
      }
    }
  };

  const handlePagePrev = () => {
    // If selected is in overview
    if (selectedItemId.startsWith('overview-')) {
      const idx = SYLLABUS[0].items.findIndex((item) => item.id === selectedItemId);
      if (idx > 0) {
        handleSelectSidebarItem(SYLLABUS[0].items[idx - 1].id);
      }
    }
    // If selected is in module 1
    else if (selectedItemId.startsWith('m1-')) {
      if (m1Page > 1) {
        setM1Page((prev) => prev - 1);
        const prevId = `m1-l${m1Page - 1}`;
        setSelectedItemId(prevId);
      } else {
        handleSelectSidebarItem('overview-resources'); // go back to overview
      }
    }
    // If selected is in other modules
    else {
      const modIdx = SYLLABUS.findIndex((m) => selectedItemId.startsWith(m.id));
      if (modIdx !== -1) {
        const itemIdx = SYLLABUS[modIdx].items.findIndex((item) => item.id === selectedItemId);
        if (itemIdx > 0) {
          handleSelectSidebarItem(SYLLABUS[modIdx].items[itemIdx - 1].id);
        } else if (modIdx > 0) {
          // Go to last item of previous module
          const prevMod = SYLLABUS[modIdx - 1];
          handleSelectSidebarItem(prevMod.items[prevMod.items.length - 1].id);
        }
      }
    }
  };

  return (
    <div className={styles.appLayout}>
      {/* Mobile Sidebar Overlay Mask */}
      <div 
        className={`${styles.sidebarOverlay} ${isMobileMenuOpen ? styles.sidebarOverlayVisible : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Left Sidebar Panel (Syllabus tree) */}
      <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Syllabus Navigator</h2>
          <p className={styles.sidebarSubtitle}>Frontend Mastery</p>
        </div>

        <nav className={styles.syllabusList}>
          {SYLLABUS.map((mod) => {
            const isExpanded = !!expandedModules[mod.id];
            const isActive = selectedItemId.startsWith(mod.id);
            return (
              <div key={mod.id} className={styles.moduleBlock}>
                <button
                  className={`${styles.moduleHeader} ${isActive ? styles.moduleHeaderActive : ''}`}
                  onClick={() => toggleModuleExpanded(mod.id)}
                >
                  <span style={{ flex: 1 }}>{mod.title}</span>
                  <span className={`${styles.moduleArrow} ${isExpanded ? styles.moduleArrowExpanded : ''}`}>▶</span>
                </button>

                {isExpanded && (
                  <div className={styles.moduleItemsList}>
                    {mod.items.map((item) => {
                      const isItemActive = selectedItemId === item.id;
                      return (
                        <button
                          key={item.id}
                          className={`${styles.moduleItemLink} ${isItemActive ? styles.moduleItemLinkActive : ''}`}
                          onClick={() => handleSelectSidebarItem(item.id)}
                          title={item.title}
                        >
                          {item.title}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Right Main Study Area */}
      <main className={styles.mainArea}>
        {/* Mobile Bar containing Hamburger menu */}
        <div className={styles.mobileBar}>
          <button 
            className={styles.menuToggleBtn} 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open syllabus menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)' }}>Syllabus Menu</span>
        </div>

        <div className={styles.container}>
          {/* Top Header */}
          <div className={styles.header}>
            <button className={styles.backBtn} onClick={handleBackToCourses}>
              ← Back to Dashboard
            </button>
            <div className={styles.headerTitleBlock}>
              <h1 className={styles.moduleTitle}>Frontend Development Mastery</h1>
              <p className={styles.courseName}>Instructor-Led Course Syllabus</p>
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

          {/* Main Card study screen */}
          <div className={styles.card}>
            {renderMainContent()}
          </div>

          {/* Navigation Buttons */}
          <div className={styles.footer}>
            <button
              className={styles.navBtn}
              onClick={handlePagePrev}
              disabled={selectedItemId === 'overview-welcome'}
            >
              ← Previous Lesson
            </button>
            <button
              className={`${styles.navBtn} ${selectedItemId === 'test-viva' ? styles.navBtnActive : ''}`}
              onClick={selectedItemId === 'test-viva' ? handleBackToCourses : handlePageNext}
            >
              {selectedItemId === 'test-viva' ? 'Finish Course' : 'Next Lesson →'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FrontendCoursePage;
