import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Course identity published by the active course page and rendered in the app
 * navbar. Putting it there frees the whole in-page header row for lesson
 * content, which matters most on the assignment and quiz screens.
 */
export interface CourseHeaderInfo {
  title: string;
  subtitle: string;
  /** 0-100 */
  progressPercent: number;
  /** Route the back control returns to. A path rather than a callback, so
   *  there is no stale closure held in context. */
  backTo: string;
}

interface CourseHeaderContextValue {
  header: CourseHeaderInfo | null;
  setHeader: (info: CourseHeaderInfo | null) => void;
  /** Syllabus drawer state, owned here so the navbar can toggle it. */
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const CourseHeaderContext = createContext<CourseHeaderContextValue>({
  header: null,
  setHeader: () => {},
  sidebarOpen: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

export const CourseHeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [header, setHeader] = useState<CourseHeaderInfo | null>(null);

  // The syllabus is a drawer, matching the main app sidebar: transient rather
  // than persisted, closed on every arrival, and opened from the navbar.
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Lock page scrolling while the drawer is open, as the main sidebar does.
  useEffect(() => {
    if (!sidebarOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  // Leaving the course closes the drawer, so it never reappears over an
  // unrelated page.
  const { pathname } = useLocation();
  useEffect(() => setSidebarOpen(false), [pathname]);

  const value = useMemo(
    () => ({
      header,
      setHeader,
      sidebarOpen,
      toggleSidebar: () => setSidebarOpen((o) => !o),
      closeSidebar: () => setSidebarOpen(false),
    }),
    [header, sidebarOpen]
  );
  return <CourseHeaderContext.Provider value={value}>{children}</CourseHeaderContext.Provider>;
};

/** Read the current course header — used by the navbar. */
export const useCourseHeader = () => useContext(CourseHeaderContext);

/**
 * Publish this page's course header to the navbar while the page is mounted,
 * clearing it on unmount so other sections never show stale course details.
 */
export function usePublishCourseHeader(info: CourseHeaderInfo) {
  const { setHeader } = useContext(CourseHeaderContext);
  const { title, subtitle, progressPercent, backTo } = info;

  useEffect(() => {
    setHeader({ title, subtitle, progressPercent, backTo });
    return () => setHeader(null);
  }, [title, subtitle, progressPercent, backTo, setHeader]);
}
