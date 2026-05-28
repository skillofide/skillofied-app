import { Course, PracticeSet, PendingAction } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Java',
    mentor: 'Deeptanshu Kumar',
    initial: 'J',
    color: '#6c5ce7',
    progress: 99.8,
    classTime: '09:00 – 11:30 AM',
    status: 'NOT STARTED',
  },
  {
    id: '2',
    title: 'Front-End Technologies',
    mentor: 'Priya M. Khaisate',
    initial: 'F',
    color: '#e05a36',
    progress: 99.4,
    classTime: '11:15 – 01:15 PM',
    status: 'NOT STARTED',
  },
  {
    id: '3',
    title: 'Mastering SQL',
    mentor: 'Ayush B',
    initial: 'M',
    color: '#10ac84',
    progress: 99.8,
    classTime: '11:30 – 12:45 PM',
    status: 'NOT STARTED',
  },
];

export const practiceSets: PracticeSet[] = [
  {
    id: '1',
    title: 'Masters of Algorith...',
    level: 'advanced Challenge',
    levelColor: '#9b5cf6',
    bgColor: '#faf5ff',
    progress: 0,
    totalProblems: 20,
    iconColor: '#9b5cf6',
  },
  {
    id: '2',
    title: 'Path to Proficiency',
    level: 'intermediate Challenge',
    levelColor: '#3b82f6',
    bgColor: '#eff6ff',
    progress: 4.5,
    totalProblems: 22,
    iconColor: '#3b82f6',
  },
  {
    id: '3',
    title: 'Foundational Basics',
    level: 'beginner Challenge',
    levelColor: '#22c55e',
    bgColor: '#f0fdf4',
    progress: 0,
    totalProblems: 15,
    iconColor: '#22c55e',
  },
];

export const pendingActions: PendingAction[] = [
  {
    id: '1',
    title: 'Java',
    type: 'Course Action',
    topicsCount: 888,
    hasAlert: true,
  },
  {
    id: '2',
    title: 'Automation Testing With Selenium',
    type: 'Course Action',
    topicsCount: 161,
    hasAlert: true,
  },
  {
    id: '3',
    title: 'Mongo DB',
    type: 'Course Action',
    topicsCount: undefined,
    hasAlert: true,
  },
];
