import React from 'react';
import { courses } from '../../data/mockData';
import { useCarousel } from '../../hooks/useCarousel';
import SectionHeader from '../layout/SectionHeader';
import CourseCard from './CourseCard';
import styles from './CoursesSection.module.css';

const CoursesSection: React.FC = () => {
  const { startIndex, prev, next, canPrev, canNext } = useCarousel(courses.length, 3);
  const visible = courses.slice(startIndex, startIndex + 3);

  return (
    <section className={styles.section}>
      <SectionHeader
        title="Courses"
        onPrev={prev}
        onNext={next}
        canPrev={canPrev}
        canNext={canNext}
      />
      <div className={styles.grid}>
        {visible.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
