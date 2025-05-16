
import { Job, Quiz, Skill, Goal } from "@/types";

export const skillsData: Skill[] = [
  {
    id: "s1",
    name: "JavaScript",
    category: "Frontend Development",
    description: "JavaScript is a scripting language that enables interactive web pages."
  },
  {
    id: "s2",
    name: "React",
    category: "Frontend Development",
    description: "React is a JavaScript library for building user interfaces."
  },
  {
    id: "s3",
    name: "Node.js",
    category: "Backend Development",
    description: "Node.js is a JavaScript runtime for server-side programming."
  },
  {
    id: "s4",
    name: "Python",
    category: "Programming Languages",
    description: "Python is a versatile programming language used for web development, data science, and more."
  },
  {
    id: "s5",
    name: "SQL",
    category: "Database",
    description: "SQL is used to communicate with and manipulate databases."
  },
  {
    id: "s6",
    name: "Java",
    category: "Programming Languages",
    description: "Java is a class-based, object-oriented programming language."
  },
  {
    id: "s7",
    name: "AWS",
    category: "Cloud Computing",
    description: "Amazon Web Services offers reliable, scalable cloud computing services."
  },
  {
    id: "s8",
    name: "Docker",
    category: "DevOps",
    description: "Docker is a platform for developing, shipping, and running applications in containers."
  },
  {
    id: "s9",
    name: "TypeScript",
    category: "Programming Languages",
    description: "TypeScript is a strict syntactical superset of JavaScript that adds static typing."
  },
  {
    id: "s10",
    name: "Angular",
    category: "Frontend Development",
    description: "Angular is a platform for building mobile and desktop web applications."
  },
  {
    id: "s11",
    name: "Vue.js",
    category: "Frontend Development",
    description: "Vue.js is a progressive framework for building user interfaces."
  },
  {
    id: "s12",
    name: "MongoDB",
    category: "Database",
    description: "MongoDB is a source-available cross-platform document-oriented database program."
  },
  {
    id: "s13",
    name: "Git",
    category: "Version Control",
    description: "Git is a distributed version control system for tracking changes in source code."
  },
  {
    id: "s14",
    name: "GraphQL",
    category: "API",
    description: "GraphQL is a query language for APIs and a runtime for executing those queries."
  },
  {
    id: "s15",
    name: "Kubernetes",
    category: "DevOps",
    description: "Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications."
  }
];

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
    category: "Development"
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
    category: "Development"
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
    category: "Development"
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
    category: "Infrastructure"
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
    category: "Data"
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
    category: "Design"
  }
];

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
    ]
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
    ]
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
    ]
  }
];

export const goalsData: Goal[] = [];
