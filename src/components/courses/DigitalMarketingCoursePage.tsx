import React from 'react';
import CoursePageShell from './shared/CoursePageShell';
import { SyllabusModule } from '../../types';
import MarketingModuleRenderer from './modules/MarketingCourses/MarketingModuleRenderer';
import { digitalMarketingContent } from './modules/MarketingCourses/DigitalMarketingCourseData';

/**
 * Module and lesson titles mirror the published syllabus on the course landing
 * page, so learners get exactly what was advertised.
 */
export const SYLLABUS: SyllabusModule[] = [
  {
    id: 'overview',
    title: 'COURSE OVERVIEW',
    items: [
      { id: 'overview-welcome', title: 'Welcome to Digital Marketing' },
      { id: 'overview-outcomes', title: 'Learning Outcomes' },
    ],
  },
  {
    id: 'dm-m1',
    title: 'MODULE 1: THE DIGITAL MARKETING FUNNEL',
    items: [
      { id: 'dm-m1-l1', title: 'AIDA Model & Customer Value Journey' },
      { id: 'dm-m1-l2', title: 'Defining Target Personas & Segments' },
      { id: 'dm-m1-l3', title: 'Mapping Marketing Channels to Goals' },
      { id: 'dm-m1-quiz', title: 'Module Quiz' },
      { id: 'dm-m1-assignment', title: 'Assignment: Funnel & Persona Map' },
    ],
  },
  {
    id: 'dm-m2',
    title: 'MODULE 2: SOCIAL MEDIA MARKETING & ORGANIC GROWTH',
    items: [
      { id: 'dm-m2-l1', title: 'Content Pillars & Scheduling' },
      { id: 'dm-m2-l2', title: 'Algorithm Optimization' },
      { id: 'dm-m2-l3', title: 'Community Management & Engagement' },
      { id: 'dm-m2-quiz', title: 'Module Quiz' },
      { id: 'dm-m2-assignment', title: 'Assignment: Content Strategy' },
    ],
  },
  {
    id: 'dm-m3',
    title: 'MODULE 3: PAY-PER-CLICK (PPC) ADVERTISING',
    items: [
      { id: 'dm-m3-l1', title: 'Google Search Ads Campaign Setup' },
      { id: 'dm-m3-l2', title: 'Meta Ads Manager' },
      { id: 'dm-m3-l3', title: 'Bidding, Budgets & Retargeting' },
      { id: 'dm-m3-quiz', title: 'Module Quiz' },
      { id: 'dm-m3-assignment', title: 'Assignment: Paid Campaign Plan' },
    ],
  },
  {
    id: 'dm-m4',
    title: 'MODULE 4: EMAIL MARKETING AUTOMATION',
    items: [
      { id: 'dm-m4-l1', title: 'Lead Magnet Design & List Growth' },
      { id: 'dm-m4-l2', title: 'Writing High-Open-Rate Sequences' },
      { id: 'dm-m4-l3', title: 'Behavioral Triggers & Workflows' },
      { id: 'dm-m4-quiz', title: 'Module Quiz' },
      { id: 'dm-m4-assignment', title: 'Assignment: Email Programme' },
    ],
  },
  {
    id: 'dm-m5',
    title: 'MODULE 5: CONVERSION RATE OPTIMIZATION (CRO)',
    items: [
      { id: 'dm-m5-l1', title: 'Landing Page Best Practices' },
      { id: 'dm-m5-l2', title: 'A/B Testing Frameworks & Tools' },
      { id: 'dm-m5-l3', title: 'Heatmaps & Session Analysis' },
      { id: 'dm-m5-quiz', title: 'Module Quiz' },
      { id: 'dm-m5-assignment', title: 'Assignment: Conversion Audit' },
    ],
  },
];

const DigitalMarketingCoursePage: React.FC = () => (
  <CoursePageShell
    syllabus={SYLLABUS}
    courseTitle="Digital Marketing Strategy"
    courseSubtitle="Build funnels that actually convert"
    sidebarSubtitle="Digital Marketing"
    storageKey="maxDigitalMarketingIndexRead"
    unlockAfterModuleId="dm-m1"
    unlockModuleName="Module 1: The Digital Marketing Funnel"
    renderContent={(moduleId, page) => (
      <MarketingModuleRenderer
        syllabus={SYLLABUS}
        content={digitalMarketingContent}
        moduleId={moduleId}
        page={page}
      />
    )}
  />
);

export default DigitalMarketingCoursePage;
