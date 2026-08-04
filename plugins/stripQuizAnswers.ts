import type { Plugin } from 'vite';

/**
 * Removes `correctAnswer` properties from course content modules at build time.
 *
 * The answer key has to live in the course data files because that is the
 * authoring surface, and because dashbord_backend/scripts/gen-quiz-seed.js
 * reads it to seed the server-side quiz_keys table. But shipping it to the
 * browser would let anyone read every answer straight out of the JS bundle.
 *
 * Quizzes are graded server-side (see ModuleQuiz.tsx), so nothing at runtime
 * needs this property — it is safe to strip. Only the course content files are
 * touched, so an unrelated `correctAnswer` elsewhere is left alone.
 */

const TARGET = /[\\/]components[\\/]courses[\\/].*\.(ts|tsx)$/;

/**
 * Matches a `correctAnswer: '...'` / `"..."` property, including any trailing
 * comma and surrounding whitespace. The string body allows escaped characters
 * so answers containing quotes or apostrophes are handled correctly.
 */
const PROPERTY = /(,?)\s*(?:correctAnswer|"correctAnswer"|'correctAnswer')\s*:\s*(['"])(?:[^\\]|\\.)*?\2\s*(,?)/g;

export interface StripQuizAnswersOptions {
  /** Emit a per-file count of removed properties. */
  verbose?: boolean;
}

export function stripQuizAnswers(options: StripQuizAnswersOptions = {}): Plugin {
  let enabled = false;
  let totalRemoved = 0;
  let filesTouched = 0;

  return {
    name: 'strip-quiz-answers',
    // Run before other transforms so the property never reaches the bundler.
    enforce: 'pre',

    configResolved(config) {
      // Development keeps the answers so the data files stay easy to inspect;
      // only the shipped artifact is stripped.
      enabled = config.command === 'build';
    },

    transform(code, id) {
      if (!enabled) return null;
      if (!TARGET.test(id)) return null;
      if (!code.includes('correctAnswer')) return null;

      let removed = 0;
      const out = code.replace(PROPERTY, (_match, leadingComma, _quote, trailingComma) => {
        removed++;
        // Keep exactly one comma if the property sat between two others,
        // so the surrounding object literal stays valid.
        return leadingComma && trailingComma ? ',' : leadingComma || trailingComma || '';
      });

      if (removed === 0) return null;

      totalRemoved += removed;
      filesTouched++;
      if (options.verbose) {
        this.info(`stripped ${removed} correctAnswer properties from ${id}`);
      }

      return { code: out, map: null };
    },

    buildEnd() {
      if (!enabled) return;
      this.info(
        `strip-quiz-answers: removed ${totalRemoved} answer keys from ${filesTouched} course files`
      );
    },
  };
}

export default stripQuizAnswers;
