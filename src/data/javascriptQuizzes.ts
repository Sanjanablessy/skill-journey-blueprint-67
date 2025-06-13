
import { Quiz } from '@/types';

export const javascriptQuizzes: Quiz[] = [
  {
    id: 'javascript-beginner',
    title: 'JavaScript - Beginner',
    description: 'Test your knowledge of basic JavaScript concepts',
    skillCategory: 'JavaScript',
    difficulty: 'beginner',
    questions: [
      {
        id: 'js-basic-1',
        question: 'Which of the following is used to declare a variable in JavaScript?',
        options: [
          'var',
          'int',
          'float',
          'string'
        ],
        correctAnswer: 0,
        explanation: 'var is a valid keyword for declaring variables in JavaScript.'
      },
      {
        id: 'js-basic-2',
        question: 'Which symbol is used for comments in JavaScript?',
        options: [
          '#',
          '<!-- -->',
          '//',
          '**'
        ],
        correctAnswer: 2,
        explanation: '// is used for single-line comments in JavaScript.'
      },
      {
        id: 'js-basic-3',
        question: 'What is the output of typeof 42?',
        options: [
          'string',
          'number',
          'object',
          'undefined'
        ],
        correctAnswer: 1,
        explanation: '42 is a number type in JavaScript.'
      },
      {
        id: 'js-basic-4',
        question: 'Which of the following is a valid string in JavaScript?',
        options: [
          '\'Hello',
          '`Hello"',
          '\'Hello\'',
          'Hello'
        ],
        correctAnswer: 2,
        explanation: 'Strings must be enclosed properly in quotes. \'Hello\' is properly quoted.'
      },
      {
        id: 'js-basic-5',
        question: 'Which one is not a data type in JavaScript?',
        options: [
          'number',
          'string',
          'character',
          'boolean'
        ],
        correctAnswer: 2,
        explanation: 'JavaScript does not have a character type. Individual characters are just strings of length 1.'
      },
      {
        id: 'js-basic-6',
        question: 'Which method is used to display data in the browser console?',
        options: [
          'alert()',
          'document.write()',
          'console.log()',
          'prompt()'
        ],
        correctAnswer: 2,
        explanation: 'console.log() is used for logging data to the browser console.'
      },
      {
        id: 'js-basic-7',
        question: 'Which operator is used for assignment in JS?',
        options: [
          '==',
          '=',
          '===',
          ':='
        ],
        correctAnswer: 1,
        explanation: '= is the assignment operator in JavaScript.'
      },
      {
        id: 'js-basic-8',
        question: 'Which value is considered falsy?',
        options: [
          '"false"',
          '[]',
          '0',
          '{}'
        ],
        correctAnswer: 2,
        explanation: '0 is falsy in JavaScript. The string "false", empty array [], and empty object {} are all truthy.'
      },
      {
        id: 'js-basic-9',
        question: 'What is the output of "5" + 3?',
        options: [
          '8',
          '15',
          '"53"',
          'error'
        ],
        correctAnswer: 2,
        explanation: 'When using + with a string, JavaScript performs string concatenation, resulting in "53".'
      },
      {
        id: 'js-basic-10',
        question: 'How do you write an alert box in JS?',
        options: [
          'msg("Hi")',
          'box("Hi")',
          'alert("Hi")',
          'show("Hi")'
        ],
        correctAnswer: 2,
        explanation: 'alert() is the function used to display alert dialogs in JavaScript.'
      },
      {
        id: 'js-basic-11',
        question: 'Which keyword is used for conditional branching?',
        options: [
          'switch',
          'goto',
          'if',
          'repeat'
        ],
        correctAnswer: 2,
        explanation: 'if is used to start conditional blocks in JavaScript.'
      },
      {
        id: 'js-basic-12',
        question: 'How do you write a function in JavaScript?',
        options: [
          'func myFunc()',
          'function myFunc()',
          'define myFunc()',
          'function:myFunc()'
        ],
        correctAnswer: 1,
        explanation: 'function is the keyword used to define functions in JavaScript.'
      },
      {
        id: 'js-basic-13',
        question: 'Which symbol is used for logical AND?',
        options: [
          '&',
          '&&',
          'and',
          '+&'
        ],
        correctAnswer: 1,
        explanation: '&& is the logical AND operator in JavaScript.'
      },
      {
        id: 'js-basic-14',
        question: 'What will be the output of Boolean("")?',
        options: [
          'true',
          'false',
          'null',
          'undefined'
        ],
        correctAnswer: 1,
        explanation: 'An empty string is falsy in JavaScript, so Boolean("") returns false.'
      },
      {
        id: 'js-basic-15',
        question: 'What is the correct syntax to write a for loop?',
        options: [
          'for i = 1 to 5',
          'for (let i = 0; i < 5; i++)',
          'for i in range(5)',
          'foreach i in 5'
        ],
        correctAnswer: 1,
        explanation: 'for (let i = 0; i < 5; i++) is the correct JavaScript for loop syntax.'
      },
      {
        id: 'js-basic-16',
        question: 'Which method adds a new item to the end of an array?',
        options: [
          'shift()',
          'unshift()',
          'push()',
          'pop()'
        ],
        correctAnswer: 2,
        explanation: 'push() adds items to the end of an array.'
      },
      {
        id: 'js-basic-17',
        question: 'Which of these is NOT a loop structure in JavaScript?',
        options: [
          'for',
          'while',
          'loop until',
          'do...while'
        ],
        correctAnswer: 2,
        explanation: '"loop until" is not a valid JavaScript loop structure.'
      },
      {
        id: 'js-basic-18',
        question: 'What is the result of typeof undefined?',
        options: [
          'object',
          'undefined',
          'null',
          'NaN'
        ],
        correctAnswer: 1,
        explanation: 'typeof returns "undefined" for undefined values.'
      },
      {
        id: 'js-basic-19',
        question: 'Which function is used to convert a string to an integer?',
        options: [
          'stringToInt()',
          'parseInt()',
          'toInt()',
          'parseInteger()'
        ],
        correctAnswer: 1,
        explanation: 'parseInt() is used to parse a string and return an integer.'
      },
      {
        id: 'js-basic-20',
        question: 'How do you create an array in JavaScript?',
        options: [
          'let arr = array()',
          'let arr = []',
          'let arr = {}',
          'let arr = ()'
        ],
        correctAnswer: 1,
        explanation: 'Arrays are created using square brackets [] in JavaScript.'
      },
      {
        id: 'js-basic-21',
        question: 'Which of the following is the equality operator that also checks type?',
        options: [
          '=',
          '==',
          '===',
          '!='
        ],
        correctAnswer: 2,
        explanation: '=== is the strict equality operator that checks both value and type.'
      }
    ]
  },
  {
    id: 'javascript-intermediate',
    title: 'JavaScript - Intermediate',
    description: 'Test your intermediate JavaScript programming skills',
    skillCategory: 'JavaScript',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'js-inter-1',
        question: 'What will be the output of console.log(0.1 + 0.2 === 0.3)?',
        options: [
          'true',
          'false',
          'undefined',
          'NaN'
        ],
        correctAnswer: 1,
        explanation: 'Due to floating-point precision issues in JavaScript, 0.1 + 0.2 does not exactly equal 0.3.'
      },
      {
        id: 'js-inter-2',
        question: 'Which method converts a JSON string into a JavaScript object?',
        options: [
          'JSON.parseObject()',
          'JSON.objectify()',
          'JSON.parse()',
          'JSON.toObject()'
        ],
        correctAnswer: 2,
        explanation: 'JSON.parse() is used to convert a JSON string into a JavaScript object.'
      },
      {
        id: 'js-inter-3',
        question: 'How can you prevent an object from being modified?',
        options: [
          'Object.freeze(obj)',
          'Object.freeze(obj)',
          'seal(obj)',
          'lock(obj)'
        ],
        correctAnswer: 1,
        explanation: 'Object.freeze() makes an object immutable, preventing any modifications to its properties.'
      },
      {
        id: 'js-inter-4',
        question: 'What is the scope of variables declared with let?',
        options: [
          'Global',
          'Block',
          'Function',
          'Object'
        ],
        correctAnswer: 1,
        explanation: 'Variables declared with let have block scope, meaning they are only accessible within the block where they are defined.'
      },
      {
        id: 'js-inter-5',
        question: 'Which symbol is used for strict equality in JS?',
        options: [
          '==',
          '=',
          '===',
          '!='
        ],
        correctAnswer: 2,
        explanation: '=== is the strict equality operator that checks both value and type.'
      },
      {
        id: 'js-inter-6',
        question: 'Which array method is used to remove the last element?',
        options: [
          'shift()',
          'unshift()',
          'pop()',
          'slice()'
        ],
        correctAnswer: 2,
        explanation: 'pop() removes and returns the last element from an array.'
      },
      {
        id: 'js-inter-7',
        question: 'What will be the result of typeof NaN?',
        options: [
          'NaN',
          'number',
          'undefined',
          'object'
        ],
        correctAnswer: 1,
        explanation: 'Surprisingly, NaN (Not a Number) is of type "number" in JavaScript.'
      },
      {
        id: 'js-inter-8',
        question: 'What does the map() function do?',
        options: [
          'Modifies original array',
          'Returns a new array',
          'Filters values',
          'Joins arrays'
        ],
        correctAnswer: 1,
        explanation: 'map() creates and returns a new array by applying a callback function to each element of the original array.'
      },
      {
        id: 'js-inter-9',
        question: 'What is a closure in JavaScript?',
        options: [
          'A loop with an exit',
          'A function with access to its lexical scope',
          'A promise',
          'A variable object'
        ],
        correctAnswer: 1,
        explanation: 'A closure is a function that has access to variables in its outer (lexical) scope even after the outer function has finished executing.'
      },
      {
        id: 'js-inter-10',
        question: 'What is the output of: [1,2,3].map(x => x * 2)?',
        options: [
          '[1,2,3]',
          '[2,4,6]',
          '[1,4,9]',
          'undefined'
        ],
        correctAnswer: 1,
        explanation: 'map() applies the callback function (x => x * 2) to each element, resulting in [2,4,6].'
      },
      {
        id: 'js-inter-11',
        question: 'Which keyword is used to define a class in JavaScript?',
        options: [
          'object',
          'class',
          'prototype',
          'define'
        ],
        correctAnswer: 1,
        explanation: 'The class keyword was introduced in ES6 for defining classes in JavaScript.'
      },
      {
        id: 'js-inter-12',
        question: 'Which loop would you use when the number of iterations is unknown?',
        options: [
          'for',
          'while',
          'for...of',
          'map'
        ],
        correctAnswer: 1,
        explanation: 'while loops are best when the number of iterations is not known beforehand and depends on a condition.'
      },
      {
        id: 'js-inter-13',
        question: 'What does this refer to in a regular function (non-arrow)?',
        options: [
          'Parent scope',
          'Calling object',
          'Window always',
          'Function itself'
        ],
        correctAnswer: 1,
        explanation: 'In regular functions, this is determined by how the function is called and typically refers to the calling object.'
      },
      {
        id: 'js-inter-14',
        question: 'Which method removes the first array element?',
        options: [
          'pop()',
          'shift()',
          'unshift()',
          'splice()'
        ],
        correctAnswer: 1,
        explanation: 'shift() removes and returns the first element from an array.'
      },
      {
        id: 'js-inter-15',
        question: 'How can you clone an object in JS?',
        options: [
          'Object.clone()',
          'Object.assign({}, obj)',
          'clone(obj)',
          'JSON.objectify()'
        ],
        correctAnswer: 1,
        explanation: 'Object.assign({}, obj) creates a shallow copy of an object.'
      },
      {
        id: 'js-inter-16',
        question: 'Which operator is used to spread elements of an array?',
        options: [
          '...',
          '...',
          '..',
          '*'
        ],
        correctAnswer: 1,
        explanation: 'The spread operator (...) expands elements of an array or object.'
      },
      {
        id: 'js-inter-17',
        question: 'How do you write an asynchronous function?',
        options: [
          'function async()',
          'async = function()',
          'async function()',
          'function() async'
        ],
        correctAnswer: 2,
        explanation: 'The async keyword precedes the function declaration to create an asynchronous function.'
      },
      {
        id: 'js-inter-18',
        question: 'Which of the following is a JavaScript framework?',
        options: [
          'Django',
          'Laravel',
          'React',
          'Flask'
        ],
        correctAnswer: 2,
        explanation: 'React is a JavaScript library/framework for building user interfaces.'
      },
      {
        id: 'js-inter-19',
        question: 'What is the output of [...\'abc\']?',
        options: [
          '[\'abc\']',
          '[\'a\', \'b\', \'c\']',
          '[\'a b c\']',
          '[\'a\', \'abc\']'
        ],
        correctAnswer: 1,
        explanation: 'The spread operator on a string splits it into individual characters: [\'a\', \'b\', \'c\'].'
      },
      {
        id: 'js-inter-20',
        question: 'What will Boolean("0") return?',
        options: [
          'false',
          'true',
          'undefined',
          '0'
        ],
        correctAnswer: 1,
        explanation: 'Any non-empty string is truthy in JavaScript, so Boolean("0") returns true.'
      },
      {
        id: 'js-inter-21',
        question: 'How can you delay execution in JS?',
        options: [
          'pause()',
          'setPause()',
          'setTimeout()',
          'wait()'
        ],
        correctAnswer: 2,
        explanation: 'setTimeout() executes code after a specified delay in milliseconds.'
      }
    ]
  },
  {
    id: 'javascript-advanced',
    title: 'JavaScript - Advanced',
    description: 'Challenge your advanced JavaScript programming knowledge',
    skillCategory: 'JavaScript',
    difficulty: 'advanced',
    questions: [
      {
        id: 'js-adv-1',
        question: 'What is the output of console.log([] + [])?',
        options: [
          '[]',
          'undefined',
          '""',
          'null'
        ],
        correctAnswer: 2,
        explanation: 'When two arrays are coerced to strings and concatenated, they become empty strings, resulting in an empty string "".'
      },
      {
        id: 'js-adv-2',
        question: 'What does Function.prototype.bind() return?',
        options: [
          'A copy of the function',
          'A new function bound to the provided context',
          'Nothing',
          'A promise'
        ],
        correctAnswer: 1,
        explanation: 'bind() creates a new function with this bound to the given object and any provided arguments.'
      },
      {
        id: 'js-adv-3',
        question: 'What is the result of typeof null in JavaScript?',
        options: [
          'null',
          'object',
          'undefined',
          'boolean'
        ],
        correctAnswer: 1,
        explanation: 'This is a well-known JavaScript quirk; typeof null returns "object" due to a bug in the original implementation.'
      },
      {
        id: 'js-adv-4',
        question: 'What does the !! operator do?',
        options: [
          'Negates a value',
          'Converts a value to boolean',
          'Compares values',
          'Removes falsy values'
        ],
        correctAnswer: 1,
        explanation: 'Double negation (!!) converts any value to its boolean equivalent.'
      },
      {
        id: 'js-adv-5',
        question: 'Which will throw a ReferenceError?',
        options: [
          'typeof undeclaredVar',
          'undeclaredVar',
          'null + 1',
          'undefined + 1'
        ],
        correctAnswer: 1,
        explanation: 'Accessing an undeclared variable throws a ReferenceError, while typeof returns "undefined" for undeclared variables.'
      },
      {
        id: 'js-adv-6',
        question: 'How are variables scoped in try...catch blocks?',
        options: [
          'Global',
          'The catch block variable is block-scoped',
          'Function scoped',
          'Not scoped'
        ],
        correctAnswer: 1,
        explanation: 'Variables declared in catch(e) are block-scoped to the catch block.'
      },
      {
        id: 'js-adv-7',
        question: 'What does Promise.resolve().then(() => console.log(1)); console.log(2); output?',
        options: [
          '1 2',
          '2 1',
          'undefined',
          'error'
        ],
        correctAnswer: 1,
        explanation: 'The then() callback is asynchronous and executed after the current execution context, so console.log(2) runs first.'
      },
      {
        id: 'js-adv-8',
        question: 'What is the purpose of a Symbol in JS?',
        options: [
          'To represent arrays',
          'To define functions',
          'To create unique object keys',
          'To handle errors'
        ],
        correctAnswer: 2,
        explanation: 'Symbols create unique identifiers that can be used as object property keys without collision risk.'
      },
      {
        id: 'js-adv-9',
        question: 'What is the difference between Object.seal() and Object.freeze()?',
        options: [
          'Same behavior',
          'seal prevents adding new props; freeze makes all props immutable',
          'freeze is stricter than seal',
          'seal deletes keys'
        ],
        correctAnswer: 2,
        explanation: 'Object.freeze() prevents all modifications; Object.seal() allows changing existing properties but not adding/removing them.'
      },
      {
        id: 'js-adv-10',
        question: 'How do arrow functions handle this?',
        options: [
          'They define their own this',
          'They inherit this from the parent scope',
          'They always use window',
          'They create new context'
        ],
        correctAnswer: 1,
        explanation: 'Arrow functions use lexical scoping for this, inheriting it from the enclosing scope.'
      },
      {
        id: 'js-adv-11',
        question: 'How can you deep clone an object in JS?',
        options: [
          'Object.clone()',
          'Object.assign()',
          'JSON.parse(JSON.stringify(obj))',
          'clone(obj)'
        ],
        correctAnswer: 2,
        explanation: 'JSON.parse(JSON.stringify(obj)) performs deep cloning, though it has limitations with functions, dates, and circular references.'
      },
      {
        id: 'js-adv-12',
        question: 'What does setTimeout(fn, 0) actually do?',
        options: [
          'Executes immediately',
          'Queues function after current call stack',
          'Blocks execution',
          'Executes in parallel'
        ],
        correctAnswer: 1,
        explanation: 'Even with 0ms timeout, the function is queued to execute after the current call stack completes.'
      },
      {
        id: 'js-adv-13',
        question: 'What happens if a generator function is called without yield?',
        options: [
          'It throws error',
          'It returns a generator that immediately completes',
          'It waits for yield',
          'It freezes'
        ],
        correctAnswer: 1,
        explanation: 'A generator without yield still returns a generator object that immediately completes when iterated.'
      },
      {
        id: 'js-adv-14',
        question: 'Which of these is not hoisted?',
        options: [
          'var',
          'function',
          'let',
          'All of the above'
        ],
        correctAnswer: 2,
        explanation: 'let and const are hoisted but not initialized, creating a temporal dead zone. var is hoisted and initialized to undefined.'
      },
      {
        id: 'js-adv-15',
        question: 'What\'s the difference between == and ===?',
        options: [
          '== compares types',
          '=== is a shortcut for ==',
          '== allows type coercion; === doesn\'t',
          'None'
        ],
        correctAnswer: 2,
        explanation: '== performs type coercion before comparison, while === enforces strict equality (type + value).'
      },
      {
        id: 'js-adv-16',
        question: 'What is tail call optimization?',
        options: [
          'Delays function calls',
          'Calls the function without growing the call stack',
          'Binds to tail objects',
          'Adds memory'
        ],
        correctAnswer: 1,
        explanation: 'Tail call optimization allows recursive functions to execute without growing the call stack (if the engine supports it).'
      },
      {
        id: 'js-adv-17',
        question: 'What does Object.getOwnPropertyDescriptors() return?',
        options: [
          'Array of props',
          'Property descriptors including value, writable, etc.',
          'Object keys',
          'Class list'
        ],
        correctAnswer: 1,
        explanation: 'It returns an object containing all own property descriptors of an object, including metadata like writable, enumerable, configurable.'
      },
      {
        id: 'js-adv-18',
        question: 'What is the WeakMap used for?',
        options: [
          'Fast lookup',
          'Store object keys without preventing garbage collection',
          'Deep copying',
          'Iteration'
        ],
        correctAnswer: 1,
        explanation: 'WeakMap keys are weakly held, allowing garbage collection of objects used as keys when no other references exist.'
      },
      {
        id: 'js-adv-19',
        question: 'What happens when an async function returns a value?',
        options: [
          'Returns the value',
          'Returns a Promise that resolves to the value',
          'Throws error',
          'Waits forever'
        ],
        correctAnswer: 1,
        explanation: 'Async functions always return a Promise, wrapping the return value in a resolved Promise.'
      },
      {
        id: 'js-adv-20',
        question: 'Which feature allows JS to handle operations off the main thread?',
        options: [
          'sync',
          'Web Workers',
          'Promises',
          'Intervals'
        ],
        correctAnswer: 1,
        explanation: 'Web Workers provide true multi-threading in JavaScript, allowing operations to run off the main thread.'
      },
      {
        id: 'js-adv-21',
        question: 'What does Object.defineProperty() allow you to do?',
        options: [
          'Make arrays',
          'Define custom property behaviors (e.g. writable, enumerable)',
          'Make classes',
          'Bind functions'
        ],
        correctAnswer: 1,
        explanation: 'Object.defineProperty() allows fine-grained control over property behavior, including writable, enumerable, configurable, and getter/setter functions.'
      }
    ]
  }
];
