import { Quiz, Job, Skill, Resource, Goal } from '@/types';
import { languageQuizzes } from './languageQuizzes';
import { webTechnologyQuizzes } from './webTechnologyQuizzes';
import { databaseQuizzes } from './databaseQuizzes';

// Mock Skills
export const mockSkills: Skill[] = [
  {
    id: 'js',
    name: 'JavaScript',
    category: 'Programming Languages',
    level: 'intermediate',
    description: 'JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.',
    resources: [
      {
        id: 'js-resource-1',
        title: 'JavaScript: The Good Parts',
        url: 'https://example.com/js-good-parts',
        type: 'book',
        difficulty: 'intermediate',
        description: 'A book focusing on the good features of JavaScript, showing how to use them and why they are good.'
      },
      {
        id: 'js-resource-2',
        title: 'Eloquent JavaScript',
        url: 'https://eloquentjavascript.net/',
        type: 'book',
        difficulty: 'beginner',
        description: 'A comprehensive introduction to JavaScript, programming, and the wonders of the digital world.'
      }
    ]
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend Frameworks',
    level: 'beginner',
    description: 'React is a JavaScript library for building user interfaces, particularly single-page applications.',
    resources: [
      {
        id: 'react-resource-1',
        title: 'React Documentation',
        url: 'https://reactjs.org/docs/getting-started.html',
        type: 'article',
        difficulty: 'beginner',
        description: 'Official React documentation with guides, API reference, and tutorials.'
      }
    ]
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'Backend Technologies',
    level: 'intermediate',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
    resources: [
      {
        id: 'node-resource-1',
        title: 'Node.js in Action',
        url: 'https://example.com/nodejs-in-action',
        type: 'book',
        difficulty: 'intermediate',
        description: 'A comprehensive guide to building real-world applications with Node.js.'
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming Languages',
    level: 'advanced',
    description: 'Python is an interpreted, high-level, general-purpose programming language with dynamic semantics.',
    resources: [
      {
        id: 'python-resource-1',
        title: 'Python Crash Course',
        url: 'https://example.com/python-crash-course',
        type: 'book',
        difficulty: 'beginner',
        description: 'A hands-on, project-based introduction to Python programming.'
      }
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Databases',
    level: 'beginner',
    description: 'SQL (Structured Query Language) is a domain-specific language used for managing data in relational database management systems.',
    resources: [
      {
        id: 'sql-resource-1',
        title: 'SQL for Dummies',
        url: 'https://example.com/sql-for-dummies',
        type: 'book',
        difficulty: 'beginner',
        description: 'A beginner-friendly guide to learning SQL and database concepts.'
      }
    ]
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud Services',
    level: 'intermediate',
    description: 'Amazon Web Services (AWS) is a comprehensive cloud computing platform offering over 200 fully featured services.',
    resources: [
      {
        id: 'aws-resource-1',
        title: 'AWS Certified Solutions Architect Study Guide',
        url: 'https://example.com/aws-cert-guide',
        type: 'book',
        difficulty: 'intermediate',
        description: 'Comprehensive study guide for the AWS Solutions Architect certification.'
      }
    ]
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    level: 'beginner',
    description: 'Docker is a platform for developing, shipping, and running applications in containers.',
    resources: [
      {
        id: 'docker-resource-1',
        title: 'Docker Deep Dive',
        url: 'https://example.com/docker-deep-dive',
        type: 'book',
        difficulty: 'intermediate',
        description: 'A comprehensive guide to Docker and container technology.'
      }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming Languages',
    level: 'intermediate',
    description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    resources: [
      {
        id: 'ts-resource-1',
        title: 'TypeScript Documentation',
        url: 'https://www.typescriptlang.org/docs/',
        type: 'article',
        difficulty: 'beginner',
        description: 'Official TypeScript documentation with guides and examples.'
      }
    ]
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Version Control',
    level: 'intermediate',
    description: 'Git is a distributed version control system for tracking changes in source code during software development.',
    resources: [
      {
        id: 'git-resource-1',
        title: 'Pro Git',
        url: 'https://git-scm.com/book/en/v2',
        type: 'book',
        difficulty: 'intermediate',
        description: 'Comprehensive guide to Git version control system.'
      }
    ]
  },
  {
    id: 'html-css',
    name: 'HTML & CSS',
    category: 'Frontend Technologies',
    level: 'beginner',
    description: 'HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are the core technologies for building web pages.',
    resources: [
      {
        id: 'html-css-resource-1',
        title: 'HTML & CSS: Design and Build Websites',
        url: 'https://example.com/html-css-book',
        type: 'book',
        difficulty: 'beginner',
        description: 'A beautifully designed introduction to HTML and CSS for beginners.'
      }
    ]
  }
];

// Mock Jobs
export const mockJobs: Job[] = [
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    company: 'TechCorp',
    description: 'Develop and maintain user interfaces for web applications using modern JavaScript frameworks.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'react')!,
      mockSkills.find(skill => skill.id === 'html-css')!
    ],
    salaryRange: '$70,000 - $100,000',
    experience: '2-4 years',
    category: 'Web Development',
    roadmap: [
      {
        id: 'frontend-1',
        title: 'Learn HTML & CSS Fundamentals',
        description: 'Master the basics of HTML5 and CSS3 including semantic markup and responsive design.',
        completed: false,
        resources: ['html-css-resource-1']
      },
      {
        id: 'frontend-2',
        title: 'JavaScript Essentials',
        description: 'Learn core JavaScript concepts including ES6+ features, DOM manipulation, and asynchronous programming.',
        completed: false,
        resources: ['js-resource-1', 'js-resource-2']
      },
      {
        id: 'frontend-3',
        title: 'React Framework',
        description: 'Build applications with React, understanding components, state management, and hooks.',
        completed: false,
        resources: ['react-resource-1']
      }
    ]
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    company: 'DataSystems Inc.',
    description: 'Design and implement server-side logic, databases, and APIs for web applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'node')!,
      mockSkills.find(skill => skill.id === 'sql')!
    ],
    salaryRange: '$80,000 - $120,000',
    experience: '3-5 years',
    category: 'Web Development',
    roadmap: [
      {
        id: 'backend-1',
        title: 'Server-side Programming',
        description: 'Learn Node.js and Express for building server applications.',
        completed: false,
        resources: ['node-resource-1']
      },
      {
        id: 'backend-2',
        title: 'Database Design',
        description: 'Master SQL and database design principles for efficient data storage and retrieval.',
        completed: false,
        resources: ['sql-resource-1']
      },
      {
        id: 'backend-3',
        title: 'API Development',
        description: 'Create RESTful and GraphQL APIs for client-server communication.',
        completed: false
      }
    ]
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    description: 'Develop both client and server sides of web applications, working with various technologies across the stack.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'react')!,
      mockSkills.find(skill => skill.id === 'node')!,
      mockSkills.find(skill => skill.id === 'sql')!
    ],
    salaryRange: '$90,000 - $130,000',
    experience: '4-6 years',
    category: 'Web Development',
    roadmap: [
      {
        id: 'fullstack-1',
        title: 'Frontend Development',
        description: 'Master HTML, CSS, JavaScript, and React for building user interfaces.',
        completed: false,
        resources: ['html-css-resource-1', 'js-resource-2', 'react-resource-1']
      },
      {
        id: 'fullstack-2',
        title: 'Backend Development',
        description: 'Learn server-side programming with Node.js and database management.',
        completed: false,
        resources: ['node-resource-1', 'sql-resource-1']
      },
      {
        id: 'fullstack-3',
        title: 'DevOps Basics',
        description: 'Understand deployment, CI/CD, and containerization with Docker.',
        completed: false,
        resources: ['docker-resource-1']
      }
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    company: 'CloudTech',
    description: 'Implement and manage CI/CD pipelines, infrastructure automation, and cloud services.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'aws')!,
      mockSkills.find(skill => skill.id === 'docker')!,
      mockSkills.find(skill => skill.id === 'git')!
    ],
    salaryRange: '$100,000 - $140,000',
    experience: '3-5 years',
    category: 'DevOps',
    roadmap: [
      {
        id: 'devops-1',
        title: 'Cloud Services',
        description: 'Learn AWS core services and architecture patterns.',
        completed: false,
        resources: ['aws-resource-1']
      },
      {
        id: 'devops-2',
        title: 'Containerization',
        description: 'Master Docker and container orchestration with Kubernetes.',
        completed: false,
        resources: ['docker-resource-1']
      },
      {
        id: 'devops-3',
        title: 'CI/CD Pipelines',
        description: 'Implement continuous integration and deployment pipelines.',
        completed: false
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    description: 'Analyze and interpret complex data to help organizations make better decisions.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'sql')!
    ],
    salaryRange: '$90,000 - $140,000',
    experience: '3-6 years',
    category: 'Data Science',
    roadmap: [
      {
        id: 'data-1',
        title: 'Python for Data Science',
        description: 'Learn Python libraries for data analysis: NumPy, Pandas, and Matplotlib.',
        completed: false,
        resources: ['python-resource-1']
      },
      {
        id: 'data-2',
        title: 'SQL for Data Analysis',
        description: 'Master SQL queries for extracting and analyzing data from databases.',
        completed: false,
        resources: ['sql-resource-1']
      },
      {
        id: 'data-3',
        title: 'Machine Learning Fundamentals',
        description: 'Understand core machine learning algorithms and their applications.',
        completed: false
      }
    ]
  }
];

// Mock Resources
export const mockResources: Resource[] = [
  {
    id: 'resource-1',
    title: 'Modern JavaScript: From Fundamentals to Functional JS',
    url: 'https://example.com/modern-js-course',
    type: 'course',
    difficulty: 'intermediate',
    description: 'A comprehensive course covering JavaScript from basics to advanced functional programming techniques.'
  },
  {
    id: 'resource-2',
    title: 'React: The Complete Guide',
    url: 'https://example.com/react-complete-guide',
    type: 'course',
    difficulty: 'beginner',
    description: 'Learn React from scratch with hands-on projects and real-world examples.'
  },
  {
    id: 'resource-3',
    title: 'Node.js Developer Course',
    url: 'https://example.com/nodejs-course',
    type: 'course',
    difficulty: 'intermediate',
    description: 'Build server-side applications with Node.js, Express, and MongoDB.'
  },
  {
    id: 'resource-4',
    title: 'Python Crash Course',
    url: 'https://example.com/python-book',
    type: 'book',
    difficulty: 'beginner',
    description: 'A hands-on, project-based introduction to programming with Python.'
  },
  {
    id: 'resource-5',
    title: 'SQL Fundamentals',
    url: 'https://example.com/sql-fundamentals',
    type: 'article',
    difficulty: 'beginner',
    description: 'Learn the basics of SQL queries and database management.'
  },
  {
    id: 'resource-6',
    title: 'AWS Certified Solutions Architect',
    url: 'https://example.com/aws-certification',
    type: 'course',
    difficulty: 'advanced',
    description: 'Prepare for the AWS Solutions Architect certification with comprehensive training.'
  },
  {
    id: 'resource-7',
    title: 'Docker & Kubernetes: The Complete Guide',
    url: 'https://example.com/docker-kubernetes',
    type: 'course',
    difficulty: 'intermediate',
    description: 'Master containerization and orchestration with Docker and Kubernetes.'
  },
  {
    id: 'resource-8',
    title: 'TypeScript Handbook',
    url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    type: 'article',
    difficulty: 'intermediate',
    description: 'Official documentation for learning TypeScript features and best practices.'
  },
  {
    id: 'resource-9',
    title: 'Pro Git',
    url: 'https://git-scm.com/book/en/v2',
    type: 'book',
    difficulty: 'intermediate',
    description: 'Everything you need to know about Git, from basics to advanced workflows.'
  },
  {
    id: 'resource-10',
    title: 'CSS Tricks',
    url: 'https://css-tricks.com/',
    type: 'article',
    difficulty: 'beginner',
    description: 'Tips, tricks, and techniques on using CSS for modern web development.'
  }
];

// Mock Goals
export const mockGoals: Goal[] = [
  {
    id: 'goal-1',
    title: 'Become a Frontend Developer',
    jobId: 'frontend-dev',
    roadmap: [
      {
        id: 'frontend-goal-1',
        title: 'Learn HTML & CSS',
        description: 'Complete HTML & CSS course and build a responsive website',
        completed: true,
        resources: ['resource-10']
      },
      {
        id: 'frontend-goal-2',
        title: 'Master JavaScript',
        description: 'Complete JavaScript course and build interactive web applications',
        completed: false,
        resources: ['resource-1']
      },
      {
        id: 'frontend-goal-3',
        title: 'Learn React',
        description: 'Build a portfolio project using React',
        completed: false,
        resources: ['resource-2']
      }
    ],
    progress: 33
  },
  {
    id: 'goal-2',
    title: 'Master Python for Data Science',
    skillId: 'python',
    roadmap: [
      {
        id: 'python-goal-1',
        title: 'Python Basics',
        description: 'Learn Python syntax and basic programming concepts',
        completed: true,
        resources: ['resource-4']
      },
      {
        id: 'python-goal-2',
        title: 'Data Analysis with Python',
        description: 'Learn NumPy, Pandas, and data visualization libraries',
        completed: false
      },
      {
        id: 'python-goal-3',
        title: 'Machine Learning Fundamentals',
        description: 'Implement basic machine learning algorithms with scikit-learn',
        completed: false
      }
    ],
    progress: 33
  }
];

// Combined quiz collection with all categories
export const allQuizzes: Quiz[] = [
  ...languageQuizzes,      // Python, C, C++
  ...webTechnologyQuizzes, // HTML, CSS, JavaScript
  ...databaseQuizzes,      // SQL, NoSQL
];
