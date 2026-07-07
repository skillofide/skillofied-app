import React, { useState, useEffect } from 'react';
import styles from './TodaySchedule.module.css';

interface ScheduleItem {
  id: string;
  title: string;
  icon: string;
  startHour: number;
  endHour: number;
  themeClass: string;
  isAbove: boolean;
}

const SCHEDULE_DATA: ScheduleItem[] = [
  {
    id: '1',
    title: 'Java',
    icon: '☕',
    startHour: 9.0, // 09:00
    endHour: 11.5,  // 11:30
    themeClass: styles.classBlockJava,
    isAbove: true
  },
  {
    id: '2',
    title: 'Front-End',
    icon: '🌐',
    startHour: 11.25, // 11:15
    endHour: 13.25,   // 13:15
    themeClass: styles.classBlockFrontend,
    isAbove: false
  }
];

const formatTimeFromDecimal = (decimalTime: number) => {
  const hours = Math.floor(decimalTime);
  const minutes = Math.round((decimalTime - hours) * 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const TodaySchedule: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // update every 30 seconds
    return () => clearInterval(timer);
  }, []);

  // Format date: SUN · JUL 05
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  const dayName = days[currentTime.getDay()];
  const monthName = months[currentTime.getMonth()];
  const dateNum = String(currentTime.getDate()).padStart(2, '0');
  const dateString = `${dayName} · ${monthName} ${dateNum}`;

  // Time calculations
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const timeDecimal = currentHour + currentMinute / 60;
  
  // Determine dynamic bounds from data (default 9-14 if empty)
  let minHour = SCHEDULE_DATA.length > 0 ? Math.min(...SCHEDULE_DATA.map(s => s.startHour)) : 9;
  let maxHour = SCHEDULE_DATA.length > 0 ? Math.max(...SCHEDULE_DATA.map(s => s.endHour)) : 14;
  
  // Add some padding to bounds
  const startTimelineHour = Math.floor(minHour);
  const endTimelineHour = Math.ceil(maxHour);
  const totalDuration = endTimelineHour - startTimelineHour;

  // Calculate NOW indicator percentage position along the timeline
  let nowPosPercent = 46.5; // Default mockup pos
  if (timeDecimal >= startTimelineHour && timeDecimal <= endTimelineHour) {
    nowPosPercent = 3 + ((timeDecimal - startTimelineHour) / totalDuration) * 94; // map to 3% - 97% range
  } else if (timeDecimal < startTimelineHour) {
    nowPosPercent = 3;
  } else {
    nowPosPercent = 97;
  }

  // Calculate countdown text based on dynamic data
  let nextUpText = 'no more classes today';
  const upcomingClasses = SCHEDULE_DATA.filter(s => s.startHour > timeDecimal).sort((a, b) => a.startHour - b.startHour);
  
  if (upcomingClasses.length > 0) {
    const nextClass = upcomingClasses[0];
    const diffMins = Math.round((nextClass.startHour - timeDecimal) * 60);
    nextUpText = `next up in ${diffMins} min`;
  } else if (timeDecimal < startTimelineHour && SCHEDULE_DATA.length > 0) {
    nextUpText = 'classes starting soon';
  } else {
    nextUpText = 'next up tomorrow';
  }

  return (
    <div className={styles.scheduleCard}>
      {/* Top Header Row */}
      <div className={styles.headerRow}>
        <div>
          <h2 className={styles.title}>Today’s schedule</h2>
          <p className={styles.subtitle}>3 classes · {nextUpText}</p>
        </div>
        <div className={styles.dateLabel}>{dateString}</div>
      </div>

      {/* Timeline & Blocks Area */}
      <div className={styles.timelineArea}>
        {/* Dynamic Class Blocks */}
        {SCHEDULE_DATA.map(item => {
          const leftPercent = 3 + ((item.startHour - startTimelineHour) / totalDuration) * 94;
          const widthPercent = ((item.endHour - item.startHour) / totalDuration) * 94;
          return (
            <div 
              key={item.id}
              className={item.themeClass}
              style={{ left: `${leftPercent}%`, width: `${widthPercent}%`, bottom: item.isAbove ? '55%' : 'auto', top: item.isAbove ? 'auto' : '55%' }}
            >
              <span className={styles.classIcon}>{item.icon}</span>
              <span className={styles.classText}>{item.title} · {formatTimeFromDecimal(item.startHour)}–{formatTimeFromDecimal(item.endHour)}</span>
            </div>
          );
        })}

        {/* Horizontal Timeline Ruler Line */}
        <div className={styles.rulerLine} />

        {/* Timeline Hour Marks and Labels */}
        <div className={styles.hourMarksContainer}>
          {Array.from({ length: totalDuration + 1 }).map((_, i) => {
            const hour = startTimelineHour + i;
            const posPercent = 3 + (i / totalDuration) * 94;
            return (
              <div 
                key={hour} 
                className={styles.hourMarkWrapper} 
                style={{ left: `${posPercent}%` }}
              >
                <div className={styles.hourDot} />
                <span className={styles.hourText}>{`${hour.toString().padStart(2, '0')}:00`}</span>
              </div>
            );
          })}
        </div>

        {/* Vertical NOW Indicator Line and Badge */}
        <div className={styles.nowIndicator} style={{ left: `${nowPosPercent}%` }}>
          <div className={styles.nowBadge}>NOW</div>
          <div className={styles.nowLine} />
        </div>
      </div>
    </div>
  );
};

export default TodaySchedule;
