import { useCallback, useEffect, useRef, useState } from 'react';
import { SaveAnswerInput, saveAnswerApi } from '../../../../api';

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'offline';

/**
 * Debounced answer autosave with an offline queue.
 *
 * Answers are keyed by question id, so rapid changes to one question collapse
 * into a single request while answers to *different* questions are all kept.
 * A failed save stays queued and is retried — losing a candidate's answer to a
 * five-second network blip would be the worst possible bug in a timed test.
 */
export function useAutosave(onSecondsLeft: (seconds: number) => void) {
  const pending = useRef<Map<string, SaveAnswerInput>>(new Map());
  const timer = useRef<number | null>(null);
  const inFlight = useRef(false);
  const [status, setStatus] = useState<SaveStatus>('idle');

  const flush = useCallback(async () => {
    if (inFlight.current || pending.current.size === 0) return;
    inFlight.current = true;
    setStatus('saving');

    // Take a snapshot; anything queued while we are in flight is picked up on
    // the next pass rather than lost.
    const batch = Array.from(pending.current.entries());
    let failed = false;

    for (const [questionId, input] of batch) {
      try {
        const res = await saveAnswerApi(input);
        pending.current.delete(questionId);
        onSecondsLeft(res.secondsLeft);
      } catch {
        failed = true;
        break; // keep the rest queued and stop hammering a broken connection
      }
    }

    inFlight.current = false;
    setStatus(failed ? 'offline' : 'saved');

    if (failed) {
      timer.current = window.setTimeout(flush, 4000);
    } else if (pending.current.size > 0) {
      void flush();
    }
  }, [onSecondsLeft]);

  const queue = useCallback((input: SaveAnswerInput) => {
    pending.current.set(input.questionId, input);
    setStatus('saving');
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(flush, 700);
  }, [flush]);

  /** Forces an immediate flush — used right before submitting the test. */
  const flushNow = useCallback(async () => {
    if (timer.current) window.clearTimeout(timer.current);
    await flush();
  }, [flush]);

  // Retry as soon as the browser says the connection is back.
  useEffect(() => {
    const onOnline = () => { void flush(); };
    window.addEventListener('online', onOnline);
    return () => window.removeEventListener('online', onOnline);
  }, [flush]);

  // A refresh mid-test would drop anything still queued; warn the candidate.
  useEffect(() => {
    const beforeUnload = (e: BeforeUnloadEvent) => {
      if (pending.current.size > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', beforeUnload);
    return () => window.removeEventListener('beforeunload', beforeUnload);
  }, []);

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);

  return { queue, flushNow, status, pendingCount: pending.current.size };
}
