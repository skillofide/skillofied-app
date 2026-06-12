import { useState, useEffect, useCallback, useRef } from 'react';

// ── Types ───────────────────────────────────────────────────────────────────────

export interface JSearchJob {
  job_id: string;
  job_title: string;
  employer_name: string;
  employer_logo: string | null;
  employer_website: string | null;
  job_employment_type: string; // FULLTIME, PARTTIME, CONTRACTOR, INTERN
  job_city: string | null;
  job_country: string;
  job_is_remote: boolean;
  job_posted_at_datetime_utc: string;
  job_apply_link: string;
  job_description: string;
  job_min_salary: number | null;
  job_max_salary: number | null;
  job_salary_currency: string | null;
  job_salary_period: string | null;
  job_highlights?: {
    Qualifications?: string[];
    Responsibilities?: string[];
    Benefits?: string[];
  };
  job_required_skills: string[] | null;
}

export interface UseJSearchJobsOptions {
  query: string;
  page?: number;
  numPages?: number;
  country?: string;
  employmentType?: string;
}

interface CacheEntry {
  data: JSearchJob[];
  timestamp: number;
}

// ── In-memory cache (5-minute TTL) ─────────────────────────────────────────────
const CACHE_TTL_MS = 5 * 60 * 1000;
const cache: Record<string, CacheEntry> = {};

// ── Helpers ─────────────────────────────────────────────────────────────────────

export function formatPostedAgo(dateStr: string): string {
  const posted = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - posted.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return `${Math.floor(diffDays / 7)}w ago`;
}

export function formatSalary(
  min: number | null,
  max: number | null,
  currency: string | null,
  period: string | null,
): string {
  if (!min && !max) return 'Salary not disclosed';
  const sym = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : (currency ?? '');
  const p = period === 'YEAR' ? '/yr' : period === 'MONTH' ? '/mo' : '';
  const lo = min ? `${sym}${(min / 1000).toFixed(0)}K` : '';
  const hi = max ? `${sym}${(max / 1000).toFixed(0)}K` : '';
  if (lo && hi) return `${lo}–${hi}${p}`;
  return `${lo || hi}${p}`;
}

export function normaliseType(type: string, isRemote: boolean): string {
  if (isRemote) return 'Remote';
  switch (type?.toUpperCase()) {
    case 'FULLTIME': return 'Full-time';
    case 'PARTTIME': return 'Part-time';
    case 'INTERN':
    case 'INTERNSHIP': return 'Internship';
    case 'CONTRACTOR': return 'Contract';
    default: return 'Full-time';
  }
}

// ── Hook ────────────────────────────────────────────────────────────────────────

export function useJSearchJobs(options: UseJSearchJobsOptions) {
  const [jobs, setJobs] = useState<JSearchJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const fetchJobs = useCallback(async () => {
    const apiKey = import.meta.env.VITE_JSEARCH_API_KEY;
    if (!apiKey) {
      setError('JSearch API key not configured. Add VITE_JSEARCH_API_KEY to .env.local');
      setLoading(false);
      return;
    }

    const cacheKey = JSON.stringify(options);
    const cached = cache[cacheKey];
    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      setJobs(cached.data);
      setLoading(false);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    const params = new URLSearchParams({
      query: options.query,
      page: String(options.page ?? 1),
      num_pages: String(options.numPages ?? 1),
      country: options.country ?? 'in',
      ...(options.employmentType ? { employment_types: options.employmentType } : {}),
    });

    try {
      const resp = await fetch(
        `https://jsearch.p.rapidapi.com/search?${params.toString()}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'jsearch.p.rapidapi.com',
            'x-rapidapi-key': apiKey,
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
        },
      );

      if (!resp.ok) {
        throw new Error(`API error: ${resp.status} ${resp.statusText}`);
      }

      const json = await resp.json();
      const data: JSearchJob[] = json.data ?? [];

      cache[cacheKey] = { data, timestamp: Date.now() };
      setJobs(data);
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      setError(err.message ?? 'Failed to fetch jobs. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [options.query, options.page, options.numPages, options.country, options.employmentType]);

  useEffect(() => {
    fetchJobs();
    return () => { abortRef.current?.abort(); };
  }, [fetchJobs]);

  return { jobs, loading, error, refetch: fetchJobs };
}
