import React, { useState, useEffect } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { graphqlRequest } from '../../api';
import { practiceSetMetadata } from '../../data/mockData';
import SectionHeader from '../layout/SectionHeader';
import PracticeCard from './PracticeCard';
import styles from './PracticeSection.module.css';

interface PracticeSectionProps {
  isHomePage?: boolean;
}

const PracticeSection: React.FC<PracticeSectionProps> = ({ isHomePage = false }) => {
  const [sets, setSets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Call hooks unconditionally at the top level
  const carousel = useCarousel(sets.length, 3);

  useEffect(() => {
    graphqlRequest(`
      query {
        listPracticeSets {
          id
          title
          level
          levelColor
          bgColor
          totalProblems
          progress
        }
      }
    `)
      .then((data) => {
        if (data && data.listPracticeSets) {
          const fetchedSets = [...data.listPracticeSets];
          
          // Enrich with category and description
          const enrichedSets = fetchedSets.map(s => {
             const meta = practiceSetMetadata[s.id];
             return {
               ...s,
               category: meta?.category || 'General Practice',
               description: meta?.description || 'Test your skills with these challenges.',
             };
          });

          setSets(enrichedSets);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load practice sets from API:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.section}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
          Loading practice sets...
        </div>
      </section>
    );
  }

  // If the user has no practice sets, hide the entire section.
  if (sets.length === 0) {
    return null;
  }

  if (isHomePage) {
    const { startIndex, prev, next, canPrev, canNext } = carousel;
    const visible = sets.slice(startIndex, startIndex + 3);

    return (
      <section className={styles.section}>
        <SectionHeader
          title="Practice"
          onPrev={prev}
          onNext={next}
          canPrev={canPrev}
          canNext={canNext}
        />
        <div className={styles.grid}>
          {visible.map((ps) => (
            <PracticeCard key={ps.id} practiceSet={ps} />
          ))}
        </div>
      </section>
    );
  }

  // Group sets by category for practice page
  const groupedSets = sets.reduce((acc, set) => {
    const cat = set.category || 'General Practice';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(set);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <section className={styles.section}>
      {Object.entries(groupedSets).map(([category, categorySets]) => (
        <div key={category} className={styles.categoryGroup}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.grid}>
            {(categorySets as any[]).map((ps: any) => (
              <PracticeCard key={ps.id} practiceSet={ps} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PracticeSection;
