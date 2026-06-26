import React, { useState, useEffect } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import SectionHeader from '../layout/SectionHeader';
import CourseCard from './CourseCard';
import styles from './CoursesSection.module.css';
import { getMyCoursesApi } from '../../api';

const CoursesSection: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyCoursesApi()
      .then((data) => setCourses(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const { startIndex, prev, next, canPrev, canNext } = useCarousel(courses.length, 3);
  const visible = courses.slice(startIndex, startIndex + 3);

  if (loading) {
    return (
      <section className={styles.section}>
        <SectionHeader title="Courses" />
        <div className={styles.grid}>
          <p style={{ color: 'var(--text-secondary)' }}>Loading courses...</p>
        </div>
      </section>
    );
  }

  if (courses.length === 0) {
    return (
      <section className={styles.section}>
        <SectionHeader title="Courses" />
        <div className={styles.grid}>
          <p style={{ color: 'var(--text-secondary)' }}>You are not enrolled in any courses yet.</p>
        </div>
      </section>
    );
  }

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
