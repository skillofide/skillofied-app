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
        objectives: [
          'Understand the current industrial relevance and scope of Java.',
          'Learn why Java is the language of choice for large-scale enterprise backends.',
          'Explore the concept of backward compatibility and community support.'
        ],
        theory: 'Welcome to the world of Java programming! Java is a highly popular, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. First released in 1995 by Sun Microsystems, Java has evolved into one of the most reliable and widely used programming languages in the world. Java powers a vast ecosystem, ranging from enterprise-scale web applications, cloud-native services, and big data infrastructure to Android apps, financial transaction systems, and embedded devices. The core value proposition of Java is its high reliability, secure runtime environment, backward compatibility, and massive global community. With its strong type safety, automatic memory management (garbage collection), and extensive standard library, Java helps developers build robust, scalable applications that can run on virtually any platform without modification.',
        takeaways: [
          'Java is a mature, production-proven language powering enterprise backends, Android apps, and financial systems globally.',
          'The language emphasizes type safety, readability, and security.',
          'Java features a vast library ecosystem and a robust virtual machine environment.'
        ]
      },
      {
        id: 'm1-l2',
        title: 'Lesson 1.2 What is Java?',
        objectives: [
          'Differentiate between source code (.java) and compiled bytecode (.class).',
          'Understand how Java combines compilation and interpretation for cross-platform execution.',
          'Learn the role of the JIT (Just-In-Time) compiler in performance optimization.'
        ],
        theory: 'Java is unique because it is both a compiled and an interpreted language. When you write code in Java, it is saved in a `.java` source file. Rather than compiling directly into machine code that runs on a specific operating system, the Java compiler (`javac`) compiles the source code into an intermediate format called bytecode, which is saved in a `.class` file. Bytecode is a highly optimized set of instructions that is neutral to the platform. The Java Virtual Machine (JVM) then reads and interprets this bytecode, executing it on the underlying operating system. This compilation-interpretation hybrid model gives Java its characteristic cross-platform portability. Additionally, modern JVMs utilize Just-In-Time (JIT) compilation to compile hot sections of bytecode directly into native machine code at runtime, providing near-native execution performance.',
        takeaways: [
          'Java source code is compiled into platform-neutral bytecode.',
          'Bytecode is executed on the target machine by the Java Virtual Machine.',
          'Hybrid architecture allows Java to be both secure and highly portable.'
        ]
      },
      {
        id: 'm1-l3',
        title: 'Lesson 1.3 History of Java',
        objectives: [
          'Trace the origins of Java from the Green Project and its founders.',
          'Understand the significance of the \'Write Once, Run Anywhere\' (WORA) philosophy.',
          'Learn about the evolution of Java versions and the modern LTS release cycle.'
        ],
        theory: 'Java was initiated by James Gosling, Mike Sheridan, and Patrick Naughton in June 1991 as part of the \'Green Project\' at Sun Microsystems. Initially designed for interactive television and consumer digital devices, the language was originally named Oak (after an oak tree that stood outside Gosling\'s office), and later renamed Green. Ultimately, it was named \'Java\' (inspired by Java coffee, which the team consumed in large quantities). The first public implementation, Java 1.0, was released in 1995 under the promise of \'Write Once, Run Anywhere\' (WORA). In 2010, Oracle Corporation acquired Sun Microsystems, taking over ownership and stewardship of Java. Today, Java follows a strict release cycle, with a new version released every six months and Long-Term Support (LTS) versions released every two years (such as Java 11, 17, and 21).',
        takeaways: [
          'Created by James Gosling at Sun Microsystems in the early 1990s.',
          'Designed to solve the problem of platform-dependent software development.',
          'Now owned and maintained by Oracle with predictable 6-month release cadences.'
        ]
      },
      {
        id: 'm1-l4',
        title: 'Lesson 1.4 Features of Java',
        objectives: [
          'Explain the key architectural design features that define Java.',
          'Understand how Java achieves robustness through compile-time and runtime checks.',
          'Explore the security model of the Java runtime environment.'
        ],
        theory: 'Java\'s success is due to several core design features:\n\n1. **Simple**: Java syntax is easy to learn and write, clean, and avoids complex features like explicit pointers, operator overloading, and multiple inheritance of classes.\n2. **Object-Oriented**: Everything in Java is an object (except primitive types), promoting modularity, reusability, and clean architecture.\n3. **Platform-Independent**: Compilation to bytecode allows Java programs to run on any computer that has a JVM.\n4. **Secure**: Java code runs inside a virtual sandbox, preventing direct access to physical memory and hardware unless permitted.\n5. **Robust**: Strong type checking, exception handling, and automatic garbage collection eliminate memory leaks and common runtime crashes.\n6. **Multithreaded**: Java has built-in support for writing programs that can execute multiple tasks concurrently, maximizing CPU utilization.',
        takeaways: [
          'Java eliminates pointers and manual memory management to prevent memory errors.',
          'Platform independence is achieved via the JVM\'s interpreter and JIT.',
          'Inherently supports multithreading and concurrency out of the box.'
        ]
      },
      {
        id: 'm1-l5',
        title: 'Lesson 1.5 JDK, JRE, and JVM',
        objectives: [
          'Distinguish the functions and relationships between JVM, JRE, and JDK.',
          'Learn which packages are required for developing vs running applications.',
          'Understand why the JVM is platform-dependent while bytecode is platform-independent.'
        ],
        theory: 'To develop and run Java programs, you must understand the relationship between the JDK, JRE, and JVM:\n\n1. **JVM (Java Virtual Machine)**: The core engine that loads, verifies, compiles, and executes Java bytecode on a specific hardware platform. The JVM itself is platform-dependent because it must translate bytecode into machine-specific instructions.\n2. **JRE (Java Runtime Environment)**: A software package that contains the JVM, core libraries, and support files necessary to run compiled Java applications. It does not contain development tools like compilers.\n3. **JDK (Java Development Kit)**: A complete software development environment that includes the JRE, along with developers\' tools such as the compiler (`javac`), archiver (`jar`), and debugger. If you want to write Java code, you need the JDK; if you only want to run it, the JRE is sufficient.',
        syntax: 'JDK (Java Development Kit) = JRE + Development Tools (javac, jar, jdb, etc.)\nJRE (Java Runtime Environment) = JVM + Class Libraries + Support Files\nJVM (Java Virtual Machine) = Execution Engine + Bytecode Verifier + Class Loader',
        takeaways: [
          'JVM executes bytecode and is platform-dependent.',
          'JRE contains the JVM and runtime libraries, suitable for end-users.',
          'JDK includes JRE and command line tools (javac) needed by developers.'
        ]
      },
      {
        id: 'm1-l6',
        title: 'Lesson 1.6 Installing Java',
        objectives: [
          'Choose and download a suitable OpenJDK distribution (e.g., Adoptium Temurin).',
          'Install the JDK on your specific operating system (macOS/Windows/Linux).',
          'Configure environment variables (JAVA_HOME and PATH) for command line utility access.'
        ],
        theory: 'To start coding in Java, you need to install a Java Development Kit (JDK). Today, there are many builds of OpenJDK available, such as Eclipse Temurin (by Adoptium), Amazon Corretto, Microsoft Build of OpenJDK, or Oracle\'s official JDK. It is highly recommended to install a Long-Term Support (LTS) version, such as JDK 17 or JDK 21.\n\n**Installation Steps:**\n1. Download the installer for your operating system (Windows, macOS, or Linux) from a trusted distributor (e.g., Adoptium).\n2. Run the installer and follow the prompt instructions.\n3. Set the `JAVA_HOME` environment variable to point to the JDK installation directory.\n4. Update your system `PATH` variable to include the JDK `bin` directory. This allows you to run `java` and `javac` commands from any terminal window.\n\n**Verification:** Open a terminal and run `java -version` and `javac -version` to confirm successful installation.',
        takeaways: [
          'Install JDK 17 or 21 LTS for production-grade projects.',
          'Always set JAVA_HOME environment variable to ensure system utilities can locate the compiler.',
          'Verify correct setup using command line: java -version'
        ]
      },
      {
        id: 'm1-l7',
        title: 'Lesson 1.7 Setting Up IDEs',
        objectives: [
          'Configure Visual Studio Code with the Extension Pack for Java.',
          'Set up IntelliJ IDEA Community Edition for local Java development.',
          'Understand the advantages of IDEs like auto-completion, refactoring, and debugging.'
        ],
        theory: 'While you can write Java code in a simple text editor and compile it via the command line, using an Integrated Development Environment (IDE) significantly boosts productivity. The two most popular choices are:\n\n1. **Visual Studio Code (VS Code)**: A lightweight, extensible editor. To write Java, install the \'Extension Pack for Java\' from Microsoft, which includes support for code completion, debugging, project management, and automated test runners.\n2. **IntelliJ IDEA**: The industry-standard IDE developed by JetBrains specifically for Java. The free \'Community Edition\' is highly powerful, providing intelligent code completion, deep static code analysis, built-in version control, refactoring tools, and integrated build tools.\n\nIn this course, we recommend starting with a clean workspace folder to organize your packages, class files, and build configurations.',
        takeaways: [
          'VS Code with Microsoft extension pack is excellent for light to medium projects.',
          'IntelliJ IDEA is the most powerful industry standard for large enterprise applications.',
          'IDEs automate compiling, linking, running, and testing cycles in the background.'
        ]
      },
      {
        id: 'm1-l8',
        title: 'Lesson 1.8 Your First Java Program',
        objectives: [
          'Write, compile, and run your very first Java program.',
          'Understand the file-naming rules regarding public classes.',
          'Examine the signature and structure of the main entry point method.'
        ],
        theory: 'Let\'s dissect the classic \'Hello, World!\' program to understand Java\'s basic structure and grammar:\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n```\n\n**Key Rules & Breakdown:**\n1. **`public class Main`**: In Java, all code must reside inside a class. The class name (`Main`) must exactly match the filename (`Main.java`), including capitalization.\n2. **`public static void main(String[] args)`**: This is the entry point method. The JVM looks for this exact signature to start executing your application.\n   - `public`: Accessible from anywhere.\n   - `static`: Can be called without creating an instance of the class.\n   - `void`: Does not return any value.\n   - `main`: Method name.\n   - `String[] args`: Takes an array of strings as command-line arguments.\n3. **`System.out.println(...)`**: Prints the string inside the double quotes to the console, followed by a new line. `System` is a standard class, `out` is an output stream, and `println` is the method.',
        syntax: 'public class <ClassName> {\n    public static void main(String[] args) {\n        // Statement(s) here;\n    }\n}',
        codeExample: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Welcome to Skillofied Java Mastery!");\n    }\n}',
        codeOutput: 'Welcome to Skillofied Java Mastery!',
        takeaways: [
          'Java is strictly object-oriented; all variables and methods must be declared within a class.',
          'The class name must match the .java file name precisely.',
          'The main method signature is the standard entry point recognized by the JVM.'
        ]
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
      {
        id: 1,
        question: 'Who is recognized as the father of the Java programming language?',
        options: [
          'A. Bjarne Stroustrup',
          'B. Dennis Ritchie',
          'C. Guido van Rossum',
          'D. James Gosling'
        ],
        correctAnswer: 'D. James Gosling'
      },
      {
        id: 2,
        question: 'What was the original name of the Java programming language when it was first developed?',
        options: [
          'A. Coffee',
          'B. Green',
          'C. Oak',
          'D. C+++'
        ],
        correctAnswer: 'C. Oak'
      },
      {
        id: 3,
        question: "Which of the following slogans best describes Java's key feature of platform independence?",
        options: [
          'A. Write Once, Run Anywhere (WORA)',
          'B. Run Once, Test Everywhere',
          'C. Compile Anywhere, Debug Everywhere',
          'D. Code Once, Interpret Always'
        ],
        correctAnswer: 'A. Write Once, Run Anywhere (WORA)'
      },
      {
        id: 4,
        question: 'What components are included in the Java Development Kit (JDK)?',
        options: [
          'A. Operating system libraries and JVM exclusively',
          'B. JRE and development tools like \'javac\'',
          'C. Only the Java Virtual Machine (JVM)',
          'D. Only the Java Runtime Environment (JRE)'
        ],
        correctAnswer: 'B. JRE and development tools like \'javac\''
      },
      {
        id: 5,
        question: 'Which component is strictly responsible for executing Java bytecode directly on a host machine?',
        options: [
          'A. Java Compiler (javac)',
          'B. Java Virtual Machine (JVM)',
          'C. Java Source File (.java)',
          'D. Integrated Development Environment (IDE)'
        ],
        correctAnswer: 'B. Java Virtual Machine (JVM)'
      },
      {
        id: 6,
        question: 'What file extension does a compiled Java bytecode file have?',
        options: [
          'A. .java',
          'B. .exe',
          'C. .class',
          'D. .jar'
        ],
        correctAnswer: 'C. .class'
      },
      {
        id: 7,
        question: 'Which of the following statements is true regarding the platform independence of Java components?',
        options: [
          'A. Java Bytecode is platform-dependent, but the JVM is platform-independent.',
          'B. Both Java Bytecode and the JVM are platform-dependent.',
          'C. Java Bytecode is platform-independent, but the JVM is platform-dependent.',
          'D. Both Java Bytecode and the JVM are platform-independent.'
        ],
        correctAnswer: 'C. Java Bytecode is platform-independent, but the JVM is platform-dependent.'
      },
      {
        id: 8,
        question: 'What feature of Java automatically manages memory by reclaiming space occupied by objects that are no longer in use?',
        options: [
          'A. Garbage Collection',
          'B. Finalization Buffer',
          'C. Manual Deconstructors',
          'D. Memory Pointer Allocation'
        ],
        correctAnswer: 'A. Garbage Collection'
      },
      {
        id: 9,
        question: "In a basic Java program, what is the exact required signature for the application's entry point method?",
        options: [
          'A. public static void main(String[] args)',
          'B. public void main(String args[])',
          'C. public static void Main(String args)',
          'D. private static int main(String[] args)'
        ],
        correctAnswer: 'A. public static void main(String[] args)'
      },
      {
        id: 10,
        question: "If a public class in a Java source file is named 'Welcome', what must the source code file be named?",
        options: [
          'A. welcome.class',
          'B. Main.java',
          'C. Welcome.java',
          'D. welcome.java'
        ],
        correctAnswer: 'C. Welcome.java'
      },
      {
        id: 11,
        question: 'Which tool or feature is an Integrated Development Environment (IDE) primarily used for during Java setup?',
        options: [
          'A. Hosting databases remotely',
          'B. Providing an all-in-one text editor, build automation tool, and debugger',
          'C. Replacing the local operating system',
          'D. Exclusively executing bytecode without an underlying JVM'
        ],
        correctAnswer: 'B. Providing an all-in-one text editor, build automation tool, and debugger'
      },
      {
        id: 12,
        question: "What is the command line utility used to compile a Java file named 'Test.java'?",
        options: [
          'A. javac Test.java',
          'B. run javac Test',
          'C. java Test.java',
          'D. compile Test.class'
        ],
        correctAnswer: 'A. javac Test.java'
      },
      {
        id: 13,
        question: "What does the 'void' keyword mean in the statement 'public static void main(String[] args)'?",
        options: [
          'A. The method is empty and has no internal code logic.',
          'B. The method does not return any value when it finishes executing.',
          'C. The method takes no parameters.',
          'D. The variables inside the method are null by default.'
        ],
        correctAnswer: 'B. The method does not return any value when it finishes executing.'
      },
      {
        id: 14,
        question: "Java is described as a 'Robust' language. Which feature directly contributes to this characteristic?",
        options: [
          'A. Strong type checking and exception handling mechanisms',
          'B. Lightweight syntax copied directly from scripting languages',
          'C. Support for platform-specific system pointers',
          'D. Its dependence on a web browser to run basic desktop software'
        ],
        correctAnswer: 'A. Strong type checking and exception handling mechanisms'
      },
      {
        id: 15,
        question: "Which command is used to run a compiled class file named 'Demo.class' from the terminal?",
        options: [
          'A. java Demo',
          'B. execute Demo',
          'C. javac Demo',
          'D. run Demo.class'
        ],
        correctAnswer: 'A. java Demo'
      },
      {
        id: 16,
        question: 'What system environment variable must often be configured manually to let your computer discover standard Java developer utilities from any directory terminal?',
        options: [
          'A. HOME_FOLDER',
          'B. IDE_LINK',
          'C. PATH',
          'D. JAVA_VERSION'
        ],
        correctAnswer: 'C. PATH'
      },
      {
        id: 17,
        question: "Which of these lines uses correct syntax to display the message 'Hello World' on the user console screen?",
        options: [
          'A. Print("Hello World");',
          'B. system.out.printLn(\'Hello World\');',
          'C. System.Output.Println(\'Hello World\');',
          'D. System.out.println("Hello World");'
        ],
        correctAnswer: 'D. System.out.println("Hello World");'
      },
      {
        id: 18,
        question: "Why is the main method declared as 'static' in a standard Java application?",
        options: [
          'A. To prevent other developers from modifying or overriding the method\'s code',
          'B. To enable the JVM to call the method without creating an instance of the class first',
          'C. To explicitly hide the method from unauthorized outside runtime systems',
          'D. To allow the main method to dynamically change return types at runtime'
        ],
        correctAnswer: 'B. To enable the JVM to call the method without creating an instance of the class first'
      },
      {
        id: 19,
        question: 'Which statement accurately describes the core architectural relationship between the JDK and the JRE?',
        options: [
          'A. They are completely independent systems with no overlapping tools.',
          'B. The JDK is a superset that includes the complete JRE plus development tools.',
          'C. The JRE contains the JDK along with separate design compilers.',
          'D. The JDK manages hardware interfaces while the JRE handles text formatting.'
        ],
        correctAnswer: 'B. The JDK is a superset that includes the complete JRE plus development tools.'
      },
      {
        id: 20,
        question: 'What role do double forward slashes (//) perform when written inside a Java source file?',
        options: [
          'A. They mark the beginning of a single-line text comment.',
          'B. They are required before importing external system modules.',
          'C. They create a secure network link to external servers.',
          'D. They represent integer mathematical division operations.'
        ],
        correctAnswer: 'A. They mark the beginning of a single-line text comment.'
      }
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
        objectives: [
          'Understand package declarations and namespace management in Java.',
          'Learn how to import external classes from the standard library.',
          'Understand how classes, methods, and variables are nested inside a file.'
        ],
        theory: 'Every Java program follows a rigid hierarchical structure. At the absolute top sits the package declaration (e.g., `package com.skillofied;`), which establishes the namespace and folder layout. Next come import statements, which allow you to reference classes outside the current package (e.g., `import java.util.ArrayList;`). Following this is the class definition. In Java, all executable code must reside inside a class. Inside this class, you declare member variables (state) and methods (behavior). Note that if a class is declared public, it must be defined in a file matching its exact name (with a `.java` extension). Proper indentation, camelCase formatting for methods/variables, and TitleCase formatting for classes are critical best practices that ensure readability in team environments.',
        syntax: 'package <packageName>;\n\nimport <externalClassPath>;\n\npublic class <ClassName> {\n    // Member variables (State)\n    // Constructor(s)\n    // Methods (Behavior)\n}',
        codeExample: 'package com.demo;\n\nimport java.time.LocalDate;\n\npublic class SystemReport {\n    public static void main(String[] args) {\n        System.out.println("System initialized on: " + LocalDate.now());\n    }\n}',
        codeOutput: 'System initialized on: 2026-07-06',
        takeaways: [
          'The package statement must be the very first non-comment line in your file.',
          'Imports tell the compiler where to look for pre-written external libraries.',
          'All Java files must wrap execution logic inside a class definition block.'
        ]
      },
      {
        id: 'm2-l2',
        title: 'Lesson 2.2 Comments in Java',
        objectives: [
          'Use single-line and multi-line comments effectively to document code.',
          'Generate professional API documentations using JavaDoc syntax.',
          'Understand how compiler processes ignore commented blocks.'
        ],
        theory: 'Comments are descriptive notes written to help developers understand the logic, intent, or design choices of the source code. The Java compiler (`javac`) strips comments entirely during the parsing phase, meaning they do not affect compilation speed or compiled `.class` file performance.\n\nJava provides three distinct comment formats:\n1. **Single-line comments**: Initiated with double slashes `//`. Everything following `//` on that line is ignored.\n2. **Multi-line comments**: Wrapped inside `/*` and `*/`. This is useful for writing multi-line explanations or temporarily disabling blocks of code.\n3. **JavaDoc comments**: Wrapped inside `/**` and `*/`. These are specialized comments placed before classes, variables, or methods that can be extracted automatically by the `javadoc` tool to build interactive HTML developer API documentations.',
        syntax: '// Single line comment\n\n/*\n   Multi-line comment block\n   spanning multiple lines\n*/\n\n/**\n * JavaDoc style document comments\n * @param args description of CLI parameters\n */',
        codeExample: 'public class Calculation {\n    public static void main(String[] args) {\n        // Calculate simple tax deduction\n        double salary = 80000.0;\n        /* Tax rates vary by state.\n           Using default rate of 15% */\n        double tax = salary * 0.15;\n        System.out.println("Tax: $" + tax);\n    }\n}',
        codeOutput: 'Tax: $12000.0',
        takeaways: [
          'Comments are ignored by the compiler and are purely for developer reference.',
          'Do not over-comment obvious lines; explain the "why" rather than the "what".',
          'Use JavaDoc comments (`/** ... */`) to document public methods and APIs.'
        ]
      },
      {
        id: 'm2-l3',
        title: 'Lesson 2.3 Variables',
        objectives: [
          'Declare and initialize variables with correct type safety rules.',
          'Understand variable scopes: local, instance, and static parameters.',
          'Apply naming conventions like camelCase and descriptive identifiers.'
        ],
        theory: 'A variable is a symbolic name pointing to a memory location that stores a value. Java is a statically-typed language, meaning that every variable must be declared with a specific data type before it can be used, and this type cannot change. Declaring a variable tells the computer to reserve a block of memory of the appropriate size. Instantiation or initialization assigns a starting value to that variable.\n\nVariables in Java have defined scopes:\n- **Local variables**: Declared inside a method, only accessible inside that method, and must be initialized before first use.\n- **Instance variables**: Declared inside a class but outside any method, representing object properties.\n- **Static variables**: Declared with the `static` keyword, shared among all instances of a class.',
        syntax: '<dataType> <variableName>; // Declaration\n<variableName> = <value>;  // Initialization\n\n<dataType> <variableName> = <value>; // Combined declaration and initialization',
        codeExample: 'public class Counter {\n    public static void main(String[] args) {\n        int visitors = 12; // local variable\n        visitors = visitors + 5;\n        System.out.println("Current Visitors: " + visitors);\n    }\n}',
        codeOutput: 'Current Visitors: 17',
        takeaways: [
          'Java requires variables to be explicitly typed and initialized before use.',
          'Local variables do not receive default values; you must initialize them manually.',
          'Always use camelCase starting with a letter for variables (e.g. employeeCount).'
        ]
      },
      {
        id: 'm2-l4',
        title: 'Lesson 2.4 Data Types',
        objectives: [
          'Differentiate between primitive and reference data types.',
          'Memorize sizes, range limits, and default values of all 8 primitives.',
          'Choose the optimal data type based on precision and memory usage.'
        ],
        theory: 'Data types in Java are divided into two main categories:\n\n1. **Primitive Data Types**: Predefined, built-in types that store raw values in stack memory. There are exactly 8 primitives:\n   - `byte` (1 byte, range -128 to 127)\n   - `short` (2 bytes, range -32,768 to 32,767)\n   - `int` (4 bytes, range -2B to 2B - standard for numbers)\n   - `long` (8 bytes, suffix with \'L\' or \'l\')\n   - `float` (4 bytes, single-precision, suffix with \'f\' or \'F\')\n   - `double` (8 bytes, double-precision - standard for decimals)\n   - `char` (2 bytes, holds a single Unicode character wrapped in single quotes, e.g. \'A\')\n   - `boolean` (1 bit, stores only `true` or `false`)\n\n2. **Reference Data Types**: Point to objects in heap memory (e.g., `String`, `Array`, user-defined classes). Reference types store the memory address of the object rather than the object itself.',
        syntax: 'int pageNumber = 4;\ndouble price = 19.99;\nchar grade = \'A\';\nboolean isCompleted = true;\nString bookTitle = "Java Basics"; // Reference type',
        codeExample: 'public class TypesDemo {\n    public static void main(String[] args) {\n        long worldPopulation = 8000000000L; // requires L suffix\n        float taxRate = 0.0825f; // requires f suffix\n        char status = \'Y\';\n        System.out.println("Population: " + worldPopulation);\n        System.out.println("Rate: " + taxRate + ", Status: " + status);\n    }\n}',
        codeOutput: 'Population: 8000000000\nRate: 0.0825, Status: Y',
        takeaways: [
          'Primitives store the literal values, while reference types store addresses.',
          'Always append \'L\' for long values and \'f\' for float values to satisfy the compiler.',
          'Double-precision decimals (double) are the default for decimal literals.'
        ]
      },
      {
        id: 'm2-l5',
        title: 'Lesson 2.5 Type Casting',
        objectives: [
          'Differentiate between widening and narrowing type conversions.',
          'Apply explicit casting operators to force conversions without compiler errors.',
          'Avoid potential runtime data loss caused by numeric overflow or truncating decimals.'
        ],
        theory: 'Type casting is the process of converting a value of one data type into another. In Java, this happens in two ways:\n\n1. **Widening Casting (Implicit)**: Automatically done by Java when converting a smaller type to a larger type size. It is completely safe and incurs no loss of data.\n   `byte` -> `short` -> `char` -> `int` -> `long` -> `float` -> `double`.\n\n2. **Narrowing Casting (Explicit)**: Must be done manually by placing the target type in parentheses before the value. This is required because you are converting a larger type size to a smaller size, which could lead to truncation (losing decimals) or overflow.',
        syntax: '// Implicit Widening\nint myInt = 9;\ndouble myDouble = myInt; \n\n// Explicit Narrowing\ndouble originalDouble = 9.78;\nint castedInt = (int) originalDouble; // castedInt becomes 9',
        codeExample: 'public class Casting {\n    public static void main(String[] args) {\n        double salary = 45500.85;\n        int roundSalary = (int) salary; // drops decimal digits\n        System.out.println("Original: " + salary);\n        System.out.println("Casted: " + roundSalary);\n    }\n}',
        codeOutput: 'Original: 45500.85\nCasted: 45500',
        takeaways: [
          'Widening casting happens implicitly and automatically.',
          'Narrowing casting requires explicit syntax and drops any decimal remainder (does not round).',
          'Attempting to narrow outside range limits will result in integer overflow wrapped values.'
        ]
      },
      {
        id: 'm2-l6',
        title: 'Lesson 2.6 Operators',
        objectives: [
          'Use arithmetic operators (+, -, *, /, %) and understand integer division.',
          'Apply relational (==, !=, <, >) and logical (&&, ||, !) operators in conditions.',
          'Learn operator precedence hierarchy and shortcut assignment rules.'
        ],
        theory: 'Operators are special symbols that perform operations on operands (variables and values). Java divides operators into several categories:\n\n- **Arithmetic Operators**: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), and `%` (modulus/remainder).\n  *Note*: Integer division `/` discards decimals (e.g. `5 / 2` is `2`). Modulus `%` returns the remainder (e.g. `5 % 2` is `1`).\n- **Unary Operators**: `++` (increment by 1), `--` (decrement by 1). Prefixes (`++x`) increment before evaluation, while suffixes (`x++`) increment after evaluation.\n- **Relational Operators**: Compare values and return boolean true/false. Includes `==`, `!=`, `>`, `<`, `>=`, `<=Point`.\n- **Logical Operators**: `&&` (logical AND - returns true if both are true), `||` (logical OR - returns true if at least one is true), and `!` (logical NOT).',
        syntax: 'int sum = a + b;\nboolean match = (x == y);\nboolean criteria = (age >= 18 && hasID);',
        codeExample: 'public class OperatorsDemo {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 3;\n        System.out.println("Division: " + (x / y));\n        System.out.println("Remainder: " + (x % y));\n        System.out.println("Logical: " + (x > 5 && y < 5));\n    }\n}',
        codeOutput: 'Division: 3\nRemainder: 1\nLogical: true',
        takeaways: [
          'Division with two integers throws away the remainder; cast one operand to double for exact values.',
          'Logical AND (&&) and logical OR (||) are short-circuiting: they skip evaluations if the output is determined early.',
          'Modulus (%) is highly useful for checking even/odd numbers and loop cycles.'
        ]
      },
      {
        id: 'm2-l7',
        title: 'Lesson 2.7 Scanner Class',
        objectives: [
          'Import and initialize the Scanner class from the java.util package.',
          'Read strings, integers, and floating-point inputs from the console.',
          'Identify and resolve common issues like newline buffering and resource leaks.'
        ],
        theory: 'To read inputs interactively from the terminal console, Java provides the `Scanner` class within the `java.util` package. You instantiate the Scanner by passing the standard input stream `System.in` to its constructor.\n\n**Reading Methods:**\n- `nextLine()`: Reads an entire line of text as a String.\n- `next()`: Reads a single space-delimited word.\n- `nextInt()`: Reads and parses an integer.\n- `nextDouble()`: Reads and parses a double.\n\n*Critical Warning*: Numeric readers like `nextInt()` leave a newline character `\\n` in the input buffer. If you call `nextLine()` immediately after reading a number, it will consume the leftover newline and return empty text. To prevent this, always place an extra dummy `scanner.nextLine()` to clear the buffer.',
        syntax: 'import java.util.Scanner;\n\nScanner scanner = new Scanner(System.in);\nString name = scanner.nextLine();\nint value = scanner.nextInt();\nscanner.close(); // clean up resources',
        codeExample: 'import java.util.Scanner;\n\npublic class ScannerDemo {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter rank: ");\n        int rank = scanner.nextInt();\n        scanner.nextLine(); // clear buffer\n        System.out.print("Enter name: ");\n        String name = scanner.nextLine();\n        System.out.println(name + " holds rank " + rank);\n        scanner.close();\n    }\n}',
        codeOutput: 'Enter rank: 1\nEnter name: Skillofied Master\nSkillofied Master holds rank 1',
        takeaways: [
          'Always import java.util.Scanner to use terminal readers.',
          'Close the scanner object when done to prevent memory leaks and resource warnings.',
          'Always clear the buffer using scanner.nextLine() when transitioning from numbers to lines.'
        ]
      },
      {
        id: 'm2-l8',
        title: 'Lesson 2.8 Output Formatting',
        objectives: [
          'Format console output precisely using System.out.printf.',
          'Utilize standard format specifiers like %d, %f, %s, and %b.',
          'Apply width flags, precision padding, and decimal constraints.'
        ],
        theory: 'While `System.out.println` is convenient, it offers no control over spacing, alignment, or number precision. To solve this, Java inherits `printf` (print formatted) from C. The `System.out.printf` method takes a format string containing specifiers, followed by arguments.\n\n**Format Specifiers:**\n- `%d`: Integers (byte, short, int, long)\n- `%f`: Floating-point numbers (float, double)\n- `%s`: Strings\n- `%b`: Booleans\n- `%n`: Platform-independent newline\n\n**Formatting Modifiers:**\n- `%.2f`: Formats a decimal number with exactly 2 digits after the decimal point.\n- `%10s`: Right-aligns a string within a column width of 10 characters.',
        syntax: 'System.out.printf("Format String", arg1, arg2, ...);',
        codeExample: 'public class Formatting {\n    public static void main(String[] args) {\n        double value = 123.45678;\n        String name = "Item";\n        int qty = 5;\n        // Format decimal to 2 decimal places\n        System.out.printf("%s count: %d, price: $%.2f%n", name, qty, value);\n        // Column formatting\n        System.out.printf("|%-10s|%5d|%n", "Aligned", 42);\n    }\n}',
        codeOutput: 'Item count: 5, price: $123.46\n|Aligned   |   42|',
        takeaways: [
          'printf provides clean spacing and formatting controls.',
          'Use %.Nf to format floating point numbers to exactly N decimal places.',
          'Always use %n instead of \\n to represent newlines in printf for cross-platform compatibility.'
        ]
      }
    ],
    quiz: [
      {id: 1, question: 'Which of the following is a valid variable identifier name in Java?', options: ['A. class', 'B. 2varName', 'C. variable name', 'D. _variable$5'], correctAnswer: 'D. _variable$5'},
      {id: 2, question: 'Which of the following data types is NOT a primitive data type in Java?', options: ['A. String', 'B. boolean', 'C. char', 'D. int'], correctAnswer: 'A. String'},
      {id: 3, question: 'What is the difference between widening type casting and narrowing type casting?', options: ['A. Narrowing casting happens automatically; widening casting must be done manually.', 'B. Both widening and narrowing type casting occur automatically at runtime.', 'C. Widening casting happens automatically; narrowing casting must be done manually.', 'D. Widening casting applies only to objects, while narrowing casting applies only to primitives.'], correctAnswer: 'C. Widening casting happens automatically; narrowing casting must be done manually.'},
      {id: 4, question: 'Which type of comment in Java is specifically processed by documentation generation utilities to create API reference sheets?', options: ['A. // Single-line comment', 'B. /** Documentation comment */', 'C. Shell comment', 'D. /* Multi-line comment */'], correctAnswer: 'B. /** Documentation comment */'},
      {id: 5, question: 'When collecting user console input using the Scanner class, what is the primary difference between using next() and nextLine()?', options: ['A. next() automatically converts inputs to uppercase characters.', 'B. next() reads input up to the next whitespace delimiter, while nextLine() reads the entire line until a newline character.', 'C. next() reads only numeric characters, while nextLine() reads text.', 'D. nextLine() handles numeric variables safer than next().'], correctAnswer: 'B. next() reads input up to the next whitespace delimiter, while nextLine() reads the entire line until a newline character.'},
      {id: 6, question: 'In the format string syntax used by System.out.printf(), what placeholder flag is designated to structure decimal floating-point representation outputs?', options: ['A. %f', 'B. %d', 'C. %c', 'D. %s'], correctAnswer: 'A. %f'},
      {id: 7, question: 'What is the behavior of short-circuit logical operators like && and || in Java expression evaluations?', options: ['A. They require execution paths to loop until variables change state.', 'B. They skip evaluating the second condition if the overall result is already determined by the first condition.', 'C. They always evaluate both sides of the expression to verify execution parity.', 'D. They invert the boolean answer automatically at the end of the evaluation statement.'], correctAnswer: 'B. They skip evaluating the second condition if the overall result is already determined by the first condition.'},
      {id: 8, question: 'Guess the output of the following Java code snippet:\n\nint a = 5;\nint b = a++ + ++a;\nSystem.out.println(\'a=\' + a + \', b=\' + b);', options: ['A. a=7, b=11', 'B. a=7, b=12', 'C. a=5, b=12', 'D. a=6, b=10'], correctAnswer: 'B. a=7, b=12'},
      {id: 9, question: 'Guess the output of the following Java code snippet:\n\nint x = 5;\nint y = 2;\ndouble result = x / y;\nSystem.out.println(result);', options: ['A. 2.5', 'B. 2.0', 'C. 0.4', 'D. 3.0'], correctAnswer: 'B. 2.0'},
      {id: 10, question: 'Guess the output of the following Java code snippet:\n\ndouble value = 9.78;\nint numerical = (int) value;\nSystem.out.println(numerical);', options: ['A. 9.78', 'B. 0', 'C. 10', 'D. 9'], correctAnswer: 'D. 9'},
      {id: 11, question: 'Guess the output of the following Java code snippet:\n\nSystem.out.println(\'Output: \' + 10 + 20);', options: ['A. 30 Output:', 'B. Compilation Error', 'C. Output: 1020', 'D. Output: 30'], correctAnswer: 'C. Output: 1020'},
      {id: 12, question: 'Guess the output of the following Java code snippet:\n\nSystem.out.println(10 + 20 + \' Output\');', options: ['A. Output 1020', 'B. 1020 Output', 'C. 30 Output', 'D. Output 30'], correctAnswer: 'C. 30 Output'},
      {id: 13, question: 'Guess the output of the following Java code snippet:\n\nint result = -5 % 2;\nSystem.out.println(result);', options: ['A. -1', 'B. 1', 'C. -2', 'D. 0'], correctAnswer: 'A. -1'},
      {id: 14, question: 'Guess the output of the following Java code snippet:\n\nboolean flag = false;\nint val = 10;\nif (flag && (val++ > 5)) {\nval += 5;\n}\nSystem.out.println(val);', options: ['A. 11', 'B. 10', 'C. 15', 'D. 16'], correctAnswer: 'B. 10'},
      {id: 15, question: 'Guess the output of the following Java code snippet:\n\nbyte b = 127;\nb++;\nSystem.out.println(b);', options: ['A. -1', 'B. Compilation Error', 'C. 128', 'D. -128'], correctAnswer: 'D. -128'},
      {id: 16, question: 'Guess the output of the following Java code snippet:\n\ndouble values = 5.6789;\nSystem.out.printf(\'%.2f\', values);', options: ['A. 5.6789', 'B. 5.67', 'C. 5.7', 'D. 5.68'], correctAnswer: 'D. 5.68'},
      {id: 17, question: 'Guess the output of the following Java code snippet:\n\nint n1 = 10;\nint n2 = 20;\nn1 = n1 + n2;\nn2 = n1 - n2;\nn1 = n1 - n2;\nSystem.out.println(\'n1=\' + n1 + \', n2=\' + n2);', options: ['A. n1=20, n2=10', 'B. n1=30, n2=10', 'C. n1=10, n2=20', 'D. n1=20, n2=20'], correctAnswer: 'A. n1=20, n2=10'},
      {id: 18, question: 'Guess the output of the following Java code snippet:\n\nint val1 = 10;\nint val2 = 20;\nint res = val1 > val2 ? val1 : val2 > 15 ? 30 : 40;\nSystem.out.println(res);', options: ['A. 20', 'B. 10', 'C. 40', 'D. 30'], correctAnswer: 'D. 30'},
      {id: 19, question: 'Guess the output of the following Java code snippet:\n\nSystem.out.println(5 > 3 || 4 < 2 && 10 == 10);', options: ['A. true', 'B. Runtime Exception', 'C. false', 'D. Compilation Error'], correctAnswer: 'A. true'},
      {id: 20, question: 'Guess the output of the following Java code snippet:\n\nchar letter = \\\'A\\\';\nletter++;\nSystem.out.println(letter);', options: ['A. B', 'B. 66', 'C. Compilation Error', 'D. A1'], correctAnswer: 'A. B'}
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
        objectives: [
          'Understand how branching works in logic flow.',
          'Write simple boolean conditions to trigger code blocks.',
          'Learn the scope of variables inside an if block.'
        ],
        theory: 'The `if` statement is the most fundamental control structure in Java. It evaluates a boolean expression (which resolves to either true or false). If the expression is true, the block of code inside the curly braces `{}` is executed. If false, the block is entirely skipped. This allows your program to make decisions and run different code based on dynamic inputs.',
        syntax: 'if (condition) {\n    // Code executes only if condition is true\n}',
        codeExample: 'public class IfDemo {\n    public static void main(String[] args) {\n        int temp = 35;\n        if (temp > 30) {\n            System.out.println("It is a hot day!");\n        }\n    }\n}',
        codeOutput: 'It is a hot day!',
        takeaways: [
          'The condition inside the parenthesis MUST evaluate to a boolean.',
          'Curly braces are technically optional for single-line blocks, but always recommended for readability.',
          'Variables declared inside the if block are destroyed once the block finishes.'
        ]
      },
      {
        id: 'm3-l2',
        title: 'Lesson 3.2 if-else Statement',
        objectives: [
          'Define fallback logic when a condition is false.',
          'Prevent evaluating mutually exclusive conditions multiple times.'
        ],
        theory: 'While an `if` statement handles the "true" scenario, the `else` statement handles the "false" scenario. It acts as a strict fallback—if the `if` condition fails, the `else` block is guaranteed to run. This creates a fork in your logic flow where exactly one of the two paths will be executed.',
        syntax: 'if (condition) {\n    // Executes if true\n} else {\n    // Executes if false\n}',
        codeExample: 'public class ElseDemo {\n    public static void main(String[] args) {\n        int score = 45;\n        if (score >= 50) {\n            System.out.println("You passed the exam.");\n        } else {\n            System.out.println("You failed the exam. Please try again.");\n        }\n    }\n}',
        codeOutput: 'You failed the exam. Please try again.',
        takeaways: [
          'An else statement must directly follow an if (or else if) block.',
          'It is more efficient than writing two separate if statements with opposite conditions.',
          'There is no condition attached to an else statement.'
        ]
      },
      {
        id: 'm3-l3',
        title: 'Lesson 3.3 else-if Ladders',
        objectives: [
          'Evaluate multiple distinct conditions sequentially.',
          'Understand that the ladder stops at the first true condition.'
        ],
        theory: 'When you have more than two possible outcomes, you can chain conditions together using `else if`. Java will check these conditions sequentially from top to bottom. As soon as it finds a true condition, it executes that block and completely skips the rest of the ladder. An optional `else` block can be placed at the very end as a catch-all.',
        syntax: 'if (condition1) {\n    // Code\n} else if (condition2) {\n    // Code\n} else {\n    // Default code\n}',
        codeExample: 'public class Grading {\n    public static void main(String[] args) {\n        int marks = 85;\n        if (marks >= 90) {\n            System.out.println("Grade: A");\n        } else if (marks >= 80) {\n            System.out.println("Grade: B");\n        } else if (marks >= 70) {\n            System.out.println("Grade: C");\n        } else {\n            System.out.println("Grade: F");\n        }\n    }\n}',
        codeOutput: 'Grade: B',
        takeaways: [
          'Order matters! Always put the most restrictive or specific conditions at the top.',
          'Once a true condition is found, the rest of the ladder is ignored entirely.',
          'The final else block is optional but highly recommended to handle unexpected edge cases.'
        ]
      },
      {
        id: 'm3-l4',
        title: 'Lesson 3.4 Nested if Statements',
        objectives: [
          'Create complex decision trees.',
          'Understand how deep nesting affects code readability.'
        ],
        theory: 'You can place an `if` statement completely inside another `if` statement. This is called nesting. The inner `if` will only be evaluated if the outer `if` condition is true. This is useful for building multi-step logic (e.g., checking if a user is logged in, and then checking if they have admin privileges).',
        syntax: 'if (outerCondition) {\n    if (innerCondition) {\n        // Code executes if BOTH are true\n    }\n}',
        codeExample: 'public class LoginCheck {\n    public static void main(String[] args) {\n        boolean isLoggedIn = true;\n        boolean isAdmin = false;\n        \n        if (isLoggedIn) {\n            System.out.println("Welcome User!");\n            if (isAdmin) {\n                System.out.println("Admin Dashboard unlocked.");\n            } else {\n                System.out.println("Standard Dashboard unlocked.");\n            }\n        } else {\n            System.out.println("Please log in.");\n        }\n    }\n}',
        codeOutput: 'Welcome User!\nStandard Dashboard unlocked.',
        takeaways: [
          'Nested ifs are powerful but can lead to "spaghetti code" if nested too deeply.',
          'Often, a nested if can be simplified using logical AND (&&) operators.',
          'Keep track of curly braces to ensure you know which else belongs to which if.'
        ]
      },
      {
        id: 'm3-l5',
        title: 'Lesson 3.5 Switch Case',
        objectives: [
          'Replace long else-if ladders with cleaner syntax.',
          'Understand the importance of the break statement.',
          'Learn to handle fall-through behavior.'
        ],
        theory: 'When you are comparing a single variable against many possible exact values, a `switch` statement is cleaner and faster than a long `else if` ladder. The variable is evaluated once, and execution jumps directly to the matching `case`. A `break` statement is required to stop execution; without it, Java will "fall through" and execute the next cases ignoring their labels.',
        syntax: 'switch (variable) {\n    case value1:\n        // Code\n        break;\n    case value2:\n        // Code\n        break;\n    default:\n        // Fallback code\n}',
        codeExample: 'public class DayPicker {\n    public static void main(String[] args) {\n        int dayOfWeek = 3;\n        switch (dayOfWeek) {\n            case 1:\n                System.out.println("Monday");\n                break;\n            case 2:\n                System.out.println("Tuesday");\n                break;\n            case 3:\n                System.out.println("Wednesday");\n                break;\n            default:\n                System.out.println("Other Day");\n        }\n    }\n}',
        codeOutput: 'Wednesday',
        takeaways: [
          'Switch works with byte, short, char, int, String, and Enums.',
          'Always include a break statement unless you specifically want multiple cases to run the same code.',
          'The default case acts like a final else block.'
        ]
      },
      {
        id: 'm3-l6',
        title: 'Lesson 3.6 Ternary Operator',
        objectives: [
          'Simplify single-variable assignments.',
          'Understand the inline if-else syntax.'
        ],
        theory: 'The ternary operator `? :` is a shorthand for an `if-else` statement that assigns a value. It evaluates a boolean expression and returns the first value if true, or the second value if false. It is called "ternary" because it takes three operands. It is excellent for keeping code concise when initializing variables.',
        syntax: 'dataType variableName = (condition) ? valueIfTrue : valueIfFalse;',
        codeExample: 'public class TernaryDemo {\n    public static void main(String[] args) {\n        int age = 20;\n        // Traditional way would take 5 lines\n        String access = (age >= 18) ? "Granted" : "Denied";\n        System.out.println("Access Status: " + access);\n    }\n}',
        codeOutput: 'Access Status: Granted',
        takeaways: [
          'Ternary operators must always return a value; you cannot use them to run arbitrary blocks of code.',
          'Avoid nesting multiple ternary operators as it makes the code nearly impossible to read.',
          'It is a direct replacement for simple if-else assignment blocks.'
        ]
      }
    ],
    quiz: [
      {id: 1, question: 'Which of the following data types CANNOT be used as the controlling expression in a standard Java switch-case statement?', options: ['A. char', 'B. int', 'C. double', 'D. String'], correctAnswer: 'C. double'},
      {id: 2, question: 'What happens if a matching case block in a switch statement does not contain a \'break\' statement?', options: ['A. The program throws a compilation error immediately.', 'B. The switch statement terminates instantly without running anything.', 'C. The program falls through, executing subsequent case blocks sequentially until a break or the end of the switch is encountered.', 'D. Execution immediately jumps to the default block regardless of its position.'], correctAnswer: 'C. The program falls through, executing subsequent case blocks sequentially until a break or the end of the switch is encountered.'},
      {id: 3, question: 'Which statement best describes the evaluation behavior of a conditional statement structured with nested if blocks?', options: ['A. The inner \'if\' condition is evaluated only if the outer \'if\' condition evaluates to true.', 'B. The inner \'if\' condition is evaluated regardless of whether the outer \'if\' condition is true or false.', 'C. The compiler combines them automatically into a single flat logical AND expression.', 'D. Both outer and inner conditions are checked simultaneously in parallel.'], correctAnswer: 'A. The inner \'if\' condition is evaluated only if the outer \'if\' condition evaluates to true.'},
      {id: 4, question: 'How many operands are evaluated by a conditional ternary operator expression in Java?', options: ['A. 3', 'B. 1', 'C. 2', 'D. 4'], correctAnswer: 'A. 3'},
      {id: 5, question: 'Guess the output of the following Java code snippet:\n\nint score = 75;\nif (score > 80)\nSystem.out.print(\'A \');\nSystem.out.print(\'Passed \');', options: ['A. No output is displayed', 'B. A Passed', 'C. Passed', 'D. A'], correctAnswer: 'C. Passed'},
      {id: 6, question: 'Guess the output of the following Java code snippet:\n\nint x = 10;\nint y = 20;\nif (x > 5) {\nif (y < 15) {\nSystem.out.println(\'Block 1\');\n} else {\nSystem.out.println(\'Block 2\');\n}\n} else {\nSystem.out.println(\'Block 3\');\n}', options: ['A. Block 1', 'B. Block 3', 'C. Block 2', 'D. Block 2\nBlock 3'], correctAnswer: 'C. Block 2'},
      {id: 7, question: 'Guess the output of the following Java code snippet:\n\nint status = 2;\nswitch (status) {\ncase 1:\nSystem.out.print(\'Ready \');\ncase 2:\nSystem.out.print(\'Set \');\ncase 3:\nSystem.out.print(\'Go \');\ndefault:\nSystem.out.print(\'Done \');\n}', options: ['A. Set', 'B. Set Go Done', 'C. Set Done', 'D. Ready Set Go Done'], correctAnswer: 'B. Set Go Done'},
      {id: 8, question: 'Guess the output of the following Java code snippet:\n\nint a = 10, b = 5;\nString result = (a < b) ? \'Low\' : (a == b) ? \'Equal\' : \'High\';\nSystem.out.println(result);', options: ['A. Low', 'B. High', 'C. Compilation Error', 'D. Equal'], correctAnswer: 'B. High'},
      {id: 9, question: 'Guess the output of the following Java code snippet:\n\nint number = 15;\nif (number % 3 == 0 || number % 5 == 0) {\nSystem.out.println(\'Divisible\');\n} else if (number % 15 == 0) {\nSystem.out.println(\'Divisible by 15\');\n}', options: ['A. Divisible by 15', 'B. Divisible', 'C. Divisible\nDivisible by 15', 'D. No output due to compilation conflict'], correctAnswer: 'B. Divisible'},
      {id: 10, question: 'Guess the output of the following Java code snippet:\n\nint count = 10;\nboolean check = false;\nif (check && (count++ > 5)) {\nSystem.out.println(\'Inside\');\n}\nSystem.out.println(count);', options: ['A. Runtime Error', 'B. 11', 'C. Inside\n11', 'D. 10'], correctAnswer: 'D. 10'},
      {id: 11, question: 'Guess the output of the following Java code snippet:\n\nint value = 5;\nif (value = 10) {\nSystem.out.println(\'True Block\');\n} else {\nSystem.out.println(\'False Block\');\n}', options: ['A. False Block', 'B. True Block', 'C. 5', 'D. Compilation Error'], correctAnswer: 'D. Compilation Error'},
      {id: 12, question: 'Guess the output of the following Java code snippet:\n\nboolean power = true;\nif (power = false) {\nSystem.out.println(\'On\');\n} else {\nSystem.out.println(\'Off\');\n}', options: ['A. No output', 'B. Compilation Error', 'C. Off', 'D. On'], correctAnswer: 'C. Off'},
      {id: 13, question: 'Guess the output of the following Java code snippet:\n\nint code = 3;\nint adjustment = switch (code) {\ncase 1, 2 -> 10;\ncase 3, 4 -> 20;\ndefault -> 30;\n};\nSystem.out.println(adjustment);', options: ['A. 20', 'B. 30', 'C. 10', 'D. Compilation Error'], correctAnswer: 'A. 20'},
      {id: 14, question: 'Guess the output of the following Java code snippet:\n\nint age = 18;\nboolean registration = true;\nSystem.out.println(age >= 18 || !registration ? \'Allowed\' : \'Denied\');', options: ['A. true', 'B. Compilation Error', 'C. Allowed', 'D. Denied'], correctAnswer: 'C. Allowed'},
      {id: 15, question: 'Guess the output of the following Java code snippet:\n\nint keys = 5;\nswitch (keys) {\ndefault:\nSystem.out.print(\'Unknown \');\ncase 1:\nSystem.out.print(\'One \');\nbreak;\ncase 5:\nSystem.out.print(\'Five \');\n}', options: ['A. Unknown One Five', 'B. Five', 'C. Five Unknown', 'D. Unknown One'], correctAnswer: 'B. Five'},
      {id: 16, question: 'Guess the output of the following Java code snippet:\n\nint option = 0;\nswitch (option) {\ndefault:\nSystem.out.print(\'Default \');\ncase 1:\nSystem.out.print(\'One \');\nbreak;\ncase 2:\nSystem.out.print(\'Two \');\n}', options: ['A. Default', 'B. One', 'C. Default One Two', 'D. Default One'], correctAnswer: 'D. Default One'},
      {id: 17, question: 'Guess the output of the following Java code snippet:\n\nint temperature = 32;\nif (temperature > 30)\nif (temperature < 25)\nSystem.out.println(\'Ideal\');\nelse\nSystem.out.println(\'Warm\');', options: ['A. Warm', 'B. Ideal', 'C. Compilation Error', 'D. No output is displayed'], correctAnswer: 'A. Warm'},
      {id: 18, question: 'Guess the output of the following Java code snippet:\n\nint threshold = 5;\nboolean alert = true;\nif (!alert || (++threshold > 10)) {\nSystem.out.print(\'Active \');\n}\nSystem.out.println(threshold);', options: ['A. Active 6', 'B. 6', 'C. Active 5', 'D. 5'], correctAnswer: 'B. 6'},
      {id: 19, question: 'Guess the output of the following Java code snippet:\n\nint x = 4;\nint result = (x % 2 == 0) ? (x * 2) : (x / 2);\nSystem.out.println(result);', options: ['A. 2', 'B. 8', 'C. 16', 'D. 4'], correctAnswer: 'B. 8'},
      {id: 20, question: 'Guess the output of the following Java code snippet:\n\nint point = 2;\nswitch (point) {\ncase 1:\nSystem.out.print(\'Point 1 \');\nbreak;\ncase 2:\n// Empty Case\ncase 3:\nSystem.out.print(\'Point 3 \');\nbreak;\ndefault:\nSystem.out.print(\'End \');\n}', options: ['A. No output is displayed', 'B. Compilation Error', 'C. End', 'D. Point 3'], correctAnswer: 'D. Point 3'}
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
        objectives: [
          'Execute loops for known intervals.',
          'Understand loop initialization, condition checking, and increments.',
          'Declare loop counters with proper scopes.'
        ],
        theory: 'Use the `for` loop when you know exactly how many times you want to iterate a block of code. It condenses the loop control variables into a single line at the top. The execution flows in this order: initialization (runs once), condition (checked before every iteration), code execution, and finally the update (runs after every iteration).',
        syntax: 'for (initialization; condition; update) {\n    // Code block to be executed\n}',
        codeExample: 'public class ForLoopDemo {\n    public static void main(String[] args) {\n        // Print numbers 1 through 5\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Iteration: " + i);\n        }\n    }\n}',
        codeOutput: 'Iteration: 1\nIteration: 2\nIteration: 3\nIteration: 4\nIteration: 5',
        takeaways: [
          'Variables declared inside the for loop header (like int i = 0) exist only within the loop block.',
          'If the condition evaluates to false initially, the loop block will never execute.',
          'Be careful to avoid infinite loops by ensuring the update step eventually makes the condition false.'
        ]
      },
      {
        id: 'm4-l2',
        title: 'Lesson 4.2 while Loop',
        objectives: [
          'Execute loops for dynamic, condition-based intervals.',
          'Avoid infinite loops by managing loop state variables.'
        ],
        theory: 'Use the `while` loop when you want the loop to continue iterating an unknown number of times, strictly as long as a condition remains true. It is commonly used for reading files, processing data streams, or waiting for specific user input where the number of required iterations cannot be predicted beforehand.',
        syntax: 'while (condition) {\n    // Code to be executed\n    // Remember to update condition variables!\n}',
        codeExample: 'import java.util.Scanner;\n\npublic class WhileDemo {\n    public static void main(String[] args) {\n        int count = 3;\n        while (count > 0) {\n            System.out.println("Countdown: " + count);\n            count--; // Decrement is crucial to avoid infinite loop\n        }\n        System.out.println("Liftoff!");\n    }\n}',
        codeOutput: 'Countdown: 3\nCountdown: 2\nCountdown: 1\nLiftoff!',
        takeaways: [
          'The condition is evaluated before the code block executes.',
          'If you forget to update the variables that affect the condition, your program will freeze in an infinite loop.',
          'A while loop can execute zero times if the condition starts out false.'
        ]
      },
      {
        id: 'm4-l3',
        title: 'Lesson 4.3 do-while Loop',
        objectives: [
          'Guarantee at least one iteration of a loop.',
          'Understand post-test looping conditions.'
        ],
        theory: 'The `do-while` loop is a variant of the while loop. Instead of checking the condition at the beginning, it executes the code block first, and *then* checks the condition. This means the code inside the loop is guaranteed to run at least once, regardless of whether the condition is true or false.',
        syntax: 'do {\n    // Code block to execute\n} while (condition);',
        codeExample: 'public class DoWhileDemo {\n    public static void main(String[] args) {\n        int attempts = 0;\n        do {\n            System.out.println("Attempting connection...");\n            attempts++;\n        } while (attempts < 1); // Condition is false after first run\n    }\n}',
        codeOutput: 'Attempting connection...',
        takeaways: [
          'Requires a semicolon at the very end of the statement after the while condition.',
          'Perfect for scenarios like menu prompts where you must show the menu to the user before asking them for their choice.',
          'Because it evaluates at the end, it is known as a post-test loop.'
        ]
      },
      {
        id: 'm4-l4',
        title: 'Lesson 4.4 Nested Loops',
        objectives: [
          'Build loops inside loops for complex data structures.',
          'Understand execution cycles in nested environments.'
        ],
        theory: 'A nested loop is a loop placed inside the body of another loop. This is heavily used for working with two-dimensional data structures like grids, matrices, or printing visual patterns. For every single iteration of the outer loop, the inner loop executes completely from start to finish.',
        syntax: 'for (int i = 0; i < outerLimit; i++) {\n    for (int j = 0; j < innerLimit; j++) {\n        // Code executed outerLimit * innerLimit times\n    }\n}',
        codeExample: 'public class NestedLoopDemo {\n    public static void main(String[] args) {\n        // Print a 3x3 grid of stars\n        for (int row = 1; row <= 3; row++) {\n            for (int col = 1; col <= 3; col++) {\n                System.out.print("* ");\n            }\n            System.out.println(); // Move to the next line\n        }\n    }\n}',
        codeOutput: '* * * \n* * * \n* * * ',
        takeaways: [
          'The total number of executions is the product of the iteration limits (e.g., 3 outer × 3 inner = 9 executions).',
          'Nesting loops increases time complexity exponentially (O(N^2)).',
          'Avoid nesting too deeply (more than 3 levels) as it heavily degrades performance.'
        ]
      },
      {
        id: 'm4-l5',
        title: 'Lesson 4.5 break Statement',
        objectives: [
          'Terminate loops early based on dynamic conditions.',
          'Understand how break interacts with nested loops.'
        ],
        theory: 'The `break` statement immediately exits the loop block it resides in, entirely skipping all remaining iterations. Execution resumes at the very next statement after the loop. It is commonly used to stop searching once a target item is found to save processing time.',
        syntax: 'while (true) {\n    if (shouldStop) {\n        break; // Exits the loop immediately\n    }\n}',
        codeExample: 'public class BreakDemo {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            if (i == 4) {\n                System.out.println("Found 4, stopping loop.");\n                break;\n            }\n            System.out.println("Checking " + i);\n        }\n    }\n}',
        codeOutput: 'Checking 1\nChecking 2\nChecking 3\nFound 4, stopping loop.',
        takeaways: [
          'In nested loops, break only exits the innermost loop containing it.',
          'It is the exact same break statement used to terminate switch case blocks.',
          'Using break allows for efficient early exits from algorithms.'
        ]
      },
      {
        id: 'm4-l6',
        title: 'Lesson 4.6 continue Statement',
        objectives: [
          'Skip specific iterations without destroying the loop.',
          'Filter data processed inside loop blocks.'
        ],
        theory: 'The `continue` statement skips the remaining code inside the current loop iteration and jumps directly to the next loop evaluation (the update step in a for loop, or condition check in a while loop). Unlike break, it does not destroy the loop entirely; it simply aborts the current cycle.',
        syntax: 'for (int i = 0; i < 5; i++) {\n    if (skipCondition) {\n        continue; // Jumps to i++\n    }\n    // Code here is skipped for this iteration\n}',
        codeExample: 'public class ContinueDemo {\n    public static void main(String[] args) {\n        // Print only odd numbers by skipping evens\n        for (int i = 1; i <= 5; i++) {\n            if (i % 2 == 0) {\n                continue;\n            }\n            System.out.println("Odd: " + i);\n        }\n    }\n}',
        codeOutput: 'Odd: 1\nOdd: 3\nOdd: 5',
        takeaways: [
          'Continue does not exit the loop, it only skips the lines below it for the current cycle.',
          'It is extremely useful for filtering out invalid data while processing a list of items.',
          'Be careful using continue inside a while loop; if the variable update is skipped, it will cause an infinite loop.'
        ]
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
        objectives: [
          'Write modular, reusable methods.',
          'Understand method signatures and access modifiers.'
        ],
        theory: 'Methods (often called functions in other languages) are blocks of code that only run when called. They allow you to divide complex programs into small, manageable, and reusable chunks. A method signature consists of its access modifier (e.g., public), return type, name, and parameters.',
        syntax: 'accessModifier returnType methodName(parameters) {\n    // Code block to execute\n}',
        codeExample: 'public class MethodDemo {\n    // Defining the method\n    public static void sayHello() {\n        System.out.println("Hello from the method!");\n    }\n\n    public static void main(String[] args) {\n        // Calling the method\n        sayHello();\n        sayHello();\n    }\n}',
        codeOutput: 'Hello from the method!\nHello from the method!',
        takeaways: [
          'Methods should ideally focus on performing a single specific task.',
          'Code written inside a method does not execute automatically; the method must be explicitly called.',
          'Static methods can be called directly without creating an object instance.'
        ]
      },
      {
        id: 'm5-l2',
        title: 'Lesson 5.2 Method Parameters',
        objectives: [
          'Pass arguments into methods.',
          'Understand pass-by-value semantics.'
        ],
        theory: 'Parameters act as local variables inside the method. You define them in the method signature to accept external data. When you call the method, you pass actual values known as arguments. Java passes primitive data types strictly by value, meaning a copy of the value is sent to the method, not the original variable.',
        syntax: 'public static void printSum(int a, int b) {\n    System.out.println(a + b);\n}',
        codeExample: 'public class ParamDemo {\n    public static void greetUser(String name, int age) {\n        System.out.println("User " + name + " is " + age + " years old.");\n    }\n\n    public static void main(String[] args) {\n        greetUser("Alice", 25);\n        greetUser("Bob", 30);\n    }\n}',
        codeOutput: 'User Alice is 25 years old.\nUser Bob is 30 years old.',
        takeaways: [
          'You can pass multiple parameters by separating them with commas.',
          'The data type and order of arguments passed must exactly match the parameter definition.',
          'Modifying a primitive parameter inside a method does not affect the original variable in the caller.'
        ]
      },
      {
        id: 'm5-l3',
        title: 'Lesson 5.3 Return Types',
        objectives: [
          'Return calculation outputs back to the caller.',
          'Understand the void keyword.'
        ],
        theory: 'If you want a method to process data and send a result back to the caller, you must specify a return type in the method signature (e.g., int, double, String). The method must then use the `return` keyword to output a value of that exact type. If a method does not return anything, its return type must be declared as `void`.',
        syntax: 'public static int add(int x, int y) {\n    return x + y; // Must return an integer\n}',
        codeExample: 'public class ReturnDemo {\n    public static double calculateTax(double amount) {\n        return amount * 0.15;\n    }\n\n    public static void main(String[] args) {\n        double tax = calculateTax(200.0);\n        System.out.println("Tax to pay: $" + tax);\n    }\n}',
        codeOutput: 'Tax to pay: $30.0',
        takeaways: [
          'The execution of a method terminates immediately upon hitting a return statement.',
          'A method with a non-void return type must guarantee that a value is returned under all logical paths.',
          'You can use the return value directly in print statements or variable assignments.'
        ]
      },
      {
        id: 'm5-l4',
        title: 'Lesson 5.4 Method Overloading',
        objectives: [
          'Define multiple methods with the same name.',
          'Resolve methods using different parameter signatures.'
        ],
        theory: 'Method overloading allows you to define multiple methods in the same class that share the exact same name, as long as their parameter lists are different (different number of parameters, different types, or different order). This provides flexibility by letting the same logical action handle different types of inputs.',
        syntax: 'public int calc(int a) { return a; }\npublic double calc(double a) { return a; }\npublic int calc(int a, int b) { return a + b; }',
        codeExample: 'public class OverloadDemo {\n    public static void print(String text) {\n        System.out.println("String: " + text);\n    }\n    public static void print(int number) {\n        System.out.println("Integer: " + number);\n    }\n\n    public static void main(String[] args) {\n        print("Hello");\n        print(42);\n    }\n}',
        codeOutput: 'String: Hello\nInteger: 42',
        takeaways: [
          'Overloading is determined at compile time (static polymorphism).',
          'You cannot overload methods by changing only the return type; the parameter list must differ.',
          'It makes APIs cleaner (e.g., System.out.println() is heavily overloaded).'
        ]
      },
      {
        id: 'm5-l5',
        title: 'Lesson 5.5 Recursion',
        objectives: [
          'Call methods from within themselves.',
          'Define strict base cases to prevent overflow.'
        ],
        theory: 'Recursion is the technique of making a method call itself to solve smaller pieces of a larger problem. Every recursive method absolutely requires a "base case"—a condition where it stops calling itself and begins returning values. Without a base case, it will call itself infinitely until the JVM runs out of memory.',
        syntax: 'public int factorial(int n) {\n    if (n <= 1) return 1; // Base case\n    return n * factorial(n - 1); // Recursive call\n}',
        codeExample: 'public class RecursionDemo {\n    public static int sumDown(int n) {\n        if (n <= 0) { // Base Case\n            return 0;\n        }\n        return n + sumDown(n - 1);\n    }\n\n    public static void main(String[] args) {\n        int result = sumDown(3); // 3 + 2 + 1 + 0\n        System.out.println("Sum: " + result);\n    }\n}',
        codeOutput: 'Sum: 6',
        takeaways: [
          'Missing or unreachable base cases will result in a StackOverflowError.',
          'Recursion can sometimes be slower and consume more memory than simple loops due to call stack overhead.',
          'It is extremely elegant for tree traversals and sorting algorithms like QuickSort.'
        ]
      },
      {
        id: 'm5-l6',
        title: 'Lesson 5.6 Variable Scope',
        objectives: [
          'Understand local, block, and class scopes.',
          'Prevent naming collisions and variable shadowing.'
        ],
        theory: 'Scope defines the region of the program where a variable is accessible. In Java, variables declared inside a method (local variables) are only accessible within that method. Variables declared inside a block (like a loop or if statement) are block-scoped and disappear when the block ends. Class-level variables (fields) are accessible anywhere within the class.',
        syntax: 'public class Scope {\n    int global = 1; // Class scope\n    public void test() {\n        int local = 2; // Method scope\n        if (true) { int block = 3; } // Block scope\n    }\n}',
        codeExample: 'public class ScopeDemo {\n    static int classLevel = 100;\n\n    public static void showScopes() {\n        int methodLevel = 50;\n        for(int i=0; i<1; i++) {\n            int blockLevel = 10;\n            System.out.println("Can see all: " + classLevel + ", " + methodLevel + ", " + blockLevel);\n        }\n        // blockLevel is dead here\n    }\n\n    public static void main(String[] args) {\n        showScopes();\n    }\n}',
        codeOutput: 'Can see all: 100, 50, 10',
        takeaways: [
          'Local variables do not have default values and must be initialized manually.',
          'If a local variable has the same name as a class variable, it "shadows" (hides) the class variable.',
          'Block scope ensures temporary variables are garbage collected as early as possible.'
        ]
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
        objectives: [
          'Define static data sequences.',
          'Understand array memory allocation.',
          'Declare and instantiate arrays correctly.'
        ],
        theory: 'Arrays are fixed-size sequential collections of elements of the same data type. They allow you to store multiple values in a single variable instead of declaring separate variables for each value. Arrays in Java are objects, meaning they are stored in the heap memory and must be instantiated using the `new` keyword, which sets their permanent size.',
        syntax: 'dataType[] arrayName = new dataType[size];\n// Alternatively: dataType[] arrayName = {val1, val2, ...};',
        codeExample: 'public class ArrayIntro {\n    public static void main(String[] args) {\n        // Declaring and instantiating\n        int[] scores = new int[3];\n        // Direct initialization\n        String[] names = {"Alice", "Bob", "Charlie"};\n        System.out.println("Names array holds: " + names.length + " elements.");\n    }\n}',
        codeOutput: 'Names array holds: 3 elements.',
        takeaways: [
          'The size of an array is permanently fixed at the time of creation and cannot be changed later.',
          'Numeric arrays default to 0, boolean arrays default to false, and object arrays default to null.',
          'Use the arrayName.length property (not a method) to find the size of the array.'
        ]
      },
      {
        id: 'm6-l2',
        title: 'Lesson 6.2 1D Arrays',
        objectives: [
          'Access and modify array elements using indices.',
          'Understand ArrayIndexOutOfBoundsException.'
        ],
        theory: 'You can read or update elements in an array using their index. Java arrays use 0-based indexing, meaning the first element is at index 0 and the last element is at index `length - 1`. If you try to access an index outside this strict boundary, Java will throw a runtime error.',
        syntax: 'arrayName[index] = value; // Assigning\ndataType var = arrayName[index]; // Reading',
        codeExample: 'public class ArrayAccess {\n    public static void main(String[] args) {\n        int[] numbers = new int[5];\n        numbers[0] = 10;\n        numbers[1] = 20;\n        numbers[4] = 50;\n        System.out.println("First element: " + numbers[0]);\n        System.out.println("Last element: " + numbers[numbers.length - 1]);\n    }\n}',
        codeOutput: 'First element: 10\nLast element: 50',
        takeaways: [
          'Accessing index -1 or index >= length throws an ArrayIndexOutOfBoundsException.',
          'Always use index `0` for the first item and `length - 1` for the final item.',
          'Elements inside arrays can be modified at any time even if the array variable is final (final only protects the reference).'
        ]
      },
      {
        id: 'm6-l3',
        title: 'Lesson 6.3 2D Arrays',
        objectives: [
          'Build multi-dimensional matrices.',
          'Understand arrays of arrays.'
        ],
        theory: 'A 2D array in Java is simply an array where each element is another array. They are perfect for representing grids, tables, coordinates, or game boards (like Chess or Tic-Tac-Toe). You access elements using two indices: one for the row, and one for the column.',
        syntax: 'dataType[][] matrix = new dataType[rows][cols];',
        codeExample: 'public class MatrixDemo {\n    public static void main(String[] args) {\n        int[][] grid = {\n            {1, 2, 3},\n            {4, 5, 6}\n        };\n        // Accessing row 1 (second array), column 2 (third element)\n        System.out.println("Element at (1,2): " + grid[1][2]);\n        System.out.println("Total Rows: " + grid.length);\n        System.out.println("Cols in Row 0: " + grid[0].length);\n    }\n}',
        codeOutput: 'Element at (1,2): 6\nTotal Rows: 2\nCols in Row 0: 3',
        takeaways: [
          'The outer array size determines the number of rows, and inner array size determines columns.',
          'Java supports "jagged arrays" where each row can actually have a different number of columns.',
          'Always use nested loops to iterate over 2D array elements.'
        ]
      },
      {
        id: 'm6-l4',
        title: 'Lesson 6.4 Array Operations',
        objectives: [
          'Iterate using standard for loops.',
          'Utilize enhanced for-each loops.'
        ],
        theory: 'The most common operation performed on arrays is iteration—visiting every single element to read or modify it. You can use standard `for` loops using indices, or the enhanced `for-each` loop which hides the index logic and provides a cleaner syntax for strictly reading data sequentially.',
        syntax: 'for (dataType element : arrayName) {\n    // element holds the value\n}',
        codeExample: 'public class IterationDemo {\n    public static void main(String[] args) {\n        String[] fruits = {"Apple", "Banana", "Cherry"};\n        \n        // Standard loop\n        for (int i = 0; i < fruits.length; i++) {\n            System.out.print(fruits[i] + " ");\n        }\n        System.out.println();\n        \n        // Enhanced for-each loop\n        for (String fruit : fruits) {\n            System.out.print(fruit + " ");\n        }\n    }\n}',
        codeOutput: 'Apple Banana Cherry \nApple Banana Cherry ',
        takeaways: [
          'The standard for loop allows backward iteration, skipping elements, and modifying the array.',
          'The enhanced for-each loop strictly moves forward by 1, and operates on a copy of the element (modifying it does not change the array).',
          'Use for-each whenever you only need to read elements sequentially.'
        ]
      },
      {
        id: 'm6-l5',
        title: 'Lesson 6.5 Array Sorting',
        objectives: [
          'Use java.util.Arrays to sort data natively.',
          'Understand default sorting behaviors.'
        ],
        theory: 'Instead of writing manual sorting algorithms like Bubble Sort, Java provides the `java.util.Arrays` utility class. The `Arrays.sort()` method sorts array elements into ascending numerical or alphabetical order automatically. It uses an extremely fast dual-pivot Quicksort algorithm for primitives.',
        syntax: 'import java.util.Arrays;\n\nArrays.sort(arrayName);',
        codeExample: 'import java.util.Arrays;\n\npublic class SortDemo {\n    public static void main(String[] args) {\n        int[] numbers = {50, 10, 40, 20, 30};\n        Arrays.sort(numbers);\n        System.out.println(Arrays.toString(numbers));\n    }\n}',
        codeOutput: '[10, 20, 30, 40, 50]',
        takeaways: [
          'Arrays.sort() modifies the original array; it does not return a new one.',
          'You can sort objects (like Strings) alphabetically natively.',
          'Arrays.toString() is a helper method to print arrays easily without writing a loop.'
        ]
      },
      {
        id: 'm6-l6',
        title: 'Lesson 6.6 Array Searching',
        objectives: [
          'Implement Linear search techniques.',
          'Utilize fast Binary Search algorithms.'
        ],
        theory: 'Searching involves finding the index of a specific element. A **Linear Search** checks every element one by one (O(N) time), which works on any array. A **Binary Search** is incredibly fast (O(log N) time) but requires the array to be sorted first. It works by repeatedly dividing the search interval in half.',
        syntax: 'int index = Arrays.binarySearch(sortedArray, targetValue);',
        codeExample: 'import java.util.Arrays;\n\npublic class SearchDemo {\n    public static void main(String[] args) {\n        int[] data = {5, 12, 19, 21, 33};\n        int target = 21;\n        \n        int foundIndex = Arrays.binarySearch(data, target);\n        System.out.println("Element 21 found at index: " + foundIndex);\n    }\n}',
        codeOutput: 'Element 21 found at index: 3',
        takeaways: [
          'If you use Arrays.binarySearch() on an unsorted array, the results are completely unpredictable.',
          'If the element is not found, binarySearch returns a negative integer.',
          'Linear search is safer for constantly changing, unsorted data.'
        ]
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
        objectives: [
          'Understand the difference between primitives and Strings.',
          'Master the concept of String immutability.'
        ],
        theory: 'Strings in Java are not primitive data types; they are objects representing a sequence of characters. The most critical feature of Java Strings is immutability: once a String object is created in memory, its exact sequence of characters cannot ever be changed. Any operation that appears to modify a String actually creates and returns an entirely new String object.',
        syntax: 'String str1 = "Hello"; // Literal notation\nString str2 = new String("World"); // Object notation',
        codeExample: 'public class StringIntro {\n    public static void main(String[] args) {\n        String original = "Java";\n        original.concat(" Programming"); // Creates new string, but we ignore it\n        System.out.println("Original String: " + original);\n        \n        // Correct way to capture modification\n        original = original.concat(" Programming");\n        System.out.println("Reassigned String: " + original);\n    }\n}',
        codeOutput: 'Original String: Java\nReassigned String: Java Programming',
        takeaways: [
          'String methods do not alter the existing string; they spawn new instances.',
          'This immutability ensures security, thread-safety, and allows caching.',
          'Literal notation ("text") is preferred over new String() to leverage memory caching.'
        ]
      },
      {
        id: 'm7-l2',
        title: 'Lesson 7.2 String Methods',
        objectives: [
          'Perform robust string manipulations.',
          'Extract specific characters and substrings.'
        ],
        theory: 'The `String` class is packed with helper methods to process text. You can find the length, extract parts of the text (substrings), change casing, check for suffixes, or remove whitespace. Remember, indices in strings always start at 0, just like arrays.',
        syntax: 'int len = text.length();\nString sub = text.substring(start, end);\nchar c = text.charAt(index);',
        codeExample: 'public class StringMethods {\n    public static void main(String[] args) {\n        String phrase = "  Hello Universe  ";\n        String clean = phrase.trim(); // Removes outer spaces\n        System.out.println("Length: " + clean.length());\n        System.out.println("Uppercase: " + clean.toUpperCase());\n        System.out.println("Substring: " + clean.substring(6, 14));\n    }\n}',
        codeOutput: 'Length: 14\nUppercase: HELLO UNIVERSE\nSubstring: Universe',
        takeaways: [
          'length() is a method with parenthesis in Strings, unlike arrays where it is a property.',
          'substring(start, end) includes the start index but excludes the end index.',
          'trim() is extremely useful for sanitizing user inputs from forms.'
        ]
      },
      {
        id: 'm7-l3',
        title: 'Lesson 7.3 StringBuilder',
        objectives: [
          'Build strings dynamically and efficiently.',
          'Understand performance bottlenecks of concatenating in loops.'
        ],
        theory: 'Because standard Strings are immutable, concatenating strings inside large loops creates thousands of abandoned objects, destroying performance and filling up memory. To solve this, Java provides `StringBuilder`. It represents a mutable sequence of characters. You can append, insert, or delete characters directly inside the same memory space.',
        syntax: 'StringBuilder sb = new StringBuilder();\nsb.append("Value");',
        codeExample: 'public class BuilderDemo {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder("Java");\n        sb.append(" is");\n        sb.append(" fast!");\n        sb.insert(4, " Code"); // Inserts at index 4\n        \n        System.out.println(sb.toString());\n    }\n}',
        codeOutput: 'Java Code is fast!',
        takeaways: [
          'Always use StringBuilder when combining strings inside loops (e.g. for loops or while loops).',
          'Call toString() on the StringBuilder when you are finished to get the final immutable String.',
          'It is vastly faster than using the standard + operator for dynamic concatenations.'
        ]
      },
      {
        id: 'm7-l4',
        title: 'Lesson 7.4 StringBuffer',
        objectives: [
          'Learn thread-safe string building configurations.',
          'Contrast StringBuffer against StringBuilder.'
        ],
        theory: '`StringBuffer` is the older sibling of `StringBuilder`. It performs the exact same mutable string operations (append, insert, etc.). The critical difference is that `StringBuffer` is synchronized, meaning it is thread-safe. If multiple threads are attempting to modify the same string simultaneously, StringBuffer prevents data corruption, but this synchronization lock makes it noticeably slower.',
        syntax: 'StringBuffer sb = new StringBuffer();\nsb.append("Thread-Safe");',
        codeExample: 'public class BufferDemo {\n    public static void main(String[] args) {\n        StringBuffer buffer = new StringBuffer("Safe");\n        buffer.append(" Operations");\n        buffer.reverse(); // Easily reverse strings\n        System.out.println(buffer.toString());\n    }\n}',
        codeOutput: 'snoitarepO efaS',
        takeaways: [
          'Use StringBuilder 99% of the time for standard applications.',
          'Use StringBuffer only when you are explicitly managing multiple background threads sharing the same variable.',
          'Both classes share the exact same method names.'
        ]
      },
      {
        id: 'm7-l5',
        title: 'Lesson 7.5 String Comparison',
        objectives: [
          'Differentiate `==` operator from `equals()`.',
          'Avoid logic bugs caused by memory address comparisons.'
        ],
        theory: 'A massive beginner pitfall in Java is comparing strings using `==`. The `==` operator checks if two variables point to the exact same memory address (object reference). To check if two strings contain the same actual sequence of letters (content value), you must use the `.equals()` method.',
        syntax: 'boolean match = str1.equals(str2);\nboolean insensitive = str1.equalsIgnoreCase(str2);',
        codeExample: 'public class CompareDemo {\n    public static void main(String[] args) {\n        String a = new String("test");\n        String b = new String("test");\n        \n        System.out.println("Using == : " + (a == b));\n        System.out.println("Using equals: " + a.equals(b));\n    }\n}',
        codeOutput: 'Using == : false\nUsing equals: true',
        takeaways: [
          'NEVER use == to compare string text. It will often return false even if the text matches.',
          'Always use equals() for exact matches, and equalsIgnoreCase() for case-insensitive checks.',
          'If you create strings without `new`, Java may cache them to the same address, making `==` work occasionally, but it is too dangerous to rely on.'
        ]
      },
      {
        id: 'm7-l6',
        title: 'Lesson 7.6 String Manipulation',
        objectives: [
          'Split monolithic strings into arrays.',
          'Sanitize data using replace operators.'
        ],
        theory: 'For parsing complex data sets (like CSV files or URLs), the `split()` method divides a string into a String array using a provided delimiter or regular expression. Conversely, the `replace()` method scans the string and substitutes all occurrences of a specific character or sequence with a new one.',
        syntax: 'String[] parts = text.split("delimiter");\nString replaced = text.replace("old", "new");',
        codeExample: 'public class ManipulateDemo {\n    public static void main(String[] args) {\n        String csv = "apple,banana,orange";\n        String[] fruits = csv.split(",");\n        System.out.println("Second fruit: " + fruits[1]);\n        \n        String messy = "I love apples";\n        System.out.println("Fixed: " + messy.replace("apples", "Java"));\n    }\n}',
        codeOutput: 'Second fruit: banana\nFixed: I love Java',
        takeaways: [
          'split() accepts regular expressions (Regex), so splitting on special characters like periods requires escaping: split("\\\\.").',
          'replace() replaces every matching occurrence, not just the first one.',
          'These operations are heavy; use them judiciously on very large strings.'
        ]
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
        objectives: [
          'Understand paradigm shifts from procedural programming.',
          'Memorize the four pillars of Object-Oriented logic.'
        ],
        theory: 'Object-Oriented Programming (OOP) is a paradigm that models software components as real-world "objects" that contain both data (state) and methods (behavior). This is vastly different from procedural programming (like C) which separates data from functions. The four core pillars of OOP that organize architecture are: Encapsulation, Inheritance, Polymorphism, and Abstraction.',
        syntax: '// Object Oriented Design models Entities\nclass BankAccount {\n    double balance;\n    void deposit(double amt) { ... }\n}',
        codeExample: 'public class OOPConcept {\n    public static void main(String[] args) {\n        System.out.println("OOP builds modular, reusable software mapped to business logic.");\n    }\n}',
        codeOutput: 'OOP builds modular, reusable software mapped to business logic.',
        takeaways: [
          'OOP makes large codebases vastly easier to maintain, scale, and debug.',
          'An object is self-contained: it knows its own data and how to manipulate it.',
          'Everything in Java revolves around OOP; you cannot write code outside of a Class.'
        ]
      },
      {
        id: 'm8-l2',
        title: 'Lesson 8.2 Classes and Objects',
        objectives: [
          'Define class blueprints.',
          'Instantiate objects into heap memory.'
        ],
        theory: 'A **Class** is a blueprint or template. It defines what attributes and behaviors an entity will have, but it consumes no data memory itself. An **Object** is a concrete instance of that class. You create objects using the `new` keyword, which allocates space in heap memory and returns a reference address back to your variable.',
        syntax: 'ClassName objectName = new ClassName();',
        codeExample: 'class Car {\n    String color;\n    void honk() { System.out.println("Beep!"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(); // Instantiation\n        myCar.color = "Red";\n        myCar.honk();\n    }\n}',
        codeOutput: 'Beep!',
        takeaways: [
          'You can create thousands of unique Objects from a single Class blueprint.',
          'Object variables act as remote controls pointing to the data in heap memory.',
          'A class should typically define fields at the top, and methods below.'
        ]
      },
      {
        id: 'm8-l3',
        title: 'Lesson 8.3 Constructors',
        objectives: [
          'Initialize objects with startup data.',
          'Differentiate constructors from standard methods.'
        ],
        theory: 'A Constructor is a special block of code called automatically the exact moment an object is instantiated with `new`. Its purpose is to initialize the object\'s fields. Constructors have two strict rules: they must have the exact same name as the Class, and they absolutely cannot have a return type (not even void).',
        syntax: 'public ClassName(parameters) {\n    // Setup code\n}',
        codeExample: 'class User {\n    String role;\n    // Constructor\n    public User(String assignedRole) {\n        role = assignedRole;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        User admin = new User("Admin");\n        System.out.println("Role: " + admin.role);\n    }\n}',
        codeOutput: 'Role: Admin',
        takeaways: [
          'If you write zero constructors, Java quietly inserts an empty Default Constructor for you.',
          'If you write any custom constructor, Java removes the default one.',
          'Constructors can be overloaded just like methods.'
        ]
      },
      {
        id: 'm8-l4',
        title: 'Lesson 8.4 this Keyword',
        objectives: [
          'Resolve variable naming collisions.',
          'Reference the current active instance.'
        ],
        theory: 'Inside class methods, the `this` keyword is a reference variable that points to the current object instance executing the method. It is most heavily used in constructors and setter methods to resolve variable shadowing (when a method parameter has the exact same name as a class attribute).',
        syntax: 'public void setAge(int age) {\n    this.age = age; // this.age refers to the class field\n}',
        codeExample: 'class Person {\n    String name;\n    public Person(String name) {\n        // Without `this`, the parameter assigns to itself, doing nothing\n        this.name = name;\n    }\n    public void display() {\n        System.out.println("I am " + this.name);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person("John");\n        p.display();\n    }\n}',
        codeOutput: 'I am John',
        takeaways: [
          'Using `this.field` clarifies that you are modifying the object state, not a local variable.',
          'You can also use `this()` to call other constructors within the same class.',
          '`this` cannot be used inside static methods, because static methods belong to the class, not an object instance.'
        ]
      },
      {
        id: 'm8-l5',
        title: 'Lesson 8.5 Encapsulation',
        objectives: [
          'Implement data hiding using private modifiers.',
          'Write robust Getter and Setter architectures.'
        ],
        theory: 'Encapsulation is the OOP mechanism of wrapping data (variables) and code acting on the data (methods) together as a single unit. In practice, this means declaring class variables as `private` to lock them away from direct outside access, and providing `public` Getters (to read) and Setters (to write) to enforce validation logic.',
        syntax: 'private int field;\npublic int getField() { return field; }\npublic void setField(int val) { field = val; }',
        codeExample: 'class Bank {\n    private double balance = 1000;\n    \n    public double getBalance() { return balance; }\n    \n    public void withdraw(double amt) {\n        if (amt > 0 && amt <= balance) {\n            balance -= amt;\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Bank b = new Bank();\n        b.withdraw(400);\n        System.out.println("Remaining: " + b.getBalance());\n    }\n}',
        codeOutput: 'Remaining: 600.0',
        takeaways: [
          'Encapsulation prevents other developers from injecting bad data (e.g. setting health to -500).',
          'It allows you to change internal logic without breaking external code that relies on your class.',
          'Almost all fields in professional Java applications should be private.'
        ]
      },
      {
        id: 'm8-l6',
        title: 'Lesson 8.6 Inheritance',
        objectives: [
          'Establish Is-A hierarchical relationships.',
          'Extend classes to inherit attributes and methods.'
        ],
        theory: 'Inheritance allows a new class (Child/Subclass) to acquire the properties and methods of an existing class (Parent/Superclass) using the `extends` keyword. This promotes massive code reusability. A Dog "Is-A" Animal, so Dog can extend Animal and inherit walking and eating methods, while adding its own barking methods.',
        syntax: 'class ChildClass extends ParentClass {\n    // Additional features\n}',
        codeExample: 'class Animal {\n    void eat() { System.out.println("Eating..."); }\n}\nclass Dog extends Animal {\n    void bark() { System.out.println("Barking!"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat(); // Inherited method\n        d.bark(); // Specific method\n    }\n}',
        codeOutput: 'Eating...\nBarking!',
        takeaways: [
          'Private fields and methods of a parent class are NOT accessible to the child class.',
          'Java supports Multi-level inheritance (A->B->C) but absolutely forbids Multiple inheritance (A extending B and C simultaneously).',
          'The `super` keyword is used in subclasses to access parent constructors and overridden methods.'
        ]
      },
      {
        id: 'm8-l7',
        title: 'Lesson 8.7 Polymorphism',
        objectives: [
          'Implement dynamic method dispatch.',
          'Override parent methods to customize behaviors.'
        ],
        theory: 'Polymorphism ("many forms") allows objects of different classes to be treated as objects of a common superclass. The most powerful form is Method Overriding (Runtime Polymorphism). If a child class provides a specific implementation of a method already defined in its parent, calling that method executes the child\'s version, even if the variable type is the parent class.',
        syntax: '@Override\npublic void parentMethod() {\n    // New logic\n}',
        codeExample: 'class Bird {\n    void sing() { System.out.println("Bird song"); }\n}\nclass Crow extends Bird {\n    @Override\n    void sing() { System.out.println("Caw caw!"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Bird myBird = new Crow(); // Parent reference, Child object\n        myBird.sing(); // Calls Crow\'s version dynamically\n    }\n}',
        codeOutput: 'Caw caw!',
        takeaways: [
          'The `@Override` annotation is highly recommended to let the compiler check for spelling mistakes.',
          'Polymorphism allows you to write one method that can accept hundreds of different child object types.',
          'Overloading is compile-time polymorphism; overriding is runtime polymorphism.'
        ]
      },
      {
        id: 'm8-l8',
        title: 'Lesson 8.8 Abstraction',
        objectives: [
          'Hide implementation complexities.',
          'Define abstract classes and methods.'
        ],
        theory: 'Abstraction focuses on hiding complex implementation details and showing only the essential features of an object. You achieve this using the `abstract` keyword. An abstract class acts as a rigid template: it cannot be instantiated itself, and it forces any child class to write the code for its abstract methods.',
        syntax: 'abstract class Vehicle {\n    abstract void startEngine(); // No body allowed!\n}',
        codeExample: 'abstract class Shape {\n    abstract void draw(); // Must be overridden\n}\nclass Circle extends Shape {\n    void draw() {\n        System.out.println("Drawing a circle.");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Circle();\n        s.draw();\n    }\n}',
        codeOutput: 'Drawing a circle.',
        takeaways: [
          'You can NEVER use `new` to instantiate an abstract class directly.',
          'Abstract classes can contain both abstract methods (no body) and normal methods (with bodies).',
          'It forces subclasses to adhere to a strict structural design.'
        ]
      },
      {
        id: 'm8-l9',
        title: 'Lesson 8.9 Interfaces',
        objectives: [
          'Implement 100% abstract contracts.',
          'Bypass multiple inheritance limitations.'
        ],
        theory: 'An Interface is a completely abstract "contract" that classes can agree to follow using the `implements` keyword. Because Java blocks a class from extending multiple parents, interfaces are the solution. A class can implement infinite interfaces. By default, all methods inside an interface are implicitly public and abstract.',
        syntax: 'interface Playable {\n    void play();\n}\nclass Video implements Playable {\n    public void play() { ... }\n}',
        codeExample: 'interface Drivable {\n    void drive();\n}\nclass Truck implements Drivable {\n    public void drive() {\n        System.out.println("Truck driving heavily.");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Drivable t = new Truck();\n        t.drive();\n    }\n}',
        codeOutput: 'Truck driving heavily.',
        takeaways: [
          'Fields in interfaces are always implicitly `public static final` (constants).',
          'A class must implement every single method defined in the interface, or declare itself abstract.',
          'Modern Java (8+) allows `default` and `static` methods with bodies inside interfaces, but the primary use is still abstract contracts.'
        ]
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
        objectives: [
          'Understand exception hierarchies.',
          'Differentiate between Checked and Unchecked Exceptions.'
        ],
        theory: 'In Java, an exception is an unwanted or unexpected event that disrupts the normal flow of the program at runtime (like dividing by zero, or opening a missing file). All exceptions inherit from the `Throwable` class. They are split into two major categories: **Checked Exceptions** (checked at compile-time, forcing you to handle them) and **Unchecked Exceptions** (runtime errors that are usually due to bad programming logic, like NullPointerException).',
        syntax: 'Throwable -> Exception -> RuntimeException (Unchecked)',
        codeExample: 'public class IntroDemo {\n    public static void main(String[] args) {\n        // This throws an Unchecked ArithmeticException\n        int result = 100 / 0; \n        System.out.println(result);\n    }\n}',
        codeOutput: 'Exception in thread "main" java.lang.ArithmeticException: / by zero',
        takeaways: [
          'Errors (like OutOfMemoryError) are also throwables, but they represent severe system failures that you should not try to catch.',
          'Checked exceptions must be explicitly caught or declared in the method signature.',
          'Unchecked exceptions inherit from RuntimeException.'
        ]
      },
      {
        id: 'm9-l2',
        title: 'Lesson 9.2 try-catch Block',
        objectives: [
          'Handle errors safely without crashing.',
          'Read exception stack traces.'
        ],
        theory: 'To prevent a program from crashing when an exception occurs, you wrap the risky code inside a `try` block. If an exception is thrown inside the try block, execution instantly jumps to the matching `catch` block, allowing you to handle the error gracefully and continue program execution.',
        syntax: 'try {\n    // Risky code\n} catch (ExceptionType e) {\n    // Handle error\n}',
        codeExample: 'public class CatchDemo {\n    public static void main(String[] args) {\n        try {\n            int[] numbers = {1, 2, 3};\n            System.out.println(numbers[5]); // Out of bounds\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println("Error: Index is invalid! Returning default.");\n        }\n        System.out.println("Program continues running...");\n    }\n}',
        codeOutput: 'Error: Index is invalid! Returning default.\nProgram continues running...',
        takeaways: [
          'You can chain multiple catch blocks together to handle different errors differently.',
          'Always catch the most specific exception first (e.g. FileNotFoundException) before general ones (e.g. Exception).',
          'The `e.getMessage()` and `e.printStackTrace()` methods are crucial for debugging.'
        ]
      },
      {
        id: 'm9-l3',
        title: 'Lesson 9.3 finally Block',
        objectives: [
          'Clean up system resources safely.',
          'Understand guaranteed execution paths.'
        ],
        theory: 'The `finally` block is attached after try-catch blocks. The code inside the finally block is guaranteed to execute regardless of whether an exception was thrown, whether it was caught, or even if the try block hit a `return` statement. It is exclusively used for cleaning up resources, like closing database connections or network sockets.',
        syntax: 'try { \n   // Code \n} catch (Exception e) { \n   // Handle \n} finally { \n   // Always runs \n}',
        codeExample: 'import java.util.Scanner;\n\npublic class FinallyDemo {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        try {\n            System.out.println("Reading data...");\n            // Simulated crash\n            int crash = 1 / 0;\n        } catch (Exception e) {\n            System.out.println("Caught an error.");\n        } finally {\n            scanner.close();\n            System.out.println("Scanner closed successfully.");\n        }\n    }\n}',
        codeOutput: 'Reading data...\nCaught an error.\nScanner closed successfully.',
        takeaways: [
          'The finally block runs even if a crash occurs that isn\'t caught by your catch block.',
          'The only time finally doesn\'t run is if you call System.exit(0) or the JVM crashes completely.',
          'In modern Java, "Try-with-resources" often replaces finally for auto-closing files.'
        ]
      },
      {
        id: 'm9-l4',
        title: 'Lesson 9.4 throw Keyword',
        objectives: [
          'Instantiate and throw exceptions manually.',
          'Enforce strict method inputs.'
        ],
        theory: 'Sometimes you want to manually trigger an exception if user input is invalid or a business rule is broken. You use the `throw` keyword followed by a `new` instance of an Exception class. This immediately stops the method\'s execution and hands the error back to the caller.',
        syntax: 'throw new IllegalArgumentException("Error message here");',
        codeExample: 'public class ThrowDemo {\n    public static void checkAge(int age) {\n        if (age < 18) {\n            throw new IllegalArgumentException("Access denied - You must be at least 18.");\n        }\n        System.out.println("Access granted.");\n    }\n\n    public static void main(String[] args) {\n        checkAge(15);\n    }\n}',
        codeOutput: 'Exception in thread "main" java.lang.IllegalArgumentException: Access denied - You must be at least 18.',
        takeaways: [
          'It is highly recommended to throw standard exceptions like IllegalArgumentException or IllegalStateException when inputs are bad.',
          'Throwing an exception acts somewhat like a `return` statement; code below the throw will not execute.',
          'You must instantiate the exception with the `new` keyword.'
        ]
      },
      {
        id: 'm9-l5',
        title: 'Lesson 9.5 throws Keyword',
        objectives: [
          'Delegate exception handling up the call stack.',
          'Satisfy compiler checks for Checked Exceptions.'
        ],
        theory: 'If a method executes code that might trigger a Checked Exception (like reading a file), but you don\'t want to handle it using try-catch inside that method, you must append the `throws` keyword to the method signature. This tells the compiler: "I am aware this might fail, but I am forcing whoever calls this method to handle the error."',
        syntax: 'public void readFile() throws IOException {\n    // Code that might throw IOException\n}',
        codeExample: 'import java.io.File;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class ThrowsDemo {\n    // Delegating the error handling to main()\n    public static void openFile() throws IOException {\n        FileReader reader = new FileReader("missing.txt");\n    }\n\n    public static void main(String[] args) {\n        try {\n            openFile();\n        } catch (IOException e) {\n            System.out.println("File not found! Handled in main.");\n        }\n    }\n}',
        codeOutput: 'File not found! Handled in main.',
        takeaways: [
          'The `throw` keyword actually throws the object. The `throws` keyword is just a warning label on the method signature.',
          'You can declare multiple exceptions in a signature: `throws IOException, SQLException`.',
          'If the main method throws an exception, the program will crash.'
        ]
      },
      {
        id: 'm9-l6',
        title: 'Lesson 9.6 Custom Exceptions',
        objectives: [
          'Write highly specific domain exceptions.',
          'Extend existing Exception hierarchies.'
        ],
        theory: 'Standard exceptions (like IllegalArgumentException) are great, but sometimes you need an error name that exactly matches your business logic (e.g. `InsufficientFundsException`). You can create custom exceptions by simply creating a new class that `extends Exception` (for a checked exception) or `extends RuntimeException` (for unchecked).',
        syntax: 'public class CustomException extends Exception {\n    public CustomException(String msg) { super(msg); }\n}',
        codeExample: 'class InvalidPasswordException extends Exception {\n    public InvalidPasswordException(String message) {\n        super(message);\n    }\n}\n\npublic class CustomDemo {\n    public static void main(String[] args) {\n        try {\n            throw new InvalidPasswordException("Password must contain a number!");\n        } catch (InvalidPasswordException e) {\n            System.out.println("Security Error: " + e.getMessage());\n        }\n    }\n}',
        codeOutput: 'Security Error: Password must contain a number!',
        takeaways: [
          'Custom exceptions make your logs incredibly easy to read and debug.',
          'Always pass the error string to the super constructor using `super(message)`.',
          'Prefer extending RuntimeException unless you want to force other developers to write try-catch blocks.'
        ]
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
        objectives: [
          'Learn the Collections hierarchy.',
          'Understand when to use Lists, Sets, and Maps.'
        ],
        theory: 'The Java Collections Framework provides a unified architecture to store and manipulate groups of objects. Unlike standard Arrays which have a fixed size, Collections grow and shrink dynamically. The core interfaces are `List` (ordered data with duplicates), `Set` (unordered unique data), and `Map` (key-value pairs). Note that `Map` does not technically inherit from the `Collection` interface, but is considered part of the framework.',
        syntax: 'Collection<Type> col = new ImplementingClass<>();',
        codeExample: 'import java.util.Collection;\nimport java.util.ArrayList;\n\npublic class CollectionDemo {\n    public static void main(String[] args) {\n        Collection<String> items = new ArrayList<>();\n        items.add("Box");\n        System.out.println("Collection size: " + items.size());\n    }\n}',
        codeOutput: 'Collection size: 1',
        takeaways: [
          'Collections can only store Objects (like Integer, Double, String), NEVER primitives (like int, double).',
          'Use Lists for standard dynamic arrays, Sets to ensure uniqueness, and Maps for dictionary lookups.',
          'Always program to the interface (e.g. `List<String> = new ArrayList<>()`) for flexibility.'
        ]
      },
      {
        id: 'm10-l2',
        title: 'Lesson 10.2 ArrayList',
        objectives: [
          'Use highly performant dynamic arrays.',
          'Understand resizing mechanics.'
        ],
        theory: '`ArrayList` is the most popular implementation of the `List` interface. Under the hood, it is backed by a standard Array. When it gets full, it automatically creates a new array 50% larger and copies the data over. It maintains exact insertion order and allows infinite duplicate values. Reading data using an index is extremely fast (O(1)).',
        syntax: 'List<String> list = new ArrayList<>();\nlist.add("Java");\nlist.get(0);',
        codeExample: 'import java.util.ArrayList;\nimport java.util.List;\n\npublic class ArrayListDemo {\n    public static void main(String[] args) {\n        List<Integer> scores = new ArrayList<>();\n        scores.add(90);\n        scores.add(85);\n        scores.add(90); // Duplicates allowed\n        \n        scores.remove(1); // Removes 85\n        System.out.println("First item: " + scores.get(0));\n        System.out.println("Total items: " + scores.size());\n    }\n}',
        codeOutput: 'First item: 90\nTotal items: 2',
        takeaways: [
          'Retrieving data via index is lightning fast.',
          'Inserting or deleting elements in the *middle* of an ArrayList is slow because all subsequent elements must be shifted.',
          'Use .size() instead of .length to get item counts.'
        ]
      },
      {
        id: 'm10-l3',
        title: 'Lesson 10.3 LinkedList',
        objectives: [
          'Use doubly-linked structures.',
          'Contrast with ArrayList performance.'
        ],
        theory: 'A `LinkedList` also implements the `List` interface (and `Queue`), but instead of a contiguous array, it stores elements as independent "Nodes". Each node holds data and a memory pointer to both the previous and next nodes. This makes inserting or deleting data in the middle of the list extremely fast (O(1)), but randomly accessing data (e.g. `get(500)`) is very slow (O(N)) because it must walk the chain.',
        syntax: 'List<String> list = new LinkedList<>();',
        codeExample: 'import java.util.LinkedList;\n\npublic class LinkedDemo {\n    public static void main(String[] args) {\n        LinkedList<String> tasks = new LinkedList<>();\n        tasks.add("Design");\n        tasks.add("Code");\n        tasks.addFirst("Plan"); // Specific LinkedList method\n        tasks.addLast("Test");\n        \n        System.out.println(tasks);\n    }\n}',
        codeOutput: '[Plan, Design, Code, Test]',
        takeaways: [
          'Use LinkedList when your application requires constant data insertions and removals from the middle of the list.',
          'Use ArrayList if your application requires heavy reading and very little modifying.',
          'LinkedList consumes more memory per item because of the node pointers.'
        ]
      },
      {
        id: 'm10-l4',
        title: 'Lesson 10.4 HashSet',
        objectives: [
          'Store universally unique elements.',
          'Understand HashMap backing.'
        ],
        theory: 'A `HashSet` implements the `Set` interface, which strictly prohibits duplicate values. If you try to add a duplicate, it is quietly ignored. Under the hood, it is actually backed by a HashMap. It provides insanely fast O(1) performance for adding and checking if an element exists, but it completely destroys the insertion order (items will appear randomly).',
        syntax: 'Set<String> set = new HashSet<>();\nset.add("Unique");',
        codeExample: 'import java.util.HashSet;\nimport java.util.Set;\n\npublic class HashSetDemo {\n    public static void main(String[] args) {\n        Set<String> emails = new HashSet<>();\n        emails.add("a@test.com");\n        emails.add("b@test.com");\n        boolean isAdded = emails.add("a@test.com"); // Duplicate ignored\n        \n        System.out.println("Emails count: " + emails.size());\n        System.out.println("Duplicate was added: " + isAdded);\n    }\n}',
        codeOutput: 'Emails count: 2\nDuplicate was added: false',
        takeaways: [
          'Perfect for removing duplicates from an existing list.',
          'Do not use HashSet if you need elements returned in the exact order you added them (use LinkedHashSet instead).',
          'Custom objects stored in a HashSet MUST properly override the hashCode() and equals() methods.'
        ]
      },
      {
        id: 'm10-l5',
        title: 'Lesson 10.5 TreeSet',
        objectives: [
          'Maintain naturally sorted Sets.',
          'Understand Red-Black tree mechanics.'
        ],
        theory: 'A `TreeSet` is a Set that guarantees elements will be strictly sorted in their natural ascending order (e.g., A-Z for Strings, 1-100 for numbers). It does this by using a balanced Red-Black tree data structure under the hood. Because it must re-sort the tree every time you add an item, insertions and lookups are slightly slower (O(log N)) than a HashSet.',
        syntax: 'Set<Integer> sorted = new TreeSet<>();',
        codeExample: 'import java.util.TreeSet;\nimport java.util.Set;\n\npublic class TreeSetDemo {\n    public static void main(String[] args) {\n        Set<Integer> numbers = new TreeSet<>();\n        numbers.add(50);\n        numbers.add(10);\n        numbers.add(99);\n        numbers.add(25);\n        \n        // Automatically prints in sorted order\n        System.out.println("Sorted: " + numbers);\n    }\n}',
        codeOutput: 'Sorted: [10, 25, 50, 99]',
        takeaways: [
          'Does not allow duplicate values.',
          'Objects added to a TreeSet must implement the Comparable interface, or you must provide a custom Comparator.',
          'TreeSet is slower than HashSet, use it only when sorting is strictly required.'
        ]
      },
      {
        id: 'm10-l6',
        title: 'Lesson 10.6 HashMap',
        objectives: [
          'Store and retrieve Key-Value dictionary pairs.',
          'Understand hashing performance.'
        ],
        theory: 'A `HashMap` stores data in Key-Value pairs, acting like a dictionary. You look up a "Value" by asking for its unique "Key". Keys MUST be absolutely unique (adding a duplicate key overwrites the old value), but Values can be duplicated infinitely. HashMaps use a hashing algorithm to provide instant O(1) lookups, making them one of the most powerful data structures in Java.',
        syntax: 'Map<KeyType, ValueType> map = new HashMap<>();\nmap.put(key, value);\nmap.get(key);',
        codeExample: 'import java.util.HashMap;\nimport java.util.Map;\n\npublic class HashMapDemo {\n    public static void main(String[] args) {\n        Map<String, Integer> directory = new HashMap<>();\n        directory.put("Alice", 5551234);\n        directory.put("Bob", 5559999);\n        \n        // Look up by Key\n        System.out.println("Alice Phone: " + directory.get("Alice"));\n        \n        // Overwriting a key\n        directory.put("Alice", 1110000);\n        System.out.println("Alice New Phone: " + directory.get("Alice"));\n    }\n}',
        codeOutput: 'Alice Phone: 5551234\nAlice New Phone: 1110000',
        takeaways: [
          'HashMap does not guarantee any order of the keys.',
          'It allows exactly one null key, and infinite null values.',
          'Keys are hashed to determine their exact memory bucket; custom objects used as keys must override hashCode().'
        ]
      },
      {
        id: 'm10-l7',
        title: 'Lesson 10.7 TreeMap',
        objectives: [
          'Store sorted Maps.',
          'Iterate over alphabetized dictionaries.'
        ],
        theory: 'A `TreeMap` is identical to a HashMap in that it stores Key-Value pairs, but it automatically sorts all the entries based on the natural order of the Keys. Just like TreeSet, it uses a Red-Black tree under the hood, meaning operations operate at O(log N) speeds instead of O(1).',
        syntax: 'Map<String, Integer> map = new TreeMap<>();',
        codeExample: 'import java.util.TreeMap;\nimport java.util.Map;\n\npublic class TreeMapDemo {\n    public static void main(String[] args) {\n        Map<String, String> states = new TreeMap<>();\n        states.put("TX", "Texas");\n        states.put("CA", "California");\n        states.put("NY", "New York");\n        \n        // Prints alphabetically by Key (CA, NY, TX)\n        System.out.println("Sorted map: " + states);\n    }\n}',
        codeOutput: 'Sorted map: {CA=California, NY=New York, TX=Texas}',
        takeaways: [
          'Keys must be comparable (like Strings or Integers) so the map knows how to sort them.',
          'Does NOT allow null keys, as it cannot compare null to other values.',
          'Use only when you absolutely need to iterate over your dictionary in alphabetical/numerical order.'
        ]
      },
      {
        id: 'm10-l8',
        title: 'Lesson 10.8 Iterator',
        objectives: [
          'Traverse collections safely.',
          'Avoid ConcurrentModificationException.'
        ],
        theory: 'An `Iterator` is an object that allows you to traverse through a collection safely. If you try to remove an item from an ArrayList using a standard `for-each` loop, Java will immediately crash with a `ConcurrentModificationException`. Iterators solve this by tracking the state safely and providing a special `remove()` method.',
        syntax: 'Iterator<String> it = list.iterator();\nwhile(it.hasNext()) {\n    String s = it.next();\n    it.remove();\n}',
        codeExample: 'import java.util.ArrayList;\nimport java.util.Iterator;\nimport java.util.List;\n\npublic class IteratorDemo {\n    public static void main(String[] args) {\n        List<String> names = new ArrayList<>();\n        names.add("Alice");\n        names.add("Bob");\n        \n        Iterator<String> it = names.iterator();\n        while (it.hasNext()) {\n            String current = it.next();\n            if (current.equals("Alice")) {\n                it.remove(); // Safely deletes Alice\n            }\n        }\n        System.out.println("Remaining: " + names);\n    }\n}',
        codeOutput: 'Remaining: [Bob]',
        takeaways: [
          'You must call it.next() before you can call it.remove().',
          'Modern Java (8+) often replaces Iterators with `list.removeIf(condition)` lambda expressions for cleaner syntax.',
          'Maps do not have Iterators directly; you must iterate over `map.keySet()` or `map.entrySet()`.'
        ]
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
        title: 'Lesson 11.1 java.io.File',
        objectives: [
          'Understand the File class.',
          'Create, delete, and check file properties.',
          'Navigate file system paths.'
        ],
        theory: 'The `java.io.File` class represents files and directory paths in a system-independent manner. Note that a `File` object does not actually contain file data; it merely acts as a pointer or a handle to a potential file on disk. It allows you to create new empty files, delete files, check permissions, and list directory contents.',
        syntax: 'File file = new File("path/to/file.txt");',
        codeExample: 'import java.io.File;\nimport java.io.IOException;\n\npublic class FileDemo {\n    public static void main(String[] args) {\n        try {\n            File myFile = new File("data.txt");\n            if (myFile.createNewFile()) {\n                System.out.println("File created: " + myFile.getName());\n            } else {\n                System.out.println("File already exists.");\n            }\n            System.out.println("Absolute path: " + myFile.getAbsolutePath());\n        } catch (IOException e) {\n            System.out.println("An error occurred.");\n            e.printStackTrace();\n        }\n    }\n}',
        codeOutput: 'File created: data.txt\nAbsolute path: /user/project/data.txt',
        takeaways: [
          'The `createNewFile()` method throws an IOException if the disk is full or permissions are denied.',
          '`exists()`, `canRead()`, and `canWrite()` are helpful utility methods to check status before reading.',
          'The `File` class cannot read or write the actual text or binary content inside the file.'
        ]
      },
      {
        id: 'm11-l2',
        title: 'Lesson 11.2 FileReader & FileWriter',
        objectives: [
          'Read files character by character.',
          'Write data to files.',
          'Understand append vs overwrite modes.'
        ],
        theory: '`FileReader` and `FileWriter` are character streams used to read and write 16-bit Unicode characters. While they are easy to use, they interact directly with the disk for every single character read or written, which can be extremely slow for large files.',
        syntax: 'FileWriter writer = new FileWriter("file.txt", true); // true enables append mode\nFileReader reader = new FileReader("file.txt");',
        codeExample: 'import java.io.FileWriter;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class ReadWriteDemo {\n    public static void main(String[] args) {\n        // Writing\n        try (FileWriter fw = new FileWriter("log.txt")) {\n            fw.write("Hello, World!\\n");\n        } catch (IOException e) { e.printStackTrace(); }\n\n        // Reading\n        try (FileReader fr = new FileReader("log.txt")) {\n            int i;\n            while ((i = fr.read()) != -1) {\n                System.out.print((char) i);\n            }\n        } catch (IOException e) { e.printStackTrace(); }\n    }\n}',
        codeOutput: 'Hello, World!',
        takeaways: [
          'Pass `true` as the second argument to FileWriter to append data instead of overwriting the file.',
          '`fr.read()` returns `-1` when the end of the file is reached.',
          'Always close streams to free up OS file locks. We use the try-with-resources block here to automate closing.'
        ]
      },
      {
        id: 'm11-l3',
        title: 'Lesson 11.3 BufferedReader & BufferedWriter',
        objectives: [
          'Read and write files efficiently.',
          'Read files line-by-line instead of character-by-character.'
        ],
        theory: 'To solve the performance issues of raw `FileReader` and `FileWriter`, Java provides `BufferedReader` and `BufferedWriter`. These classes wrap the raw readers and maintain an internal memory buffer. They read/write large chunks of data from the disk at once, significantly minimizing expensive disk I/O operations.',
        syntax: 'BufferedReader br = new BufferedReader(new FileReader("file.txt"));',
        codeExample: 'import java.io.*;\n\npublic class BufferedDemo {\n    public static void main(String[] args) {\n        try (BufferedWriter bw = new BufferedWriter(new FileWriter("notes.txt"))) {\n            bw.write("Line 1");\n            bw.newLine(); // Platform independent newline\n            bw.write("Line 2");\n        } catch (IOException e) { e.printStackTrace(); }\n\n        try (BufferedReader br = new BufferedReader(new FileReader("notes.txt"))) {\n            String line;\n            while ((line = br.readLine()) != null) {\n                System.out.println("Read: " + line);\n            }\n        } catch (IOException e) { e.printStackTrace(); }\n    }\n}',
        codeOutput: 'Read: Line 1\nRead: Line 2',
        takeaways: [
          '`readLine()` returns `null` (not -1) when the end of the file is reached.',
          '`newLine()` automatically inserts the correct newline character based on the OS (\\n for Linux/Mac, \\r\\n for Windows).',
          'Always wrap your FileReaders in BufferedReaders for any production application.'
        ]
      },
      {
        id: 'm11-l4',
        title: 'Lesson 11.4 Try-with-Resources',
        objectives: [
          'Automate resource management.',
          'Prevent memory leaks and file locks.'
        ],
        theory: 'Introduced in Java 7, Try-with-resources is a special exception handling construct that guarantees any resource declared within the parenthesis will be automatically closed at the end of the statement, regardless of whether an exception is thrown or the block completes normally.',
        syntax: 'try (Resource res = new Resource()) {\n    // Use resource\n} catch (Exception e) {\n    // Handle exception\n}',
        codeExample: 'import java.io.*;\n\npublic class TryWithResourcesDemo {\n    public static void main(String[] args) {\n        // The Scanner and File handles will close automatically!\n        try (java.util.Scanner scanner = new java.util.Scanner(new File("missing.txt"))) {\n            while (scanner.hasNextLine()) {\n                System.out.println(scanner.nextLine());\n            }\n        } catch (FileNotFoundException e) {\n            System.out.println("File not found! Safe exit without leaks.");\n        }\n    }\n}',
        codeOutput: 'File not found! Safe exit without leaks.',
        takeaways: [
          'Only classes that implement `java.lang.AutoCloseable` or `java.io.Closeable` can be used in a try-with-resources block.',
          'This completely eliminates the need for messy `finally` blocks containing manual `.close()` calls.'
        ]
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
        title: 'Lesson 12.1 Introduction to Threads',
        objectives: [
          'Understand the concept of multithreading.',
          'Differentiate between processes and threads.',
          'Learn how threads share memory.'
        ],
        theory: 'A Process is a heavy-weight, independent program running in an OS with its own memory space. A Thread is a light-weight sub-process that runs inside a process. Multithreading allows concurrent execution of two or more threads to maximize CPU utilization. In Java, all threads within a program share the same heap memory (where objects live), but each thread has its own call stack (where local variables live).',
        syntax: 'Thread t = new Thread();',
        takeaways: [
          'Context switching between threads is faster and cheaper than context switching between processes.',
          'Because threads share heap memory, multiple threads modifying the same object can cause race conditions.'
        ]
      },
      {
        id: 'm12-l2',
        title: 'Lesson 12.2 Extending the Thread Class',
        objectives: [
          'Create a thread by extending the Thread class.',
          'Override the run method.',
          'Start thread execution.'
        ],
        theory: 'One way to create a thread is to extend the `java.lang.Thread` class and override its `run()` method. The `run()` method acts as the entry point for the thread, similar to how `main()` is the entry point for an application. However, you must call `start()` to actually spawn the new thread; calling `run()` directly will just execute it synchronously on the current thread.',
        syntax: 'class MyThread extends Thread {\n    public void run() { /* logic */ }\n}\nMyThread t = new MyThread();\nt.start();',
        codeExample: 'class Worker extends Thread {\n    public void run() {\n        System.out.println("Thread running: " + Thread.currentThread().getName());\n    }\n}\n\npublic class ThreadDemo {\n    public static void main(String[] args) {\n        Worker w1 = new Worker();\n        w1.start();\n        System.out.println("Main running: " + Thread.currentThread().getName());\n    }\n}',
        codeOutput: 'Main running: main\nThread running: Thread-0\n// (Note: Output order may vary due to thread scheduling)',
        takeaways: [
          'Never call `run()` directly to start a thread; always call `start()`.',
          'Since Java only supports single inheritance, extending `Thread` means your class cannot extend any other class.'
        ]
      },
      {
        id: 'm12-l3',
        title: 'Lesson 12.3 Implementing Runnable',
        objectives: [
          'Create a thread using the Runnable interface.',
          'Understand why Runnable is preferred.'
        ],
        theory: 'A better and more common way to create a thread is to implement the `java.lang.Runnable` interface and pass its instance to a `Thread` constructor. This is preferred because it frees up your class to extend another superclass if needed. It also logically separates the task (the Runnable) from the worker executing it (the Thread).',
        syntax: 'class MyTask implements Runnable {\n    public void run() { /* logic */ }\n}\nThread t = new Thread(new MyTask());\nt.start();',
        codeExample: 'public class RunnableDemo {\n    public static void main(String[] args) {\n        // Using a Lambda expression for the Runnable\n        Runnable task = () -> {\n            System.out.println("Task executed by: " + Thread.currentThread().getName());\n        };\n        \n        Thread t1 = new Thread(task, "Worker-1");\n        t1.start();\n    }\n}',
        codeOutput: 'Task executed by: Worker-1',
        takeaways: [
          'Implementing `Runnable` is the standard practice in modern Java.',
          '`Runnable` is a functional interface, meaning it can be instantiated elegantly using Lambda expressions.'
        ]
      },
      {
        id: 'm12-l4',
        title: 'Lesson 12.4 Synchronization',
        objectives: [
          'Understand race conditions.',
          'Use the synchronized keyword to protect critical sections.'
        ],
        theory: 'When multiple threads read and write a shared resource simultaneously, a "race condition" occurs, leading to corrupted data. To fix this, Java provides the `synchronized` keyword. It locks a method or a code block so that only one thread can execute it at a time. The next thread must wait until the lock is released.',
        syntax: 'public synchronized void increment() {\n    count++;\n}',
        codeExample: 'class Counter {\n    int count = 0;\n    // synchronized prevents thread interference\n    public synchronized void increment() {\n        count++;\n    }\n}\n\npublic class SyncDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Counter c = new Counter();\n        Runnable task = () -> { for(int i=0; i<1000; i++) c.increment(); };\n        \n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        t1.start(); t2.start();\n        \n        // wait for threads to finish\n        t1.join(); t2.join(); \n        \n        System.out.println("Final count: " + c.count);\n    }\n}',
        codeOutput: 'Final count: 2000',
        takeaways: [
          'Without `synchronized`, the final count in the example above would often be unpredictable (less than 2000).',
          'Overusing synchronization can cause performance bottlenecks or deadlocks.'
        ]
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
        title: 'Lesson 13.1 Functional Interfaces',
        objectives: [
          'Understand Functional Interfaces.',
          'Learn about the @FunctionalInterface annotation.'
        ],
        theory: 'A Functional Interface is an interface that contains exactly one abstract method. They can have multiple default or static methods, but only one abstract one. They are the backbone of Lambda expressions in Java 8. The `java.util.function` package provides dozens of built-in functional interfaces like `Predicate<T>`, `Consumer<T>`, `Supplier<T>`, and `Function<T,R>`.',
        syntax: '@FunctionalInterface\ninterface MathOperation {\n    int operate(int a, int b);\n}',
        codeExample: 'import java.util.function.Predicate;\n\npublic class InterfaceDemo {\n    public static void main(String[] args) {\n        // Predicate takes an argument and returns a boolean\n        Predicate<Integer> isEven = num -> num % 2 == 0;\n        System.out.println("Is 4 even? " + isEven.test(4));\n        System.out.println("Is 7 even? " + isEven.test(7));\n    }\n}',
        codeOutput: 'Is 4 even? true\nIs 7 even? false',
        takeaways: [
          'The `@FunctionalInterface` annotation is optional, but it causes the compiler to throw an error if you accidentally add a second abstract method.',
          'Runnable and Callable are classic examples of legacy Functional Interfaces.'
        ]
      },
      {
        id: 'm13-l2',
        title: 'Lesson 13.2 Lambda Expressions',
        objectives: [
          'Replace anonymous inner classes with Lambdas.',
          'Write concise and readable code.'
        ],
        theory: 'Lambda expressions provide a clear and concise way to represent one method interface using an expression. It allows you to treat functionality as a method argument, or code as data. A lambda expression consists of parameters, an arrow `->`, and a body.',
        syntax: '(parameter_list) -> { body }',
        codeExample: 'import java.util.ArrayList;\nimport java.util.List;\n\npublic class LambdaDemo {\n    public static void main(String[] args) {\n        List<String> names = new ArrayList<>();\n        names.add("Alice"); names.add("Bob"); names.add("Charlie");\n\n        // Old way using Anonymous Inner Class (verbose!)\n        // names.forEach(new Consumer<String>() { public void accept(String s) { ... } });\n\n        // New way using Lambda (clean!)\n        names.forEach(name -> System.out.println("Hello, " + name));\n    }\n}',
        codeOutput: 'Hello, Alice\nHello, Bob\nHello, Charlie',
        takeaways: [
          'If there is only one parameter, the parentheses around the parameter can be omitted: `name -> ...`',
          'If the body contains only one statement, the curly braces and `return` keyword can be omitted.'
        ]
      },
      {
        id: 'm13-l3',
        title: 'Lesson 13.3 Stream API (Intermediate Ops)',
        objectives: [
          'Create data processing pipelines.',
          'Use filter, map, and sorted.'
        ],
        theory: 'The Stream API allows processing of collections (like Lists or Sets) in a declarative way. A Stream is not a data structure; it takes input from a Collection, Array, or I/O channel. Stream operations are divided into Intermediate operations (which transform a stream into another stream and are lazy) and Terminal operations (which produce a result).',
        syntax: 'list.stream().filter(condition).map(transformation)...',
        codeExample: 'import java.util.Arrays;\nimport java.util.List;\n\npublic class StreamIntermediateDemo {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList("apple", "banana", "cherry", "date");\n\n        // filter() and map() are intermediate. \n        // forEach() is terminal.\n        words.stream()\n             .filter(w -> w.length() > 4)    // Keeps apple, banana, cherry\n             .map(String::toUpperCase)       // Transforms to APPLE, BANANA, CHERRY\n             .sorted()                       // Sorts alphabetically\n             .forEach(System.out::println);\n    }\n}',
        codeOutput: 'APPLE\nBANANA\nCHERRY',
        takeaways: [
          'Streams do not modify the underlying collection.',
          'Intermediate operations are "lazy"—they don\'t actually execute until a Terminal operation is invoked.'
        ]
      },
      {
        id: 'm13-l4',
        title: 'Lesson 13.4 Method References',
        objectives: [
          'Simplify Lambdas using Method References.'
        ],
        theory: 'Method references (`::`) are shorthand notations of a lambda expression to call a method. For example, if a lambda expression just calls a method like `s -> System.out.println(s)`, you can replace it with a method reference `System.out::println`.',
        syntax: 'ClassName::methodName',
        codeExample: 'import java.util.Arrays;\nimport java.util.List;\n\npublic class MethodRefDemo {\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(5, 2, 8);\n        \n        // Lambda style:\n        // nums.forEach(n -> System.out.println(n));\n        \n        // Method Reference style:\n        nums.forEach(System.out::println);\n    }\n}',
        codeOutput: '5\n2\n8',
        takeaways: [
          'Method references can refer to static methods, instance methods, or constructors (`ClassName::new`).',
          'They dramatically improve readability by removing parameter boilerplate.'
        ]
      },
      {
        id: 'm13-l5',
        title: 'Lesson 13.5 Optional Class',
        objectives: [
          'Prevent NullPointerException (NPE).',
          'Handle absence of values gracefully.'
        ],
        theory: '`java.util.Optional` is a container object used to represent null with absent value. Instead of returning `null` from a method and risking an NPE when a caller forgets to check for it, you return an `Optional`. This forces the caller to consciously handle the case where the value might be missing.',
        syntax: 'Optional<String> opt = Optional.ofNullable(getValue());',
        codeExample: 'import java.util.Optional;\n\npublic class OptionalDemo {\n    public static void main(String[] args) {\n        String name = null;\n        Optional<String> optName = Optional.ofNullable(name);\n        \n        // Instead of: if(name != null) { ... }\n        // Use ifPresent:\n        optName.ifPresent(n -> System.out.println("Hello " + n));\n        \n        // Provide a default fallback value if null:\n        String safeName = optName.orElse("Guest");\n        System.out.println("Welcome, " + safeName);\n    }\n}',
        codeOutput: 'Welcome, Guest',
        takeaways: [
          '`Optional.of(value)` will throw an exception immediately if the value is null. Use `Optional.ofNullable()` if null is possible.',
          '`orElseThrow()` can be used to elegantly throw a custom exception if the value is missing.'
        ]
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
        title: 'Lesson 14.1 Introduction to JDBC',
        objectives: [
          'Understand JDBC Architecture.',
          'Learn the steps to connect Java to a Database.'
        ],
        theory: 'JDBC (Java Database Connectivity) is an API that allows Java applications to interact with relational databases. It consists of the `java.sql` package which provides classes and interfaces like `DriverManager`, `Connection`, `Statement`, and `ResultSet`. To use JDBC, you must include a database-specific Driver (like MySQL Connector) in your project dependencies.',
        takeaways: [
          'JDBC abstracts away the underlying database language, allowing you to use the same Java code for MySQL, PostgreSQL, or Oracle (provided the SQL dialect matches).',
          'Modern frameworks like Spring Data JPA are built on top of JDBC.'
        ]
      },
      {
        id: 'm14-l2',
        title: 'Lesson 14.2 Establishing a Connection',
        objectives: [
          'Load the database driver.',
          'Connect to a database using DriverManager.'
        ],
        theory: 'The `DriverManager` class acts as the bridge between your code and the database driver. You pass it a connection URL, a username, and a password to establish a session with the database. The URL format is `jdbc:subprotocol:subname` (e.g., `jdbc:mysql://localhost:3306/mydb`).',
        syntax: 'Connection conn = DriverManager.getConnection(url, user, pass);',
        codeExample: 'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class DBConnection {\n    public static void main(String[] args) {\n        String url = "jdbc:mysql://localhost:3306/school";\n        String user = "root";\n        String pass = "password123";\n        \n        try (Connection conn = DriverManager.getConnection(url, user, pass)) {\n            System.out.println("Database connected successfully!");\n        } catch (SQLException e) {\n            System.out.println("Connection failed!");\n            e.printStackTrace();\n        }\n    }\n}',
        codeOutput: 'Database connected successfully!',
        takeaways: [
          'Opening database connections is resource-intensive. Always close them using a `try-with-resources` block.',
          'Before Java 8, developers had to manually load the driver class using `Class.forName()`, but this is now done automatically.'
        ]
      },
      {
        id: 'm14-l3',
        title: 'Lesson 14.3 Statement vs PreparedStatement',
        objectives: [
          'Execute SQL queries.',
          'Understand the danger of SQL Injection.'
        ],
        theory: 'A `Statement` is used to execute static SQL queries. However, if you concatenate strings to build a query, your application becomes vulnerable to SQL Injection attacks. A `PreparedStatement` pre-compiles the SQL query in the database and uses placeholders (`?`) to safely bind variables, making SQL Injection impossible.',
        syntax: 'PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM users WHERE age > ?");\npstmt.setInt(1, 18);',
        codeExample: 'import java.sql.*;\n\npublic class PreparedStatementDemo {\n    public static void main(String[] args) {\n        String url = "jdbc:mysql://localhost:3306/school";\n        String query = "UPDATE students SET grade = ? WHERE id = ?";\n        \n        try (Connection conn = DriverManager.getConnection(url, "root", "password");\n             PreparedStatement pstmt = conn.prepareStatement(query)) {\n            \n            // Set parameters (index is 1-based)\n            pstmt.setString(1, "A+");\n            pstmt.setInt(2, 101);\n            \n            int rowsAffected = pstmt.executeUpdate();\n            System.out.println("Rows updated: " + rowsAffected);\n            \n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n}',
        codeOutput: 'Rows updated: 1',
        takeaways: [
          'Always use `PreparedStatement` over `Statement` when dealing with user input.',
          'Use `executeUpdate()` for INSERT, UPDATE, and DELETE queries, which returns the number of rows affected.',
          'Use `executeQuery()` for SELECT queries, which returns a ResultSet.'
        ]
      },
      {
        id: 'm14-l4',
        title: 'Lesson 14.4 Parsing the ResultSet',
        objectives: [
          'Read data from the database.',
          'Iterate through a ResultSet cursor.'
        ],
        theory: 'When you execute a SELECT query, JDBC returns a `ResultSet` object. It maintains a cursor pointing to its current row of data. Initially, the cursor points before the first row. Calling `next()` moves the cursor to the next row and returns `true` if a row exists, making it perfect for a `while` loop.',
        syntax: 'ResultSet rs = pstmt.executeQuery();\nwhile (rs.next()) { ... }',
        codeExample: 'import java.sql.*;\n\npublic class ResultSetDemo {\n    public static void main(String[] args) {\n        String url = "jdbc:mysql://localhost:3306/school";\n        String query = "SELECT id, name, age FROM students";\n        \n        try (Connection conn = DriverManager.getConnection(url, "root", "password");\n             PreparedStatement pstmt = conn.prepareStatement(query);\n             ResultSet rs = pstmt.executeQuery()) {\n            \n            while (rs.next()) {\n                int id = rs.getInt("id");\n                String name = rs.getString("name");\n                int age = rs.getInt("age");\n                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);\n            }\n            \n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n}',
        codeOutput: 'ID: 101, Name: John Doe, Age: 20\nID: 102, Name: Jane Smith, Age: 22',
        takeaways: [
          'You can extract column data using either column indices (`rs.getInt(1)`) or column names (`rs.getInt("age")`). Column indices are 1-based.',
          'The ResultSet is closed automatically when its parent Statement is closed.'
        ]
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
        title: 'Lesson 15.1 Big O Notation',
        objectives: [
          'Analyze algorithm efficiency.',
          'Understand Time and Space Complexity.'
        ],
        theory: 'Big O notation is used to describe the performance or complexity of an algorithm relative to the input size (N). It represents the worst-case scenario. Common complexities from fastest to slowest: O(1) [Constant Time], O(log N) [Logarithmic], O(N) [Linear], O(N log N) [Linearithmic], O(N^2) [Quadratic].',
        syntax: 'O(1) < O(log N) < O(N) < O(N log N) < O(N^2)',
        takeaways: [
          'A simple for-loop iterating over an array is O(N).',
          'Nested loops (a loop inside a loop) are generally O(N^2) and should be avoided for large datasets.',
          'Space complexity refers to how much extra memory the algorithm needs to allocate.'
        ]
      },
      {
        id: 'm15-l2',
        title: 'Lesson 15.2 Arrays & Linked Lists',
        objectives: [
          'Compare contiguous vs scattered memory.',
          'Understand pros and cons of arrays and linked lists.'
        ],
        theory: 'An Array stores elements in contiguous memory blocks. This allows instant O(1) read access via an index. However, resizing an array or inserting/deleting elements in the middle requires shifting all subsequent elements, taking O(N) time. \n\nA Linked List stores elements in scattered memory nodes. Each node contains data and a pointer to the next node. Inserting or deleting a node only involves updating pointers (O(1) time), but finding the 10th node requires starting from the head and walking 10 steps (O(N) time).',
        codeExample: 'class Node {\n    int data;\n    Node next;\n    \n    public Node(int data) {\n        this.data = data;\n        this.next = null;\n    }\n}\n\npublic class LinkedListDemo {\n    public static void main(String[] args) {\n        Node head = new Node(10);\n        head.next = new Node(20);\n        head.next.next = new Node(30);\n        \n        // Traverse the linked list\n        Node current = head;\n        while(current != null) {\n            System.out.print(current.data + " -> ");\n            current = current.next;\n        }\n        System.out.println("null");\n    }\n}',
        codeOutput: '10 -> 20 -> 30 -> null',
        takeaways: [
          'Use Arrays when read speed is critical.',
          'Use Linked Lists when insert/delete speed is critical, and size is highly volatile.'
        ]
      },
      {
        id: 'm15-l3',
        title: 'Lesson 15.3 Stacks & Queues',
        objectives: [
          'Understand LIFO and FIFO patterns.'
        ],
        theory: 'A Stack is a Last-In-First-Out (LIFO) data structure. Imagine a stack of plates: you can only add or remove the top plate. Primary operations: push (add) and pop (remove). \n\nA Queue is a First-In-First-Out (FIFO) structure, like a line at a grocery store. Primary operations: enqueue (add to back) and dequeue (remove from front).',
        syntax: 'Stack<String> stack = new Stack<>();\nQueue<String> queue = new LinkedList<>();',
        codeExample: 'import java.util.Stack;\nimport java.util.Queue;\nimport java.util.LinkedList;\n\npublic class StackQueueDemo {\n    public static void main(String[] args) {\n        Stack<String> history = new Stack<>();\n        history.push("google.com");\n        history.push("github.com");\n        System.out.println("Back button pressed: Returning to " + history.pop());\n        \n        Queue<String> tasks = new LinkedList<>();\n        tasks.offer("Print Document");\n        tasks.offer("Scan Image");\n        System.out.println("Executing Task: " + tasks.poll());\n    }\n}',
        codeOutput: 'Back button pressed: Returning to github.com\nExecuting Task: Print Document',
        takeaways: [
          'Stacks are extensively used in recursive function calls (the Call Stack) and Undo features.',
          'Queues are used in task schedulers and Breadth-First-Search (BFS) algorithms.'
        ]
      },
      {
        id: 'm15-l4',
        title: 'Lesson 15.4 Trees & Graphs',
        objectives: [
          'Understand hierarchical and networked data.'
        ],
        theory: 'A Tree is a hierarchical structure with a root node and child nodes. A Binary Search Tree (BST) ensures the left child is smaller than the parent, and the right is larger, enabling rapid O(log N) searches. \n\nA Graph is a network of vertices (nodes) connected by edges. Trees are just a restricted type of graph with no cycles.',
        takeaways: [
          'DFS (Depth-First Search) explores as far down a branch as possible before backtracking. It is implemented using a Stack (or recursion).',
          'BFS (Breadth-First Search) explores all neighbors at the current depth before moving deeper. It is implemented using a Queue.'
        ]
      },
      {
        id: 'm15-l5',
        title: 'Lesson 15.5 Searching & Sorting Algorithms',
        objectives: [
          'Compare Linear vs Binary Search.',
          'Compare common sorting algorithms.'
        ],
        theory: 'Linear Search checks every element sequentially (O(N)). Binary Search requires the array to be sorted first, and continually splits the array in half to find the target, achieving O(log N) time.\n\nBubble Sort and Insertion Sort run in O(N^2) time, making them inefficient. Merge Sort uses divide-and-conquer to sort in O(N log N) time consistently. Quick Sort also runs in O(N log N) and is often the fastest in practice due to lower memory overhead.',
        codeExample: 'import java.util.Arrays;\n\npublic class BinarySearchDemo {\n    public static void main(String[] args) {\n        int[] arr = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};\n        // Arrays.binarySearch returns the index of the element, or a negative value if not found\n        int target = 23;\n        int index = Arrays.binarySearch(arr, target);\n        System.out.println("Found " + target + " at index: " + index);\n    }\n}',
        codeOutput: 'Found 23 at index: 5',
        takeaways: [
          '`Arrays.sort()` uses a Dual-Pivot Quicksort for primitives and TimSort (a hybrid of Merge and Insertion sort) for Objects.'
        ]
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
        title: 'Lesson 16.1 What is Spring Boot?',
        objectives: [
          'Understand the Spring ecosystem.',
          'Learn the benefits of Spring Boot over vanilla Spring.'
        ],
        theory: 'The Spring Framework is an open-source enterprise Java framework that provides comprehensive infrastructure support. Before Spring Boot, configuring a Spring application required massive amounts of XML files and manual server deployments. Spring Boot revolutionizes this by providing Auto-Configuration (it configures beans based on the libraries in your classpath) and an Embedded Web Server (like Tomcat). You can run a full enterprise web app with a simple `public static void main` method.',
        takeaways: [
          'Spring Boot is highly opinionated, meaning it makes default choices for you to get you started quickly.',
          'Use Spring Initializr (start.spring.io) to generate the boilerplate code and pom.xml dependencies.'
        ]
      },
      {
        id: 'm16-l2',
        title: 'Lesson 16.2 Inversion of Control & Dependency Injection',
        objectives: [
          'Understand IoC (Inversion of Control).',
          'Use @Autowired to inject dependencies.'
        ],
        theory: 'In traditional programming, objects create their own dependencies (e.g., `Database db = new Database()`). In Spring, this control is "inverted". The Spring IoC Container creates all objects (called Beans) at startup, manages their lifecycles, and injects them wherever needed using Dependency Injection (DI). This makes components loosely coupled and vastly easier to test.',
        syntax: '@Service\npublic class EmailService { }\n\n@RestController\npublic class UserController {\n    @Autowired\n    private EmailService emailService; // Spring injects this automatically!\n}',
        takeaways: [
          '`@Autowired` tells Spring to find a matching Bean in its container and wire it into the variable.',
          'Constructor injection is currently preferred over field injection for better testability.'
        ]
      },
      {
        id: 'm16-l3',
        title: 'Lesson 16.3 Creating a REST Controller',
        objectives: [
          'Build RESTful endpoints.',
          'Handle HTTP GET, POST, PUT, DELETE.'
        ],
        theory: 'A REST API allows clients (like a React frontend or mobile app) to communicate with your backend over HTTP. In Spring Boot, you annotate a class with `@RestController` to tell Spring this class handles HTTP requests. You map specific URLs and HTTP methods using annotations like `@GetMapping`, `@PostMapping`, `@PathVariable`, and `@RequestBody`.',
        codeExample: 'import org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n\n    // Handles GET /api/users/123\n    @GetMapping("/{id}")\n    public String getUserById(@PathVariable String id) {\n        return "Returning user with ID: " + id;\n    }\n\n    // Handles POST /api/users\n    @PostMapping\n    public String createUser(@RequestBody String userData) {\n        return "User created with data: " + userData;\n    }\n}',
        codeOutput: '// Making a GET request to http://localhost:8080/api/users/123 returns:\n"Returning user with ID: 123"',
        takeaways: [
          '`@RestController` automatically serializes returned Java objects into JSON using the Jackson library.',
          '`@RequestBody` parses the incoming JSON payload from the client into a Java object.'
        ]
      },
      {
        id: 'm16-l4',
        title: 'Lesson 16.4 Application Architecture (3-Tier)',
        objectives: [
          'Understand the standard layered architecture of Spring applications.'
        ],
        theory: 'Enterprise applications follow a strict 3-tier architecture to maintain separation of concerns:\n1. **Controller Layer (`@RestController`)**: Handles HTTP requests, validates input, and delegates work to the Service layer.\n2. **Service Layer (`@Service`)**: Contains the core business logic, calculations, and rules. It calls the Repository layer for data.\n3. **Repository / Data Layer (`@Repository`)**: Interacts with the database, performing CRUD operations.',
        takeaways: [
          'A Controller should never contain business logic or SQL queries.',
          'By separating these layers, you can swap out the database or the web interface without breaking the business logic.'
        ]
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
        title: 'Lesson 17.1 Database Integration & Properties',
        objectives: [
          'Connect Spring Boot to a PostgreSQL/MySQL database.',
          'Configure application.properties.'
        ],
        theory: 'To connect a database to Spring Boot, you need the database driver dependency and the Spring Data JPA dependency in your `pom.xml`. Then, you provide the connection URL, username, and password in the `src/main/resources/application.properties` file. Spring Boot\'s auto-configuration will automatically detect these and create a DataSource bean for you.',
        syntax: 'spring.datasource.url=jdbc:postgresql://localhost:5432/mydb\nspring.datasource.username=postgres\nspring.datasource.password=secret',
        takeaways: [
          'Setting `spring.jpa.hibernate.ddl-auto=update` tells Hibernate to automatically generate or update the SQL tables to match your Java code.',
          'Never commit database passwords into version control! Always use environment variables in production.'
        ]
      },
      {
        id: 'm17-l2',
        title: 'Lesson 17.2 Entity Mapping (@Entity)',
        objectives: [
          'Map Java Objects to SQL Tables using Hibernate/JPA.'
        ],
        theory: 'In JPA (Java Persistence API), an Entity is a lightweight Java class whose state is persisted to a table in a relational database. You map a class to a table using the `@Entity` annotation. Every entity must have a primary key, denoted by `@Id`, and it usually auto-increments using `@GeneratedValue`.',
        codeExample: 'import jakarta.persistence.*;\n\n@Entity\n@Table(name = "users")\npublic class User {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false, length = 100)\n    private String name;\n\n    @Column(unique = true)\n    private String email;\n\n    // Empty constructor required by JPA\n    public User() {}\n\n    // Getters and Setters...\n}',
        takeaways: [
          'Class names automatically map to table names, and fields map to columns. You can override this with `@Table` and `@Column`.',
          'JPA requires every Entity class to have a no-argument constructor.'
        ]
      },
      {
        id: 'm17-l3',
        title: 'Lesson 17.3 Spring Data JPA Repositories',
        objectives: [
          'Perform CRUD operations without writing SQL.',
          'Extend JpaRepository.'
        ],
        theory: 'Spring Data JPA drastically reduces the amount of boilerplate code required to access databases. Instead of writing SQL queries, you simply declare an interface that extends `JpaRepository<EntityClass, ID_Type>`. Spring automatically generates the implementation class at runtime, giving you methods like `save()`, `findAll()`, `findById()`, and `deleteById()`.',
        syntax: 'public interface UserRepository extends JpaRepository<User, Long> {\n    // Custom query methods can be derived from method names!\n    Optional<User> findByEmail(String email);\n}',
        takeaways: [
          'You can write custom JPQL queries using the `@Query` annotation if method naming conventions are not enough.',
          'Repositories are automatically detected and instantiated as Spring Beans.'
        ]
      },
      {
        id: 'm17-l4',
        title: 'Lesson 17.4 Building the CRUD API',
        objectives: [
          'Wire the Controller, Service, and Repository layers together.'
        ],
        theory: 'A complete REST CRUD API involves a Controller receiving the JSON request, passing it to a Service for business logic, and the Service passing it to a Repository to save in the database.',
        codeExample: '@RestController\n@RequestMapping("/users")\npublic class UserController {\n\n    @Autowired\n    private UserRepository repo;\n\n    @PostMapping\n    public User createUser(@RequestBody User user) {\n        // Save to database instantly!\n        return repo.save(user);\n    }\n\n    @GetMapping\n    public List<User> getAllUsers() {\n        return repo.findAll();\n    }\n}',
        takeaways: [
          '`repo.save(user)` handles both INSERT and UPDATE depending on whether the primary key (ID) is present and exists.',
          'In production code, the Controller should call a Service layer instead of injecting the Repository directly.'
        ]
      },
      {
        id: 'm17-l5',
        title: 'Lesson 17.5 Data Validation & Exception Handling',
        objectives: [
          'Validate JSON payloads.',
          'Handle errors cleanly using @RestControllerAdvice.'
        ],
        theory: 'When accepting data from clients, you must validate it. Use annotations like `@NotBlank`, `@Email`, and `@Size` from the `spring-boot-starter-validation` dependency. To enforce validation in the controller, prefix the `@RequestBody` with `@Valid`. If validation fails, you can catch the error globally using `@RestControllerAdvice`.',
        syntax: '@PostMapping\npublic User create(@Valid @RequestBody User user) { ... }',
        takeaways: [
          '`@RestControllerAdvice` classes act as global interceptors for exceptions thrown anywhere in your application, allowing you to return clean JSON error messages instead of raw Java stack traces.'
        ]
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
        title: 'Lesson 18.1 Authentication vs Authorization',
        objectives: [
          'Differentiate between Authentication and Authorization.'
        ],
        theory: 'Security in web applications is split into two phases. Authentication is verifying WHO a user is (e.g., verifying their email and password during login). Authorization is verifying WHAT a user is allowed to do (e.g., verifying if the logged-in user is an "ADMIN" before they can delete a record).',
        takeaways: [
          'Spring Security handles both paradigms gracefully through customizable Filter Chains.'
        ]
      },
      {
        id: 'm18-l2',
        title: 'Lesson 18.2 Password Hashing (BCrypt)',
        objectives: [
          'Securely hash passwords.',
          'Understand salt and rainbow tables.'
        ],
        theory: 'Storing plain-text passwords in a database is a massive security vulnerability. Passwords must be hashed (a one-way mathematical function). Spring Security provides `BCryptPasswordEncoder`, which automatically applies a random "salt" to every password before hashing it. This ensures that even if two users have the password "password123", their database hashes will look completely different, neutralizing rainbow table attacks.',
        codeExample: 'import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\n\npublic class PasswordDemo {\n    public static void main(String[] args) {\n        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();\n        \n        String rawPassword = "mySecretPassword!";\n        String encoded = encoder.encode(rawPassword);\n        \n        System.out.println("Hashed: " + encoded);\n        System.out.println("Matches? " + encoder.matches(rawPassword, encoded));\n    }\n}',
        codeOutput: 'Hashed: $2a$10$wT8qE9Xh5Qe1YgZ.w.e3... \nMatches? true',
        takeaways: [
          'Hashing is one-way. You cannot "decrypt" a BCrypt hash. You verify logins by hashing the incoming password attempt and comparing the hashes.'
        ]
      },
      {
        id: 'm18-l3',
        title: 'Lesson 18.3 JSON Web Tokens (JWT)',
        objectives: [
          'Implement stateless authentication.',
          'Understand JWT structure.'
        ],
        theory: 'In traditional web apps, the server remembers logged-in users via server-side "Sessions". In modern REST APIs, servers are "Stateless" (they remember nothing). Instead, upon successful login, the server issues a JSON Web Token (JWT) to the client. The client sends this token in the `Authorization` header of every subsequent request. The token contains a payload (like the user\'s ID and Roles) and is cryptographically signed by the server so it cannot be tampered with.',
        syntax: 'Authorization: Bearer <your_jwt_token_here>',
        takeaways: [
          'JWTs consist of three parts: Header, Payload, and Signature, separated by dots (.).',
          'Because the server doesn\'t store session data, JWTs make horizontal scaling of backend servers incredibly easy.'
        ]
      },
      {
        id: 'm18-l4',
        title: 'Lesson 18.4 Configuring Spring Security',
        objectives: [
          'Secure endpoints using SecurityFilterChain.',
          'Disable CSRF and configure CORS.'
        ],
        theory: 'To configure Spring Security, you create a configuration class annotated with `@EnableWebSecurity` and define a `SecurityFilterChain` bean. Here, you disable CSRF (Cross-Site Request Forgery) protection, which is unnecessary for stateless JWT APIs, define which endpoints are public (like `/api/login`), and which require authentication.',
        codeExample: 'import org.springframework.context.annotation.Bean;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(csrf -> csrf.disable()) // Disable CSRF for REST APIs\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers("/api/auth/**").permitAll() // Allow logins\n                .requestMatchers("/api/admin/**").hasRole("ADMIN") // Role-based access\n                .anyRequest().authenticated() // Everything else requires a JWT\n            );\n        return http.build();\n    }\n}',
        takeaways: [
          'By default, Spring Security locks down EVERY endpoint and redirects unauthenticated users to a generated login HTML page. Disabling this default behavior is step 1 for building REST APIs.'
        ]
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
        title: 'Lesson 19.1 Building Executable JARs',
        objectives: [
          'Compile a Spring Boot application for production.'
        ],
        theory: 'Unlike older Java web applications that compiled into WAR files and required deployment to external Tomcat servers, Spring Boot applications contain Tomcat embedded directly inside them. When you run `mvn clean package`, Maven compiles your code, downloads dependencies, runs your tests, and packages everything into a single, fat, executable JAR (Java ARchive) file located in the `target/` directory.',
        syntax: 'mvn clean package\njava -jar target/myapp-1.0.jar',
        takeaways: [
          'The "clean" phase deletes the old `target/` directory before building, ensuring a fresh compilation.',
          'You only need the Java Runtime Environment (JRE) installed on the production server to run this JAR.'
        ]
      },
      {
        id: 'm19-l2',
        title: 'Lesson 19.2 Environment Variables & Profiles',
        objectives: [
          'Manage configurations across dev, staging, and prod.'
        ],
        theory: 'Hardcoding production database URLs or JWT secret keys into `application.properties` is a massive security risk and makes switching environments difficult. Instead, you should inject these values using Environment Variables. Spring Boot seamlessly substitutes variables formatted as `${VARIABLE_NAME}` at runtime.',
        syntax: 'spring.datasource.url=${DB_URL}\nspring.datasource.password=${DB_PASSWORD}',
        takeaways: [
          'Spring Profiles (e.g., `application-dev.properties` vs `application-prod.properties`) allow you to maintain distinct configurations for different deployment stages.'
        ]
      },
      {
        id: 'm19-l3',
        title: 'Lesson 19.3 Dockerizing Spring Boot',
        objectives: [
          'Containerize your application.',
          'Write a Dockerfile.'
        ],
        theory: 'Docker solves the "It works on my machine" problem by packaging your JAR file alongside an isolated Linux filesystem and specific JDK version into an immutable Image. This Image can then be spun up as a Container on any machine in the world, guaranteeing identical behavior.',
        codeExample: '# Use a lightweight Alpine Linux image with JDK 17\nFROM eclipse-temurin:17-jdk-alpine\n\n# Expose port 8080\nEXPOSE 8080\n\n# Copy the built JAR from the target folder to the container\nCOPY target/*.jar app.jar\n\n# Command to run when the container starts\nENTRYPOINT ["java","-jar","/app.jar"]',
        takeaways: [
          'Build the image using `docker build -t my-spring-app .`',
          'Run the image using `docker run -p 8080:8080 my-spring-app`'
        ]
      },
      {
        id: 'm19-l4',
        title: 'Lesson 19.4 Cloud Deployment Strategies',
        objectives: [
          'Understand PAAS vs IAAS deployments.'
        ],
        theory: 'There are two main ways to deploy your Spring Boot Docker container to the cloud:\n\n1. **IaaS (Infrastructure as a Service)**: E.g., AWS EC2 or DigitalOcean Droplets. You rent a virtual server, SSH into it, install Java/Docker manually, and run your app. Maximum control, but requires manual maintenance.\n2. **PaaS (Platform as a Service)**: E.g., Render, Heroku, or AWS Elastic Beanstalk. You simply connect your GitHub repository to the platform. It automatically detects your Dockerfile, builds the image, provisions the servers, sets up SSL certificates, and handles load balancing. Less control, but zero maintenance.',
        takeaways: [
          'For modern startups and solo developers, PaaS platforms like Render or Railway are the preferred deployment method due to their CI/CD automation.'
        ]
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
