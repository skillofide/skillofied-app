import React from 'react';
import CoursePageShell from './shared/CoursePageShell';
import { SyllabusModule } from '../../types';

import CourseOverview from './modules/TestingCourse/CourseOverview';
import TestingModuleRenderer from './modules/TestingCourse/TestingModuleRenderer';

export const SYLLABUS: SyllabusModule[] = [
  {
    id: 'overview',
    title: 'COURSE OVERVIEW',
    items: [
      { id: 'overview-welcome', title: 'Welcome to Software Testing' },
    ],
  },
  {
    id: 'm1',
    title: 'MODULE 1: MANUAL TESTING FUNDAMENTALS',
    items: [
      { id: 'm1-l1', title: 'Lesson 1.1 SDLC vs STLC' },
      { id: 'm1-l2', title: 'Lesson 1.2 Writing Test Cases' },
      { id: 'm1-quiz', title: 'Module Quiz' },
      { id: 'm1-assignment', title: 'Practice: Write Test Cases' },
    ],
  },
  {
    id: 'm2',
    title: 'MODULE 2: AUTOMATION TESTING (CYPRESS & SELENIUM)',
    items: [
      { id: 'm2-l1', title: 'Lesson 2.1 Cypress E2E Testing' },
      { id: 'm2-l2', title: 'Lesson 2.2 Selenium Automation' },
      { id: 'm2-quiz', title: 'Module Quiz' },
      { id: 'm2-assignment', title: 'Practice: Automation Test' },
    ],
  },
];

const TestingCoursePage: React.FC = () => {
  return (
    <CoursePageShell
      syllabus={SYLLABUS}
      courseTitle="Software Testing & QA"
      courseSubtitle="Manual test cases design and Cypress automation scripts"
      sidebarSubtitle="Testing Specialization"
      storageKey="maxTestingIndexRead"
      unlockAfterModuleId="m1"
      unlockModuleName="Module 1: Manual Testing"
      renderContent={(moduleId: string, page: number) => {
        if (moduleId === 'overview') return <CourseOverview />;
        return <TestingModuleRenderer moduleId={moduleId} page={page} />;
      }}
    />
  );
};

export default TestingCoursePage;
