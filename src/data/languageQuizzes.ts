
import { Quiz } from '@/types';
import { pythonQuizzes } from './pythonQuizzes';
import { cQuizzes } from './cQuizzes';
import { javascriptQuizzes } from './javascriptQuizzes';

// Export all language quizzes
export const languageQuizzes: Quiz[] = [
  ...pythonQuizzes,
  ...cQuizzes,
  ...javascriptQuizzes,
  // Add other language quizzes here in the future
];
