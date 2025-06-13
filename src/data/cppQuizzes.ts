
import { Quiz } from '@/types';

export const cppQuizzes: Quiz[] = [
  {
    id: 'cpp-beginner',
    title: 'C++ - Beginner',
    description: 'Test your knowledge of basic C++ programming concepts',
    skillCategory: 'C++ Programming',
    difficulty: 'beginner',
    questions: [
      {
        id: 'cpp-basic-1',
        question: 'Which of the following is a valid C++ comment?',
        options: [
          '// Comment',
          '/* Comment',
          '** Comment **',
          '# Comment'
        ],
        correctAnswer: 0,
        explanation: '// is used for single-line comments in C++.'
      },
      {
        id: 'cpp-basic-2',
        question: 'What is the correct way to declare a variable in C++?',
        options: [
          'int x = int(5);',
          'int x = 5;',
          'x int = 5;',
          'int = x 5;'
        ],
        correctAnswer: 1,
        explanation: 'Syntax for variable declaration is type variable = value;.'
      },
      {
        id: 'cpp-basic-3',
        question: 'Which of these is not a valid C++ data type?',
        options: [
          'int',
          'real',
          'double',
          'char'
        ],
        correctAnswer: 1,
        explanation: 'real is not a valid C++ data type.'
      },
      {
        id: 'cpp-basic-4',
        question: 'Which keyword is used to create a class?',
        options: [
          'structure',
          'define',
          'class',
          'type'
        ],
        correctAnswer: 2,
        explanation: 'C++ uses class to define classes.'
      },
      {
        id: 'cpp-basic-5',
        question: 'Which operator is used to access members of a class using a pointer?',
        options: [
          '.',
          '->',
          '::',
          '&'
        ],
        correctAnswer: 1,
        explanation: '-> is used to access class members via pointers.'
      },
      {
        id: 'cpp-basic-6',
        question: 'Which function is the entry point of every C++ program?',
        options: [
          'start()',
          'mainprogram()',
          'main()',
          'execute()'
        ],
        correctAnswer: 2,
        explanation: 'main() is the standard entry point.'
      },
      {
        id: 'cpp-basic-7',
        question: 'Which of the following denotes an array?',
        options: [
          'int a;',
          'int a[5];',
          'array int a;',
          'int array = a[5];'
        ],
        correctAnswer: 1,
        explanation: 'Square brackets denote arrays.'
      },
      {
        id: 'cpp-basic-8',
        question: 'Which keyword is used to return a value from a function?',
        options: [
          'send',
          'return',
          'output',
          'reply'
        ],
        correctAnswer: 1,
        explanation: 'return sends a value back to the caller.'
      },
      {
        id: 'cpp-basic-9',
        question: 'What is the output of cout << 2 + 3;?',
        options: [
          '23',
          '5',
          '2 + 3',
          'Error'
        ],
        correctAnswer: 1,
        explanation: 'The sum of 2 and 3 is 5.'
      },
      {
        id: 'cpp-basic-10',
        question: 'Which header is required to use cout and cin?',
        options: [
          '<stdlib.h>',
          '<cstdio>',
          '<iostream>',
          '<stdio.h>'
        ],
        correctAnswer: 2,
        explanation: 'iostream includes cin and cout definitions.'
      },
      {
        id: 'cpp-basic-11',
        question: 'What does endl do in C++?',
        options: [
          'Ends program',
          'Adds newline',
          'Adds tab',
          'Stops loop'
        ],
        correctAnswer: 1,
        explanation: 'endl inserts a newline character.'
      },
      {
        id: 'cpp-basic-12',
        question: 'Which loop runs at least once?',
        options: [
          'for',
          'while',
          'do...while',
          'loop'
        ],
        correctAnswer: 2,
        explanation: 'do...while checks condition after executing the loop.'
      },
      {
        id: 'cpp-basic-13',
        question: 'Which of the following is a correct if condition syntax?',
        options: [
          'if (x > y)',
          'if (x > y)',
          'if x > y then',
          'if x > y:'
        ],
        correctAnswer: 0,
        explanation: 'Standard C++ syntax for if condition.'
      },
      {
        id: 'cpp-basic-14',
        question: 'How do you include a header file in C++?',
        options: [
          'include(iostream)',
          '#include <iostream>',
          'import iostream;',
          'load iostream;'
        ],
        correctAnswer: 1,
        explanation: '#include <header> is correct syntax.'
      },
      {
        id: 'cpp-basic-15',
        question: 'Which of these is used for a multi-line comment?',
        options: [
          '// Comment //',
          '# Comment #',
          '/* Comment */',
          '** Comment **'
        ],
        correctAnswer: 2,
        explanation: '/* */ is used for multi-line comments.'
      },
      {
        id: 'cpp-basic-16',
        question: 'What will 5 / 2 output in C++ (int division)?',
        options: [
          '2.5',
          '2',
          '3',
          'Error'
        ],
        correctAnswer: 1,
        explanation: 'Integer division discards the decimal.'
      },
      {
        id: 'cpp-basic-17',
        question: 'Which operator is used for modulus in C++?',
        options: [
          '\\',
          '%',
          'mod',
          ':'
        ],
        correctAnswer: 1,
        explanation: '% returns the remainder.'
      },
      {
        id: 'cpp-basic-18',
        question: 'Which keyword is used to create an object?',
        options: [
          'instance',
          'new',
          'make',
          'create'
        ],
        correctAnswer: 1,
        explanation: 'new allocates memory and creates objects.'
      },
      {
        id: 'cpp-basic-19',
        question: 'Which access specifier allows public access?',
        options: [
          'secure',
          'private',
          'public',
          'protected'
        ],
        correctAnswer: 2,
        explanation: 'public allows universal access.'
      },
      {
        id: 'cpp-basic-20',
        question: 'What is the use of cin?',
        options: [
          'Output',
          'Conditional statement',
          'Input',
          'Inline function'
        ],
        correctAnswer: 2,
        explanation: 'cin is used to take user input.'
      },
      {
        id: 'cpp-basic-21',
        question: 'Which keyword is used to stop a loop?',
        options: [
          'stop',
          'end',
          'break',
          'halt'
        ],
        correctAnswer: 2,
        explanation: 'break exits the loop early.'
      }
    ]
  },
  {
    id: 'cpp-intermediate',
    title: 'C++ - Intermediate',
    description: 'Test your intermediate C++ programming skills',
    skillCategory: 'C++ Programming',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'cpp-inter-1',
        question: 'What is function overloading in C++?',
        options: [
          'Multiple functions with same name but different return types',
          'Multiple functions with same name but different parameters',
          'Redefining a function in a derived class',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'Function overloading allows same name with different parameter types/number.'
      },
      {
        id: 'cpp-inter-2',
        question: 'Which feature allows reusing code in C++?',
        options: [
          'Abstraction',
          'Polymorphism',
          'Inheritance',
          'Encapsulation'
        ],
        correctAnswer: 2,
        explanation: 'Inheritance enables code reuse by deriving from base classes.'
      },
      {
        id: 'cpp-inter-3',
        question: 'Which operator cannot be overloaded?',
        options: [
          '+',
          '[]',
          '()',
          '::'
        ],
        correctAnswer: 3,
        explanation: ':: is the scope resolution operator and cannot be overloaded.'
      },
      {
        id: 'cpp-inter-4',
        question: 'What is the size of a bool in C++?',
        options: [
          '2 bytes',
          '1 byte',
          '4 bytes',
          'Depends on compiler'
        ],
        correctAnswer: 1,
        explanation: 'bool occupies 1 byte typically.'
      },
      {
        id: 'cpp-inter-5',
        question: 'What is a virtual function?',
        options: [
          'A template function',
          'A function declared with virtual for runtime polymorphism',
          'A static function',
          'A friend function'
        ],
        correctAnswer: 1,
        explanation: 'Virtual functions support late binding.'
      },
      {
        id: 'cpp-inter-6',
        question: 'What is the output of 5 / 2 in C++?',
        options: [
          '2.5',
          '2',
          '3',
          'Error'
        ],
        correctAnswer: 1,
        explanation: 'Integer division truncates the decimal part.'
      },
      {
        id: 'cpp-inter-7',
        question: 'What is the use of a destructor?',
        options: [
          'Allocate memory',
          'Return value',
          'Free resources when object is destroyed',
          'Define object'
        ],
        correctAnswer: 2,
        explanation: 'Destructor cleans up memory or resources.'
      },
      {
        id: 'cpp-inter-8',
        question: 'Which container stores unique elements in sorted order?',
        options: [
          'vector',
          'set',
          'list',
          'map'
        ],
        correctAnswer: 1,
        explanation: 'set stores unique, sorted elements.'
      },
      {
        id: 'cpp-inter-9',
        question: 'Which STL component allows key-value pair storage?',
        options: [
          'list',
          'map',
          'set',
          'vector'
        ],
        correctAnswer: 1,
        explanation: 'map stores data in key-value pairs.'
      },
      {
        id: 'cpp-inter-10',
        question: 'Which loop guarantees at least one execution?',
        options: [
          'for',
          'while',
          'do-while',
          'None'
        ],
        correctAnswer: 2,
        explanation: 'do-while executes body before condition.'
      },
      {
        id: 'cpp-inter-11',
        question: 'What is the output of sizeof(char)?',
        options: [
          '0',
          '1',
          '2',
          '4'
        ],
        correctAnswer: 1,
        explanation: 'A char is always 1 byte.'
      },
      {
        id: 'cpp-inter-12',
        question: 'What is the purpose of the friend keyword?',
        options: [
          'Grant class extra security',
          'Allow access to private members',
          'Block access',
          'Convert type'
        ],
        correctAnswer: 1,
        explanation: 'Friend functions/classes can access private/protected members.'
      },
      {
        id: 'cpp-inter-13',
        question: 'Which casting is safest in C++?',
        options: [
          'C-style casting',
          'reinterpret_cast',
          'static_cast',
          'force_cast'
        ],
        correctAnswer: 2,
        explanation: 'static_cast checks compatibility.'
      },
      {
        id: 'cpp-inter-14',
        question: 'What does new return if memory allocation fails?',
        options: [
          '-1',
          '0',
          'Throws bad_alloc',
          'Null pointer'
        ],
        correctAnswer: 2,
        explanation: 'In C++, new throws exception on failure.'
      },
      {
        id: 'cpp-inter-15',
        question: 'Which is not a feature of C++?',
        options: [
          'Encapsulation',
          'Polymorphism',
          'Garbage collection',
          'Abstraction'
        ],
        correctAnswer: 2,
        explanation: 'C++ lacks built-in garbage collection.'
      },
      {
        id: 'cpp-inter-16',
        question: 'Which keyword is used to inherit from a class?',
        options: [
          'extends',
          ':',
          'inherits',
          '->'
        ],
        correctAnswer: 1,
        explanation: ': is used for inheritance.'
      },
      {
        id: 'cpp-inter-17',
        question: 'How are templates defined in C++?',
        options: [
          'class template {}',
          'template <typename T>',
          'generic<T>',
          'template(T)'
        ],
        correctAnswer: 1,
        explanation: 'Templates use template <typename T>.'
      },
      {
        id: 'cpp-inter-18',
        question: 'Which keyword is used to avoid multiple inclusions?',
        options: [
          '#define',
          '#pragma once',
          '#ifndef',
          'include_guard'
        ],
        correctAnswer: 1,
        explanation: '#pragma once prevents multiple inclusions.'
      },
      {
        id: 'cpp-inter-19',
        question: 'What is RTTI?',
        options: [
          'Real-time template interface',
          'Runtime translation interface',
          'Run-Time Type Information',
          'Runtime type input'
        ],
        correctAnswer: 2,
        explanation: 'RTTI is used for determining type at runtime.'
      },
      {
        id: 'cpp-inter-20',
        question: 'What does explicit keyword do in C++?',
        options: [
          'Hides class',
          'Prevents implicit conversions',
          'Makes variable constant',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'explicit avoids unwanted implicit conversions.'
      },
      {
        id: 'cpp-inter-21',
        question: 'What is the role of mutable keyword?',
        options: [
          'Makes variable constant',
          'Allows modification in const object',
          'Hides member',
          'Deletes member'
        ],
        correctAnswer: 1,
        explanation: 'mutable lets you modify variables even in const objects.'
      }
    ]
  },
  {
    id: 'cpp-advanced',
    title: 'C++ - Advanced',
    description: 'Challenge your advanced C++ programming knowledge',
    skillCategory: 'C++ Programming',
    difficulty: 'advanced',
    questions: [
      {
        id: 'cpp-adv-1',
        question: 'What is the output of typeid(10.5).name() in C++?',
        options: [
          'int',
          'float',
          'double',
          'long'
        ],
        correctAnswer: 2,
        explanation: '10.5 is treated as a double literal in C++.'
      },
      {
        id: 'cpp-adv-2',
        question: 'Which header is required for smart pointers like unique_ptr?',
        options: [
          '<memory.h>',
          '<memory>',
          '<smartptr>',
          '<utility>'
        ],
        correctAnswer: 1,
        explanation: 'Smart pointers are part of the C++11 memory header.'
      },
      {
        id: 'cpp-adv-3',
        question: 'What does decltype do in C++?',
        options: [
          'Declares class',
          'Deduces type of expression',
          'Changes type',
          'Defines function'
        ],
        correctAnswer: 1,
        explanation: 'decltype returns the type of the expression at compile time.'
      },
      {
        id: 'cpp-adv-4',
        question: 'Which keyword enables run-time polymorphism?',
        options: [
          'virtual',
          'override',
          'Both A and B',
          'static'
        ],
        correctAnswer: 2,
        explanation: 'Both virtual and override help achieve run-time polymorphism.'
      },
      {
        id: 'cpp-adv-5',
        question: 'What does noexcept signify in C++?',
        options: [
          'Function throws no error',
          'Function guarantees not to throw exceptions',
          'Function returns void',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'noexcept is used to declare non-throwing functions.'
      },
      {
        id: 'cpp-adv-6',
        question: 'What is the difference between emplace_back() and push_back()?',
        options: [
          'No difference',
          'emplace_back() constructs in-place',
          'push_back() is faster',
          'emplace_back() works only on vectors'
        ],
        correctAnswer: 1,
        explanation: 'emplace_back() avoids copy by constructing in-place.'
      },
      {
        id: 'cpp-adv-7',
        question: 'What happens if delete is used with non-pointer?',
        options: [
          'Compiles fine',
          'Compile-time error',
          'Runtime warning',
          'Memory leak'
        ],
        correctAnswer: 1,
        explanation: 'delete requires a pointer.'
      },
      {
        id: 'cpp-adv-8',
        question: 'Which C++ construct cannot be overridden?',
        options: [
          'Virtual function',
          'Constructor',
          'Destructor',
          'Member function'
        ],
        correctAnswer: 1,
        explanation: 'Constructors can\'t be inherited or overridden.'
      },
      {
        id: 'cpp-adv-9',
        question: 'Which method ensures only one instance of a class?',
        options: [
          'Factory Pattern',
          'Singleton Pattern',
          'Observer Pattern',
          'Bridge Pattern'
        ],
        correctAnswer: 1,
        explanation: 'Singleton restricts class to single instance.'
      },
      {
        id: 'cpp-adv-10',
        question: 'What does = delete do in function declaration?',
        options: [
          'Calls the function',
          'Prevents it from being used',
          'Deletes memory',
          'Makes private'
        ],
        correctAnswer: 1,
        explanation: '= delete disables the function.'
      },
      {
        id: 'cpp-adv-11',
        question: 'Which type of inheritance may cause ambiguity?',
        options: [
          'Single',
          'Multilevel',
          'Multiple',
          'Hybrid'
        ],
        correctAnswer: 2,
        explanation: 'Multiple inheritance may cause diamond problem.'
      },
      {
        id: 'cpp-adv-12',
        question: 'What is the advantage of move semantics?',
        options: [
          'More memory',
          'Avoids deep copies',
          'Safer code',
          'Slower performance'
        ],
        correctAnswer: 1,
        explanation: 'Move semantics transfers resources efficiently.'
      },
      {
        id: 'cpp-adv-13',
        question: 'Which operator cannot be overloaded for class?',
        options: [
          '+',
          '::',
          '[]',
          '->'
        ],
        correctAnswer: 1,
        explanation: 'Scope resolution :: can\'t be overloaded.'
      },
      {
        id: 'cpp-adv-14',
        question: 'Which design pattern uses delegation?',
        options: [
          'Singleton',
          'Proxy',
          'Factory',
          'Adapter'
        ],
        correctAnswer: 1,
        explanation: 'Proxy controls access via delegation.'
      },
      {
        id: 'cpp-adv-15',
        question: 'What is the role of constexpr?',
        options: [
          'Force runtime value',
          'Compute value at compile-time',
          'Constant pointer',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'constexpr evaluates expressions at compile time.'
      },
      {
        id: 'cpp-adv-16',
        question: 'Which of the following is a C++20 feature?',
        options: [
          'auto',
          'concepts',
          'lambda',
          'unique_ptr'
        ],
        correctAnswer: 1,
        explanation: 'concepts were introduced in C++20.'
      },
      {
        id: 'cpp-adv-17',
        question: 'What is RAII in C++?',
        options: [
          'Runtime allocation',
          'Resource acquisition is initialization',
          'Runtime API interface',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'RAII ensures resources are tied to object lifetime.'
      },
      {
        id: 'cpp-adv-18',
        question: 'Which tool is used to inspect object memory layout in C++?',
        options: [
          'Constructor',
          'Operator',
          'offsetof()',
          'sizeof()'
        ],
        correctAnswer: 2,
        explanation: 'offsetof() helps determine member offset.'
      },
      {
        id: 'cpp-adv-19',
        question: 'What is the output of nullptr == NULL in C++?',
        options: [
          'true',
          'false',
          'Error',
          'Undefined'
        ],
        correctAnswer: 0,
        explanation: 'nullptr and NULL compare equal in C++.'
      },
      {
        id: 'cpp-adv-20',
        question: 'What is enable_if used for?',
        options: [
          'Templates only',
          'Enable template only when condition is true',
          'Disable inheritance',
          'Check null pointer'
        ],
        correctAnswer: 1,
        explanation: 'enable_if restricts template instantiations.'
      },
      {
        id: 'cpp-adv-21',
        question: 'Which smart pointer allows shared ownership?',
        options: [
          'unique_ptr',
          'shared_ptr',
          'raw pointer',
          'weak_ptr'
        ],
        correctAnswer: 1,
        explanation: 'shared_ptr supports reference counting and shared ownership.'
      }
    ]
  }
];
