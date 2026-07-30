import { getQuizAttemptsApi, QuizAttempt } from '../../../api';

/**
 * Every ModuleQuiz instance wants the learner's previous attempt, but the API
 * returns all attempts in one call. This module-level cache means N mounted
 * quizzes share a single in-flight request instead of issuing N identical ones.
 */
let cache: Promise<QuizAttempt[]> | null = null;

export function getQuizAttemptsCached(): Promise<QuizAttempt[]> {
  if (!cache) {
    cache = getQuizAttemptsApi().catch((err) => {
      // Do not poison the cache — a transient failure should be retryable.
      cache = null;
      throw err;
    });
  }
  return cache;
}

/**
 * Called after a successful submission so the next read reflects the new score
 * rather than a stale one.
 */
export function invalidateQuizAttempts(): void {
  cache = null;
}
