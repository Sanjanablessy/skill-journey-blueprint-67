
import { Quiz } from '@/types';
import { sqlQuizzes } from './sqlQuizzes';
import { nosqlQuizzes } from './nosqlQuizzes';

// Export all database-related quizzes
export const databaseQuizzes: Quiz[] = [
  ...sqlQuizzes,
  ...nosqlQuizzes,
  // Add other database technology quizzes here in the future
];
