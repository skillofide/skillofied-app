import React from 'react';
import { SyllabusModule } from '../../../types';
import { useCourseProgress } from '../../../hooks/useCourseProgress';
import { useSyllabusNavigation } from '../../../hooks/useSyllabusNavigation';
import LockedModuleCard from './LockedModuleCard';
import styles from '../FrontendCoursePage.module.css';

interface CoursePageShellProps {
  /** The full syllabus tree for this course */
  syllabus: SyllabusModule[];
  /** Main heading shown in the top header */
  courseTitle: string;
  /** Subtitle shown under the header */
  courseSubtitle: string;
  /** Sidebar sub-label (e.g. "Frontend Mastery" or "Java Mastery") */
  sidebarSubtitle: string;
  /** localStorage key used to persist this course's progress separately */
  storageKey: string;
  /** The module ID that must be completed before others are unlocked */
  unlockAfterModuleId: string;
  /** Human-readable name shown in the lock card (e.g. "Module 1: Introduction") */
  unlockModuleName: string;
  /**
   * Course-specific content renderer. Called with the current moduleId
   * and the 1-indexed page number within that module.
   */
  renderContent: (moduleId: string, page: number) => React.ReactNode;
}

/**
 * CoursePageShell
 *
 * Provides the complete course-viewer UI shell: sidebar syllabus tree,
 * mobile hamburger menu, progress bar, prev/next navigation, and locked-
 * module gate. All course-specific content is injected via `renderContent`.
 *
 * Used by both FrontendCoursePage and JavaCoursePage.
 */
const CoursePageShell: React.FC<CoursePageShellProps> = ({
  syllabus,
  courseTitle,
  courseSubtitle,
  sidebarSubtitle,
  storageKey,
  unlockAfterModuleId,
  unlockModuleName,
  renderContent,
}) => {
  // Flatten all items for sequential navigation
  const allItems = syllabus.flatMap(mod => mod.items);

  // Progress tracking (localStorage-backed)
  const { maxIndexRead, setMaxIndexRead, progressPercent } = useCourseProgress(
    storageKey,
    allItems.length,
  );

  // All navigation state and handlers
  const {
    selectedItemId,
    expandedModules,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleSelectSidebarItem,
    toggleModuleExpanded,
    handlePageNext,
    handlePagePrev,
    handleBackToCourses,
    isFirstItem,
    isLastItem,
  } = useSyllabusNavigation(syllabus, allItems, 'overview-welcome', maxIndexRead, setMaxIndexRead);

  // ─── Content Rendering ──────────────────────────────────────────────────────
  const renderMainContent = () => {
    // Find the module that owns the currently selected item
    const currentModule = syllabus.find(
      m => m.items.some(item => item.id === selectedItemId),
    );
    if (!currentModule) return null;

    const moduleItemIndex = currentModule.items.findIndex(item => item.id === selectedItemId);
    const pageNum = moduleItemIndex !== -1 ? moduleItemIndex + 1 : 1;

    // Calculate the index of the last item in the unlock-prerequisite module
    const unlockModule = syllabus.find(m => m.id === unlockAfterModuleId);
    if (!unlockModule) return null;
    const lastUnlockItem = unlockModule.items[unlockModule.items.length - 1];
    const lastUnlockIndex = allItems.findIndex(item => item.id === lastUnlockItem.id);

    const isLocked =
      currentModule.id !== 'overview' &&
      currentModule.id !== unlockAfterModuleId &&
      !selectedItemId.startsWith('overview') &&
      maxIndexRead < lastUnlockIndex;

    if (isLocked) {
      return (
        <LockedModuleCard
          currentModule={currentModule}
          selectedItemId={selectedItemId}
          unlockModuleName={unlockModuleName}
        />
      );
    }

    return renderContent(currentModule.id, pageNum);
  };

  return (
    <div className={styles.appLayout}>
      {/* Mobile Sidebar Overlay Mask */}
      <div
        className={`${styles.sidebarOverlay} ${isMobileMenuOpen ? styles.sidebarOverlayVisible : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Left Sidebar Panel (Syllabus tree) */}
      <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Syllabus Navigator</h2>
          <p className={styles.sidebarSubtitle}>{sidebarSubtitle}</p>
        </div>

        <nav className={styles.syllabusList}>
          {syllabus.map(mod => {
            const isExpanded = !!expandedModules[mod.id];
            const isActive = mod.items.some(item => item.id === selectedItemId);
            return (
              <div key={mod.id} className={styles.moduleBlock}>
                <button
                  className={`${styles.moduleHeader} ${isActive ? styles.moduleHeaderActive : ''}`}
                  onClick={() => toggleModuleExpanded(mod.id)}
                >
                  <span style={{ flex: 1 }}>{mod.title}</span>
                  <span className={`${styles.moduleArrow} ${isExpanded ? styles.moduleArrowExpanded : ''}`}>
                    ▶
                  </span>
                </button>

                {isExpanded && (
                  <div className={styles.moduleItemsList}>
                    {mod.items.map(item => {
                      const isItemActive = selectedItemId === item.id;
                      return (
                        <button
                          key={item.id}
                          className={`${styles.moduleItemLink} ${isItemActive ? styles.moduleItemLinkActive : ''}`}
                          onClick={() => handleSelectSidebarItem(item.id)}
                          title={item.title}
                        >
                          {item.title}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Right Main Study Area */}
      <main className={styles.mainArea}>
        {/* Mobile Bar with Hamburger menu */}
        <div className={styles.mobileBar}>
          <button
            className={styles.menuToggleBtn}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open syllabus menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)' }}>
            Syllabus Menu
          </span>
        </div>

        <div className={styles.container}>
          {/* Top Header */}
          <div className={styles.topHeader}>
            <button className={styles.backBtn} onClick={handleBackToCourses}>
              ← Back to Dashboard
            </button>
            <div className={styles.headerTitleBlock}>
              <h1 className={styles.moduleTitle}>{courseTitle}</h1>
              <p className={styles.courseName}>{courseSubtitle}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressWrapper}>
            <div className={styles.progressLabelRow}>
              <span>Progress</span>
              <span>{progressPercent}% Complete</span>
            </div>
            <div className={styles.progressBarTrack}>
              <div className={styles.progressBarFill} style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          {/* Main Content Card */}
          <div className={styles.card}>
            {renderMainContent()}
          </div>

          {/* Navigation Buttons */}
          <div className={styles.footer}>
            <button
              className={styles.navBtn}
              onClick={handlePagePrev}
              disabled={isFirstItem}
            >
              ← Previous Lesson
            </button>
            <button
              className={`${styles.navBtn} ${isLastItem ? styles.navBtnActive : ''}`}
              onClick={isLastItem ? handleBackToCourses : handlePageNext}
            >
              {isLastItem ? 'Finish Course' : 'Next Lesson →'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePageShell;
