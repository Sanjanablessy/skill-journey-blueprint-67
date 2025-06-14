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
  }
];

// Mock Jobs - Complete list with all 112 requested job titles
export const mockJobs: Job[] = [
  // Web Development (9 jobs)
  {
    id: 'frontend-developer',
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
    roadmap: []
  },
  {
    id: 'backend-developer',
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
    roadmap: []
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    description: 'Develop both client and server sides of web applications, working with various technologies.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'react')!,
      mockSkills.find(skill => skill.id === 'node')!
    ],
    salaryRange: '$90,000 - $130,000',
    experience: '4-6 years',
    category: 'Web Development',
    roadmap: []
  },
  {
    id: 'web-designer',
    title: 'Web Designer',
    company: 'Creative Web Studio',
    description: 'Design visually appealing and user-friendly websites and web applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'figma')!,
      mockSkills.find(skill => skill.id === 'html-css')!,
      mockSkills.find(skill => skill.id === 'adobe-xd')!
    ],
    salaryRange: '$55,000 - $85,000',
    experience: '2-4 years',
    category: 'Web Development',
    roadmap: []
  },
  {
    id: 'wordpress-developer',
    title: 'WordPress Developer',
    company: 'CMS Solutions',
    description: 'Develop and customize WordPress websites and themes for various clients.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'html-css')!,
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'sql')!
    ],
    salaryRange: '$50,000 - $80,000',
    experience: '2-4 years',
    category: 'Web Development',
    roadmap: []
  },
  {
    id: 'ui-developer',
    title: 'UI Developer',
    company: 'Interface Innovations',
    description: 'Create interactive user interfaces and implement frontend designs.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'html-css')!,
      mockSkills.find(skill => skill.id === 'react')!
    ],
    salaryRange: '$65,000 - $95,000',
    experience: '2-4 years',
    category: 'Web Development',
    roadmap: []
  },
  {
    id: 'angular-developer',
    title: 'Angular Developer',
    company: 'Angular Solutions',
    description: 'Build dynamic web applications using Angular framework and TypeScript.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'typescript')!,
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'html-css')!
    ],
    salaryRange: '$75,000 - $110,000',
    experience: '3-5 years',
    category: 'Web Development',
    roadmap: []
  },
  {
    id: 'react-developer',
    title: 'React Developer',
    company: 'React Technologies',
    description: 'Develop modern web applications using React library and ecosystem.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'react')!,
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'typescript')!
    ],
    salaryRange: '$70,000 - $105,000',
    experience: '2-5 years',
    category: 'Web Development',
    roadmap: []
  },
  {
    id: 'vuejs-developer',
    title: 'Vue.js Developer',
    company: 'Vue Technologies',
    description: 'Create interactive web applications using Vue.js framework.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'js')!,
      mockSkills.find(skill => skill.id === 'html-css')!,
      mockSkills.find(skill => skill.id === 'typescript')!
    ],
    salaryRange: '$68,000 - $100,000',
    experience: '2-4 years',
    category: 'Web Development',
    roadmap: []
  },

  // DevOps (7 jobs)
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
    roadmap: []
  },
  {
    id: 'sre-engineer',
    title: 'Site Reliability Engineer (SRE)',
    company: 'Reliability Systems',
    description: 'Ensure system reliability, performance, and scalability of production systems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'linux-admin')!,
      mockSkills.find(skill => skill.id === 'kubernetes')!,
      mockSkills.find(skill => skill.id === 'aws')!
    ],
    salaryRange: '$110,000 - $150,000',
    experience: '4-7 years',
    category: 'DevOps',
    roadmap: []
  },
  {
    id: 'cicd-engineer',
    title: 'CI/CD Engineer',
    company: 'Automation Pro',
    description: 'Design and implement continuous integration and deployment pipelines.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'git')!,
      mockSkills.find(skill => skill.id === 'docker')!,
      mockSkills.find(skill => skill.id === 'aws')!
    ],
    salaryRange: '$95,000 - $130,000',
    experience: '3-5 years',
    category: 'DevOps',
    roadmap: []
  },
  {
    id: 'infrastructure-engineer',
    title: 'Infrastructure Engineer',
    company: 'InfraTech Solutions',
    description: 'Design and manage cloud infrastructure and server environments.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'aws')!,
      mockSkills.find(skill => skill.id === 'linux-admin')!,
      mockSkills.find(skill => skill.id === 'kubernetes')!
    ],
    salaryRange: '$105,000 - $145,000',
    experience: '4-6 years',
    category: 'DevOps',
    roadmap: []
  },
  {
    id: 'platform-engineer',
    title: 'Platform Engineer',
    company: 'Platform Solutions',
    description: 'Build and maintain development platforms and infrastructure tools.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'kubernetes')!,
      mockSkills.find(skill => skill.id === 'docker')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$110,000 - $155,000',
    experience: '4-7 years',
    category: 'DevOps',
    roadmap: []
  },
  {
    id: 'build-release-engineer',
    title: 'Build and Release Engineer',
    company: 'Release Automation',
    description: 'Manage build systems and release processes for software delivery.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'git')!,
      mockSkills.find(skill => skill.id === 'docker')!,
      mockSkills.find(skill => skill.id === 'linux-admin')!
    ],
    salaryRange: '$90,000 - $125,000',
    experience: '3-5 years',
    category: 'DevOps',
    roadmap: []
  },
  {
    id: 'cloud-devops-engineer',
    title: 'Cloud DevOps Engineer',
    company: 'CloudOps Solutions',
    description: 'Implement DevOps practices specifically for cloud environments.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'aws')!,
      mockSkills.find(skill => skill.id === 'azure')!,
      mockSkills.find(skill => skill.id === 'docker')!
    ],
    salaryRange: '$100,000 - $140,000',
    experience: '3-6 years',
    category: 'DevOps',
    roadmap: []
  },

  // Data Science (7 jobs)
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    description: 'Analyze and interpret complex data to help organizations make better decisions.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'scikit-learn')!
    ],
    salaryRange: '$90,000 - $140,000',
    experience: '3-6 years',
    category: 'Data Science',
    roadmap: []
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    company: 'Data Insights Corp',
    description: 'Collect, process, and analyze data to provide business insights.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'excel')!
    ],
    salaryRange: '$65,000 - $95,000',
    experience: '2-4 years',
    category: 'Data Science',
    roadmap: []
  },
  {
    id: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    company: 'ML Solutions',
    description: 'Design and implement machine learning models for production systems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'tensorflow')!,
      mockSkills.find(skill => skill.id === 'pytorch')!
    ],
    salaryRange: '$110,000 - $160,000',
    experience: '3-6 years',
    category: 'Data Science',
    roadmap: []
  },
  {
    id: 'statistician',
    title: 'Statistician',
    company: 'Statistical Analytics',
    description: 'Apply statistical methods to analyze data and solve business problems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'excel')!
    ],
    salaryRange: '$75,000 - $110,000',
    experience: '3-5 years',
    category: 'Data Science',
    roadmap: []
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    company: 'Big Data Solutions',
    description: 'Build and maintain data pipelines and infrastructure for analytics.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'sql')!,
      mockSkills.find(skill => skill.id === 'aws')!
    ],
    salaryRange: '$95,000 - $135,000',
    experience: '3-6 years',
    category: 'Data Science',
    roadmap: []
  },
  {
    id: 'ai-research-scientist',
    title: 'AI Research Scientist',
    company: 'AI Research Labs',
    description: 'Conduct research in artificial intelligence and develop new AI algorithms.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'tensorflow')!,
      mockSkills.find(skill => skill.id === 'pytorch')!
    ],
    salaryRange: '$130,000 - $200,000',
    experience: '5-10 years',
    category: 'Data Science',
    roadmap: []
  },
  {
    id: 'nlp-engineer',
    title: 'NLP Engineer',
    company: 'Language Technologies',
    description: 'Develop natural language processing systems and applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'tensorflow')!,
      mockSkills.find(skill => skill.id === 'pytorch')!
    ],
    salaryRange: '$105,000 - $155,000',
    experience: '3-6 years',
    category: 'Data Science',
    roadmap: []
  },

  // Mobile App Development (7 jobs)
  {
    id: 'android-developer',
    title: 'Android Developer',
    company: 'MobileTech Solutions',
    description: 'Develop native Android applications using Kotlin and Java.',
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
    description: 'Build and maintain iOS applications using Swift and Xcode.',
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
    description: 'Develop cross-platform mobile applications using Flutter framework.',
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
    description: 'Build mobile applications using React Native framework.',
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
  {
    id: 'mobile-app-tester',
    title: 'Mobile App Tester',
    company: 'Mobile QA Solutions',
    description: 'Test mobile applications across different devices and platforms.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'manual-testing')!,
      mockSkills.find(skill => skill.id === 'android')!,
      mockSkills.find(skill => skill.id === 'ios')!
    ],
    salaryRange: '$50,000 - $75,000',
    experience: '1-3 years',
    category: 'Mobile Development',
    roadmap: []
  },
  {
    id: 'xamarin-developer',
    title: 'Xamarin Developer',
    company: 'Xamarin Solutions',
    description: 'Develop cross-platform mobile apps using Microsoft Xamarin framework.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'csharp')!,
      mockSkills.find(skill => skill.id === 'android')!,
      mockSkills.find(skill => skill.id === 'ios')!
    ],
    salaryRange: '$70,000 - $105,000',
    experience: '2-4 years',
    category: 'Mobile Development',
    roadmap: []
  },
  {
    id: 'mobile-ui-ux-designer',
    title: 'Mobile UI/UX Designer',
    company: 'Mobile Design Studio',
    description: 'Design user interfaces and experiences specifically for mobile applications.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'figma')!,
      mockSkills.find(skill => skill.id === 'design-thinking')!,
      mockSkills.find(skill => skill.id === 'adobe-xd')!
    ],
    salaryRange: '$60,000 - $95,000',
    experience: '2-5 years',
    category: 'Mobile Development',
    roadmap: []
  },

  // Cybersecurity (7 jobs)
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    company: 'SecureNet Corp',
    description: 'Monitor and analyze security threats, implement security measures.',
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
    id: 'ethical-hacker',
    title: 'Ethical Hacker / Penetration Tester',
    company: 'CyberDefense Solutions',
    description: 'Conduct authorized security testing to identify vulnerabilities.',
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
    id: 'information-security-analyst',
    title: 'Information Security Analyst',
    company: 'InfoSec Pro',
    description: 'Analyze and protect organizational information systems and data.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'network-security')!,
      mockSkills.find(skill => skill.id === 'ethical-hacking')!
    ],
    salaryRange: '$80,000 - $120,000',
    experience: '3-5 years',
    category: 'Cybersecurity',
    roadmap: []
  },
  {
    id: 'network-security-engineer',
    title: 'Network Security Engineer',
    company: 'Network Security Corp',
    description: 'Design and implement network security solutions and protocols.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'network-security')!,
      mockSkills.find(skill => skill.id === 'linux-admin')!
    ],
    salaryRange: '$95,000 - $140,000',
    experience: '4-7 years',
    category: 'Cybersecurity',
    roadmap: []
  },
  {
    id: 'soc-analyst',
    title: 'Security Operations Center (SOC) Analyst',
    company: 'SOC Security',
    description: 'Monitor security events and respond to cybersecurity incidents.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'network-security')!,
      mockSkills.find(skill => skill.id === 'troubleshooting')!
    ],
    salaryRange: '$65,000 - $95,000',
    experience: '2-4 years',
    category: 'Cybersecurity',
    roadmap: []
  },
  {
    id: 'application-security-engineer',
    title: 'Application Security Engineer',
    company: 'AppSec Solutions',
    description: 'Secure applications and conduct security code reviews.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'ethical-hacking')!,
      mockSkills.find(skill => skill.id === 'network-security')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$90,000 - $130,000',
    experience: '3-6 years',
    category: 'Cybersecurity',
    roadmap: []
  },
  {
    id: 'security-consultant',
    title: 'Security Consultant',
    company: 'Security Consulting Group',
    description: 'Provide cybersecurity consulting and advisory services to clients.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'network-security')!,
      mockSkills.find(skill => skill.id === 'ethical-hacking')!,
      mockSkills.find(skill => skill.id === 'penetration-testing')!
    ],
    salaryRange: '$100,000 - $150,000',
    experience: '5-8 years',
    category: 'Cybersecurity',
    roadmap: []
  },

  // Cloud Computing (8 jobs)
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    company: 'CloudTech Solutions',
    description: 'Design and implement cloud infrastructure and services.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'aws')!,
      mockSkills.find(skill => skill.id === 'azure')!,
      mockSkills.find(skill => skill.id === 'docker')!
    ],
    salaryRange: '$90,000 - $130,000',
    experience: '3-5 years',
    category: 'Cloud Computing',
    roadmap: []
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    company: 'CloudFirst Systems',
    description: 'Design enterprise cloud architecture solutions.',
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
    id: 'cloud-developer',
    title: 'Cloud Developer',
    company: 'Cloud Development Co',
    description: 'Develop cloud-native applications and microservices.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'aws')!,
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'docker')!
    ],
    salaryRange: '$85,000 - $125,000',
    experience: '3-5 years',
    category: 'Cloud Computing',
    roadmap: []
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Solutions Architect',
    company: 'AWS Consulting',
    description: 'Design and implement AWS cloud solutions for enterprise clients.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'aws')!,
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'linux-admin')!
    ],
    salaryRange: '$115,000 - $165,000',
    experience: '4-7 years',
    category: 'Cloud Computing',
    roadmap: []
  },
  {
    id: 'azure-cloud-engineer',
    title: 'Azure Cloud Engineer',
    company: 'Azure Solutions',
    description: 'Implement and manage Microsoft Azure cloud infrastructure.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'azure')!,
      mockSkills.find(skill => skill.id === 'docker')!,
      mockSkills.find(skill => skill.id === 'kubernetes')!
    ],
    salaryRange: '$95,000 - $140,000',
    experience: '3-6 years',
    category: 'Cloud Computing',
    roadmap: []
  },
  {
    id: 'gcp-cloud-engineer',
    title: 'GCP Cloud Engineer',
    company: 'Google Cloud Partners',
    description: 'Design and deploy solutions on Google Cloud Platform.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'gcp')!,
      mockSkills.find(skill => skill.id === 'kubernetes')!,
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$100,000 - $145,000',
    experience: '3-6 years',
    category: 'Cloud Computing',
    roadmap: []
  },
  {
    id: 'cloud-security-engineer',
    title: 'Cloud Security Engineer',
    company: 'SecureCloud Solutions',
    description: 'Implement security measures and compliance in cloud environments.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'aws')!,
      mockSkills.find(skill => skill.id === 'network-security')!,
      mockSkills.find(skill => skill.id === 'azure')!
    ],
    salaryRange: '$105,000 - $150,000',
    experience: '4-7 years',
    category: 'Cloud Computing',
    roadmap: []
  },
  {
    id: 'kubernetes-administrator',
    title: 'Kubernetes Administrator',
    company: 'Container Solutions',
    description: 'Manage and optimize Kubernetes clusters and container orchestration.',
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

  // Artificial Intelligence / Machine Learning (7 jobs)
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    company: 'AI Innovations',
    description: 'Design and implement artificial intelligence solutions.',
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
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    company: 'ML Technologies',
    description: 'Build and deploy machine learning models in production.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'scikit-learn')!,
      mockSkills.find(skill => skill.id === 'tensorflow')!
    ],
    salaryRange: '$105,000 - $155,000',
    experience: '3-6 years',
    category: 'Artificial Intelligence',
    roadmap: []
  },
  {
    id: 'deep-learning-specialist',
    title: 'Deep Learning Specialist',
    company: 'DeepMind Technologies',
    description: 'Develop deep learning models and neural networks.',
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
    id: 'ai-nlp-engineer',
    title: 'NLP Engineer',
    company: 'Natural Language AI',
    description: 'Develop natural language processing and understanding systems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'tensorflow')!,
      mockSkills.find(skill => skill.id === 'pytorch')!
    ],
    salaryRange: '$105,000 - $155,000',
    experience: '3-6 years',
    category: 'Artificial Intelligence',
    roadmap: []
  },
  {
    id: 'computer-vision-engineer',
    title: 'Computer Vision Engineer',
    company: 'Vision AI',
    description: 'Develop computer vision systems for image and video analysis.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'tensorflow')!,
      mockSkills.find(skill => skill.id === 'pytorch')!
    ],
    salaryRange: '$115,000 - $165,000',
    experience: '3-6 years',
    category: 'Artificial Intelligence',
    roadmap: []
  },
  {
    id: 'ai-researcher',
    title: 'AI Researcher',
    company: 'AI Research Institute',
    description: 'Conduct advanced research in artificial intelligence and machine learning.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'tensorflow')!,
      mockSkills.find(skill => skill.id === 'pytorch')!
    ],
    salaryRange: '$130,000 - $200,000',
    experience: '5-10 years',
    category: 'Artificial Intelligence',
    roadmap: []
  },
  {
    id: 'data-annotation-specialist',
    title: 'Data Annotation Specialist',
    company: 'ML Data Services',
    description: 'Prepare and annotate data for machine learning model training.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'python')!,
      mockSkills.find(skill => skill.id === 'excel')!
    ],
    salaryRange: '$45,000 - $70,000',
    experience: '1-3 years',
    category: 'Artificial Intelligence',
    roadmap: []
  },

  // Database Administration (6 jobs)
  {
    id: 'database-administrator',
    title: 'Database Administrator (DBA)',
    company: 'DataManagement Solutions',
    description: 'Manage and maintain database systems, ensure data integrity.',
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
    description: 'Design and implement NoSQL database solutions.',
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
    description: 'Design and implement big data processing systems.',
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

  // UI/UX Design (7 jobs)
  {
    id: 'ui-designer',
    title: 'UI Designer',
    company: 'Visual Creatives',
    description: 'Design beautiful and intuitive user interfaces for web and mobile.',
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
    description: 'Create user-centered designs and conduct user research.',
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
    description: 'Lead product design from concept to implementation.',
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

  // Software Testing / QA (7 jobs)
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    company: 'QualityFirst Software',
    description: 'Perform manual and automated testing to ensure software quality.',
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
    description: 'Develop and maintain automated test suites using testing frameworks.',
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
    description: 'Conduct performance testing to ensure applications handle expected loads.',
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
      mockSkills.find(skill => skill.id === 'python')!
    ],
    salaryRange: '$65,000 - $95,000',
    experience: '2-4 years',
    category: 'Software Testing',
    roadmap: []
  },
  {
    id: 'mobile-qa-tester',
    title: 'Mobile QA Tester',
    company: 'Mobile Testing Solutions',
    description: 'Test mobile applications across different devices and platforms.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'manual-testing')!,
      mockSkills.find(skill => skill.id === 'android')!,
      mockSkills.find(skill => skill.id === 'ios')!
    ],
    salaryRange: '$55,000 - $80,000',
    experience: '2-4 years',
    category: 'Software Testing',
    roadmap: []
  },

  // System Administration / IT Support (7 jobs)
  {
    id: 'system-administrator',
    title: 'System Administrator',
    company: 'Enterprise IT Services',
    description: 'Manage and maintain server infrastructure and system security.',
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
    description: 'Manage Windows-based server infrastructure and Active Directory.',
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
    description: 'Provide technical support and troubleshoot hardware/software issues.',
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
    description: 'Provide first-level technical support and troubleshooting for users.',
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
    description: 'Configure and maintain network infrastructure and monitor performance.',
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
    description: 'Provide advanced technical support for complex systems.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'troubleshooting')!,
      mockSkills.find(skill => skill.id === 'linux-admin')!
    ],
    salaryRange: '$60,000 - $90,000',
    experience: '3-5 years',
    category: 'IT Support',
    roadmap: []
  },

  // Blockchain Development (7 jobs)
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    company: 'CryptoTech Solutions',
    description: 'Develop decentralized applications and smart contracts.',
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
    description: 'Design and implement smart contracts for DeFi protocols.',
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
    description: 'Design blockchain architecture and distributed systems.',
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
    description: 'Develop secure cryptocurrency wallet applications.',
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
    description: 'Build decentralized web applications using Web3 technologies.',
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

  // Game Development (7 jobs)
  {
    id: 'game-developer',
    title: 'Game Developer',
    company: 'GameStudio Pro',
    description: 'Develop video games using Unity and C#.',
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
    description: 'Create games and interactive applications using Unity engine.',
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
    description: 'Create high-quality games using Unreal Engine.',
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
    description: 'Design game mechanics, levels, and player experiences.',
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
    description: 'Create visual assets and artwork for video games.',
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
    description: 'Program game mechanics and player interactions.',
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
    description: 'Design and create game levels and environments.',
    requiredSkills: [
      mockSkills.find(skill => skill.id === 'unity')!,
      mockSkills.find(skill => skill.id === 'design-thinking')!
    ],
    salaryRange: '$60,000 - $90,000',
    experience: '2-4 years',
    category: 'Game Development',
    roadmap: []
  },

  // Business Intelligence / Data Analytics (7 jobs)
  {
    id: 'bi-developer',
    title: 'BI Developer',
    company: 'DataInsights Corp',
    description: 'Develop business intelligence solutions and data warehouses.',
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
    description: 'Create reports and dashboards using BI tools.',
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
    description: 'Develop interactive data visualizations using Tableau.',
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
    description: 'Create business intelligence solutions using Power BI.',
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
    description: 'Analyze business processes and requirements.',
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

  // Robotics / Embedded Systems (7 jobs)
  {
    id: 'embedded-systems-engineer',
    title: 'Embedded Systems Engineer',
    company: 'Hardware Solutions',
    description: 'Design and develop embedded systems for hardware applications.',
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
    description: 'Develop Internet of Things applications and embedded systems.',
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
    description: 'Design automation systems for manufacturing and industrial processes.',
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
    description: 'Design control systems for industrial and automation applications.',
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

  // Product / Project Management (7 jobs)
  {
    id: 'product-manager',
    title: 'Product Manager',
    company: 'InnovateTech Products',
    description: 'Define product strategy and work with cross-functional teams.',
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
    description: 'Lead software development projects using Agile methodologies.',
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
    description: 'Facilitate Scrum processes and help teams deliver products.',
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
    description: 'Guide organizations in adopting Agile methodologies.',
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
    description: 'Manage complex technical programs and coordinate teams.',
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
    description: 'Coordinate software releases and manage deployment processes.',
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
    description: 'Define product requirements and work with development teams.',
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

export const skills: Skill[] = [
  // Frontend Development
  { id: "1", name: "HTML", category: "Frontend Development", description: "Markup language for creating web pages and web applications" },
  { id: "2", name: "CSS", category: "Frontend Development", description: "Style sheet language for describing the presentation of web pages" },
  { id: "3", name: "JavaScript", category: "Frontend Development", description: "Programming language for web development and interactive web pages" },
  { id: "4", name: "TypeScript", category: "Frontend Development", description: "Typed superset of JavaScript that compiles to plain JavaScript" },
  { id: "5", name: "React.js", category: "Frontend Development", description: "JavaScript library for building user interfaces" },
  { id: "6", name: "Angular", category: "Frontend Development", description: "Platform for building mobile and desktop web applications" },
  { id: "7", name: "Vue.js", category: "Frontend Development", description: "Progressive JavaScript framework for building user interfaces" },
  { id: "8", name: "Next.js", category: "Frontend Development", description: "React framework for production with server-side rendering" },

  // Backend Development
  { id: "9", name: "Node.js", category: "Backend Development", description: "JavaScript runtime for building server-side applications" },
  { id: "10", name: "Express.js", category: "Backend Development", description: "Web application framework for Node.js" },
  { id: "11", name: "PHP", category: "Backend Development", description: "Server-side scripting language for web development" },
  { id: "12", name: "Laravel", category: "Backend Development", description: "PHP web application framework with elegant syntax" },
  { id: "13", name: "Python", category: "Backend Development", description: "High-level programming language for various applications" },
  { id: "14", name: "Django", category: "Backend Development", description: "High-level Python web framework for rapid development" },
  { id: "15", name: "Flask", category: "Backend Development", description: "Lightweight Python web framework" },
  { id: "16", name: "Java", category: "Backend Development", description: "Object-oriented programming language for enterprise applications" },
  { id: "17", name: "Spring Boot", category: "Backend Development", description: "Java framework for creating production-ready applications" },

  // Mobile Development
  { id: "18", name: "Kotlin", category: "Mobile Development", description: "Modern programming language for Android development" },
  { id: "19", name: "Swift", category: "Mobile Development", description: "Programming language for iOS and macOS development" },
  { id: "20", name: "Flutter", category: "Mobile Development", description: "UI toolkit for building cross-platform applications" },
  { id: "21", name: "Dart", category: "Mobile Development", description: "Programming language optimized for Flutter development" },
  { id: "22", name: "React Native", category: "Mobile Development", description: "Framework for building native mobile apps using React" },

  // Database
  { id: "23", name: "SQL", category: "Database", description: "Standard language for managing and querying databases" },
  { id: "24", name: "MySQL", category: "Database", description: "Open-source relational database management system" },
  { id: "25", name: "PostgreSQL", category: "Database", description: "Advanced open-source relational database" },
  { id: "26", name: "MongoDB", category: "Database", description: "NoSQL document database for modern applications" },
  { id: "27", name: "Oracle DB", category: "Database", description: "Enterprise relational database management system" },
  { id: "28", name: "Redis", category: "Database", description: "In-memory data structure store and cache" },
  { id: "29", name: "GraphQL", category: "Database", description: "Query language and runtime for APIs" },
  { id: "30", name: "REST API", category: "Database", description: "Architectural style for designing web services" },

  // DevOps
  { id: "31", name: "Git", category: "DevOps", description: "Distributed version control system" },
  { id: "32", name: "GitHub", category: "DevOps", description: "Web-based Git repository hosting service" },
  { id: "33", name: "Bitbucket", category: "DevOps", description: "Git repository management and collaboration platform" },
  { id: "34", name: "Docker", category: "DevOps", description: "Platform for developing and running containerized applications" },
  { id: "35", name: "Kubernetes", category: "DevOps", description: "Container orchestration platform for automating deployment" },
  { id: "36", name: "Jenkins", category: "DevOps", description: "Automation server for continuous integration and deployment" },
  { id: "37", name: "Travis CI", category: "DevOps", description: "Continuous integration service for testing and deployment" },
  { id: "38", name: "CircleCI", category: "DevOps", description: "Continuous integration and delivery platform" },
  { id: "39", name: "Terraform", category: "DevOps", description: "Infrastructure as code tool for building and managing infrastructure" },
  { id: "40", name: "Ansible", category: "DevOps", description: "Automation tool for configuration management and deployment" },

  // Cloud Computing
  { id: "41", name: "AWS", category: "Cloud Computing", description: "Amazon Web Services cloud computing platform" },
  { id: "42", name: "Azure", category: "Cloud Computing", description: "Microsoft cloud computing services platform" },
  { id: "43", name: "Google Cloud Platform (GCP)", category: "Cloud Computing", description: "Google's suite of cloud computing services" },
  { id: "44", name: "Firebase", category: "Cloud Computing", description: "Google's mobile and web application development platform" },

  // System Administration
  { id: "45", name: "Linux", category: "System Administration", description: "Open-source operating system for servers and development" },
  { id: "46", name: "Bash / Shell Scripting", category: "System Administration", description: "Command-line scripting for Unix-like systems" },
  { id: "47", name: "PowerShell", category: "System Administration", description: "Microsoft's command-line shell and scripting language" },

  // Programming Languages
  { id: "48", name: "C++", category: "Programming Languages", description: "General-purpose programming language for system programming" },
  { id: "49", name: "C#", category: "Programming Languages", description: "Object-oriented programming language by Microsoft" },
  { id: "50", name: ".NET / ASP.NET", category: "Programming Languages", description: "Microsoft's web application framework" },

  // Game Development
  { id: "51", name: "Unity", category: "Game Development", description: "Cross-platform game engine for creating games" },
  { id: "52", name: "Unreal Engine", category: "Game Development", description: "Game engine for creating high-quality games" },

  // Design
  { id: "53", name: "Figma", category: "Design", description: "Web-based design and prototyping tool" },
  { id: "54", name: "Adobe XD", category: "Design", description: "Vector-based user experience design tool" },
  { id: "55", name: "Sketch", category: "Design", description: "Digital design toolkit for creating user interfaces" },
  { id: "56", name: "Photoshop", category: "Design", description: "Image editing and graphic design software" },
  { id: "57", name: "Illustrator", category: "Design", description: "Vector graphics editor for creating illustrations" },
  { id: "58", name: "UI Design Principles", category: "Design", description: "Fundamental principles for creating effective user interfaces" },
  { id: "59", name: "UX Research", category: "Design", description: "Methods for understanding user needs and behaviors" },
  { id: "60", name: "Wireframing", category: "Design", description: "Creating low-fidelity layouts for digital products" },
  { id: "61", name: "Prototyping", category: "Design", description: "Building interactive models of digital products" },

  // Project Management
  { id: "62", name: "Agile Methodology", category: "Project Management", description: "Iterative approach to project management and software development" },
  { id: "63", name: "Scrum", category: "Project Management", description: "Framework for managing work with emphasis on software development" },
  { id: "64", name: "JIRA", category: "Project Management", description: "Issue tracking and project management tool" },
  { id: "65", name: "Confluence", category: "Project Management", description: "Collaboration and documentation platform" },
  { id: "66", name: "Project Management", category: "Project Management", description: "Planning, executing, and managing projects effectively" },
  { id: "67", name: "Product Management", category: "Project Management", description: "Overseeing product development from conception to launch" },

  // Testing
  { id: "68", name: "Test Automation", category: "Testing", description: "Automating the execution of software tests" },
  { id: "69", name: "Selenium", category: "Testing", description: "Web browser automation framework for testing" },
  { id: "70", name: "Cypress", category: "Testing", description: "End-to-end testing framework for web applications" },
  { id: "71", name: "JUnit", category: "Testing", description: "Unit testing framework for Java applications" },
  { id: "72", name: "Mocha / Chai", category: "Testing", description: "JavaScript testing frameworks for unit and integration tests" },
  { id: "73", name: "Load Testing (JMeter)", category: "Testing", description: "Performance testing tool for web applications" },
  { id: "74", name: "Manual Testing", category: "Testing", description: "Human-executed testing to find defects in software" },
  { id: "75", name: "API Testing (Postman)", category: "Testing", description: "Testing application programming interfaces" },

  // Cybersecurity
  { id: "76", name: "Cybersecurity Fundamentals", category: "Cybersecurity", description: "Basic principles and practices of information security" },
  { id: "77", name: "Ethical Hacking", category: "Cybersecurity", description: "Authorized testing of systems for security vulnerabilities" },
  { id: "78", name: "Penetration Testing", category: "Cybersecurity", description: "Simulated cyber attacks to test system security" },
  { id: "79", name: "Firewalls", category: "Cybersecurity", description: "Network security systems that monitor and control traffic" },
  { id: "80", name: "Network Security", category: "Cybersecurity", description: "Protecting computer networks from threats and attacks" },
  { id: "81", name: "SIEM Tools (Splunk, QRadar)", category: "Cybersecurity", description: "Security information and event management tools" },
  { id: "82", name: "Encryption", category: "Cybersecurity", description: "Converting information into code to prevent unauthorized access" },

  // Blockchain
  { id: "83", name: "Blockchain Basics", category: "Blockchain", description: "Fundamental concepts of distributed ledger technology" },
  { id: "84", name: "Solidity", category: "Blockchain", description: "Programming language for Ethereum smart contracts" },
  { id: "85", name: "Smart Contracts", category: "Blockchain", description: "Self-executing contracts with terms directly written into code" },
  { id: "86", name: "Web3.js", category: "Blockchain", description: "JavaScript library for interacting with Ethereum blockchain" },
  { id: "87", name: "Metamask Integration", category: "Blockchain", description: "Integrating cryptocurrency wallet functionality" },

  // AI/ML
  { id: "88", name: "Machine Learning", category: "AI/ML", description: "Algorithms that learn and make predictions from data" },
  { id: "89", name: "Deep Learning", category: "AI/ML", description: "Neural networks with multiple layers for complex pattern recognition" },
  { id: "90", name: "Computer Vision", category: "AI/ML", description: "Teaching computers to interpret and understand visual information" },
  { id: "91", name: "Natural Language Processing (NLP)", category: "AI/ML", description: "Processing and analyzing human language data" },
  { id: "92", name: "TensorFlow", category: "AI/ML", description: "Open-source machine learning framework by Google" },
  { id: "93", name: "PyTorch", category: "AI/ML", description: "Machine learning library based on Torch" },
  { id: "94", name: "Scikit-learn", category: "AI/ML", description: "Machine learning library for Python" },
  { id: "95", name: "OpenCV", category: "AI/ML", description: "Computer vision and machine learning software library" },
  { id: "96", name: "Pandas", category: "AI/ML", description: "Data manipulation and analysis library for Python" },
  { id: "97", name: "NumPy", category: "AI/ML", description: "Numerical computing library for Python" },
  { id: "98", name: "Matplotlib", category: "AI/ML", description: "Plotting library for creating visualizations in Python" },

  // Data Analytics
  { id: "99", name: "Power BI", category: "Data Analytics", description: "Business analytics tool for creating reports and dashboards" },
  { id: "100", name: "Tableau", category: "Data Analytics", description: "Data visualization software for business intelligence" },
  { id: "101", name: "Excel (Advanced)", category: "Data Analytics", description: "Advanced spreadsheet skills for data analysis" },
  { id: "102", name: "Data Cleaning", category: "Data Analytics", description: "Process of preparing raw data for analysis" },
  { id: "103", name: "Data Visualization", category: "Data Analytics", description: "Presenting data in graphical formats for insights" },
  { id: "104", name: "ETL Tools", category: "Data Analytics", description: "Extract, Transform, Load processes for data warehousing" },
  { id: "105", name: "Big Data (Hadoop, Spark)", category: "Data Analytics", description: "Technologies for processing large datasets" },
  { id: "106", name: "Data Warehousing", category: "Data Analytics", description: "Storing and managing large volumes of data" },

  // Embedded Systems
  { id: "107", name: "Embedded C", category: "Embedded Systems", description: "Programming microcontrollers and embedded devices" },
  { id: "108", name: "IoT (Arduino, Raspberry Pi)", category: "Embedded Systems", description: "Internet of Things development with microcontrollers" },
  { id: "109", name: "Robotics Frameworks (ROS)", category: "Embedded Systems", description: "Robot Operating System for robotics development" },
  { id: "110", name: "Firmware Development", category: "Embedded Systems", description: "Low-level software that controls hardware devices" },
  { id: "111", name: "Control Systems", category: "Embedded Systems", description: "Systems that manage and regulate other systems" },
  { id: "112", name: "Debugging Tools", category: "Embedded Systems", description: "Tools for finding and fixing software bugs" },

  // Soft Skills
  { id: "113", name: "Communication Skills", category: "Soft Skills", description: "Effective verbal and written communication abilities" },
  { id: "114", name: "Problem-Solving", category: "Soft Skills", description: "Analytical thinking to identify and resolve issues" },
  { id: "115", name: "Critical Thinking", category: "Soft Skills", description: "Objective analysis and evaluation of information" },
  { id: "116", name: "Time Management", category: "Soft Skills", description: "Efficiently organizing and planning time usage" },
  { id: "117", name: "Collaboration / Teamwork", category: "Soft Skills", description: "Working effectively with others towards common goals" }
];
