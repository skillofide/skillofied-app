import React, { useState } from 'react';
import AssignmentIDE from '../../shared/AssignmentIDE';
import styles from '../../FrontendCoursePage.module.css';

interface Props {
  page: number;
}

const FinalAssessment: React.FC<Props> = ({ page }) => {
  // Theory Exam state
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submittedTheory, setSubmittedTheory] = useState(false);
  const [theoryScore, setTheoryScore] = useState<number | null>(null);

  // Coding Exam state
  const starterCode = `public class Solution {
    public int findMax(int[] nums) {
        // Complete this code to return the maximum value in the array
        return 0;
    }
}`;
  const [code, setCode] = useState(starterCode);


  // Booking state
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);

  const questions = [
    { id: 1, question: 'Q1: What is JVM?', options: ['A. Compiler', 'B. Bytecode Runner', 'C. Project Editor', 'D. Memory Garbage'], correct: 'B. Bytecode Runner' },
    { id: 2, question: 'Q2: Which Set stores sorted unique items?', options: ['A. HashSet', 'B. TreeSet', 'C. LinkedHashSet', 'D. HashMap'], correct: 'B. TreeSet' },
    { id: 3, question: 'Q3: How do you lock resources in multi-threading?', options: ['A. volatile', 'B. synchronized', 'C. transient', 'D. final'], correct: 'B. synchronized' },
    { id: 4, question: 'Q4: What parameter validation uses Spring annotation @NotNull?', options: ['A. Hibernate entities checks', 'B. Request models validations', 'C. DB drivers setups', 'D. None'], correct: 'B. Request models validations' },
    { id: 5, question: 'Q5: Which class is immutable in java.lang?', options: ['A. String', 'B. StringBuilder', 'C. StringBuffer', 'D. ArrayList'], correct: 'A. String' },
  ];

  const handleSelectAnswer = (qId: number, opt: string) => {
    if (submittedTheory) return;
    setAnswers(prev => ({ ...prev, [qId]: opt }));
  };

  const handleSubmitTheory = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) score++;
    });
    setTheoryScore(score);
    setSubmittedTheory(true);
  };

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Final Theory Evaluation</h2>
          <p className={styles.paragraph}>Verify your theoretical knowledge. Answer the following questions based on the course syllabus:</p>
          
          <div className={styles.quizCardList}>
            {questions.map(q => {
              const selected = answers[q.id];
              return (
                <div key={q.id} className={styles.quizBlock}>
                  <h4 className={styles.quizBlockQuestion}>{q.question}</h4>
                  <div className={styles.quizBlockOptions}>
                    {q.options.map(opt => {
                      let optStyle = styles.quizBlockOption;
                      if (selected === opt) optStyle = styles.quizBlockOptionSelected;
                      if (submittedTheory) {
                        if (opt === q.correct) optStyle = styles.quizBlockOptionCorrect;
                        else if (selected === opt) optStyle = styles.quizBlockOptionIncorrect;
                      }
                      return (
                        <button key={opt} className={optStyle} onClick={() => handleSelectAnswer(q.id, opt)} disabled={submittedTheory}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.quizSubmitRow} style={{ marginTop: '20px' }}>
            {!submittedTheory ? (
              <button className={styles.saveBtn} onClick={handleSubmitTheory} disabled={Object.keys(answers).length < questions.length}>
                Submit Exam
              </button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'space-between' }}>
                <span className={styles.quizScoreText}>Score: {theoryScore} / {questions.length} {theoryScore === questions.length ? '🎉 Perfect Score!' : '👍 Good job!'}</span>
                <button className={styles.backBtn} onClick={() => { setSubmittedTheory(false); setAnswers({}); setTheoryScore(null); }}>Retake Exam</button>
              </div>
            )}
          </div>
        </div>
      );

    case 2:
      return (
        <div style={{ flex: 1, minHeight: 0, height: '100%' }}>
          <AssignmentIDE
            taskIndex={1}
            taskTotal={1}
            language="java"
            starterCode={starterCode}
            value={code}
            onChange={setCode}
            prompt="Implement a function that accepts an integer array and returns the maximum value contained. Array length will always be at least 1."
            submitted={false}
            onSubmit={() => {}}
            runnable={true}
          />
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Capstone Project Evaluation</h2>
          <p className={styles.paragraph}>Your major Capstone Project is graded by mentors on the following criteria:</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            {[
              { criteria: '1. Architecture & Code Quality', desc: 'Correct split of Controllers, Services, Repositories, Entities. Proper use of encapsulation and SOLID design patterns.' },
              { criteria: '2. Database Design & JPA Relations', desc: 'Correct normalization schema. Proper mapping of entities relationships (@OneToMany, @ManyToOne).' },
              { criteria: '3. Security Integration', desc: 'Secure passwords storage (BCrypt). Proper security configuration filters. Correct JWT extraction pipeline.' },
              { criteria: '4. REST API Standard compliance', desc: 'Exposing correct CRUD endpoints using appropriate HTTP verbs and consistent JSON responses.' }
            ].map((rubric, idx) => (
              <div key={idx} style={{ padding: '16px', border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--bg-surface-2)' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '14.5px', color: 'var(--text-primary)' }}>{rubric.criteria}</h4>
                <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)' }}>{rubric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Schedule Viva & Interview Round</h2>
          <p className={styles.paragraph}>To finalize the Java certification, book a 15-minute live technical interview slots with our team mentors:</p>
          
          {!bookedSlot ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', marginTop: '16px' }}>
              {['Monday, 10:00 AM', 'Tuesday, 02:00 PM', 'Wednesday, 11:30 AM', 'Thursday, 04:00 PM'].map((slot, idx) => (
                <button 
                  key={idx} 
                  className={styles.choiceBtn}
                  onClick={() => setBookedSlot(slot)}
                  style={{ padding: '16px', fontSize: '13px', textAlign: 'center' }}
                >
                  🕒 {slot}
                </button>
              ))}
            </div>
          ) : (
            <div className={styles.completeBadge} style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <span>✓ Slot Booked Successfully! Your viva interview is scheduled for: <strong>{bookedSlot}</strong>.</span>
              <button className={styles.backBtn} onClick={() => setBookedSlot(null)}>Change Slot</button>
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default FinalAssessment;
