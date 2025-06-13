import { Quiz } from '@/types';

export const calculateQuizResult = (correctAnswers: number, totalQuestions: number, difficulty: string) => {
  const percentage = (correctAnswers / totalQuestions) * 100;
  let level: 'low' | 'medium' | 'high' = 'low';
  let feedback = '';
  let nextStep = '';
  let recommendations: string[] = [];

  if (percentage >= 90) {
    level = 'high';
    feedback = 'Excellent! You have a strong understanding of the subject.';
    nextStep = 'Consider exploring advanced topics or applying your knowledge in practical projects.';
    recommendations = [
      'Contribute to open-source projects',
      'Explore advanced documentation',
      'Teach others about the topic'
    ];
  } else if (percentage >= 70) {
    level = 'medium';
    feedback = 'Good job! You have a solid grasp of the fundamentals.';
    nextStep = 'Focus on areas where you struggled and reinforce your understanding.';
    recommendations = [
      'Review the quiz questions you missed',
      'Practice with more complex examples',
      'Read relevant articles or documentation'
    ];
  } else {
    level = 'low';
    feedback = 'Keep practicing! Understanding the basics is key.';
    nextStep = 'Revisit the fundamental concepts and try again.';
    recommendations = [
      'Study basic tutorials and documentation',
      'Try simpler quizzes or exercises',
      'Ask for help from experienced developers'
    ];
  }

  return {
    score: correctAnswers,
    percentage: percentage,
    level: level,
    feedback: feedback,
    nextStep: nextStep,
    recommendations: recommendations
  };
};

export const getLanguageTopics = (language: string, difficulty: string): string[] => {
  const topicMap: { [key: string]: { [key: string]: string[] } } = {
    'Python': {
      'beginner': ['Variables and Data Types', 'Basic Syntax', 'Functions', 'Control Structures', 'Lists and Strings'],
      'intermediate': ['List Comprehensions', 'Exception Handling', 'Object-Oriented Programming', 'File Handling', 'Modules'],
      'advanced': ['Decorators', 'Generators', 'Context Managers', 'Metaclasses', 'Async Programming']
    },
    'C': {
      'beginner': ['Basic Syntax', 'Variables and Data Types', 'Operators', 'Control Structures', 'Functions'],
      'intermediate': ['Pointers', 'Memory Management', 'Structures and Unions', 'File Handling', 'Preprocessor'],
      'advanced': ['Advanced Pointers', 'Memory Optimization', 'Undefined Behavior', 'Low-level Programming', 'System Programming']
    },
    'JavaScript': {
      'beginner': ['Variables and Data Types', 'Functions', 'Arrays', 'Objects', 'Control Structures'],
      'intermediate': ['Closures', 'Prototypes', 'Async Programming', 'DOM Manipulation', 'ES6 Features'],
      'advanced': ['Event Loop', 'Memory Management', 'Design Patterns', 'Performance Optimization', 'Modern Frameworks']
    }
  };

  return topicMap[language]?.[difficulty] || [];
};

export const getLanguageProgress = (
  language: string, 
  basicScore: number | null, 
  intermediateScore: number | null, 
  advancedScore: number | null
): LanguageProgress => {
  
  // Calculate overall level based on scores
  let overallLevel = 'Beginner';
  let recommendations: string[] = [];

  if (basicScore === null) {
    recommendations.push('Start with basic concepts');
  } else if (basicScore < 70) {
    recommendations.push('Review basic concepts');
  } else if (intermediateScore === null) {
    overallLevel = 'Beginner+';
    recommendations.push('Try intermediate level');
  } else if (intermediateScore < 70) {
    overallLevel = 'Intermediate';
    recommendations.push('Practice intermediate concepts');
  } else if (advancedScore === null) {
    overallLevel = 'Intermediate+';
    recommendations.push('Challenge yourself with advanced topics');
  } else if (advancedScore < 70) {
    overallLevel = 'Advanced';
    recommendations.push('Master advanced concepts');
  } else {
    overallLevel = 'Expert';
    recommendations.push('Excellent mastery! Consider teaching others');
  }

  return {
    overallLevel,
    recommendations,
    basicCompleted: basicScore !== null,
    intermediateCompleted: intermediateScore !== null,
    advancedCompleted: advancedScore !== null
  };
};

export interface LanguageProgress {
  overallLevel: string;
  recommendations: string[];
  basicCompleted: boolean;
  intermediateCompleted: boolean;
  advancedCompleted: boolean;
}
