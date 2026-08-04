import React from 'react';
import CoursePageShell from './shared/CoursePageShell';
import { SyllabusModule } from '../../types';

import CourseOverview from './modules/FullStackCourse/CourseOverview';
import FullstackModuleRenderer from './modules/FullStackCourse/FullstackModuleRenderer';

export const SYLLABUS: SyllabusModule[] = [
  {
    id: 'overview',
    title: 'COURSE OVERVIEW',
    items: [
      { id: 'overview-welcome', title: 'Welcome to Full Stack Engineering' },
    ],
  },
  {
    id: 'm1',
    title: 'MODULE 1: FRONTEND FOUNDATIONS & REACT',
    items: [
      { id: 'm1-l1', title: 'Lesson 1.1 Web Fundamentals & HTML' },
      { id: 'm1-quiz', title: 'Module Quiz' },
      { id: 'm1-assignment', title: 'Practice: Web UI' },
    ],
  },
  {
    id: 'm2',
    title: 'MODULE 2: BACKEND SERVERS & APIS',
    items: [
      { id: 'm2-l1', title: 'Lesson 2.1 API Design Principles' },
      { id: 'm2-quiz', title: 'Module Quiz' },
      { id: 'm2-assignment', title: 'Practice: Server APIs' },
    ],
  },
];

const FullStackCoursePage: React.FC = () => {
  return (
    <CoursePageShell
      syllabus={SYLLABUS}
      courseTitle="Full Stack Engineering"
      courseSubtitle="Build modern client, server and database platforms"
      sidebarSubtitle="Full Stack Specialization"
      storageKey="maxFullStackIndexRead"
      unlockAfterModuleId="m1"
      unlockModuleName="Module 1: Frontend"
      renderContent={(moduleId: string, page: number) => {
        if (moduleId === 'overview') return <CourseOverview />;
        return <FullstackModuleRenderer moduleId={moduleId} page={page} />;
      }}
    />
  );
};

export default FullStackCoursePage;
