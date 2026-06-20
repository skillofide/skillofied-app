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

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ModuleData {
  id: string;
  title: string;
  overview: string;
  outcomes: string[];
  lessons: Lesson[];
  exercise?: {
    title: string;
    description: string;
    instructions: string[];
    starterCode: string;
    expectedOutput: string;
    type: string;
  };
  quiz: QuizQuestion[];
  assignment: {
    prompts: string[];
  };
}

export const JAVA_COURSE_DATA: Record<string, ModuleData> = {
  m1: {
    id: 'm1',
    title: 'MODULE 1: INTRODUCTION TO JAVA',
    overview: 'Get started with Java. Understand what Java is, its history, architecture (JVM, JRE, JDK), installation, and run your first Hello World program.',
    outcomes: [
      'Understand JVM, JRE, and JDK relationships.',
      'Configure local Java environment on VS Code or IntelliJ.',
      'Write, compile, and run your first Java program.'
    ],
    lessons: [
      {
        id: 'm1-l1',
        title: 'Lesson 1.1 Welcome to Java',
        objectives: ['Learn the scope of Java.', 'Understand why it remains a top backend language.'],
        theory: 'Java is a highly popular, class-based, object-oriented language. Built around the "Write Once, Run Anywhere" (WORA) philosophy, Java powers over 3 billion devices including enterprise web backends, Android applications, and financial systems.',
        takeaways: ['Java is platform independent.', 'Extremely robust compiler and memory management.']
      },
      {
        id: 'm1-l2',
        title: 'Lesson 1.2 What is Java?',
        objectives: ['Understand high-level compilation basics.', 'Explore structural elements.'],
        theory: 'Java is both a compiled and interpreted language. Java source files (.java) compile to intermediate bytecode (.class) which is executed by the JVM.',
        takeaways: ['Bytecode is system-agnostic.', 'Interpreted dynamically by JVM.']
      },
      {
        id: 'm1-l3',
        title: 'Lesson 1.3 History of Java',
        objectives: ['Learn origins.', 'Understand Java evolution.'],
        theory: 'Created by James Gosling at Sun Microsystems in 1995. Originally called Oak, it was renamed to Java. Oracle acquired Sun in 2010 and maintains Java release cycles.',
        takeaways: ['Sun Microsystems founded Java.', 'Oracle maintains modern support.']
      },
      {
        id: 'm1-l4',
        title: 'Lesson 1.4 Features of Java',
        objectives: ['Review core features.'],
        theory: 'Key features: Simple, Secure, Object-Oriented, Platform-Independent, Robust, Multithreaded, and Garbage Collected (automatic memory management).',
        takeaways: ['No manual pointers usage.', 'Automatic garbage collections.']
      },
      {
        id: 'm1-l5',
        title: 'Lesson 1.5 JDK, JRE, and JVM',
        objectives: ['Differentiate runtime vs compiler kits.'],
        theory: 'JVM (Java Virtual Machine) executes bytecode. JRE (Java Runtime Environment) bundles JVM and core libraries. JDK (Java Development Kit) includes JRE and development compiler tools (javac).',
        syntax: 'JDK = JRE + Development Tools (javac, jar, etc.)\nJRE = JVM + Library classes',
        takeaways: ['JDK is for developers.', 'JRE runs compiled packages.', 'JVM is the runner engine.']
      },
      {
        id: 'm1-l6',
        title: 'Lesson 1.6 Installing Java',
        objectives: ['Install JDK 17/21.'],
        theory: 'Download LTS JDK installer from Oracle or Adoptium. Configure environment variables mapping PATH to the JDK bin directory.',
        takeaways: ['Verify install with: java -version', 'Setup JAVA_HOME paths.']
      },
      {
        id: 'm1-l7',
        title: 'Lesson 1.7 Setting Up IDEs',
        objectives: ['Configure VS Code or IntelliJ IDEA.'],
        theory: 'Install Extension Pack for Java in VS Code or download IntelliJ IDEA Community Edition. Create a workspace folder for your Java files.',
        takeaways: ['IDE handles background compilation.', 'Auto-completes syntax.']
      },
      {
        id: 'm1-l8',
        title: 'Lesson 1.8 Your First Java Program',
        objectives: ['Write Hello World.'],
        theory: 'Every line of code in Java must sit inside a Class. The entry point of execution is the main method.',
        syntax: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        codeExample: 'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Welcome to Java Mastery!");\n    }\n}',
        codeOutput: 'Welcome to Java Mastery!',
        takeaways: ['Classes match filenames.', 'Main method signature is strict.']
      }
    ],
    exercise: {
      title: 'Variable naming checker',
      description: 'Validate if a variable name follows standard camelCase and rules in Java.',
      instructions: ['Must not start with a digit.', 'Should follow camelCase.', 'Cannot be a reserved keyword.'],
      starterCode: 'String 1name = "Fail";',
      expectedOutput: 'Invalid',
      type: 'input_validation'
    },
    quiz: [
      { id: 1, question: 'Which component is responsible for compiling Java code into bytecode?', options: ['A. JVM', 'B. JRE', 'C. javac (Compiler)', 'D. Eclipse'], correctAnswer: 'C. javac (Compiler)' },
      { id: 2, question: 'What is the signature of the Main entry method?', options: ['A. public void main()', 'B. public static void main(String[] args)', 'C. void main(String args)', 'D. static void main()'], correctAnswer: 'B. public static void main(String[] args)' },
      { id: 3, question: 'Which JVM concept allows "Write Once, Run Anywhere"?', options: ['A. Pointers', 'B. Garbage Collection', 'C. Bytecode Execution', 'D. Harddisk access'], correctAnswer: 'C. Bytecode Execution' },
      { id: 4, question: 'What file extension does a compiled Java file have?', options: ['A. .java', 'B. .exe', 'C. .class', 'D. .txt'], correctAnswer: 'C. .class' },
      { id: 5, question: 'Who acquired Sun Microsystems in 2010?', options: ['A. Microsoft', 'B. Google', 'C. Oracle', 'D. IBM'], correctAnswer: 'C. Oracle' }
    ],
    assignment: {
      prompts: [
        'Explain the difference between JDK, JRE, and JVM in your own words.',
        'Why is Java platform independent but JVM is platform dependent?',
        'Write down the command to compile and run a file called App.java in the CLI.'
      ]
    }
  },
  m2: {
    id: 'm2',
    title: 'MODULE 2: JAVA BASICS',
    overview: 'Learn basic structure, variables, primitive types, operators, Scanner for console user input, and System.out formatting.',
    outcomes: [
      'Differentiate primitive vs non-primitive datatypes.',
      'Perform type casting (widening and narrowing).',
      'Read console inputs using the Scanner class.'
    ],
    lessons: [
      {
        id: 'm2-l1',
        title: 'Lesson 2.1 Program Structure',
        objectives: ['Learn class imports and packages.'],
        theory: 'A standard Java file starts with a package statement, followed by imports, the class definition, variables, and methods.',
        takeaways: ['Filenames must match the public class name.']
      },
      {
        id: 'm2-l2',
        title: 'Lesson 2.2 Comments in Java',
        objectives: ['Use single-line and multi-line comments.'],
        theory: 'Java supports single-line // comments, multi-line /* comments */, and documentation comments /** docs */.',
        takeaways: ['Comments are ignored during compilation.']
      },
      {
        id: 'm2-l3',
        title: 'Lesson 2.3 Variables',
        objectives: ['Declare and initialize variables.'],
        theory: 'Variables are containers that hold data. Java is strongly typed, so variables must declare a specific type.',
        syntax: 'dataType variableName = value;',
        codeExample: 'int score = 100;\nSystem.out.println(score);',
        codeOutput: '100',
        takeaways: ['Strong typing prevents variable type changes.']
      },
      {
        id: 'm2-l4',
        title: 'Lesson 2.4 Data Types',
        objectives: ['Differentiate primitive types.'],
        theory: 'Java has 8 primitive types: byte, short, int, long, float, double, char, and boolean.',
        takeaways: ['Primitives store actual values.', 'Non-primitives (Strings, Arrays) store references.']
      },
      {
        id: 'm2-l5',
        title: 'Lesson 2.5 Type Casting',
        objectives: ['Learn casting rules.'],
        theory: 'Widening casting (implicit) converts smaller to larger types automatically. Narrowing casting (explicit/manual) requires parentheses casting.',
        syntax: 'int myInt = (int) myDouble; // Narrowing',
        takeaways: ['Implicit widening is safe.', 'Narrowing might lose data precision.']
      },
      {
        id: 'm2-l6',
        title: 'Lesson 2.6 Operators',
        objectives: ['Use arithmetic, relational, and logic operators.'],
        theory: 'Operators perform operations on variables. Includes arithmetic (+, -, *, /), relational (==, !=, <, >), and logic (&&, ||, !).',
        takeaways: ['&& has higher precedence than ||.']
      },
      {
        id: 'm2-l7',
        title: 'Lesson 2.7 Scanner Class',
        objectives: ['Read user inputs.'],
        theory: 'Import java.util.Scanner to read inputs from System.in. Call scanner.nextLine() or scanner.nextInt() to parse entries.',
        syntax: 'Scanner scanner = new Scanner(System.in);\nint age = scanner.nextInt();',
        takeaways: ['Close scanners to avoid leaks.', 'Consume trailing newlines after reading numbers.']
      },
      {
        id: 'm2-l8',
        title: 'Lesson 2.8 Output Formatting',
        objectives: ['Use System.out.printf.'],
        theory: 'Use printf for formatted outputs. Use %d for integers, %f for floats, %s for strings, and %n for newlines.',
        syntax: 'System.out.printf("Value: %.2f", 5.678);',
        codeExample: 'System.out.printf("Age: %d, Name: %s", 25, "Alex");',
        codeOutput: 'Age: 25, Name: Alex',
        takeaways: ['Format specifiers match variable types.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which datatype is not a primitive in Java?', options: ['A. int', 'B. char', 'C. String', 'D. boolean'], correctAnswer: 'C. String' },
      { id: 2, question: 'How do you cast a double to an int?', options: ['A. int a = double b;', 'B. int a = (int)b;', 'C. int a = cast(b);', 'D. int a = convert(b);'], correctAnswer: 'B. int a = (int)b;' },
      { id: 3, question: 'Which class is commonly imported to scan inputs?', options: ['A. Reader', 'B. InputSteam', 'C. Scanner', 'D. Console'], correctAnswer: 'C. Scanner' },
      { id: 4, question: 'What does %n do inside a System.out.printf format?', options: ['A. Prints name', 'B. Prints new line', 'C. Prints a null character', 'D. Clears cache'], correctAnswer: 'B. Prints new line' },
      { id: 5, question: 'Which operator denotes logical AND?', options: ['A. &', 'B. |', 'C. &&', 'D. ||'], correctAnswer: 'C. &&' }
    ],
    assignment: {
      prompts: [
        'Write a short block of code that reads an age from the user and prints it in format: "You are %d years old".',
        'State the differences between widening and narrowing casting.'
      ]
    }
  },
  m3: {
    id: 'm3',
    title: 'MODULE 3: CONTROL STATEMENTS',
    overview: 'Master conditional logic in Java using if, else, else-if, nested conditions, switch statements, and ternary operators.',
    outcomes: [
      'Evaluate nested condition chains.',
      'Use modern switch case statements.',
      'Apply ternary expressions to simplify variables setup.'
    ],
    lessons: [
      {
        id: 'm3-l1',
        title: 'Lesson 3.1 if Statement',
        objectives: ['Write single conditions.'],
        theory: 'Use `if` to execute a block of code only if the condition evaluates to true.',
        syntax: 'if (condition) {\n    // code\n}',
        takeaways: ['Condition must be boolean.']
      },
      {
        id: 'm3-l2',
        title: 'Lesson 3.2 if-else Statement',
        objectives: ['Define fallbacks.'],
        theory: 'Use `else` to execute an alternative block when the `if` condition is false.',
        codeExample: 'int score = 75;\nif (score >= 50) {\n    System.out.println("Pass");\n} else {\n    System.out.println("Fail");\n}',
        codeOutput: 'Pass',
        takeaways: ['Avoid duplicate condition evaluations.']
      },
      {
        id: 'm3-l3',
        title: 'Lesson 3.3 Nested if',
        objectives: ['Build branching trees.'],
        theory: 'Place an if statement inside another if to evaluate successive layers of criteria.',
        takeaways: ['Keep nesting shallow to maintain code readability.']
      },
      {
        id: 'm3-l4',
        title: 'Lesson 3.4 Switch Case',
        objectives: ['Optimize multiple branches.'],
        theory: 'Instead of writing many else-if conditions, use switch to match variables against specific case labels.',
        syntax: 'switch(variable) {\n    case 1: // code\n        break;\n    default: // code\n}',
        takeaways: ['Always add break statements unless intentional fall-through is needed.']
      },
      {
        id: 'm3-l5',
        title: 'Lesson 3.5 Ternary Operator',
        objectives: ['Simplify values assignments.'],
        theory: 'Ternary `? :` acts as a inline if-else shortcut returning a value.',
        syntax: 'String status = (age >= 18) ? "Adult" : "Minor";',
        takeaways: ['Perfect for quick, simple assignments.', 'Avoid nesting ternaries.']
      },
      {
        id: 'm3-l6',
        title: 'Lesson 3.6 Logical Operators',
        objectives: ['Combine expressions.'],
        theory: 'Combine boolean checks with AND (&&), OR (||), and NOT (!). Relies on short-circuit evaluation.',
        takeaways: ['Short-circuit loops skip checks if outcome is predetermined.']
      }
    ],
    quiz: [
      { id: 1, question: 'What must Java condition checks evaluate to?', options: ['A. Integer', 'B. Boolean', 'C. Character', 'D. Double'], correctAnswer: 'B. Boolean' },
      { id: 2, question: 'What keyword terminates a case switch block?', options: ['A. exit', 'B. return', 'C. break', 'D. continue'], correctAnswer: 'C. break' },
      { id: 3, question: 'What is the syntax symbol for ternary conditions?', options: ['A. ? :', 'B. if else', 'C. ->', 'D. & |'], correctAnswer: 'A. ? :' },
      { id: 4, question: 'If logical AND (&&) finds its first condition false, does it check the second?', options: ['A. Yes', 'B. No (Short circuits)', 'C. Throws error', 'D. Depends on compiler settings'], correctAnswer: 'B. No (Short circuits)' },
      { id: 5, question: 'Which statement defines a fallback case in switch blocks?', options: ['A. case *', 'B. default', 'C. case else', 'D. reset'], correctAnswer: 'B. default' }
    ],
    assignment: {
      prompts: [
        'Write a Java code snippet that checks if a year is a Leap Year.',
        'Convert an if-else grading block into a clean switch statement.'
      ]
    }
  },
  m4: {
    id: 'm4',
    title: 'MODULE 4: LOOPS',
    overview: 'Understand loops in Java: for, while, do-while, nested loops, break, and continue. Implement pattern programs.',
    outcomes: [
      'Determine when to use for vs while loops.',
      'Control iterations with break and continue statements.',
      'Construct nested loops for grid patterns.'
    ],
    lessons: [
      {
        id: 'm4-l1',
        title: 'Lesson 4.1 for Loop',
        objectives: ['Execute loops for known intervals.'],
        theory: 'Use `for` when you know exactly how many times you want to iterate a block of code.',
        syntax: 'for (initialization; condition; update) {\n    // code\n}',
        codeExample: 'for (int i = 0; i < 3; i++) {\n    System.out.print(i + " ");\n}',
        codeOutput: '0 1 2 ',
        takeaways: ['Variables declared in loop header have block scope.']
      },
      {
        id: 'm4-l2',
        title: 'Lesson 4.2 while Loop',
        objectives: ['Execute loops for dynamic intervals.'],
        theory: 'Use `while` when you want the loop to continue iterating as long as a condition remains true.',
        syntax: 'while (condition) {\n    // code\n}',
        takeaways: ['Remember to update condition variables inside the loop to avoid infinite execution.']
      },
      {
        id: 'm4-l3',
        title: 'Lesson 4.3 do-while Loop',
        objectives: ['Guarantee at least one iteration.'],
        theory: 'The `do-while` loop executes code first, then checks the condition. It is guaranteed to run at least once.',
        syntax: 'do {\n    // code\n} while (condition);',
        takeaways: ['Requires a semicolon at the very end.']
      },
      {
        id: 'm4-l4',
        title: 'Lesson 4.4 Nested Loops',
        objectives: ['Build loops inside loops.'],
        theory: 'Used for grids, matrices, and pattern programs. The inner loop executes fully for every step of the outer loop.',
        takeaways: ['Increases time complexity exponentially.']
      },
      {
        id: 'm4-l5',
        title: 'Lesson 4.5 break Statement',
        objectives: ['Terminate loops early.'],
        theory: '`break` immediately exits the loop block, skipping all remaining iterations.',
        takeaways: ['Also used to terminate switch cases.']
      },
      {
        id: 'm4-l6',
        title: 'Lesson 4.6 continue Statement',
        objectives: ['Skip iterations.'],
        theory: '`continue` skips the current iteration and jumps directly to the next loop update/condition evaluation.',
        takeaways: ['Does not exit the loop, only skips current code block lines below it.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which loop is guaranteed to execute at least once?', options: ['A. for loop', 'B. while loop', 'C. do-while loop', 'D. enhanced-for loop'], correctAnswer: 'C. do-while loop' },
      { id: 2, question: 'Which statement skips remaining lines in a loop iteration and moves to the next iteration?', options: ['A. break', 'B. continue', 'C. exit', 'D. return'], correctAnswer: 'B. continue' },
      { id: 3, question: 'What happens if a loop condition is always true and has no break?', options: ['A. Program completes', 'B. Infinite loop', 'C. Compiler crash', 'D. Syntax error'], correctAnswer: 'B. Infinite loop' },
      { id: 4, question: 'What is the runtime complexity of two nested loops matching bounds N?', options: ['A. O(N)', 'B. O(log N)', 'C. O(N^2)', 'D. O(1)'], correctAnswer: 'C. O(N^2)' },
      { id: 5, question: 'What is required at the end of a do-while loop statement?', options: ['A. colon (:)', 'B. double colon (::)', 'C. semicolon (;)', 'D. nothing'], correctAnswer: 'C. semicolon (;)' }
    ],
    assignment: {
      prompts: [
        'Write a Java loop that prints prime numbers between 1 and 50.',
        'Explain the functional difference between break and continue.'
      ]
    }
  },
  m5: {
    id: 'm5',
    title: 'MODULE 5: METHODS & FUNCTIONS',
    overview: 'Understand methods, arguments, return statements, method overloading, recursion, and variable scope in Java.',
    outcomes: [
      'Create reusable procedures with input parameters.',
      'Implement method overloading with different parameters list.',
      'Solve problems using recursive method calls.'
    ],
    lessons: [
      {
        id: 'm5-l1',
        title: 'Lesson 5.1 Introduction to Methods',
        objectives: ['Write modular methods.'],
        theory: 'Methods are blocks of code that run only when called. They help achieve code reusability.',
        syntax: 'accessModifier returnType methodName(parameters) {\n    // code\n}',
        takeaways: ['Methods should focus on a single task.']
      },
      {
        id: 'm5-l2',
        title: 'Lesson 5.2 Method Parameters',
        objectives: ['Pass arguments.'],
        theory: 'Parameters act as variables inside methods. Arguments are passed dynamically when the method is invoked.',
        codeExample: 'public static void greet(String name) {\n    System.out.println("Hello, " + name);\n}',
        takeaways: ['Java passes arguments by value.']
      },
      {
        id: 'm5-l3',
        title: 'Lesson 5.3 Return Types',
        objectives: ['Return calculation outputs.'],
        theory: 'If you want a method to return a value, specify a datatype. Use `void` if the method returns nothing.',
        syntax: 'public int add(int x, int y) {\n    return x + y;\n}',
        takeaways: ['Must matching defined datatype in method header.']
      },
      {
        id: 'm5-l4',
        title: 'Lesson 5.4 Method Overloading',
        objectives: ['Define same methods with different signatures.'],
        theory: 'Allows multiple methods to share the same name, as long as they have different parameter lists (count, type, or order).',
        codeExample: 'public int calc(int a) { return a; }\npublic double calc(double a) { return a; }',
        takeaways: ['Cannot overload solely based on changing return types.']
      },
      {
        id: 'm5-l5',
        title: 'Lesson 5.5 Recursion',
        objectives: ['Call methods from themselves.'],
        theory: 'Recursion is the process of a method calling itself. Requires a base case to terminate execution.',
        syntax: 'public int fact(int n) {\n    if (n <= 1) return 1; // Base case\n    return n * fact(n - 1);\n}',
        takeaways: ['Missing base cases lead to StackOverflowError.']
      },
      {
        id: 'm5-l6',
        title: 'Lesson 5.6 Variable Scope',
        objectives: ['Learn local vs class scopes.'],
        theory: 'Variables declared inside a method are local to it. Class scope variables can be accessed by all class methods.',
        takeaways: ['Local variables must be initialized before use.']
      }
    ],
    quiz: [
      { id: 1, question: 'What keyword denotes that a method returns nothing?', options: ['A. null', 'B. blank', 'C. void', 'D. static'], correctAnswer: 'C. void' },
      { id: 2, question: 'Which error happens if recursive calls have no terminating base case?', options: ['A. NullPointerException', 'B. StackOverflowError', 'C. ArithmeticException', 'D. OutOfMemoryError'], correctAnswer: 'B. StackOverflowError' },
      { id: 3, question: 'Can you overload a method by changing only the return type?', options: ['A. Yes', 'B. No', 'C. Depends on JVM', 'D. Only in interfaces'], correctAnswer: 'B. No' },
      { id: 4, question: 'How is data passed into Java methods?', options: ['A. Pass by reference', 'B. Pass by value', 'C. Pass by pointer', 'D. Pass by address'], correctAnswer: 'B. Pass by value' },
      { id: 5, question: 'What is dynamic method binding?', options: ['A. Overloading resolution', 'B. Runtime recursion', 'C. Overriding resolution at runtime', 'D. Importing classes'], correctAnswer: 'C. Overriding resolution at runtime' }
    ],
    assignment: {
      prompts: [
        'Write a recursive method that generates the N-th Fibonacci number.',
        'Provide a code example showcasing method overloading.'
      ]
    }
  },
  m6: {
    id: 'm6',
    title: 'MODULE 6: ARRAYS',
    overview: 'Learn one-dimensional and two-dimensional arrays, common operations, sorting, and searching in Java.',
    outcomes: [
      'Declare and populate arrays.',
      'Iterate over multidimensional grid arrays.',
      'Sort arrays using Arrays.sort().'
    ],
    lessons: [
      {
        id: 'm6-l1',
        title: 'Lesson 6.1 Intro to Arrays',
        objectives: ['Define static data sequences.'],
        theory: 'Arrays are fixed-size sequential containers storing items of the same type.',
        syntax: 'int[] nums = new int[5];',
        takeaways: ['Size is fixed upon instantiation.']
      },
      {
        id: 'm6-l2',
        title: 'Lesson 6.2 1D Arrays',
        objectives: ['Access indexes.'],
        theory: 'Use 0-based indices to read and write elements. Use `.length` to retrieve array boundaries.',
        codeExample: 'int[] arr = {1, 2, 3};\nSystem.out.println(arr[1]);',
        codeOutput: '2',
        takeaways: ['Accessing indexes outside [0, length-1] throws ArrayIndexOutOfBoundsException.']
      },
      {
        id: 'm6-l3',
        title: 'Lesson 6.3 2D Arrays',
        objectives: ['Build matrices.'],
        theory: 'Arrays of arrays representing tables or grids. Accessed using row and column indices.',
        syntax: 'int[][] matrix = new int[3][3];',
        takeaways: ['Outer index represents rows, inner represents columns.']
      },
      {
        id: 'm6-l4',
        title: 'Lesson 6.4 Array Operations',
        objectives: ['Iterate using loops.'],
        theory: 'Iterate through arrays using standard for loops or enhanced-for (for-each) loops.',
        codeExample: 'for (int num : nums) {\n    System.out.print(num + " ");\n}',
        takeaways: ['Enhanced-for loop reads data but cannot modify array values directly.']
      },
      {
        id: 'm6-l5',
        title: 'Lesson 6.5 Array Sorting',
        objectives: ['Use java.util.Arrays.'],
        theory: 'Call `Arrays.sort(array)` to sort array elements in ascending order.',
        syntax: 'Arrays.sort(numbers);',
        takeaways: ['Uses dual-pivot Quicksort for primitives, offering O(N log N) performance.']
      },
      {
        id: 'm6-l6',
        title: 'Lesson 6.6 Array Searching',
        objectives: ['Implement Linear and Binary search.'],
        theory: 'Linear search scans element-by-element. Binary search requires a sorted array and splits it in halves.',
        takeaways: ['Binary search runs in O(log N) time.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which index represents the third element of a Java array?', options: ['A. 3', 'B. 2', 'C. 1', 'D. 4'], correctAnswer: 'B. 2' },
      { id: 2, question: 'What property gives the size of an array?', options: ['A. size()', 'B. length', 'C. length()', 'D. capacity'], correctAnswer: 'B. length' },
      { id: 3, question: 'What exception is thrown when accessing index -1?', options: ['A. NullPointerException', 'B. OutOfBoundsException', 'C. ArrayIndexOutOfBoundsException', 'D. InvalidIndexException'], correctAnswer: 'C. ArrayIndexOutOfBoundsException' },
      { id: 4, question: 'Which sorting method is built into the Arrays utility class?', options: ['A. Arrays.order()', 'B. Arrays.sort()', 'C. Arrays.filter()', 'D. Arrays.binarySearch()'], correctAnswer: 'B. Arrays.sort()' },
      { id: 5, question: 'Can you dynamically resize an array after creation?', options: ['A. Yes', 'B. No', 'C. Using size = newSize', 'D. Only in main method'], correctAnswer: 'B. No' }
    ],
    assignment: {
      prompts: [
        'Write a program to find the second largest element in an integer array.',
        'Write a code snippet to print all elements of a 2D matrix.'
      ]
    }
  },
  m7: {
    id: 'm7',
    title: 'MODULE 7: STRINGS',
    overview: 'Learn Java String manipulation, methods, immutable nature, StringBuilder, StringBuffer, and memory mapping.',
    outcomes: [
      'Compare Strings using equals() instead of ==.',
      'Use StringBuilder for highly performant loops manipulations.',
      'Understand String Pool storage mechanics.'
    ],
    lessons: [
      {
        id: 'm7-l1',
        title: 'Lesson 7.1 Intro to Strings',
        objectives: ['Understand String immutability.'],
        theory: 'Strings in Java are objects that represent sequences of characters. They are immutable: once created, their values cannot be changed.',
        takeaways: ['String updates spawn new String objects in memory.']
      },
      {
        id: 'm7-l2',
        title: 'Lesson 7.2 String Methods',
        objectives: ['Perform string operations.'],
        theory: 'Use common helper methods: length(), charAt(), substring(), toLowerCase(), toUpperCase(), and trim().',
        codeExample: 'String s = " Hello ";\nSystem.out.println(s.trim().toUpperCase());',
        codeOutput: 'HELLO',
        takeaways: ['Always remember indices are 0-based.']
      },
      {
        id: 'm7-l3',
        title: 'Lesson 7.3 StringBuilder',
        objectives: ['Build dynamic strings.'],
        theory: 'StringBuilder provides a mutable sequence of characters. It is not thread-safe but is faster than StringBuffer.',
        syntax: 'StringBuilder sb = new StringBuilder();\nsb.append("Java");',
        takeaways: ['Use StringBuilder for heavy string manipulations inside loops.']
      },
      {
        id: 'm7-l4',
        title: 'Lesson 7.4 StringBuffer',
        objectives: ['Learn thread-safe configurations.'],
        theory: 'Similar to StringBuilder but features synchronized methods, making it thread-safe but slightly slower.',
        takeaways: ['Use StringBuffer when multiple threads access the same instance.']
      },
      {
        id: 'm7-l5',
        title: 'Lesson 7.5 String Comparison',
        objectives: ['Differentiate == vs equals().'],
        theory: '`==` compares object references (memory address). `equals()` compares actual character sequences (content).',
        syntax: 'boolean isSame = str1.equals(str2);',
        takeaways: ['Always use equals() or equalsIgnoreCase() to compare string values.']
      },
      {
        id: 'm7-l6',
        title: 'Lesson 7.6 String Manipulation',
        objectives: ['Split and replace values.'],
        theory: 'Use split() to divide strings into arrays using delimiters, and replace() to substitute characters.',
        codeExample: 'String s = "a,b,c";\nString[] parts = s.split(",");',
        takeaways: ['split() takes a regular expression pattern.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which memory structure caches unique string literals?', options: ['A. Heap pool', 'B. Stack frame', 'C. String Constant Pool (SCP)', 'D. Global registry'], correctAnswer: 'C. String Constant Pool (SCP)' },
      { id: 2, question: 'Which comparison matches actual content values of strings?', options: ['A. str1 == str2', 'B. str1.equals(str2)', 'C. str1.compare(str2)', 'D. str1 === str2'], correctAnswer: 'B. str1.equals(str2)' },
      { id: 3, question: 'Which string builder tool is mutable but not thread-safe?', options: ['A. String', 'B. StringBuffer', 'C. StringBuilder', 'D. ArrayBuilder'], correctAnswer: 'C. StringBuilder' },
      { id: 4, question: 'What is the result of "abc".substring(1, 3)?', options: ['A. "ab"', 'B. "bc"', 'C. "b"', 'D. "c"'], correctAnswer: 'B. "bc"' },
      { id: 5, question: 'Why are String objects immutable in Java?', options: ['A. For security, caching, and thread safety', 'B. Because compiler cannot modify them', 'C. To save storage spaces', 'D. By mistake'], correctAnswer: 'A. For security, caching, and thread safety' }
    ],
    assignment: {
      prompts: [
        'Write a program that counts the frequencies of each word in a text string.',
        'Why does String comparison with == fail when creating objects using: new String("test")?'
      ]
    }
  },
  m8: {
    id: 'm8',
    title: 'MODULE 8: OBJECT-ORIENTED PROGRAMMING (OOP)',
    overview: 'Master Java Object-Oriented paradigms: Classes, Objects, Constructors, Encapsulation, Inheritance, Polymorphism, Abstraction, and Interfaces.',
    outcomes: [
      'Write encapsulated classes using private variables and getters/setters.',
      'Differentiate abstract classes vs interfaces.',
      'Implement polymorphism using method overriding.'
    ],
    lessons: [
      {
        id: 'm8-l1',
        title: 'Lesson 8.1 Intro to OOP',
        objectives: ['Learn the four pillars of OOP.'],
        theory: 'Object-Oriented Programming models systems as collections of interacting objects. The four pillars are: Encapsulation, Inheritance, Polymorphism, and Abstraction.',
        takeaways: ['Models real-world business logic.']
      },
      {
        id: 'm8-l2',
        title: 'Lesson 8.2 Classes and Objects',
        objectives: ['Instantiate objects.'],
        theory: 'A class is a blueprint or template. An object is a concrete instance of that class.',
        syntax: 'Car myCar = new Car();',
        takeaways: ['new keyword allocates heap memory.']
      },
      {
        id: 'm8-l3',
        title: 'Lesson 8.3 Constructors',
        objectives: ['Initialize objects.'],
        theory: 'Special methods called during object instantiation. Sharing class name, constructors have no return type.',
        codeExample: 'public class User {\n    String name;\n    public User(String n) { name = n; }\n}',
        takeaways: ['Java provides a default constructor if none is defined.']
      },
      {
        id: 'm8-l4',
        title: 'Lesson 8.4 this Keyword',
        objectives: ['Resolve variable shadows.'],
        theory: '`this` refers to the current object instance. Commonly used to assign parameters to class attributes.',
        syntax: 'public void setName(String name) {\n    this.name = name;\n}',
        takeaways: ['Differentiates parameter names from fields names.']
      },
      {
        id: 'm8-l5',
        title: 'Lesson 8.5 Encapsulation',
        objectives: ['Secure fields.'],
        theory: 'Hide data by marking variables private and exposing access via public Getters and Setters.',
        takeaways: ['Protects variables from direct outside modifications.']
      },
      {
        id: 'm8-l6',
        title: 'Lesson 8.6 Inheritance',
        objectives: ['Achieve code reuse.'],
        theory: 'Allows a subclass to inherit fields and methods from a superclass using the `extends` keyword.',
        syntax: 'class Dog extends Animal { }',
        takeaways: ['Java does not support multiple class inheritance.']
      },
      {
        id: 'm8-l7',
        title: 'Lesson 8.7 Polymorphism',
        objectives: ['Implement multiple forms.'],
        theory: 'Allows methods to behave differently based on the object executing them. Consists of Compile-time (Overloading) and Runtime (Overriding) polymorphism.',
        takeaways: ['Superclass references can point to subclass instances.']
      },
      {
        id: 'm8-l8',
        title: 'Lesson 8.8 Abstraction',
        objectives: ['Expose concepts without detail.'],
        theory: 'Expose high-level features while hiding implementation details. Declared using abstract classes or interfaces.',
        syntax: 'abstract class Shape { abstract void draw(); }',
        takeaways: ['Abstract classes cannot be instantiated.']
      },
      {
        id: 'm8-l9',
        title: 'Lesson 8.9 Interfaces',
        objectives: ['Implement multiple contracts.'],
        theory: 'Interfaces define contracts for classes to implement using the `implements` keyword. Supports multiple inheritance.',
        syntax: 'interface Drawable { void draw(); }',
        takeaways: ['Fields in interfaces are implicitly public static final.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which pillar hides implementation details and exposes only functionality?', options: ['A. Encapsulation', 'B. Inheritance', 'C. Polymorphism', 'D. Abstraction'], correctAnswer: 'D. Abstraction' },
      { id: 2, question: 'Which keyword points to the current object instance?', options: ['A. super', 'B. this', 'C. base', 'D. current'], correctAnswer: 'B. this' },
      { id: 3, question: 'Can a Java class extend multiple parent classes?', options: ['A. Yes', 'B. No', 'C. Only abstract classes', 'D. Only in interfaces'], correctAnswer: 'B. No' },
      { id: 4, question: 'Which keyword implements an interface contract?', options: ['A. extends', 'B. inherits', 'C. implements', 'D. uses'], correctAnswer: 'C. implements' },
      { id: 5, question: 'What is compile-time polymorphism?', options: ['A. Method Overriding', 'B. Method Overloading', 'C. Garbage Collection', 'D. Inheritance'], correctAnswer: 'B. Method Overloading' }
    ],
    assignment: {
      prompts: [
        'Design a Class structure representing a Bank Account with encapsulation.',
        'Explain the differences between abstract classes and interfaces.'
      ]
    }
  },
  m9: {
    id: 'm9',
    title: 'MODULE 9: EXCEPTION HANDLING',
    overview: 'Learn robust code handling in Java. Differentiate checked vs unchecked exceptions, try-catch-finally, throws, and custom exceptions.',
    outcomes: [
      'Catch run-time exceptions without program crashes.',
      'Design finally blocks to release resources.',
      'Create custom checked exceptions.'
    ],
    lessons: [
      {
        id: 'm9-l1',
        title: 'Lesson 9.1 Exceptions Intro',
        objectives: ['Understand exception hierarchies.'],
        theory: 'Exceptions disrupt normal program flow. The parent Throwable class branches into Exception and Error. Exceptions split into Checked and Unchecked.',
        takeaways: ['Errors are non-recoverable system issues.', 'Exceptions are recoverable.']
      },
      {
        id: 'm9-l2',
        title: 'Lesson 9.2 try-catch Block',
        objectives: ['Handle errors safely.'],
        theory: 'Wrap risky code inside a `try` block and define exception handling inside `catch` blocks.',
        syntax: 'try {\n    int a = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(e.getMessage());\n}',
        takeaways: ['Place specific catches before general Exception catch blocks.']
      },
      {
        id: 'm9-l3',
        title: 'Lesson 9.3 finally Block',
        objectives: ['Clean up resources.'],
        theory: 'The `finally` block always executes, regardless of whether an exception was thrown or caught.',
        takeaways: ['Perfect for closing database connections or open files.']
      },
      {
        id: 'm9-l4',
        title: 'Lesson 9.4 throw Keyword',
        objectives: ['Throw exceptions manually.'],
        theory: 'Use `throw` to explicitly instantiate and throw an exception object.',
        syntax: 'throw new IllegalArgumentException("Invalid age");',
        takeaways: ['Halts normal code block execution immediately.']
      },
      {
        id: 'm9-l5',
        title: 'Lesson 9.5 throws Keyword',
        objectives: ['Delegate handling.'],
        theory: 'Add `throws` to a method signature to declare that it may throw checked exceptions, delegating the responsibility to the caller.',
        syntax: 'public void load() throws IOException { }',
        takeaways: ['Forces calling methods to handle declared exceptions.']
      },
      {
        id: 'm9-l6',
        title: 'Lesson 9.6 Custom Exceptions',
        objectives: ['Write domain exceptions.'],
        theory: 'Extend the `Exception` class to create custom checked exceptions, or `RuntimeException` to create unchecked exceptions.',
        codeExample: 'class InsufficientFundsException extends Exception {\n    public InsufficientFundsException(String m) { super(m); }\n}',
        takeaways: ['Improves readability of domain-specific errors.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which block always runs, even if an exception is thrown?', options: ['A. try', 'B. catch', 'C. finally', 'D. throws'], correctAnswer: 'C. finally' },
      { id: 2, question: 'Which keyword declares exceptions in method headers?', options: ['A. throw', 'B. throws', 'C. try', 'D. declare'], correctAnswer: 'B. throws' },
      { id: 3, question: 'Which class serves as the parent to all exceptions?', options: ['A. Throwable', 'B. Object', 'C. Error', 'D. Compiler'], correctAnswer: 'A. Throwable' },
      { id: 4, question: 'Is NullPointerException checked or unchecked?', options: ['A. Checked', 'B. Unchecked', 'C. Error', 'D. Warning'], correctAnswer: 'B. Unchecked' },
      { id: 5, question: 'How do you create a custom checked exception?', options: ['A. Extend RuntimeException', 'B. Extend Exception', 'C. Extend Error', 'D. Implement Interface'], correctAnswer: 'B. Extend Exception' }
    ],
    assignment: {
      prompts: [
        'Write a block of code reading file inputs that catches custom file errors.',
        'Contrast the throw keyword with the throws keyword.'
      ]
    }
  },
  m10: {
    id: 'm10',
    title: 'MODULE 10: COLLECTION FRAMEWORK',
    overview: 'Master data structures in Java: Lists, Sets, Maps, ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, and Iterators.',
    outcomes: [
      'Choose appropriate Collection structures based on runtime requirements.',
      'Iterate over key-value maps.',
      'Differentiate HashSet vs TreeSet sorting.'
    ],
    lessons: [
      {
        id: 'm10-l1',
        title: 'Lesson 10.1 Collections Intro',
        objectives: ['Learn Collections hierarchies.'],
        theory: 'Provides a unified framework to store and manipulate groups of objects. Extends java.util.Collection interface.',
        takeaways: ['Excludes Map interfaces, which are handled separately.']
      },
      {
        id: 'm10-l2',
        title: 'Lesson 10.2 ArrayList',
        objectives: ['Use dynamic arrays.'],
        theory: 'A resizable array implementation of the List interface. Allows duplicates and maintains insertion order.',
        syntax: 'List<String> list = new ArrayList<>();',
        codeExample: 'List<Integer> list = new ArrayList<>();\nlist.add(10);\nSystem.out.println(list.get(0));',
        codeOutput: '10',
        takeaways: ['Offers fast O(1) random reads.', 'Resizes automatically when full.']
      },
      {
        id: 'm10-l3',
        title: 'Lesson 10.3 LinkedList',
        objectives: ['Use doubly-linked structures.'],
        theory: 'Implements both List and Queue interfaces. Uses sequential node references to link items.',
        takeaways: ['Fast O(1) insertions/deletions.', 'Slower random reads than ArrayList.']
      },
      {
        id: 'm10-l4',
        title: 'Lesson 10.4 HashSet',
        objectives: ['Store unique elements.'],
        theory: 'Implements the Set interface. Backed by a HashMap, it does not allow duplicates and has no order.',
        syntax: 'Set<String> set = new HashSet<>();',
        takeaways: ['Elements must override hashCode() and equals().']
      },
      {
        id: 'm10-l5',
        title: 'Lesson 10.5 TreeSet',
        objectives: ['Store sorted sets.'],
        theory: 'A Set backed by a Red-Black tree structure. Elements are stored in their natural sorted order.',
        takeaways: ['Retrievals run in O(log N) time.']
      },
      {
        id: 'm10-l6',
        title: 'Lesson 10.6 HashMap',
        objectives: ['Store key-value pairs.'],
        theory: 'Stores key-value mappings. Keys are unique, values can duplicate. Fast O(1) lookup.',
        syntax: 'Map<String, Integer> map = new HashMap<>();\nmap.put("Java", 8);',
        takeaways: ['Allows one null key and multiple null values.']
      },
      {
        id: 'm10-l7',
        title: 'Lesson 10.7 TreeMap',
        objectives: ['Store sorted maps.'],
        theory: 'Stores key-value pairs sorted by keys. Backed by a Red-Black tree.',
        takeaways: ['Useful when keys must remain sorted.']
      },
      {
        id: 'm10-l8',
        title: 'Lesson 10.8 Iterator',
        objectives: ['Traverse collections safely.'],
        theory: 'Iterators allow safe collection traversal while allowing elements to be removed during iteration.',
        syntax: 'Iterator<String> it = list.iterator();\nwhile(it.hasNext()) { String s = it.next(); }',
        takeaways: ['Avoids ConcurrentModificationException.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which collection does not allow duplicate values?', options: ['A. ArrayList', 'B. LinkedList', 'C. HashSet', 'D. Vector'], correctAnswer: 'C. HashSet' },
      { id: 2, question: 'Which class maps key-value pairs with O(1) lookup?', options: ['A. TreeSet', 'B. HashMap', 'C. ArrayList', 'D. TreeMap'], correctAnswer: 'B. HashMap' },
      { id: 3, question: 'Which Set is sorted automatically?', options: ['A. HashSet', 'B. LinkedHashSet', 'C. TreeSet', 'D. VectorSet'], correctAnswer: 'C. TreeSet' },
      { id: 4, question: 'How do you check if a map contains a key?', options: ['A. map.hasKey()', 'B. map.containsKey()', 'C. map.find()', 'D. map.get()'], correctAnswer: 'B. map.containsKey()' },
      { id: 5, question: 'What exception is thrown when modifying collections during simple loop iteration?', options: ['A. NullPointerException', 'B. ConcurrentModificationException', 'C. IndexOutOfBoundsException', 'D. CollectionException'], correctAnswer: 'B. ConcurrentModificationException' }
    ],
    assignment: {
      prompts: [
        'Write a program to remove duplicates from an ArrayList using a Set.',
        'Explain when you would choose a TreeMap over a HashMap.'
      ]
    }
  },
  m11: {
    id: 'm11',
    title: 'MODULE 11: FILE HANDLING',
    overview: 'Learn reading, writing, file structures, BufferedReader, and BufferedWriter configurations in Java.',
    outcomes: [
      'Write text strings directly to disk files.',
      'Parse large files using BufferedReader.',
      'Manage system resources using Try-with-resources.'
    ],
    lessons: [
      {
        id: 'm11-l1',
        title: 'Lesson 11.1 File Intro',
        objectives: ['Explore java.io.File.'],
        theory: 'The File class represents files and directory paths on disk. Does not read or write file contents itself.',
        syntax: 'File file = new File("test.txt");',
        takeaways: ['Check file existence with file.exists().']
      },
      {
        id: 'm11-l2',
        title: 'Lesson 11.2 Reading Files',
        objectives: ['Use FileReader.'],
        theory: 'FileReader reads files character by character. Typically wrapped inside BufferedReader for better efficiency.',
        takeaways: ['Must handle FileNotFoundException.']
      },
      {
        id: 'm11-l3',
        title: 'Lesson 11.3 Writing Files',
        objectives: ['Use FileWriter.'],
        theory: 'FileWriter writes characters to files. Requires calling flush() or close() to persist data.',
        takeaways: ['Can write in append mode by passing true to the constructor: new FileWriter("t.txt", true).']
      },
      {
        id: 'm11-l4',
        title: 'Lesson 11.4 BufferedReader',
        objectives: ['Read files line by line.'],
        theory: 'Buffers characters to improve read performance. Offers `readLine()` to read text line by line.',
        syntax: 'BufferedReader br = new BufferedReader(new FileReader("t.txt"));',
        takeaways: ['Significantly faster than raw FileReader.']
      },
      {
        id: 'm11-l5',
        title: 'Lesson 11.5 BufferedWriter',
        objectives: ['Write buffered lines.'],
        theory: 'Improves write performance. Offers `newLine()` to write cross-platform newline characters.',
        takeaways: ['Always close buffers to flush remaining data.']
      },
      {
        id: 'm11-l6',
        title: 'Lesson 11.6 File Project',
        objectives: ['Manage data persistence.'],
        theory: 'Build simple file-based databases to store user records, converting objects to structured strings.',
        takeaways: ['Try-with-resources automatically closes resources to prevent leaks.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which class reads files line by line?', options: ['A. FileReader', 'B. BufferedReader', 'C. Scanner', 'D. FileInputStream'], correctAnswer: 'B. BufferedReader' },
      { id: 2, question: 'Which construct automatically closes resources?', options: ['A. try catch finally', 'B. Try-with-resources', 'C. garbage collection', 'D. finalize()'], correctAnswer: 'B. Try-with-resources' },
      { id: 3, question: 'How do you check if a file exists?', options: ['A. file.has()', 'B. file.exists()', 'C. file.check()', 'D. file.load()'], correctAnswer: 'B. file.exists()' },
      { id: 4, question: 'Which FileWriter constructor appends text to an existing file?', options: ['A. new FileWriter("file.txt")', 'B. new FileWriter("file.txt", true)', 'C. new FileWriter("file.txt", "append")', 'D. new FileWriter(true)'], correctAnswer: 'B. new FileWriter("file.txt", true)' },
      { id: 5, question: 'Which package contains File handling classes?', options: ['A. java.util', 'B. java.lang', 'C. java.io', 'D. java.net'], correctAnswer: 'C. java.io' }
    ],
    assignment: {
      prompts: [
        'Write a program that copies the contents of source.txt to destination.txt using Try-with-resources.',
        'What is the benefit of wrapping a FileReader in a BufferedReader?'
      ]
    }
  },
  m12: {
    id: 'm12',
    title: 'MODULE 12: MULTITHREADING',
    overview: 'Learn multithreaded systems execution. Differentiate Thread class, Runnable interface, thread synchronization, and thread pools.',
    outcomes: [
      'Create concurrent threads of execution.',
      'Synchronize critical sections to prevent data races.',
      'Use thread pools to manage threads.'
    ],
    lessons: [
      {
        id: 'm12-l1',
        title: 'Lesson 12.1 Threads Intro',
        objectives: ['Understand multithreading.'],
        theory: 'Multithreading allows concurrent execution of two or more parts of a program to maximize CPU usage.',
        takeaways: ['Threads share class process memory.']
      },
      {
        id: 'm12-l2',
        title: 'Lesson 12.2 Thread Class',
        objectives: ['Extend Thread.'],
        theory: 'Extend the Thread class and override the `run()` method. Call `start()` to spawn a new thread.',
        syntax: 'class MyThread extends Thread {\n    public void run() { }\n}',
        takeaways: ['Calling run() directly runs it in the current thread instead of spawning a new one.']
      },
      {
        id: 'm12-l3',
        title: 'Lesson 12.3 Runnable',
        objectives: ['Implement Runnable.'],
        theory: 'Implement Runnable and pass the instance to a Thread object. Preferred over extending Thread.',
        codeExample: 'Runnable r = () -> System.out.println("Running");\nnew Thread(r).start();',
        takeaways: ['Avoids single inheritance limits.']
      },
      {
        id: 'm12-l4',
        title: 'Lesson 12.4 Thread Lifecycle',
        objectives: ['Identify thread states.'],
        theory: 'Thread states: New, Runnable, Blocked, Waiting, Timed Waiting, and Terminated.',
        takeaways: ['Thread schedulers manage state transitions.']
      },
      {
        id: 'm12-l5',
        title: 'Lesson 12.5 Synchronization',
        objectives: ['Prevent race conditions.'],
        theory: 'Use the `synchronized` keyword to lock methods or blocks, ensuring only one thread can access them at a time.',
        syntax: 'public synchronized void increment() {\n    count++;\n}',
        takeaways: ['Solves data inconsistency issues.']
      },
      {
        id: 'm12-l6',
        title: 'Lesson 12.6 Thread Pools',
        objectives: ['Use ExecutorService.'],
        theory: 'Instead of manually spawning threads, use thread pools (via ExecutorService) to reuse a fixed number of threads.',
        syntax: 'ExecutorService pool = Executors.newFixedThreadPool(5);',
        takeaways: ['Reduces the overhead of repeatedly spawning and destroying threads.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which method starts thread execution?', options: ['A. run()', 'B. start()', 'C. init()', 'D. execute()'], correctAnswer: 'B. start()' },
      { id: 2, question: 'Which keyword prevents concurrent access to critical methods?', options: ['A. lock', 'B. private', 'C. synchronized', 'D. volatile'], correctAnswer: 'C. synchronized' },
      { id: 3, question: 'Why is Runnable preferred over extending Thread?', options: ['A. Runnable is faster', 'B. Java supports multiple interface implementations but only single class inheritance', 'C. Runnable handles synchronized naturally', 'D. Thread is deprecated'], correctAnswer: 'B. Java supports multiple interface implementations but only single class inheritance' },
      { id: 4, question: 'What state is a thread in after calling start()?', options: ['A. Running', 'B. Runnable', 'C. New', 'D. Terminated'], correctAnswer: 'B. Runnable' },
      { id: 5, question: 'Which class creates built-in thread pools?', options: ['A. ThreadBuilder', 'B. Executors', 'C. PoolService', 'D. RunnableFactory'], correctAnswer: 'B. Executors' }
    ],
    assignment: {
      prompts: [
        'Write a thread-safe singleton program utilizing synchronized blocks.',
        'Explain the difference between start() and run() methods in Thread.'
      ]
    }
  },
  m13: {
    id: 'm13',
    title: 'MODULE 13: JAVA 8 FEATURES',
    overview: 'Learn key modern Java paradigms: Lambda Expressions, Functional Interfaces, Stream API, Optional class, and Method References.',
    outcomes: [
      'Write clean, functional code with Lambdas.',
      'Process collections using Stream operations.',
      'Avoid null pointer issues with Optional.'
    ],
    lessons: [
      {
        id: 'm13-l1',
        title: 'Lesson 13.1 Lambdas',
        objectives: ['Write anonymous methods.'],
        theory: 'Lambdas provide a clean way to implement functional interfaces using expressions.',
        syntax: '(x, y) -> x + y',
        takeaways: ['Reduces boilerplate code significantly.']
      },
      {
        id: 'm13-l2',
        title: 'Lesson 13.2 Functional Interfaces',
        objectives: ['Learn built-in interfaces.'],
        theory: 'An interface with exactly one abstract method. Includes Predicate, Function, Consumer, and Supplier.',
        takeaways: ['Can be annotated with @FunctionalInterface.']
      },
      {
        id: 'm13-l3',
        title: 'Lesson 13.3 Stream API',
        objectives: ['Perform bulk operations.'],
        theory: 'Streams process collections of objects in a functional style using pipelines of intermediate and terminal operations.',
        codeExample: 'List<String> list = Arrays.asList("a", "b", "c");\nlist.stream().filter(s -> s.startsWith("a")).forEach(System.out::println);',
        codeOutput: 'a',
        takeaways: ['Intermediate operations are lazy.', 'Streams do not modify original collections.']
      },
      {
        id: 'm13-l4',
        title: 'Lesson 13.4 Method References',
        objectives: ['Expose methods cleanly.'],
        theory: 'Method references are shorthand notations for lambda expressions that call existing methods.',
        syntax: 'System.out::println',
        takeaways: ['Uses the double colon (::) operator.']
      },
      {
        id: 'm13-l5',
        title: 'Lesson 13.5 Optional Class',
        objectives: ['Handle null safety.'],
        theory: 'A container object which may or may not contain a non-null value, helping prevent NullPointerExceptions.',
        syntax: 'Optional<String> name = Optional.ofNullable(val);',
        takeaways: ['Use `.orElse()` or `.orElseThrow()` to safely extract values.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which annotation declares single-method functional interfaces?', options: ['A. @Interface', 'B. @FunctionalInterface', 'C. @Lambda', 'D. @Contract'], correctAnswer: 'B. @FunctionalInterface' },
      { id: 2, question: 'Which operator denotes method references?', options: ['A. ->', 'B. .', 'C. ::', 'D. #'], correctAnswer: 'C. ::' },
      { id: 3, question: 'Which Stream operation aggregates elements to a single result?', options: ['A. map()', 'B. filter()', 'C. reduce()', 'D. sorted()'], correctAnswer: 'C. reduce()' },
      { id: 4, question: 'How do you create an empty Optional container?', options: ['A. Optional.empty()', 'B. new Optional()', 'C. Optional.of(null)', 'D. Optional.clear()'], correctAnswer: 'A. Optional.empty()' },
      { id: 5, question: 'Is stream map() intermediate or terminal?', options: ['A. Intermediate', 'B. Terminal', 'C. Finalizer', 'D. Getter'], correctAnswer: 'A. Intermediate' }
    ],
    assignment: {
      prompts: [
        'Write a Stream pipeline that filters odd numbers, squares them, and prints the result.',
        'Show how Optional replaces checking `if (user != null)`.'
      ]
    }
  },
  m14: {
    id: 'm14',
    title: 'MODULE 14: JDBC (DATABASE CONNECTIVITY)',
    overview: 'Connect Java apps to databases using JDBC: Drivers, Connection, Statement, PreparedStatements, and ResultSets.',
    outcomes: [
      'Establish database connections via URL parameters.',
      'Execute SQL queries using PreparedStatements.',
      'Parse query results using ResultSet.'
    ],
    lessons: [
      {
        id: 'm14-l1',
        title: 'Lesson 14.1 JDBC Intro',
        objectives: ['Learn Java Database Connectivity.'],
        theory: 'JDBC is a Java API that manages database connections and executes SQL queries.',
        takeaways: ['Uses database-specific JDBC drivers.']
      },
      {
        id: 'm14-l2',
        title: 'Lesson 14.2 Database Setup',
        objectives: ['Install database drivers.'],
        theory: 'Register database URLs (e.g. `jdbc:mysql://localhost:3306/db`) and load drivers using Class.forName().',
        takeaways: ['Maven handles driver dependencies automatically.']
      },
      {
        id: 'm14-l3',
        title: 'Lesson 14.3 JDBC Connection',
        objectives: ['Establish connections.'],
        theory: 'Use DriverManager.getConnection(url, user, pass) to obtain a Connection instance.',
        syntax: 'Connection conn = DriverManager.getConnection(url, u, p);',
        takeaways: ['Establish connections inside try-with-resources blocks.']
      },
      {
        id: 'm14-l4',
        title: 'Lesson 14.4 CRUD Operations',
        objectives: ['Run database mutations.'],
        theory: 'Execute INSERT, UPDATE, and DELETE statements using the connection to mutate database state.',
        takeaways: ['Use executeUpdate() for write queries.']
      },
      {
        id: 'm14-l5',
        title: 'Lesson 14.5 PreparedStatements',
        objectives: ['Prevent SQL injection.'],
        theory: 'PreparedStatements precompile queries and dynamically bind arguments, preventing SQL injection vulnerabilities.',
        syntax: 'PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE id = ?");\nps.setInt(1, 10);',
        takeaways: ['Always prefer PreparedStatement over Statement.']
      },
      {
        id: 'm14-l6',
        title: 'Lesson 14.6 ResultSet',
        objectives: ['Parse query outputs.'],
        theory: 'A cursor pointing to row items returned by queries. Call rs.next() to iterate over rows.',
        codeExample: 'ResultSet rs = stmt.executeQuery("SELECT name FROM users");\nwhile(rs.next()) {\n    System.out.println(rs.getString("name"));\n}',
        takeaways: ['Indices in getX() methods are 1-based, matching columns.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which interface manages SQL results rows?', options: ['A. Connection', 'B. PreparedStatement', 'C. ResultSet', 'D. Statement'], correctAnswer: 'C. ResultSet' },
      { id: 2, question: 'Why are PreparedStatements preferred over standard Statements?', options: ['A. They compile faster', 'B. They prevent SQL Injection and cache query execution plans', 'C. They do not require Connection objects', 'D. They use lower memory'], correctAnswer: 'B. They prevent SQL Injection and cache query execution plans' },
      { id: 3, question: 'What method runs SELECT queries?', options: ['A. executeUpdate()', 'B. executeQuery()', 'C. runSQL()', 'D. getResults()'], correctAnswer: 'B. executeQuery()' },
      { id: 4, question: 'Which JDBC url represents connection to MySQL?', options: ['A. jdbc:postgresql://...', 'B. jdbc:mysql://...', 'C. mysql:jdbc://...', 'D. db:mysql://...'], correctAnswer: 'B. jdbc:mysql://...' },
      { id: 5, question: 'What is the starting index of ResultSet columns?', options: ['A. 0', 'B. 1', 'C. -1', 'D. depends on driver'], correctAnswer: 'B. 1' }
    ],
    assignment: {
      prompts: [
        'Write a code snippet inserting student records using PreparedStatements.',
        'Explain the role of DriverManager in JDBC.'
      ]
    }
  },
  m15: {
    id: 'm15',
    title: 'MODULE 15: DATA STRUCTURES & ALGORITHMS IN JAVA',
    overview: 'Learn Big O analysis and core computer science algorithms: Linked Lists, Stacks, Queues, Binary Trees, Graphs, Sorting, and Searching.',
    outcomes: [
      'Analyze code runtime using Big O notation.',
      'Implement Stacks and Queues using dynamic lists.',
      'Perform Binary Search on arrays.'
    ],
    lessons: [
      {
        id: 'm15-l1',
        title: 'Lesson 15.1 Time Complexity',
        objectives: ['Learn Big O.'],
        theory: 'Big O analyzes resource consumption (time/space) relative to input size. Common complexities: O(1), O(log N), O(N), O(N log N), O(N^2).',
        takeaways: ['Avoid nested loops that run in O(N^2) time whenever possible.']
      },
      {
        id: 'm15-l2',
        title: 'Lesson 15.2 Arrays',
        objectives: ['Analyze array operations.'],
        theory: 'Arrays provide O(1) index access, but search/insert/delete operations run in O(N) time.',
        takeaways: ['Fast access, slow resizing/mutations.']
      },
      {
        id: 'm15-l3',
        title: 'Lesson 15.3 Linked Lists',
        objectives: ['Build pointer nodes.'],
        theory: 'Linked list nodes reference successive items, allowing fast insertions/deletions at the cost of slower lookups.',
        takeaways: ['No contiguous memory required.']
      },
      {
        id: 'm15-l4',
        title: 'Lesson 15.4 Stacks',
        objectives: ['Use LIFO patterns.'],
        theory: 'Last-In-First-Out data structures. Primary operations: push (add) and pop (remove).',
        syntax: 'Stack<Integer> stack = new Stack<>();',
        takeaways: ['Useful for depth-first searches and recursive backtracking.']
      },
      {
        id: 'm15-l5',
        title: 'Lesson 15.5 Queues',
        objectives: ['Use FIFO patterns.'],
        theory: 'First-In-First-Out data structures. Primary operations: offer (add) and poll (remove).',
        takeaways: ['Useful for breath-first searches and task schedulers.']
      },
      {
        id: 'm15-l6',
        title: 'Lesson 15.6 Trees',
        objectives: ['Understand Binary Search Trees.'],
        theory: 'Hierarchical node tree where left child < root < right child. Quick O(log N) searches.',
        takeaways: ['Requires tree balance to maintain O(log N) performance.']
      },
      {
        id: 'm15-l7',
        title: 'Lesson 15.7 Graphs',
        objectives: ['Learn nodes networks.'],
        theory: 'Networks of vertices connected by edges. Traversed using BFS (queue) and DFS (stack/recursion).',
        takeaways: ['Represented via adjacency lists or matrices.']
      },
      {
        id: 'm15-l8',
        title: 'Lesson 15.8 Searching Algorithms',
        objectives: ['Use binary search.'],
        theory: 'Binary Search continually divides sorted arrays in halves. Runs in fast O(log N) time.',
        takeaways: ['Requires arrays to be sorted.']
      },
      {
        id: 'm15-l9',
        title: 'Lesson 15.9 Sorting Algorithms',
        objectives: ['Compare sorting strategies.'],
        theory: 'Compares O(N^2) sorting (Bubble, Insertion) with O(N log N) sorting (Merge, Quick).',
        takeaways: ['Merge sort is stable; Quicksort is typically faster in-place.']
      }
    ],
    quiz: [
      { id: 1, question: 'What is the search time complexity of Binary Search?', options: ['A. O(N)', 'B. O(log N)', 'C. O(N^2)', 'D. O(1)'], correctAnswer: 'B. O(log N)' },
      { id: 2, question: 'Which data structure follows LIFO?', options: ['A. Queue', 'B. Stack', 'C. LinkedList', 'D. Matrix'], correctAnswer: 'B. Stack' },
      { id: 3, question: 'What traversal algorithm uses queues?', options: ['A. Depth First Search (DFS)', 'B. Breadth First Search (BFS)', 'C. In-order traversal', 'D. Binary search'], correctAnswer: 'B. Breadth First Search (BFS)' },
      { id: 4, question: 'What is the worst-case sorting complexity of Bubble Sort?', options: ['A. O(N log N)', 'B. O(N)', 'C. O(N^2)', 'D. O(log N)'], correctAnswer: 'C. O(N^2)' },
      { id: 5, question: 'What is the parent class interface for Queue implementations?', options: ['A. List', 'B. Queue', 'C. Deque', 'D. Set'], correctAnswer: 'B. Queue' }
    ],
    assignment: {
      prompts: [
        'Write a function that reverses a singly linked list in place.',
        'Show how to implement a queue using two stacks.'
      ]
    }
  },
  m16: {
    id: 'm16',
    title: 'MODULE 16: SPRING BOOT FUNDAMENTALS',
    overview: 'Learn Spring Boot framework architectures: REST APIs, Controllers, Services, Repositories, and Dependency Injection.',
    outcomes: [
      'Configure Spring Boot projects using Spring Initializr.',
      'Build REST endpoints with @RestController.',
      'Use Dependency Injection with @Autowired.'
    ],
    lessons: [
      {
        id: 'm16-l1',
        title: 'Lesson 16.1 Spring Boot Intro',
        objectives: ['Understand Spring frameworks.'],
        theory: 'Spring Boot simplifies enterprise Java applications setup with auto-configuration and embedded servers (Tomcat).',
        takeaways: ['Removes complex XML configurations configurations.']
      },
      {
        id: 'm16-l2',
        title: 'Lesson 16.2 Spring Boot Setup',
        objectives: ['Build Maven projects.'],
        theory: 'Generate projects via Spring Initializr, including dependencies like Spring Web, JPA, and PostgreSQL.',
        takeaways: ['Uses application.properties to configure ports and variables.']
      },
      {
        id: 'm16-l3',
        title: 'Lesson 16.3 REST APIs',
        objectives: ['Expose REST endpoints.'],
        theory: 'REST endpoints use HTTP verbs (GET, POST, PUT, DELETE) to manage resources.',
        takeaways: ['Returns data typically in JSON format.']
      },
      {
        id: 'm16-l4',
        title: 'Lesson 16.4 Controllers',
        objectives: ['Map routes.'],
        theory: 'Use `@RestController` and `@RequestMapping` to map HTTP requests to controller methods.',
        syntax: '@RestController\n@RequestMapping("/api")\npublic class MyController { }',
        takeaways: ['Handles client request mapping and serialization.']
      },
      {
        id: 'm16-l5',
        title: 'Lesson 16.5 Services',
        objectives: ['Isolate business logic.'],
        theory: 'Annotate service classes with `@Service` to separate business logic from controllers.',
        takeaways: ['Keeps controllers slim and maintainable.']
      },
      {
        id: 'm16-l6',
        title: 'Lesson 16.6 Repositories',
        objectives: ['Access databases.'],
        theory: 'Extend JpaRepository to get built-in database CRUD methods without writing custom SQL.',
        syntax: 'public interface UserRepository extends JpaRepository<User, Long> { }',
        takeaways: ['Leverages Hibernate queries generation.']
      },
      {
        id: 'm16-l7',
        title: 'Lesson 16.7 Dependency Injection',
        objectives: ['Learn Inversion of Control.'],
        theory: 'Inversion of Control (IoC) delegates object creation to the Spring container. Classes query dependencies using `@Autowired`.',
        takeaways: ['Promotes loose coupling and easier testing.']
      },
      {
        id: 'm16-l8',
        title: 'Lesson 16.8 Project Structure',
        objectives: ['Review package layouts.'],
        theory: 'Organize packages into controller, service, repository, entity, and config directories.',
        takeaways: ['Ensures scalability of enterprise applications.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which annotation declares a REST API controller class?', options: ['A. @Controller', 'B. @RestController', 'C. @API', 'D. @RequestMapping'], correctAnswer: 'B. @RestController' },
      { id: 2, question: 'Which tool bootstraps Spring Boot starter projects?', options: ['A. Maven builder', 'B. Spring Initializr', 'C. NPM init', 'D. Gradle daemon'], correctAnswer: 'B. Spring Initializr' },
      { id: 3, question: 'Which annotation enables Dependency Injection in Spring?', options: ['A. @Inject', 'B. @Autowired', 'C. @Resource', 'D. @Bean'], correctAnswer: 'B. @Autowired' },
      { id: 4, question: 'What is the default embedded web server in Spring Boot?', options: ['A. Nginx', 'B. Jetty', 'C. Tomcat', 'D. GlassFish'], correctAnswer: 'C. Tomcat' },
      { id: 5, question: 'Which interface is commonly extended for repositories?', options: ['A. CrudRepository', 'B. JpaRepository', 'C. MongoRepository', 'D. sqlRepository'], correctAnswer: 'B. JpaRepository' }
    ],
    assignment: {
      prompts: [
        'Write a simple REST controller that returns "Hello Spring" on /api/hello GET route.',
        'Explain the difference between @Autowired constructor injection vs field injection.'
      ]
    }
  },
  m17: {
    id: 'm17',
    title: 'MODULE 17: SPRING BOOT + DATABASE',
    overview: 'Integrate relational databases (MySQL/PostgreSQL) with Spring Boot using Spring Data JPA, Hibernate mapping, and CRUD APIs.',
    outcomes: [
      'Connect Spring Boot to a PostgreSQL database.',
      'Map Java classes to database tables using @Entity.',
      'Implement validation constraints.'
    ],
    lessons: [
      {
        id: 'm17-l1',
        title: 'Lesson 17.1 Database Integration',
        objectives: ['Configure connections properties.'],
        theory: 'Add database drivers to pom.xml. Configure database url, username, and password in application.properties.',
        syntax: 'spring.datasource.url=jdbc:postgresql://...\nspring.datasource.username=user',
        takeaways: ['Turn on spring.jpa.hibernate.ddl-auto=update to auto-generate tables.']
      },
      {
        id: 'm17-l2',
        title: 'Lesson 17.2 JPA & Hibernate',
        objectives: ['Understand Object Relational Mapping.'],
        theory: 'JPA is the specification; Hibernate is the implementation. Maps Java objects directly to SQL table structures.',
        takeaways: ['Avoids writing repetitive boilerplate SQL queries.']
      },
      {
        id: 'm17-l3',
        title: 'Lesson 17.3 Entity Mapping',
        objectives: ['Define Entity classes.'],
        theory: 'Annotate Java classes with `@Entity` to map them to database tables. Use `@Id` to define primary keys.',
        codeExample: '@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n}',
        takeaways: ['Requires public/protected empty constructor.']
      },
      {
        id: 'm17-l4',
        title: 'Lesson 17.4 CRUD APIs',
        objectives: ['Build CRUD endpoints.'],
        theory: 'Create controllers that call services to interact with repository interfaces, implementing complete CRUD mappings.',
        takeaways: ['Ensure return states match standard HTTP status codes.']
      },
      {
        id: 'm17-l5',
        title: 'Lesson 17.5 Validation',
        objectives: ['Validate incoming request models.'],
        theory: 'Use annotations like `@NotNull`, `@Size`, `@Email` to validate request payloads, and catch validation errors in controllers.',
        syntax: '@Size(min = 2, max = 50)\nprivate String username;',
        takeaways: ['Annotate controllers argument parameters with @Valid.']
      },
      {
        id: 'm17-l6',
        title: 'Lesson 17.6 Exception Handling',
        objectives: ['Build Global Exception handlers.'],
        theory: 'Use `@RestControllerAdvice` and `@ExceptionHandler` to globally catch and format API error responses.',
        takeaways: ['Ensures consistent JSON error formats.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which JPA annotation marks primary keys?', options: ['A. @Column', 'B. @Id', 'C. @PrimaryKey', 'D. @GeneratedValue'], correctAnswer: 'B. @Id' },
      { id: 2, question: 'Which JPA annotation maps classes to SQL tables?', options: ['A. @Table', 'B. @Entity', 'C. @Model', 'D. @Database'], correctAnswer: 'B. @Entity' },
      { id: 3, question: 'How do you trigger request validation inside controller mappings?', options: ['A. @Validate', 'B. @Valid', 'C. @NotNull', 'D. @Check'], correctAnswer: 'B. @Valid' },
      { id: 4, question: 'Which annotation builds global REST API controllers handlers?', options: ['A. @Controller', 'B. @ExceptionHandler', 'C. @RestControllerAdvice', 'D. @ErrorInterceptor'], correctAnswer: 'C. @RestControllerAdvice' },
      { id: 5, question: 'What property setting auto-updates databases tables schema changes?', options: ['A. spring.database.create', 'B. spring.jpa.hibernate.ddl-auto=update', 'C. spring.jpa.schema=renew', 'D. hibernate.sync'], correctAnswer: 'B. spring.jpa.hibernate.ddl-auto=update' }
    ],
    assignment: {
      prompts: [
        'Design a Product Entity class containing id, name, price, and email validations.',
        'Explain the difference between JPA and Hibernate.'
      ]
    }
  },
  m18: {
    id: 'm18',
    title: 'MODULE 18: SECURITY & AUTHENTICATION',
    overview: 'Secure your Spring Boot apps. Learn authentication basics, Spring Security filters, password hashing, and JWT tokens.',
    outcomes: [
      'Configure password encryption using BCrypt.',
      'Implement JWT token authorization filters.',
      'Secure Spring Boot endpoints.'
    ],
    lessons: [
      {
        id: 'm18-l1',
        title: 'Lesson 18.1 Auth Basics',
        objectives: ['Learn HTTP Authentication.'],
        theory: 'Secures routes. Authentication verifies WHO the user is. Authorization verifies WHAT they are allowed to do.',
        takeaways: ['Use stateless sessions (JWT) for APIs.']
      },
      {
        id: 'm18-l2',
        title: 'Lesson 18.2 Authorization',
        objectives: ['Define access roles.'],
        theory: 'Use Spring Security config filters to lock down routes based on roles (e.g. `USER`, `ADMIN`).',
        syntax: 'http.authorizeHttpRequests().requestMatchers("/admin/**").hasRole("ADMIN");',
        takeaways: ['Roles are commonly prefixed with ROLE_.']
      },
      {
        id: 'm18-l3',
        title: 'Lesson 18.3 JWT Authentication',
        objectives: ['Use JSON Web Tokens.'],
        theory: 'JWTs are compact, URL-safe tokens containing claims. Sent in Authorization headers as Bearer tokens.',
        syntax: 'Authorization: Bearer <token>',
        takeaways: ['JWTs are signed, preventing client modifications.']
      },
      {
        id: 'm18-l4',
        title: 'Lesson 18.4 Password Encryption',
        objectives: ['Hash user passwords.'],
        theory: 'Never store plain text passwords. Use `BCryptPasswordEncoder` to hash passwords before database storage.',
        syntax: 'String hashed = encoder.encode(plainPassword);',
        takeaways: ['BCrypt includes random salts to protect against rainbow table attacks.']
      },
      {
        id: 'm18-l5',
        title: 'Lesson 18.5 Secure APIs',
        objectives: ['Configure Spring Security.'],
        theory: 'Expose security beans, define custom filter chains, disable CSRF for REST APIs, and configure CORS parameters.',
        takeaways: ['Lock down all routes except public signup and login paths.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which class hashes user passwords in Spring Boot?', options: ['A. MD5PasswordEncoder', 'B. BCryptPasswordEncoder', 'C. SHAEncoder', 'D. Cryptor'], correctAnswer: 'B. BCryptPasswordEncoder' },
      { id: 2, question: 'What does JWT stand for?', options: ['A. Java Web Token', 'B. JSON Web Token', 'C. Joint Web Technology', 'D. Java Web Tool'], correctAnswer: 'B. JSON Web Token' },
      { id: 3, question: 'Where is Bearer JWT tokens sent in API calls?', options: ['A. Query params', 'B. Authorization Header', 'C. Cookie value', 'D. Response body'], correctAnswer: 'B. Authorization Header' },
      { id: 4, question: 'Which setting disables CSRF protection in Spring Security configs?', options: ['A. csrf.disable()', 'B. csrf().disable()', 'C. security.csrf(false)', 'D. disableCSRF()'], correctAnswer: 'B. csrf().disable()' },
      { id: 5, question: 'What verifies WHAT a user can access?', options: ['A. Authentication', 'B. Authorization', 'C. Registration', 'D. Verification'], correctAnswer: 'B. Authorization' }
    ],
    assignment: {
      prompts: [
        'Outline the authentication flow using JWT inside a Spring Boot application.',
        'Why is BCrypt hashing preferred over SHA-256 for passwords?'
      ]
    }
  },
  m19: {
    id: 'm19',
    title: 'MODULE 19: DEPLOYMENT',
    overview: 'Deploy Spring Boot applications to production: building JAR files, configuring environment variables, Dockerizing, and hosting on AWS or Render.',
    outcomes: [
      'Compile executable JAR files.',
      'Dockerize Spring Boot apps.',
      'Deploy backend APIs to cloud hosting platforms.'
    ],
    lessons: [
      {
        id: 'm19-l1',
        title: 'Lesson 19.1 Building JAR Files',
        objectives: ['Build package outputs.'],
        theory: 'Spring Boot builds executable JAR files containing all dependencies and embedded web servers.',
        syntax: 'mvn clean package',
        takeaways: ['JAR builds sit inside the targets directory.']
      },
      {
        id: 'm19-l2',
        title: 'Lesson 19.2 Env Variables',
        objectives: ['Configure production variables.'],
        theory: 'Pass database secrets, JWT keys, and ports via environment variables, avoiding plain text commits.',
        syntax: 'spring.datasource.password=${DB_PASSWORD}',
        takeaways: ['Helps maintain consistent codebase states across environments.']
      },
      {
        id: 'm19-l3',
        title: 'Lesson 19.3 Deploying on AWS',
        objectives: ['Deploy using Elastic Beanstalk or EC2.'],
        theory: 'Run JAR files on EC2 instances, or use Elastic Beanstalk to upload JAR files directly and manage deployments automatically.',
        takeaways: ['Ensure database configurations match AWS RDS environments.']
      },
      {
        id: 'm19-l4',
        title: 'Lesson 19.4 Deploying on Render',
        objectives: ['Deploy web service containers.'],
        theory: 'Render connects to Git repositories, builds services, and deploys Spring Boot APIs using Dockerfiles.',
        takeaways: ['Render automatically restarts services if build processes fail.']
      },
      {
        id: 'm19-l5',
        title: 'Lesson 19.5 Deploying with Docker',
        objectives: ['Write Dockerfiles.'],
        theory: 'Containerize applications to ensure identical runtimes across local dev and production systems.',
        codeExample: 'FROM openjdk:17-jdk-slim\nCOPY target/*.jar app.jar\nENTRYPOINT ["java","-jar","/app.jar"]',
        takeaways: ['Docker images run isolated containers.']
      }
    ],
    quiz: [
      { id: 1, question: 'Which Maven command packages applications into executable JAR files?', options: ['A. mvn clean compile', 'B. mvn clean package', 'C. mvn execute', 'D. mvn build'], correctAnswer: 'B. mvn clean package' },
      { id: 2, question: 'Which keyword executes compiled JAR files?', options: ['A. execute app.jar', 'B. java -jar app.jar', 'C. run app.jar', 'D. start java app.jar'], correctAnswer: 'B. java -jar app.jar' },
      { id: 3, question: 'What docker command builds container images?', options: ['A. docker build', 'B. docker run', 'C. docker compile', 'D. docker images'], correctAnswer: 'A. docker build' },
      { id: 4, question: 'Where does Maven build compiled outputs?', options: ['A. src/main/bin', 'B. target/', 'C. out/', 'D. dist/'], correctAnswer: 'B. target/' },
      { id: 5, question: 'How are sensitive parameters passed to production environments?', options: ['A. Hardcoded inside classes', 'B. Committed in application.properties', 'C. Passed via Environment Variables', 'D. None of the above'], correctAnswer: 'C. Passed via Environment Variables' }
    ],
    assignment: {
      prompts: [
        'Write a complete Dockerfile packaging a Spring Boot app using OpenJDK 17.',
        'Explain the role of Maven clean lifecycle phase.'
      ]
    }
  }
};
