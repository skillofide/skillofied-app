import { useState, useEffect } from 'react';

/**
 * Manages course progress tracking with localStorage persistence.
 * Tracks the furthest lesson index the user has visited.
 */
export function useCourseProgress(storageKey: string, totalItems: number) {
  const [maxIndexRead, setMaxIndexRead] = useState<number>(0);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedIdx = localStorage.getItem(storageKey);
    if (savedIdx) {
      const idx = parseInt(savedIdx, 10);
      if (!isNaN(idx)) setMaxIndexRead(idx);
    }
  }, [storageKey]);

  // Save progress to localStorage whenever it advances
  useEffect(() => {
    if (maxIndexRead > 0) {
      localStorage.setItem(storageKey, maxIndexRead.toString());
    }
  }, [maxIndexRead, storageKey]);

  const progressPercent = Math.round(((maxIndexRead + 1) / totalItems) * 100);

  return { maxIndexRead, setMaxIndexRead, progressPercent };
}
