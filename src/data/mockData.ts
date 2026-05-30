import { Course, PracticeSet, PendingAction, PracticeProblem } from '../types';

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

export const practiceProblems: PracticeProblem[] = [
  // Operators (2/6 solved)
  { id: 'op1', title: 'Arithmetic Operators Basics', difficulty: 'Easy', status: 'Solved', xp: 50, topic: 'Operators' },
  { id: 'op2', title: 'Relational & Logical Operators', difficulty: 'Easy', status: 'Solved', xp: 50, topic: 'Operators' },
  { id: 'op3', title: 'Bitwise Left & Right Shift', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Operators' },
  { id: 'op4', title: 'Ternary Operator Practice', difficulty: 'Easy', status: 'In Progress', xp: 50, topic: 'Operators' },
  { id: 'op5', title: 'Operator Precedence Rules', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Operators' },
  { id: 'op6', title: 'Compound Assignment Challenges', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Operators' },

  // Conditionals (2/6 solved)
  { id: 'cond1', title: 'Basic If-Else Statement', difficulty: 'Easy', status: 'Solved', xp: 50, topic: 'Conditionals' },
  { id: 'cond2', title: 'Switch-Case Grade Checker', difficulty: 'Easy', status: 'Solved', xp: 50, topic: 'Conditionals' },
  { id: 'cond3', title: 'Nested If Conditions', difficulty: 'Medium', status: 'In Progress', xp: 100, topic: 'Conditionals' },
  { id: 'cond4', title: 'Leap Year Calculator', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Conditionals' },
  { id: 'cond5', title: 'Find Maximum of Three Numbers', difficulty: 'Easy', status: 'Unsolved', xp: 50, topic: 'Conditionals' },
  { id: 'cond6', title: 'Tax Bracket Calculator', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Conditionals' },

  // Loops (1/6 solved)
  { id: 'loop1', title: 'Sum of First N Numbers (For)', difficulty: 'Easy', status: 'Solved', xp: 50, topic: 'Loops' },
  { id: 'loop2', title: 'Factorial Calculator (While)', difficulty: 'Medium', status: 'In Progress', xp: 100, topic: 'Loops' },
  { id: 'loop3', title: 'Fibonacci Series Generator', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Loops' },
  { id: 'loop4', title: 'Prime Number Verification', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Loops' },
  { id: 'loop5', title: 'Pattern Printing - Pyramid', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Loops' },
  { id: 'loop6', title: 'Do-While Menu Driven Program', difficulty: 'Easy', status: 'Unsolved', xp: 50, topic: 'Loops' },

  // Functions (1/6 solved)
  { id: 'func1', title: 'Write Your First Function', difficulty: 'Easy', status: 'Solved', xp: 50, topic: 'Functions' },
  { id: 'func2', title: 'Area of Circle Calculator', difficulty: 'Easy', status: 'In Progress', xp: 50, topic: 'Functions' },
  { id: 'func3', title: 'Recursive Factorial Function', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Functions' },
  { id: 'func4', title: 'Function Overloading Challenge', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Functions' },
  { id: 'func5', title: 'Pass by Value vs Reference', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Functions' },
  { id: 'func6', title: 'Closure and Scope Practice', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Functions' },

  // Arrays (1/6 solved)
  { id: 'arr1', title: 'Find Min & Max in Array', difficulty: 'Easy', status: 'Solved', xp: 50, topic: 'Arrays' },
  { id: 'arr2', title: 'Reverse an Array in Place', difficulty: 'Easy', status: 'Unsolved', xp: 50, topic: 'Arrays' },
  { id: 'arr3', title: 'Search Element (Linear vs Binary)', difficulty: 'Medium', status: 'In Progress', xp: 100, topic: 'Arrays' },
  { id: 'arr4', title: 'Merge Two Sorted Arrays', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Arrays' },
  { id: 'arr5', title: 'Two Sum Problem', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Arrays' },
  { id: 'arr6', title: 'Rotate 2D Matrix (Rotate Image)', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Arrays' },

  // Strings (1/6 solved)
  { id: 'str1', title: 'Count Vowels and Consonants', difficulty: 'Easy', status: 'Solved', xp: 50, topic: 'Strings' },
  { id: 'str2', title: 'Palindrome String Check', difficulty: 'Easy', status: 'Unsolved', xp: 50, topic: 'Strings' },
  { id: 'str3', title: 'Reverse Words in a Sentence', difficulty: 'Medium', status: 'In Progress', xp: 100, topic: 'Strings' },
  { id: 'str4', title: 'Anagram Validation', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Strings' },
  { id: 'str5', title: 'String Substring Search (KMP)', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Strings' },
  { id: 'str6', title: 'Longest Substring Without Repeating', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Strings' },

  // Objects (1/6 solved)
  { id: 'obj1', title: 'Create Simple Student Object', difficulty: 'Easy', status: 'Solved', xp: 50, topic: 'Objects' },
  { id: 'obj2', title: 'Accessors & Mutators (Get/Set)', difficulty: 'Easy', status: 'Unsolved', xp: 50, topic: 'Objects' },
  { id: 'obj3', title: 'Object Serialization to JSON', difficulty: 'Medium', status: 'In Progress', xp: 100, topic: 'Objects' },
  { id: 'obj4', title: 'Inheritance and Prototype Chain', difficulty: 'Medium', status: 'Unsolved', xp: 100, topic: 'Objects' },
  { id: 'obj5', title: 'Deep Copy vs Shallow Copy', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Objects' },
  { id: 'obj6', title: 'Design Patterns: Singleton Object', difficulty: 'Hard', status: 'Unsolved', xp: 150, topic: 'Objects' },
];
