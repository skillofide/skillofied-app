import React, { useState, useEffect } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import SectionHeader from '../layout/SectionHeader';
import CourseCard from './CourseCard';
import styles from './CoursesSection.module.css';
import { getMyCoursesApi } from '../../api';

const CategoryRow: React.FC<{ title: string; courses: any[] }> = ({ title, courses }) => {
  const { startIndex, prev, next, canPrev, canNext } = useCarousel(courses.length, 3);
  const visible = courses.slice(startIndex, startIndex + 3);

  if (courses.length === 0) return null;

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <SectionHeader
        title={title}
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
    </div>
  );
};

const CoursesSection: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyCoursesApi()
      .then((data) => setCourses(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

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

  const devCourses = courses.filter(c => {
    const t = c.title.toLowerCase();
    return !t.includes('seo') && !t.includes('marketing');
  });
  
  const marketingCourses = courses.filter(c => {
    const t = c.title.toLowerCase();
    return t.includes('seo') || t.includes('marketing');
  });

  return (
    <section className={styles.section}>
      <CategoryRow title="Development Courses" courses={devCourses} />
      <CategoryRow title="Marketing Courses" courses={marketingCourses} />
    </section>
  );
};

export default CoursesSection;
