export interface Course {
  id: string;
  title: string;
  mentor: string;
  initial: string;
  color: string;
  progress: number;
  classTime: string;
  status: 'NOT STARTED' | 'IN PROGRESS' | 'COMPLETED';
}

export interface PracticeSet {
  id: string;
  title: string;
  category?: string;
  description?: string;
  level: string; // relax literal to allow string from backend
  levelColor: string;
  bgColor: string;
  progress: number;
  totalProblems: number;
  iconColor: string;
}

export interface PendingAction {
  id: string;
  title: string;
  type: string;
  topicsCount?: number;
  hasAlert: boolean;
}

export type TopicType = 'All' | 'Operators' | 'Conditionals' | 'Loops' | 'Functions' | 'Arrays' | 'Strings' | 'Objects' | 'Array' | 'String' | 'HashMap' | 'Linked List' | 'Tree' | 'Graph' | 'DP' | 'Stack/Queue' | 'Heap' | 'Backtracking' | 'Database' | 'Databases';

export interface PracticeProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'Solved' | 'Unsolved' | 'In Progress';
  xp: number;
  topic: TopicType;
  setId?: string;
}
export * from './course';
