import { Job, Quiz, Skill, Goal, Resource, RoadmapStep } from "@/types";

// Resources data
export const resourcesData: Resource[] = [
  {
    id: "r1",
    title: "Modern JavaScript Tutorial",
    url: "https://javascript.info/",
    type: "article",
    difficulty: "beginner",
    description: "A comprehensive tutorial on modern JavaScript from basics to advanced concepts."
  },
  {
    id: "r2",
    title: "React Official Documentation",
    url: "https://reactjs.org/docs/getting-started.html",
    type: "article",
    difficulty: "beginner",
    description: "The official React documentation, starting from the basics."
  },
  {
    id: "r3",
    title: "Node.js Crash Course",
    url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
    type: "video",
    difficulty: "beginner",
    description: "A crash course on Node.js for beginners."
  },
  {
    id: "r4",
    title: "Python for Data Science Handbook",
    url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
    type: "book",
    difficulty: "intermediate",
    description: "A comprehensive guide to using Python for data analysis and science."
  },
  {
    id: "r5",
    title: "SQL Basics Course",
    url: "https://www.khanacademy.org/computing/computer-programming/sql",
    type: "course",
    difficulty: "beginner",
    description: "Learn the basics of SQL for database management."
  },
  {
    id: "r6",
    title: "Advanced JavaScript Concepts",
    url: "https://www.udemy.com/course/advanced-javascript-concepts/",
    type: "course",
    difficulty: "advanced",
    description: "Deep dive into advanced JavaScript concepts like closures, prototypes, and more."
  },
  {
    id: "r7",
    title: "AWS Certified Solutions Architect",
    url: "https://www.amazon.com/Certified-Solutions-Architect-Study-Guide/dp/1119713080/",
    type: "book",
    difficulty: "advanced",
    description: "Comprehensive guide for AWS certification preparation."
  }
];

// Common roadmap steps for JavaScript learning
const jsRoadmapSteps: RoadmapStep[] = [
  {
    id: "rs1",
    title: "Learn JavaScript Basics",
    description: "Master the fundamentals of JavaScript including variables, data types, and functions.",
    completed: false,
    resources: ["r1"]
  },
  {
    id: "rs2",
    title: "Understand DOM Manipulation",
    description: "Learn how to interact with the Document Object Model using JavaScript.",
    completed: false,
    resources: ["r1"]
  },
  {
    id: "rs3",
    title: "Master ES6+ Features",
    description: "Get familiar with modern JavaScript features like arrow functions, destructuring, and modules.",
    completed: false,
    resources: ["r1", "r6"]
  },
  {
    id: "rs4",
    title: "Build a JavaScript Project",
    description: "Create a small project to apply your JavaScript knowledge.",
    completed: false
  }
];

// Common roadmap steps for React learning
const reactRoadmapSteps: RoadmapStep[] = [
  {
    id: "rs5",
    title: "Learn React Fundamentals",
    description: "Understand components, props, and state in React.",
    completed: false,
    resources: ["r2"]
  },
  {
    id: "rs6",
    title: "Master React Hooks",
    description: "Learn how to use React hooks like useState, useEffect, and useContext.",
    completed: false,
    resources: ["r2"]
  },
  {
    id: "rs7",
    title: "State Management in React",
    description: "Explore state management solutions like Redux or Context API.",
    completed: false,
    resources: ["r2"]
  },
  {
    id: "rs8",
    title: "Build a React Application",
    description: "Create a complete application using React.",
    completed: false
  }
];

// Define skills with resources and roadmap steps
export const skillsData: Skill[] = [
  {
    id: "s1",
    name: "JavaScript",
    category: "Frontend Development",
    description: "JavaScript is a scripting language that enables interactive web pages.",
    resources: [resourcesData.find(r => r.id === "r1"), resourcesData.find(r => r.id === "r6")]
  },
  {
    id: "s2",
    name: "React",
    category: "Frontend Development",
    description: "React is a JavaScript library for building user interfaces.",
    resources: [resourcesData.find(r => r.id === "r2")]
  },
  {
    id: "s3",
    name: "Node.js",
    category: "Backend Development",
    description: "Node.js is a JavaScript runtime for server-side programming.",
    resources: [resourcesData.find(r => r.id === "r3")]
  },
  {
    id: "s4",
    name: "Python",
    category: "Programming Languages",
    description: "Python is a versatile programming language used for web development, data science, and more.",
    resources: [resourcesData.find(r => r.id === "r4")]
  },
  {
    id: "s5",
    name: "SQL",
    category: "Database",
    description: "SQL is used to communicate with and manipulate databases.",
    resources: [resourcesData.find(r => r.id === "r5")]
  },
  {
    id: "s6",
    name: "Java",
    category: "Programming Languages",
    description: "Java is a class-based, object-oriented programming language.",
    resources: []
  },
  {
    id: "s7",
    name: "AWS",
    category: "Cloud Computing",
    description: "Amazon Web Services offers reliable, scalable cloud computing services.",
    resources: []
  },
  {
    id: "s8",
    name: "Docker",
    category: "DevOps",
    description: "Docker is a platform for developing, shipping, and running applications in containers.",
    resources: []
  },
  {
    id: "s9",
    name: "TypeScript",
    category: "Programming Languages",
    description: "TypeScript is a strict syntactical superset of JavaScript that adds static typing.",
    resources: []
  },
  {
    id: "s10",
    name: "Angular",
    category: "Frontend Development",
    description: "Angular is a platform for building mobile and desktop web applications.",
    resources: []
  },
  {
    id: "s11",
    name: "Vue.js",
    category: "Frontend Development",
    description: "Vue.js is a progressive framework for building user interfaces.",
    resources: []
  },
  {
    id: "s12",
    name: "MongoDB",
    category: "Database",
    description: "MongoDB is a source-available cross-platform document-oriented database program.",
    resources: []
  },
  {
    id: "s13",
    name: "Git",
    category: "Version Control",
    description: "Git is a distributed version control system for tracking changes in source code.",
    resources: []
  },
  {
    id: "s14",
    name: "GraphQL",
    category: "API",
    description: "GraphQL is a query language for APIs and a runtime for executing those queries.",
    resources: []
  },
  {
    id: "s15",
    name: "Kubernetes",
    category: "DevOps",
    description: "Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.",
    resources: []
  }
];

// Define jobs with roadmaps
export const jobsData: Job[] = [
  {
    id: "j1",
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    description: "Responsible for creating and maintaining user interfaces for web applications.",
    requiredSkills: [
      skillsData.find(s => s.id === "s1")!,
      skillsData.find(s => s.id === "s2")!,
      skillsData.find(s => s.id === "s9")!,
      skillsData.find(s => s.id === "s13")!
    ],
    salaryRange: "$80,000 - $120,000",
    experience: "2-4 years",
    category: "Development",
    roadmap: [
      ...jsRoadmapSteps,
      ...reactRoadmapSteps,
      {
        id: "rs9",
        title: "Learn TypeScript Fundamentals",
        description: "Understand the basics of TypeScript and its application in React projects.",
        completed: false,
        resources: []
      },
      {
        id: "rs10",
        title: "Master Git Version Control",
        description: "Learn how to effectively use Git for version control in team projects.",
        completed: false,
        resources: []
      },
      {
        id: "rs11",
        title: "Build a Professional Portfolio",
        description: "Create a portfolio showcasing your frontend development projects.",
        completed: false
      }
    ]
  },
  {
    id: "j2",
    title: "Backend Developer",
    company: "WebSolutions Ltd.",
    description: "Build and maintain server-side applications that power web services.",
    requiredSkills: [
      skillsData.find(s => s.id === "s3")!,
      skillsData.find(s => s.id === "s5")!,
      skillsData.find(s => s.id === "s12")!,
      skillsData.find(s => s.id === "s13")!
    ],
    salaryRange: "$90,000 - $130,000",
    experience: "3-5 years",
    category: "Development",
    roadmap: [
      {
        id: "rs12",
        title: "Learn Node.js Fundamentals",
        description: "Understand the basics of server-side JavaScript with Node.js.",
        completed: false,
        resources: ["r3"]
      },
      {
        id: "rs13",
        title: "Master Database Management",
        description: "Learn how to work with SQL and NoSQL databases effectively.",
        completed: false,
        resources: ["r5"]
      },
      {
        id: "rs14",
        title: "Understand API Development",
        description: "Learn how to create RESTful and GraphQL APIs.",
        completed: false
      },
      {
        id: "rs15",
        title: "Implement Authentication & Authorization",
        description: "Learn how to secure web applications with proper auth mechanisms.",
        completed: false
      }
    ]
  },
  {
    id: "j3",
    title: "Full Stack Developer",
    company: "InnovateX",
    description: "Develop both client and server software for complete web applications.",
    requiredSkills: [
      skillsData.find(s => s.id === "s1")!,
      skillsData.find(s => s.id === "s2")!,
      skillsData.find(s => s.id === "s3")!,
      skillsData.find(s => s.id === "s5")!,
      skillsData.find(s => s.id === "s13")!
    ],
    salaryRange: "$100,000 - $150,000",
    experience: "4-6 years",
    category: "Development",
    roadmap: [
      ...jsRoadmapSteps,
      ...reactRoadmapSteps,
      {
        id: "rs16",
        title: "Learn RESTful API Development",
        description: "Understand how to build and maintain RESTful APIs.",
        completed: false,
        resources: []
      },
      {
        id: "rs17",
        title: "Master NoSQL Databases",
        description: "Learn how to work with NoSQL databases effectively.",
        completed: false,
        resources: []
      },
      {
        id: "rs18",
        title: "Build a Full Stack Application",
        description: "Create a complete full-stack application using React and Node.js.",
        completed: false
      }
    ]
  },
  {
    id: "j4",
    title: "DevOps Engineer",
    company: "CloudNative Systems",
    description: "Implement and manage CI/CD pipelines and cloud infrastructure.",
    requiredSkills: [
      skillsData.find(s => s.id === "s7")!,
      skillsData.find(s => s.id === "s8")!,
      skillsData.find(s => s.id === "s15")!,
      skillsData.find(s => s.id === "s13")!
    ],
    salaryRange: "$110,000 - $160,000",
    experience: "3-6 years",
    category: "Infrastructure",
    roadmap: [
      {
        id: "rs19",
        title: "Learn CI/CD Pipelines",
        description: "Understand how to set up and manage CI/CD pipelines.",
        completed: false,
        resources: []
      },
      {
        id: "rs20",
        title: "Master Cloud Infrastructure",
        description: "Learn how to manage cloud infrastructure effectively.",
        completed: false,
        resources: []
      },
      {
        id: "rs21",
        title: "Build a Cloud Native Application",
        description: "Create a complete cloud-native application using Kubernetes.",
        completed: false
      }
    ]
  },
  {
    id: "j5",
    title: "Data Scientist",
    company: "AnalyticsPro",
    description: "Analyze data to extract valuable insights and build predictive models.",
    requiredSkills: [
      skillsData.find(s => s.id === "s4")!,
      skillsData.find(s => s.id === "s5")!
    ],
    salaryRange: "$95,000 - $145,000",
    experience: "2-5 years",
    category: "Data",
    roadmap: [
      {
        id: "rs22",
        title: "Learn Data Analysis",
        description: "Understand the basics of data analysis and visualization.",
        completed: false,
        resources: []
      },
      {
        id: "rs23",
        title: "Master Machine Learning",
        description: "Learn how to build and deploy machine learning models.",
        completed: false,
        resources: []
      },
      {
        id: "rs24",
        title: "Build a Data Science Project",
        description: "Create a complete data science project using Python and SQL.",
        completed: false
      }
    ]
  },
  {
    id: "j6",
    title: "UI/UX Designer",
    company: "DesignHub",
    description: "Design intuitive and visually appealing user interfaces for web and mobile applications.",
    requiredSkills: [
      skillsData.find(s => s.id === "s1")!
    ],
    salaryRange: "$75,000 - $110,000",
    experience: "2-4 years",
    category: "Design",
    roadmap: [
      {
        id: "rs25",
        title: "Learn UI/UX Design",
        description: "Understand the principles of UI/UX design.",
        completed: false,
        resources: []
      },
      {
        id: "rs26",
        title: "Master Design Tools",
        description: "Learn how to use design tools like Sketch and Figma.",
        completed: false,
        resources: []
      },
      {
        id: "rs27",
        title: "Build a Design Portfolio",
        description: "Create a portfolio showcasing your UI/UX design projects.",
        completed: false
      }
    ]
  }
];

// Add quiz recommendations
export const quizzesData: Quiz[] = [
  {
    id: "q1",
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics.",
    skillCategory: "Frontend Development",
    difficulty: "beginner",
    questions: [
      {
        id: "q1_1",
        question: "What is the correct way to declare a JavaScript variable?",
        options: ["var myVar = 10;", "variable myVar = 10;", "v myVar = 10;", "int myVar = 10;"],
        correctAnswer: 0
      },
      {
        id: "q1_2",
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "append()", "add()", "insert()"],
        correctAnswer: 0
      },
      {
        id: "q1_3",
        question: "What does DOM stand for in JavaScript?",
        options: [
          "Document Object Model",
          "Data Object Model",
          "Document Orientation Model",
          "Digital Object Model"
        ],
        correctAnswer: 0
      }
    ],
    recommendations: {
      lowScore: [resourcesData.find(r => r.id === "r1")!],
      mediumScore: [resourcesData.find(r => r.id === "r1")!, resourcesData.find(r => r.id === "r6")!],
      highScore: [resourcesData.find(r => r.id === "r6")!]
    }
  },
  {
    id: "q2",
    title: "React Essentials",
    description: "Evaluate your understanding of React basics.",
    skillCategory: "Frontend Development",
    difficulty: "intermediate",
    questions: [
      {
        id: "q2_1",
        question: "What is JSX?",
        options: [
          "A syntax extension to JavaScript",
          "A new programming language",
          "A database query language",
          "JavaScript XML parser"
        ],
        correctAnswer: 0
      },
      {
        id: "q2_2",
        question: "What hook would you use to perform side effects in a component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: 0
      },
      {
        id: "q2_3",
        question: "Which lifecycle method is called after a component is rendered for the first time?",
        options: ["componentDidMount", "componentWillMount", "componentDidUpdate", "componentDidRender"],
        correctAnswer: 0
      }
    ],
    recommendations: {
      lowScore: [resourcesData.find(r => r.id === "r2")!],
      mediumScore: [resourcesData.find(r => r.id === "r2")!],
      highScore: [resourcesData.find(r => r.id === "r2")!]
    }
  },
  {
    id: "q3",
    title: "Python Basics",
    description: "Test your knowledge of Python fundamentals.",
    skillCategory: "Programming Languages",
    difficulty: "beginner",
    questions: [
      {
        id: "q3_1",
        question: "What is the correct way to declare a variable in Python?",
        options: ["var x = 5;", "int x = 5;", "x = 5", "let x = 5"],
        correctAnswer: 2
      },
      {
        id: "q3_2",
        question: "How do you create a list in Python?",
        options: ["array(1, 2, 3)", "[1, 2, 3]", "list(1, 2, 3)", "{1, 2, 3}"],
        correctAnswer: 1
      },
      {
        id: "q3_3",
        question: "What is the output of print(3 * '7')?",
        options: ["21", "777", "337", "Error"],
        correctAnswer: 1
      }
    ],
    recommendations: {
      lowScore: [resourcesData.find(r => r.id === "r4")!],
      mediumScore: [resourcesData.find(r => r.id === "r4")!],
      highScore: [resourcesData.find(r => r.id === "r4")!]
    }
  }
];

// Sample user goals
export const goalsData: Goal[] = [
  {
    id: "g1",
    title: "Become a Frontend Developer",
    jobId: "j1",
    roadmap: jobsData.find(j => j.id === "j1")?.roadmap || [],
    progress: 0
  },
  {
    id: "g2",
    title: "Master JavaScript",
    skillId: "s1",
    roadmap: jsRoadmapSteps,
    progress: 0
  }
];
