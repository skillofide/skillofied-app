import { QuizQuestion } from '../../../../types';

export interface Lesson {
  id: string;
  title: string;
  objectives: string[];
  theory: string;
  syntax?: string;
  codeExample?: string;
  codeOutput?: string;
  mistakes?: string[];
  takeaways: string[];
}

export interface ModuleData {
  id: string;
  title: string;
  overview: string;
  outcomes: string[];
  lessons: Lesson[];
  quiz: QuizQuestion[];
  assignment: {
    prompts: string[];
  };
}

export const TESTING_COURSE_DATA: Record<string, ModuleData> = {
  m1: {
    id: 'm1',
    title: 'MODULE 1: MANUAL TESTING FUNDAMENTALS',
    overview: 'Learn manual testing core basics. Design high-coverage test cases, trace requirements matrices, and log detailed defects in Jira.',
    outcomes: [
      'Write highly descriptive functional test cases.',
      'Report priority levels and repro steps for software bugs.'
    ],
    lessons: [
      {
        id: 'm1-l1',
        title: 'Lesson 1.1 Software Development Life Cycle (SDLC) vs STLC',
        objectives: ['Differentiate code design phases from quality checks.'],
        theory: 'The Software Testing Life Cycle (STLC) outlines test planning, requirement analysis, design matrices, execution parameters, and reporting closure cycles.',
        takeaways: ['Testing should start as early as the requirements gathering phase.']
      },
      {
        id: 'm1-l2',
        title: 'Lesson 1.2 Writing Professional Test Cases',
        objectives: ['Structure inputs, preconditions, and expected outputs.'],
        theory: 'A standard test case includes an ID, Description, Preconditions, Input parameters, Step-by-step actions, Expected Results, and Actual Results.',
        takeaways: ['Ensure test cases are clear, precise, and easily reproducible by any developer.']
      }
    ],
    quiz: [
      { id: 1, question: 'What does STLC stand for?', options: ['Software Testing Life Cycle', 'System Trial Logic Check', 'Structured Test Line Code', 'Standard Test Loop Control'], correctAnswer: 'Software Testing Life Cycle' }
    ],
    assignment: {
      prompts: ['Write 5 functional test cases for a login panel.']
    }
  },
  m2: {
    id: 'm2',
    title: 'MODULE 2: AUTOMATION TESTING (CYPRESS & SELENIUM)',
    overview: 'Transition from manual checking to writing automated web drivers and asserting DOM behaviors.',
    outcomes: [
      'Write end-to-end browser automation scripts.',
      'Configure assertions on HTML nodes and APIs.'
    ],
    lessons: [
      {
        id: 'm2-l1',
        title: 'Lesson 2.1 E2E Testing with Cypress',
        objectives: ['Write automated test commands checking DOM nodes.'],
        theory: 'Cypress executes directly inside the browser sandbox, allowing fast reload triggers and native event captures. Selectors are queried via cy.get() and assertions are made using chainable .should() methods.',
        takeaways: ['Use cy.get() to grab HTML components and cy.should() to make assertions.']
      },
      {
        id: 'm2-l2',
        title: 'Lesson 2.2 Web Automation with Selenium WebDriver',
        objectives: ['Write automated browser scripts using WebDriver API.'],
        theory: 'Selenium WebDriver runs tests by communicating directly with browsers using native driver binaries. It supports multiple languages (Java, Python, JS) and operates outside the browser process, making it ideal for cross-browser testing across Chrome, Safari, and Firefox.',
        syntax: `// Java Example of Selenium WebDriver
WebDriver driver = new ChromeDriver();
driver.get("https://knovate.com");
WebElement element = driver.findElement(By.id("login-btn"));
element.click();
String title = driver.getTitle();
assertEquals("Knovate", title);
driver.quit();`,
        takeaways: ['Selenium is powerful for cross-browser and parallel execution scenarios.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which command finds HTML elements in Cypress?', options: ['cy.get()', 'cy.find()', 'cy.select()', 'cy.element()'], correctAnswer: 'cy.get()' },
      { id: 2, question: 'Which component communicates directly with browsers in Selenium?', options: ['WebDriver', 'Selenium IDE', 'Selenium Grid', 'XPath'], correctAnswer: 'WebDriver' }
    ],
    assignment: {
      prompts: ['Write an automation script submitting a web form.', 'Write a Selenium test navigating a multi-page checkout flow.']
    }
  }
};
