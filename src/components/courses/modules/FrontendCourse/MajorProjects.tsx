import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const MajorProjects: React.FC<Props> = ({ page }) => {
  const [gitUrl, setGitUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});

  const projects = [
    {
      id: 1,
      title: 'Project 1: Personal Portfolio Website',
      diff: 'Easy (4-6 Hours)',
      stack: 'HTML5, CSS3, Semantic layout elements',
      desc: 'Build a multi-page personal portfolio website to showcase your background, skills, and coding accomplishments.',
      reqs: [
        'Semantic HTML layout structure (<header>, <main>, <section>, <footer>)',
        'About Me section detailing profile and skills',
        'Projects grid displaying mockup links',
        'Contact form with email and message fields',
        'Responsive layout styling adjusting to mobile widths'
      ]
    },
    {
      id: 2,
      title: 'Project 2: Responsive Landing Page',
      diff: 'Easy (5-7 Hours)',
      stack: 'HTML5, CSS3, Flexbox, Media Queries',
      desc: 'Create a fully responsive product landing page incorporating navigation, call-to-actions, features, and email newsletters opt-ins.',
      reqs: [
        'Responsive navigation header with logo',
        'Hero section containing call-to-action buttons',
        'Product features section with icons and text blocks',
        'Email subscription form with input validation',
        'Mobile-first responsive styling'
      ]
    },
    {
      id: 3,
      title: 'Project 3: Calculator App',
      diff: 'Medium (6-8 Hours)',
      stack: 'HTML5, CSS3, JavaScript (DOM manipulation)',
      desc: 'Build a fully functional mathematical calculator capable of performing standard operations (addition, subtraction, multiplication, division).',
      reqs: [
        'Interactive button grid matching standard layouts',
        'Display screen mapping input values dynamically',
        'Support operations sequence calculation',
        'Clear (C) and delete (backspace) buttons logic',
        'Edge case protection (e.g. dividing by zero)'
      ]
    },
    {
      id: 4,
      title: 'Project 4: Todo App',
      diff: 'Medium (7-9 Hours)',
      stack: 'HTML5, CSS3, JavaScript (DOM + Web Storage)',
      desc: 'Create an interactive task manager todo application featuring persistent storage using LocalStorage.',
      reqs: [
        'Add new items using form input inputs',
        'Mark tasks as completed (strikes out item)',
        'Delete tasks from the lists',
        'Persist task state across browser refreshes using LocalStorage',
        'Filter list items (All, Active, Completed)'
      ]
    },
    {
      id: 5,
      title: 'Project 5: Weather Application',
      diff: 'Medium (8-10 Hours)',
      stack: 'HTML5, CSS3, JavaScript (Fetch API + async/await)',
      desc: 'Develop a weather dashboard that consumes live weather API data to fetch and render weather details dynamically.',
      reqs: [
        'City search input bar with search buttons',
        'Fetch and parse data from external API endpoints (e.g. OpenWeatherMap)',
        'Render temperature, humidity, wind speeds, and icon parameters',
        'Loading states and error handling validations for invalid city queries',
        'Dynamic background styling changing based on weather parameters (e.g. rain vs sun)'
      ]
    },
    {
      id: 6,
      title: 'Project 6: Movie Search Application',
      diff: 'Medium (8-11 Hours)',
      stack: 'React, Vite, CSS Modules, Fetch API',
      desc: 'Build a single page React application querying movie databases, displaying results, and adding movie selections to favorites list.',
      reqs: [
        'Dynamic search inputs displaying list updates on typing (debounce optional)',
        'Render movie results grid (poster, title, release year)',
        'Modal popup displaying additional description parameters on card clicks',
        'Toggle favorite state (persisted locally)',
        'Fully responsive grid layout'
      ]
    },
    {
      id: 7,
      title: 'Project 7: E-Commerce Frontend',
      diff: 'Hard (12-16 Hours)',
      stack: 'React, React Router, CSS Modules, State Hooks',
      desc: 'Create a multi-view e-commerce shopping client incorporating catalogs, filters, detailed page views, and shopping cart operations.',
      reqs: [
        'Home view product catalog with categories filtering',
        'Detailed product view matching dynamic routes',
        'Add/remove and update quantity cart items state',
        'Cart drawer panel calculating total pricing parameters',
        'Mock checkout confirmation view'
      ]
    },
    {
      id: 8,
      title: 'Project 8: Admin Dashboard',
      diff: 'Hard (14-18 Hours)',
      stack: 'React, Context API, Tailwind/CSS modules, Charts (optional)',
      desc: 'Develop an intensive administrative panel dashboard tracking metrics, orders, user settings, and theme configurations.',
      reqs: [
        'Sidebar navigation routing to sub-sections',
        'Overview panels displaying statistics widgets',
        'Data tables list supporting paging and filtering overrides',
        'Theme configuration provider Context (Dark/Light modes toggle)',
        'Responsive layout scaling down to navigation menus drawer'
      ]
    },
    {
      id: 9,
      title: 'Final Capstone Project',
      diff: 'Expert (20-30 Hours)',
      stack: 'React, React Router, Redux/Zustand, API integrations, Tailwind/CSS',
      desc: 'Design and deploy a production-grade custom web application of your choice, satisfying full client CRUD workflows, routing, and deployment configurations.',
      reqs: [
        'Comprehensive original application concept (e.g. Social, Task Board, Blog manager)',
        'Complex state management using Redux Toolkit or Zustand',
        'Secure authorization pipelines using remote database APIs',
        'Fully optimized performance scores (Code-splitting, optimized images)',
        'Production build deployed to Vercel/Netlify with custom domain mapping'
      ]
    }
  ];

  const currentProject = projects.find(p => p.id === page);

  const handleSubmitProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (gitUrl.trim() && liveUrl.trim()) {
      setSubmitted(p => ({ ...p, [page]: true }));
      setGitUrl('');
      setLiveUrl('');
    }
  };

  if (!currentProject) return null;

  return (
    <div className={styles.tabContent}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        <div>
          <h2 className={styles.cardTitle}>{currentProject.title}</h2>
          <span style={{ fontSize: '12px', background: 'var(--bg-surface-2)', padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--border)', marginRight: '8px' }}>
            Difficulty: <strong>{currentProject.diff}</strong>
          </span>
          <span style={{ fontSize: '12px', background: 'var(--bg-surface-2)', padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--border)' }}>
            Stack: <strong>{currentProject.stack}</strong>
          </span>
        </div>
      </div>

      <p className={styles.paragraph}>{currentProject.desc}</p>

      <h3 className={styles.subtitle}>Project Requirements & Deliverables</h3>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
        {currentProject.reqs.map((req, idx) => (
          <li key={idx} style={{ listStyleType: 'square' }}>{req}</li>
        ))}
      </ul>

      <div style={{ background: 'var(--bg-surface-2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
        <h4 style={{ margin: '0 0 12px 0' }}>📤 Project Submission</h4>
        
        {submitted[page] ? (
          <div className={styles.completeBadge} style={{ margin: 0 }}>
            <span>✓ Project submitted successfully! A mentor will review your codebase links shortly. 🎉</span>
          </div>
        ) : (
          <form onSubmit={handleSubmitProject} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>GitHub Repository URL:</label>
              <input className={styles.inputField} type="url" placeholder="https://github.com/username/project" value={gitUrl} onChange={e => setGitUrl(e.target.value)} required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Live Deployment URL:</label>
              <input className={styles.inputField} type="url" placeholder="https://project.vercel.app" value={liveUrl} onChange={e => setLiveUrl(e.target.value)} required />
            </div>
            <button className={styles.saveBtn} style={{ alignSelf: 'flex-start', marginTop: '4px' }} type="submit">
              Submit Project Links
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MajorProjects;
