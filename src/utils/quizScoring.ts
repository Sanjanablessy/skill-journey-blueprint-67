import { Quiz } from '@/types';

export const calculateQuizResult = (
  correctAnswers: number,
  totalQuestions: number,
  difficulty: string
) => {
  const percentage = (correctAnswers / totalQuestions) * 100;
  let level = 'low';
  let feedback = 'You need to improve your knowledge in this area.';
  let nextStep = 'Review the basics and try again.';
  const recommendations: string[] = [];

  if (percentage >= 90) {
    level = 'high';
    feedback = 'Excellent performance! You have a strong understanding of the topic.';
    nextStep = 'Explore advanced topics and consider mentoring others.';
    recommendations.push('Contribute to open-source projects.');
    recommendations.push('Write a blog post about what you learned.');
  } else if (percentage >= 70) {
    level = 'medium';
    feedback = 'Good job! You have a solid understanding of the topic.';
    nextStep = 'Practice more and explore related topics.';
    recommendations.push('Work on a personal project to apply your knowledge.');
    recommendations.push('Read more advanced documentation.');
  } else {
    level = 'low';
    feedback = 'You need to improve your knowledge in this area.';
    nextStep = 'Review the basics and try again.';
    recommendations.push('Review the fundamental concepts.');
    recommendations.push('Try simpler quizzes to build your confidence.');
  }

  return {
    score: correctAnswers,
    percentage: percentage,
    level: level,
    feedback: feedback,
    nextStep: nextStep,
    recommendations: recommendations,
  };
};

export const getLanguageTopics = (language: string, difficulty: string): string[] => {
  const topics: { [key: string]: { [key: string]: string[] } } = {
    Python: {
      beginner: ['Variables and Data Types', 'Basic Operations', 'Control Structures', 'Functions'],
      intermediate: ['Object-Oriented Programming', 'File Handling', 'Error Handling', 'Libraries'],
      advanced: ['Decorators', 'Generators', 'Metaclasses', 'Concurrency']
    },
    JavaScript: {
      beginner: ['Variables', 'Functions', 'Arrays', 'Objects', 'DOM Manipulation'],
      intermediate: ['Promises', 'Classes', 'Modules', 'Event Handling', 'AJAX'],
      advanced: ['Closures', 'Prototypes', 'Async/Await', 'Design Patterns']
    },
    C: {
      beginner: ['Basic Syntax', 'Variables', 'Control Structures', 'Functions', 'Arrays'],
      intermediate: ['Pointers', 'Structures', 'File I/O', 'Dynamic Memory', 'Preprocessor'],
      advanced: ['Advanced Pointers', 'System Programming', 'Memory Management', 'Optimization']
    },
    'C++': {
      beginner: ['Basic Syntax', 'Classes', 'Objects', 'Inheritance', 'Polymorphism'],
      intermediate: ['Templates', 'STL', 'Exception Handling', 'Operator Overloading', 'Virtual Functions'],
      advanced: ['Smart Pointers', 'Move Semantics', 'Template Metaprogramming', 'Design Patterns', 'C++11/14/17/20 Features']
    },
    HTML: {
      beginner: ['Basic Tags', 'Text Formatting', 'Links', 'Images', 'Lists', 'Tables'],
      intermediate: ['Forms', 'Semantic HTML5', 'Media Elements', 'Accessibility', 'Validation'],
      advanced: ['Canvas', 'SVG', 'Web Components', 'Progressive Web Apps', 'Performance Optimization']
    },
    CSS: {
      beginner: ['Selectors', 'Properties', 'Box Model', 'Colors', 'Fonts', 'Basic Layout'],
      intermediate: ['Flexbox', 'Grid', 'Responsive Design', 'Animations', 'Transforms', 'Media Queries'],
      advanced: ['CSS Custom Properties', 'Advanced Selectors', 'Performance', 'Architecture', 'Preprocessing']
    },
    SQL: {
      beginner: ['Basic Queries', 'SELECT Statements', 'WHERE Clauses', 'Sorting', 'Basic Functions'],
      intermediate: ['Joins', 'Subqueries', 'Aggregations', 'Indexes', 'Views', 'Stored Procedures'],
      advanced: ['Query Optimization', 'Transactions', 'Window Functions', 'Advanced Joins', 'Performance Tuning']
    },
    NoSQL: {
      beginner: ['Document Databases', 'Key-Value Stores', 'Basic Operations', 'Data Modeling'],
      intermediate: ['Sharding', 'Replication', 'Consistency Models', 'Performance Optimization', 'Aggregation'],
      advanced: ['Distributed Systems', 'CAP Theorem', 'Advanced Modeling', 'Performance Tuning', 'Multi-Model Databases']
    }
  };

  return topics[language]?.[difficulty] || [];
};

export interface LanguageProgress {
  overallLevel: string;
  recommendations: string[];
  strengths: string[];
  weaknesses: string[];
}

export const getLanguageProgress = (
  language: string,
  basicScore: number | null,
  intermediateScore: number | null,
  advancedScore: number | null
): LanguageProgress => {
  const scores = [basicScore, intermediateScore, advancedScore].filter(s => s !== null) as number[];
  const averageScore = scores.length > 0 ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;
  
  let overallLevel = 'Beginner';
  const recommendations: string[] = [];
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  if (averageScore >= 80) {
    overallLevel = 'Advanced';
    recommendations.push(`Continue mastering advanced ${language} concepts`);
    recommendations.push('Consider contributing to open source projects');
  } else if (averageScore >= 60) {
    overallLevel = 'Intermediate';
    recommendations.push(`Work on advanced ${language} topics`);
    recommendations.push('Build more complex projects');
  } else {
    overallLevel = 'Beginner';
    recommendations.push(`Focus on ${language} fundamentals`);
    recommendations.push('Practice with simple coding exercises');
  }

  // Add language-specific recommendations
  if (basicScore !== null && basicScore < 70) {
    recommendations.push(`Review basic ${language} syntax and concepts`);
  }
  
  if (intermediateScore !== null && intermediateScore < 70) {
    recommendations.push(`Practice intermediate ${language} topics`);
  }

  if (advancedScore !== null && advancedScore < 70) {
    recommendations.push(`Study advanced ${language} patterns and best practices`);
  }

  return {
    overallLevel,
    recommendations,
    strengths,
    weaknesses
  };
};
