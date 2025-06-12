
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

  // Generate detailed feedback based on difficulty and performance
  switch (difficulty) {
    case 'beginner':
      if (level === 'high') {
        feedback = "Excellent! You have mastered the basics and are ready for intermediate concepts.";
        recommendations = [
          "Study advanced syntax and language-specific features in depth",
          "Learn about data structures and their implementations",
          "Practice object-oriented programming concepts and design patterns",
          "Understand memory management and performance optimization",
          "Master debugging techniques and error handling strategies",
          "Learn about testing frameworks and writing unit tests",
          "Study best practices for code organization and structure",
          "Practice with real-world projects and problem-solving",
          "Learn about version control systems like Git",
          "Understand documentation and code commenting standards",
          "Study algorithm complexity and Big O notation",
          "Learn about design patterns and architectural principles"
        ];
        nextStep = "Take the Intermediate quiz to test your next level skills!";
      } else if (level === 'medium') {
        feedback = "Good progress! You understand most basic concepts but need strengthening in key areas.";
        recommendations = [
          "Review fundamental syntax rules and language conventions thoroughly",
          "Practice variable declaration, initialization, and scope concepts",
          "Strengthen understanding of data types and type conversions",
          "Master control structures: conditionals, loops, and branching",
          "Practice function definition, parameters, and return values",
          "Study array/list operations and common methods",
          "Learn proper error handling and exception management",
          "Practice with basic input/output operations",
          "Understand operator precedence and expressions",
          "Study string manipulation and processing techniques",
          "Practice basic problem-solving with simple algorithms",
          "Learn debugging techniques for identifying and fixing errors"
        ];
        nextStep = "Strengthen these fundamental concepts before attempting Intermediate level.";
      } else {
        feedback = "You're building your foundation. Focus on core fundamentals first.";
        recommendations = [
          "Start with basic language syntax and program structure",
          "Learn variable types, naming conventions, and declarations",
          "Master basic input and output operations step by step",
          "Practice simple arithmetic and logical operations",
          "Study control flow: if statements, loops, and basic logic",
          "Learn about comments and code documentation",
          "Practice writing and running simple programs",
          "Understand compilation/interpretation process for your language",
          "Study basic data types and their uses",
          "Learn about operators and their precedence",
          "Practice basic problem-solving with simple exercises",
          "Focus on understanding error messages and debugging basics"
        ];
        nextStep = "Focus on mastering these fundamentals, then retake this quiz.";
      }
      break;

    case 'intermediate':
      if (level === 'high') {
        feedback = "Outstanding! You have solid grasp of intermediate concepts and are ready for advanced topics.";
        recommendations = [
          "Study advanced language features and metaprogramming concepts",
          "Learn complex data structures and algorithm implementations",
          "Master design patterns and architectural principles",
          "Study performance optimization and profiling techniques",
          "Learn about concurrent programming and parallel processing",
          "Study system-level programming and low-level operations",
          "Master advanced debugging and testing strategies",
          "Learn about frameworks and libraries ecosystem",
          "Study security best practices and secure coding",
          "Learn about database integration and optimization",
          "Master API design and integration patterns",
          "Study deployment and DevOps practices"
        ];
        nextStep = "Challenge yourself with the Advanced quiz!";
      } else if (level === 'medium') {
        feedback = "Good understanding of intermediate concepts, but some areas need more practice.";
        recommendations = [
          "Strengthen object-oriented programming principles and practices",
          "Practice with more complex data structures and algorithms",
          "Study memory management and resource optimization",
          "Learn error handling patterns and exception hierarchies",
          "Practice with file operations and data persistence",
          "Study modular programming and code organization",
          "Learn about testing methodologies and test-driven development",
          "Practice debugging complex scenarios and performance issues",
          "Study design patterns and when to apply them",
          "Learn about code refactoring and maintenance",
          "Practice with third-party libraries and frameworks",
          "Study documentation and API design principles"
        ];
        nextStep = "Strengthen these intermediate concepts before attempting advanced level.";
      } else {
        feedback = "Intermediate concepts are challenging. Consider reviewing basic concepts first.";
        recommendations = [
          "Go back and strengthen fundamental programming concepts",
          "Ensure solid understanding of basic data structures",
          "Review control flow and function concepts thoroughly",
          "Practice more with basic object-oriented programming",
          "Strengthen understanding of variable scope and lifetime",
          "Review basic algorithm concepts and problem-solving",
          "Practice with simpler projects before complex ones",
          "Ensure comfortable with basic debugging techniques",
          "Review language-specific syntax and conventions",
          "Practice basic input/output and data handling operations"
        ];
        nextStep = "Consider retaking the Basic quiz and strengthening fundamentals.";
      }
      break;

    case 'advanced':
      if (level === 'high') {
        feedback = "Exceptional! You have mastered advanced concepts and have expert-level knowledge.";
        recommendations = [
          "Explore cutting-edge language features and experimental APIs",
          "Study compiler/interpreter design and language implementation",
          "Learn about performance profiling and optimization at scale",
          "Master concurrent and parallel programming paradigms",
          "Study distributed systems and microservices architecture",
          "Learn about advanced security and cryptographic concepts",
          "Contribute to open source projects and language development",
          "Study cross-platform development and portability",
          "Learn about advanced debugging and reverse engineering",
          "Master DevOps, CI/CD, and deployment automation",
          "Study machine learning and AI integration techniques",
          "Learn about embedded systems and hardware programming"
        ];
        nextStep = "You've mastered this language! Consider specializing or contributing to open source.";
      } else if (level === 'medium') {
        feedback = "Good grasp of most advanced concepts, but some expert areas need more focus.";
        recommendations = [
          "Deepen understanding of language internals and runtime behavior",
          "Study advanced memory management and garbage collection",
          "Master complex design patterns and architectural styles",
          "Learn advanced debugging and profiling tools",
          "Study performance optimization at the system level",
          "Learn about advanced testing strategies and frameworks",
          "Master concurrent programming and thread safety",
          "Study advanced database concepts and optimization",
          "Learn about security vulnerabilities and mitigation",
          "Master advanced API design and documentation",
          "Study code analysis and static analysis tools",
          "Learn about advanced deployment and scaling strategies"
        ];
        nextStep = "Continue practicing these advanced concepts and retake the quiz to track improvement.";
      } else {
        feedback = "Advanced concepts are very challenging. Build stronger foundation in intermediate topics.";
        recommendations = [
          "Go back to intermediate concepts and ensure complete mastery",
          "Strengthen understanding of design patterns and architecture",
          "Practice more with intermediate algorithms and data structures",
          "Ensure solid grasp of object-oriented programming principles",
          "Review testing and debugging methodologies comprehensively",
          "Study more intermediate-level frameworks and libraries",
          "Practice with intermediate-level projects extensively",
          "Strengthen understanding of performance and optimization",
          "Review database integration and data handling concepts",
          "Master intermediate error handling and exception management"
        ];
        nextStep = "Focus on strengthening intermediate knowledge before attempting advanced concepts.";
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
