
import { Quiz } from '@/types';
import { pythonQuizzes } from './pythonQuizzes';
import { cQuizzes } from './cQuizzes';
import { javascriptQuizzes } from './javascriptQuizzes';
import { cppQuizzes } from './cppQuizzes';
import { htmlQuizzes } from './htmlQuizzes';

// Export all language quizzes
export const languageQuizzes: Quiz[] = [
  ...pythonQuizzes,
  ...cQuizzes,
  ...javascriptQuizzes,
  ...cppQuizzes,
  ...htmlQuizzes,
  // Add other language quizzes here in the future
];
