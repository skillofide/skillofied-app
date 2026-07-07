// Shared course syllabus types used by all course pages

export interface SyllabusItem {
  id: string;
  title: string;
}

export interface SyllabusModule {
  id: string;
  title: string;
  items: SyllabusItem[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}
