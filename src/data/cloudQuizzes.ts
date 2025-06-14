
import { Quiz } from '@/types';

export const cloudQuizzes: Quiz[] = [
  {
    id: 'aws-beginner',
    title: 'AWS - Beginner',
    description: 'Test your knowledge of basic AWS concepts',
    skillCategory: 'AWS',
    difficulty: 'beginner',
    questions: [
      {
        id: 'aws-basic-1',
        question: 'What does AWS stand for?',
        options: [
          'Amazon Web Services',
          'Advanced Web Solutions',
          'Automated Web Systems',
          'Amazon Web Solutions'
        ],
        correctAnswer: 0,
        explanation: 'AWS stands for Amazon Web Services, Amazon\'s cloud computing platform.'
      },
      {
        id: 'aws-basic-2',
        question: 'What is EC2 in AWS?',
        options: [
          'A database service',
          'A virtual server service',
          'A storage service',
          'A networking service'
        ],
        correctAnswer: 1,
        explanation: 'EC2 (Elastic Compute Cloud) provides scalable virtual servers in the cloud.'
      },
      {
        id: 'aws-basic-3',
        question: 'What is S3 used for?',
        options: [
          'Computing power',
          'Object storage',
          'Database management',
          'Load balancing'
        ],
        correctAnswer: 1,
        explanation: 'S3 (Simple Storage Service) is used for storing and retrieving any amount of data from anywhere.'
      },
      {
        id: 'aws-basic-4',
        question: 'What is the AWS Free Tier?',
        options: [
          'A paid premium service',
          'Free usage limits for new users',
          'A training program',
          'A certification program'
        ],
        correctAnswer: 1,
        explanation: 'AWS Free Tier provides free usage limits for new AWS customers to explore and try services.'
      },
      {
        id: 'aws-basic-5',
        question: 'What is an AWS Region?',
        options: [
          'A data center',
          'A geographical location with multiple data centers',
          'A service category',
          'A billing unit'
        ],
        correctAnswer: 1,
        explanation: 'An AWS Region is a geographical location that contains multiple isolated data centers called Availability Zones.'
      }
    ]
  },
  {
    id: 'azure-beginner',
    title: 'Azure - Beginner',
    description: 'Test your knowledge of basic Microsoft Azure concepts',
    skillCategory: 'Azure',
    difficulty: 'beginner',
    questions: [
      {
        id: 'azure-basic-1',
        question: 'What is Microsoft Azure?',
        options: [
          'A programming language',
          'A cloud computing platform',
          'A database system',
          'An operating system'
        ],
        correctAnswer: 1,
        explanation: 'Microsoft Azure is a cloud computing platform and service created by Microsoft.'
      },
      {
        id: 'azure-basic-2',
        question: 'What is Azure App Service used for?',
        options: [
          'Storage',
          'Web app hosting',
          'Database management',
          'Networking'
        ],
        correctAnswer: 1,
        explanation: 'Azure App Service is a platform-as-a-service (PaaS) for hosting web applications.'
      },
      {
        id: 'azure-basic-3',
        question: 'What is Azure Active Directory?',
        options: [
          'A file system',
          'An identity and access management service',
          'A database service',
          'A monitoring tool'
        ],
        correctAnswer: 1,
        explanation: 'Azure Active Directory (Azure AD) is Microsoft\'s cloud-based identity and access management service.'
      },
      {
        id: 'azure-basic-4',
        question: 'What is Azure Resource Manager?',
        options: [
          'A billing service',
          'A deployment and management service',
          'A monitoring service',
          'A backup service'
        ],
        correctAnswer: 1,
        explanation: 'Azure Resource Manager is the deployment and management service for Azure resources.'
      },
      {
        id: 'azure-basic-5',
        question: 'What is Azure Blob Storage?',
        options: [
          'A compute service',
          'An object storage service',
          'A database service',
          'A networking service'
        ],
        correctAnswer: 1,
        explanation: 'Azure Blob Storage is Microsoft\'s object storage solution for storing large amounts of unstructured data.'
      }
    ]
  }
];
