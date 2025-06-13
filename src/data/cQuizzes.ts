
import { Quiz } from '@/types';

export const cQuizzes: Quiz[] = [
  {
    id: 'c-beginner',
    title: 'C - Beginner',
    description: 'Test your knowledge of basic C programming concepts',
    skillCategory: 'C Programming',
    difficulty: 'beginner',
    questions: [
      {
        id: 'c-basic-1',
        question: 'What is the correct syntax to include a header file in C?',
        options: [
          '#include "stdio.h"',
          'include <stdio.h>',
          '#include <stdio.h>',
          '#import <stdio.h>'
        ],
        correctAnswer: 2,
        explanation: '#include <stdio.h> is the correct syntax to include standard header files in C.'
      },
      {
        id: 'c-basic-2',
        question: 'Which of the following is a valid variable name in C?',
        options: [
          'int',
          'main',
          'total1',
          '1total'
        ],
        correctAnswer: 2,
        explanation: 'total1 is valid. Variable names can contain letters, digits, and underscores, but cannot start with a digit. int and main are reserved keywords.'
      },
      {
        id: 'c-basic-3',
        question: 'What is the correct format specifier for int?',
        options: [
          '%f',
          '%c',
          '%d',
          '%s'
        ],
        correctAnswer: 2,
        explanation: '%d is used for integers. %f is for float, %c for char, and %s for string.'
      },
      {
        id: 'c-basic-4',
        question: 'What is the default return type of the main() function?',
        options: [
          'void',
          'float',
          'int',
          'char'
        ],
        correctAnswer: 2,
        explanation: 'The main() function returns an int by default, which represents the exit status of the program.'
      },
      {
        id: 'c-basic-5',
        question: 'Which of the following is a loop construct?',
        options: [
          'if',
          'for',
          'goto',
          'switch'
        ],
        correctAnswer: 1,
        explanation: 'for is a loop construct. if is conditional, goto is a jump statement, and switch is for multiple conditions.'
      },
      {
        id: 'c-basic-6',
        question: 'What will printf("%d", 10/3); output?',
        options: [
          '3.33',
          '3',
          '0',
          '3.0'
        ],
        correctAnswer: 1,
        explanation: 'Integer division in C truncates the decimal part, so 10/3 = 3.'
      },
      {
        id: 'c-basic-7',
        question: 'What symbol is used to denote a single-line comment?',
        options: [
          '#',
          '//',
          '/*',
          '**'
        ],
        correctAnswer: 1,
        explanation: '// is used for single-line comments in C99 and later standards.'
      },
      {
        id: 'c-basic-8',
        question: 'Which operator is used to access the value at the address pointed to by a pointer?',
        options: [
          '&',
          '*',
          '@',
          '%'
        ],
        correctAnswer: 1,
        explanation: '* is the dereference operator used to access the value at a pointer address.'
      },
      {
        id: 'c-basic-9',
        question: 'What is the size of int on most 32-bit systems?',
        options: [
          '2 bytes',
          '4 bytes',
          '8 bytes',
          '1 byte'
        ],
        correctAnswer: 1,
        explanation: 'On most 32-bit systems, int is 4 bytes (32 bits).'
      },
      {
        id: 'c-basic-10',
        question: 'Which header file is needed to use printf()?',
        options: [
          'stdlib.h',
          'stdio.h',
          'conio.h',
          'math.h'
        ],
        correctAnswer: 1,
        explanation: 'stdio.h (standard input/output) contains the declaration for printf().'
      },
      {
        id: 'c-basic-11',
        question: 'What is the output of printf("%c", 65);?',
        options: [
          '65',
          'A',
          'Error',
          'a'
        ],
        correctAnswer: 1,
        explanation: 'ASCII value 65 corresponds to character A.'
      },
      {
        id: 'c-basic-12',
        question: 'How is a string represented in C?',
        options: [
          'Array of integers',
          'Pointer to float',
          'Array of characters ending with \\0',
          'None of the above'
        ],
        correctAnswer: 2,
        explanation: 'Strings in C are arrays of characters terminated by the null character \\0.'
      },
      {
        id: 'c-basic-13',
        question: 'What will 5 % 2 evaluate to?',
        options: [
          '2',
          '0',
          '1',
          '2.5'
        ],
        correctAnswer: 2,
        explanation: 'The modulo operator % returns the remainder of division. 5 % 2 = 1.'
      },
      {
        id: 'c-basic-14',
        question: 'Which of these is a correct function declaration?',
        options: [
          'int func;',
          'int func()',
          'func() int',
          'func int()'
        ],
        correctAnswer: 1,
        explanation: 'Functions are declared with return type followed by function name and parentheses.'
      },
      {
        id: 'c-basic-15',
        question: 'The break statement is used to:',
        options: [
          'Pause execution',
          'Exit a loop or switch',
          'Exit the program',
          'None of the above'
        ],
        correctAnswer: 1,
        explanation: 'break is used to exit loops (for, while, do-while) or switch statements.'
      },
      {
        id: 'c-basic-16',
        question: 'Which of the following is not a data type in C?',
        options: [
          'int',
          'float',
          'real',
          'char'
        ],
        correctAnswer: 2,
        explanation: 'real is not a data type in C. The basic types are int, float, double, and char.'
      },
      {
        id: 'c-basic-17',
        question: 'What is the result of sizeof(char)?',
        options: [
          '2',
          '4',
          '1',
          '8'
        ],
        correctAnswer: 2,
        explanation: 'char is always 1 byte by definition in C.'
      },
      {
        id: 'c-basic-18',
        question: 'Which keyword is used to define constants?',
        options: [
          'final',
          'const',
          'immutable',
          'static'
        ],
        correctAnswer: 1,
        explanation: 'const keyword is used to declare constants in C.'
      },
      {
        id: 'c-basic-19',
        question: 'Which escape sequence is used for a new line?',
        options: [
          '\\r',
          '\\n',
          '\\t',
          '\\b'
        ],
        correctAnswer: 1,
        explanation: '\\n represents a newline character. \\r is carriage return, \\t is tab, \\b is backspace.'
      },
      {
        id: 'c-basic-20',
        question: 'How do you declare a pointer to an integer?',
        options: [
          'int ptr;',
          'int *ptr;',
          'ptr *int;',
          'int &ptr;'
        ],
        correctAnswer: 1,
        explanation: 'int *ptr; declares a pointer to an integer. The * indicates it is a pointer.'
      },
      {
        id: 'c-basic-21',
        question: 'Which of the following is an invalid keyword in C?',
        options: [
          'typedef',
          'switch',
          'class',
          'return'
        ],
        correctAnswer: 2,
        explanation: 'class is not a keyword in C (it is used in C++). The others are valid C keywords.'
      }
    ]
  },
  {
    id: 'c-intermediate',
    title: 'C - Intermediate',
    description: 'Test your intermediate C programming skills',
    skillCategory: 'C Programming',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'c-inter-1',
        question: 'Which function is used to allocate memory dynamically?',
        options: [
          'calloc()',
          'malloc()',
          'realloc()',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'All three functions are used for dynamic memory allocation: malloc() allocates memory, calloc() allocates and initializes to zero, realloc() resizes allocated memory.'
      },
      {
        id: 'c-inter-2',
        question: 'What is the output of int a = 5; printf("%d", a++);?',
        options: [
          '6',
          '5',
          'Error',
          'Undefined'
        ],
        correctAnswer: 1,
        explanation: 'Post-increment (a++) uses the current value first, then increments. So it prints 5, then a becomes 6.'
      },
      {
        id: 'c-inter-3',
        question: 'How is a structure defined?',
        options: [
          'struct name { };',
          'struct = { };',
          'structure name { };',
          'define struct name { };'
        ],
        correctAnswer: 0,
        explanation: 'Structures are defined using the struct keyword followed by a name and braces containing member declarations.'
      },
      {
        id: 'c-inter-4',
        question: 'What will printf("%d", sizeof(3.14)); output?',
        options: [
          '4',
          '8',
          '2',
          'Depends on compiler'
        ],
        correctAnswer: 1,
        explanation: '3.14 is a double literal, and sizeof(double) is typically 8 bytes on most systems.'
      },
      {
        id: 'c-inter-5',
        question: 'How are strings compared in C?',
        options: [
          '==',
          'strcmp()',
          'equals()',
          'compare()'
        ],
        correctAnswer: 1,
        explanation: 'strcmp() function from string.h is used to compare strings. == compares pointers, not string contents.'
      },
      {
        id: 'c-inter-6',
        question: 'What is the result of 3 << 2?',
        options: [
          '12',
          '6',
          '9',
          '8'
        ],
        correctAnswer: 0,
        explanation: 'Left shift operator << shifts bits left. 3 << 2 means shift 3 (binary 11) left by 2 positions = 1100 (binary) = 12.'
      },
      {
        id: 'c-inter-7',
        question: 'What is a correct way to declare a pointer to a function?',
        options: [
          'int *func();',
          'int (*func)();',
          '*int func();',
          'func int*();'
        ],
        correctAnswer: 1,
        explanation: 'int (*func)(); declares a pointer to a function that returns int. Parentheses are crucial for correct precedence.'
      },
      {
        id: 'c-inter-8',
        question: 'What is the scope of a variable declared static inside a function?',
        options: [
          'Local to the block',
          'Global',
          'File scope',
          'Function lifetime'
        ],
        correctAnswer: 3,
        explanation: 'Static variables inside functions retain their value between function calls (function lifetime) but are only accessible within that function.'
      },
      {
        id: 'c-inter-9',
        question: 'What is a union in C?',
        options: [
          'A data type to combine integers',
          'Like structure, but memory is shared',
          'Like an array of structures',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'A union is like a structure, but all members share the same memory location. Only one member can hold a value at a time.'
      },
      {
        id: 'c-inter-10',
        question: 'What is the output of char c = 255; printf("%d", c);?',
        options: [
          '255',
          '-1',
          'Implementation defined',
          '0'
        ],
        correctAnswer: 2,
        explanation: 'The result depends on whether char is signed or unsigned by default, which is implementation-defined.'
      },
      {
        id: 'c-inter-11',
        question: 'Which of these is used to handle files?',
        options: [
          'fread()',
          'fopen()',
          'fclose()',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'All three functions are used for file handling: fopen() opens files, fread() reads from files, fclose() closes files.'
      },
      {
        id: 'c-inter-12',
        question: 'A pointer that doesn\'t point to a valid memory location is called:',
        options: [
          'Empty pointer',
          'Null pointer',
          'Dangling pointer',
          'Void pointer'
        ],
        correctAnswer: 2,
        explanation: 'A dangling pointer points to memory that has been freed or is no longer valid. A null pointer points to NULL.'
      },
      {
        id: 'c-inter-13',
        question: '#define PI 3.14 is an example of:',
        options: [
          'Macro',
          'Constant',
          'Global variable',
          'Preprocessor function'
        ],
        correctAnswer: 0,
        explanation: '#define creates a macro - a text replacement performed by the preprocessor before compilation.'
      },
      {
        id: 'c-inter-14',
        question: 'Function with same name and parameters defined again causes:',
        options: [
          'Overloading',
          'Compilation error',
          'Works fine',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'C does not support function overloading. Defining the same function twice results in a compilation error.'
      },
      {
        id: 'c-inter-15',
        question: 'What will fseek(file, 0, SEEK_END); do?',
        options: [
          'Rewind file',
          'Move to beginning',
          'Move to end',
          'Do nothing'
        ],
        correctAnswer: 2,
        explanation: 'fseek() with SEEK_END moves the file pointer to the end of the file.'
      },
      {
        id: 'c-inter-16',
        question: 'Which operator is used to find address of variable?',
        options: [
          '*',
          '@',
          '&',
          '#'
        ],
        correctAnswer: 2,
        explanation: 'The address-of operator & returns the memory address of a variable.'
      },
      {
        id: 'c-inter-17',
        question: 'Which function ends a program?',
        options: [
          'exit()',
          'end()',
          'stop()',
          'halt()'
        ],
        correctAnswer: 0,
        explanation: 'exit() function from stdlib.h terminates the program and returns an exit status to the operating system.'
      },
      {
        id: 'c-inter-18',
        question: 'The ternary operator in C is:',
        options: [
          '?:',
          '??',
          '||',
          '%%'
        ],
        correctAnswer: 0,
        explanation: 'The ternary operator ?: is a conditional operator that provides a shorthand for if-else statements.'
      },
      {
        id: 'c-inter-19',
        question: 'What is a void pointer?',
        options: [
          'Pointer to nothing',
          'Generic pointer',
          'Null pointer',
          'Constant pointer'
        ],
        correctAnswer: 1,
        explanation: 'A void pointer is a generic pointer that can point to any data type but must be cast before dereferencing.'
      },
      {
        id: 'c-inter-20',
        question: 'A function that calls itself is called:',
        options: [
          'Recursive',
          'Looping',
          'Nested',
          'Pointer function'
        ],
        correctAnswer: 0,
        explanation: 'A recursive function is one that calls itself, either directly or indirectly.'
      },
      {
        id: 'c-inter-21',
        question: 'Which keyword is used to prevent multiple inclusion of header files?',
        options: [
          'ifndef',
          'define',
          'endif',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'Header guards use #ifndef, #define, and #endif together to prevent multiple inclusion of the same header file.'
      }
    ]
  },
  {
    id: 'c-advanced',
    title: 'C - Advanced',
    description: 'Challenge your advanced C programming knowledge',
    skillCategory: 'C Programming',
    difficulty: 'advanced',
    questions: [
      {
        id: 'c-adv-1',
        question: 'What is the output of printf("%d", printf("Hello"));?',
        options: [
          'Hello5',
          '5Hello',
          'Error',
          'Depends on system'
        ],
        correctAnswer: 0,
        explanation: 'printf("Hello") prints "Hello" and returns 5 (characters printed). The outer printf then prints this return value, resulting in "Hello5".'
      },
      {
        id: 'c-adv-2',
        question: 'What is meant by "undefined behavior" in C?',
        options: [
          'Compiler error',
          'Runtime crash',
          'Behavior not specified by C standard',
          'None'
        ],
        correctAnswer: 2,
        explanation: 'Undefined behavior means the C standard does not specify what should happen, so the program may do anything - crash, produce wrong results, or appear to work.'
      },
      {
        id: 'c-adv-3',
        question: 'What is volatile keyword used for?',
        options: [
          'Prevent optimization',
          'Change type',
          'For constants',
          'File operations'
        ],
        correctAnswer: 0,
        explanation: 'volatile tells the compiler that a variable may be changed by external factors, preventing certain optimizations.'
      },
      {
        id: 'c-adv-4',
        question: 'What will be the output of:\n\nint a = 10;\nif(a = 0)\n    printf("Zero");\nelse\n    printf("Non-zero");',
        options: [
          'Zero',
          'Non-zero',
          'Error',
          'None'
        ],
        correctAnswer: 0,
        explanation: 'This is assignment (a = 0), not comparison (a == 0). Assignment returns the assigned value (0), which is false, so "Zero" is printed.'
      },
      {
        id: 'c-adv-5',
        question: 'Can a static function be called outside its file?',
        options: [
          'Yes',
          'No'
        ],
        correctAnswer: 1,
        explanation: 'Static functions have internal linkage and can only be called within the same translation unit (file) where they are defined.'
      },
      {
        id: 'c-adv-6',
        question: 'What is the output of:\n\nint a = 2;\nprintf("%d", a+++a);',
        options: [
          '6',
          '5',
          'Compiler error',
          'Undefined'
        ],
        correctAnswer: 3,
        explanation: 'This expression has undefined behavior because it modifies a variable and uses its value between sequence points.'
      },
      {
        id: 'c-adv-7',
        question: 'Memory leak happens when:',
        options: [
          'Memory is overwritten',
          'Memory is not freed',
          'Stack is full',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'A memory leak occurs when dynamically allocated memory is not freed, making it inaccessible but still reserved.'
      },
      {
        id: 'c-adv-8',
        question: 'Which tool checks memory leaks?',
        options: [
          'GDB',
          'Valgrind',
          'GCC',
          'Lint'
        ],
        correctAnswer: 1,
        explanation: 'Valgrind is a programming tool for memory debugging, memory leak detection, and profiling.'
      },
      {
        id: 'c-adv-9',
        question: 'Which of the following is not thread-safe?',
        options: [
          'strcpy()',
          'strncpy()',
          'memcpy()',
          'All are safe'
        ],
        correctAnswer: 0,
        explanation: 'Standard C library functions like strcpy() are generally not thread-safe. Thread safety depends on implementation and usage context.'
      },
      {
        id: 'c-adv-10',
        question: 'What is the maximum number of main() functions in a C program?',
        options: [
          '1',
          '2',
          'Unlimited',
          '0'
        ],
        correctAnswer: 0,
        explanation: 'A C program can have only one main() function, which serves as the entry point for program execution.'
      },
      {
        id: 'c-adv-11',
        question: 'Which of the following allocates memory on the stack?',
        options: [
          'malloc()',
          'calloc()',
          'alloca()',
          'realloc()'
        ],
        correctAnswer: 2,
        explanation: 'alloca() allocates memory on the stack (though it is not standard C). malloc(), calloc(), and realloc() allocate on the heap.'
      },
      {
        id: 'c-adv-12',
        question: 'What does the restrict keyword do?',
        options: [
          'Restricts variable access',
          'Tells compiler pointer is not aliased'
        ],
        correctAnswer: 1,
        explanation: 'restrict (C99) tells the compiler that a pointer is the only way to access the object it points to, enabling optimizations.'
      },
      {
        id: 'c-adv-13',
        question: 'What is #pragma used for?',
        options: [
          'Comments',
          'Control compiler behavior'
        ],
        correctAnswer: 1,
        explanation: '#pragma provides a way to request special behavior from the compiler, such as optimization settings or warnings.'
      },
      {
        id: 'c-adv-14',
        question: 'Which header is needed for variable arguments in a function?',
        options: [
          'stdarg.h'
        ],
        correctAnswer: 0,
        explanation: 'stdarg.h provides macros (va_list, va_start, va_arg, va_end) for handling variable argument lists in functions.'
      },
      {
        id: 'c-adv-15',
        question: 'In C, function pointers are used to:',
        options: [
          'Call functions dynamically'
        ],
        correctAnswer: 0,
        explanation: 'Function pointers allow calling functions indirectly, enabling dynamic function calls and callback mechanisms.'
      },
      {
        id: 'c-adv-16',
        question: 'What does __attribute__((packed)) do?',
        options: [
          'Disables padding in structure'
        ],
        correctAnswer: 0,
        explanation: '__attribute__((packed)) (GCC extension) tells the compiler to minimize padding in structures, reducing memory usage but potentially affecting performance.'
      },
      {
        id: 'c-adv-17',
        question: 'Which operator cannot be overloaded in C?',
        options: [
          '=',
          '+',
          '->',
          'All (C does not support operator overloading)'
        ],
        correctAnswer: 3,
        explanation: 'C does not support operator overloading at all. This feature is available in C++ but not in C.'
      },
      {
        id: 'c-adv-18',
        question: 'What is the difference between char *str and char str[]?',
        options: [
          'Pointer vs Array'
        ],
        correctAnswer: 0,
        explanation: 'char *str declares a pointer to char, while char str[] declares an array of chars. They have different storage and modification properties.'
      },
      {
        id: 'c-adv-19',
        question: 'Can function return array in C?',
        options: [
          'No, but can return pointer to array'
        ],
        correctAnswer: 0,
        explanation: 'Functions cannot return arrays directly in C, but they can return pointers to arrays or pointers to the first element of an array.'
      },
      {
        id: 'c-adv-20',
        question: 'What is setjmp() and longjmp() used for?',
        options: [
          'Exception handling'
        ],
        correctAnswer: 0,
        explanation: 'setjmp() and longjmp() provide a form of non-local goto, allowing programs to jump out of deeply nested function calls, similar to exception handling.'
      },
      {
        id: 'c-adv-21',
        question: 'What will happen if free() is called twice on the same pointer?',
        options: [
          'Undefined behavior'
        ],
        correctAnswer: 0,
        explanation: 'Calling free() twice on the same pointer results in undefined behavior and may cause program crashes or memory corruption.'
      }
    ]
  }
];
