import { Quiz } from '@/types';

export const pythonQuizzes: Quiz[] = [
  {
    id: 'python-beginner',
    title: 'Python - Beginner',
    description: 'Test your knowledge of basic Python concepts',
    skillCategory: 'Python',
    difficulty: 'beginner',
    questions: [
      {
        id: 'py-basic-1',
        question: 'Which keyword is used to define a function in Python?',
        options: [
          'def',
          'function',
          'define',
          'fun'
        ],
        correctAnswer: 0,
        explanation: 'def is the keyword used to define a function in Python.'
      },
      {
        id: 'py-basic-2',
        question: 'What will print(type(5)) output?',
        options: [
          '<class \'string\'>',
          '<class \'int\'>',
          '<class \'float\'>',
          '<class \'char\'>'
        ],
        correctAnswer: 1,
        explanation: '5 is an integer, so the type is <class \'int\'>.'
      },
      {
        id: 'py-basic-3',
        question: 'Which symbol is used to start a comment in Python?',
        options: [
          '//',
          '/*',
          '#',
          '--'
        ],
        correctAnswer: 2,
        explanation: 'Python comments start with the # symbol.'
      },
      {
        id: 'py-basic-4',
        question: 'What is the output of print(2**3)?',
        options: [
          '6',
          '8',
          '9',
          '5'
        ],
        correctAnswer: 1,
        explanation: '** is the exponent operator in Python. 2**3 = 2³ = 8.'
      },
      {
        id: 'py-basic-5',
        question: 'What is the correct file extension for Python files?',
        options: [
          '.pt',
          '.pyt',
          '.py',
          '.python'
        ],
        correctAnswer: 2,
        explanation: 'Python files use the .py extension.'
      },
      {
        id: 'py-basic-6',
        question: 'What is the output of print(2 + 3 * 4)?',
        options: [
          '20',
          '14',
          '24',
          '10'
        ],
        correctAnswer: 1,
        explanation: 'Multiplication has higher precedence than addition, so 3 * 4 = 12, then 2 + 12 = 14.'
      },
      {
        id: 'py-basic-7',
        question: 'Which of the following is a mutable data type?',
        options: [
          'Tuple',
          'List',
          'String',
          'Integer'
        ],
        correctAnswer: 1,
        explanation: 'Lists are mutable, meaning they can be changed after creation. Tuples, strings, and integers are immutable.'
      },
      {
        id: 'py-basic-8',
        question: 'What will type([]) return?',
        options: [
          '<class \'tuple\'>',
          '<class \'list\'>',
          '<class \'set\'>',
          '<class \'dict\'>'
        ],
        correctAnswer: 1,
        explanation: '[] represents an empty list, so type([]) returns <class \'list\'>.'
      },
      {
        id: 'py-basic-9',
        question: 'Which method is used to add elements to a list?',
        options: [
          'push()',
          'append()',
          'insert()',
          'add()'
        ],
        correctAnswer: 1,
        explanation: 'append() adds an element to the end of a list in Python.'
      },
      {
        id: 'py-basic-10',
        question: 'What is the output of bool(0)?',
        options: [
          'True',
          'False',
          'None',
          '0'
        ],
        correctAnswer: 1,
        explanation: '0 is considered False in Python boolean context.'
      },
      {
        id: 'py-basic-11',
        question: 'How do you start a block of code in Python?',
        options: [
          'Using {}',
          'Using indentation',
          'Using begin',
          'Using then'
        ],
        correctAnswer: 1,
        explanation: 'Python uses indentation to define code blocks, not braces like other languages.'
      },
      {
        id: 'py-basic-12',
        question: 'Which operator is used for exponentiation?',
        options: [
          '^',
          'exp',
          '**',
          'pow'
        ],
        correctAnswer: 2,
        explanation: '** is the exponentiation operator in Python.'
      },
      {
        id: 'py-basic-13',
        question: 'What is the result of 10 // 3?',
        options: [
          '3.33',
          '3',
          '4',
          'Error'
        ],
        correctAnswer: 1,
        explanation: '// performs floor division (integer division), so 10 // 3 = 3.'
      },
      {
        id: 'py-basic-14',
        question: 'How do you define a variable with value 5?',
        options: [
          'int x = 5',
          'x: int = 5',
          'x = 5',
          'let x = 5'
        ],
        correctAnswer: 2,
        explanation: 'Python uses dynamic typing, so x = 5 is sufficient to create an integer variable.'
      },
      {
        id: 'py-basic-15',
        question: 'Which data type is used for true/false values?',
        options: [
          'int',
          'bool',
          'str',
          'bit'
        ],
        correctAnswer: 1,
        explanation: 'Python uses the bool data type for boolean values (True/False).'
      },
      {
        id: 'py-basic-16',
        question: 'How do you get the length of a list l?',
        options: [
          'l.len()',
          'len(l)',
          'length(l)',
          'size(l)'
        ],
        correctAnswer: 1,
        explanation: 'len(l) returns the number of elements in a list.'
      },
      {
        id: 'py-basic-17',
        question: 'What is the output of print("Hello"[1])?',
        options: [
          'H',
          'e',
          'l',
          'o'
        ],
        correctAnswer: 1,
        explanation: 'String indexing starts at 0, so "Hello"[1] refers to the second character, which is "e".'
      },
      {
        id: 'py-basic-18',
        question: 'Which keyword is used to handle exceptions?',
        options: [
          'trycatch',
          'try',
          'error',
          'catch'
        ],
        correctAnswer: 1,
        explanation: 'Python uses try and except (not catch) for exception handling.'
      },
      {
        id: 'py-basic-19',
        question: 'What is the output of "5" + "5"?',
        options: [
          '10',
          '55',
          'Error',
          '5+5'
        ],
        correctAnswer: 1,
        explanation: 'String concatenation in Python joins the strings, so "5" + "5" = "55".'
      },
      {
        id: 'py-basic-20',
        question: 'Which function is used to read input from the user?',
        options: [
          'read()',
          'input()',
          'scan()',
          'raw_input()'
        ],
        correctAnswer: 1,
        explanation: 'input() is used to get user input in Python 3.'
      },
      {
        id: 'py-basic-21',
        question: 'What does len("hello") return?',
        options: [
          '6',
          '5',
          '4',
          '0'
        ],
        correctAnswer: 1,
        explanation: 'The string "hello" has 5 characters, so len("hello") returns 5.'
      }
    ]
  },
  {
    id: 'python-intermediate',
    title: 'Python - Intermediate',
    description: 'Test your intermediate Python programming skills',
    skillCategory: 'Python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'py-inter-1',
        question: 'What is the output of print([i for i in range(3)])?',
        options: [
          '0 1 2',
          '[0, 1, 2]',
          'range(3)',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'List comprehension generates a list: [0, 1, 2].'
      },
      {
        id: 'py-inter-2',
        question: 'How is a Python set different from a list?',
        options: [
          'Sets allow duplicates',
          'Sets are unordered and contain unique elements',
          'Lists are unordered',
          "Lists can't be nested"
        ],
        correctAnswer: 1,
        explanation: 'Sets are unordered collections of unique elements, while lists are ordered and allow duplicates.'
      },
      {
        id: 'py-inter-3',
        question: 'What is the result of bool([])?',
        options: [
          'True',
          'False',
          'Error',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'Empty collections (including empty lists) are considered False in Python.'
      },
      {
        id: 'py-inter-4',
        question: 'Which of the following is not a keyword in Python?',
        options: [
          'nonlocal',
          'with',
          'include',
          'lambda'
        ],
        correctAnswer: 2,
        explanation: 'include is not a Python keyword. nonlocal, with, and lambda are all valid Python keywords.'
      },
      {
        id: 'py-inter-5',
        question: 'What is the output of this code?\n\nx = [1, 2, 3]\nprint(x[-1])',
        options: [
          '1',
          '2',
          '3',
          '-1'
        ],
        correctAnswer: 2,
        explanation: 'Negative indexing counts from the end. x[-1] returns the last element, which is 3.'
      },
      {
        id: 'py-inter-6',
        question: 'Which of these is used to create an anonymous function?',
        options: [
          'def',
          'lambda',
          'return',
          'yield'
        ],
        correctAnswer: 1,
        explanation: 'lambda creates anonymous (unnamed) functions in Python.'
      },
      {
        id: 'py-inter-7',
        question: 'What is the output of "abc" * 3?',
        options: [
          'abcabcabcabc',
          'abcabcabc',
          'Error',
          'abc * 3'
        ],
        correctAnswer: 1,
        explanation: 'String multiplication repeats the string: "abc" * 3 = "abcabcabc".'
      },
      {
        id: 'py-inter-8',
        question: 'Which method adds an item at a specific index in a list?',
        options: [
          'add()',
          'append()',
          'insert()',
          'extend()'
        ],
        correctAnswer: 2,
        explanation: 'insert() places an item at a specific position in the list.'
      },
      {
        id: 'py-inter-9',
        question: 'What is the output of 5 == 5.0?',
        options: [
          'True',
          'False',
          'Error',
          'None'
        ],
        correctAnswer: 0,
        explanation: 'Python compares values, not types. 5 and 5.0 have the same value, so the comparison is True.'
      },
      {
        id: 'py-inter-10',
        question: 'Which of these is used to handle exceptions?',
        options: [
          'catch',
          'error',
          'except',
          'handler'
        ],
        correctAnswer: 2,
        explanation: 'Python uses try-except blocks for exception handling.'
      },
      {
        id: 'py-inter-11',
        question: 'What does enumerate() do?',
        options: [
          'Finds index only',
          'Returns index and value',
          'Filters values',
          'Sorts the list'
        ],
        correctAnswer: 1,
        explanation: 'enumerate() returns pairs of (index, value) for each element in an iterable.'
      },
      {
        id: 'py-inter-12',
        question: 'What is the result of type({})?',
        options: [
          'list',
          'set',
          'dict',
          'tuple'
        ],
        correctAnswer: 2,
        explanation: '{} creates an empty dictionary, so type({}) returns dict.'
      },
      {
        id: 'py-inter-13',
        question: 'Which keyword is used for inheritance in Python?',
        options: [
          'inherit',
          'class with parameters',
          'super',
          'base'
        ],
        correctAnswer: 1,
        explanation: 'Inheritance is done by passing the base class in parentheses: class Child(Parent).'
      },
      {
        id: 'py-inter-14',
        question: 'Which method is used to get keys from a dictionary?',
        options: [
          'all()',
          'values()',
          'keys()',
          'items()'
        ],
        correctAnswer: 2,
        explanation: 'The keys() method returns all keys from a dictionary.'
      },
      {
        id: 'py-inter-15',
        question: 'What is the purpose of __init__()?',
        options: [
          'Destruct object',
          'Initialize object',
          'Create static method',
          'Print class info'
        ],
        correctAnswer: 1,
        explanation: '__init__() is the constructor method that initializes new objects.'
      },
      {
        id: 'py-inter-16',
        question: 'What will list("abc") return?',
        options: [
          "['abc']",
          "['a', 'b', 'c']",
          "('a', 'b', 'c')",
          'Error'
        ],
        correctAnswer: 1,
        explanation: 'list() converts a string to a list of individual characters.'
      },
      {
        id: 'py-inter-17',
        question: 'What does the pass statement do?',
        options: [
          'Placeholder; does nothing',
          'Passes exception',
          'Skips loop',
          'Ends program'
        ],
        correctAnswer: 0,
        explanation: 'pass is a null operation - a placeholder used when a statement is syntactically required.'
      },
      {
        id: 'py-inter-18',
        question: 'Which operator is used for floor division?',
        options: [
          '/',
          '\\',
          '//',
          '%'
        ],
        correctAnswer: 2,
        explanation: '// is the floor division operator that returns the integer part of the division.'
      },
      {
        id: 'py-inter-19',
        question: 'What is the scope of variables declared inside functions?',
        options: [
          'Global',
          'Local',
          'Static',
          'Dynamic'
        ],
        correctAnswer: 1,
        explanation: 'Variables declared inside functions have local scope by default.'
      },
      {
        id: 'py-inter-20',
        question: 'Which function is used to convert string to integer?',
        options: [
          'str()',
          'eval()',
          'int()',
          'input()'
        ],
        correctAnswer: 2,
        explanation: 'int() converts strings to integers in Python.'
      },
      {
        id: 'py-inter-21',
        question: 'What is the output of len(set([1,2,2,3]))?',
        options: [
          '4',
          '3',
          '2',
          '1'
        ],
        correctAnswer: 1,
        explanation: 'Sets automatically remove duplicates, so {1, 2, 3} has length 3.'
      }
    ]
  },
  {
    id: 'python-advanced',
    title: 'Python - Advanced',
    description: 'Challenge your advanced Python programming knowledge',
    skillCategory: 'Python',
    difficulty: 'advanced',
    questions: [
      {
        id: 'py-adv-1',
        question: 'What is the output of the following code?\n\nx = [[0] * 3] * 3\nx[0][0] = 1\nprint(x)',
        options: [
          '[[1, 0, 0], [0, 0, 0], [0, 0, 0]]',
          '[[1, 0, 0], [1, 0, 0], [1, 0, 0]]',
          '[[1, 0, 0], [1, 0, 0], [1, 0, 0]]',
          'Error'
        ],
        correctAnswer: 2,
        explanation: 'All inner lists reference the same object, so modifying one affects all of them.'
      },
      {
        id: 'py-adv-2',
        question: 'Which of the following is not a valid way to define a generator?',
        options: [
          'Using yield',
          'Using return in a loop',
          'Generator expression',
          'With yield inside a function'
        ],
        correctAnswer: 1,
        explanation: 'return ends the function; generators use yield to produce values.'
      },
      {
        id: 'py-adv-3',
        question: 'Which of these best describes a decorator?',
        options: [
          'A function that runs only once',
          'A function that modifies another function',
          'A class method',
          'A built-in class'
        ],
        correctAnswer: 1,
        explanation: 'Decorators are functions that wrap other functions to extend or modify their behavior.'
      },
      {
        id: 'py-adv-4',
        question: 'What will this code output?\n\ndef func(a, b=[]):\n    b.append(a)\n    return b\nprint(func(1))\nprint(func(2))',
        options: [
          '[1], [2]',
          '[1], [1, 2]',
          '[1, 2], [3]',
          'Error'
        ],
        correctAnswer: 1,
        explanation: 'Default mutable arguments are shared between function calls, so the same list is used.'
      },
      {
        id: 'py-adv-5',
        question: 'Which of these features lazy evaluation?',
        options: [
          'List',
          'Generator',
          'Tuple',
          'Dictionary'
        ],
        correctAnswer: 1,
        explanation: 'Generators use lazy evaluation, computing values only when needed.'
      },
      {
        id: 'py-adv-6',
        question: 'What is the main advantage of using with for file handling?',
        options: [
          'Increases speed',
          'Ensures file closure',
          'Opens multiple files',
          'Reads file faster'
        ],
        correctAnswer: 1,
        explanation: 'The with statement ensures proper resource cleanup (file closure) using context managers.'
      },
      {
        id: 'py-adv-7',
        question: 'Which of the following is used to achieve method overloading in Python?',
        options: [
          '@overload decorator',
          'Default arguments and *args',
          'Function chaining',
          'super()'
        ],
        correctAnswer: 1,
        explanation: 'Python doesn\'t support method overloading natively, but default parameters and *args can simulate it.'
      },
      {
        id: 'py-adv-8',
        question: 'What does functools.lru_cache() do?',
        options: [
          'Limits recursion',
          'Caches function calls',
          'Logs function calls',
          'Optimizes loops'
        ],
        correctAnswer: 1,
        explanation: 'lru_cache is a decorator that caches function results to improve performance for repeated calls.'
      },
      {
        id: 'py-adv-9',
        question: 'Which of these defines a context manager?',
        options: [
          '__exitonly__',
          '__enter__ and __exit__',
          'start() and stop()',
          'open() and close()'
        ],
        correctAnswer: 1,
        explanation: 'Context managers must define __enter__ and __exit__ methods.'
      },
      {
        id: 'py-adv-10',
        question: 'What is the time complexity of searching in a set?',
        options: [
          'O(n)',
          'O(1)',
          'O(log n)',
          'O(n log n)'
        ],
        correctAnswer: 1,
        explanation: 'Sets are implemented using hash tables, providing O(1) average lookup time.'
      },
      {
        id: 'py-adv-11',
        question: 'Which statement is true about Python\'s GIL?',
        options: [
          'It improves multithreading',
          'It allows only one thread at a time in CPython',
          'It blocks async I/O',
          'It is removed in Python 3'
        ],
        correctAnswer: 1,
        explanation: 'The Global Interpreter Lock (GIL) prevents true multithreading in CPython by allowing only one thread to execute Python code at a time.'
      },
      {
        id: 'py-adv-12',
        question: 'Which of the following handles asynchronous programming in Python?',
        options: [
          'threading',
          'multiprocessing',
          'asyncio',
          'os'
        ],
        correctAnswer: 2,
        explanation: 'asyncio is Python\'s library for asynchronous programming using async/await.'
      },
      {
        id: 'py-adv-13',
        question: 'Which of these types is immutable?',
        options: [
          'List',
          'Tuple',
          'Dictionary',
          'Set'
        ],
        correctAnswer: 1,
        explanation: 'Tuples are immutable - they cannot be changed after creation.'
      },
      {
        id: 'py-adv-14',
        question: 'What does *args allow in function definitions?',
        options: [
          'Named arguments',
          'Variable number of positional arguments',
          'Optional keyword arguments',
          'String inputs only'
        ],
        correctAnswer: 1,
        explanation: '*args collects extra positional arguments into a tuple.'
      },
      {
        id: 'py-adv-15',
        question: 'Which is not a valid Python data structure?',
        options: [
          'List',
          'Tuple',
          'Stack (built-in)',
          'Dictionary'
        ],
        correctAnswer: 2,
        explanation: 'Stack is a concept, not a built-in data structure. You can implement stacks using lists.'
      },
      {
        id: 'py-adv-16',
        question: 'What will this output?\n\nprint("".join(reversed("abc")))',
        options: [
          'abc',
          'cba',
          'cab',
          'Error'
        ],
        correctAnswer: 1,
        explanation: 'reversed() creates an iterator that goes through "abc" backwards, join() combines it into "cba".'
      },
      {
        id: 'py-adv-17',
        question: 'How can you make a class iterable?',
        options: [
          'Define __iter__()',
          'Define __iter__() and __next__()',
          'Use list()',
          'Use yield'
        ],
        correctAnswer: 1,
        explanation: 'Both __iter__() and __next__() methods are required to make a class iterable.'
      },
      {
        id: 'py-adv-18',
        question: 'What does monkey patching refer to?',
        options: [
          'Thread control',
          'Modifying code at runtime',
          'Memory leak prevention',
          'Error handling'
        ],
        correctAnswer: 1,
        explanation: 'Monkey patching is the practice of dynamically modifying classes or modules at runtime.'
      },
      {
        id: 'py-adv-19',
        question: 'What is a metaclass?',
        options: [
          'A subclass of a class',
          'A class of a class',
          'A parent class',
          'A utility class'
        ],
        correctAnswer: 1,
        explanation: 'A metaclass is a class whose instances are classes - it defines how classes behave.'
      },
      {
        id: 'py-adv-20',
        question: 'What does __slots__ do?',
        options: [
          'Locks the object',
          'Limits dynamic attribute creation',
          'Makes it iterable',
          'Makes it hashable'
        ],
        correctAnswer: 1,
        explanation: '__slots__ restricts the attributes that can be created, reducing memory usage.'
      },
      {
        id: 'py-adv-21',
        question: 'What will be the output?\n\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())',
        options: [
          '1',
          '2',
          'Error',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'The finally block always executes and its return value overrides the try block\'s return.'
      }
    ]
  }
];
