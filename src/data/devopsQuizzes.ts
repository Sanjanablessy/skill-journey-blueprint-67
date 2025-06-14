
import { Quiz } from '@/types';

export const devopsQuizzes: Quiz[] = [
  {
    id: 'devops-beginner',
    title: 'DevOps - Beginner',
    description: 'Test your knowledge of basic DevOps concepts',
    skillCategory: 'DevOps',
    difficulty: 'beginner',
    questions: [
      {
        id: 'devops-basic-1',
        question: 'What is DevOps?',
        options: [
          'A programming language',
          'A set of practices combining development and operations',
          'A type of software',
          'A database system'
        ],
        correctAnswer: 1,
        explanation: 'DevOps is a set of practices that combines software development and IT operations to shorten development cycles.'
      },
      {
        id: 'devops-basic-2',
        question: 'What is CI/CD?',
        options: [
          'Continuous Integration/Continuous Deployment',
          'Code Integration/Code Deployment',
          'Computer Integration/Computer Deployment',
          'Client Integration/Client Deployment'
        ],
        correctAnswer: 0,
        explanation: 'CI/CD stands for Continuous Integration and Continuous Deployment, key practices in DevOps.'
      },
      {
        id: 'devops-basic-3',
        question: 'What is containerization?',
        options: [
          'Storing data in containers',
          'Packaging applications with their dependencies',
          'Creating physical containers',
          'Organizing files in folders'
        ],
        correctAnswer: 1,
        explanation: 'Containerization packages applications and their dependencies into lightweight, portable containers.'
      },
      {
        id: 'devops-basic-4',
        question: 'What is Docker?',
        options: [
          'A programming language',
          'A containerization platform',
          'A database system',
          'A web server'
        ],
        correctAnswer: 1,
        explanation: 'Docker is a platform that uses containerization to package and deploy applications consistently.'
      },
      {
        id: 'devops-basic-5',
        question: 'What is Infrastructure as Code (IaC)?',
        options: [
          'Writing code for infrastructure',
          'Managing infrastructure through code',
          'Building physical infrastructure',
          'Coding on infrastructure'
        ],
        correctAnswer: 1,
        explanation: 'IaC is the practice of managing and provisioning infrastructure through machine-readable definition files.'
      }
    ]
  },
  {
    id: 'kubernetes-beginner',
    title: 'Kubernetes - Beginner',
    description: 'Test your knowledge of basic Kubernetes concepts',
    skillCategory: 'Kubernetes',
    difficulty: 'beginner',
    questions: [
      {
        id: 'k8s-basic-1',
        question: 'What is Kubernetes?',
        options: [
          'A programming language',
          'A container orchestration platform',
          'A database system',
          'A web framework'
        ],
        correctAnswer: 1,
        explanation: 'Kubernetes is an open-source container orchestration platform for automating deployment and management of containerized applications.'
      },
      {
        id: 'k8s-basic-2',
        question: 'What is a Pod in Kubernetes?',
        options: [
          'A group of containers',
          'The smallest deployable unit',
          'A storage volume',
          'A network interface'
        ],
        correctAnswer: 1,
        explanation: 'A Pod is the smallest deployable unit in Kubernetes, containing one or more containers.'
      },
      {
        id: 'k8s-basic-3',
        question: 'What is a Kubernetes cluster?',
        options: [
          'A single server',
          'A group of nodes managed by Kubernetes',
          'A container image',
          'A configuration file'
        ],
        correctAnswer: 1,
        explanation: 'A Kubernetes cluster is a group of nodes (machines) that run containerized applications managed by Kubernetes.'
      },
      {
        id: 'k8s-basic-4',
        question: 'What is kubectl?',
        options: [
          'A container runtime',
          'Command-line tool for Kubernetes',
          'A web interface',
          'A monitoring tool'
        ],
        correctAnswer: 1,
        explanation: 'kubectl is the command-line tool for communicating with and managing Kubernetes clusters.'
      },
      {
        id: 'k8s-basic-5',
        question: 'What is a Kubernetes Service?',
        options: [
          'A running application',
          'An abstraction for accessing Pods',
          'A configuration file',
          'A storage system'
        ],
        correctAnswer: 1,
        explanation: 'A Service in Kubernetes is an abstraction that provides a stable way to access a group of Pods.'
      }
    ]
  }
];
