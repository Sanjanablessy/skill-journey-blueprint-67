
export interface QuizResult {
  score: number;
  percentage: number;
  level: 'low' | 'medium' | 'high';
  feedback: string;
  recommendations: string[];
  nextStep: string;
}

export interface LanguageProgress {
  basic: QuizResult | null;
  intermediate: QuizResult | null;  
  advanced: QuizResult | null;
  overallLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  weakAreas: string[];
  recommendations: string[];
}

export const calculateQuizResult = (
  correctAnswers: number,
  totalQuestions: number,
  difficulty: 'beginner' | 'intermediate' | 'advanced'
): QuizResult => {
  const percentage = (correctAnswers / totalQuestions) * 100;
  let level: 'low' | 'medium' | 'high';
  let feedback: string;
  let recommendations: string[];
  let nextStep: string;

  // Determine performance level
  if (percentage >= 80) {
    level = 'high';
  } else if (percentage >= 60) {
    level = 'medium';
  } else {
    level = 'low';
  }

  // Generate feedback based on difficulty and performance
  switch (difficulty) {
    case 'beginner':
      if (level === 'high') {
        feedback = "Excellent! You have a strong grasp of the basics.";
        recommendations = [
          "You're ready to move to intermediate level",
          "Practice implementing basic concepts in projects",
          "Review advanced syntax and features"
        ];
        nextStep = "Take the Intermediate quiz to test your next level skills!";
      } else if (level === 'medium') {
        feedback = "Good progress! You understand most basic concepts but need some improvement.";
        recommendations = [
          "Review the areas where you scored lower",
          "Practice with more coding exercises",
          "Strengthen your understanding of fundamental concepts"
        ];
        nextStep = "Review basic concepts more and then try the Intermediate quiz.";
      } else {
        feedback = "You're still learning the basics. Don't worry, everyone starts here!";
        recommendations = [
          "Focus on learning fundamental concepts",
          "Take your time with basic syntax and operations",
          "Practice with simple exercises daily"
        ];
        nextStep = "Continue studying basics and retake this quiz when you feel more confident.";
      }
      break;

    case 'intermediate':
      if (level === 'high') {
        feedback = "Great work! You have solid intermediate knowledge.";
        recommendations = [
          "You're ready for advanced topics",
          "Start working on complex projects",
          "Learn best practices and design patterns"
        ];
        nextStep = "Challenge yourself with the Advanced quiz!";
      } else if (level === 'medium') {
        feedback = "You're making good progress with intermediate concepts.";
        recommendations = [
          "Review intermediate topics you missed",
          "Practice more complex programming problems",
          "Focus on understanding deeper concepts"
        ];
        nextStep = "Strengthen your intermediate knowledge before moving to advanced.";
      } else {
        feedback = "You might want to review basic concepts before tackling intermediate material.";
        recommendations = [
          "Go back to basic fundamentals",
          "Make sure you understand core concepts thoroughly",
          "Practice basic programming exercises"
        ];
        nextStep = "Consider retaking the Basic quiz and strengthening fundamentals.";
      }
      break;

    case 'advanced':
      if (level === 'high') {
        feedback = "Outstanding! You have mastered advanced concepts in this language.";
        recommendations = [
          "You have expert-level knowledge",
          "Consider contributing to open source projects",
          "Mentor others learning this language",
          "Explore cutting-edge features and updates"
        ];
        nextStep = "You've mastered this language! Consider learning related technologies or specializing further.";
      } else if (level === 'medium') {
        feedback = "You understand most advanced concepts but there's room for improvement.";
        recommendations = [
          "Review advanced topics you missed",
          "Work on complex real-world projects",
          "Study advanced design patterns and architectures"
        ];
        nextStep = "Continue practicing advanced concepts and retake this quiz to track improvement.";
      } else {
        feedback = "Advanced concepts are challenging. Consider reviewing intermediate material first.";
        recommendations = [
          "Strengthen your intermediate knowledge",
          "Focus on understanding core advanced concepts",
          "Practice with guided advanced tutorials"
        ];
        nextStep = "Review intermediate concepts before attempting advanced material again.";
      }
      break;
  }

  return {
    score: correctAnswers,
    percentage,
    level,
    feedback,
    recommendations,
    nextStep
  };
};

export const getLanguageProgress = (
  languageName: string,
  basicResult: QuizResult | null,
  intermediateResult: QuizResult | null,
  advancedResult: QuizResult | null
): LanguageProgress => {
  let overallLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert' = 'beginner';
  let weakAreas: string[] = [];
  let recommendations: string[] = [];

  // Determine overall level
  if (advancedResult && advancedResult.level === 'high') {
    overallLevel = 'expert';
    recommendations.push(`You have expert-level knowledge in ${languageName}!`);
    recommendations.push("Consider specializing in advanced topics or teaching others");
  } else if (advancedResult && advancedResult.level === 'medium') {
    overallLevel = 'advanced';
    recommendations.push(`You're at an advanced level in ${languageName}`);
    recommendations.push("Focus on mastering the advanced concepts you missed");
  } else if (intermediateResult && intermediateResult.level === 'high') {
    overallLevel = 'advanced';
    recommendations.push(`You're ready for advanced ${languageName} topics`);
    recommendations.push("Take the advanced quiz to test your expert knowledge");
  } else if (intermediateResult && intermediateResult.level === 'medium') {
    overallLevel = 'intermediate';
    recommendations.push(`You have solid intermediate knowledge in ${languageName}`);
    recommendations.push("Strengthen your intermediate skills before moving to advanced");
  } else if (basicResult && basicResult.level === 'high') {
    overallLevel = 'intermediate';
    recommendations.push(`You've mastered the basics of ${languageName}!`);
    recommendations.push("You're ready to tackle intermediate concepts");
  } else {
    overallLevel = 'beginner';
    recommendations.push(`Continue learning the fundamentals of ${languageName}`);
    recommendations.push("Practice basic concepts regularly");
  }

  // Identify weak areas
  if (basicResult && basicResult.level === 'low') {
    weakAreas.push("Basic fundamentals and syntax");
  }
  if (intermediateResult && intermediateResult.level === 'low') {
    weakAreas.push("Intermediate concepts and problem-solving");
  }
  if (advancedResult && advancedResult.level === 'low') {
    weakAreas.push("Advanced topics and complex implementations");
  }

  return {
    basic: basicResult,
    intermediate: intermediateResult,
    advanced: advancedResult,
    overallLevel,
    weakAreas,
    recommendations
  };
};

// Language-specific topic recommendations
export const getLanguageTopics = (language: string, level: 'beginner' | 'intermediate' | 'advanced') => {
  const topics: { [key: string]: { [key: string]: string[] } } = {
    "C": {
      beginner: ["Variables and Data Types", "Functions", "Arrays", "Pointers", "Control Structures"],
      intermediate: ["Structures", "File Handling", "Dynamic Memory Allocation", "Recursion", "String Manipulation"],
      advanced: ["Function Pointers", "Memory Management", "Preprocessor Directives", "System Programming", "Optimization"]
    },
    "Python": {
      beginner: ["Variables", "Functions", "Lists and Dictionaries", "Loops", "Conditionals"],
      intermediate: ["Object-Oriented Programming", "Exception Handling", "File I/O", "Modules", "List Comprehensions"],
      advanced: ["Decorators", "Generators", "Metaclasses", "Async Programming", "Memory Management"]
    },
    "JavaScript": {
      beginner: ["Variables", "Functions", "Arrays", "Objects", "DOM Manipulation"],
      intermediate: ["Promises", "Async/Await", "Classes", "Modules", "Error Handling"],
      advanced: ["Closures", "Prototypes", "Event Loop", "Performance Optimization", "Design Patterns"]
    },
    "Java": {
      beginner: ["Classes and Objects", "Inheritance", "Polymorphism", "Basic I/O", "Collections"],
      intermediate: ["Generics", "Exception Handling", "Multithreading", "JDBC", "Design Patterns"],
      advanced: ["JVM Internals", "Concurrent Programming", "Performance Tuning", "Spring Framework", "Microservices"]
    }
  };

  return topics[language]?.[level] || [];
};
