import React from 'react';
import { practiceSets } from '../../data/mockData';
import { useCarousel } from '../../hooks/useCarousel';
import SectionHeader from '../layout/SectionHeader';
import PracticeCard from './PracticeCard';
import styles from './PracticeSection.module.css';

const PracticeSection: React.FC = () => {
  const { startIndex, prev, next, canPrev, canNext } = useCarousel(practiceSets.length, 3);
  const visible = practiceSets.slice(startIndex, startIndex + 3);

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
