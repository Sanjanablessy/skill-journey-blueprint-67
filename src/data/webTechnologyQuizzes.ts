
import { Quiz } from '@/types';
import { htmlQuizzes } from './htmlQuizzes';
import { cssQuizzes } from './cssQuizzes';
import { javascriptQuizzes } from './javascriptQuizzes';

// Export all web technology quizzes
export const webTechnologyQuizzes: Quiz[] = [
  ...htmlQuizzes,
  ...cssQuizzes,
  ...javascriptQuizzes,
  // Add other web technology quizzes here in the future
];
