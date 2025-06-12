
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

  // Generate C-specific feedback based on difficulty and performance
  switch (difficulty) {
    case 'beginner':
      if (level === 'high') {
        feedback = "Excellent! You have a strong grasp of C programming basics.";
        recommendations = [
          "You're ready to move to intermediate C programming",
          "Focus on pointers, structures, and memory management",
          "Practice implementing basic data structures in C",
          "Learn about dynamic memory allocation (malloc, free)"
        ];
        nextStep = "Take the C Intermediate quiz to test your next level skills!";
      } else if (level === 'medium') {
        feedback = "Good progress! You understand most basic C concepts but need some improvement.";
        recommendations = [
          "Review C syntax and basic data types",
          "Practice with more C programming exercises",
          "Strengthen understanding of arrays and strings",
          "Focus on input/output operations and printf/scanf"
        ];
        nextStep = "Review basic C concepts more and then try the Intermediate quiz.";
      } else {
        feedback = "You're still learning C basics. Don't worry, everyone starts here!";
        recommendations = [
          "Focus on learning C fundamentals: variables, data types, operators",
          "Practice basic C syntax and program structure",
          "Learn about functions and parameter passing",
          "Understand basic control structures (if, loops)"
        ];
        nextStep = "Continue studying C basics and retake this quiz when you feel more confident.";
      }
      break;

    case 'intermediate':
      if (level === 'high') {
        feedback = "Great work! You have solid intermediate knowledge of C programming.";
        recommendations = [
          "You're ready for advanced C topics",
          "Start working on complex pointer operations",
          "Learn advanced memory management techniques",
          "Study function pointers and callback functions"
        ];
        nextStep = "Challenge yourself with the C Advanced quiz!";
      } else if (level === 'medium') {
        feedback = "You're making good progress with intermediate C concepts.";
        recommendations = [
          "Review pointer operations and pointer arithmetic",
          "Practice more with structures and unions",
          "Focus on string manipulation functions",
          "Strengthen understanding of dynamic memory allocation"
        ];
        nextStep = "Strengthen your intermediate C knowledge before moving to advanced.";
      } else {
        feedback = "You might want to review basic C concepts before tackling intermediate material.";
        recommendations = [
          "Go back to C fundamentals and basic syntax",
          "Make sure you understand variables, arrays, and functions",
          "Practice basic pointer concepts",
          "Review input/output operations thoroughly"
        ];
        nextStep = "Consider retaking the C Basic quiz and strengthening fundamentals.";
      }
      break;

    case 'advanced':
      if (level === 'high') {
        feedback = "Outstanding! You have mastered advanced C programming concepts.";
        recommendations = [
          "You have expert-level C knowledge",
          "Consider contributing to C open source projects",
          "Learn system programming and OS concepts",
          "Explore embedded C programming or kernel development"
        ];
        nextStep = "You've mastered C! Consider learning C++, system programming, or embedded development.";
      } else if (level === 'medium') {
        feedback = "You understand most advanced C concepts but there's room for improvement.";
        recommendations = [
          "Review advanced pointer concepts and function pointers",
          "Study memory management and optimization techniques",
          "Practice with complex data structures implementation",
          "Learn about preprocessor directives and macros"
        ];
        nextStep = "Continue practicing advanced C concepts and retake this quiz to track improvement.";
      } else {
        feedback = "Advanced C concepts are challenging. Consider reviewing intermediate material first.";
        recommendations = [
          "Strengthen your intermediate C knowledge",
          "Focus on understanding pointers and memory management",
          "Practice with structures and dynamic allocation",
          "Review string manipulation and file operations"
        ];
        nextStep = "Review intermediate C concepts before attempting advanced material again.";
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

  // Determine overall level for C programming
  if (advancedResult && advancedResult.level === 'high') {
    overallLevel = 'expert';
    recommendations.push(`You have expert-level knowledge in ${languageName} programming!`);
    recommendations.push("Consider specializing in system programming, embedded development, or kernel programming");
  } else if (advancedResult && advancedResult.level === 'medium') {
    overallLevel = 'advanced';
    recommendations.push(`You're at an advanced level in ${languageName}`);
    recommendations.push("Focus on mastering advanced concepts like function pointers and memory optimization");
  } else if (intermediateResult && intermediateResult.level === 'high') {
    overallLevel = 'advanced';
    recommendations.push(`You're ready for advanced ${languageName} topics`);
    recommendations.push("Take the advanced quiz to test your expert knowledge");
  } else if (intermediateResult && intermediateResult.level === 'medium') {
    overallLevel = 'intermediate';
    recommendations.push(`You have solid intermediate knowledge in ${languageName}`);
    recommendations.push("Strengthen your pointer and memory management skills");
  } else if (basicResult && basicResult.level === 'high') {
    overallLevel = 'intermediate';
    recommendations.push(`You've mastered the basics of ${languageName}!`);
    recommendations.push("You're ready to tackle intermediate concepts like pointers and structures");
  } else {
    overallLevel = 'beginner';
    recommendations.push(`Continue learning the fundamentals of ${languageName}`);
    recommendations.push("Focus on basic syntax, data types, and control structures");
  }

  // Identify weak areas specific to C programming
  if (basicResult && basicResult.level === 'low') {
    weakAreas.push("Basic C syntax and fundamentals");
    weakAreas.push("Variables, data types, and operators");
    weakAreas.push("Basic input/output operations");
  }
  if (intermediateResult && intermediateResult.level === 'low') {
    weakAreas.push("Pointer operations and memory management");
    weakAreas.push("Structures and string manipulation");
    weakAreas.push("Dynamic memory allocation");
  }
  if (advancedResult && advancedResult.level === 'low') {
    weakAreas.push("Advanced pointer concepts and function pointers");
    weakAreas.push("Memory optimization and system-level programming");
    weakAreas.push("Complex data structures and algorithms");
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

// C-specific topic recommendations
export const getLanguageTopics = (language: string, level: 'beginner' | 'intermediate' | 'advanced') => {
  const topics: { [key: string]: { [key: string]: string[] } } = {
    "C": {
      beginner: [
        "Variables and Data Types", 
        "Basic I/O Operations (printf/scanf)", 
        "Control Structures (if/else, loops)", 
        "Functions and Parameter Passing", 
        "Arrays and Basic Pointers",
        "String Handling Basics"
      ],
      intermediate: [
        "Pointer Arithmetic and Operations", 
        "Structures and Unions", 
        "Dynamic Memory Allocation (malloc/free)", 
        "String Manipulation Functions", 
        "File I/O Operations",
        "Multi-dimensional Arrays"
      ],
      advanced: [
        "Function Pointers and Callbacks", 
        "Advanced Memory Management", 
        "Preprocessor Directives and Macros", 
        "System Programming Concepts", 
        "Data Structures Implementation",
        "Performance Optimization Techniques"
      ]
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
