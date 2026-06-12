import React, { useState, useMemo } from 'react';
import {
  useJSearchJobs,
  formatPostedAgo,
  formatSalary,
  normaliseType,
  type JSearchJob,
} from '../../hooks/useJSearchJobs';
import styles from './PlacementSection.module.css';

const TYPE_FILTERS = ['All', 'Full-time', 'Internship', 'Remote', 'Contract'];

const SEARCH_PRESETS = [
  'Software Engineer',
  'Frontend Developer',
  'Data Scientist',
  'Backend Developer',
  'DevOps Engineer',
  'UI UX Designer',
];

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  'Full-time':  { bg: 'rgba(86,103,233,0.12)',  text: '#5667e9' },
  'Internship': { bg: 'rgba(16,185,129,0.12)',   text: '#10b981' },
  'Part-time':  { bg: 'rgba(245,158,11,0.12)',   text: '#f59e0b' },
  'Remote':     { bg: 'rgba(139,92,246,0.12)',   text: '#8b5cf6' },
  'Contract':   { bg: 'rgba(239,68,68,0.12)',    text: '#ef4444' },
};

const LOGO_COLORS = [
  '#4285F4','#00A4EF','#F74F00','#FF9900','#FC8019',
  '#2D6BE4','#E91E63','#009688','#9C27B0','#FF5722',
];

function logoColor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return LOGO_COLORS[Math.abs(h) % LOGO_COLORS.length];
}

const SkeletonCard: React.FC = () => (
  <div className={styles.card} aria-busy="true">
    <div className={styles.skeletonHeader}>
      <div className={`${styles.skeleton} ${styles.skeletonLogo}`} />
      <div className={styles.skeletonInfo}>
        <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
        <div className={`${styles.skeleton} ${styles.skeletonSub}`} />
      </div>
    </div>
    <div className={`${styles.skeleton} ${styles.skeletonLine}`} />
    <div className={`${styles.skeleton} ${styles.skeletonLine}`} style={{ width: '60%' }} />
    <div className={styles.skeletonTags}>
      {[1,2,3].map(i => <div key={i} className={`${styles.skeleton} ${styles.skeletonTag}`} />)}
    </div>
    <div className={`${styles.skeleton} ${styles.skeletonBtn}`} />
  </div>
);

const JobCard: React.FC<{ job: JSearchJob }> = ({ job }) => {
  const [saved, setSaved] = useState(false);
  const type = normaliseType(job.job_employment_type, job.job_is_remote);
  const typeStyle = TYPE_COLORS[type] ?? TYPE_COLORS['Full-time'];
  const salary = formatSalary(job.job_min_salary, job.job_max_salary, job.job_salary_currency, job.job_salary_period);
  const postedAgo = formatPostedAgo(job.job_posted_at_datetime_utc);
  const location = [job.job_city, job.job_country].filter(Boolean).join(', ');
  const skills = (job.job_required_skills ?? job.job_highlights?.Qualifications ?? []).slice(0, 3);
  const initial = job.employer_name?.charAt(0)?.toUpperCase() ?? '?';
  const color = logoColor(job.employer_name ?? '');
  const isNew = Date.now() - new Date(job.job_posted_at_datetime_utc).getTime() < 24 * 60 * 60 * 1000;

  return (
    <div className={styles.card}>
      {isNew && <span className={styles.newBadge}>New</span>}
      <div className={styles.cardHeader}>
        <div className={styles.companyLogo} style={{ background: `${color}18`, color }}>
          {job.employer_logo
            ? <img src={job.employer_logo} alt={job.employer_name} className={styles.logoImg} />
            : initial}
        </div>
        <div className={styles.headerInfo}>
          <h3 className={styles.jobTitle} title={job.job_title}>{job.job_title}</h3>
          <p className={styles.companyName}>{job.employer_name}</p>
        </div>
        <button
          className={`${styles.saveBtn} ${saved ? styles.saveBtnActive : ''}`}
          onClick={() => setSaved(s => !s)}
          aria-label={saved ? 'Unsave' : 'Save'}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      <div className={styles.metaRow}>
        {location && (
          <div className={styles.metaItem}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>{location}</span>
          </div>
        )}
        <div className={styles.metaItem}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          <span>{salary}</span>
        </div>
      </div>

      {skills.length > 0 && (
        <div className={styles.skillsRow}>
          {skills.map((s, i) => (
            <span key={i} className={styles.skillTag}>{s.length > 28 ? s.slice(0, 26) + '…' : s}</span>
          ))}
        </div>
      )}

      <div className={styles.cardFooter}>
        <div className={styles.footerLeft}>
          <span className={styles.typeBadge} style={{ background: typeStyle.bg, color: typeStyle.text }}>{type}</span>
        </div>
        <div className={styles.footerRight}>
          <span className={styles.postedTime}>{postedAgo}</span>
        </div>
      </div>

      <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer" className={styles.applyBtn}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Apply Now
      </a>
    </div>
  );
};

const PlacementSection: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [activeQuery, setActiveQuery] = useState('Software Engineer India');
  const [activeFilter, setActiveFilter] = useState('All');

  const handleSearch = () => {
    if (searchInput.trim()) setActiveQuery(searchInput.trim() + ' India');
  };

  const { jobs, loading, error, refetch } = useJSearchJobs({ query: activeQuery, numPages: 2, country: 'in' });

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return jobs;
    return jobs.filter(j => normaliseType(j.job_employment_type, j.job_is_remote) === activeFilter);
  }, [jobs, activeFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <div className={styles.headerText}>
          <h1 className={styles.heading}>Job Openings</h1>
          <p className={styles.subheading}>Real-time opportunities powered by JSearch</p>
        </div>
        <button className={styles.liveIndicator} onClick={refetch} title="Refresh">
          <span className={`${styles.liveDot} ${loading ? styles.liveDotLoading : ''}`} />
          {loading ? 'Loading…' : 'Live'}
        </button>
      </div>

      <div className={styles.searchBar}>
        <svg className={styles.searchIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search by role, e.g. Data Scientist…"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
        />
        <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
      </div>

      <div className={styles.presetRow}>
        {SEARCH_PRESETS.map(p => (
          <button
            key={p}
            className={`${styles.presetPill} ${activeQuery.startsWith(p) ? styles.presetPillActive : ''}`}
            onClick={() => { setActiveQuery(p + ' India'); setSearchInput(p); }}
          >
            {p}
          </button>
        ))}
      </div>

      <div className={styles.filterRow}>
        {TYPE_FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filterPill} ${activeFilter === f ? styles.filterPillActive : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
        {!loading && <span className={styles.resultCount}>{filtered.length} jobs found</span>}
      </div>

      {error && (
        <div className={styles.errorState}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p>{error}</p>
          <button className={styles.retryBtn} onClick={refetch}>Try Again</button>
        </div>
      )}

      {!error && loading && (
        <div className={styles.grid}>
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {!error && !loading && filtered.length > 0 && (
        <div className={styles.grid}>
          {filtered.map(job => <JobCard key={job.job_id} job={job} />)}
        </div>
      )}

      {!error && !loading && filtered.length === 0 && (
        <div className={styles.emptyState}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <p>No jobs found. Try another filter or role.</p>
        </div>
      )}
    </div>
  );
};

export default PlacementSection;
