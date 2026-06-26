import React, { useState, useEffect } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { graphqlRequest } from '../../api';
import SectionHeader from '../layout/SectionHeader';
import PracticeCard from './PracticeCard';
import styles from './PracticeSection.module.css';

const PracticeSection: React.FC = () => {
  const [sets, setSets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
          setSets(data.listPracticeSets);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load practice sets from API:", err);
        setIsLoading(false);
      });
  }, []);

  const { startIndex, prev, next, canPrev, canNext } = useCarousel(sets.length, 3);
  const visible = sets.slice(startIndex, startIndex + 3);

  if (isLoading) {
    return (
      <section className={styles.section}>
        <SectionHeader title="Practice" canPrev={false} canNext={false} onPrev={() => {}} onNext={() => {}} />
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
};

export default PracticeSection;
