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
  /**
   * Authoring-time source of truth for the answer key. It is consumed by
   * dashbord_backend/scripts/gen-quiz-seed.js to seed the server-side
   * quiz_keys table, and is STRIPPED from production builds by the
   * stripQuizAnswers Vite plugin — see vite.config.ts.
   *
   * Never read this at runtime. Grading is done server-side, and the correct
   * answer is returned only in the submission response.
   */
  correctAnswer?: string;
}
