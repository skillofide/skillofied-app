import { useEffect, useRef, useState } from 'react';

/**
 * Counts down to the attempt deadline.
 *
 * The server's `secondsLeft` is the only authority — the browser clock is used
 * purely to tick between server responses, and every server value snaps the
 * display back into line. That way a candidate whose machine clock is wrong (or
 * who tries changing it) still sees, and gets, the real remaining time.
 *
 * `onExpire` fires once when the local countdown reaches zero; the server will
 * have auto-submitted independently, so this is only about reacting in the UI.
 */
export function useAttemptTimer(serverSecondsLeft: number | null, onExpire: () => void) {
  const [remaining, setRemaining] = useState<number>(serverSecondsLeft ?? 0);
  const anchor = useRef<{ seconds: number; at: number } | null>(null);
  const expired = useRef(false);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  // Re-anchor whenever the server tells us the truth again.
  useEffect(() => {
    if (serverSecondsLeft === null || serverSecondsLeft === undefined) return;
    anchor.current = { seconds: serverSecondsLeft, at: Date.now() };
    setRemaining(serverSecondsLeft);
    if (serverSecondsLeft > 0) expired.current = false;
  }, [serverSecondsLeft]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!anchor.current) return;
      const elapsed = Math.floor((Date.now() - anchor.current.at) / 1000);
      const left = Math.max(anchor.current.seconds - elapsed, 0);
      setRemaining(left);
      if (left === 0 && !expired.current) {
        expired.current = true;
        onExpireRef.current();
      }
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return remaining;
}

/** Formats seconds as H:MM:SS, or MM:SS under an hour. */
export function formatDuration(totalSeconds: number): string {
  const s = Math.max(totalSeconds, 0);
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
}
