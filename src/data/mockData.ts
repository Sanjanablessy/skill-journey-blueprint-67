import { Quiz, Job, Skill, Resource, Goal } from '@/types';
import { languageQuizzes } from './languageQuizzes';
import { webTechnologyQuizzes } from './webTechnologyQuizzes';
import { databaseQuizzes } from './databaseQuizzes';
import { cloudQuizzes } from './cloudQuizzes';
import { dataScienceQuizzes } from './dataScienceQuizzes';
import { devopsQuizzes } from './devopsQuizzes';
import { cybersecurityQuizzes } from './cybersecurityQuizzes';
import { mobileQuizzes } from './mobileQuizzes';

// Mock Skills - Expanded to include all domains
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
  },

  // Mobile App Development Skills
  {
    id: 'android',
    name: 'Android',
    category: 'Mobile Development',
    level: 'intermediate',
    description: 'Android is Google\'s mobile operating system. Develop native Android apps using Java or Kotlin.',
    resources: []
  },
  {
    id: 'ios',
    name: 'iOS',
    category: 'Mobile Development',
    level: 'intermediate',
    description: 'iOS is Apple\'s mobile operating system. Develop native iOS apps using Swift or Objective-C.',
    resources: []
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'Mobile Development',
    level: 'intermediate',
    description: 'Flutter is Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop.',
    resources: []
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'Mobile Development',
    level: 'intermediate',
    description: 'React Native is a framework for building mobile applications using React and JavaScript.',
    resources: []
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'Programming Languages',
    level: 'intermediate',
    description: 'Kotlin is a modern programming language that runs on the JVM and is fully interoperable with Java.',
    resources: []
  },
  {
    id: 'swift',
    name: 'Swift',
    category: 'Programming Languages',
    level: 'intermediate',
    description: 'Swift is Apple\'s powerful and intuitive programming language for iOS, macOS, and other Apple platforms.',
    resources: []
  },

  // Cybersecurity Skills
  {
    id: 'network-security',
    name: 'Network Security',
    category: 'Cybersecurity',
    level: 'advanced',
    description: 'Network security involves protecting computer networks from unauthorized access and attacks.',
    resources: []
  },
  {
    id: 'ethical-hacking',
    name: 'Ethical Hacking',
    category: 'Cybersecurity',
    level: 'advanced',
    description: 'Ethical hacking involves authorized testing of systems to identify security vulnerabilities.',
    resources: []
  },
  {
    id: 'penetration-testing',
    name: 'Penetration Testing',
    category: 'Cybersecurity',
    level: 'advanced',
    description: 'Penetration testing is the practice of testing systems for security vulnerabilities.',
    resources: []
  },

  // Cloud Computing Skills
  {
    id: 'azure',
    name: 'Azure',
    category: 'Cloud Services',
    level: 'intermediate',
    description: 'Microsoft Azure is a comprehensive cloud computing platform and service.',
    resources: []
  },
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    category: 'Cloud Services',
    level: 'intermediate',
    description: 'Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google.',
    resources: []
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'DevOps',
    level: 'advanced',
    description: 'Kubernetes is an open-source container orchestration platform for automating deployment.',
    resources: []
  },

  // AI/ML Skills
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'Machine Learning',
    level: 'advanced',
    description: 'TensorFlow is an open-source machine learning framework developed by Google.',
    resources: []
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'Machine Learning',
    level: 'advanced',
    description: 'PyTorch is an open-source machine learning library developed by Facebook.',
    resources: []
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'Machine Learning',
    level: 'intermediate',
    description: 'Scikit-learn is a machine learning library for Python.',
    resources: []
  },

  // Database Skills
  {
    id: 'oracle',
    name: 'Oracle',
    category: 'Databases',
    level: 'advanced',
    description: 'Oracle Database is a multi-model database management system produced by Oracle Corporation.',
    resources: []
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Databases',
    level: 'intermediate',
    description: 'MySQL is an open-source relational database management system.',
    resources: []
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases',
    level: 'intermediate',
    description: 'PostgreSQL is a powerful, open-source object-relational database system.',
    resources: []
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Databases',
    level: 'intermediate',
    description: 'MongoDB is a document-oriented NoSQL database program.',
    resources: []
  },

  // UI/UX Design Skills
  {
    id: 'figma',
    name: 'Figma',
    category: 'UI/UX Design',
    level: 'intermediate',
    description: 'Figma is a web-based graphics editing and user interface design app.',
    resources: []
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    category: 'UI/UX Design',
    level: 'intermediate',
    description: 'Adobe XD is a vector-based user experience design tool for web and mobile apps.',
    resources: []
  },
  {
    id: 'design-thinking',
    name: 'Design Thinking',
    category: 'UI/UX Design',
    level: 'beginner',
    description: 'Design thinking is a human-centered approach to innovation and problem-solving.',
    resources: []
  },

  // Testing/QA Skills
  {
    id: 'manual-testing',
    name: 'Manual Testing',
    category: 'Software Testing',
    level: 'beginner',
    description: 'Manual testing is the process of manually testing software for defects.',
    resources: []
  },
  {
    id: 'selenium',
    name: 'Selenium',
    category: 'Software Testing',
    level: 'intermediate',
    description: 'Selenium is a suite of tools for automating web browsers.',
    resources: []
  },
  {
    id: 'junit',
    name: 'JUnit',
    category: 'Software Testing',
    level: 'intermediate',
    description: 'JUnit is a unit testing framework for the Java programming language.',
    resources: []
  },

  // System Administration Skills
  {
    id: 'linux-admin',
    name: 'Linux Administration',
    category: 'System Administration',
    level: 'intermediate',
    description: 'Linux administration involves managing and maintaining Linux-based computer systems.',
    resources: []
  },
  {
    id: 'help-desk',
    name: 'Help Desk Support',
    category: 'IT Support',
    level: 'beginner',
    description: 'Help desk support involves providing technical assistance to users.',
    resources: []
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    category: 'IT Support',
    level: 'intermediate',
    description: 'Troubleshooting is the process of diagnosing and resolving technical problems.',
    resources: []
  },

  // Blockchain Skills
  {
    id: 'solidity',
    name: 'Solidity',
    category: 'Blockchain',
    level: 'advanced',
    description: 'Solidity is a programming language for writing smart contracts on Ethereum.',
    resources: []
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    category: 'Blockchain',
    level: 'advanced',
    description: 'Ethereum is a decentralized platform for smart contracts and decentralized applications.',
    resources: []
  },
  {
    id: 'smart-contracts',
    name: 'Smart Contracts',
    category: 'Blockchain',
    level: 'advanced',
    description: 'Smart contracts are self-executing contracts with terms written into code.',
    resources: []
  },

  // Game Development Skills
  {
    id: 'unity',
    name: 'Unity',
    category: 'Game Development',
    level: 'intermediate',
    description: 'Unity is a cross-platform game engine developed by Unity Technologies.',
    resources: []
  },
  {
    id: 'unreal-engine',
    name: 'Unreal Engine',
    category: 'Game Development',
    level: 'advanced',
    description: 'Unreal Engine is a game engine developed by Epic Games.',
    resources: []
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'Programming Languages',
    level: 'intermediate',
    description: 'C# is a general-purpose, multi-paradigm programming language developed by Microsoft.',
    resources: []
  },

  // Business Intelligence Skills
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'Business Intelligence',
    level: 'intermediate',
    description: 'Power BI is a business analytics solution that delivers insights for analyzing data.',
    resources: []
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'Business Intelligence',
    level: 'intermediate',
    description: 'Tableau is a powerful data visualization tool used in the Business Intelligence industry.',
    resources: []
  },
  {
    id: 'excel',
    name: 'Excel',
    category: 'Business Intelligence',
    level: 'beginner',
    description: 'Microsoft Excel is a spreadsheet program used for data analysis and visualization.',
    resources: []
  },

  // IoT/Embedded Skills
  {
    id: 'iot',
    name: 'IoT',
    category: 'Embedded Systems',
    level: 'intermediate',
    description: 'Internet of Things (IoT) involves connecting devices to the internet for data exchange.',
    resources: []
  },
  {
    id: 'arduino',
    name: 'Arduino',
    category: 'Embedded Systems',
    level: 'beginner',
    description: 'Arduino is an open-source electronics platform for building digital devices.',
    resources: []
  },
  {
    id: 'raspberry-pi',
    name: 'Raspberry Pi',
    category: 'Embedded Systems',
    level: 'beginner',
    description: 'Raspberry Pi is a series of small single-board computers.',
    resources: []
  },

  // Project Management Skills
  {
    id: 'agile',
    name: 'Agile',
    category: 'Project Management',
    level: 'intermediate',
    description: 'Agile is a project management methodology that emphasizes iterative development.',
    resources: []
  },
  {
    id: 'scrum',
    name: 'Scrum',
    category: 'Project Management',
    level: 'intermediate',
    description: 'Scrum is an agile framework for managing product development.',
    resources: []
  },
  {
    id: 'jira',
    name: 'JIRA',
    category: 'Project Management',
    level: 'beginner',
    description: 'JIRA is a tool for bug tracking, issue tracking, and project management.',
    resources: []
  }
];

// Mock Jobs - Complete list with all requested job titles
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
  },

  // Mobile App Development Jobs
  {
    id: 'android-developer',
    title: 'Android Developer',
    company: 'MobileTech Solutions',
    description: 'Develop native Android applications using Kotlin and Java. Work with Android SDK and modern development practices.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'android')!,
      mockSkills.find(skill => skill.id === 'kotlin')!,
      mockSkills.find(skill => skill.id === 'git')!
    ],
    salaryRange: '$75,000 - $110,000',
    experience: '2-4 years',
    category: 'Mobile Development',
    roadmap: []
  },
  {
    id: 'ios-developer',
    title: 'iOS Developer',
    company: 'AppVenture Inc.',
    description: 'Build and maintain iOS applications using Swift. Experience with Xcode and Apple development ecosystem required.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'ios')!,
      mockSkills.find(skill => skill.id === 'swift')!,
      mockSkills.find(skill => skill.id === 'git')!
    ],
    salaryRange: '$80,000 - $115,000',
    experience: '2-5 years',
    category: 'Mobile Development',
    roadmap: []
  },
  {
    id: 'flutter-developer',
    title: 'Flutter Developer',
    company: 'CrossPlatform Studios',
    description: 'Develop cross-platform mobile applications using Flutter framework. Create beautiful, natively compiled applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'flutter')!,
      mockSkills.find(skill => skill.id === 'git')!
    ],
    salaryRange: '$70,000 - $105,000',
    experience: '1-3 years',
    category: 'Mobile Development',
    roadmap: []
  },
  {
    id: 'react-native-developer',
    title: 'React Native Developer',
    company: 'Mobile Innovations',
    description: 'Build mobile applications using React Native. Leverage JavaScript and React knowledge for mobile development.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'react-native')!,
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'react')!
    ],
    salaryRange: '$72,000 - $108,000',
    experience: '2-4 years',
    category: 'Mobile Development',
    roadmap: []
  },

  // Cybersecurity Jobs
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    company: 'SecureNet Corp',
    description: 'Monitor and analyze security threats, implement security measures, and respond to incidents.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'network-security')!,
      mockSkills.find(skill => skill.id === 'ethical-hacking')!
    ],
    salaryRange: '$85,000 - $125,000',
    experience: '3-5 years',
    category: 'Cybersecurity',
    roadmap: []
  },
  {
    id: 'penetration-tester',
    title: 'Penetration Tester',
    company: 'CyberDefense Solutions',
    description: 'Conduct authorized security testing to identify vulnerabilities in systems and applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'penetration-testing')!,
      mockSkills.find(skill => skill.id === 'ethical-hacking')!,
      mockSkills.find(skill => skill.id === 'network-security')!
    ],
    salaryRange: '$90,000 - $135,000',
    experience: '3-6 years',
    category: 'Cybersecurity',
    roadmap: []
  },
  {
    id: 'security-engineer',
    title: 'Security Engineer',
    company: 'InfoSec Technologies',
    description: 'Design and implement security architecture for enterprise systems and applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'network-security')!,
      mockSkills.find(skill => skill.id === 'linux-admin')!
    ],
    salaryRange: '$95,000 - $140,000',
    experience: '4-7 years',
    category: 'Cybersecurity',
    roadmap: []
  },

  // Cloud Computing Jobs
  {
    id: 'cloud-architect',
    title: 'Cloud Solutions Architect',
    company: 'CloudFirst Systems',
    description: 'Design and implement cloud architecture solutions using AWS, Azure, and GCP platforms.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'aws')!,
      mockSkills.find(skill => skill.id === 'azure')!,
      mockSkills.find(skill => skill.id === 'kubernetes')!
    ],
    salaryRange: '$110,000 - $160,000',
    experience: '5-8 years',
    category: 'Cloud Computing',
    roadmap: []
  },
  {
    id: 'kubernetes-engineer',
    title: 'Kubernetes Engineer',
    company: 'Container Solutions',
    description: 'Manage and optimize Kubernetes clusters, implement container orchestration strategies.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'kubernetes')!,
      mockSkills.find(skill => skill.id === 'docker')!,
      mockSkills.find(skill => skill.id === 'linux-admin')!
    ],
    salaryRange: '$105,000 - $150,000',
    experience: '4-6 years',
    category: 'Cloud Computing',
    roadmap: []
  },
  {
    id: 'cloud-devops',
    title: 'Cloud DevOps Engineer',
    company: 'ScaleUp Cloud',
    description: 'Implement CI/CD pipelines and infrastructure automation in cloud environments.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'aws')!,
      mockSkills.find(skill => skill.id === 'docker')!,
      mockSkills.find(skill => skill.id === 'git')!
    ],
    salaryRange: '$100,000 - $145,000',
    experience: '3-6 years',
    category: 'Cloud Computing',
    roadmap: []
  },

  // Artificial Intelligence / Machine Learning Jobs
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    company: 'AI Innovations',
    description: 'Design and implement artificial intelligence solutions for various business applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'tensorflow')!,
      mockSkills.find(skill => skill.id === 'pytorch')!
    ],
    salaryRange: '$110,000 - $160,000',
    experience: '3-6 years',
    category: 'Artificial Intelligence',
    roadmap: []
  },
  {
    id: 'deep-learning-specialist',
    title: 'Deep Learning Specialist',
    company: 'DeepMind Technologies',
    description: 'Develop deep learning models and neural networks for complex AI applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'tensorflow')!,
      mockSkills.find(skill => skill.id === 'pytorch')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$125,000 - $180,000',
    experience: '4-7 years',
    category: 'Artificial Intelligence',
    roadmap: []
  },
  {
    id: 'computer-vision-engineer',
    title: 'Computer Vision Engineer',
    company: 'Vision AI',
    description: 'Develop computer vision systems for image and video analysis applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'tensorflow')!,
      mockSkills.find(skill => skill.id === 'opencv')! || mockSkills.find(skill => skill.id === 'pytorch')!
    ].filter(Boolean),
    salaryRange: '$115,000 - $165,000',
    experience: '3-6 years',
    category: 'Artificial Intelligence',
    roadmap: []
  },
  {
    id: 'data-annotation-specialist',
    title: 'Data Annotation Specialist',
    company: 'ML Data Services',
    description: 'Prepare and annotate data for machine learning model training and validation.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'excel')!
    ],
    salaryRange: '$45,000 - $70,000',
    experience: '1-3 years',
    category: 'Artificial Intelligence',
    roadmap: []
  },

  // Database Administration Jobs
  {
    id: 'database-administrator',
    title: 'Database Administrator (DBA)',
    company: 'DataManagement Solutions',
    description: 'Manage and maintain database systems, ensure data integrity and performance optimization.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'oracle')!,
      mockSkills.find(skill => skill.id === 'mysql')!,
      mockSkills.find(skill => skill.id === 'sql')!
    ],
    salaryRange: '$85,000 - $125,000',
    experience: '4-7 years',
    category: 'Database Administration',
    roadmap: []
  },
  {
    id: 'sql-developer',
    title: 'SQL Developer',
    company: 'Database Solutions',
    description: 'Design and develop SQL queries, stored procedures, and database applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'mysql')!,
      mockSkills.find(skill => skill.id === 'postgresql')!
    ],
    salaryRange: '$70,000 - $100,000',
    experience: '2-5 years',
    category: 'Database Administration',
    roadmap: []
  },
  {
    id: 'data-warehouse-developer',
    title: 'Data Warehouse Developer',
    company: 'Enterprise Data',
    description: 'Design and implement data warehouse solutions for business intelligence.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'oracle')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$85,000 - $120,000',
    experience: '3-6 years',
    category: 'Database Administration',
    roadmap: []
  },
  {
    id: 'nosql-developer',
    title: 'NoSQL Developer (MongoDB, Cassandra)',
    company: 'ModernDB Systems',
    description: 'Design and implement NoSQL database solutions using MongoDB and other document databases.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'mongodb')!,
      mockSkills.find(skill => skill.id === 'node')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$80,000 - $115,000',
    experience: '3-5 years',
    category: 'Database Administration',
    roadmap: []
  },
  {
    id: 'database-architect',
    title: 'Database Architect',
    company: 'DB Architecture Pro',
    description: 'Design enterprise database architecture and data modeling strategies.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'oracle')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'postgresql')!
    ],
    salaryRange: '$110,000 - $150,000',
    experience: '6-10 years',
    category: 'Database Administration',
    roadmap: []
  },
  {
    id: 'big-data-engineer',
    title: 'Big Data Engineer',
    company: 'BigData Analytics',
    description: 'Design and implement big data processing systems and analytics platforms.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'aws')!
    ],
    salaryRange: '$100,000 - $140,000',
    experience: '4-6 years',
    category: 'Database Administration',
    roadmap: []
  },

  // UI/UX Design Jobs
  {
    id: 'ui-designer',
    title: 'UI Designer',
    company: 'Visual Creatives',
    description: 'Design beautiful and intuitive user interfaces for web and mobile applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'figma')!,
      mockSkills.find(skill => skill.id === 'adobe-xd')!,
      mockSkills.find(skill => skill.id === 'html-css')!
    ],
    salaryRange: '$65,000 - $105,000',
    experience: '2-4 years',
    category: 'UI/UX Design',
    roadmap: []
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    company: 'DesignStudio Pro',
    description: 'Create user-centered designs and conduct user research to improve product usability.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'figma')!,
      mockSkills.find(skill => skill.id === 'design-thinking')!,
      mockSkills.find(skill => skill.id === 'adobe-xd')!
    ],
    salaryRange: '$70,000 - $110,000',
    experience: '2-5 years',
    category: 'UI/UX Design',
    roadmap: []
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    company: 'InnovateTech',
    description: 'Lead product design from concept to implementation, combining UX research with visual design.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'figma')!,
      mockSkills.find(skill => skill.id === 'design-thinking')!
    ],
    salaryRange: '$85,000 - $130,000',
    experience: '4-7 years',
    category: 'UI/UX Design',
    roadmap: []
  },
  {
    id: 'ux-researcher',
    title: 'UX Researcher',
    company: 'User Research Labs',
    description: 'Conduct user research and usability testing to inform design decisions.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'design-thinking')!,
      mockSkills.find(skill => skill.id === 'figma')!
    ],
    salaryRange: '$75,000 - $115,000',
    experience: '3-5 years',
    category: 'UI/UX Design',
    roadmap: []
  },
  {
    id: 'interaction-designer',
    title: 'Interaction Designer',
    company: 'Interactive Design Co',
    description: 'Design interactive experiences and user flows for digital products.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'figma')!,
      mockSkills.find(skill => skill.id === 'adobe-xd')!,
      mockSkills.find(skill => skill.id === 'design-thinking')!
    ],
    salaryRange: '$70,000 - $110,000',
    experience: '3-5 years',
    category: 'UI/UX Design',
    roadmap: []
  },
  {
    id: 'visual-designer',
    title: 'Visual Designer',
    company: 'Creative Visuals',
    description: 'Create visual elements and brand identity for digital and print media.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'adobe-xd')!,
      mockSkills.find(skill => skill.id === 'figma')!
    ],
    salaryRange: '$60,000 - $95,000',
    experience: '2-4 years',
    category: 'UI/UX Design',
    roadmap: []
  },
  {
    id: 'information-architect',
    title: 'Information Architect',
    company: 'IA Specialists',
    description: 'Structure and organize information to create intuitive user experiences.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'design-thinking')!,
      mockSkills.find(skill => skill.id === 'figma')!
    ],
    salaryRange: '$80,000 - $120,000',
    experience: '4-6 years',
    category: 'UI/UX Design',
    roadmap: []
  },

  // Software Testing / QA Jobs
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    company: 'QualityFirst Software',
    description: 'Perform manual and automated testing to ensure software quality and reliability.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'manual-testing')!,
      mockSkills.find(skill => skill.id === 'selenium')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$60,000 - $90,000',
    experience: '2-4 years',
    category: 'Software Testing',
    roadmap: []
  },
  {
    id: 'automation-test-engineer',
    title: 'Automation Test Engineer',
    company: 'TestAutomation Labs',
    description: 'Develop and maintain automated test suites using Selenium and other testing frameworks.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'selenium')!,
      mockSkills.find(skill => skill.id === 'junit')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$70,000 - $105,000',
    experience: '3-5 years',
    category: 'Software Testing',
    roadmap: []
  },
  {
    id: 'manual-test-engineer',
    title: 'Manual Test Engineer',
    company: 'Quality Assurance Pro',
    description: 'Execute manual testing procedures and identify software defects.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'manual-testing')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!
    ],
    salaryRange: '$50,000 - $75,000',
    experience: '1-3 years',
    category: 'Software Testing',
    roadmap: []
  },
  {
    id: 'test-architect',
    title: 'Test Architect',
    company: 'Testing Architecture',
    description: 'Design testing strategies and frameworks for complex software systems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'selenium')!,
      mockSkills.find(skill => skill.id === 'manual-testing')!,
      mockSkills.find(skill => skill.id === 'junit')!
    ],
    salaryRange: '$95,000 - $135,000',
    experience: '6-8 years',
    category: 'Software Testing',
    roadmap: []
  },
  {
    id: 'performance-tester',
    title: 'Performance Tester',
    company: 'LoadTest Solutions',
    description: 'Conduct performance testing to ensure applications can handle expected user loads.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'manual-testing')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!
    ],
    salaryRange: '$75,000 - $110,000',
    experience: '3-6 years',
    category: 'Software Testing',
    roadmap: []
  },
  {
    id: 'selenium-tester',
    title: 'Selenium Tester',
    company: 'Automation Testing Co',
    description: 'Specialize in Selenium automation for web application testing.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'selenium')!,
      mockSkills.find(skill => skill.id === 'java')! || mockSkills.find(skill => skill.id === 'python')!
    ].filter(Boolean),
    salaryRange: '$65,000 - $95,000',
    experience: '2-4 years',
    category: 'Software Testing',
    roadmap: []
  },

  // System Administration / IT Support Jobs
  {
    id: 'system-administrator',
    title: 'System Administrator',
    company: 'Enterprise IT Services',
    description: 'Manage and maintain server infrastructure, ensure system security and performance.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'linux-admin')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!,
      mockSkills.find(skill => skill.id === 'network-security')!
    ],
    salaryRange: '$65,000 - $95,000',
    experience: '3-5 years',
    category: 'System Administration',
    roadmap: []
  },
  {
    id: 'linux-administrator',
    title: 'Linux Administrator',
    company: 'Linux Systems Pro',
    description: 'Administer Linux-based systems and servers in enterprise environments.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'linux-admin')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!
    ],
    salaryRange: '$70,000 - $105,000',
    experience: '3-6 years',
    category: 'System Administration',
    roadmap: []
  },
  {
    id: 'windows-administrator',
    title: 'Windows Administrator',
    company: 'Windows Systems Corp',
    description: 'Manage Windows-based server infrastructure and Active Directory services.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'troubleshooting')!,
      mockSkills.find(skill => skill.id === 'network-security')!
    ],
    salaryRange: '$65,000 - $95,000',
    experience: '3-5 years',
    category: 'System Administration',
    roadmap: []
  },
  {
    id: 'it-support-specialist',
    title: 'IT Support Specialist',
    company: 'TechSupport Plus',
    description: 'Provide technical support to users, troubleshoot hardware and software issues.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'help-desk')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!
    ],
    salaryRange: '$45,000 - $65,000',
    experience: '1-3 years',
    category: 'IT Support',
    roadmap: []
  },
  {
    id: 'help-desk-technician',
    title: 'Help Desk Technician',
    company: 'IT Help Solutions',
    description: 'Provide first-level technical support and troubleshooting for end users.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'help-desk')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!
    ],
    salaryRange: '$35,000 - $55,000',
    experience: '0-2 years',
    category: 'IT Support',
    roadmap: []
  },
  {
    id: 'network-administrator',
    title: 'Network Administrator',
    company: 'NetworkPro Solutions',
    description: 'Configure and maintain network infrastructure, monitor network performance and security.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'network-security')!,
      mockSkills.find(skill => skill.id === 'linux-admin')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!
    ],
    salaryRange: '$70,000 - $100,000',
    experience: '3-6 years',
    category: 'System Administration',
    roadmap: []
  },
  {
    id: 'technical-support-engineer',
    title: 'Technical Support Engineer',
    company: 'Enterprise Support',
    description: 'Provide advanced technical support and problem resolution for complex systems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'troubleshooting')!,
      mockSkills.find(skill => skill.id === 'linux-admin')!
    ],
    salaryRange: '$60,000 - $90,000',
    experience: '3-5 years',
    category: 'IT Support',
    roadmap: []
  },

  // Blockchain Development Jobs
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    company: 'CryptoTech Solutions',
    description: 'Develop decentralized applications and smart contracts on blockchain platforms.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'solidity')!,
      mockSkills.find(skill => skill.id === 'ethereum')!,
      mockSkills.find(skill => skill.id === 'smart-contracts')!
    ],
    salaryRange: '$100,000 - $150,000',
    experience: '3-6 years',
    category: 'Blockchain Development',
    roadmap: []
  },
  {
    id: 'smart-contract-developer',
    title: 'Smart Contract Developer',
    company: 'DeFi Innovations',
    description: 'Design and implement smart contracts for DeFi protocols and blockchain applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'solidity')!,
      mockSkills.find(skill => skill.id === 'smart-contracts')!,
      mockSkills.find(skill => skill.id === 'js')!
    ],
    salaryRange: '$110,000 - $160,000',
    experience: '3-5 years',
    category: 'Blockchain Development',
    roadmap: []
  },
  {
    id: 'solidity-developer',
    title: 'Solidity Developer',
    company: 'Ethereum Solutions',
    description: 'Specialize in Solidity programming for Ethereum-based applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'solidity')!,
      mockSkills.find(skill => skill.id === 'ethereum')!,
      mockSkills.find(skill => skill.id === 'smart-contracts')!
    ],
    salaryRange: '$105,000 - $155,000',
    experience: '2-5 years',
    category: 'Blockchain Development',
    roadmap: []
  },
  {
    id: 'blockchain-architect',
    title: 'Blockchain Architect',
    company: 'Blockchain Architecture',
    description: 'Design blockchain architecture and distributed systems for enterprise applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'ethereum')!,
      mockSkills.find(skill => skill.id === 'smart-contracts')!,
      mockSkills.find(skill => skill.id === 'solidity')!
    ],
    salaryRange: '$130,000 - $180,000',
    experience: '5-8 years',
    category: 'Blockchain Development',
    roadmap: []
  },
  {
    id: 'crypto-wallet-developer',
    title: 'Crypto Wallet Developer',
    company: 'CryptoWallet Inc',
    description: 'Develop secure cryptocurrency wallet applications and services.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'ethereum')!,
      mockSkills.find(skill => skill.id === 'smart-contracts')!
    ],
    salaryRange: '$95,000 - $140,000',
    experience: '3-5 years',
    category: 'Blockchain Development',
    roadmap: []
  },
  {
    id: 'web3-developer',
    title: 'Web3 Developer',
    company: 'Web3 Technologies',
    description: 'Build decentralized web applications using Web3 technologies and protocols.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'react')!,
      mockSkills.find(skill => skill.id === 'ethereum')!
    ],
    salaryRange: '$90,000 - $135,000',
    experience: '2-4 years',
    category: 'Blockchain Development',
    roadmap: []
  },
  {
    id: 'nft-developer',
    title: 'NFT Developer',
    company: 'NFT Marketplace',
    description: 'Develop NFT platforms and marketplaces using blockchain technologies.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'solidity')!,
      mockSkills.find(skill => skill.id === 'ethereum')!,
      mockSkills.find(skill => skill.id === 'js')!
    ],
    salaryRange: '$85,000 - $130,000',
    experience: '2-4 years',
    category: 'Blockchain Development',
    roadmap: []
  },

  // Game Development Jobs
  {
    id: 'game-developer',
    title: 'Game Developer',
    company: 'GameStudio Pro',
    description: 'Develop video games using Unity and C#, create engaging gameplay experiences.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'unity')!,
      mockSkills.find(skill => skill.id === 'csharp')!
    ],
    salaryRange: '$70,000 - $110,000',
    experience: '2-5 years',
    category: 'Game Development',
    roadmap: []
  },
  {
    id: 'unity-developer',
    title: 'Unity Developer',
    company: 'Unity Games Studio',
    description: 'Create games and interactive applications using Unity game engine.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'unity')!,
      mockSkills.find(skill => skill.id === 'csharp')!
    ],
    salaryRange: '$65,000 - $105,000',
    experience: '2-4 years',
    category: 'Game Development',
    roadmap: []
  },
  {
    id: 'unreal-developer',
    title: 'Unreal Engine Developer',
    company: 'Epic Games Studios',
    description: 'Create high-quality games using Unreal Engine, work on AAA game titles.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'unreal-engine')!,
      mockSkills.find(skill => skill.id === 'csharp')!
    ],
    salaryRange: '$85,000 - $130,000',
    experience: '3-6 years',
    category: 'Game Development',
    roadmap: []
  },
  {
    id: 'game-designer',
    title: 'Game Designer',
    company: 'Creative Game Design',
    description: 'Design game mechanics, levels, and player experiences for video games.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'unity')!,
      mockSkills.find(skill => skill.id === 'design-thinking')!
    ],
    salaryRange: '$60,000 - $95,000',
    experience: '2-5 years',
    category: 'Game Development',
    roadmap: []
  },
  {
    id: 'game-artist',
    title: 'Game Artist',
    company: 'Game Art Studios',
    description: 'Create visual assets and artwork for video games and interactive media.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'adobe-xd')!,
      mockSkills.find(skill => skill.id === 'figma')!
    ],
    salaryRange: '$55,000 - $85,000',
    experience: '2-4 years',
    category: 'Game Development',
    roadmap: []
  },
  {
    id: 'gameplay-programmer',
    title: 'Gameplay Programmer',
    company: 'Interactive Gaming',
    description: 'Program game mechanics and player interactions using game engines.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'csharp')!,
      mockSkills.find(skill => skill.id === 'unity')!
    ],
    salaryRange: '$75,000 - $115,000',
    experience: '3-5 years',
    category: 'Game Development',
    roadmap: []
  },
  {
    id: 'level-designer',
    title: 'Level Designer',
    company: 'Level Design Pro',
    description: 'Design and create game levels, environments, and player progression systems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'unity')!,
      mockSkills.find(skill => skill.id === 'design-thinking')!
    ],
    salaryRange: '$60,000 - $90,000',
    experience: '2-4 years',
    category: 'Game Development',
    roadmap: []
  },

  // Business Intelligence / Data Analytics Jobs
  {
    id: 'bi-developer',
    title: 'BI Developer',
    company: 'DataInsights Corp',
    description: 'Develop business intelligence solutions and data warehouses for enterprise reporting.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'power-bi')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'excel')!
    ],
    salaryRange: '$75,000 - $110,000',
    experience: '3-5 years',
    category: 'Business Intelligence',
    roadmap: []
  },
  {
    id: 'bi-analyst',
    title: 'BI Analyst',
    company: 'Business Analytics',
    description: 'Create reports and dashboards using Power BI and Tableau to support business decisions.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'power-bi')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'excel')!
    ],
    salaryRange: '$70,000 - $100,000',
    experience: '2-4 years',
    category: 'Business Intelligence',
    roadmap: []
  },
  {
    id: 'data-visualization-specialist',
    title: 'Data Visualization Specialist',
    company: 'Visual Data Co',
    description: 'Create compelling data visualizations and interactive dashboards.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'tableau')!,
      mockSkills.find(skill => skill.id === 'power-bi')!,
      mockSkills.find(skill => skill.id === 'sql')!
    ],
    salaryRange: '$70,000 - $105,000',
    experience: '2-4 years',
    category: 'Business Intelligence',
    roadmap: []
  },
  {
    id: 'tableau-developer',
    title: 'Tableau Developer',
    company: 'Analytics Solutions',
    description: 'Develop interactive data visualizations and dashboards using Tableau.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'tableau')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'excel')!
    ],
    salaryRange: '$75,000 - $110,000',
    experience: '3-5 years',
    category: 'Business Intelligence',
    roadmap: []
  },
  {
    id: 'power-bi-developer',
    title: 'Power BI Developer',
    company: 'Microsoft BI Solutions',
    description: 'Create business intelligence solutions using Microsoft Power BI platform.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'power-bi')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'excel')!
    ],
    salaryRange: '$70,000 - $105,000',
    experience: '2-4 years',
    category: 'Business Intelligence',
    roadmap: []
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    company: 'Business Solutions Inc',
    description: 'Analyze business processes and requirements to improve organizational efficiency.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'excel')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'agile')!
    ],
    salaryRange: '$65,000 - $95,000',
    experience: '2-5 years',
    category: 'Business Intelligence',
    roadmap: []
  },
  {
    id: 'data-reporting-analyst',
    title: 'Data Reporting Analyst',
    company: 'Reporting Solutions',
    description: 'Create and maintain data reports and automated reporting systems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'excel')!,
      mockSkills.find(skill => skill.id === 'power-bi')!
    ],
    salaryRange: '$60,000 - $85,000',
    experience: '2-4 years',
    category: 'Business Intelligence',
    roadmap: []
  },

  // Robotics / Embedded Systems Jobs
  {
    id: 'embedded-systems-engineer',
    title: 'Embedded Systems Engineer',
    company: 'Hardware Solutions',
    description: 'Design and develop embedded systems for various hardware applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'arduino')!,
      mockSkills.find(skill => skill.id === 'raspberry-pi')!,
      mockSkills.find(skill => skill.id === 'csharp')!
    ],
    salaryRange: '$80,000 - $120,000',
    experience: '3-6 years',
    category: 'Embedded Systems',
    roadmap: []
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    company: 'Robotics Innovations',
    description: 'Design and develop robotic systems and automation solutions.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'arduino')!,
      mockSkills.find(skill => skill.id === 'raspberry-pi')!
    ],
    salaryRange: '$85,000 - $130,000',
    experience: '3-6 years',
    category: 'Embedded Systems',
    roadmap: []
  },
  {
    id: 'iot-developer',
    title: 'IoT Developer',
    company: 'ConnectedDevices Inc',
    description: 'Develop Internet of Things applications and embedded systems using Arduino and Raspberry Pi.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'iot')!,
      mockSkills.find(skill => skill.id === 'arduino')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$70,000 - $105,000',
    experience: '2-5 years',
    category: 'Embedded Systems',
    roadmap: []
  },
  {
    id: 'firmware-engineer',
    title: 'Firmware Engineer',
    company: 'Firmware Solutions',
    description: 'Develop firmware for embedded systems and hardware devices.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'arduino')!,
      mockSkills.find(skill => skill.id === 'csharp')!
    ],
    salaryRange: '$75,000 - $115,000',
    experience: '3-5 years',
    category: 'Embedded Systems',
    roadmap: []
  },
  {
    id: 'automation-engineer',
    title: 'Automation Engineer',
    company: 'Industrial Automation',
    description: 'Design and implement automation systems for manufacturing and industrial processes.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'arduino')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!
    ],
    salaryRange: '$80,000 - $120,000',
    experience: '3-6 years',
    category: 'Embedded Systems',
    roadmap: []
  },
  {
    id: 'hardware-design-engineer',
    title: 'Hardware Design Engineer',
    company: 'Hardware Design Pro',
    description: 'Design and develop hardware components and electronic systems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'arduino')!,
      mockSkills.find(skill => skill.id === 'raspberry-pi')!
    ],
    salaryRange: '$85,000 - $125,000',
    experience: '4-7 years',
    category: 'Embedded Systems',
    roadmap: []
  },
  {
    id: 'control-systems-engineer',
    title: 'Control Systems Engineer',
    company: 'Control Engineering',
    description: 'Design and implement control systems for industrial and automation applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'arduino')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!
    ],
    salaryRange: '$90,000 - $130,000',
    experience: '4-7 years',
    category: 'Embedded Systems',
    roadmap: []
  },

  // Product / Project Management Jobs
  {
    id: 'product-manager',
    title: 'Product Manager',
    company: 'InnovateTech Products',
    description: 'Define product strategy and roadmap, work with cross-functional teams to deliver products.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'agile')!,
      mockSkills.find(skill => skill.id === 'jira')!
    ],
    salaryRange: '$90,000 - $140,000',
    experience: '4-8 years',
    category: 'Project Management',
    roadmap: []
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    company: 'ProjectSuccess Ltd',
    description: 'Lead software development projects using Agile and Scrum methodologies.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'agile')!,
      mockSkills.find(skill => skill.id === 'scrum')!,
      mockSkills.find(skill => skill.id === 'jira')!
    ],
    salaryRange: '$85,000 - $125,000',
    experience: '4-7 years',
    category: 'Project Management',
    roadmap: []
  },
  {
    id: 'scrum-master',
    title: 'Scrum Master',
    company: 'AgileTeams Corp',
    description: 'Facilitate Scrum processes and help teams deliver high-quality software products.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'scrum')!,
      mockSkills.find(skill => skill.id === 'agile')!,
      mockSkills.find(skill => skill.id === 'jira')!
    ],
    salaryRange: '$80,000 - $115,000',
    experience: '3-5 years',
    category: 'Project Management',
    roadmap: []
  },
  {
    id: 'agile-coach',
    title: 'Agile Coach',
    company: 'Agile Transformation',
    description: 'Guide organizations in adopting Agile methodologies and practices.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'agile')!,
      mockSkills.find(skill => skill.id === 'scrum')!
    ],
    salaryRange: '$100,000 - $145,000',
    experience: '5-8 years',
    category: 'Project Management',
    roadmap: []
  },
  {
    id: 'technical-program-manager',
    title: 'Technical Program Manager',
    company: 'Tech Program Management',
    description: 'Manage complex technical programs and coordinate cross-functional engineering teams.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'agile')!,
      mockSkills.find(skill => skill.id === 'jira')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$110,000 - $160,000',
    experience: '6-10 years',
    category: 'Project Management',
    roadmap: []
  },
  {
    id: 'release-manager',
    title: 'Release Manager',
    company: 'Release Coordination',
    description: 'Coordinate software releases and manage deployment processes across teams.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'git')!,
      mockSkills.find(skill => skill.id === 'agile')!,
      mockSkills.find(skill => skill.id === 'jira')!
    ],
    salaryRange: '$90,000 - $130,000',
    experience: '4-6 years',
    category: 'Project Management',
    roadmap: []
  },
  {
    id: 'product-owner',
    title: 'Product Owner',
    company: 'Product Development Co',
    description: 'Define product requirements and priorities, work closely with development teams.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'agile')!,
      mockSkills.find(skill => skill.id === 'scrum')!,
      mockSkills.find(skill => skill.id === 'jira')!
    ],
    salaryRange: '$85,000 - $125,000',
    experience: '3-6 years',
    category: 'Project Management',
    roadmap: []
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
  ...languageQuizzes,
  ...webTechnologyQuizzes,
  ...databaseQuizzes,
  ...cloudQuizzes,
  ...dataScienceQuizzes,
  ...devopsQuizzes,
  ...cybersecurityQuizzes,
  ...mobileQuizzes
];
