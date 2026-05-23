import React from 'react';
import styles from './SectionHeader.module.css';

interface Props {
  title: string;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

const SectionHeader: React.FC<Props> = ({ title, onPrev, onNext, canPrev, canNext }) => (
  <div className={styles.header}>
    <div className={styles.titleRow}>
      <h2 className={styles.title}>{title}</h2>
      <button className={styles.helpBtn} aria-label="Help">?</button>
    </div>
    <div className={styles.controls}>
      <button className={styles.navBtn} onClick={onPrev} disabled={!canPrev} aria-label="Previous">
        &#8249;
      </button>
      <button className={styles.navBtn} onClick={onNext} disabled={!canNext} aria-label="Next">
        &#8250;
      </button>
    </div>
  </div>
);

export default SectionHeader;
