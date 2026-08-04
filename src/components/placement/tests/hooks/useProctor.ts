import { useCallback, useEffect, useRef, useState } from 'react';
import { Proctoring, recordProctorEventApi } from '../../../../api';

/**
 * Client-side integrity signals for a live attempt.
 *
 * These are evidence, not a verdict. The browser cannot actually tell a second
 * monitor from a notification popup, so everything here is reported to the
 * server, weighed there, and shown to the recruiter — only an explicitly
 * configured tab-switch limit ends a test, and the server makes that call.
 */
export function useProctor(
  attemptId: string,
  config: Proctoring | undefined,
  active: boolean,
  onTerminated: (message: string) => void,
) {
  const [warning, setWarning] = useState('');
  const activeRef = useRef(active);
  activeRef.current = active;
  // Set while we release fullscreen ourselves, so the resulting
  // fullscreenchange is not mistaken for the candidate escaping the test.
  const intentionalExit = useRef(false);

  const report = useCallback(async (kind: string, detail = '') => {
    if (!activeRef.current || !attemptId) return;
    try {
      const res = await recordProctorEventApi(attemptId, kind, detail);
      if (res.warning) setWarning(res.warning);
      if (res.terminated) onTerminated(res.warning || 'Your test was ended by the proctor.');
    } catch {
      // A dropped signal must never interrupt the candidate's test.
    }
  }, [attemptId, onTerminated]);

  // Leaving the tab or window.
  useEffect(() => {
    if (!active) return;
    const onVisibility = () => { if (document.hidden) void report('tab_blur'); };
    const onBlur = () => void report('tab_blur', 'window blur');
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('blur', onBlur);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('blur', onBlur);
    };
  }, [active, report]);

  // Fullscreen enforcement.
  useEffect(() => {
    if (!active || !config?.requireFullscreen) return;
    const onChange = () => {
      if (document.fullscreenElement) return;
      // Leaving fullscreen because we ended the test is not a breach — without
      // this the candidate's own submit would cost them integrity points.
      if (intentionalExit.current) {
        intentionalExit.current = false;
        return;
      }
      void report('fullscreen_exit');
    };
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, [active, config?.requireFullscreen, report]);

  // Copy/paste. Blocking is best-effort — the point is the audit trail.
  useEffect(() => {
    if (!active || !config?.blockCopyPaste) return;
    const onPaste = (e: ClipboardEvent) => {
      const size = e.clipboardData?.getData('text')?.length ?? 0;
      void report('paste', `${size} characters`);
    };
    const onCopy = () => void report('copy');
    document.addEventListener('paste', onPaste);
    document.addEventListener('copy', onCopy);
    return () => {
      document.removeEventListener('paste', onPaste);
      document.removeEventListener('copy', onCopy);
    };
  }, [active, config?.blockCopyPaste, report]);

  const enterFullscreen = useCallback(async () => {
    if (!config?.requireFullscreen || document.fullscreenElement) return;
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      // Browsers only grant fullscreen from a user gesture; if it is refused
      // the test still runs and the exit events simply never fire.
    }
  }, []);

  // exitFullscreen releases the candidate's screen once the test is over. The
  // intentionalExit flag is set first so the fullscreenchange listener does not
  // log the release as a breach.
  const exitFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) return;
    intentionalExit.current = true;
    try {
      await document.exitFullscreen();
    } catch {
      intentionalExit.current = false;
    }
  }, []);

  // Backstop: however the player unmounts — submit, timeout, disqualification,
  // or the candidate navigating away — the browser must not be left locked in
  // fullscreen.
  useEffect(() => () => {
    if (document.fullscreenElement) {
      intentionalExit.current = true;
      void document.exitFullscreen().catch(() => {});
    }
  }, []);

  const dismissWarning = useCallback(() => setWarning(''), []);

  return { warning, dismissWarning, enterFullscreen, exitFullscreen, report };
}
