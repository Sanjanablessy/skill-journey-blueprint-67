
import { Quiz } from '@/types';
import { pythonQuizzes } from './pythonQuizzes';
import { cQuizzes } from './cQuizzes';
import { cppQuizzes } from './cppQuizzes';

// Export programming language quizzes (pure programming languages)
export const languageQuizzes: Quiz[] = [
  ...pythonQuizzes,
  ...cQuizzes,
  ...cppQuizzes,
  // Add other programming language quizzes here in the future
];
