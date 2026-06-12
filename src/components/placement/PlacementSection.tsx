import React, { useState } from 'react';
import styles from './PlacementSection.module.css';

interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Part-time' | 'Remote';
  salary: string;
  postedAgo: string;
  skills: string[];
  applicants: number;
  isNew: boolean;
  isEasyApply: boolean;
  companyColor: string;
}

const JOBS: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Google',
    companyLogo: 'G',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹18–28 LPA',
    postedAgo: '2h ago',
    skills: ['React', 'TypeScript', 'Node.js'],
    applicants: 142,
    isNew: true,
    isEasyApply: true,
    companyColor: '#4285F4',
  },
  {
    id: 2,
    title: 'Software Engineer Intern',
    company: 'Microsoft',
    companyLogo: 'M',
    location: 'Hyderabad, India · Remote',
    type: 'Internship',
    salary: '₹60K/month',
    postedAgo: '5h ago',
    skills: ['Python', 'Azure', 'REST APIs'],
    applicants: 87,
    isNew: true,
    isEasyApply: true,
    companyColor: '#00A4EF',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'Flipkart',
    companyLogo: 'F',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹15–22 LPA',
    postedAgo: '1d ago',
    skills: ['Java', 'Spring Boot', 'Kafka'],
    applicants: 214,
    isNew: false,
    isEasyApply: false,
    companyColor: '#F74F00',
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'Amazon',
    companyLogo: 'A',
    location: 'Remote',
    type: 'Remote',
    salary: '₹20–35 LPA',
    postedAgo: '3h ago',
    skills: ['Python', 'ML', 'SQL'],
    applicants: 320,
    isNew: true,
    isEasyApply: true,
    companyColor: '#FF9900',
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    company: 'Swiggy',
    companyLogo: 'S',
    location: 'Mumbai, India',
    type: 'Full-time',
    salary: '₹12–18 LPA',
    postedAgo: '6h ago',
    skills: ['Figma', 'Prototyping', 'Design Systems'],
    applicants: 95,
    isNew: true,
    isEasyApply: false,
    companyColor: '#FC8019',
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'Razorpay',
    companyLogo: 'R',
    location: 'Bangalore, India · Hybrid',
    type: 'Full-time',
    salary: '₹16–24 LPA',
    postedAgo: '12h ago',
    skills: ['Kubernetes', 'Docker', 'CI/CD'],
    applicants: 63,
    isNew: false,
    isEasyApply: true,
    companyColor: '#2D6BE4',
  },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  'Full-time': { bg: 'rgba(86, 103, 233, 0.12)', text: '#5667e9' },
  'Internship': { bg: 'rgba(16, 185, 129, 0.12)', text: '#10b981' },
  'Part-time': { bg: 'rgba(245, 158, 11, 0.12)', text: '#f59e0b' },
  'Remote': { bg: 'rgba(139, 92, 246, 0.12)', text: '#8b5cf6' },
};

const FILTERS = ['All', 'Full-time', 'Internship', 'Remote'];

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);
  const typeStyle = typeColors[job.type];

  return (
    <div className={styles.card}>
      {/* New badge */}
      {job.isNew && <span className={styles.newBadge}>New</span>}

      {/* Header */}
      <div className={styles.cardHeader}>
        <div
          className={styles.companyLogo}
          style={{ background: `${job.companyColor}18`, color: job.companyColor }}
        >
          {job.companyLogo}
        </div>
        <div className={styles.headerInfo}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <p className={styles.companyName}>{job.company}</p>
        </div>
        <button
          className={`${styles.saveBtn} ${saved ? styles.saveBtnActive : ''}`}
          onClick={() => setSaved(s => !s)}
          aria-label={saved ? 'Unsave job' : 'Save job'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      {/* Meta info */}
      <div className={styles.metaRow}>
        <div className={styles.metaItem}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span>{job.location}</span>
        </div>
        <div className={styles.metaItem}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span>{job.salary}</span>
        </div>
      </div>

      {/* Skills */}
      <div className={styles.skillsRow}>
        {job.skills.map(skill => (
          <span key={skill} className={styles.skillTag}>{skill}</span>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.cardFooter}>
        <div className={styles.footerLeft}>
          <span className={styles.typeBadge} style={{ background: typeStyle.bg, color: typeStyle.text }}>
            {job.type}
          </span>
          {job.isEasyApply && (
            <span className={styles.easyApply}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              Easy Apply
            </span>
          )}
        </div>
        <div className={styles.footerRight}>
          <span className={styles.postedTime}>{job.postedAgo}</span>
          <span className={styles.applicantCount}>{job.applicants} applicants</span>
        </div>
      </div>

      {/* Apply Button */}
      <button
        className={`${styles.applyBtn} ${applied ? styles.applyBtnApplied : ''}`}
        onClick={() => setApplied(a => !a)}
      >
        {applied ? (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Applied
          </>
        ) : (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Apply Now
          </>
        )}
      </button>
    </div>
  );
};

const PlacementSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = JOBS.filter(job => {
    const matchFilter = activeFilter === 'All' || job.type === activeFilter;
    const matchSearch =
      searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchFilter && matchSearch;
  });

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerText}>
          <h1 className={styles.heading}>Job Openings</h1>
          <p className={styles.subheading}>Explore curated opportunities matched to your skills</p>
        </div>
        <div className={styles.liveIndicator}>
          <span className={styles.liveDot} />
          Live
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <svg className={styles.searchIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search by role, company, or skill…"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Pills */}
      <div className={styles.filterRow}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filterPill} ${activeFilter === f ? styles.filterPillActive : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
        <span className={styles.resultCount}>{filtered.length} jobs found</span>
      </div>

      {/* Cards Grid */}
      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <p>No jobs found for "<strong>{searchQuery}</strong>"</p>
        </div>
      )}
    </div>
  );
};

export default PlacementSection;
