import React from 'react';
import CoursePageShell from './shared/CoursePageShell';
import { SyllabusModule } from '../../types';
import MarketingModuleRenderer from './modules/MarketingCourses/MarketingModuleRenderer';
import { seoContent } from './modules/MarketingCourses/SeoCourseData';

/**
 * Module and lesson titles mirror the published syllabus on the course landing
 * page, so learners get exactly what was advertised.
 */
export const SYLLABUS: SyllabusModule[] = [
  {
    id: 'overview',
    title: 'COURSE OVERVIEW',
    items: [
      { id: 'overview-welcome', title: 'Welcome to SEO Fundamentals' },
      { id: 'overview-outcomes', title: 'Learning Outcomes' },
    ],
  },
  {
    id: 'seo-m1',
    title: 'MODULE 1: SEARCH ENGINE CRAWLING & INDEXING',
    items: [
      { id: 'seo-m1-l1', title: 'How Google Search Works' },
      { id: 'seo-m1-l2', title: 'Understanding Crawl Budgets & Indexability' },
      { id: 'seo-m1-l3', title: 'Sitemaps and Robots.txt Best Practices' },
      { id: 'seo-m1-quiz', title: 'Module Quiz' },
      { id: 'seo-m1-assignment', title: 'Assignment: Indexing Audit' },
    ],
  },
  {
    id: 'seo-m2',
    title: 'MODULE 2: KEYWORD RESEARCH & COMPETITOR ANALYSIS',
    items: [
      { id: 'seo-m2-l1', title: 'Identifying Search Intent' },
      { id: 'seo-m2-l2', title: 'Keyword Grouping & Selection Metrics' },
      { id: 'seo-m2-l3', title: 'Competitor Gap & Opportunity Audits' },
      { id: 'seo-m2-quiz', title: 'Module Quiz' },
      { id: 'seo-m2-assignment', title: 'Assignment: Keyword Research' },
    ],
  },
  {
    id: 'seo-m3',
    title: 'MODULE 3: ON-PAGE SEO OPTIMIZATION',
    items: [
      { id: 'seo-m3-l1', title: 'Title Tags, Meta Descriptions & Headers' },
      { id: 'seo-m3-l2', title: 'SEO Copywriting & Image Optimization' },
      { id: 'seo-m3-l3', title: 'URL Hierarchy & Internal Link Architecture' },
      { id: 'seo-m3-quiz', title: 'Module Quiz' },
      { id: 'seo-m3-assignment', title: 'Assignment: On-Page Pass' },
    ],
  },
  {
    id: 'seo-m4',
    title: 'MODULE 4: TECHNICAL SEO & SPEED OPTIMIZATION',
    items: [
      { id: 'seo-m4-l1', title: 'Core Web Vitals & Page Load Impact' },
      { id: 'seo-m4-l2', title: 'Schema Markup & Rich Snippets' },
      { id: 'seo-m4-l3', title: 'Canonicalization & Redirects' },
      { id: 'seo-m4-quiz', title: 'Module Quiz' },
      { id: 'seo-m4-assignment', title: 'Assignment: Technical Audit' },
    ],
  },
  {
    id: 'seo-m5',
    title: 'MODULE 5: LINK BUILDING & OFF-PAGE AUTHORITY',
    items: [
      { id: 'seo-m5-l1', title: 'Evaluating Domain Authority' },
      { id: 'seo-m5-l2', title: 'Ethical Guest Posting & Outreach' },
      { id: 'seo-m5-l3', title: 'Backlink Auditing & Disavow Tool' },
      { id: 'seo-m5-quiz', title: 'Module Quiz' },
      { id: 'seo-m5-assignment', title: 'Assignment: Backlink Plan' },
    ],
  },
];

const SeoCoursePage: React.FC = () => (
  <CoursePageShell
    syllabus={SYLLABUS}
    courseTitle="SEO Fundamentals"
    courseSubtitle="Rank on search, sustainably"
    sidebarSubtitle="SEO Fundamentals"
    storageKey="maxSeoIndexRead"
    unlockAfterModuleId="seo-m1"
    unlockModuleName="Module 1: Search Engine Crawling & Indexing"
    renderContent={(moduleId, page) => (
      <MarketingModuleRenderer
        syllabus={SYLLABUS}
        content={seoContent}
        moduleId={moduleId}
        page={page}
      />
    )}
  />
);

export default SeoCoursePage;
