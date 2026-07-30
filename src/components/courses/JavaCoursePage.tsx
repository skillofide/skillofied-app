import React from 'react';
import CoursePageShell from './shared/CoursePageShell';
import { SyllabusModule } from '../../types';

// Import modular components
import CourseOverview from './modules/JavaCourse/CourseOverview';
import JavaModuleRenderer from './modules/JavaCourse/JavaModuleRenderer';
import MajorProjects from './modules/JavaCourse/MajorProjects';
import InterviewPrep from './modules/JavaCourse/InterviewPrep';
import FinalAssessment from './modules/JavaCourse/FinalAssessment';
import Certification from './modules/JavaCourse/Certification';

// ─── SYLLABUS DATA ────────────────────────────────────────────────────────────
export const SYLLABUS: SyllabusModule[] = [
  {
    id: 'overview',
    title: 'COURSE OVERVIEW',
    items: [
      { id: 'overview-welcome', title: 'Welcome Message' },
      { id: 'overview-video', title: 'Course Introduction Video' },
      { id: 'overview-outcomes', title: 'Learning Outcomes' },
      { id: 'overview-roadmap', title: 'Java Roadmap' },
      { id: 'overview-prereqs', title: 'Prerequisites' },
      { id: 'overview-resources', title: 'Course Resources' },
    ],
  },
  {
    id: 'm1',
    title: 'MODULE 1: INTRODUCTION TO JAVA',
    items: [
      { id: 'm1-l1', title: 'Lesson 1.1 Welcome to Java' },
      { id: 'm1-l2', title: 'Lesson 1.2 What is Java?' },
      { id: 'm1-l3', title: 'Lesson 1.3 History of Java' },
      { id: 'm1-l4', title: 'Lesson 1.4 Features of Java' },
      { id: 'm1-l5', title: 'Lesson 1.5 JDK, JRE, and JVM' },
      { id: 'm1-l6', title: 'Lesson 1.6 Installing Java' },
      { id: 'm1-l7', title: 'Lesson 1.7 Setting Up IDEs' },
      { id: 'm1-l8', title: 'Lesson 1.8 Your First Java Program' },
      { id: 'm1-ex', title: 'Java Intro Exercises' },
      { id: 'm1-quiz', title: 'Module Quiz' },
      { id: 'm1-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm2',
    title: 'MODULE 2: JAVA BASICS',
    items: [
      { id: 'm2-l1', title: 'Lesson 2.1 Java Program Structure' },
      { id: 'm2-l2', title: 'Lesson 2.2 Comments in Java' },
      { id: 'm2-l3', title: 'Lesson 2.3 Variables' },
      { id: 'm2-l4', title: 'Lesson 2.4 Data Types' },
      { id: 'm2-l5', title: 'Lesson 2.5 Type Casting' },
      { id: 'm2-l6', title: 'Lesson 2.6 Operators' },
      { id: 'm2-l7', title: 'Lesson 2.7 User Input using Scanner' },
      { id: 'm2-l8', title: 'Lesson 2.8 Output Formatting' },
      { id: 'm2-ex', title: 'Practice: Variables & Types' },
      { id: 'm2-quiz', title: 'Module Quiz' },
      { id: 'm2-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm3',
    title: 'MODULE 3: CONTROL STATEMENTS',
    items: [
      { id: 'm3-l1', title: 'Lesson 3.1 if Statement' },
      { id: 'm3-l2', title: 'Lesson 3.2 if-else Statement' },
      { id: 'm3-l3', title: 'Lesson 3.3 Nested if' },
      { id: 'm3-l4', title: 'Lesson 3.4 Switch Case' },
      { id: 'm3-l5', title: 'Lesson 3.5 Ternary Operator' },
      { id: 'm3-l6', title: 'Lesson 3.6 Logical Operators' },
      { id: 'm3-ex', title: 'Practice: Control Statements' },
      { id: 'm3-quiz', title: 'Module Quiz' },
      { id: 'm3-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm4',
    title: 'MODULE 4: LOOPS',
    items: [
      { id: 'm4-l1', title: 'Lesson 4.1 for Loop' },
      { id: 'm4-l2', title: 'Lesson 4.2 while Loop' },
      { id: 'm4-l3', title: 'Lesson 4.3 do-while Loop' },
      { id: 'm4-l4', title: 'Lesson 4.4 Nested Loops' },
      { id: 'm4-l5', title: 'Lesson 4.5 break Statement' },
      { id: 'm4-l6', title: 'Lesson 4.6 continue Statement' },
      { id: 'm4-ex', title: 'Practice: Loops' },
      { id: 'm4-quiz', title: 'Module Quiz' },
      { id: 'm4-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm5',
    title: 'MODULE 5: METHODS & FUNCTIONS',
    items: [
      { id: 'm5-l1', title: 'Lesson 5.1 Introduction to Methods' },
      { id: 'm5-l2', title: 'Lesson 5.2 Method Parameters' },
      { id: 'm5-l3', title: 'Lesson 5.3 Return Types' },
      { id: 'm5-l4', title: 'Lesson 5.4 Method Overloading' },
      { id: 'm5-l5', title: 'Lesson 5.5 Recursion' },
      { id: 'm5-l6', title: 'Lesson 5.6 Variable Scope' },
      { id: 'm5-ex', title: 'Practice: Methods' },
      { id: 'm5-quiz', title: 'Module Quiz' },
      { id: 'm5-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm6',
    title: 'MODULE 6: ARRAYS',
    items: [
      { id: 'm6-l1', title: 'Lesson 6.1 Introduction to Arrays' },
      { id: 'm6-l2', title: 'Lesson 6.2 One-Dimensional Arrays' },
      { id: 'm6-l3', title: 'Lesson 6.3 Two-Dimensional Arrays' },
      { id: 'm6-l4', title: 'Lesson 6.4 Array Operations' },
      { id: 'm6-l5', title: 'Lesson 6.5 Array Sorting' },
      { id: 'm6-l6', title: 'Lesson 6.6 Array Searching' },
      { id: 'm6-ex', title: 'Practice: Arrays' },
      { id: 'm6-quiz', title: 'Module Quiz' },
      { id: 'm6-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm7',
    title: 'MODULE 7: STRINGS',
    items: [
      { id: 'm7-l1', title: 'Lesson 7.1 Introduction to Strings' },
      { id: 'm7-l2', title: 'Lesson 7.2 String Methods' },
      { id: 'm7-l3', title: 'Lesson 7.3 StringBuilder' },
      { id: 'm7-l4', title: 'Lesson 7.4 StringBuffer' },
      { id: 'm7-l5', title: 'Lesson 7.5 String Comparison' },
      { id: 'm7-l6', title: 'Lesson 7.6 String Manipulation' },
      { id: 'm7-ex', title: 'Practice: Strings' },
      { id: 'm7-quiz', title: 'Module Quiz' },
      { id: 'm7-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm8',
    title: 'MODULE 8: OBJECT-ORIENTED PROGRAMMING (OOP)',
    items: [
      { id: 'm8-l1', title: 'Lesson 8.1 Introduction to OOP' },
      { id: 'm8-l2', title: 'Lesson 8.2 Classes and Objects' },
      { id: 'm8-l3', title: 'Lesson 8.3 Constructors' },
      { id: 'm8-l4', title: 'Lesson 8.4 this Keyword' },
      { id: 'm8-l5', title: 'Lesson 8.5 Encapsulation' },
      { id: 'm8-l6', title: 'Lesson 8.6 Inheritance' },
      { id: 'm8-l7', title: 'Lesson 8.7 Polymorphism' },
      { id: 'm8-l8', title: 'Lesson 8.8 Abstraction' },
      { id: 'm8-l9', title: 'Lesson 8.9 Interfaces' },
      { id: 'm8-ex', title: 'Practice: OOP' },
      { id: 'm8-quiz', title: 'Module Quiz' },
      { id: 'm8-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm9',
    title: 'MODULE 9: EXCEPTION HANDLING',
    items: [
      { id: 'm9-l1', title: 'Lesson 9.1 What are Exceptions?' },
      { id: 'm9-l2', title: 'Lesson 9.2 try-catch Block' },
      { id: 'm9-l3', title: 'Lesson 9.3 finally Block' },
      { id: 'm9-l4', title: 'Lesson 9.4 throw Keyword' },
      { id: 'm9-l5', title: 'Lesson 9.5 throws Keyword' },
      { id: 'm9-l6', title: 'Lesson 9.6 Custom Exceptions' },
      { id: 'm9-ex', title: 'Practice: Exception Handling' },
      { id: 'm9-quiz', title: 'Module Quiz' },
      { id: 'm9-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm10',
    title: 'MODULE 10: COLLECTION FRAMEWORK',
    items: [
      { id: 'm10-l1', title: 'Lesson 10.1 Introduction to Collections' },
      { id: 'm10-l2', title: 'Lesson 10.2 ArrayList' },
      { id: 'm10-l3', title: 'Lesson 10.3 LinkedList' },
      { id: 'm10-l4', title: 'Lesson 10.4 HashSet' },
      { id: 'm10-l5', title: 'Lesson 10.5 TreeSet' },
      { id: 'm10-l6', title: 'Lesson 10.6 HashMap' },
      { id: 'm10-l7', title: 'Lesson 10.7 TreeMap' },
      { id: 'm10-l8', title: 'Lesson 10.8 Iterator' },
      { id: 'm10-ex', title: 'Practice: Collections' },
      { id: 'm10-quiz', title: 'Module Quiz' },
      { id: 'm10-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm11',
    title: 'MODULE 11: FILE HANDLING',
    items: [
      { id: 'm11-l1', title: 'Lesson 11.1 Introduction to Files' },
      { id: 'm11-l2', title: 'Lesson 11.2 Reading Files' },
      { id: 'm11-l3', title: 'Lesson 11.3 Writing Files' },
      { id: 'm11-l4', title: 'Lesson 11.4 BufferedReader' },
      { id: 'm11-l5', title: 'Lesson 11.5 BufferedWriter' },
      { id: 'm11-ex', title: 'Practice: File Handling' },
      { id: 'm11-quiz', title: 'Module Quiz' },
      { id: 'm11-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm12',
    title: 'MODULE 12: MULTITHREADING',
    items: [
      { id: 'm12-l1', title: 'Lesson 12.1 Introduction to Threads' },
      { id: 'm12-l2', title: 'Lesson 12.2 Creating Threads' },
      { id: 'm12-l3', title: 'Lesson 12.3 Runnable Interface' },
      { id: 'm12-l4', title: 'Lesson 12.4 Thread Lifecycle' },
      { id: 'm12-l5', title: 'Lesson 12.5 Synchronization' },
      { id: 'm12-l6', title: 'Lesson 12.6 Thread Pool Basics' },
      { id: 'm12-ex', title: 'Practice: Multithreading' },
      { id: 'm12-quiz', title: 'Module Quiz' },
      { id: 'm12-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm13',
    title: 'MODULE 13: JAVA 8 FEATURES',
    items: [
      { id: 'm13-l1', title: 'Lesson 13.1 Lambda Expressions' },
      { id: 'm13-l2', title: 'Lesson 13.2 Functional Interfaces' },
      { id: 'm13-l3', title: 'Lesson 13.3 Stream API' },
      { id: 'm13-l4', title: 'Lesson 13.4 Method References' },
      { id: 'm13-l5', title: 'Lesson 13.5 Optional Class' },
      { id: 'm13-ex', title: 'Practice: Java 8 Features' },
      { id: 'm13-quiz', title: 'Module Quiz' },
      { id: 'm13-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm14',
    title: 'MODULE 14: JDBC (DATABASE CONNECTIVITY)',
    items: [
      { id: 'm14-l1', title: 'Lesson 14.1 Introduction to JDBC' },
      { id: 'm14-l2', title: 'Lesson 14.2 Database Setup' },
      { id: 'm14-l3', title: 'Lesson 14.3 JDBC Connection' },
      { id: 'm14-l4', title: 'Lesson 14.4 CRUD Operations' },
      { id: 'm14-l5', title: 'Lesson 14.5 Prepared Statements' },
      { id: 'm14-l6', title: 'Lesson 14.6 ResultSet' },
      { id: 'm14-ex', title: 'Practice: JDBC' },
      { id: 'm14-quiz', title: 'Module Quiz' },
      { id: 'm14-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm15',
    title: 'MODULE 15: DATA STRUCTURES & ALGORITHMS IN JAVA',
    items: [
      { id: 'm15-l1', title: 'Lesson 15.1 Time Complexity' },
      { id: 'm15-l2', title: 'Lesson 15.2 Arrays' },
      { id: 'm15-l3', title: 'Lesson 15.3 Linked Lists' },
      { id: 'm15-l4', title: 'Lesson 15.4 Stacks' },
      { id: 'm15-l5', title: 'Lesson 15.5 Queues' },
      { id: 'm15-l6', title: 'Lesson 15.6 Trees' },
      { id: 'm15-l7', title: 'Lesson 15.7 Graphs' },
      { id: 'm15-l8', title: 'Lesson 15.8 Searching Algorithms' },
      { id: 'm15-l9', title: 'Lesson 15.9 Sorting Algorithms' },
      { id: 'm15-ex', title: 'Practice: DSA' },
      { id: 'm15-quiz', title: 'Module Quiz' },
      { id: 'm15-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm16',
    title: 'MODULE 16: SPRING BOOT FUNDAMENTALS',
    items: [
      { id: 'm16-l1', title: 'Lesson 16.1 Introduction to Spring Boot' },
      { id: 'm16-l2', title: 'Lesson 16.2 Spring Boot Setup' },
      { id: 'm16-l3', title: 'Lesson 16.3 REST APIs' },
      { id: 'm16-l4', title: 'Lesson 16.4 Controllers' },
      { id: 'm16-l5', title: 'Lesson 16.5 Services' },
      { id: 'm16-l6', title: 'Lesson 16.6 Repositories' },
      { id: 'm16-l7', title: 'Lesson 16.7 Dependency Injection' },
      { id: 'm16-l8', title: 'Lesson 16.8 Spring Boot Project Structure' },
      { id: 'm16-ex', title: 'Practice: Spring Boot' },
      { id: 'm16-quiz', title: 'Module Quiz' },
      { id: 'm16-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm17',
    title: 'MODULE 17: SPRING BOOT + DATABASE',
    items: [
      { id: 'm17-l1', title: 'Lesson 17.1 MySQL/PostgreSQL Integration' },
      { id: 'm17-l2', title: 'Lesson 17.2 JPA & Hibernate' },
      { id: 'm17-l3', title: 'Lesson 17.3 Entity Mapping' },
      { id: 'm17-l4', title: 'Lesson 17.4 CRUD APIs' },
      { id: 'm17-l5', title: 'Lesson 17.5 Validation' },
      { id: 'm17-l6', title: 'Lesson 17.6 Exception Handling' },
      { id: 'm17-ex', title: 'Practice: Spring Data JPA' },
      { id: 'm17-quiz', title: 'Module Quiz' },
      { id: 'm17-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm18',
    title: 'MODULE 18: SECURITY & AUTHENTICATION',
    items: [
      { id: 'm18-l1', title: 'Lesson 18.1 Authentication Basics' },
      { id: 'm18-l2', title: 'Lesson 18.2 Authorization' },
      { id: 'm18-l3', title: 'Lesson 18.3 JWT Authentication' },
      { id: 'm18-l4', title: 'Lesson 18.4 Password Encryption' },
      { id: 'm18-l5', title: 'Lesson 18.5 Secure APIs' },
      { id: 'm18-ex', title: 'Practice: Security' },
      { id: 'm18-quiz', title: 'Module Quiz' },
      { id: 'm18-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'm19',
    title: 'MODULE 19: DEPLOYMENT',
    items: [
      { id: 'm19-l1', title: 'Lesson 19.1 Building JAR Files' },
      { id: 'm19-l2', title: 'Lesson 19.2 Environment Variables' },
      { id: 'm19-l3', title: 'Lesson 19.3 Deploying on AWS' },
      { id: 'm19-l4', title: 'Lesson 19.4 Deploying on Render' },
      { id: 'm19-l5', title: 'Lesson 19.5 Deploying with Docker' },
      { id: 'm19-ex', title: 'Practice: Deployment' },
      { id: 'm19-quiz', title: 'Module Quiz' },
      { id: 'm19-assignment', title: 'Module Assignment' },
    ],
  },
  {
    id: 'projects',
    title: 'MAJOR PROJECTS',
    items: [
      { id: 'proj-1', title: 'Project 1: Student Grade Calculator' },
      { id: 'proj-2', title: 'Project 2: Banking System' },
      { id: 'proj-3', title: 'Project 3: Library Management System' },
      { id: 'proj-4', title: 'Project 4: Employee Management System' },
      { id: 'proj-5', title: 'Project 5: File Management Application' },
      { id: 'proj-6', title: 'Project 6: Student Management System (JDBC)' },
      { id: 'proj-7', title: 'Project 7: Spring Boot REST API' },
      { id: 'proj-8', title: 'Project 8: E-Commerce Backend' },
      { id: 'proj-capstone', title: 'Final Capstone Project' },
    ],
  },
  {
    id: 'prep',
    title: 'INTERVIEW PREPARATION',
    items: [
      { id: 'prep-core', title: 'Core Java Interview Questions' },
      { id: 'prep-oop', title: 'OOP Interview Questions' },
      { id: 'prep-coll', title: 'Collections Interview Questions' },
      { id: 'prep-multi', title: 'Multithreading Interview Questions' },
      { id: 'prep-spring', title: 'Spring Boot Interview Questions' },
      { id: 'prep-coding', title: 'Coding Challenges' },
      { id: 'prep-mock', title: 'Mock Interviews' },
    ],
  },
  {
    id: 'assessment',
    title: 'FINAL ASSESSMENT',
    items: [
      { id: 'test-theory', title: 'Theory Test' },
      { id: 'test-coding', title: 'Coding Test' },
      { id: 'test-eval', title: 'Project Evaluation' },
      { id: 'test-viva', title: 'Viva / Interview Round' },
    ],
  },
  {
    id: 'certification',
    title: 'CERTIFICATION',
    items: [
      { id: 'cert-view', title: 'Java Programming Certificate' },
      { id: 'cert-badge', title: 'Achievement Badges' },
      { id: 'cert-skills', title: 'Verified Skills Certificate' },
    ],
  },
];

// ─── Module Content Router ─────────────────────────────────────────────────
function renderJavaContent(moduleId: string, page: number): React.ReactNode {
  if (moduleId === 'overview') return <CourseOverview page={page} />;
  if (moduleId.startsWith('m')) return <JavaModuleRenderer moduleId={moduleId} page={page} />;
  if (moduleId === 'projects') return <MajorProjects page={page} />;
  if (moduleId === 'prep') return <InterviewPrep page={page} />;
  if (moduleId === 'assessment') return <FinalAssessment page={page} />;
  if (moduleId === 'certification') return <Certification page={page} />;
  return null;
}

// ─── Page Component ─────────────────────────────────────────────────────────
const JavaCoursePage: React.FC = () => (
  <CoursePageShell
    syllabus={SYLLABUS}
    courseTitle="Java Programming Mastery"
    courseSubtitle="Instructor-Led Course Syllabus"
    sidebarSubtitle="Java Mastery"
    storageKey="maxJavaIndexRead"
    unlockAfterModuleId="m1"
    unlockModuleName="Module 1: Introduction to Java"
    renderContent={renderJavaContent}
  />
);

export default JavaCoursePage;
