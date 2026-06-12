import React, { useState } from 'react';
import styles from '../../FrontendCoursePage.module.css';

interface Props { page: number; }

const Module8: React.FC<Props> = ({ page }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  // Lesson states
  const [arrowText, setArrowText] = useState('');
  const [arrowCorrect, setArrowCorrect] = useState<boolean | null>(null);

  const [userName, setUserName] = useState('John');
  const [userRole, setUserRole] = useState('Admin');

  const [destObj, setDestObj] = useState({ id: 101, title: 'Engineer', salary: '$80k' });
  const [spreadArray1, setSpreadArray1] = useState<string[]>(['React', 'Vue']);
  const [spreadArray2] = useState<string[]>(['Node', 'Express']);

  const quizQuestions = [
    { id: 1, question: 'Q1: What happens if you reassign a const variable?', options: ['A. It works perfectly', 'B. It silently fails', 'C. It throws a TypeError', 'D. It logs undefined'], correctAnswer: 'C. It throws a TypeError' },
    { id: 2, question: 'Q2: How do arrow functions differ from regular functions regarding the "this" keyword?', options: ['A. Arrow functions have their own "this"', 'B. Arrow functions inherit "this" from the parent scope', 'C. Arrow functions don\'t support "this"', 'D. Regular functions cannot use "this"'], correctAnswer: 'B. Arrow functions inherit "this" from the parent scope' },
    { id: 3, question: 'Q3: Which character wraps template literals?', options: ['A. Double quotes ""', 'B. Single quotes \'\'', 'C. Backticks ``', 'D. Parentheses ()'], correctAnswer: 'C. Backticks ``' },
    { id: 4, question: 'Q4: What syntax copies all elements from array A into array B using the spread operator?', options: ['A. B = [A]', 'B. B = [...A]', 'C. B = rest(A)', 'D. B = copy(A)'], correctAnswer: 'B. B = [...A]' },
    { id: 5, question: 'Q5: Which keyword allows a class to inherit properties from another class?', options: ['A. inherits', 'B. extends', 'C. super', 'D. class'], correctAnswer: 'B. extends' },
  ];

  const handleSubmitQuiz = () => {
    let s = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) s++;
    });
    setQuizScore(s);
    setQuizSubmitted(true);
  };

  const checkArrowConvert = () => {
    const cleaned = arrowText.replace(/\s+/g, '');
    if (cleaned.includes('constdouble=x=>x*2') || 
        cleaned.includes('constdouble=(x)=>x*2') || 
        cleaned.includes('constdouble=x=>{returnx*2;}') || 
        cleaned.includes('constdouble=(x)=>{returnx*2;}')) {
      setArrowCorrect(true);
    } else {
      setArrowCorrect(false);
    }
  };

  switch (page) {
    case 1:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.1: let vs const</h2>
          <p className={styles.paragraph}>ECMAScript 2015 (ES6) introduced two block-scoped keywords: <code>let</code> and <code>const</code>, replacing the legacy function-scoped <code>var</code>.</p>
          
          <h3 className={styles.subtitle}>Reassignment vs Mutation</h3>
          <p className={styles.paragraph}>A common misconception is that <code>const</code> makes variables immutable. In reality, it only prevents **reassignment** of the variable identifier. The properties of const objects and arrays can still be mutated.</p>

          <div className={styles.codeLabel}>Reassignment and Mutation sandbox</div>
          <pre className={styles.codeBlock}><code>{`const user = { name: "John" };
user.name = "Jane"; // Allowed! (Mutation)
console.log(user.name); // "Jane"

// user = { name: "Bob" }; // Error! (Reassignment)

const scores = [90, 85];
scores.push(95); // Allowed! (Mutation)`}</code></pre>
        </div>
      );

    case 2:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.2: Arrow Functions</h2>
          <p className={styles.paragraph}><strong>Arrow functions</strong> provide a concise syntax for writing function expressions. They do not have their own <code>this</code>, <code>arguments</code>, <code>super</code>, or <code>new.target</code> context.</p>
          
          <div className={styles.codeLabel}>Arrow Function syntax comparisons</div>
          <pre className={styles.codeBlock}><code>{`// Traditional Function
const add = function(a, b) {
  return a + b;
};

// Arrow Function (implicit return)
const addArrow = (a, b) => a + b;

// Single parameter (no parentheses needed)
const square = x => x * x;`}</code></pre>

          <h3 className={styles.subtitle}>Exercise: Convert to Arrow Function</h3>
          <p className={styles.paragraph}>Convert this traditional function to an arrow function assigned to <code>double</code>: <code>{`function double(x) { return x * 2; }`}</code></p>
          <input className={styles.inputField} style={{ fontFamily: 'monospace', width: '100%', maxWidth: '350px', marginBottom: '8px' }} placeholder="const double = ..." value={arrowText} onChange={e => setArrowText(e.target.value)} />
          <button className={styles.saveBtn} onClick={checkArrowConvert}>Verify</button>
          {arrowCorrect === true && <p className={styles.successMessage} style={{ marginTop: '8px' }}>🎉 Excellent! Valid arrow syntax.</p>}
          {arrowCorrect === false && <p className={styles.errorMessage} style={{ marginTop: '8px' }}>❌ Keep trying! Check spacing and keywords.</p>}
        </div>
      );

    case 3:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.3: Template Literals</h2>
          <p className={styles.paragraph}>Template literals are string literals wrapped in backticks (<code>`</code>), allowing embedded expressions (interpolation) and multiline structures.</p>
          
          <div className={styles.codeLabel}>JavaScript String interpolation</div>
          <pre className={styles.codeBlock}><code>{`const name = "Alice";
const greeting = \`Hello, \${name}!
Welcome to our platform.\`;`}</code></pre>

          <h3 className={styles.subtitle}>Interactive string generator</h3>
          <div style={{ background: 'var(--bg-surface-2)', padding: '16px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <input className={styles.inputField} placeholder="Name" value={userName} onChange={e => setUserName(e.target.value)} />
              <input className={styles.inputField} placeholder="Role" value={userRole} onChange={e => setUserRole(e.target.value)} />
            </div>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '13.5px' }}>
              Generated Literal Output: <code>{`Hello ${userName}, you are logged in as an ${userRole}!`}</code>
            </p>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.4: Destructuring</h2>
          <p className={styles.paragraph}>Destructuring matches arrays/objects structures, extracting specific parameters into clean variables directly.</p>
          
          <div className={styles.codeLabel}>JavaScript Destructuring</div>
          <pre className={styles.codeBlock}><code>{`// Object Destructuring
const person = { name: "Bob", age: 30 };
const { name, age } = person;

// Array Destructuring
const coordinates = [10, 20];
const [x, y] = coordinates;`}</code></pre>

          <h3 className={styles.subtitle}>Object Destructuring playground:</h3>
          <div style={{ background: 'var(--bg-surface-2)', padding: '16px', borderRadius: '8px' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '13px' }}>Current Object: <code>{JSON.stringify(destObj)}</code></p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className={styles.backBtn} onClick={() => setDestObj({ id: 202, title: 'Lead Designer', salary: '$95k' })}>Mutate Object</button>
            </div>
            <p style={{ marginTop: '12px', margin: 0, fontSize: '13px' }}>Extracted variables: Title = <strong>{destObj.title}</strong>, Salary = <strong>{destObj.salary}</strong></p>
          </div>
        </div>
      );

    case 5:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.5: Spread Operator</h2>
          <p className={styles.paragraph}>The spread operator (<code>...</code>) expands elements of arrays or properties of objects into new references, making copies or merges clean.</p>
          
          <div className={styles.codeLabel}>Spread Examples</div>
          <pre className={styles.codeBlock}><code>{`const defaults = { theme: "light", debug: false };
const userPrefs = { theme: "dark" };

// Merge objects (last declaration overrides)
const config = { ...defaults, ...userPrefs }; // { theme: "dark", debug: false }`}</code></pre>

          <h3 className={styles.subtitle}>Array Merger Sandbox</h3>
          <div style={{ background: 'var(--bg-surface-2)', padding: '16px', borderRadius: '8px' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '13px' }}>Array 1: <code>{JSON.stringify(spreadArray1)}</code></p>
            <p style={{ margin: '0 0 12px 0', fontSize: '13px' }}>Array 2: <code>{JSON.stringify(spreadArray2)}</code></p>
            <p style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: 'bold' }}>Merged Array [...Array1, ...Array2]: <code>{JSON.stringify([...spreadArray1, ...spreadArray2])}</code></p>
            <button className={styles.backBtn} onClick={() => setSpreadArray1(p => [...p, 'Angular'])}>Push Angular to Array 1</button>
          </div>
        </div>
      );

    case 6:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.6: Rest Operator</h2>
          <p className={styles.paragraph}>The rest operator (also represented as <code>...</code>) gathers multiple remaining arguments or parameters into a single array structure inside function footprints.</p>
          
          <div className={styles.codeLabel}>Rest Parameters Example</div>
          <pre className={styles.codeBlock}><code>{`function sumAll(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10`}</code></pre>

          <div className={styles.tipBox}>
            <p className={styles.tipBoxTitle}>💡 Rest vs Spread</p>
            <p className={styles.tipBoxText}>
              <strong>Spread</strong>: Expands elements out (unpacks arrays/objects).<br />
              <strong>Rest</strong>: Gathers variables in (packs parameters into an array).
            </p>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.7: Default Parameters</h2>
          <p className={styles.paragraph}>Default function parameters allow formal parameters to be initialized with default values if no value or <code>undefined</code> is passed.</p>
          
          <div className={styles.codeLabel}>JavaScript Default Parameters</div>
          <pre className={styles.codeBlock}><code>{`function greetUser(username = "Guest", role = "Viewer") {
  return \`Welcome, \${username}! Role: \${role}\`;
}

console.log(greetUser()); // "Welcome, Guest! Role: Viewer"
console.log(greetUser("Alice")); // "Welcome, Alice! Role: Viewer"`}</code></pre>
        </div>
      );

    case 8:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.8: Modules</h2>
          <p className={styles.paragraph}>Modules let you split your codebase into separate files. Use <code>export</code> to expose variables/functions, and <code>import</code> to consume them.</p>
          
          <div className={styles.codeLabel}>export.js</div>
          <pre className={styles.codeBlock}><code>{`export const API_URL = "https://api.example.com";
export function fetchData() { /* ... */ }`}</code></pre>

          <div className={styles.codeLabel}>import.js</div>
          <pre className={styles.codeBlock}><code>{`import { API_URL, fetchData } from "./export.js";`}</code></pre>
        </div>
      );

    case 9:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.9: Classes</h2>
          <p className={styles.paragraph}>Classes are templates for creating objects. They encapsulate data with code to work on that data.</p>
          
          <div className={styles.codeLabel}>Class Declaration</div>
          <pre className={styles.codeBlock}><code>{`class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  getArea() {
    return this.height * this.width;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50`}</code></pre>
        </div>
      );

    case 10:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Lesson 8.10: Object-Oriented JavaScript</h2>
          <p className={styles.paragraph}>ES6 classes support inheritance, allowing class structures to subclass properties and methods of other parent models.</p>
          
          <div className={styles.codeLabel}>Class Inheritance</div>
          <pre className={styles.codeBlock}><code>{`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Call the parent constructor
  }
  speak() {
    console.log(\`\${this.name} barks!\`);
  }
}`}</code></pre>
        </div>
      );

    case 11:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 8 Quiz</h2>
          <p className={styles.paragraph}>Verify your Modern ES6+ knowledge:</p>
          <div className={styles.quizCardList}>
            {quizQuestions.map(q => {
              const selected = quizAnswers[q.id];
              return (
                <div key={q.id} className={styles.quizBlock}>
                  <h4 className={styles.quizBlockQuestion}>{q.question}</h4>
                  <div className={styles.quizBlockOptions}>
                    {q.options.map(opt => {
                      let optStyle = styles.quizBlockOption;
                      if (selected === opt) optStyle = styles.quizBlockOptionSelected;
                      if (quizSubmitted) {
                        if (opt === q.correctAnswer) optStyle = styles.quizBlockOptionCorrect;
                        else if (selected === opt) optStyle = styles.quizBlockOptionIncorrect;
                      }
                      return <button key={opt} className={optStyle} onClick={() => { if (!quizSubmitted) setQuizAnswers(p => ({...p, [q.id]: opt})); }} disabled={quizSubmitted}>{opt}</button>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.quizSubmitRow}>
            {!quizSubmitted ? (
              <button className={styles.saveBtn} onClick={handleSubmitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length}>Submit Quiz</button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'space-between' }}>
                <span className={styles.quizScoreText}>Score: {quizScore} / {quizQuestions.length} {quizScore === quizQuestions.length ? '🎉 Perfect!' : '👍 Review key points!'}</span>
                <button className={styles.backBtn} onClick={() => { setQuizSubmitted(false); setQuizScore(null); setQuizAnswers({}); }}>Retry Quiz</button>
              </div>
            )}
          </div>
        </div>
      );

    case 12:
      return (
        <div className={styles.tabContent}>
          <h2 className={styles.cardTitle}>Module 8 Assignment</h2>
          <p className={styles.paragraph}>Write down short answers for the following prompts to complete Module 8:</p>
          <ol style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '20px' }}>
            <li>1. Can properties of const arrays and objects be modified? Give an example.</li>
            <li>2. How do you rewrite a standard function block into arrow function format?</li>
            <li>3. Demonstrate object destructuring with default fallbacks.</li>
            <li>4. Compare spread and rest parameters applications.</li>
            <li>5. Explain the role of super() in constructor chains.</li>
          </ol>
          {!assignmentSubmitted ? (
            <div>
              <textarea className={styles.assignmentBox} placeholder="Type your answers here..." value={assignmentText} onChange={(e) => setAssignmentText(e.target.value)} />
              <button className={styles.saveBtn} onClick={() => { if (assignmentText.trim().length > 10) setAssignmentSubmitted(true); }} disabled={assignmentText.trim().length < 10}>Submit Assignment</button>
            </div>
          ) : (
            <div className={styles.completeBadge} style={{ marginTop: '24px' }}><span>✓ Assignment Submitted! 🎉</span></div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Module8;
