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
  // C Programming Quizzes - Basic (21 questions with explanations)
  {
    id: "c_basic",
    title: "C Programming - Basic",
    description: "Test your knowledge of C programming fundamentals",
    skillCategory: "Programming Languages",
    difficulty: "beginner",
    questions: [
      {
        id: "c_b_1",
        question: "What is the correct syntax to include a standard header file?",
        options: ["#import <stdio.h>", "#include <stdio.h>", "include <stdio.h>", "#using <stdio.h>"],
        correctAnswer: 1,
        explanation: {
          correct: "#include <stdio.h> is the standard syntax for including a library in C.",
          why_others_wrong: [
            "#import <stdio.h> - import is not valid in C",
            "include <stdio.h> - missing the # preprocessor symbol", 
            "#using <stdio.h> - using is not valid in C"
          ]
        }
      },
      {
        id: "c_b_2",
        question: "Which of the following is a valid variable name in C?",
        options: ["1value", "value_1", "@value", "int"],
        correctAnswer: 1,
        explanation: {
          correct: "value_1 is a valid variable name as it starts with a letter or underscore.",
          why_others_wrong: [
            "1value - cannot start with a digit",
            "@value - @ is not allowed in variable names",
            "int - this is a reserved keyword"
          ]
        }
      },
      {
        id: "c_b_3",
        question: "Which format specifier is used to print an integer?",
        options: ["%s", "%d", "%c", "%f"],
        correctAnswer: 1,
        explanation: {
          correct: "%d is used to print integers in C.",
          why_others_wrong: [
            "%s - used for strings",
            "%c - used for characters",
            "%f - used for floating-point numbers"
          ]
        }
      },
      {
        id: "c_b_4",
        question: "What is the default return type of the main function?",
        options: ["float", "void", "char", "int"],
        correctAnswer: 3,
        explanation: {
          correct: "The default return type of main is int in C.",
          why_others_wrong: [
            "float - main cannot return a float",
            "void - main must return an integer",
            "char - main cannot return a char"
          ]
        }
      },
      {
        id: "c_b_5",
        question: "Which keyword is used to declare a variable in C?",
        options: ["int", "define", "include", "main"],
        correctAnswer: 0,
        explanation: {
          correct: "int is used to declare integer variables in C.",
          why_others_wrong: [
            "define - used for macros",
            "include - used for including header files",
            "main - this is the entry point of the program"
          ]
        }
      },
      {
        id: "c_b_6",
        question: "Which operator is used to assign a value?",
        options: ["==", "=", "!=", ":="],
        correctAnswer: 1,
        explanation: {
          correct: "= is the assignment operator in C.",
          why_others_wrong: [
            "== - used for comparison",
            "!= - used for inequality comparison",
            ":= - not used in C"
          ]
        }
      },
      {
        id: "c_b_7",
        question: "Which symbol is used for a single-line comment?",
        options: ["/*", "#", "//", "**"],
        correctAnswer: 2,
        explanation: {
          correct: "// is used for single-line comments in C.",
          why_others_wrong: [
            "/* - used for multi-line comments",
            "# - not used in C",
            "** - not a valid comment syntax"
          ]
        }
      },
      {
        id: "c_b_8",
        question: "Which function is used to print to the console?",
        options: ["read()", "print()", "printf()", "write()"],
        correctAnswer: 2,
        explanation: {
          correct: "printf() is the standard function to print output in C.",
          why_others_wrong: [
            "read() - not a standard output function",
            "print() - not a standard C function",
            "write() - used for low-level output"
          ]
        }
      },
      {
        id: "c_b_9",
        question: "What is the output of printf(\"%d\", 10/3);?",
        options: ["3.33", "3", "0", "3.0"],
        correctAnswer: 1,
        explanation: {
          correct: "printf prints the integer part of the division, which is 3.",
          why_others_wrong: [
            "3.33 - this would be the floating-point result",
            "0 - incorrect, as 10/3 is greater than 0",
            "3.0 - printf does not print decimals with %d"
          ]
        }
      },
      {
        id: "c_b_10",
        question: "What is the size of an int on a 32-bit system?",
        options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
        correctAnswer: 1,
        explanation: {
          correct: "An int typically occupies 4 bytes on a 32-bit system.",
          why_others_wrong: [
            "2 bytes - this is the size of a short int",
            "8 bytes - this is the size of a long long int",
            "1 byte - this is the size of a char"
          ]
        }
      },
      {
        id: "c_b_11",
        question: "Which of the following is not a data type in C?",
        options: ["int", "char", "float", "real"],
        correctAnswer: 3,
        explanation: {
          correct: "real is not a standard data type in C.",
          why_others_wrong: [
            "int - a standard integer type",
            "char - a standard character type",
            "float - a standard floating-point type"
          ]
        }
      },
      {
        id: "c_b_12",
        question: "Which escape sequence represents a new line?",
        options: ["\\t", "\\n", "\\b", "\\a"],
        correctAnswer: 1,
        explanation: {
          correct: "\\n is the escape sequence for a new line.",
          why_others_wrong: [
            "\\t - represents a tab character",
            "\\b - represents a backspace",
            "\\a - represents an alert (bell) character"
          ]
        }
      },
      {
        id: "c_b_13",
        question: "How is a string represented in C?",
        options: ["char*", "Array of characters ending with \\0", "int[]", "char**"],
        correctAnswer: 1,
        explanation: {
          correct: "Strings in C are represented as arrays of characters ending with a null terminator \\0.",
          why_others_wrong: [
            "char* - this is a pointer to a character, not a string representation",
            "int[] - this is an array of integers, not characters",
            "char** - this is a pointer to a pointer, not a string"
          ]
        }
      },
      {
        id: "c_b_14",
        question: "What is the value of 5 % 2?",
        options: ["2", "1", "0", "2.5"],
        correctAnswer: 1,
        explanation: {
          correct: "5 % 2 gives the remainder of the division, which is 1.",
          why_others_wrong: [
            "2 - this is the quotient, not the remainder",
            "0 - incorrect, as there is a remainder",
            "2.5 - not applicable for integer division"
          ]
        }
      },
      {
        id: "c_b_15",
        question: "Which operator is used to access the value of a pointer?",
        options: ["&", "*", "@", "#"],
        correctAnswer: 1,
        explanation: {
          correct: "* is the dereference operator used to access the value at the pointer's address.",
          why_others_wrong: [
            "& - this is the address-of operator",
            "@ - not used in C",
            "# - not used in C"
          ]
        }
      },
      {
        id: "c_b_16",
        question: "Which header is used for input/output operations?",
        options: ["math.h", "stdio.h", "string.h", "stdlib.h"],
        correctAnswer: 1,
        explanation: {
          correct: "stdio.h is the standard header for input/output operations in C.",
          why_others_wrong: [
            "math.h - used for mathematical functions",
            "string.h - used for string handling functions",
            "stdlib.h - used for general utility functions"
          ]
        }
      },
      {
        id: "c_b_17",
        question: "What is the output of printf(\"%c\", 65);?",
        options: ["65", "A", "Error", "a"],
        correctAnswer: 1,
        explanation: {
          correct: "65 corresponds to the ASCII value of 'A'.",
          why_others_wrong: [
            "65 - this is the integer value, not the character",
            "Error - printf works correctly with %c",
            "a - 97 is the ASCII value for 'a'"
          ]
        }
      },
      {
        id: "c_b_18",
        question: "What is the result of sizeof(char)?",
        options: ["2", "4", "1", "8"],
        correctAnswer: 2,
        explanation: {
          correct: "sizeof(char) is always 1 byte in C.",
          why_others_wrong: [
            "2 - this is the size of a short int",
            "4 - this is the size of an int",
            "8 - this is the size of a long long int"
          ]
        }
      },
      {
        id: "c_b_19",
        question: "Which keyword is used to define constants?",
        options: ["const", "define", "final", "static"],
        correctAnswer: 0,
        explanation: {
          correct: "const is used to define constant variables in C.",
          why_others_wrong: [
            "define - used for macros, not variables",
            "final - not a keyword in C",
            "static - used for static variables, not constants"
          ]
        }
      },
      {
        id: "c_b_20",
        question: "Which function reads input from the user?",
        options: ["printf()", "getchar()", "scanf()", "puts()"],
        correctAnswer: 2,
        explanation: {
          correct: "scanf() is used to read formatted input from the user.",
          why_others_wrong: [
            "printf() - used for output, not input",
            "getchar() - reads a single character, not formatted input",
            "puts() - used for outputting strings"
          ]
        }
      },
      {
        id: "c_b_21",
        question: "Which of the following is a loop structure?",
        options: ["switch", "for", "case", "break"],
        correctAnswer: 1,
        explanation: {
          correct: "for is a loop structure used for iteration.",
          why_others_wrong: [
            "switch - used for multi-way branching",
            "case - part of switch statements, not a loop",
            "break - used to exit loops or switch statements"
          ]
        }
      }
    ],
    recommendations: {
      lowScore: languageResources["C"] || [],
      mediumScore: languageResources["C"] || [],
      highScore: languageResources["C"] || []
    }
  },

  // Python Programming Quizzes - Basic (21 questions with explanations)
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
        correctAnswer: 1,
        explanation: {
          correct: "def is the keyword used to define functions in Python.",
          why_others_wrong: [
            "function - not a Python keyword",
            "func - not a Python keyword",
            "define - this is a preprocessor directive in C, not Python"
          ]
        }
      },
      {
        id: "py_b_2",
        question: "How do you create a comment in Python?",
        options: ["// comment", "# comment", "/* comment */", "-- comment"],
        correctAnswer: 1,
        explanation: {
          correct: "# is used for single-line comments in Python.",
          why_others_wrong: [
            "// comment - used in C/C++/Java/JavaScript",
            "/* comment */ - used for multi-line comments in C/Java",
            "-- comment - used in SQL"
          ]
        }
      },
      {
        id: "py_b_3",
        question: "Which data type is used to store text in Python?",
        options: ["text", "string", "str", "char"],
        correctAnswer: 2,
        explanation: {
          correct: "str is the string data type in Python for storing text.",
          why_others_wrong: [
            "text - not a Python data type",
            "string - not the correct Python type name",
            "char - used for single characters in C, not Python"
          ]
        }
      },
      {
        id: "py_b_4",
        question: "What is the correct way to create a list in Python?",
        options: ["list = {1, 2, 3}", "list = [1, 2, 3]", "list = (1, 2, 3)", "list = <1, 2, 3>"],
        correctAnswer: 1,
        explanation: {
          correct: "Square brackets [] are used to create lists in Python.",
          why_others_wrong: [
            "list = {1, 2, 3} - curly braces create sets or dictionaries",
            "list = (1, 2, 3) - parentheses create tuples",
            "list = <1, 2, 3> - angle brackets not used in Python"
          ]
        }
      },
      {
        id: "py_b_5",
        question: "Which method is used to add an element to the end of a list?",
        options: ["add()", "append()", "insert()", "push()"],
        correctAnswer: 1,
        explanation: {
          correct: "append() adds an element to the end of a list.",
          why_others_wrong: [
            "add() - not a list method",
            "insert() - adds at a specific position, not necessarily the end",
            "push() - not used in Python"
          ]
        }
      },
      {
        id: "py_b_6",
        question: "What is the output of print(3 ** 2)?",
        options: ["6", "9", "32", "Error"],
        correctAnswer: 1,
        explanation: {
          correct: "** is the exponentiation operator, so 3 ** 2 = 9.",
          why_others_wrong: [
            "6 - this would be 3 * 2",
            "32 - this would be string concatenation",
            "Error - ** is a valid operator in Python"
          ]
        }
      },
      {
        id: "py_b_7",
        question: "Which keyword is used to create a loop that runs while a condition is true?",
        options: ["for", "while", "loop", "repeat"],
        correctAnswer: 1,
        explanation: {
          correct: "while creates a loop that continues while a condition is true.",
          why_others_wrong: [
            "for - used for iterating over sequences",
            "loop - not a Python keyword",
            "repeat - not a Python keyword"
          ]
        }
      },
      {
        id: "py_b_8",
        question: "How do you get the length of a list?",
        options: ["length(list)", "len(list)", "size(list)", "count(list)"],
        correctAnswer: 1,
        explanation: {
          correct: "len() function returns the length of a sequence like lists, strings, etc.",
          why_others_wrong: [
            "length(list) - not a Python function",
            "size(list) - not a Python function",
            "count(list) - count() is a method but counts occurrences, not length"
          ]
        }
      },
      {
        id: "py_b_9",
        question: "What is the correct syntax for an if statement?",
        options: ["if x = 5:", "if (x == 5):", "if x == 5:", "if x equals 5:"],
        correctAnswer: 2,
        explanation: {
          correct: "if x == 5: is correct Python syntax with == for comparison and : for the statement.",
          why_others_wrong: [
            "if x = 5: - uses assignment = instead of comparison ==",
            "if (x == 5): - parentheses are optional in Python",
            "if x equals 5: - 'equals' is not a Python operator"
          ]
        }
      },
      {
        id: "py_b_10",
        question: "Which operator is used for equality comparison?",
        options: ["=", "==", "===", "eq"],
        correctAnswer: 1,
        explanation: {
          correct: "== is the equality comparison operator in Python.",
          why_others_wrong: [
            "= - assignment operator",
            "=== - used in JavaScript for strict equality, not Python",
            "eq - not an operator in Python"
          ]
        }
      },
      {
        id: "py_b_11",
        question: "What is the correct way to import a module?",
        options: ["include module", "import module", "using module", "require module"],
        correctAnswer: 1,
        explanation: {
          correct: "import is the keyword used to import modules in Python.",
          why_others_wrong: [
            "include module - used in C preprocessor",
            "using module - used in C#",
            "require module - used in Node.js"
          ]
        }
      },
      {
        id: "py_b_12",
        question: "Which function is used to get input from the user?",
        options: ["input()", "get()", "read()", "scan()"],
        correctAnswer: 0,
        explanation: {
          correct: "input() function reads a line from input and returns it as a string.",
          why_others_wrong: [
            "get() - not a built-in input function",
            "read() - used for file operations",
            "scan() - not a Python function"
          ]
        }
      },
      {
        id: "py_b_13",
        question: "What is the correct way to create a dictionary?",
        options: ["dict = [key: value]", "dict = {key: value}", "dict = (key: value)", "dict = <key: value>"],
        correctAnswer: 1,
        explanation: {
          correct: "Curly braces {} with key: value pairs create dictionaries.",
          why_others_wrong: [
            "dict = [key: value] - square brackets are for lists",
            "dict = (key: value) - parentheses are for tuples",
            "dict = <key: value> - angle brackets not used in Python"
          ]
        }
      },
      {
        id: "py_b_14",
        question: "Which method removes an item from a list by index?",
        options: ["remove()", "pop()", "delete()", "del()"],
        correctAnswer: 1,
        explanation: {
          correct: "pop() removes and returns an item at a given index.",
          why_others_wrong: [
            "remove() - removes by value, not index",
            "delete() - not a list method",
            "del() - not a method, del is a statement"
          ]
        }
      },
      {
        id: "py_b_15",
        question: "What is the output of print(type(5))?",
        options: ["int", "<class 'int'>", "integer", "number"],
        correctAnswer: 1,
        explanation: {
          correct: "type() function returns the class type, displayed as <class 'int'>.",
          why_others_wrong: [
            "int - this is just the type name, not the full output",
            "integer - not the Python type name",
            "number - not a specific Python type"
          ]
        }
      },
      {
        id: "py_b_16",
        question: "Which keyword is used to create a class?",
        options: ["class", "Class", "define", "object"],
        correctAnswer: 0,
        explanation: {
          correct: "class keyword is used to define a class in Python.",
          why_others_wrong: [
            "Class - Python is case-sensitive, must be lowercase",
            "define - not used for classes",
            "object - built-in base class, not a keyword for creating classes"
          ]
        }
      },
      {
        id: "py_b_17",
        question: "What is the correct way to check if a key exists in a dictionary?",
        options: ["if key exists dict:", "if key in dict:", "if dict.has(key):", "if dict.contains(key):"],
        correctAnswer: 1,
        explanation: {
          correct: "'in' operator checks if a key exists in a dictionary.",
          why_others_wrong: [
            "if key exists dict: - 'exists' is not a Python operator",
            "if dict.has(key): - has() is not a dictionary method",
            "if dict.contains(key): - contains() is not a dictionary method"
          ]
        }
      },
      {
        id: "py_b_18",
        question: "Which operator is used for string concatenation?",
        options: ["+", "&", ".", "concat"],
        correctAnswer: 0,
        explanation: {
          correct: "+ operator concatenates strings in Python.",
          why_others_wrong: [
            "& - used for bitwise AND operations",
            ". - used for accessing attributes/methods",
            "concat - not an operator, though some languages have concat functions"
          ]
        }
      },
      {
        id: "py_b_19",
        question: "What is the correct way to create a tuple?",
        options: ["tuple = [1, 2, 3]", "tuple = {1, 2, 3}", "tuple = (1, 2, 3)", "tuple = <1, 2, 3>"],
        correctAnswer: 2,
        explanation: {
          correct: "Parentheses () create tuples in Python.",
          why_others_wrong: [
            "tuple = [1, 2, 3] - square brackets create lists",
            "tuple = {1, 2, 3} - curly braces create sets",
            "tuple = <1, 2, 3> - angle brackets not used in Python"
          ]
        }
      },
      {
        id: "py_b_20",
        question: "Which method converts a string to lowercase?",
        options: ["toLower()", "lower()", "lowercase()", "downcase()"],
        correctAnswer: 1,
        explanation: {
          correct: "lower() method converts string to lowercase.",
          why_others_wrong: [
            "toLower() - not a Python method",
            "lowercase() - not a Python method",
            "downcase() - used in other languages like Ruby"
          ]
        }
      },
      {
        id: "py_b_21",
        question: "What does the range(5) function return?",
        options: ["[0, 1, 2, 3, 4]", "A range object from 0 to 4", "[1, 2, 3, 4, 5]", "5"],
        correctAnswer: 1,
        explanation: {
          correct: "range(5) returns a range object that represents numbers from 0 to 4.",
          why_others_wrong: [
            "[0, 1, 2, 3, 4] - range returns a range object, not a list",
            "[1, 2, 3, 4, 5] - range starts from 0 by default and excludes the end",
            "5 - range doesn't return the number itself"
          ]
        }
      }
    ],
    recommendations: {
      lowScore: languageResources["Python"] || [],
      mediumScore: languageResources["Python"] || [],
      highScore: languageResources["Python"] || []
    }
  },

  // JavaScript Programming Quizzes - Basic (21 questions with explanations)
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
        correctAnswer: 0,
        explanation: {
          correct: "var, let, or const are used to declare variables in JavaScript.",
          why_others_wrong: [
            "variable x; - not a JavaScript keyword",
            "v x; - not valid syntax",
            "declare x; - not used for variable declaration"
          ]
        }
      },
      {
        id: "js_b_2",
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "add()", "append()", "insert()"],
        correctAnswer: 0,
        explanation: {
          correct: "push() adds an element to the end of an array.",
          why_others_wrong: [
            "add() - not a valid array method",
            "append() - not used in JavaScript",
            "insert() - not a valid array method"
          ]
        }
      },
      {
        id: "js_b_3",
        question: "How do you create a function in JavaScript?",
        options: ["function myFunc() {}", "create myFunc() {}", "func myFunc() {}", "def myFunc() {}"],
        correctAnswer: 0,
        explanation: {
          correct: "function myFunc() {} is the correct syntax to define a function.",
          why_others_wrong: [
            "create myFunc() {} - not valid syntax",
            "func myFunc() {} - not a valid keyword",
            "def myFunc() {} - used in Python, not JavaScript"
          ]
        }
      },
      {
        id: "js_b_4",
        question: "Which operator is used for strict equality?",
        options: ["=", "==", "===", "equals"],
        correctAnswer: 2,
        explanation: {
          correct: "=== checks for both value and type equality.",
          why_others_wrong: [
            "= - assignment operator",
            "== - checks for value equality only",
            "equals - not a valid operator in JavaScript"
          ]
        }
      },
      {
        id: "js_b_5",
        question: "How do you write a comment in JavaScript?",
        options: ["# comment", "// comment", "<!-- comment -->", "/* comment */"],
        correctAnswer: 1,
        explanation: {
          correct: "// is used for single-line comments in JavaScript.",
          why_others_wrong: [
            "# comment - not used in JavaScript",
            "<!-- comment --> - used in HTML for comments",
            "/* comment */ - used for multi-line comments"
          ]
        }
      },
      {
        id: "js_b_6",
        question: "Which method is used to remove the last element from an array?",
        options: ["pop()", "remove()", "delete()", "splice()"],
        correctAnswer: 0,
        explanation: {
          correct: "pop() removes the last element from an array.",
          why_others_wrong: [
            "remove() - not a valid array method",
            "delete() - removes a property from an object, not an array element",
            "splice() - can remove elements but requires index and count"
          ]
        }
      },
      {
        id: "js_b_7",
        question: "What is the correct way to create an object?",
        options: ["var obj = {};", "var obj = [];", "var obj = ();", "var obj = <>;"],
        correctAnswer: 0,
        explanation: {
          correct: "var obj = {}; creates an object using curly braces.",
          why_others_wrong: [
            "var obj = []; - creates an array, not an object",
            "var obj = (); - not valid syntax",
            "var obj = <>; - not valid syntax in JavaScript"
          ]
        }
      },
      {
        id: "js_b_8",
        question: "Which keyword is used to define a constant?",
        options: ["const", "constant", "final", "static"],
        correctAnswer: 0,
        explanation: {
          correct: "const is used to define a constant in JavaScript.",
          why_others_wrong: [
            "constant - not a valid keyword",
            "final - used in Java, not JavaScript",
            "static - used for static properties, not constants"
          ]
        }
      },
      {
        id: "js_b_9",
        question: "How do you access a property of an object?",
        options: ["obj.property", "obj->property", "obj[property]", "Both A and C"],
        correctAnswer: 3,
        explanation: {
          correct: "Both dot notation (obj.property) and bracket notation (obj[property]) are valid.",
          why_others_wrong: [
            "obj->property - not valid in JavaScript",
            "obj[property] - is valid but not the only way"
          ]
        }
      },
      {
        id: "js_b_10",
        question: "Which method converts a string to uppercase?",
        options: ["toUpper()", "toUpperCase()", "upper()", "upperCase()"],
        correctAnswer: 1,
        explanation: {
          correct: "toUpperCase() is the method used to convert strings to uppercase.",
          why_others_wrong: [
            "toUpper() - not a valid method",
            "upper() - not a valid method",
            "upperCase() - not a valid method"
          ]
        }
      },
      {
        id: "js_b_11",
        question: "What is the result of typeof null?",
        options: ["null", "undefined", "object", "boolean"],
        correctAnswer: 2,
        explanation: {
          correct: "typeof null returns 'object' due to a historical bug in JavaScript.",
          why_others_wrong: [
            "null - not the result of typeof",
            "undefined - not the result of typeof",
            "boolean - not related to null"
          ]
        }
      },
      {
        id: "js_b_12",
        question: "Which loop is used to iterate over object properties?",
        options: ["for loop", "while loop", "for...in loop", "do...while loop"],
        correctAnswer: 2,
        explanation: {
          correct: "for...in loop is used to iterate over object properties.",
          why_others_wrong: [
            "for loop - used for arrays or iterable objects",
            "while loop - not specifically for objects",
            "do...while loop - not specifically for objects"
          ]
        }
      },
      {
        id: "js_b_13",
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        correctAnswer: 0,
        explanation: {
          correct: "JSON.parse() converts a JSON string into a JavaScript object.",
          why_others_wrong: [
            "JSON.stringify() - converts an object to a JSON string",
            "JSON.convert() - not a valid method",
            "JSON.object() - not a valid method"
          ]
        }
      },
      {
        id: "js_b_14",
        question: "What is the output of console.log(1 + '1');?",
        options: ["11", "2", "NaN", "Error"],
        correctAnswer: 0,
        explanation: {
          correct: "1 + '1' results in '11' due to type coercion.",
          why_others_wrong: [
            "2 - this would be the result of adding two numbers",
            "NaN - not applicable here",
            "Error - this operation is valid"
          ]
        }
      },
      {
        id: "js_b_15",
        question: "Which method is used to find the index of an element in an array?",
        options: ["indexOf()", "findIndex()", "getIndex()", "search()"],
        correctAnswer: 0,
        explanation: {
          correct: "indexOf() returns the first index at which a given element can be found.",
          why_others_wrong: [
            "findIndex() - used for finding index based on a condition",
            "getIndex() - not a valid method",
            "search() - not a valid method for arrays"
          ]
        }
      },
      {
        id: "js_b_16",
        question: "What is the purpose of the 'this' keyword?",
        options: ["Refers to the global object", "Refers to the current object", "Refers to the parent object", "None of the above"],
        correctAnswer: 1,
        explanation: {
          correct: "'this' refers to the current object in context.",
          why_others_wrong: [
            "Refers to the global object - not always true, depends on context",
            "Refers to the parent object - not correct",
            "None of the above - incorrect, as it does refer to the current object"
          ]
        }
      },
      {
        id: "js_b_17",
        question: "Which operator is used to check for both value and type equality?",
        options: ["==", "===", "=", "!="],
        correctAnswer: 1,
        explanation: {
          correct: "=== checks for both value and type equality.",
          why_others_wrong: [
            "== - checks for value equality only",
            "= - assignment operator",
            "!= - checks for inequality"
          ]
        }
      },
      {
        id: "js_b_18",
        question: "What is the output of console.log(typeof NaN);?",
        options: ["number", "undefined", "NaN", "object"],
        correctAnswer: 0,
        explanation: {
          correct: "typeof NaN returns 'number' because NaN is a special numeric value.",
          why_others_wrong: [
            "undefined - not applicable here",
            "NaN - not a type, but a value",
            "object - not the correct type"
          ]
        }
      },
      {
        id: "js_b_19",
        question: "Which method is used to remove an element from an array by its index?",
        options: ["remove()", "delete()", "splice()", "pop()"],
        correctAnswer: 2,
        explanation: {
          correct: "splice() can remove elements from an array at a specified index.",
          why_others_wrong: [
            "remove() - not a valid array method",
            "delete() - removes a property from an object, not an array element",
            "pop() - removes the last element, not by index"
          ]
        }
      },
      {
        id: "js_b_20",
        question: "What is the output of console.log(0.1 + 0.2 === 0.3);?",
        options: ["true", "false", "undefined", "Error"],
        correctAnswer: 1,
        explanation: {
          correct: "Due to floating-point precision issues, this evaluates to false.",
          why_others_wrong: [
            "true - incorrect due to precision issues",
            "undefined - not applicable here",
            "Error - this operation is valid"
          ]
        }
      },
      {
        id: "js_b_21",
        question: "Which method is used to convert a JavaScript object into a JSON string?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
        correctAnswer: 0,
        explanation: {
          correct: "JSON.stringify() converts a JavaScript object into a JSON string.",
          why_others_wrong: [
            "JSON.parse() - converts a JSON string into a JavaScript object",
            "JSON.convert() - not a valid method",
            "JSON.object() - not a valid method"
          ]
        }
      }
    ],
    recommendations: {
      lowScore: [],
      mediumScore: [],
      highScore: []
    }
  },

  // Continue with all other languages...
  // Java, HTML, CSS, SQL, C++, Data Structures, NoSQL
];
