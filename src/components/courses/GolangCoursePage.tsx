import React from 'react';
import CoursePageShell from './shared/CoursePageShell';
import { SyllabusModule } from '../../types';

import CourseOverview from './modules/GolangCourse/CourseOverview';
import GolangModuleRenderer from './modules/GolangCourse/GolangModuleRenderer';

export const SYLLABUS: SyllabusModule[] = [
  {
    id: 'overview',
    title: 'COURSE OVERVIEW',
    items: [
      { id: 'overview-welcome', title: 'Welcome to Golang Engineering' },
    ],
  },
  {
    id: 'm1',
    title: 'MODULE 1: INTRODUCTION TO GOLANG',
    items: [
      { id: 'm1-l1', title: 'Lesson 1.1 Welcome to Golang' },
      { id: 'm1-l2', title: 'Lesson 1.2 What is Go?' },
      { id: 'm1-l3', title: 'Lesson 1.3 History of Go' },
      { id: 'm1-l4', title: 'Lesson 1.4 Why Learn Go?' },
      { id: 'm1-l5', title: 'Lesson 1.5 Features of Go' },
      { id: 'm1-l6', title: 'Lesson 1.6 Installing Go' },
      { id: 'm1-l7', title: 'Lesson 1.7 Setting Up VS Code' },
      { id: 'm1-l8', title: 'Lesson 1.8 Your First Go Program' },
      { id: 'm1-quiz', title: 'Module Quiz' },
      { id: 'm1-assignment', title: 'Practice: First Go Program' },
    ],
  },
  {
    id: 'm2',
    title: 'MODULE 2: GO FUNDAMENTALS',
    items: [
      { id: 'm2-l1', title: 'Lesson 2.1 Program Structure' },
      { id: 'm2-l2', title: 'Lesson 2.2 Variables' },
      { id: 'm2-l3', title: 'Lesson 2.3 Constants' },
      { id: 'm2-l4', title: 'Lesson 2.4 Data Types' },
      { id: 'm2-l5', title: 'Lesson 2.5 Type Conversion' },
      { id: 'm2-l6', title: 'Lesson 2.6 Operators' },
      { id: 'm2-l7', title: 'Lesson 2.7 User Input' },
      { id: 'm2-l8', title: 'Lesson 2.8 Output Formatting' },
      { id: 'm2-quiz', title: 'Module Quiz' },
      { id: 'm2-assignment', title: 'Practice: Go Fundamentals' },
    ],
  },
  {
    id: 'm3',
    title: 'MODULE 3: CONTROL FLOW',
    items: [
      { id: 'm3-l1', title: 'Lesson 3.1 if Statement' },
      { id: 'm3-l2', title: 'Lesson 3.2 if-else Statement' },
      { id: 'm3-l3', title: 'Lesson 3.3 Switch Statement' },
      { id: 'm3-l4', title: 'Lesson 3.4 for Loop' },
      { id: 'm3-l5', title: 'Lesson 3.5 break & continue' },
      { id: 'm3-l6', title: 'Lesson 3.6 Labels' },
      { id: 'm3-quiz', title: 'Module Quiz' },
      { id: 'm3-assignment', title: 'Practice: Control Flow' },
    ],
  },
  {
    id: 'm4',
    title: 'MODULE 4: FUNCTIONS',
    items: [
      { id: 'm4-l1', title: 'Lesson 4.1 Functions' },
      { id: 'm4-l2', title: 'Lesson 4.2 Parameters' },
      { id: 'm4-l3', title: 'Lesson 4.3 Multiple Return Values' },
      { id: 'm4-l4', title: 'Lesson 4.4 Named Return Values' },
      { id: 'm4-l5', title: 'Lesson 4.5 Variadic Functions' },
      { id: 'm4-l6', title: 'Lesson 4.6 Anonymous Functions' },
      { id: 'm4-l7', title: 'Lesson 4.7 Closures' },
      { id: 'm4-l8', title: 'Lesson 4.8 Recursion' },
      { id: 'm4-quiz', title: 'Module Quiz' },
      { id: 'm4-assignment', title: 'Practice: Functions' },
    ],
  },
  {
    id: 'm5',
    title: 'MODULE 5: ARRAYS, SLICES & MAPS',
    items: [
      { id: 'm5-l1', title: 'Lesson 5.1 Arrays' },
      { id: 'm5-l2', title: 'Lesson 5.2 Slices' },
      { id: 'm5-l3', title: 'Lesson 5.3 Slice Operations' },
      { id: 'm5-l4', title: 'Lesson 5.4 Maps' },
      { id: 'm5-l5', title: 'Lesson 5.5 Iterating Collections' },
      { id: 'm5-l6', title: 'Lesson 5.6 Practical Examples' },
      { id: 'm5-quiz', title: 'Module Quiz' },
      { id: 'm5-assignment', title: 'Practice: Slices & Maps' },
    ],
  },
  {
    id: 'm6',
    title: 'MODULE 6: STRUCTS & METHODS',
    items: [
      { id: 'm6-l1', title: 'Lesson 6.1 Structs' },
      { id: 'm6-l2', title: 'Lesson 6.2 Methods' },
      { id: 'm6-l3', title: 'Lesson 6.3 Embedded Structs' },
      { id: 'm6-l4', title: 'Lesson 6.4 Composition' },
      { id: 'm6-l5', title: 'Lesson 6.5 JSON Tags' },
      { id: 'm6-l6', title: 'Lesson 6.6 Best Practices' },
      { id: 'm6-quiz', title: 'Module Quiz' },
      { id: 'm6-assignment', title: 'Practice: Structs & JSON' },
    ],
  },
  {
    id: 'm7',
    title: 'MODULE 7: INTERFACES',
    items: [
      { id: 'm7-l1', title: 'Lesson 7.1 Introduction to Interfaces' },
      { id: 'm7-l2', title: 'Lesson 7.2 Implementing Interfaces' },
      { id: 'm7-l3', title: 'Lesson 7.3 Empty Interface' },
      { id: 'm7-l4', title: 'Lesson 7.4 Type Assertions' },
      { id: 'm7-l5', title: 'Lesson 7.5 Type Switches' },
      { id: 'm7-l6', title: 'Lesson 7.6 Real-World Examples' },
      { id: 'm7-quiz', title: 'Module Quiz' },
      { id: 'm7-assignment', title: 'Practice: Interfaces' },
    ],
  },
  {
    id: 'm8',
    title: 'MODULE 8: ERROR HANDLING',
    items: [
      { id: 'm8-l1', title: 'Lesson 8.1 Errors in Go' },
      { id: 'm8-l2', title: 'Lesson 8.2 Creating Custom Errors' },
      { id: 'm8-l3', title: 'Lesson 8.3 panic' },
      { id: 'm8-l4', title: 'Lesson 8.4 defer' },
      { id: 'm8-l5', title: 'Lesson 8.5 recover' },
      { id: 'm8-l6', title: 'Lesson 8.6 Error Wrapping' },
      { id: 'm8-quiz', title: 'Module Quiz' },
      { id: 'm8-assignment', title: 'Practice: Error Handling' },
    ],
  },
  {
    id: 'm9',
    title: 'MODULE 9: PACKAGES & MODULES',
    items: [
      { id: 'm9-l1', title: 'Lesson 9.1 Packages' },
      { id: 'm9-l2', title: 'Lesson 9.2 Go Modules' },
      { id: 'm9-l3', title: 'Lesson 9.3 Importing Packages' },
      { id: 'm9-l4', title: 'Lesson 9.4 Creating Packages' },
      { id: 'm9-l5', title: 'Lesson 9.5 Package Organization' },
      { id: 'm9-quiz', title: 'Module Quiz' },
      { id: 'm9-assignment', title: 'Practice: Packages' },
    ],
  },
  {
    id: 'm10',
    title: 'MODULE 10: FILE HANDLING',
    items: [
      { id: 'm10-l1', title: 'Lesson 10.1 Reading Files' },
      { id: 'm10-l2', title: 'Lesson 10.2 Writing Files' },
      { id: 'm10-l3', title: 'Lesson 10.3 Directories' },
      { id: 'm10-l4', title: 'Lesson 10.4 JSON Files' },
      { id: 'm10-l5', title: 'Lesson 10.5 CSV Files' },
      { id: 'm10-l6', title: 'Lesson 10.6 Logging' },
      { id: 'm10-quiz', title: 'Module Quiz' },
      { id: 'm10-assignment', title: 'Practice: File Handling' },
    ],
  },
  {
    id: 'm11',
    title: 'MODULE 11: CONCURRENCY',
    items: [
      { id: 'm11-l1', title: 'Lesson 11.1 Introduction to Goroutines' },
      { id: 'm11-l2', title: 'Lesson 11.3 Channels' },
      { id: 'm11-l3', title: 'Lesson 11.3 Buffered Channels' },
      { id: 'm11-l4', title: 'Lesson 11.4 Select Statement' },
      { id: 'm11-l5', title: 'Lesson 11.5 WaitGroup' },
      { id: 'm11-l6', title: 'Lesson 11.6 Mutex' },
      { id: 'm11-l7', title: 'Lesson 11.7 Context Package' },
      { id: 'm11-l8', title: 'Lesson 11.8 Worker Pools' },
      { id: 'm11-quiz', title: 'Module Quiz' },
      { id: 'm11-assignment', title: 'Practice: Concurrency' },
    ],
  },
  {
    id: 'm12',
    title: 'MODULE 12: TESTING',
    items: [
      { id: 'm12-l1', title: 'Lesson 12.1 Introduction to Testing' },
      { id: 'm12-l2', title: 'Lesson 12.2 Unit Testing' },
      { id: 'm12-l3', title: 'Lesson 12.3 Table-Driven Tests' },
      { id: 'm12-l4', title: 'Lesson 12.4 Benchmark Testing' },
      { id: 'm12-l5', title: 'Lesson 12.5 Mocking Basics' },
      { id: 'm12-quiz', title: 'Module Quiz' },
      { id: 'm12-assignment', title: 'Practice: Testing' },
    ],
  },
  {
    id: 'm13',
    title: 'MODULE 13: HTTP & REST APIs',
    items: [
      { id: 'm13-l1', title: 'Lesson 13.1 HTTP Package' },
      { id: 'm13-l2', title: 'Lesson 13.2 Web Server' },
      { id: 'm13-l3', title: 'Lesson 13.3 Routing' },
      { id: 'm13-l4', title: 'Lesson 13.4 Request Handling' },
      { id: 'm13-l5', title: 'Lesson 13.5 JSON APIs' },
      { id: 'm13-l6', title: 'Lesson 13.6 Middleware' },
      { id: 'm13-l7', title: 'Lesson 13.7 API Versioning' },
      { id: 'm13-quiz', title: 'Module Quiz' },
      { id: 'm13-assignment', title: 'Practice: REST APIs' },
    ],
  },
  {
    id: 'm14',
    title: 'MODULE 14: DATABASES',
    items: [
      { id: 'm14-l1', title: 'Lesson 14.1 SQL Basics' },
      { id: 'm14-l2', title: 'Lesson 14.2 PostgreSQL Setup' },
      { id: 'm14-l3', title: 'Lesson 14.3 Database Connections' },
      { id: 'm14-l4', title: 'Lesson 14.4 CRUD Operations' },
      { id: 'm14-l5', title: 'Lesson 14.5 Transactions' },
      { id: 'm14-l6', title: 'Lesson 14.6 Migrations' },
      { id: 'm14-l7', title: 'Lesson 14.7 Repository Pattern' },
      { id: 'm14-quiz', title: 'Module Quiz' },
      { id: 'm14-assignment', title: 'Practice: PostgreSQL' },
    ],
  },
  {
    id: 'm15',
    title: 'MODULE 15: BUILDING APIS WITH GIN',
    items: [
      { id: 'm15-l1', title: 'Lesson 15.1 Introduction to Gin' },
      { id: 'm15-l2', title: 'Lesson 15.2 Project Structure' },
      { id: 'm15-l3', title: 'Lesson 15.3 Routing' },
      { id: 'm15-l4', title: 'Lesson 15.4 Controllers' },
      { id: 'm15-l5', title: 'Lesson 15.5 Services' },
      { id: 'm15-l6', title: 'Lesson 15.6 Middleware' },
      { id: 'm15-l7', title: 'Lesson 15.7 Validation' },
      { id: 'm15-l8', title: 'Lesson 15.8 Authentication' },
      { id: 'm15-quiz', title: 'Module Quiz' },
      { id: 'm15-assignment', title: 'Practice: Gin API' },
    ],
  },
  {
    id: 'm16',
    title: 'MODULE 16: AUTHENTICATION & SECURITY',
    items: [
      { id: 'm16-l1', title: 'Lesson 16.1 Password Hashing' },
      { id: 'm16-l2', title: 'Lesson 16.2 JWT Authentication' },
      { id: 'm16-l3', title: 'Lesson 16.3 Authorization' },
      { id: 'm16-l4', title: 'Lesson 16.4 Refresh Tokens' },
      { id: 'm16-l5', title: 'Lesson 16.5 API Security' },
      { id: 'm16-l6', title: 'Lesson 16.6 CORS' },
      { id: 'm16-quiz', title: 'Module Quiz' },
      { id: 'm16-assignment', title: 'Practice: Security' },
    ],
  },
  {
    id: 'm17',
    title: 'MODULE 17: MICROSERVICES BASICS',
    items: [
      { id: 'm17-l1', title: 'Lesson 17.1 What are Microservices?' },
      { id: 'm17-l2', title: 'Lesson 17.2 Service Communication' },
      { id: 'm17-l3', title: 'Lesson 17.3 gRPC Basics' },
      { id: 'm17-l4', title: 'Lesson 17.4 Message Queues' },
      { id: 'm17-l5', title: 'Lesson 17.5 Dockerizing Services' },
      { id: 'm17-l6', title: 'Lesson 17.6 Service Discovery' },
      { id: 'm17-quiz', title: 'Module Quiz' },
      { id: 'm17-assignment', title: 'Practice: Microservices' },
    ],
  },
  {
    id: 'm18',
    title: 'MODULE 18: DEPLOYMENT & DEVOPS',
    items: [
      { id: 'm18-l1', title: 'Lesson 18.1 Building Executables' },
      { id: 'm18-l2', title: 'Lesson 18.2 Environment Variables' },
      { id: 'm18-l3', title: 'Lesson 18.3 Docker' },
      { id: 'm18-l4', title: 'Lesson 18.4 Docker Compose' },
      { id: 'm18-l5', title: 'Lesson 18.5 AWS EC2 Deployment' },
      { id: 'm18-l6', title: 'Lesson 18.6 CI/CD Basics' },
      { id: 'm18-quiz', title: 'Module Quiz' },
      { id: 'm18-assignment', title: 'Practice: Deployment' },
    ],
  },
  {
    id: 'projects',
    title: 'MAJOR PROJECTS',
    items: [
      { id: 'projects-c1', title: 'Project 1: CLI Calculator' },
      { id: 'projects-c2', title: 'Project 2: Student Management' },
      { id: 'projects-c3', title: 'Project 3: File Manager CLI' },
      { id: 'projects-c4', title: 'Project 4: Task Manager API' },
      { id: 'projects-c5', title: 'Project 5: URL Shortener API' },
      { id: 'projects-c6', title: 'Project 6: Authentication Service' },
      { id: 'projects-c7', title: 'Project 7: E-Commerce REST API' },
      { id: 'projects-c8', title: 'Project 8: Blog Backend API' },
      { id: 'projects-capstone', title: 'Capstone: LMS Backend' },
    ],
  },
  {
    id: 'interview',
    title: 'INTERVIEW PREPARATION',
    items: [
      { id: 'interview-q1', title: 'Go Language Q&A' },
      { id: 'interview-q2', title: 'Concurrency & Channels' },
      { id: 'interview-q3', title: 'REST API Design' },
      { id: 'interview-q4', title: 'Database & SQL' },
      { id: 'interview-q5', title: 'System Design Basics' },
      { id: 'interview-q6', title: 'Coding Challenges' },
      { id: 'interview-q7', title: 'Mock Interviews' },
    ],
  },
  {
    id: 'assessment',
    title: 'FINAL ASSESSMENT',
    items: [
      { id: 'assessment-t1', title: 'Theory Test' },
      { id: 'assessment-t2', title: 'Coding Test' },
      { id: 'assessment-t3', title: 'API Dev Project' },
      { id: 'assessment-t4', title: 'Technical Interview Simulation' },
    ],
  },
  {
    id: 'certification',
    title: 'CERTIFICATION',
    items: [
      { id: 'cert-1', title: 'Go Programming Certificate' },
      { id: 'cert-2', title: 'REST API Dev Certificate' },
      { id: 'cert-3', title: 'Backend Dev Certificate' },
      { id: 'cert-4', title: 'Golang Backend Developer Certificate' },
    ],
  },
];

const GolangCoursePage: React.FC = () => {
  return (
    <CoursePageShell
      syllabus={SYLLABUS}
      courseTitle="Golang Programming Mastery"
      courseSubtitle="Concurrent backend microservices in Go"
      sidebarSubtitle="Go Specialization"
      storageKey="maxGolangIndexRead"
      unlockAfterModuleId="m1"
      unlockModuleName="Module 1: Go Intro"
      renderContent={(moduleId: string, page: number) => {
        if (moduleId === 'overview') return <CourseOverview />;
        return <GolangModuleRenderer moduleId={moduleId} page={page} />;
      }}
    />
  );
};

export default GolangCoursePage;
