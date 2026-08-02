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

export const GOLANG_COURSE_DATA: Record<string, ModuleData> = {
  m1: {
    id: 'm1',
    title: 'MODULE 1: INTRODUCTION TO GOLANG',
    overview: 'Learn history, architecture design, and system setups to run your first Go app.',
    outcomes: ['Understand Go design decisions', 'Install Go locally and write Hello World'],
    lessons: [
      { id: 'm1-l1', title: 'Lesson 1.1 Welcome to Golang', objectives: ['Understand Go course pathways'], theory: 'Go is an open-source programming language developed by Google. It is statically typed, compiled, and designed to support highly concurrent cloud applications. Go solves scaling issues encountered by systems compiled on older infrastructure. Go\'s scheduler allocates threads across processors dynamically, matching maximum thread availability.', takeaways: ['Go is a modern compiled language.', 'It executes close to bare metal speeds while retaining clean structural syntax.'] },
      { id: 'm1-l2', title: 'Lesson 1.2 What is Go?', objectives: ['Identify Go capabilities'], theory: 'Go (often referred to as Golang) is clean and garbage-collected. It lacks traditional classes or object-oriented inheritance constructs. Instead, it relies on implicit interface implementation and structures composition. The syntax was heavily inspired by C, but drastically simplified to reduce syntax cognitive load.', takeaways: ['Go is statically typed.', 'Built-in garbage collection manages memory heap allocations.'] },
      { id: 'm1-l3', title: 'Lesson 1.3 History of Go', objectives: ['Identify creators'], theory: 'Go was designed in 2007 at Google by veteran software innovators: Robert Griesemer, Rob Pike, and Ken Thompson (creator of B, UNIX, and UTF-8). It was open-sourced in November 2009. The language was born out of frustration with C++ compile speeds and complex system dependencies within Google\'s massive monorepo structures.', takeaways: ['Designed by pioneers of computer systems.', 'Open-sourced in 2009.'] },
      { id: 'm1-l4', title: 'Lesson 1.4 Why Learn Go?', objectives: ['Value of Go'], theory: 'Go powers modern container orchestration and network platforms, including Docker, Kubernetes, Terraform, Prometheus, and Hugo. It compiles directly to native machine code with zero virtual machine requirements (unlike Java or Node). Large technology teams prefer Go due to its rapid build times and simple syntax.', takeaways: ['Go is the language of cloud and DevOps infrastructure.', 'Backend engineers with Go expertise command high market demand.'] },
      { id: 'm1-l5', title: 'Lesson 1.5 Features of Go', objectives: ['Core characteristics'], theory: 'Go\'s core features include structural typing, simple dependency resolution, fast compile times, standard formatting tools (gofmt), garbage collection, and native concurrency primitives (goroutines and channels). It avoids syntax clutter like classes, inheritance, exceptions, or implicit castings.', takeaways: ['Goroutines are concurrent threads that execute concurrently with minimal stack footprint.', 'Implicit interfaces encourage highly modular code layouts.'] },
      { id: 'm1-l6', title: 'Lesson 1.6 Installing Go', objectives: ['Local installer config'], theory: 'Navigate to go.dev/dl and select the package wrapper matching your operating system (msi for Windows, pkg for macOS, or tar.gz for Linux). Once the installer finishes execution, open a shell session and verify the path mapping by entering the version check command:\n\n$ go version\n\nEnsure that the environment variables GOPATH and GOROOT are correctly registered in your system profile settings.', takeaways: ['Configure GOPATH to point to your workspace root.', 'Verify setups with the command: go version'] },
      { id: 'm1-l7', title: 'Lesson 1.7 Setting Up VS Code', objectives: ['Editor workspace'], theory: 'Download Visual Studio Code and navigate to the Extensions marketplace tab (Cmd+Shift+X). Search for "Go" and install the official package maintained by the Go Team at Google. It enables the gopls language server which handles syntax highlighting, lint analysis, and formatting automatically upon file saves.', takeaways: ['VS Code uses gopls to deliver code intelligence.', 'Always format using gofmt standards.'] },
      { id: 'm1-l8', title: 'Lesson 1.8 Your First Go Program', objectives: ['Run Hello World'], theory: 'To create your first Go application, save a file named main.go. The first line must define the package name. To build an executable rather than a library, name the entry package main. Import the formatting package "fmt" to output strings to stdout. Write the main entry function main(). To run the code without manual compilation steps, trigger the execution command:\n\n$ go run main.go\n\nTo build a standalone executable file, run "go build main.go" instead.', syntax: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
    fmt.Println("Welcome to Golang Engineering Mastery.")
}`, takeaways: ['Every executable Go program starts inside package main.', 'Execute files directly with: go run <filename>'] }
    ],
    quiz: [
      { id: 1, question: 'Which command compiles and runs a Go file directly?', options: ['go run', 'go build', 'go start', 'go exec'], correctAnswer: 'go run' }
    ],
    assignment: { prompts: ['Modify Hello World to print your name and current local time.'] }
  },
  m2: {
    id: 'm2',
    title: 'MODULE 2: GO FUNDAMENTALS',
    overview: 'Learn primitives, types declarations, operators and formatting outputs.',
    outcomes: ['Understand variable scopes', 'Format custom Console strings'],
    lessons: [
      { id: 'm2-l1', title: 'Lesson 2.1 Program Structure', objectives: ['Understand packages layout'], theory: 'Every Go source file follows a strict compilation layout: first, the package declaration defines which package this file belongs to. If this is an executable program, the package must be named main. Following the package declaration is the import block, where you specify external or standard library packages your file depends on. Standard Go formatting rules dictate grouping imports inside parentheses. The compiler is extremely strict: importing a package without using it is treated as a compile-time error. Finally, you write package-level variables, structure definitions, interfaces, and function components. All executable entry files must contain a main() function.', syntax: `package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Println("Pi value is:", math.Pi)
}`, takeaways: ['Unused package imports cause compile failures in Go.', 'Package header statements are required at the top of every file.', 'Only package main compiles into a runnable standalone binary.'] },
      { id: 'm2-l2', title: 'Lesson 2.2 Variables', objectives: ['Var declarations'], theory: 'Go offers multiple ways to declare variables. The standard declaration uses the var keyword, followed by the variable name and type (e.g. var age int). If you provide an initial value, you can omit the type, and the compiler will infer it. Inside functions, you can use the short variable declaration operator (:=) to define and initialize variables without using the var keyword. If a variable is declared without an initial value, Go automatically assigns it a default zero-value (0 for numbers, false for booleans, and empty string "" for strings).', syntax: `package main
import "fmt"

func main() {
    var age int = 25
    name := "Suhani"
    var score float64
    fmt.Printf("%s is %d. Default score is %f\n", name, age, score)
}`, takeaways: [':= short variable declarations are only valid inside function blocks.', 'Variables declared without values initialize to their respective type zero-values.', 'Short declarations cannot be used to redefine already declared variables in the same block scope.'] },
      { id: 'm2-l3', title: 'Lesson 2.3 Constants', objectives: ['Immutable variables'], theory: 'Constants are declared using the const keyword and represent values that are fixed at compile time. This means they cannot be changed during runtime execution. Constants can be typed or untyped. Untyped constants have no fixed limits or sizes and act as highly precise literal values until assigned or coerced into a variable type.', syntax: `package main
import "fmt"

const Pi = 3.1415926535
const SystemName string = "Knovate Backend"

func main() {
    fmt.Println(SystemName, Pi)
}`, takeaways: ['Constants cannot be reassigned after declaration.', 'Constants must be evaluated at compile time.', 'Constants can be untyped literals which carry high precision.'] },
      { id: 'm2-l4', title: 'Lesson 2.4 Data Types', objectives: ['Primitives mapping'], theory: 'Go provides a rich set of built-in primitive types. Numeric types include signed integers (int8, int16, int32, int64, and the platform-dependent int) and unsigned integers (uint8, uint16, uint32, uint64, uint). Floating-point values are represented by float32 and float64. Booleans use the bool type. Strings are immutable sequences of bytes. Go also defines rune (an alias for int32 representing a single Unicode code point) and byte (an alias for uint8).', syntax: `var active bool = true
var character rune = 'A'
var data byte = 255
var message string = "Welcome to Go Programming"`, takeaways: ['Strong typing prevents implicit variable conversion.', 'Runes allow processing of multi-byte Unicode characters.', 'A byte is an alias for uint8, while a rune is an alias for int32.'] },
      { id: 'm2-l5', title: 'Lesson 2.5 Type Conversion', objectives: ['Explicit casting'], theory: 'Go is a strongly-typed language and does not perform implicit type casting or conversion between differing types. For example, you cannot add an int and a float64 directly. You must explicitly convert one type to match the other using the conversion syntax: TargetType(value). Attempting implicit operations will cause the compiler to fail immediately.', syntax: `package main
import "fmt"

func main() {
    var intVal int = 100
    var floatVal float64 = 42.5
    result := float64(intVal) + floatVal
    fmt.Println("Result of conversion:", result)
}`, takeaways: ['All numeric type assignments must be cast explicitly.', 'No implicit conversions exist in Go.', 'Incorrect conversions (e.g. converting a large int to int8) can result in data truncation.'] },
      { id: 'm2-l6', title: 'Lesson 2.6 Operators', objectives: ['Basic arithmetic'], theory: 'Go supports standard arithmetic operators (+, -, *, /, %), relational comparison operators (==, !=, <, >, <=, >=), and logical operators (&&, ||, !). Go does not support operator overloading. This design decision was made to keep the code simple, readable, and predictable during debugging sessions.', syntax: `package main
import "fmt"

func main() {
    isEqual := (10 == 10) && (5 > 2)
    fmt.Println("Is relationship true?:", isEqual)
}`, takeaways: ['Relational operations return boolean values.', 'Operator overloading is not supported.', 'Division on integer types performs truncation automatically (e.g. 5/2 is 2).'] },
      { id: 'm2-l7', title: 'Lesson 2.7 User Input', objectives: ['Read standard inputs'], theory: 'To read user inputs from standard input streams (such as terminal consoles), use functions from the fmt package like Scan(), Scanf(), or Scanln(). These functions accept pointer addresses to variables using the address-of operator (&) so that the entered values can be written directly to the memory address of the variables.', syntax: `package main
import "fmt"

func main() {
    var name string
    fmt.Print("Enter your name: ")
    fmt.Scanln(&name)
    fmt.Println("Hi", name)
}`, takeaways: ['Pass arguments by pointer address using & to store scan values.', 'Use Scanln to read inputs up to a newline character.', 'Scan functions return the number of items successfully scanned and any scanning errors.'] },
      { id: 'm2-l8', title: 'Lesson 2.8 Output Formatting', objectives: ['Format string template'], theory: 'Use fmt.Printf() to print highly customized, formatted strings. Printf uses formatting verbs to specify how values should be outputted: %s for strings, %d for decimal integers, %f for floating-point decimals, %t for booleans, %v for default format values, and %T to print the data type of the variable.', syntax: `package main
import "fmt"

func main() {
    name := "Suhani"
    fmt.Printf("Type of variable: %T, Value: %s\n", name, name)
}`, takeaways: ['Use %T to audit the underlying data types of variables.', '%v prints default value formats.', 'Always append a newline character (\\n) when using Printf.'] }
    ],
    quiz: [
      { id: 1, question: 'Which format verb prints a variable type in fmt.Printf?', options: ['%T', '%v', '%s', '%d'], correctAnswer: '%T' }
    ],
    assignment: { prompts: ['Write a program taking user name and age, printing a formatted profile.'] }
  },
  m3: {
    id: 'm3',
    title: 'MODULE 3: CONTROL FLOW',
    overview: 'Learn conditions, loop constructs, switch assertions, and labels.',
    outcomes: ['Write conditional logic blocks', 'Iterate tasks using for loops'],
    lessons: [
      { id: 'm3-l1', title: 'Lesson 3.1 if Statement', objectives: ['Check basic conditionals'], theory: 'Go\'s if conditional does not require surrounding parentheses. However, brackets {} are strictly mandatory. You can also execute a short initialization statement before evaluating the conditional expression.', syntax: `package main
import "fmt"

func main() {
    if num := 9; num < 0 {
        fmt.Println(num, "is negative")
    } else if num < 10 {
        fmt.Println(num, "is a single digit")
    }
}`, takeaways: ['Parentheses are omitted around the conditional expression.', 'Short initialization statements limit variable scope to the block.'] },
      { id: 'm3-l2', title: 'Lesson 3.2 if-else Statement', objectives: ['Alternative logic paths'], theory: 'The else block must begin on the same line as the closing bracket of the if statement. Putting it on the next line will cause a syntax compilation error.', syntax: `if val > 5 {
    // block
} else {
    // block
}`, takeaways: ['Syntax styling rules require the else keyword to sit on the same line as the closing bracket.'] },
      { id: 'm3-l3', title: 'Lesson 3.3 Switch Statement', objectives: ['Multi-case checks'], theory: 'Go switch statements execute the matching case and break automatically. No break statements are needed. To cascade execution to the next case, use the fallthrough keyword.', syntax: `package main
import "fmt"

func main() {
    os := "linux"
    switch os {
    case "darwin":
        fmt.Println("OS X.")
    case "linux":
        fmt.Println("Linux.")
    default:
        fmt.Println("Other.")
    }
}`, takeaways: ['Cases break automatically by default.', 'Use fallthrough explicitly to cascade down cases.'] },
      { id: 'm3-l4', title: 'Lesson 3.4 for Loop', objectives: ['Loop constructs'], theory: 'For is the only looping keyword in Go. It can act as a standard three-part loop, a conditional loop (while loop), or an infinite loop.', syntax: `package main
import "fmt"

func main() {
    // Standard Loop
    for i := 0; i < 3; i++ {
        fmt.Println(i)
    }
    // While-like Loop
    count := 1
    for count < 3 {
        count++
    }
    // Infinite loop: for {}
}`, takeaways: ['Go contains only the for loop keyword.', 'Infinite loops are constructed with: for {}'] },
      { id: 'm3-l5', title: 'Lesson 3.5 break & continue', objectives: ['Loop controls'], theory: 'Use break to exit the loop immediately, and continue to skip the remaining code and start the next iteration.', syntax: `for i := 0; i < 10; i++ {
    if i%2 == 0 {
        continue
    }
    if i > 5 {
        break
    }
    fmt.Println(i)
}`, takeaways: ['Break terminates execution loops.', 'Continue skips to the next iteration.'] },
      { id: 'm3-l6', title: 'Lesson 3.6 Labels', objectives: ['Jump blocks execution'], theory: 'Labels allow nested loops to break or continue to an outer loop container. You define a label with an uppercase name followed by a colon.', syntax: `package main
import "fmt"

func main() {
OuterLoop:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if i == 1 && j == 1 {
                break OuterLoop
            }
            fmt.Printf("i:%d, j:%d\\n", i, j)
        }
    }
}`, takeaways: ['Labels are capital identifiers followed by colons.', 'Enables nested execution escapes.'] }
    ],
    quiz: [
      { id: 1, question: 'What is the only looping keyword in Go?', options: ['for', 'while', 'do', 'each'], correctAnswer: 'for' }
    ],
    assignment: { prompts: ['Build a FizzBuzz program using a for loop and conditional checks.'] }
  },
  m4: {
    id: 'm4',
    title: 'MODULE 4: FUNCTIONS',
    overview: 'Learn parameters, multiple return values, named returns, closures and anonymous wrappers.',
    outcomes: ['Construct reusable routines', 'Pass and execute functions as parameters'],
    lessons: [
      { id: 'm4-l1', title: 'Lesson 4.1 Functions', objectives: ['Define functions'], theory: 'Functions are declared using the func keyword. They can accept parameter parameters and return parameter lists. Multiple parameters of the same type can share a single type declaration.', syntax: `package main
import "fmt"

func add(x int, y int) int {
    return x + y
}

func main() {
    fmt.Println(add(42, 13))
}`, takeaways: ['Functions are defined with the func keyword.', 'Param types sit after parameter names.'] },
      { id: 'm4-l2', title: 'Lesson 4.2 Parameters', objectives: ['Function inputs'], theory: 'Go passes arguments by value by default. This means the function gets a copy of the argument. To mutate the original variable, you must pass a pointer address using the & operator.', syntax: `package main
import "fmt"

func updateVal(val *int) {
    *val = 99
}

func main() {
    n := 10
    updateVal(&n)
    fmt.Println(n) // 99
}`, takeaways: ['Parameters are passed by value by default.', 'Pass pointers to modify the caller\'s variables.'] },
      { id: 'm4-l3', title: 'Lesson 4.3 Multiple Return Values', objectives: ['Return tuples'], theory: 'Go functions can return multiple values. This is widely used in Go to return a result alongside an error code.', syntax: `package main
import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

func main() {
    res, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", res)
    }
}`, takeaways: ['Functions support tuple returns.', 'Unused values must be ignored with the blank identifier (_).'] },
      { id: 'm4-l4', title: 'Lesson 4.4 Named Return Values', objectives: ['Define return variables'], theory: 'Go allows you to name your return variables in the function signature. They are treated as variables defined at the top of the function. Running a naked return statement will automatically return these variables.', syntax: `package main
import "fmt"

func getSplit(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return
}

func main() {
    fmt.Println(getSplit(17))
}`, takeaways: ['Named returns initialize return variables automatically.', 'Naked returns can make long functions harder to read.'] },
      { id: 'm4-l5', title: 'Lesson 4.5 Variadic Functions', objectives: ['Varying input size'], theory: 'Variadic functions accept any number of trailing arguments. Declare them using the ... ellipsis prefix before the parameter type. Inside the function, the variadic parameter behaves like a slice.', syntax: `package main
import "fmt"

func sumAll(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

func main() {
    fmt.Println(sumAll(1, 2, 3, 4))
}`, takeaways: ['Variadic parameters are defined with the ... prefix.', 'The variadic parameter behaves as a slice inside the function.'] },
      { id: 'm4-l6', title: 'Lesson 4.6 Anonymous Functions', objectives: ['Inline routines'], theory: 'Anonymous functions are functions declared without a name. They can be defined inline and executed immediately using trailing parentheses, or assigned to variables to be executed later.', syntax: `package main
import "fmt"

func main() {
    func(msg string) {
        fmt.Println(msg)
    }("Execute anonymous func")
}`, takeaways: ['Anonymous functions are declared without identifiers.', 'Can be invoked inline or stored inside variables.'] },
      { id: 'm4-l7', title: 'Lesson 4.7 Closures', objectives: ['Stateful functions'], theory: 'Closures are anonymous functions that reference variables from outside their immediate scope. The function "closes over" and binds these variables, preserving their state between calls.', syntax: `package main
import "fmt"

func seqGenerator() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}

func main() {
    next := seqGenerator()
    fmt.Println(next()) // 1
    fmt.Println(next()) // 2
}`, takeaways: ['Closures capture scope variables.', 'State is preserved between function calls.'] },
      { id: 'm4-l8', title: 'Lesson 4.8 Recursion', objectives: ['Self invoking functions'], theory: 'Recursion is when a function calls itself to break down a problem. A recursive function must define a base case to stop execution and prevent stack overflow errors.', syntax: `package main
import "fmt"

func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n-1)
}

func main() {
    fmt.Println(factorial(5))
}`, takeaways: ['Recursive functions call themselves.', 'Always define a base case to prevent stack overflows.'] }
    ],
    quiz: [
      { id: 1, question: 'How do you ignore a returned value from a function?', options: ['Using _ blank identifier', 'Using null', 'Using nil', 'By leaving it empty'], correctAnswer: 'Using _ blank identifier' }
    ],
    assignment: { prompts: ['Write a function returning both the sum and product of an array.'] }
  },
  m5: {
    id: 'm5',
    title: 'MODULE 5: ARRAYS, SLICES & MAPS',
    overview: 'Learn collection types, slices slicing operations and mapping keys.',
    outcomes: ['Construct dynamic lists', 'Manipulate maps and delete elements'],
    lessons: [
      { id: 'm5-l1', title: 'Lesson 5.1 Arrays', objectives: ['Static collections'], theory: 'Arrays are fixed-size sequences of elements of a single type. Their length is determined at declaration and forms part of their type system. This means `[5]int` and `[10]int` are treated as different types.', syntax: `package main
import "fmt"

func main() {
    var arr [5]int
    arr[0] = 100
    fmt.Println(arr, len(arr))
}`, takeaways: ['Arrays have a fixed size defined at compile time.', 'The array size is part of its type definition.'] },
      { id: 'm5-l2', title: 'Lesson 5.2 Slices', objectives: ['Dynamic wrappers'], theory: 'Slices are dynamic wrappers built on top of arrays. They have a length (number of elements) and a capacity (number of elements in the underlying array starting from the slice\'s first element). You can initialize slices using make().', syntax: `package main
import "fmt"

func main() {
    s := make([]int, 3, 5)
    fmt.Printf("len: %d, cap: %d\\n", len(s), cap(s))
}`, takeaways: ['Slices represent dynamic, resizable views of arrays.', 'Create slices with: make([]Type, len, cap)'] },
      { id: 'm5-l3', title: 'Lesson 5.3 Slice Operations', objectives: ['Manipulate slices'], theory: 'Use append() to add elements to a slice. If the underlying array runs out of capacity, Go automatically allocates a new, larger array. Slices can be partitioned using the syntax: slice[low:high].', syntax: `package main
import "fmt"

func main() {
    var s []int
    s = append(s, 1, 2, 3)
    sub := s[1:3] // [2, 3]
    fmt.Println(sub)
}`, takeaways: ['Append handles array reallocation automatically.', 'Extract sub-slices using the low:high boundary syntax.'] },
      { id: 'm5-l4', title: 'Lesson 5.4 Maps', objectives: ['Key-value hashes'], theory: 'Maps are built-in hash tables that associate unique keys with values. They are initialized using make(). Reading a missing key returns the zero-value for the map\'s value type. You can verify if a key exists using the two-value lookup syntax: val, ok := map[key].', syntax: `package main
import "fmt"

func main() {
    ages := make(map[string]int)
    ages["Aaquib"] = 28
    val, ok := ages["Suhani"]
    fmt.Printf("Val: %d, Exists: %t\\n", val, ok)
}`, takeaways: ['Initialize maps using: make(map[KeyType]ValueType).', 'Use the two-value lookup to check if a key exists in a map.'] },
      { id: 'm5-l5', title: 'Lesson 5.5 Iterating Collections', objectives: ['Loop lists'], theory: 'Use the for range syntax to iterate over arrays, slices, and maps. For arrays and slices, range returns the index and value. For maps, it returns the key and value.', syntax: `package main
import "fmt"

func main() {
    nums := []int{10, 20, 30}
    for idx, val := range nums {
        fmt.Printf("index: %d, val: %d\\n", idx, val)
    }
}`, takeaways: ['For range loops iterate over collections.', 'Range returns index/key and value pairs.'] },
      { id: 'm5-l6', title: 'Lesson 5.6 Practical Examples', objectives: ['Real usage'], theory: 'Write search algorithms, filters, and dynamic lookups. We combine maps for O(1) lookups and slices to store sorted keys.', syntax: `package main
import "fmt"

func main() {
    data := []string{"apple", "banana", "apple"}
    counts := make(map[string]int)
    for _, item := range data {
        counts[item]++
    }
    fmt.Println(counts)
}`, takeaways: ['Combine slices and maps to build complex structures.', 'Maps offer O(1) time complexity for lookup operations.'] }
    ],
    quiz: [
      { id: 1, question: 'Which built-in function increases a slice size?', options: ['append', 'push', 'extend', 'add'], correctAnswer: 'append' }
    ],
    assignment: { prompts: ['Build an inventory lookup program utilizing maps.'] }
  },
  m6: {
    id: 'm6',
    title: 'MODULE 6: STRUCTS & METHODS',
    overview: 'Learn user defined types, defining receiver methods, embedded structs and JSON parsing tags.',
    outcomes: ['Model complex entities', 'Marshal objects to JSON strings'],
    lessons: [
      { id: 'm6-l1', title: 'Lesson 6.1 Structs', objectives: ['Define struct entities'], theory: 'Structs are user-defined types that group related fields together. Fields must be capitalized to make them public (exported) so they can be accessed from outside their home package.', syntax: `package main
import "fmt"

type Course struct {
    Title  string
    ID     string
    Rating float64
}

func main() {
    c := Course{Title: "Golang", ID: "4", Rating: 4.9}
    fmt.Println(c.Title)
}`, takeaways: ['Structs group related fields into a single custom type.', 'Capitalize field names to export them for external package access.'] },
      { id: 'm6-l2', title: 'Lesson 6.2 Methods', objectives: ['Receiver methods'], theory: 'Go supports methods on struct types. Methods are functions declared with a receiver argument before the function name. Use pointer receivers (*Type) to modify struct fields or avoid copying data on method calls.', syntax: `package main
import "fmt"

type Counter struct {
    Count int
}

func (c *Counter) Increment() {
    c.Count++
}

func main() {
    cnt := Counter{Count: 0}
    cnt.Increment()
    fmt.Println(cnt.Count)
}`, takeaways: ['Define receiver methods to associate behavior with structs.', 'Use pointer receivers to modify struct data.'] },
      { id: 'm6-l3', title: 'Lesson 6.3 Embedded Structs', objectives: ['Composition modeling'], theory: 'Go supports embedded fields inside structs. Declaring a field type without an explicit field name embeds its fields directly, promoting them to the parent struct.', syntax: `package main
import "fmt"

type Person struct {
    Name string
}

type Employee struct {
    Person
    Salary int
}

func main() {
    e := Employee{Person: Person{Name: "Suhani"}, Salary: 85000}
    fmt.Println(e.Name) // Field Promotion
}`, takeaways: ['Embedding fields promotes them directly to the parent struct.', 'Promoted fields can be accessed directly without naming the embedded struct.'] },
      { id: 'm6-l4', title: 'Lesson 6.4 Composition', objectives: ['OOP modeling'], theory: 'Go does not support classical object-oriented class inheritance. Instead, it favors composition—building complex types by combining smaller, specialized structs.', takeaways: ['Go uses composition instead of class-based inheritance.', 'Composition keeps code decoupled and flexible.'] },
      { id: 'm6-l5', title: 'Lesson 6.5 JSON Tags', objectives: ['JSON mapping'], theory: 'JSON tags allow you to customize how struct fields are named when marshaled into JSON strings. Define tags in backticks next to the field types.', syntax: `package main
import (
    "encoding/json"
    "fmt"
)

type User struct {
    Username string \`json:"username"\`
    Email    string \`json:"user_email"\`
}

func main() {
    u := User{Username: "suhani", Email: "suhani@yopmail.com"}
    data, _ := json.Marshal(u)
    fmt.Println(string(data))
}`, takeaways: ['JSON tags customize field names during JSON conversions.', 'Tags are declared using backticks next to field declarations.'] },
      { id: 'm6-l6', title: 'Lesson 6.6 Best Practices', objectives: ['Efficient structs allocation'], theory: 'When designing structs, order fields from largest to smallest type. This helps Go optimize struct memory usage by minimizing padding bytes.', takeaways: ['Order struct fields from largest to smallest type to reduce padding.', 'Pass large structs as pointers to avoid copy overhead.'] }
    ],
    quiz: [
      { id: 1, question: 'How does Go export a struct field for external package access?', options: ['Capitalize the first letter', 'Prefix with export keyword', 'Prefix with public keyword', 'Define JSON tags'], correctAnswer: 'Capitalize the first letter' }
    ],
    assignment: { prompts: ['Create a Book struct, write a method formatting details, and convert to JSON.'] }
  },
  m7: {
    id: 'm7',
    title: 'MODULE 7: INTERFACES',
    overview: 'Learn interface design, empty interfaces, type assertion, type switches, and polymorphism.',
    outcomes: ['Design decoupled code layouts', 'Handle variable payload objects'],
    lessons: [
      { id: 'm7-l1', title: 'Lesson 7.1 Introduction to Interfaces', objectives: ['Decoupled specs'], theory: 'Interfaces in Go define a set of method signatures. They decouple function specifications from their concrete implementations, enabling polymorphism. An interface value is internally represented as a two-word pair: a pointer to information about the concrete type (the dynamic type) and a pointer to the actual data (the dynamic value). Under the hood, this metadata mapping is handled by the Go compiler at runtime, allowing functions to interact with abstract interfaces without needing to know the concrete type in advance. This structural typing pattern allows for clean and flexible codebases.', takeaways: ['Interfaces specify behavior without implementation.', 'Promotes decoupling in software architectures.', 'Interfaces are represented internally as a two-word pair (type, value).'] },
      { id: 'm7-l2', title: 'Lesson 7.2 Implementing Interfaces', objectives: ['Implicit implementation'], theory: 'Go interfaces are implemented implicitly. A type implements an interface simply by implementing all of its methods. There is no implements keyword in Go. This design simplifies dependency injection and structural modularity, as codebases can define interfaces in the package where they are consumed, rather than where the concrete types are defined.', syntax: `package main
import "fmt"

type Speaker interface {
    Speak() string
}

type Dog struct{}

func (d Dog) Speak() string {
    return "Woof!"
}

func main() {
    var s Speaker = Dog{}
    fmt.Println(s.Speak())
}`, takeaways: ['Implicit satisfaction simplifies dependency injection.', 'No explicit implements keyword is used.', 'Interfaces should be defined close to their usage point.'] },
      { id: 'm7-l3', title: 'Lesson 7.3 Empty Interface', objectives: ['Generic interfaces'], theory: 'The empty interface (interface{} or "any") defines zero methods. Because of this, any type in Go satisfies the empty interface, allowing it to hold values of any type. Behind the scenes, Go packages compile empty interface assignments by boxing the dynamic type info and data pointer. While this provides maximum flexibility, querying empty interfaces introduces minor runtime overhead due to type reflections.', syntax: `package main
import "fmt"

func printAnything(val interface{}) {
    fmt.Println(val)
}

func main() {
    printAnything(42)
    printAnything("Hello")
}`, takeaways: ['The empty interface (any) satisfies all Go types.', 'Use any (empty interface) to handle variable, unknown inputs.', 'Overuse of empty interfaces can bypass static type checking benefits.'] },
      { id: 'm7-l4', title: 'Lesson 7.4 Type Assertions', objectives: ['Unwrap interfaces'], theory: 'Type assertions retrieve the underlying concrete value from an interface. Use the two-value syntax (val, ok := i.(Type)) to check if the assertion succeeded and avoid runtime panics. A single-value assertion (val := i.(Type)) will crash the program with a panic if the underlying type does not match.', syntax: `package main
import "fmt"

func main() {
    var val interface{} = "Suhani"
    str, ok := val.(string)
    fmt.Println(str, ok)
}`, takeaways: ['Type assertions extract concrete values from interfaces.', 'Always use the two-value syntax to check assertions safely.', 'Single-value assertions will trigger a runtime panic on mismatch.'] },
      { id: 'm7-l5', title: 'Lesson 7.5 Type Switches', objectives: ['Branching types checks'], theory: 'Type switches let you check an interface variable\'s concrete type against multiple types in a switch block. This pattern acts as a cleaner alternative to writing multiple if-else type assertions.', syntax: `package main
import "fmt"

func inspectType(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Println("Int", v)
    case string:
        fmt.Println("String", v)
    }
}

func main() {
    inspectType(100)
}`, takeaways: ['Type switches match concrete types in a switch block.', 'Use i.(type) syntax inside type switch statements.', 'Ideal for routing heterogeneous data payloads.'] },
      { id: 'm7-l6', title: 'Lesson 7.6 Real-World Examples', objectives: ['Mocking and Testing'], theory: 'Interfaces are highly useful for writing mock implementations in tests. For example, mock database interfaces to run unit tests without connecting to a live database. This allows you to verify business logic and error paths in isolation without side effects.', takeaways: ['Interfaces make mocking external services simple.', 'Enables parallel, isolated testing of business logic.', 'Avoid mocking third-party libraries; instead, mock your own domain interfaces.'] }
    ],
    quiz: [
      { id: 1, question: 'Which keyword implements interfaces in Go?', options: ['None (implicit)', 'implements', 'interface', 'struct'], correctAnswer: 'None (implicit)' }
    ],
    assignment: { prompts: ['Write a PaymentGateway interface and implement CreditCard and PayPal drivers.'] }
  },
  m8: {
    id: 'm8',
    title: 'MODULE 8: ERROR HANDLING',
    overview: 'Learn error types, custom errors, defer stacks, panic triggers, and recovery routines.',
    outcomes: ['Write bulletproof logic', 'Recover gracefully from runtime panics'],
    lessons: [
      { id: 'm8-l1', title: 'Lesson 8.1 Errors in Go', objectives: ['Explicit errors check'], theory: 'In Go, errors are treated as normal values. Functions return errors explicitly as their last return value. You check for errors using simple conditional statements. This explicit pattern makes error paths transparent and encourages developers to handle failures close to where they occur, rather than letting exceptions bubble up silently.', syntax: `package main
import (
    "errors"
    "fmt"
)

func checkAge(age int) error {
    if age < 0 {
        return errors.New("age cannot be negative")
    }
    return nil
}

func main() {
    if err := checkAge(-1); err != nil {
        fmt.Println("Error occurred:", err)
    }
}`, takeaways: ['Go handles errors explicitly as return values.', 'Go does not use try-catch exception blocks.', 'Checking errors explicitly makes code execution paths transparent.'] },
      { id: 'm8-l2', title: 'Lesson 8.2 Custom Errors', objectives: ['Custom error types'], theory: 'You can define custom error structures by implementing the built-in error interface. The interface only requires a single Error() method returning a string. This lets you attach custom metadata, such as HTTP status codes or error categories, directly to the error object.', syntax: `type DBError struct {
    Code int
    Msg  string
}

func (e DBError) Error() string {
    return e.Msg
}`, takeaways: ['Any type that implements the Error() method satisfies the error interface.', 'Use custom structs to pass rich error metadata.', 'Allows callers to assert and extract custom error fields.'] },
      { id: 'm8-l3', title: 'Lesson 8.3 panic', objectives: ['Fatal error exceptions'], theory: 'Panics stop the program\'s normal execution flow. When a panic occurs, Go executes deferred functions and then crashes the application. Panics should be reserved for truly unrecoverable errors, such as out-of-bounds array access or missing configuration files at startup.', syntax: `package main

func main() {
    panic("unrecoverable system failure")
}`, takeaways: ['Panics stop normal execution and crash the program.', 'Only use panics for unrecoverable errors.', 'Deferred calls are guaranteed to run during a panic sequence.'] },
      { id: 'm8-l4', title: 'Lesson 8.4 defer', objectives: ['Postponed execution'], theory: 'The defer keyword postpones a function call to run immediately after the surrounding function returns. Defer statements are evaluated immediately (capturing their arguments), but the actual execution is placed on a stack and run at the end of the enclosing function.', syntax: `package main
import "fmt"

func main() {
    defer fmt.Println("Last")
    fmt.Println("First")
}`, takeaways: ['Deferred calls run immediately after the enclosing function returns.', 'Multiple deferred calls execute in Last-In-First-Out (LIFO) order.', 'Use defer to clean up resources like file descriptors or locks.'] },
      { id: 'm8-l5', title: 'Lesson 8.5 recover', objectives: ['Intercept panics'], theory: 'Recover is a built-in function that stops a panic, regains control of the execution flow, and prevents the application from crashing. It must be called inside a deferred function. If the program is not panicking, calling recover has no effect and returns nil.', syntax: `package main
import "fmt"

func safeCall() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()
    panic("fail")
}

func main() {
    safeCall()
    fmt.Println("Program continues running.")
}`, takeaways: ['Recover intercepts active panics and restores execution flow.', 'Recover must be called inside a deferred function to work.', 'Allows services to handle unexpected panics gracefully without crashing the process.'] },
      { id: 'm8-l6', title: 'Lesson 8.6 Error Wrapping', objectives: ['Contextual nesting errors'], theory: 'Wrap errors with context using the `%w` verb in fmt.Errorf(). This preserves the original error in the error chain, allowing callers to inspect it using errors.Is() for specific values and errors.As() for custom error types.', syntax: `package main
import (
    "errors"
    "fmt"
)

var ErrNotFound = errors.New("item not found")

func main() {
    wrappedErr := fmt.Errorf("fetch error: %w", ErrNotFound)
    fmt.Println(errors.Is(wrappedErr, ErrNotFound)) // true
}`, takeaways: ['Wrap errors using the %w formatting verb.', 'Use errors.Is() to check for specific errors in an error chain.', 'Use errors.As() to extract custom error types from wrapped chains.'] }
    ],
    quiz: [
      { id: 1, question: 'In what order do deferred functions execute?', options: ['LIFO (Last In First Out)', 'FIFO (First In First Out)', 'Random', 'Parallel'], correctAnswer: 'LIFO (Last In First Out)' }
    ],
    assignment: { prompts: ['Write a safe division function that recovers from a division-by-zero panic.'] }
  },
  m9: {
    id: 'm9',
    title: 'MODULE 9: PACKAGES & MODULES',
    overview: 'Learn dependency management, package configurations, module builds and import structures.',
    outcomes: ['Structure clean workspace codebases', 'Initialize and import custom modules'],
    lessons: [
      { id: 'm9-l1', title: 'Lesson 9.1 Packages', objectives: ['Understand packages scope'], theory: 'Go projects are organized into packages. Every Go file must declare its package name at the top. Variables, functions, and types are shared across all files in the same package.', takeaways: ['Go files in the same folder must belong to the same package.', 'Package names usually match their folder name.'] },
      { id: 'm9-l2', title: 'Lesson 9.2 Go Modules', objectives: ['Initialize modules dependency'], theory: 'Initialize Go modules using the `go mod init <name>` command. This creates a go.mod file to track and manage dependencies.', takeaways: ['Create projects using: go mod init <project_name>', 'The go.mod file tracks package dependencies.'] },
      { id: 'm9-l3', title: 'Lesson 9.3 Importing Packages', objectives: ['External packages import'], theory: 'Import standard library packages or third-party libraries (e.g. from GitHub). Go automatically downloads imported packages when you run `go mod tidy`.', takeaways: ['Import standard or third-party packages in the import block.', 'Use go mod tidy to clean up unused dependencies.'] },
      { id: 'm9-l4', title: 'Lesson 9.4 Creating Packages', objectives: ['Write packages code'], theory: 'Create package directories containing Go files. Export functions and types from these packages by starting their names with a capital letter.', takeaways: ['Capitalize identifiers to export them to other packages.', 'Lowercase identifiers remain private to their package.'] },
      { id: 'm9-l5', title: 'Lesson 9.5 Package Organization', objectives: ['Refactoring architecture layouts'], theory: 'Organize projects using standard Go structures: place main executables in a cmd/ directory, and keep internal business logic in an internal/ directory.', takeaways: ['Use cmd/ folders to organize main entry-point scripts.', 'Keep package dependencies tidy and clean.'] }
    ],
    quiz: [
      { id: 1, question: 'Which file lists the direct dependencies of a Go project?', options: ['go.mod', 'go.sum', 'package.json', 'go.deps'], correctAnswer: 'go.mod' }
    ],
    assignment: { prompts: ['Create a multi-package calculator library module.'] }
  },
  m10: {
    id: 'm10',
    title: 'MODULE 10: FILE HANDLING',
    overview: 'Learn reading files, writing file streams, parsing JSON/CSV data streams, and logging.',
    outcomes: ['Parse local CSV data logs', 'Write and read JSON configuration profiles'],
    lessons: [
      { id: 'm10-l1', title: 'Lesson 10.1 Reading Files', objectives: ['Read file contents'], theory: 'Use os.ReadFile() to read entire files into memory, or bufio.NewReader() to read files incrementally as streams.', takeaways: ['Use os.ReadFile() to read small files quickly.', 'Always close file descriptors using defer.'] },
      { id: 'm10-l2', title: 'Lesson 10.2 Writing Files', objectives: ['Write file contents'], theory: 'Use os.WriteFile() to write byte slices to disk, or os.Create() and WriteString() to write streams.', takeaways: ['Write files using: os.WriteFile(path, data, permissions)', 'Flush buffered writers to ensure all data is written.'] },
      { id: 'm10-l3', title: 'Lesson 10.3 Directories', objectives: ['Manage directories'], theory: 'Manage directory structures using os.MkdirAll() to create nested folders, and os.ReadDir() to list folder contents.', takeaways: ['Create nested directories using: os.MkdirAll()', 'Check directory write permissions.'] },
      { id: 'm10-l4', title: 'Lesson 10.4 JSON Files', objectives: ['Encode/Decode JSON streams'], theory: 'Convert Go structs to JSON using json.Marshal(), and parse JSON strings back into structs using json.Unmarshal().', takeaways: ['Convert structs to JSON using: json.Marshal()', 'Parse JSON strings into structs using: json.Unmarshal()'] },
      { id: 'm10-l5', title: 'Lesson 10.5 CSV Files', objectives: ['Read CSV datasets'], theory: 'Read and write comma-separated files using the built-in encoding/csv package.', takeaways: ['Use encoding/csv to parse table datasets.', 'Check fields per record limits.'] },
      { id: 'm10-l6', title: 'Lesson 10.6 Logging', objectives: ['Write logs'], theory: 'Log events to stdout or files using the standard log package, or use structured loggers like zap to output logs in JSON format.', takeaways: ['Structured logging is essential for production tracing.', 'Zap provides high-performance logging capabilities.'] }
    ],
    quiz: [
      { id: 1, question: 'Which package is used to read/write JSON files in Go?', options: ['encoding/json', 'text/json', 'os/json', 'net/json'], correctAnswer: 'encoding/json' }
    ],
    assignment: { prompts: ['Write a tool that reads a CSV user list and outputs a JSON mapping.'] }
  },
  m11: {
    id: 'm11',
    title: 'MODULE 11: CONCURRENCY',
    overview: 'Master goroutines, channel communications, selection loops, WaitGroups, Mutex locks, and Context constraints.',
    outcomes: ['Construct thread-safe asynchronous workers', 'Manage timeouts using Go Context package'],
    lessons: [
      { id: 'm11-l1', title: 'Lesson 11.1 Introduction to Goroutines', objectives: ['Launch asynchronous threads'], theory: 'A goroutine is a lightweight execution thread managed entirely by the Go runtime scheduler, not the host operating system. When a Go program starts, the runtime automatically spins up a scheduler that runs on top of the physical CPU cores. This scheduler implements an M:N multiplexing model, which maps M goroutines onto N operating system threads. Unlike standard OS threads which require a fixed stack space allocation of 1MB to 2MB, goroutines initialize with a tiny stack allocation of just 2KB. This stack grows and shrinks dynamically in response to call frames requirements. This efficiency allows you to run hundreds of thousands of concurrent goroutines on a single computer without encountering memory exhaustion.', takeaways: ['Goroutines are cheap to initialize and execute.', 'Multiplexes thousands of execution paths over OS threads.'] },
      { id: 'm11-l2', title: 'Lesson 11.2 Channels', objectives: ['Safe threads communications'], theory: 'Channels are typed conduits that let you send and receive values between goroutines safely. They prevent race conditions by design without requiring manual Mutex locking protocols. By default, unbuffered channels block execution on both sides: a send operation blocks the sender until a receiver is ready to read from the channel, and a receive operation blocks the receiver until a sender writes data to it. This blocking behavior provides a natural synchronization point for concurrent processes.', syntax: `package main
import "fmt"

func main() {
    ch := make(chan string)
    go func() {
        ch <- "ping"
    }()
    fmt.Println(<-ch)
}`, takeaways: ['Send values to channels using the arrow operator (<-).', 'Unbuffered channel sends and receives block until both sender and receiver are ready.'] },
      { id: 'm11-l3', title: 'Lesson 11.3 Buffered Channels', objectives: ['Non-blocking queue streams'], theory: 'Buffered channels have a queue capacity. Sends to a buffered channel are non-blocking until the buffer is full.', syntax: `package main
import "fmt"

func main() {
    ch := make(chan int, 2)
    ch <- 1
    ch <- 2
    fmt.Println(<-ch, <-ch)
}`, takeaways: ['Initialize buffered channels with a capacity: make(chan Type, capacity)', 'Buffered channel sends only block when the queue is full.'] },
      { id: 'm11-l4', title: 'Lesson 11.4 Select Statement', objectives: ['Multi-channel multiplexing'], theory: 'The select statement lets a goroutine wait on multiple communication channels. Select blocks until one of its cases is ready to execute.', syntax: `package main
import (
    "fmt"
    "time"
)

func main() {
    c1 := make(chan string)
    go func() {
        time.Sleep(time.Millisecond)
        c1 <- "one"
    }()
    select {
    case msg := <-c1:
        fmt.Println(msg)
    case <-time.After(time.Second):
        fmt.Println("Timeout")
    }
}`, takeaways: ['Select multiplexes communications across multiple channels.', 'Use time.After to implement channel timeouts.'] },
      { id: 'm11-l5', title: 'Lesson 11.5 WaitGroup', objectives: ['Wait concurrent threads completion'], theory: 'Use sync.WaitGroup to wait for a collection of goroutines to finish. Call Add() to set the count, Done() when a goroutine completes, and Wait() to block until the count reaches zero.', syntax: `package main
import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    wg.Add(1)
    go func() {
        defer wg.Done()
        fmt.Println("Done working")
    }()
    wg.Wait()
}`, takeaways: ['Use sync.WaitGroup to wait for goroutines to finish.', 'Always pass WaitGroups to functions as pointer references.'] },
      { id: 'm11-l6', title: 'Lesson 11.6 Mutex', objectives: ['Prevent data race conditions'], theory: 'Use sync.Mutex to protect shared memory locations from data races by ensuring only one goroutine can access the critical section at a time.', syntax: `package main
import (
    "fmt"
    "sync"
)

type SafeBox struct {
    mu sync.Mutex
    val int
}

func (b *SafeBox) Add(x int) {
    b.mu.Lock()
    defer b.mu.Unlock()
    b.val += x
}

func main() {
    box := SafeBox{}
    box.Add(10)
    fmt.Println(box.val)
}`, takeaways: ['Use sync.Mutex to guard shared variables.', 'Run go build -race to detect data races in your binary.'] },
      { id: 'm11-l7', title: 'Lesson 11.7 Context Package', objectives: ['Cancel dead-locks'], theory: 'The context package propagates deadlines, cancellation signals, and request-scoped values across API boundaries and goroutines.', syntax: `package main
import (
    "context"
    "fmt"
    "time"
)

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), time.Millisecond)
    defer cancel()
    select {
    case <-time.After(time.Second):
        fmt.Println("Finished")
    case <-ctx.Done():
        fmt.Println("Cancelled:", ctx.Err())
    }
}`, takeaways: ['Use context to cancel long-running operations.', 'Always call the cancel() function to release context resources.'] },
      { id: 'm11-l8', title: 'Lesson 11.8 Worker Pools', objectives: ['Write throttled concurrent workers'], theory: 'Design worker pools to limit resources. Spawn a fixed number of worker goroutines that process tasks read from a shared work channel.', takeaways: ['Worker pools limit concurrent resource usage.', 'Prevents CPU and memory spikes.'] }
    ],
    quiz: [
      { id: 1, question: 'Which command audits a Go binary for memory race conditions?', options: ['go run -race', 'go test -speed', 'go race', 'go verify'], correctAnswer: 'go run -race' }
    ],
    assignment: { prompts: ['Implement a concurrent scraper downloading images using worker pools.'] }
  },
  m12: {
    id: 'm12',
    title: 'MODULE 12: TESTING',
    overview: 'Learn unit testing, writing table-driven suites, benchmark measurements, and mock assertions.',
    outcomes: ['Construct automated test suites', 'Measure memory/speed benchmarks'],
    lessons: [
      { id: 'm12-l1', title: 'Lesson 12.1 Introduction to Testing', objectives: ['Go testing package specs'], theory: 'Go includes a built-in testing framework. Test files must end with the `_test.go` suffix, and testing functions must start with the `Test` prefix.', takeaways: ['Run test suites using: go test', 'Test files must end in _test.go.'] },
      { id: 'm12-l2', title: 'Lesson 12.2 Unit Testing', objectives: ['Write unit assertions'], theory: 'Write unit tests to assert code behavior using the standard testing library. Call `t.Errorf()` to report failures without stopping the test run.', syntax: `package main
import "testing"

func Sum(a, b int) int { return a + b }

func TestSum(t *testing.T) {
    if Sum(2, 3) != 5 {
        t.Errorf("Calculation failed")
    }
}`, takeaways: ['Test functions accept a *testing.T parameter.', 'Use t.Errorf() to report test failures.'] },
      { id: 'm12-l3', title: 'Lesson 12.3 Table-Driven Tests', objectives: ['Design matrix inputs'], theory: 'Table-driven tests define a slice of test cases (inputs and expected outputs) and loop through them to run assertions. This is the idiomatic way to write tests in Go.', syntax: `package main
import "testing"

func TestSumTable(t *testing.T) {
    cases := []struct {
        a, b, expected int
    }{
        {1, 1, 2},
        {2, 2, 4},
    }
    for _, tc := range cases {
        if res := tc.a + tc.b; res != tc.expected {
            t.Errorf("Fail")
        }
    }
}`, takeaways: ['Table-driven tests keep test logic clean and reusable.', 'Loop through case slices to run tests against different inputs.'] },
      { id: 'm12-l4', title: 'Lesson 12.4 Benchmark Testing', objectives: ['Test throughput speed'], theory: 'Write benchmark functions starting with the `Benchmark` prefix to measure your code\'s execution speed and memory allocations.', syntax: `package main
import "testing"

func BenchmarkLoop(b *testing.B) {
    for i := 0; i < b.N; i++ {
        // execute method
    }
}`, takeaways: ['Run benchmarks using the -bench flag: go test -bench=.', 'Benchmark functions accept a *testing.B parameter.'] },
      { id: 'm12-l5', title: 'Lesson 12.5 Mocking Basics', objectives: ['Mock interface responses'], theory: 'Mock external services by defining mock structs that implement the same interface. This lets you test business logic in isolation without making real network or database calls.', takeaways: ['Use interfaces to mock external services.', 'Mocking decouples tests from network and database environments.'] }
    ],
    quiz: [
      { id: 1, question: 'What suffix must Go test filenames have?', options: ['_test.go', '.test.go', '_spec.go', '.spec.go'], correctAnswer: '_test.go' }
    ],
    assignment: { prompts: ['Write a table-driven test asserting password hashing logic.'] }
  },
  m13: {
    id: 'm13',
    title: 'MODULE 13: HTTP & REST APIs',
    overview: 'Learn net/http servers config, routing, request bindings, middleware wrappers, and version patterns.',
    outcomes: ['Serve REST APIs on port endpoints', 'Decrypt request body payloads'],
    lessons: [
      { id: 'm13-l1', title: 'Lesson 13.1 HTTP Package', objectives: ['Build net/http connections'], theory: 'Go\'s standard library includes a production-ready HTTP server inside the net/http package. It handles routing and serves incoming TCP requests efficiently.', takeaways: ['Use net/http to build web servers without external frameworks.', 'Handles routing and processes request payloads.'] },
      { id: 'm13-l2', title: 'Lesson 13.2 Web Server', objectives: ['Listen on TCP ports'], theory: 'Configure port mappings and start HTTP servers using the http.ListenAndServe() function.', syntax: `package main
import "net/http"

func main() {
    http.ListenAndServe(":8080", nil)
}`, takeaways: ['http.ListenAndServe starts the HTTP server.', 'Port allocations are specified as host:port strings.'] },
      { id: 'm13-l3', title: 'Lesson 13.3 Routing', objectives: ['Match request URLs'], theory: 'Register route paths and associate them with handler functions using http.HandleFunc().', syntax: `package main
import (
    "fmt"
    "net/http"
)

func hello(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello")
}

func main() {
    http.HandleFunc("/hello", hello)
    http.ListenAndServe(":8080", nil)
}`, takeaways: ['Use http.HandleFunc() to map paths to handlers.', 'Handlers accept ResponseWriter and Request parameters.'] },
      { id: 'm13-l4', title: 'Lesson 13.4 Request Handling', objectives: ['Read request inputs'], theory: 'Read incoming request methods, query parameters, HTTP headers, and body payloads from the http.Request object.', takeaways: ['Read request methods using: r.Method', 'Read query parameters from the request object.'] },
      { id: 'm13-l5', title: 'Lesson 13.5 JSON APIs', objectives: ['Write JSON APIs response'], theory: 'Build JSON APIs by setting the Content-Type header to application/json and serializing response structs using json.NewEncoder().', syntax: `package main
import (
    "encoding/json"
    "net/http"
)

func getProfile(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{"name": "Suhani"})
}`, takeaways: ['Set the Content-Type header to application/json.', 'Use json.NewEncoder() to write JSON responses directly to the client.'] },
      { id: 'm13-l6', title: 'Lesson 13.6 Middleware', objectives: ['Intercept requests'], theory: 'Write HTTP middleware functions that wrap handlers. Use them to log requests, authenticate sessions, or inject CORS headers before running the main handler logic.', syntax: `func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        // Log request info
        next.ServeHTTP(w, r)
    })
}`, takeaways: ['Middleware wraps handlers to intercept incoming requests.', 'Promotes reusable request processing patterns.'] },
      { id: 'm13-l7', title: 'Lesson 13.7 API Versioning', objectives: ['Define version paths'], theory: 'Version your API endpoints using path prefixes like `/api/v1` to prevent breaking changes for existing clients when updates are deployed.', takeaways: ['Scope endpoints under versioned prefixes (e.g. /api/v1).', 'Prevents breaking client integrations.'] }
    ],
    quiz: [
      { id: 1, question: 'Which built-in package serves HTTP routers in Go?', options: ['net/http', 'http', 'web', 'net/web'], correctAnswer: 'net/http' }
    ],
    assignment: { prompts: ['Create a server returning current time parameters in JSON format.'] }
  },
  m14: {
    id: 'm14',
    title: 'MODULE 14: DATABASES',
    overview: 'Learn SQL connections, executing CRUD statements, managing transactions, running migrations, and repository pattern.',
    outcomes: ['Connect PostgreSQL connections pool', 'Execute SQL transactions rollback'],
    lessons: [
      { id: 'm14-l1', title: 'Lesson 14.1 SQL Basics', objectives: ['RDBMS specs'], theory: 'Understand relational database concepts: tables, schemas, primary and foreign keys, joins, and database normalization.', takeaways: ['Key database foundation.', 'Relational databases store structured data rows.'] },
      { id: 'm14-l2', title: 'Lesson 14.2 PostgreSQL Setup', objectives: ['Run Postgres container'], theory: 'Provision and configure PostgreSQL database instances inside Docker containers for local development.', takeaways: ['Simplifies environment configuration.', 'Postgres is a powerful open-source database.'] },
      { id: 'm14-l3', title: 'Lesson 14.3 Database Connections', objectives: ['Open connection pool'], theory: 'Open a connection pool to your database using the database/sql package and drivers like pgx.', syntax: `package main
import (
    "database/sql"
    _ "github.com/jackc/pgx/v5/stdlib"
)

func main() {
    db, _ := sql.Open("pgx", "postgres://user:pass@localhost:5432/db")
    defer db.Close()
}`, takeaways: ['Open database connection pools using: sql.Open()', 'The sql.DB object represents a pool of active connections.'] },
      { id: 'm14-l4', title: 'Lesson 14.4 CRUD Operations', objectives: ['Run CRUD queries'], theory: 'Query database rows using QueryRow() for single records and Query() for multiple records. Use Exec() to execute INSERT, UPDATE, and DELETE statements.', syntax: `var name string
err := db.QueryRow("SELECT name FROM users WHERE id = $1", 1).Scan(&name)`, takeaways: ['Query single rows using: db.QueryRow()', 'Always sanitize queries using placeholder parameters ($1) to prevent SQL injection.'] },
      { id: 'm14-l5', title: 'Lesson 14.5 Transactions', objectives: ['Execute SQL transactions'], theory: 'Use database transactions to group multiple database operations. Call db.Begin() to start a transaction, and execute Commit() or Rollback() to persist or discard the changes.', syntax: `tx, _ := db.Begin()
_, err := tx.Exec("UPDATE accounts SET balance = balance - 100 WHERE id = 1")
if err != nil {
    tx.Rollback()
}
tx.Commit()`, takeaways: ['Transactions ensure atomic execution of multiple database updates.', 'Call tx.Rollback() if an error occurs to discard changes.'] },
      { id: 'm14-l6', title: 'Lesson 14.6 Migrations', objectives: ['Version schema updates'], theory: 'Track database schema changes over time using migration tools like golang-migrate. Migrations let you version database updates alongside your application code.', takeaways: ['Essential for version control.', 'golang-migrate is a popular database schema migration tool.'] },
      { id: 'm14-l7', title: 'Lesson 14.7 Repository Pattern', objectives: ['Isolate database queries'], theory: 'Isolate database queries from your core application logic by defining repository interfaces. This separates data storage concerns from business rules.', takeaways: ['Decouples data access from business logic.', 'Enables mock testing of application services.'] }
    ],
    quiz: [
      { id: 1, question: 'What is the purpose of using query placeholder parameters ($1, ?)?', options: ['To prevent SQL Injection', 'To style query variables', 'To improve search speed', 'To format output values'], correctAnswer: 'To prevent SQL Injection' }
    ],
    assignment: { prompts: ['Write a user repository updating database profiles using pgx.'] }
  },
  m15: {
    id: 'm15',
    title: 'MODULE 15: BUILDING APIS WITH GIN',
    overview: 'Learn Gin framework setup, route groups setup, custom parameter validation, and JWT authentication.',
    outcomes: ['Construct REST APIs using Gin framework', 'Validate body structures using binding tags'],
    lessons: [
      { id: 'm15-l1', title: 'Lesson 15.1 Introduction to Gin', objectives: ['Use Gin framework'], theory: 'Gin is a high-performance web framework for Go. It features a fast Radix tree-based router, built-in JSON rendering, and simple middleware chaining.', takeaways: ['Gin is a popular high-performance web framework.', 'Vastly simplifies API development in Go.'] },
      { id: 'm15-l2', title: 'Lesson 15.2 Project Structure', objectives: ['Organize MVC folders'], theory: 'Organize Gin projects using clean MVC directory structures: place handlers in controllers/, database logic in repositories/, and business rules in services/.', takeaways: ['Keep handler functions thin.', 'Separate transport logic from business services.'] },
      { id: 'm15-l3', title: 'Lesson 15.3 Routing', objectives: ['Define group paths'], theory: 'Group related API endpoints under route groups to manage paths and middleware configurations easily.', syntax: `package main
import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()
    v1 := r.Group("/api/v1")
    {
        v1.GET("/users", func(c *gin.Context) {})
    }
    r.Run()
}`, takeaways: ['Route groups organize related API endpoints.', 'Use v1 := r.Group("/api/v1") to group paths.'] },
      { id: 'm15-l4', title: 'Lesson 15.4 Controllers', objectives: ['Process HTTP requests'], theory: 'Write controller handlers that read requests from the gin.Context object and return JSON responses.', syntax: `func GetUsers(c *gin.Context) {
    c.JSON(200, gin.H{"users": []string{"Suhani"}})
}`, takeaways: ['Controller handlers accept a *gin.Context argument.', 'Use c.JSON() to return JSON payloads to the client.'] },
      { id: 'm15-l5', title: 'Lesson 15.5 Services', objectives: ['Business logic isolation'], theory: 'Keep business rules in a separate service layer, decoupled from your HTTP controllers and database repositories.', takeaways: ['Decouples transport logic from business rules.', 'Improves code reuse and testability.'] },
      { id: 'm15-l6', title: 'Lesson 15.6 Middleware', objectives: ['Gin middleware wrappers'], theory: 'Write custom middleware for Gin using the gin.HandlerFunc type. Use c.Next() to continue execution down the handler chain.', syntax: `func Logger() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Next()
    }
}`, takeaways: ['Write Gin middleware using: gin.HandlerFunc', 'Call c.Next() to run the next handler in the execution chain.'] },
      { id: 'm15-l7', title: 'Lesson 15.7 Validation', objectives: ['Validate request inputs'], theory: 'Validate incoming JSON request bodies using struct binding tags (e.g. binding:"required,email"). Gin validates these tags automatically during binding.', syntax: `type RegisterReq struct {
    Email    string \`json:"email" binding:"required,email"\`
    Password string \`json:"password" binding:"required,min=6"\`
}`, takeaways: ['Validate JSON request payloads using binding tags.', 'Returns HTTP 400 automatically if validation fails.'] },
      { id: 'm15-l8', title: 'Lesson 15.8 Authentication', objectives: ['Protect routes'], theory: 'Secure API routes by adding JWT authorization middleware to verify user sessions.', takeaways: ['Intercepts requests to verify access credentials.', 'Protects endpoints from unauthorized access.'] }
    ],
    quiz: [
      { id: 1, question: 'Which tag enforces parameter validation checks in Gin binding structs?', options: ['binding', 'validate', 'json', 'require'], correctAnswer: 'binding' }
    ],
    assignment: { prompts: ['Build a REST API listing products with query search filters using Gin.'] }
  },
  m16: {
    id: 'm16',
    title: 'MODULE 16: AUTHENTICATION & SECURITY',
    overview: 'Learn bcrypt password hashing, JWT generation, CORS configurations, and token refresh mechanisms.',
    outcomes: ['Hash passwords using bcrypt algorithm', 'Validate JWT payloads'],
    lessons: [
      { id: 'm16-l1', title: 'Lesson 16.1 Password Hashing', objectives: ['Hash user passwords'], theory: 'Secure user passwords by hashing them with salt algorithms like bcrypt before storing them in your database. Never store raw, plain-text passwords.', syntax: `package main
import (
    "fmt"
    "golang.org/x/crypto/bcrypt"
)

func main() {
    pwd := []byte("securepwd123")
    hash, _ := bcrypt.GenerateFromPassword(pwd, bcrypt.DefaultCost)
    err := bcrypt.CompareHashAndPassword(hash, pwd)
    fmt.Println("Matched:", err == nil)
}`, takeaways: ['Use bcrypt to hash user passwords before database storage.', 'Never store raw, plain-text passwords.'] },
      { id: 'm16-l2', title: 'Lesson 16.2 JWT Authentication', objectives: ['Generate signed JWTs'], theory: 'Handle stateless user sessions using JSON Web Tokens (JWT). Sign tokens using private keys (RS256) or shared secrets (HS256).', takeaways: ['JWTs enable stateless session tracking.', 'Pass tokens in HTTP authorization headers or HTTPOnly cookies.'] },
      { id: 'm16-l3', title: 'Lesson 16.3 Authorization', objectives: ['Check access roles'], theory: 'Implement role-based access control (RBAC) to restrict specific routes to authorized user roles (e.g. admin or student).', takeaways: ['Validates scopes from decoded claims.', 'Ensures users only access authorized paths.'] },
      { id: 'm16-l4', title: 'Lesson 16.4 Refresh Tokens', objectives: ['Handle token lifecycles'], theory: 'Generate long-lived refresh tokens to issue new, short-lived access tokens, limiting exposure risk if an access token is compromised.', takeaways: ['Access tokens should be short-lived.', 'Use refresh tokens to renew access sessions safely.'] },
      { id: 'm16-l5', title: 'Lesson 16.5 API Security', objectives: ['Defensive headers config'], theory: 'Protect your API against common web security risks by configuring rate limiters, CORS policies, and secure HTTP headers.', takeaways: ['Rate limiters protect APIs from denial of service attacks.', 'Configure secure HTTP headers.'] },
      { id: 'm16-l6', title: 'Lesson 16.6 CORS', objectives: ['Configure CORS policies'], theory: 'Configure Cross-Origin Resource Sharing (CORS) rules to control which frontend origins are allowed to request resources from your backend API.', takeaways: ['CORS restricts cross-origin browser requests.', 'Essential for managing client-side browser connections.'] }
    ],
    quiz: [
      { id: 1, question: 'Which algorithm is commonly used for secure password hashing in Go?', options: ['bcrypt', 'md5', 'sha1', 'aes'], correctAnswer: 'bcrypt' }
    ],
    assignment: { prompts: ['Write a login flow generating JWT access tokens.'] }
  },
  m17: {
    id: 'm17',
    title: 'MODULE 17: MICROSERVICES BASICS',
    overview: 'Learn service communication patterns, gRPC RPC calls, Docker container setups, and message queue connections.',
    outcomes: ['Construct Protobuf service schemas', 'Dockerize backend executables'],
    lessons: [
      { id: 'm17-l1', title: 'Lesson 17.1 What are Microservices?', objectives: ['Decoupled architectures'], theory: 'Split monolithic systems into independent, single-responsibility microservices. Each service runs in its own process and handles a specific business domain.', takeaways: ['Microservices isolate business domains.', 'Simplifies scaling and independent deployments.'] },
      { id: 'm17-l2', title: 'Lesson 17.2 Service Communication', objectives: ['Sync vs Async calls'], theory: 'Connect microservices using synchronous RPC protocols like gRPC, or asynchronous message brokers like NATS, RabbitMQ, and Kafka.', takeaways: ['Sync communication is useful for immediate dependency queries.', 'Async messaging decouples service execution paths.'] },
      { id: 'm17-l3', title: 'Lesson 17.3 gRPC Basics', objectives: ['Configure Protocol Buffers'], theory: 'gRPC is a high-performance RPC framework developed by Google. It uses Protocol Buffers (protobuf) to define service contracts and serialize structured data.', syntax: `syntax = "proto3";
package user;

service UserService {
    rpc GetUser (UserRequest) returns (UserResponse);
}

message UserRequest {
    string id = 1;
}

message UserResponse {
    string email = 1;
}`, takeaways: ['gRPC uses Protocol Buffers for service definitions.', 'Offers faster serialization and lower latency than REST JSON APIs.'] },
      { id: 'm17-l4', title: 'Lesson 17.4 Message Queues', objectives: ['Publish event notifications'], theory: 'Decouple services using event-driven architectures. Publish events to message brokers like NATS, which routes them to subscribing services.', takeaways: ['Message brokers enable event-driven architectures.', 'Guarantees message delivery across services.'] },
      { id: 'm17-l5', title: 'Lesson 17.5 Dockerizing Services', objectives: ['Write multi-stage Dockerfiles'], theory: 'Containerize Go applications using multi-stage Dockerfiles. Build the Go binary in a builder image, then copy it to a minimal scratch or alpine image for production.', syntax: `# Build Stage
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o main .

# Run Stage
FROM alpine:3.18
COPY --from=builder /app/main /main
CMD ["/main"]`, takeaways: ['Multi-stage Dockerfiles build minimal production images.', 'Scratch or alpine base images reduce the container size.'] },
      { id: 'm17-l6', title: 'Lesson 17.6 Service Discovery', objectives: ['Route network addresses'], theory: 'Track and route traffic to dynamically scaled microservice instances using service registries like Consul or Kubernetes DNS.', takeaways: ['Service discovery resolves dynamic IP addresses.', 'Simplifies horizontal service scaling.'] }
    ],
    quiz: [
      { id: 1, question: 'Which serialization format is used by gRPC?', options: ['Protocol Buffers', 'JSON', 'XML', 'YAML'], correctAnswer: 'Protocol Buffers' }
    ],
    assignment: { prompts: ['Write a Protobuf schema for a catalog service.', 'Dockerize a microservice and run it locally.'] }
  },
  m18: {
    id: 'm18',
    title: 'MODULE 18: DEPLOYMENT & DEVOPS',
    overview: 'Learn building static executables, configuring compose workspaces, EC2 instances deployments and CI/CD pipelines.',
    outcomes: ['Deploy docker systems', 'Configure Github Actions workflows'],
    lessons: [
      { id: 'm18-l1', title: 'Lesson 18.1 Building Executables', objectives: ['Compile static binaries'], theory: 'Go compiles into a single, self-contained binary containing all dependency resources.', takeaways: ['No external VM/runtime installation is required on destination servers.'] },
      { id: 'm18-l2', title: 'Lesson 18.2 Environment Variables', objectives: ['Load DSN configurations'], theory: 'Configure and load environment variables at runtime instead of hardcoding credentials.', takeaways: ['Prevents sensitive secrets leaks.'] },
      { id: 'm18-l3', title: 'Lesson 18.3 Docker', objectives: ['Run docker binaries'], theory: 'Package Go executables into lightweight Docker containers.', takeaways: ['Ensures consistent behavior across staging and production.'] },
      { id: 'm18-l4', title: 'Lesson 18.4 Docker Compose', objectives: ['Manage multi-container setups'], theory: 'Orchestrate multi-container environments (e.g. API gateway, Postgres database, Redis cache) using YAML specifications.', takeaways: ['Simplifies local multi-service testing.'] },
      { id: 'm18-l5', title: 'Lesson 18.5 AWS EC2 Deployment', objectives: ['Launch cloud instances'], theory: 'Provision AWS EC2 Linux nodes and configure SSH keys to deploy Go backend binaries.', takeaways: ['Ensure port 80/443 mapping rules are active.'] },
      { id: 'm18-l6', title: 'Lesson 18.6 CI/CD Basics', objectives: ['Automate builds validation'], theory: 'Configure automated pipelines (e.g. GitHub Actions) to run test suites and lint checks on every commit.', takeaways: ['Ensures deployment reliability.'] }
    ],
    quiz: [
      { id: 1, question: 'What is the main benefit of Go compilation?', options: ['Generates a single self-contained binary', 'Runs on a JVM', 'Interprets code at runtime', 'Automatically deploys to AWS'], correctAnswer: 'Generates a single self-contained binary' }
    ],
    assignment: { prompts: ['Create a GitHub Actions workflow building a Go project on pull requests.'] }
  }
};
