import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SyllabusModule } from '../types';

/**
 * Manages all sidebar navigation state and prev/next lesson navigation
 * for course pages. Extracted from both FrontendCoursePage and JavaCoursePage.
 */
export function useSyllabusNavigation(
  syllabus: SyllabusModule[],
  allItems: { id: string; title: string }[],
  initialItemId: string,
  maxIndexRead: number,
  setMaxIndexRead: (idx: number) => void,
) {
  const navigate = useNavigate();
  const [selectedItemId, setSelectedItemId] = useState<string>(initialItemId);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    overview: true,
    m1: true,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const currentIdx = allItems.findIndex(item => item.id === selectedItemId);

  // Track furthest lesson visited for progress calculation
  useEffect(() => {
    if (currentIdx > maxIndexRead) {
      setMaxIndexRead(currentIdx);
    }
  }, [selectedItemId, currentIdx, maxIndexRead, setMaxIndexRead]);

  const handleSelectSidebarItem = (itemId: string) => {
    setSelectedItemId(itemId);
    setIsMobileMenuOpen(false);
  };

  const toggleModuleExpanded = (modId: string) => {
    setExpandedModules(prev => ({ ...prev, [modId]: !prev[modId] }));
  };

  const handlePageNext = () => {
    if (currentIdx < allItems.length - 1) {
      const nextItem = allItems[currentIdx + 1];
      setSelectedItemId(nextItem.id);
      const nextMod = syllabus.find(m => nextItem.id.startsWith(m.id) || m.items.some(i => i.id === nextItem.id));
      if (nextMod) setExpandedModules(prev => ({ ...prev, [nextMod.id]: true }));
    }
  };

  const handlePagePrev = () => {
    if (currentIdx > 0) {
      const prevItem = allItems[currentIdx - 1];
      setSelectedItemId(prevItem.id);
      const prevMod = syllabus.find(m => prevItem.id.startsWith(m.id) || m.items.some(i => i.id === prevItem.id));
      if (prevMod) setExpandedModules(prev => ({ ...prev, [prevMod.id]: true }));
    }
  };

  const handleBackToCourses = () => navigate('/courses');

  const isFirstItem = currentIdx === 0;
  const isLastItem = currentIdx === allItems.length - 1;

  return {
    selectedItemId,
    expandedModules,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    currentIdx,
    handleSelectSidebarItem,
    toggleModuleExpanded,
    handlePageNext,
    handlePagePrev,
    handleBackToCourses,
    isFirstItem,
    isLastItem,
  };
}
