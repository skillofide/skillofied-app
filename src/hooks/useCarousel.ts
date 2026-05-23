import { useState } from 'react';

export function useCarousel(totalItems: number, visibleCount: number = 3) {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = Math.max(0, totalItems - visibleCount);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxIndex, i + 1));

  const canPrev = startIndex > 0;
  const canNext = startIndex < maxIndex;

  return { startIndex, prev, next, canPrev, canNext };
}
