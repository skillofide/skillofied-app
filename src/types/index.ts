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
  level: 'advanced Challenge' | 'intermediate Challenge' | 'beginner Challenge';
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
