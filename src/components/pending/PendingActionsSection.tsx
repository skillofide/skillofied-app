import React from 'react';
import { pendingActions } from '../../data/mockData';
import { useCarousel } from '../../hooks/useCarousel';
import SectionHeader from '../layout/SectionHeader';
import PendingActionCard from './PendingActionCard';
import styles from './PendingActionsSection.module.css';

const PendingActionsSection: React.FC = () => {
  const { startIndex, prev, next, canPrev, canNext } = useCarousel(pendingActions.length, 3);
  const visible = pendingActions.slice(startIndex, startIndex + 3);

  return (
    <section className={styles.section}>
      <SectionHeader
        title="Pending Actions"
        onPrev={prev}
        onNext={next}
        canPrev={canPrev}
        canNext={canNext}
      />
      <div className={styles.grid}>
        {visible.map((action) => (
          <PendingActionCard key={action.id} action={action} />
        ))}
      </div>
    </section>
  );
};

export default PendingActionsSection;
