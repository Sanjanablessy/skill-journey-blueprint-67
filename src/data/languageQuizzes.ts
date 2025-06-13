
import { Quiz } from '@/types';
import { pythonQuizzes } from './pythonQuizzes';

// Export all language quizzes
export const languageQuizzes: Quiz[] = [
  ...pythonQuizzes,
  // Add other language quizzes here in the future
];
