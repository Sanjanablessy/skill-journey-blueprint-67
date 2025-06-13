
import { Quiz } from '@/types';

export const pythonQuizzes: Quiz[] = [
  {
    id: 'python-beginner',
    title: 'Python - Beginner',
    description: 'Test your knowledge of basic Python concepts',
    difficulty: 'beginner',
    questions: [
      {
        question: 'What is the correct file extension for Python files?',
        options: ['.pt', '.pyt', '.py', '.python'],
        correctAnswer: 2,
        explanation: 'Python files use the .py extension.'
      },
      {
        question: 'Which keyword is used to define a function in Python?',
        options: ['func', 'def', 'function', 'define'],
        correctAnswer: 1,
        explanation: 'def is used to define functions.'
      },
      {
        question: 'What is the output of print(2 + 3 * 4)?',
        options: ['20', '14', '24', '10'],
        correctAnswer: 1,
        explanation: 'Multiplication has higher precedence.'
      },
      {
        question: 'How do you insert comments in Python code?',
        options: ['# comment', '// comment', '/* comment */', '-- comment'],
        correctAnswer: 0,
        explanation: '# is used for comments in Python.'
      },
      {
        question: 'Which of the following is a mutable data type?',
        options: ['Tuple', 'List', 'String', 'Integer'],
        correctAnswer: 1,
        explanation: 'Lists can be changed after creation.'
      },
      {
        question: 'What will type([]) return?',
        options: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
        correctAnswer: 1,
        explanation: '[] represents a list.'
      },
      {
        question: 'Which method is used to add elements to a list?',
        options: ['push()', 'append()', 'insert()', 'add()'],
        correctAnswer: 1,
        explanation: 'append() adds to the end of the list.'
      },
      {
        question: 'What is the output of bool(0)?',
        options: ['True', 'False', 'None', '0'],
        correctAnswer: 1,
        explanation: '0 is considered False in Python.'
      },
      {
        question: 'How do you start a block of code in Python?',
        options: ['Using {}', 'Using indentation', 'Using begin', 'Using then'],
        correctAnswer: 1,
        explanation: 'Python uses indentation for code blocks.'
      },
      {
        question: 'Which operator is used for exponentiation?',
        options: ['^', 'exp', '**', 'pow'],
        correctAnswer: 2,
        explanation: '** is the exponent operator in Python.'
      },
      {
        question: 'What is the result of 10 // 3?',
        options: ['3.33', '3', '4', 'Error'],
        correctAnswer: 1,
        explanation: '// performs integer (floor) division.'
      },
      {
        question: 'How do you define a variable with value 5?',
        options: ['int x = 5', 'x: int = 5', 'x = 5', 'let x = 5'],
        correctAnswer: 2,
        explanation: 'Python uses dynamic typing, so x = 5 is sufficient.'
      },
      {
        question: 'Which data type is used for true/false values?',
        options: ['int', 'bool', 'str', 'bit'],
        correctAnswer: 1,
        explanation: 'Python uses bool for boolean values.'
      },
      {
        question: 'How do you get the length of a list l?',
        options: ['l.len()', 'len(l)', 'length(l)', 'size(l)'],
        correctAnswer: 1,
        explanation: 'len() returns the number of elements.'
      },
      {
        question: 'What is the output of print("Hello"[1])?',
        options: ['H', 'e', 'l', 'o'],
        correctAnswer: 1,
        explanation: 'Index 1 refers to the second character.'
      },
      {
        question: 'Which keyword is used to handle exceptions?',
        options: ['trycatch', 'try', 'error', 'catch'],
        correctAnswer: 1,
        explanation: 'Python uses try and except.'
      },
      {
        question: 'What is the output of "5" + "5"?',
        options: ['10', '55', 'Error', '5+5'],
        correctAnswer: 1,
        explanation: 'Strings concatenate.'
      },
      {
        question: 'Which function is used to read input from the user?',
        options: ['read()', 'input()', 'scan()', 'raw_input()'],
        correctAnswer: 1,
        explanation: 'input() gets user input in Python 3.'
      },
      {
        question: 'What does len("hello") return?',
        options: ['6', '5', '4', '0'],
        correctAnswer: 1,
        explanation: 'There are 5 characters.'
      },
      {
        question: 'Which of these is a dictionary?',
        options: ['[1, 2, 3]', '(1, 2, 3)', '{"a": 1, "b": 2}', '{1, 2, 3}'],
        correctAnswer: 2,
        explanation: 'Key-value pairs form a dictionary.'
      },
      {
        question: 'What is the keyword to define a class?',
        options: ['object', 'class', 'def', 'struct'],
        correctAnswer: 1,
        explanation: 'Classes are defined using class keyword.'
      }
    ]
  },
  {
    id: 'python-intermediate',
    title: 'Python - Intermediate',
    description: 'Test your intermediate Python programming skills',
    difficulty: 'intermediate',
    questions: [
      {
        question: 'What is the output of print([i for i in range(3)])?',
        options: ['0 1 2', '[0, 1, 2]', 'range(3)', 'None'],
        correctAnswer: 1,
        explanation: 'List comprehension generates a list.'
      },
      {
        question: 'How is a Python set different from a list?',
        options: ['Sets allow duplicates', 'Sets are unordered and contain unique elements', 'Lists are unordered', "Lists can't be nested"],
        correctAnswer: 1,
        explanation: 'Sets are unordered and unique.'
      },
      {
        question: 'What is the result of bool([])?',
        options: ['True', 'False', 'Error', 'None'],
        correctAnswer: 1,
        explanation: 'Empty collections are False.'
      },
      {
        question: 'Which of the following is not a keyword in Python?',
        options: ['nonlocal', 'with', 'include', 'lambda'],
        correctAnswer: 2,
        explanation: 'include is not a Python keyword.'
      },
      {
        question: 'What is the output of this code?\n\nx = [1, 2, 3]\nprint(x[-1])',
        options: ['1', '2', '3', '-1'],
        correctAnswer: 2,
        explanation: 'Negative index counts from the end.'
      },
      {
        question: 'Which of these is used to create an anonymous function?',
        options: ['def', 'lambda', 'return', 'yield'],
        correctAnswer: 1,
        explanation: 'lambda creates anonymous functions.'
      },
      {
        question: 'What is the output of "abc" * 3?',
        options: ['abcabcabcabc', 'abcabcabc', 'Error', 'abc * 3'],
        correctAnswer: 1,
        explanation: 'Strings can be repeated using *.'
      },
      {
        question: 'Which method adds an item at a specific index in a list?',
        options: ['add()', 'append()', 'insert()', 'extend()'],
        correctAnswer: 2,
        explanation: 'insert() places item at specific position.'
      },
      {
        question: 'What is the output of 5 == 5.0?',
        options: ['True', 'False', 'Error', 'None'],
        correctAnswer: 0,
        explanation: 'Python compares value, not type.'
      },
      {
        question: 'Which of these is used to handle exceptions?',
        options: ['catch', 'error', 'except', 'handler'],
        correctAnswer: 2,
        explanation: 'try-except handles exceptions.'
      },
      {
        question: 'What does enumerate() do?',
        options: ['Finds index only', 'Returns index and value', 'Filters values', 'Sorts the list'],
        correctAnswer: 1,
        explanation: 'Useful in loops for index and element.'
      },
      {
        question: 'What is the result of type({})?',
        options: ['list', 'set', 'dict', 'tuple'],
        correctAnswer: 2,
        explanation: '{} creates a dictionary.'
      },
      {
        question: 'Which keyword is used for inheritance in Python?',
        options: ['inherit', 'class with parameters', 'super', 'base'],
        correctAnswer: 1,
        explanation: 'Inheritance is done by passing base class in parentheses.'
      },
      {
        question: 'Which method is used to get keys from a dictionary?',
        options: ['all()', 'values()', 'keys()', 'items()'],
        correctAnswer: 2,
        explanation: 'keys() returns dict keys.'
      },
      {
        question: 'What is the purpose of __init__()?',
        options: ['Destruct object', 'Initialize object', 'Create static method', 'Print class info'],
        correctAnswer: 1,
        explanation: "It's the constructor method."
      },
      {
        question: 'What will list("abc") return?',
        options: ["['abc']", "['a', 'b', 'c']", "('a', 'b', 'c')", 'Error'],
        correctAnswer: 1,
        explanation: 'Converts string to list of characters.'
      },
      {
        question: 'What does the pass statement do?',
        options: ['Placeholder; does nothing', 'Passes exception', 'Skips loop', 'Ends program'],
        correctAnswer: 0,
        explanation: 'Used when a statement is syntactically required.'
      },
      {
        question: 'Which operator is used for floor division?',
        options: ['/', '\\', '//', '%'],
        correctAnswer: 2,
        explanation: '// is integer division.'
      },
      {
        question: 'What is the scope of variables declared inside functions?',
        options: ['Global', 'Local', 'Static', 'Dynamic'],
        correctAnswer: 1,
        explanation: 'Variables inside functions are local.'
      },
      {
        question: 'Which function is used to convert string to integer?',
        options: ['str()', 'eval()', 'int()', 'input()'],
        correctAnswer: 2,
        explanation: 'int() converts strings to integers.'
      },
      {
        question: 'What is the output of len(set([1,2,2,3]))?',
        options: ['4', '3', '2', '1'],
        correctAnswer: 1,
        explanation: 'Set removes duplicates.'
      }
    ]
  },
  {
    id: 'python-advanced',
    title: 'Python - Advanced',
    description: 'Challenge your advanced Python programming knowledge',
    difficulty: 'advanced',
    questions: [
      {
        question: 'What is the output of the following code?\n\nx = [[0] * 3] * 3\nx[0][0] = 1\nprint(x)',
        options: ['[[1, 0, 0], [0, 0, 0], [0, 0, 0]]', '[[1, 0, 0], [1, 0, 0], [1, 0, 0]]', '[[1, 0, 0], [1, 0, 0], [1, 0, 0]]', 'Error'],
        correctAnswer: 2,
        explanation: 'All inner lists reference the same object.'
      },
      {
        question: 'Which of the following is not a valid way to define a generator?',
        options: ['Using yield', 'Using return in a loop', 'Generator expression', 'With yield inside a function'],
        correctAnswer: 1,
        explanation: "return ends the function; it's not used for generators."
      },
      {
        question: 'Which of these best describes a decorator?',
        options: ['A function that runs only once', 'A function that modifies another function', 'A class method', 'A built-in class'],
        correctAnswer: 1,
        explanation: 'Decorators wrap other functions to extend behavior.'
      },
      {
        question: 'What will this code output?\n\ndef func(a, b=[]):\n    b.append(a)\n    return b\nprint(func(1))\nprint(func(2))',
        options: ['[1], [2]', '[1], [1, 2]', '[1, 2], [3]', 'Error'],
        correctAnswer: 1,
        explanation: 'Default mutable arguments are shared.'
      },
      {
        question: 'Which of these features lazy evaluation?',
        options: ['List', 'Generator', 'Tuple', 'Dictionary'],
        correctAnswer: 1,
        explanation: 'Generators evaluate values on demand.'
      },
      {
        question: 'What is the main advantage of using with for file handling?',
        options: ['Increases speed', 'Ensures file closure', 'Opens multiple files', 'Reads file faster'],
        correctAnswer: 1,
        explanation: 'with ensures proper cleanup (context manager).'
      },
      {
        question: 'Which of the following is used to achieve method overloading in Python?',
        options: ['@overload decorator', 'Default arguments and *args', 'Function chaining', 'super()'],
        correctAnswer: 1,
        explanation: "Python doesn't support overloading natively, but default parameters simulate it."
      },
      {
        question: 'What does functools.lru_cache() do?',
        options: ['Limits recursion', 'Caches function calls', 'Logs function calls', 'Optimizes loops'],
        correctAnswer: 1,
        explanation: 'lru_cache stores previously computed results.'
      },
      {
        question: 'Which of these defines a context manager?',
        options: ['__exitonly__', '__enter__ and __exit__', 'start() and stop()', 'open() and close()'],
        correctAnswer: 1,
        explanation: 'Context managers must define these methods.'
      },
      {
        question: 'What is the time complexity of searching in a set?',
        options: ['O(n)', 'O(1)', 'O(log n)', 'O(n log n)'],
        correctAnswer: 1,
        explanation: 'Sets are hash-based; lookup is constant time.'
      },
      {
        question: "Which of these statements is true about Python's GIL?",
        options: ['It improves multithreading', 'It allows only one thread at a time in CPython', 'It blocks async I/O', 'It is removed in Python 3'],
        correctAnswer: 1,
        explanation: 'GIL limits true multithreading in CPython.'
      },
      {
        question: 'Which of the following handles asynchronous programming in Python?',
        options: ['threading', 'multiprocessing', 'asyncio', 'os'],
        correctAnswer: 2,
        explanation: 'asyncio is the async framework in Python.'
      },
      {
        question: 'Which of these types is immutable?',
        options: ['List', 'Tuple', 'Dictionary', 'Set'],
        correctAnswer: 1,
        explanation: "Tuples can't be changed."
      },
      {
        question: 'What does *args allow in function definitions?',
        options: ['Named arguments', 'Variable number of positional arguments', 'Optional keyword arguments', 'String inputs only'],
        correctAnswer: 1,
        explanation: '*args collects extra positional arguments.'
      },
      {
        question: 'Which is not a valid Python data structure?',
        options: ['List', 'Tuple', 'Stack (built-in)', 'Dictionary'],
        correctAnswer: 2,
        explanation: 'Stack is a concept, not a built-in structure.'
      },
      {
        question: 'What will this output?\n\nprint("".join(reversed("abc")))',
        options: ['abc', 'cba', 'cab', 'Error'],
        correctAnswer: 1,
        explanation: 'reversed returns an iterator.'
      },
      {
        question: 'How can you make a class iterable?',
        options: ['Define __iter__()', 'Define __iter__() and __next__()', 'Use list()', 'Use yield'],
        correctAnswer: 1,
        explanation: 'Both methods are required.'
      },
      {
        question: 'What does monkey patching refer to?',
        options: ['Thread control', 'Modifying code at runtime', 'Memory leak prevention', 'Error handling'],
        correctAnswer: 1,
        explanation: 'Monkey patching alters classes/methods dynamically.'
      },
      {
        question: 'What is a metaclass?',
        options: ['A subclass of a class', 'A class of a class', 'A parent class', 'A utility class'],
        correctAnswer: 1,
        explanation: 'Metaclasses define how classes behave.'
      },
      {
        question: 'What does __slots__ do?',
        options: ['Locks the object', 'Limits dynamic attribute creation', 'Makes it iterable', 'Makes it hashable'],
        correctAnswer: 1,
        explanation: 'Reduces memory by fixing attributes.'
      },
      {
        question: 'What will be the output?\n\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())',
        options: ['1', '2', 'Error', 'None'],
        correctAnswer: 1,
        explanation: 'finally overrides return from try.'
      }
    ]
  }
];
