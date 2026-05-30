import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { practiceSets, practiceProblems as initialProblems } from '../../data/mockData';
import { TopicType, PracticeProblem } from '../../types';
import { graphqlRequest } from '../../api';
import TopicChip from '../common/TopicChip';
import styles from './PracticeDetail.module.css';

const PracticeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [currentSet, setCurrentSet] = useState<any>(null);
  const [problems, setProblems] = useState<PracticeProblem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTopic, setActiveTopic] = useState<TopicType>('All');

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
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
      `),
      graphqlRequest(`
        query($setId: String) {
          listProblems(setId: $setId) {
            problems {
              id
              slug
              title
              difficulty
              topic
              xp
              setId
              userStatus
            }
          }
        }
      `, { setId: id })
    ])
      .then(([setData, probData]) => {
        if (setData && setData.listPracticeSets) {
          const found = setData.listPracticeSets.find((s: any) => s.id === id);
          if (found) {
            setCurrentSet(found);
          } else {
            setCurrentSet(practiceSets.find((ps) => ps.id === id) || practiceSets[2]);
          }
        } else {
          setCurrentSet(practiceSets.find((ps) => ps.id === id) || practiceSets[2]);
        }

        if (probData && probData.listProblems && probData.listProblems.problems) {
          const list = probData.listProblems.problems.map((p: any) => ({
            id: p.id,
            slug: p.slug,
            title: p.title,
            difficulty: p.difficulty,
            topic: p.topic,
            xp: p.xp,
            setId: p.setId,
            status: (p.userStatus === 'Solved' ? 'Solved' : (p.userStatus === 'InProgress' ? 'In Progress' : 'Unsolved')) as any
          }));
          setProblems(list);
        } else {
          setProblems(initialProblems);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load details from API:", err);
        setCurrentSet(practiceSets.find((ps) => ps.id === id) || practiceSets[2]);
        setProblems(initialProblems);
        setIsLoading(false);
      });
  }, [id]);

  // Navigate back to practice dashboard
  const handleBack = () => {
    navigate('/practice');
  };

  // Navigate to Solve Problem Workspace
  const handleSolve = (problemId: string) => {
    navigate(`/problems/${problemId}/solve`);
  };

  // Helper to compute topic stats
  const getTopicStats = (topic: TopicType) => {
    const topicProbs = topic === 'All' 
      ? problems 
      : problems.filter((p) => p.topic === topic);
    const solved = topicProbs.filter((p) => p.status === 'Solved').length;
    return {
      solved,
      total: topicProbs.length,
    };
  };

  // Filtered problems list based on active chip
  const filteredProblems = activeTopic === 'All'
    ? problems
    : problems.filter((p) => p.topic === activeTopic);

  const topics: TopicType[] = [
    'All',
    'Operators',
    'Conditionals',
    'Loops',
    'Functions',
    'Arrays',
    'Strings',
    'Objects',
  ];

  // Calculate overall completion percent based on current solved problems
  const totalSolved = problems.filter((p) => p.status === 'Solved').length;
  const overallProgress = (totalSolved / problems.length) * 100;

  if (isLoading || !currentSet) {
    return (
      <div className={styles.container} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', color: 'var(--text-secondary)' }}>
        Loading challenges...
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Back Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={handleBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to Practice</span>
        </button>
      </div>

      {/* Hero card / Intro */}
      <div className={styles.heroCard}>
        <div className={styles.heroLeft}>
          <div className={styles.titleBlock}>
            <span className={styles.badge}>Practice Set</span>
            <h1 className={styles.title}>{currentSet.title}</h1>
            <p className={styles.description}>
              Master core concepts through interactive challenges. Build your problem-solving skills step-by-step.
            </p>
          </div>
          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Difficulty:</span>
              <span className={styles.metaVal} style={{ color: currentSet.levelColor }}>
                {currentSet.level}
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Total Problems:</span>
              <span className={styles.metaVal}>{problems.length} Challenges</span>
            </div>
          </div>
        </div>

        {/* Progress Display */}
        <div className={styles.heroRight}>
          <div className={styles.progressContainer}>
            <div className={styles.progressText}>
              <span className={styles.progressLabel}>Overall Progress</span>
              <span className={styles.progressPercent}>{overallProgress.toFixed(1)}%</span>
            </div>
            <div className={styles.progressBarWrapper}>
              <div 
                className={styles.progressBarFill} 
                style={{ width: `${overallProgress}%`, backgroundColor: currentSet.levelColor }}
              />
            </div>
            <span className={styles.solvedCount}>
              {totalSolved} of {problems.length} solved
            </span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className={styles.filterSection}>
        <h2 className={styles.filterTitle}>FILTER BY TOPIC</h2>
        <div className={styles.chipsGrid}>
          {topics.map((topic) => {
            const { solved, total } = getTopicStats(topic);
            return (
              <TopicChip
                key={topic}
                topic={topic}
                isActive={activeTopic === topic}
                solvedCount={solved}
                totalCount={total}
                onClick={() => setActiveTopic(topic)}
              />
            );
          })}
        </div>
      </div>

      {/* Problems List */}
      <div className={styles.problemsSection}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.subTitle}>
            {activeTopic === 'All' ? 'All Challenges' : `${activeTopic} Challenges`}
          </h3>
          <span className={styles.resultsCount}>{filteredProblems.length} results</span>
        </div>

        <div className={styles.problemsGrid}>
          {filteredProblems.map((prob) => {
            const isSolved = prob.status === 'Solved';
            const isInProgress = prob.status === 'In Progress';

            return (
              <div 
                key={prob.id} 
                className={`${styles.problemCard} ${isSolved ? styles.solvedCard : ''}`}
              >
                <div className={styles.probMain}>
                  <div className={styles.probHeader}>
                    <span 
                      className={`${styles.difficultyBadge} ${
                        prob.difficulty === 'Easy' ? styles.easy : 
                        prob.difficulty === 'Medium' ? styles.medium : styles.hard
                      }`}
                    >
                      {prob.difficulty}
                    </span>
                    <span className={styles.xpVal}>+{prob.xp} XP</span>
                  </div>
                  <h4 className={styles.probTitle}>{prob.title}</h4>
                  <span className={styles.probTopicTag}>{prob.topic}</span>
                </div>

                <div className={styles.probFooter}>
                  <span 
                    className={`${styles.statusBadge} ${
                      isSolved ? styles.solvedBadge : 
                      isInProgress ? styles.inProgressBadge : styles.unsolvedBadge
                    }`}
                  >
                    {prob.status}
                  </span>
                  <button 
                    onClick={() => handleSolve(prob.id)}
                    className={`${styles.solveBtn} ${isSolved ? styles.solvedBtn : ''}`}
                  >
                    {isSolved ? 'Try Again' : 'Solve Challenge'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PracticeDetail;
