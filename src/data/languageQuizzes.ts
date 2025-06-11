
import { Quiz, Resource } from "@/types";

// Sample resources for different languages
const languageResources: { [key: string]: Resource[] } = {
  "C": [
    {
      id: "c_basic_1",
      title: "C Programming Tutorial",
      url: "https://www.tutorialspoint.com/cprogramming/",
      type: "article",
      difficulty: "beginner",
      description: "Complete C programming tutorial for beginners"
    },
    {
      id: "c_inter_1",
      title: "Advanced C Programming",
      url: "https://www.learn-c.org/",
      type: "course",
      difficulty: "intermediate",
      description: "Intermediate C programming concepts"
    },
    {
      id: "c_adv_1",
      title: "C Programming Expert Guide",
      url: "https://www.geeksforgeeks.org/c-programming-language/",
      type: "article",
      difficulty: "advanced",
      description: "Advanced C programming techniques"
    }
  ],
  "C++": [
    {
      id: "cpp_basic_1",
      title: "C++ Basics Tutorial",
      url: "https://www.cplusplus.com/doc/tutorial/",
      type: "article",
      difficulty: "beginner",
      description: "C++ programming fundamentals"
    },
    {
      id: "cpp_inter_1",
      title: "Object-Oriented Programming in C++",
      url: "https://www.learncpp.com/",
      type: "course",
      difficulty: "intermediate",
      description: "OOP concepts in C++"
    },
    {
      id: "cpp_adv_1",
      title: "Advanced C++ Programming",
      url: "https://www.geeksforgeeks.org/c-plus-plus/",
      type: "article",
      difficulty: "advanced",
      description: "Advanced C++ features and STL"
    }
  ],
  "Python": [
    {
      id: "py_basic_1",
      title: "Python for Beginners",
      url: "https://www.python.org/about/gettingstarted/",
      type: "article",
      difficulty: "beginner",
      description: "Getting started with Python"
    },
    {
      id: "py_inter_1",
      title: "Intermediate Python",
      url: "https://realpython.com/",
      type: "course",
      difficulty: "intermediate",
      description: "Intermediate Python concepts"
    },
    {
      id: "py_adv_1",
      title: "Advanced Python Programming",
      url: "https://docs.python.org/3/tutorial/",
      type: "article",
      difficulty: "advanced",
      description: "Advanced Python features"
    }
  ]
};

export const languageQuizzes: Quiz[] = [
  // C Programming Quizzes
  {
    id: "c_basic",
    title: "C Programming - Basic",
    description: "Test your knowledge of C programming fundamentals",
    skillCategory: "Programming Languages",
    difficulty: "beginner",
    questions: [
      {
        id: "c_b_1",
        question: "Which header file is required for printf() function?",
        options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
        correctAnswer: 0
      },
      {
        id: "c_b_2",
        question: "What is the correct syntax to declare an integer variable in C?",
        options: ["integer x;", "int x;", "var x;", "x integer;"],
        correctAnswer: 1
      },
      {
        id: "c_b_3",
        question: "Which operator is used to get the address of a variable?",
        options: ["*", "&", "%", "#"],
        correctAnswer: 1
      },
      {
        id: "c_b_4",
        question: "What does the '\\n' character represent?",
        options: ["New line", "Tab", "Space", "Backslash"],
        correctAnswer: 0
      },
      {
        id: "c_b_5",
        question: "Which function is used to read a character from keyboard?",
        options: ["getchar()", "putchar()", "scanf()", "printf()"],
        correctAnswer: 0
      },
      {
        id: "c_b_6",
        question: "What is the size of int data type in C (typically)?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        correctAnswer: 2
      },
      {
        id: "c_b_7",
        question: "Which symbol is used to terminate a statement in C?",
        options: [".", ",", ";", ":"],
        correctAnswer: 2
      },
      {
        id: "c_b_8",
        question: "What is the correct way to comment a single line in C?",
        options: ["# comment", "// comment", "/* comment", "-- comment"],
        correctAnswer: 1
      },
      {
        id: "c_b_9",
        question: "Which keyword is used to return a value from a function?",
        options: ["return", "exit", "break", "continue"],
        correctAnswer: 0
      },
      {
        id: "c_b_10",
        question: "What is the entry point of a C program?",
        options: ["start()", "begin()", "main()", "init()"],
        correctAnswer: 2
      },
      {
        id: "c_b_11",
        question: "Which format specifier is used for integer in printf()?",
        options: ["%s", "%d", "%c", "%f"],
        correctAnswer: 1
      },
      {
        id: "c_b_12",
        question: "What does the 'void' keyword mean?",
        options: ["Empty", "No return value", "Invalid", "Error"],
        correctAnswer: 1
      }
    ],
    recommendations: {
      lowScore: languageResources["C"] || [],
      mediumScore: languageResources["C"] || [],
      highScore: languageResources["C"] || []
    }
  },
  {
    id: "c_intermediate",
    title: "C Programming - Intermediate",
    description: "Test your intermediate knowledge of C programming",
    skillCategory: "Programming Languages", 
    difficulty: "intermediate",
    questions: [
      {
        id: "c_i_1",
        question: "What is a pointer in C?",
        options: ["A data type", "A variable that stores address", "A function", "A constant"],
        correctAnswer: 1
      },
      {
        id: "c_i_2",
        question: "Which function is used to allocate memory dynamically?",
        options: ["alloc()", "malloc()", "memory()", "new()"],
        correctAnswer: 1
      },
      {
        id: "c_i_3",
        question: "What is the difference between ++i and i++?",
        options: ["No difference", "++i is pre-increment, i++ is post-increment", "++i is faster", "i++ is safer"],
        correctAnswer: 1
      },
      {
        id: "c_i_4",
        question: "What is a structure in C?",
        options: ["A function", "A user-defined data type", "A library", "A keyword"],
        correctAnswer: 1
      },
      {
        id: "c_i_5",
        question: "Which operator is used to access structure members using pointer?",
        options: [".", "->", "*", "&"],
        correctAnswer: 1
      },
      {
        id: "c_i_6",
        question: "What is the purpose of the 'static' keyword?",
        options: ["Make variable constant", "Limit scope to file", "Increase speed", "Save memory"],
        correctAnswer: 1
      },
      {
        id: "c_i_7",
        question: "What is recursion?",
        options: ["Loop", "Function calling itself", "Memory allocation", "Error handling"],
        correctAnswer: 1
      },
      {
        id: "c_i_8",
        question: "Which header file contains string manipulation functions?",
        options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
        correctAnswer: 2
      },
      {
        id: "c_i_9",
        question: "What is the difference between call by value and call by reference?",
        options: ["No difference", "Call by value passes copy, call by reference passes address", "Call by reference is faster", "Call by value is safer"],
        correctAnswer: 1
      },
      {
        id: "c_i_10",
        question: "What is an array?",
        options: ["A single variable", "Collection of similar data types", "A function", "A pointer"],
        correctAnswer: 1
      },
      {
        id: "c_i_11",
        question: "Which function is used to copy strings?",
        options: ["strcopy()", "strcpy()", "stringcopy()", "copy()"],
        correctAnswer: 1
      },
      {
        id: "c_i_12",
        question: "What is the purpose of the 'const' keyword?",
        options: ["Make variable constant", "Increase speed", "Save memory", "Error handling"],
        correctAnswer: 0
      },
      {
        id: "c_i_13",
        question: "What is a union in C?",
        options: ["Same as structure", "Shares memory among members", "A function", "A library"],
        correctAnswer: 1
      },
      {
        id: "c_i_14",
        question: "Which operator has the highest precedence?",
        options: ["*", "+", "()", "="],
        correctAnswer: 2
      },
      {
        id: "c_i_15",
        question: "What is the purpose of the 'extern' keyword?",
        options: ["External linkage", "Make variable constant", "Increase speed", "Error handling"],
        correctAnswer: 0
      }
    ],
    recommendations: {
      lowScore: languageResources["C"] || [],
      mediumScore: languageResources["C"] || [],
      highScore: languageResources["C"] || []
    }
  },
  {
    id: "c_advanced",
    title: "C Programming - Advanced",
    description: "Test your advanced knowledge of C programming",
    skillCategory: "Programming Languages",
    difficulty: "advanced", 
    questions: [
      {
        id: "c_a_1",
        question: "What is a function pointer?",
        options: ["Pointer to a function", "Function that returns pointer", "Pointer inside function", "Function with pointer parameter"],
        correctAnswer: 0
      },
      {
        id: "c_a_2",
        question: "What is memory fragmentation?",
        options: ["Memory corruption", "Non-contiguous free memory blocks", "Memory overflow", "Memory underflow"],
        correctAnswer: 1
      },
      {
        id: "c_a_3",
        question: "What is the difference between malloc() and calloc()?",
        options: ["No difference", "malloc doesn't initialize, calloc initializes to zero", "calloc is faster", "malloc is safer"],
        correctAnswer: 1
      },
      {
        id: "c_a_4",
        question: "What is a volatile keyword used for?",
        options: ["Speed optimization", "Prevent compiler optimization", "Memory allocation", "Error handling"],
        correctAnswer: 1
      },
      {
        id: "c_a_5",
        question: "What is the purpose of the 'register' keyword?",
        options: ["Store in CPU register", "Register with OS", "Create registry entry", "Enable debugging"],
        correctAnswer: 0
      },
      {
        id: "c_a_6",
        question: "What is a dangling pointer?",
        options: ["Null pointer", "Pointer to deallocated memory", "Uninitialized pointer", "Pointer to pointer"],
        correctAnswer: 1
      },
      {
        id: "c_a_7",
        question: "What is the difference between #include <> and #include \"\"?",
        options: ["No difference", "<> for system headers, \"\" for user headers", "\"\" is faster", "<> is safer"],
        correctAnswer: 1
      },
      {
        id: "c_a_8",
        question: "What is a macro in C?",
        options: ["Function", "Preprocessor directive", "Variable", "Constant"],
        correctAnswer: 1
      },
      {
        id: "c_a_9",
        question: "What is the difference between stack and heap memory?",
        options: ["No difference", "Stack is automatic, heap is dynamic", "Heap is faster", "Stack is unlimited"],
        correctAnswer: 1
      },
      {
        id: "c_a_10",
        question: "What is a segmentation fault?",
        options: ["Compiler error", "Runtime error accessing invalid memory", "Logic error", "Syntax error"],
        correctAnswer: 1
      },
      {
        id: "c_a_11",
        question: "What is the purpose of the 'typedef' keyword?",
        options: ["Define new data type", "Create alias for existing type", "Both A and B", "None of the above"],
        correctAnswer: 2
      },
      {
        id: "c_a_12",
        question: "What is a bit field in C?",
        options: ["Array of bits", "Structure member with specified bit width", "Binary operation", "Memory allocation"],
        correctAnswer: 1
      },
      {
        id: "c_a_13",
        question: "What is the difference between deep copy and shallow copy?",
        options: ["No difference", "Deep copy copies all levels, shallow copy copies first level", "Shallow is faster", "Deep is safer"],
        correctAnswer: 1
      },
      {
        id: "c_a_14",
        question: "What is a memory leak?",
        options: ["Memory corruption", "Allocated memory not freed", "Memory overflow", "Memory underflow"],
        correctAnswer: 1
      },
      {
        id: "c_a_15",
        question: "What is the purpose of the 'restrict' keyword in C99?",
        options: ["Restrict access", "Compiler optimization hint", "Memory protection", "Error handling"],
        correctAnswer: 1
      },
      {
        id: "c_a_16",
        question: "What is a callback function?",
        options: ["Function that calls back", "Function passed as parameter", "Recursive function", "Inline function"],
        correctAnswer: 1
      },
      {
        id: "c_a_17",
        question: "What is the difference between signed and unsigned integers?",
        options: ["No difference", "Signed can be negative, unsigned cannot", "Unsigned is faster", "Signed is safer"],
        correctAnswer: 1
      },
      {
        id: "c_a_18",
        question: "What is endianness?",
        options: ["Memory layout", "Byte order in memory", "Compiler setting", "CPU architecture"],
        correctAnswer: 1
      },
      {
        id: "c_a_19",
        question: "What is the purpose of the 'inline' keyword?",
        options: ["Force inlining", "Suggest inlining to compiler", "Prevent inlining", "Enable debugging"],
        correctAnswer: 1
      },
      {
        id: "c_a_20",
        question: "What is a race condition?",
        options: ["Speed competition", "Multiple threads accessing shared resource", "Compiler optimization", "Memory allocation"],
        correctAnswer: 1
      }
    ],
    recommendations: {
      lowScore: languageResources["C"] || [],
      mediumScore: languageResources["C"] || [],
      highScore: languageResources["C"] || []
    }
  },

  // Python Programming Quizzes
  {
    id: "python_basic",
    title: "Python Programming - Basic",
    description: "Test your knowledge of Python programming fundamentals",
    skillCategory: "Programming Languages",
    difficulty: "beginner",
    questions: [
      {
        id: "py_b_1",
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        correctAnswer: 1
      },
      {
        id: "py_b_2",
        question: "How do you create a comment in Python?",
        options: ["// comment", "# comment", "/* comment */", "-- comment"],
        correctAnswer: 1
      },
      {
        id: "py_b_3",
        question: "Which data type is used to store text in Python?",
        options: ["text", "string", "str", "char"],
        correctAnswer: 2
      },
      {
        id: "py_b_4",
        question: "What is the correct way to create a list in Python?",
        options: ["list = {1, 2, 3}", "list = [1, 2, 3]", "list = (1, 2, 3)", "list = <1, 2, 3>"],
        correctAnswer: 1
      },
      {
        id: "py_b_5",
        question: "Which method is used to add an element to the end of a list?",
        options: ["add()", "append()", "insert()", "push()"],
        correctAnswer: 1
      },
      {
        id: "py_b_6",
        question: "What is the output of print(3 ** 2)?",
        options: ["6", "9", "32", "Error"],
        correctAnswer: 1
      },
      {
        id: "py_b_7",
        question: "Which keyword is used to create a loop that runs while a condition is true?",
        options: ["for", "while", "loop", "repeat"],
        correctAnswer: 1
      },
      {
        id: "py_b_8",
        question: "How do you get the length of a list?",
        options: ["length(list)", "len(list)", "size(list)", "count(list)"],
        correctAnswer: 1
      },
      {
        id: "py_b_9",
        question: "What is the correct syntax for an if statement?",
        options: ["if x = 5:", "if (x == 5):", "if x == 5:", "if x equals 5:"],
        correctAnswer: 2
      },
      {
        id: "py_b_10",
        question: "Which operator is used for equality comparison?",
        options: ["=", "==", "===", "eq"],
        correctAnswer: 1
      },
      {
        id: "py_b_11",
        question: "What is the correct way to import a module?",
        options: ["include module", "import module", "using module", "require module"],
        correctAnswer: 1
      },
      {
        id: "py_b_12",
        question: "Which function is used to get input from the user?",
        options: ["input()", "get()", "read()", "scan()"],
        correctAnswer: 0
      }
    ],
    recommendations: {
      lowScore: languageResources["Python"] || [],
      mediumScore: languageResources["Python"] || [],
      highScore: languageResources["Python"] || []
    }
  },
  {
    id: "python_intermediate",
    title: "Python Programming - Intermediate",
    description: "Test your intermediate knowledge of Python programming",
    skillCategory: "Programming Languages",
    difficulty: "intermediate",
    questions: [
      {
        id: "py_i_1",
        question: "What is a list comprehension?",
        options: ["A way to understand lists", "A concise way to create lists", "A list method", "A type of loop"],
        correctAnswer: 1
      },
      {
        id: "py_i_2",
        question: "What is the difference between a list and a tuple?",
        options: ["No difference", "Lists are mutable, tuples are immutable", "Tuples are faster", "Lists use more memory"],
        correctAnswer: 1
      },
      {
        id: "py_i_3",
        question: "What is a dictionary in Python?",
        options: ["A book", "A collection of key-value pairs", "A type of list", "A function"],
        correctAnswer: 1
      },
      {
        id: "py_i_4",
        question: "Which method is used to remove an element from a list by value?",
        options: ["delete()", "remove()", "pop()", "del()"],
        correctAnswer: 1
      },
      {
        id: "py_i_5",
        question: "What is exception handling in Python?",
        options: ["Error prevention", "Error catching and handling", "Error reporting", "Error correction"],
        correctAnswer: 1
      },
      {
        id: "py_i_6",
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "try", "handle", "except"],
        correctAnswer: 1
      },
      {
        id: "py_i_7",
        question: "What is a lambda function?",
        options: ["A Greek function", "An anonymous function", "A recursive function", "A built-in function"],
        correctAnswer: 1
      },
      {
        id: "py_i_8",
        question: "What is the purpose of the 'self' parameter in class methods?",
        options: ["Reference to the class", "Reference to the instance", "A keyword", "Not needed"],
        correctAnswer: 1
      },
      {
        id: "py_i_9",
        question: "What is inheritance in Python?",
        options: ["Getting money", "Class deriving from another class", "Variable scope", "Function calling"],
        correctAnswer: 1
      },
      {
        id: "py_i_10",
        question: "Which method is called when an object is created?",
        options: ["__init__", "__new__", "__create__", "__start__"],
        correctAnswer: 0
      },
      {
        id: "py_i_11",
        question: "What is a generator in Python?",
        options: ["A power source", "A function that yields values", "A type of loop", "A built-in function"],
        correctAnswer: 1
      },
      {
        id: "py_i_12",
        question: "What is the difference between '==' and 'is'?",
        options: ["No difference", "== compares values, is compares identity", "is is faster", "== is safer"],
        correctAnswer: 1
      },
      {
        id: "py_i_13",
        question: "What is a decorator in Python?",
        options: ["A design pattern", "A function that modifies another function", "A type of variable", "A built-in module"],
        correctAnswer: 1
      },
      {
        id: "py_i_14",
        question: "What is the purpose of the 'with' statement?",
        options: ["Conditional execution", "Context management", "Loop control", "Function definition"],
        correctAnswer: 1
      },
      {
        id: "py_i_15",
        question: "What is multiple inheritance?",
        options: ["Multiple variables", "Class inheriting from multiple classes", "Multiple functions", "Multiple modules"],
        correctAnswer: 1
      }
    ],
    recommendations: {
      lowScore: languageResources["Python"] || [],
      mediumScore: languageResources["Python"] || [],
      highScore: languageResources["Python"] || []
    }
  },
  {
    id: "python_advanced",
    title: "Python Programming - Advanced",
    description: "Test your advanced knowledge of Python programming",
    skillCategory: "Programming Languages",
    difficulty: "advanced",
    questions: [
      {
        id: "py_a_1",
        question: "What is the Global Interpreter Lock (GIL)?",
        options: ["A security feature", "A mechanism that prevents multiple threads from executing Python bytecode", "A type of variable", "A built-in function"],
        correctAnswer: 1
      },
      {
        id: "py_a_2",
        question: "What is metaclass in Python?",
        options: ["A super class", "A class whose instances are classes", "A type of method", "A built-in module"],
        correctAnswer: 1
      },
      {
        id: "py_a_3",
        question: "What is the difference between deepcopy and shallow copy?",
        options: ["No difference", "Deepcopy copies all levels, shallow copy copies first level", "Shallow is faster", "Deep is safer"],
        correctAnswer: 1
      },
      {
        id: "py_a_4",
        question: "What is monkey patching?",
        options: ["Fixing bugs", "Dynamically modifying classes or modules at runtime", "A design pattern", "Error handling"],
        correctAnswer: 1
      },
      {
        id: "py_a_5",
        question: "What is the purpose of __slots__?",
        options: ["Define methods", "Restrict attribute creation and save memory", "Create properties", "Handle exceptions"],
        correctAnswer: 1
      },
      {
        id: "py_a_6",
        question: "What is a descriptor in Python?",
        options: ["A documentation string", "An object that defines how attribute access is handled", "A type of function", "A built-in module"],
        correctAnswer: 1
      },
      {
        id: "py_a_7",
        question: "What is the difference between @property and @staticmethod?",
        options: ["No difference", "@property creates getter/setter, @staticmethod creates method without self", "Static is faster", "Property is safer"],
        correctAnswer: 1
      },
      {
        id: "py_a_8",
        question: "What is asyncio used for?",
        options: ["Synchronous programming", "Asynchronous programming", "Database operations", "File operations"],
        correctAnswer: 1
      },
      {
        id: "py_a_9",
        question: "What is the difference between yield and return?",
        options: ["No difference", "yield creates generator, return exits function", "yield is faster", "return is safer"],
        correctAnswer: 1
      },
      {
        id: "py_a_10",
        question: "What is a context manager?",
        options: ["A manager", "An object that defines runtime context for executing a block", "A type of variable", "A built-in function"],
        correctAnswer: 1
      },
      {
        id: "py_a_11",
        question: "What is the purpose of __new__ method?",
        options: ["Initialize object", "Create new instance", "Delete object", "Copy object"],
        correctAnswer: 1
      },
      {
        id: "py_a_12",
        question: "What is method resolution order (MRO)?",
        options: ["Method calling order", "Order in which methods are resolved in inheritance", "Method definition order", "Method execution order"],
        correctAnswer: 1
      },
      {
        id: "py_a_13",
        question: "What is the difference between multiprocessing and threading?",
        options: ["No difference", "Multiprocessing uses separate processes, threading uses threads within process", "Threading is faster", "Multiprocessing is safer"],
        correctAnswer: 1
      },
      {
        id: "py_a_14",
        question: "What is a closure in Python?",
        options: ["Ending a program", "Function that captures variables from enclosing scope", "A type of loop", "Error handling"],
        correctAnswer: 1
      },
      {
        id: "py_a_15",
        question: "What is the purpose of the 'nonlocal' keyword?",
        options: ["Access global variables", "Access variables in enclosing scope", "Create new variables", "Delete variables"],
        correctAnswer: 1
      },
      {
        id: "py_a_16",
        question: "What is duck typing?",
        options: ["Type of animal", "If it walks like a duck and quacks like a duck, it's a duck", "Type checking", "Error handling"],
        correctAnswer: 1
      },
      {
        id: "py_a_17",
        question: "What is the difference between __str__ and __repr__?",
        options: ["No difference", "__str__ for users, __repr__ for developers", "__repr__ is faster", "__str__ is safer"],
        correctAnswer: 1
      },
      {
        id: "py_a_18",
        question: "What is a namespace in Python?",
        options: ["A space for names", "A mapping from names to objects", "A type of variable", "A built-in function"],
        correctAnswer: 1
      },
      {
        id: "py_a_19",
        question: "What is the purpose of the 'global' keyword?",
        options: ["Create global variables", "Access global variables in function", "Delete global variables", "Check global variables"],
        correctAnswer: 1
      },
      {
        id: "py_a_20",
        question: "What is memory management in Python?",
        options: ["Manual memory allocation", "Automatic memory management with garbage collection", "No memory management", "Fixed memory allocation"],
        correctAnswer: 1
      }
    ],
    recommendations: {
      lowScore: languageResources["Python"] || [],
      mediumScore: languageResources["Python"] || [],
      highScore: languageResources["Python"] || []
    }
  },

  // JavaScript Programming Quizzes
  {
    id: "javascript_basic",
    title: "JavaScript Programming - Basic",
    description: "Test your knowledge of JavaScript programming fundamentals",
    skillCategory: "Programming Languages",
    difficulty: "beginner",
    questions: [
      {
        id: "js_b_1",
        question: "How do you declare a variable in JavaScript?",
        options: ["var x;", "variable x;", "v x;", "declare x;"],
        correctAnswer: 0
      },
      {
        id: "js_b_2",
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "add()", "append()", "insert()"],
        correctAnswer: 0
      },
      {
        id: "js_b_3",
        question: "How do you create a function in JavaScript?",
        options: ["function myFunc() {}", "create myFunc() {}", "func myFunc() {}", "def myFunc() {}"],
        correctAnswer: 0
      },
      {
        id: "js_b_4",
        question: "Which operator is used for strict equality?",
        options: ["=", "==", "===", "equals"],
        correctAnswer: 2
      },
      {
        id: "js_b_5",
        question: "How do you write a comment in JavaScript?",
        options: ["# comment", "// comment", "<!-- comment -->", "/* comment */"],
        correctAnswer: 1
      },
      {
        id: "js_b_6",
        question: "Which method is used to remove the last element from an array?",
        options: ["pop()", "remove()", "delete()", "splice()"],
        correctAnswer: 0
      },
      {
        id: "js_b_7",
        question: "What is the correct way to create an object?",
        options: ["var obj = {};", "var obj = [];", "var obj = ();", "var obj = <>;"],
        correctAnswer: 0
      },
      {
        id: "js_b_8",
        question: "Which keyword is used to define a constant?",
        options: ["const", "constant", "final", "static"],
        correctAnswer: 0
      },
      {
        id: "js_b_9",
        question: "How do you access a property of an object?",
        options: ["obj.property", "obj->property", "obj[property]", "Both A and C"],
        correctAnswer: 3
      },
      {
        id: "js_b_10",
        question: "Which method converts a string to uppercase?",
        options: ["toUpper()", "toUpperCase()", "upper()", "upperCase()"],
        correctAnswer: 1
      },
      {
        id: "js_b_11",
        question: "What is the result of typeof null?",
        options: ["null", "undefined", "object", "boolean"],
        correctAnswer: 2
      },
      {
        id: "js_b_12",
        question: "Which loop is used to iterate over object properties?",
        options: ["for loop", "while loop", "for...in loop", "do...while loop"],
        correctAnswer: 2
      }
    ],
    recommendations: {
      lowScore: languageResources["JavaScript"] || [],
      mediumScore: languageResources["JavaScript"] || [],
      highScore: languageResources["JavaScript"] || []
    }
  },

  // Java Programming Quizzes
  {
    id: "java_basic", 
    title: "Java Programming - Basic",
    description: "Test your knowledge of Java programming fundamentals",
    skillCategory: "Programming Languages",
    difficulty: "beginner",
    questions: [
      {
        id: "java_b_1",
        question: "Which keyword is used to define a class in Java?",
        options: ["class", "Class", "define", "create"],
        correctAnswer: 0
      },
      {
        id: "java_b_2",
        question: "What is the entry point of a Java program?",
        options: ["start()", "begin()", "main()", "init()"],
        correctAnswer: 2
      },
      {
        id: "java_b_3",
        question: "Which access modifier makes a member accessible only within the same class?",
        options: ["public", "private", "protected", "default"],
        correctAnswer: 1
      },
      {
        id: "java_b_4",
        question: "How do you create an object in Java?",
        options: ["new Object()", "Object obj = new Object();", "create Object();", "Object obj = Object();"],
        correctAnswer: 1
      },
      {
        id: "java_b_5",
        question: "Which keyword is used to inherit from a class?",
        options: ["inherits", "extends", "implements", "derives"],
        correctAnswer: 1
      },
      {
        id: "java_b_6",
        question: "What is the correct way to declare a method in Java?",
        options: ["public void method() {}", "void public method() {}", "method() public void {}", "public method() void {}"],
        correctAnswer: 0
      },
      {
        id: "java_b_7",
        question: "Which primitive data type is used to store true/false values?",
        options: ["bool", "boolean", "bit", "flag"],
        correctAnswer: 1
      },
      {
        id: "java_b_8",
        question: "How do you create a single-line comment in Java?",
        options: ["# comment", "// comment", "<!-- comment -->", "-- comment"],
        correctAnswer: 1
      },
      {
        id: "java_b_9",
        question: "Which method is used to get the length of a string?",
        options: ["length()", "size()", "len()", "count()"],
        correctAnswer: 0
      },
      {
        id: "java_b_10",
        question: "What is the superclass of all classes in Java?",
        options: ["Class", "Object", "Super", "Base"],
        correctAnswer: 1
      },
      {
        id: "java_b_11",
        question: "Which keyword is used to prevent inheritance?",
        options: ["final", "static", "private", "sealed"],
        correctAnswer: 0
      },
      {
        id: "java_b_12",
        question: "What is the default value of an int variable?",
        options: ["null", "0", "-1", "undefined"],
        correctAnswer: 1
      }
    ],
    recommendations: {
      lowScore: [],
      mediumScore: [],
      highScore: []
    }
  },

  // HTML Basic Quiz
  {
    id: "html_basic",
    title: "HTML - Basic",
    description: "Test your knowledge of HTML fundamentals",
    skillCategory: "Web Development",
    difficulty: "beginner", 
    questions: [
      {
        id: "html_b_1",
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Markup Language"],
        correctAnswer: 0
      },
      {
        id: "html_b_2",
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1
      },
      {
        id: "html_b_3",
        question: "Which tag is used to display an image?",
        options: ["<image>", "<img>", "<picture>", "<photo>"],
        correctAnswer: 1
      },
      {
        id: "html_b_4",
        question: "Which tag defines the largest heading?",
        options: ["<h1>", "<h6>", "<heading>", "<header>"],
        correctAnswer: 0
      },
      {
        id: "html_b_5",
        question: "Which attribute specifies the URL of a link?",
        options: ["src", "href", "link", "url"],
        correctAnswer: 1
      },
      {
        id: "html_b_6",
        question: "Which tag is used to create a paragraph?",
        options: ["<p>", "<para>", "<paragraph>", "<text>"],
        correctAnswer: 0
      },
      {
        id: "html_b_7",
        question: "Which tag is used to create a line break?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        correctAnswer: 1
      },
      {
        id: "html_b_8",
        question: "Which tag is used to create an unordered list?",
        options: ["<ol>", "<ul>", "<list>", "<li>"],
        correctAnswer: 1
      },
      {
        id: "html_b_9",
        question: "Which tag is used to make text bold?",
        options: ["<bold>", "<b>", "<strong>", "Both B and C"],
        correctAnswer: 3
      },
      {
        id: "html_b_10",
        question: "Which tag defines the document type?",
        options: ["<!DOCTYPE>", "<doctype>", "<document>", "<type>"],
        correctAnswer: 0
      },
      {
        id: "html_b_11",
        question: "Which tag contains metadata about the document?",
        options: ["<meta>", "<head>", "<header>", "<info>"],
        correctAnswer: 1
      },
      {
        id: "html_b_12",
        question: "Which tag is used to create a table?",
        options: ["<table>", "<tab>", "<grid>", "<data>"],
        correctAnswer: 0
      }
    ],
    recommendations: {
      lowScore: [],
      mediumScore: [],
      highScore: []
    }
  },

  // CSS Basic Quiz
  {
    id: "css_basic",
    title: "CSS - Basic", 
    description: "Test your knowledge of CSS fundamentals",
    skillCategory: "Web Development",
    difficulty: "beginner",
    questions: [
      {
        id: "css_b_1",
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 0
      },
      {
        id: "css_b_2",
        question: "Which property is used to change the background color?",
        options: ["color", "background-color", "bg-color", "bgcolor"],
        correctAnswer: 1
      },
      {
        id: "css_b_3",
        question: "Which property is used to change the text color?",
        options: ["text-color", "font-color", "color", "foreground"],
        correctAnswer: 2
      },
      {
        id: "css_b_4",
        question: "How do you select an element with id 'myId'?",
        options: [".myId", "#myId", "*myId", "myId"],
        correctAnswer: 1
      },
      {
        id: "css_b_5",
        question: "How do you select an element with class 'myClass'?",
        options: [".myClass", "#myClass", "*myClass", "myClass"],
        correctAnswer: 0
      },
      {
        id: "css_b_6",
        question: "Which property is used to change the font size?",
        options: ["text-size", "font-size", "size", "text-height"],
        correctAnswer: 1
      },
      {
        id: "css_b_7",
        question: "Which property is used to make text bold?",
        options: ["font-style", "text-weight", "font-weight", "text-style"],
        correctAnswer: 2
      },
      {
        id: "css_b_8",
        question: "Which property is used to center text?",
        options: ["text-align", "text-center", "align", "center"],
        correctAnswer: 0
      },
      {
        id: "css_b_9",
        question: "Which property is used to add space inside an element?",
        options: ["margin", "padding", "spacing", "border"],
        correctAnswer: 1
      },
      {
        id: "css_b_10",
        question: "Which property is used to add space outside an element?",
        options: ["margin", "padding", "spacing", "border"],
        correctAnswer: 0
      },
      {
        id: "css_b_11",
        question: "Which property is used to hide an element?",
        options: ["visibility: hidden", "display: none", "hide: true", "Both A and B"],
        correctAnswer: 3
      },
      {
        id: "css_b_12",
        question: "Which CSS property controls the width of an element?",
        options: ["width", "size", "length", "dimension"],
        correctAnswer: 0
      }
    ],
    recommendations: {
      lowScore: [],
      mediumScore: [],
      highScore: []
    }
  },

  // SQL Basic Quiz
  {
    id: "sql_basic",
    title: "SQL - Basic",
    description: "Test your knowledge of SQL fundamentals",
    skillCategory: "Database",
    difficulty: "beginner",
    questions: [
      {
        id: "sql_b_1",
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
        correctAnswer: 0
      },
      {
        id: "sql_b_2",
        question: "Which command is used to retrieve data from a database?",
        options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
        correctAnswer: 1
      },
      {
        id: "sql_b_3",
        question: "Which command is used to add new data to a table?",
        options: ["ADD", "INSERT", "CREATE", "PUT"],
        correctAnswer: 1
      },
      {
        id: "sql_b_4",
        question: "Which command is used to modify existing data?",
        options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
        correctAnswer: 2
      },
      {
        id: "sql_b_5",
        question: "Which command is used to remove data from a table?",
        options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
        correctAnswer: 1
      },
      {
        id: "sql_b_6",
        question: "Which clause is used to filter records?",
        options: ["FILTER", "WHERE", "HAVING", "IF"],
        correctAnswer: 1
      },
      {
        id: "sql_b_7",
        question: "Which clause is used to sort records?",
        options: ["SORT", "ORDER BY", "ARRANGE", "ORGANIZE"],
        correctAnswer: 1
      },
      {
        id: "sql_b_8",
        question: "Which operator is used for pattern matching?",
        options: ["MATCH", "LIKE", "SIMILAR", "PATTERN"],
        correctAnswer: 1
      },
      {
        id: "sql_b_9",
        question: "Which keyword is used to eliminate duplicate records?",
        options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SEPARATE"],
        correctAnswer: 1
      },
      {
        id: "sql_b_10",
        question: "Which command is used to create a new table?",
        options: ["CREATE TABLE", "MAKE TABLE", "NEW TABLE", "BUILD TABLE"],
        correctAnswer: 0
      },
      {
        id: "sql_b_11",
        question: "Which data type is used to store text?",
        options: ["TEXT", "VARCHAR", "STRING", "Both A and B"],
        correctAnswer: 3
      },
      {
        id: "sql_b_12",
        question: "Which constraint ensures that a column cannot be NULL?",
        options: ["NOT NULL", "REQUIRED", "MANDATORY", "ESSENTIAL"],
        correctAnswer: 0
      }
    ],
    recommendations: {
      lowScore: [],
      mediumScore: [],
      highScore: []
    }
  },

  // C++ Basic Quiz
  {
    id: "cpp_basic",
    title: "C++ Programming - Basic",
    description: "Test your knowledge of C++ programming fundamentals",
    skillCategory: "Programming Languages",
    difficulty: "beginner",
    questions: [
      {
        id: "cpp_b_1",
        question: "Which header file is required for input/output operations?",
        options: ["<stdio.h>", "<iostream>", "<io.h>", "<input.h>"],
        correctAnswer: 1
      },
      {
        id: "cpp_b_2",
        question: "Which operator is used for output in C++?",
        options: [">>", "<<", "->", "<>"],
        correctAnswer: 1
      },
      {
        id: "cpp_b_3",
        question: "Which operator is used for input in C++?",
        options: [">>", "<<", "->", "<>"],
        correctAnswer: 0
      },
      {
        id: "cpp_b_4",
        question: "How do you declare a variable in C++?",
        options: ["var x;", "int x;", "variable x;", "declare x;"],
        correctAnswer: 1
      },
      {
        id: "cpp_b_5",
        question: "Which keyword is used to define a class?",
        options: ["class", "struct", "object", "define"],
        correctAnswer: 0
      },
      {
        id: "cpp_b_6",
        question: "What is the correct way to create a comment in C++?",
        options: ["# comment", "// comment", "/* comment */", "Both B and C"],
        correctAnswer: 3
      },
      {
        id: "cpp_b_7",
        question: "Which access specifier is the default for class members?",
        options: ["public", "private", "protected", "default"],
        correctAnswer: 1
      },
      {
        id: "cpp_b_8",
        question: "What is the entry point of a C++ program?",
        options: ["start()", "begin()", "main()", "init()"],
        correctAnswer: 2
      },
      {
        id: "cpp_b_9",
        question: "Which keyword is used to inherit from a class?",
        options: ["inherits", "extends", ":", "derives"],
        correctAnswer: 2
      },
      {
        id: "cpp_b_10",
        question: "Which operator is used to access class members through an object?",
        options: [".", "->", "::", "*"],
        correctAnswer: 0
      },
      {
        id: "cpp_b_11",
        question: "What is a constructor?",
        options: ["A destructor", "A special method called when object is created", "A variable", "A function"],
        correctAnswer: 1
      },
      {
        id: "cpp_b_12",
        question: "Which symbol is used for scope resolution?",
        options: ["::", ".", "->", "*"],
        correctAnswer: 0
      }
    ],
    recommendations: {
      lowScore: languageResources["C++"] || [],
      mediumScore: languageResources["C++"] || [],
      highScore: languageResources["C++"] || []
    }
  },

  // Data Structures Basic Quiz
  {
    id: "ds_basic",
    title: "Data Structures - Basic",
    description: "Test your knowledge of basic data structures",
    skillCategory: "Computer Science",
    difficulty: "beginner",
    questions: [
      {
        id: "ds_b_1",
        question: "What is an array?",
        options: ["A single variable", "Collection of similar data types", "A function", "A class"],
        correctAnswer: 1
      },
      {
        id: "ds_b_2",
        question: "What is a linked list?",
        options: ["Array of pointers", "Linear data structure with nodes", "Tree structure", "Graph structure"],
        correctAnswer: 1
      },
      {
        id: "ds_b_3",
        question: "What is a stack?",
        options: ["FIFO structure", "LIFO structure", "Random access structure", "Tree structure"],
        correctAnswer: 1
      },
      {
        id: "ds_b_4",
        question: "What is a queue?",
        options: ["FIFO structure", "LIFO structure", "Random access structure", "Tree structure"],
        correctAnswer: 0
      },
      {
        id: "ds_b_5",
        question: "Which operation adds an element to a stack?",
        options: ["push", "pop", "enqueue", "dequeue"],
        correctAnswer: 0
      },
      {
        id: "ds_b_6",
        question: "Which operation removes an element from a stack?",
        options: ["push", "pop", "enqueue", "dequeue"],
        correctAnswer: 1
      },
      {
        id: "ds_b_7",
        question: "Which operation adds an element to a queue?",
        options: ["push", "pop", "enqueue", "dequeue"],
        correctAnswer: 2
      },
      {
        id: "ds_b_8",
        question: "Which operation removes an element from a queue?",
        options: ["push", "pop", "enqueue", "dequeue"],
        correctAnswer: 3
      },
      {
        id: "ds_b_9",
        question: "What is the time complexity for accessing an element in an array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 0
      },
      {
        id: "ds_b_10",
        question: "What is a binary tree?",
        options: ["Tree with 2 nodes", "Tree where each node has at most 2 children", "Tree with 2 levels", "Tree with binary data"],
        correctAnswer: 1
      },
      {
        id: "ds_b_11",
        question: "What is the root node in a tree?",
        options: ["Last node", "First node", "Middle node", "Top node with no parent"],
        correctAnswer: 3
      },
      {
        id: "ds_b_12",
        question: "What is a leaf node?",
        options: ["Root node", "Node with no children", "Node with one child", "Node with two children"],
        correctAnswer: 1
      }
    ],
    recommendations: {
      lowScore: [],
      mediumScore: [],
      highScore: []
    }
  },

  // NoSQL Basic Quiz
  {
    id: "nosql_basic", 
    title: "NoSQL - Basic",
    description: "Test your knowledge of NoSQL database fundamentals",
    skillCategory: "Database",
    difficulty: "beginner",
    questions: [
      {
        id: "nosql_b_1",
        question: "What does NoSQL stand for?",
        options: ["Not Only SQL", "No SQL", "New SQL", "Non SQL"],
        correctAnswer: 0
      },
      {
        id: "nosql_b_2",
        question: "Which of these is a document database?",
        options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
        correctAnswer: 1
      },
      {
        id: "nosql_b_3",
        question: "What is a key-value store?",
        options: ["Database that stores data as key-value pairs", "Relational database", "Graph database", "Column database"],
        correctAnswer: 0
      },
      {
        id: "nosql_b_4",
        question: "Which of these is a key-value database?",
        options: ["MongoDB", "MySQL", "Redis", "PostgreSQL"],
        correctAnswer: 2
      },
      {
        id: "nosql_b_5",
        question: "What is a document in MongoDB?",
        options: ["A file", "A BSON object", "A table", "A row"],
        correctAnswer: 1
      },
      {
        id: "nosql_b_6",
        question: "What is a collection in MongoDB?",
        options: ["A database", "Group of documents", "A table", "A row"],
        correctAnswer: 1
      },
      {
        id: "nosql_b_7",
        question: "Which query language does MongoDB use?",
        options: ["SQL", "MQL", "NoQL", "JSON"],
        correctAnswer: 1
      },
      {
        id: "nosql_b_8",
        question: "What is the main advantage of NoSQL databases?",
        options: ["ACID properties", "Scalability and flexibility", "SQL compatibility", "Normalization"],
        correctAnswer: 1
      },
      {
        id: "nosql_b_9",
        question: "Which type of NoSQL database is best for social networks?",
        options: ["Document", "Key-value", "Graph", "Column"],
        correctAnswer: 2
      },
      {
        id: "nosql_b_10",
        question: "What is horizontal scaling?",
        options: ["Adding more power to existing server", "Adding more servers", "Upgrading hardware", "Optimizing queries"],
        correctAnswer: 1
      },
      {
        id: "nosql_b_11",
        question: "What does CAP theorem stand for?",
        options: ["Consistency, Availability, Partition tolerance", "Create, Access, Process", "Cache, API, Performance", "Capacity, Access, Performance"],
        correctAnswer: 0
      },
      {
        id: "nosql_b_12",
        question: "Which of these is a graph database?",
        options: ["MongoDB", "Redis", "Neo4j", "Cassandra"],
        correctAnswer: 2
      }
    ],
    recommendations: {
      lowScore: [],
      mediumScore: [],
      highScore: []
    }
  }
];
