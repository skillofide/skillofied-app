import React from 'react';
import { PendingAction } from '../../types';
import styles from './PendingActionCard.module.css';

interface Props {
  action: PendingAction;
}

const PendingActionCard: React.FC<Props> = ({ action }) => {
  const lightBgColor = '#fff0f2';
  const darkTextColor = '#d63031';

  const initial = action.title.charAt(0).toUpperCase();

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <div 
          className={styles.initial} 
          style={{ background: lightBgColor, color: darkTextColor }}
        >
          {initial}
        </div>
        <div className={styles.info}>
          <h3 className={styles.title} title={action.title}>{action.title}</h3>
          <p className={styles.level}>{action.type}</p>
        </div>
      </div>
    </div>
  );
};

export default PendingActionCard;
