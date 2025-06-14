
import { Quiz } from '@/types';

export const aiMlQuizzes: Quiz[] = [
  {
    id: 'machine-learning-beginner',
    title: 'Machine Learning - Beginner',
    description: 'Test your knowledge of basic machine learning concepts',
    skillCategory: 'Machine Learning',
    difficulty: 'beginner',
    questions: [
      {
        id: 'ml-basic-1',
        question: 'What is machine learning?',
        options: [
          'Programming machines manually',
          'Algorithms that learn from data',
          'Building physical machines',
          'Creating user interfaces'
        ],
        correctAnswer: 1,
        explanation: 'Machine learning involves algorithms that can learn and make predictions or decisions from data without being explicitly programmed.'
      },
      {
        id: 'ml-basic-2',
        question: 'What are the main types of machine learning?',
        options: [
          'Supervised and Unsupervised',
          'Supervised, Unsupervised, and Reinforcement',
          'Linear and Non-linear',
          'Simple and Complex'
        ],
        correctAnswer: 1,
        explanation: 'The main types are Supervised Learning, Unsupervised Learning, and Reinforcement Learning.'
      },
      {
        id: 'ml-basic-3',
        question: 'What is supervised learning?',
        options: [
          'Learning without data',
          'Learning with labeled training data',
          'Learning by trial and error',
          'Learning without algorithms'
        ],
        correctAnswer: 1,
        explanation: 'Supervised learning uses labeled training data to learn patterns and make predictions on new data.'
      },
      {
        id: 'ml-basic-4',
        question: 'What is a neural network?',
        options: [
          'A computer network',
          'A network of interconnected nodes inspired by the brain',
          'A social network',
          'A database network'
        ],
        correctAnswer: 1,
        explanation: 'A neural network is a computing system with interconnected nodes (neurons) that can learn complex patterns.'
      },
      {
        id: 'ml-basic-5',
        question: 'What is training data?',
        options: [
          'Data used to test algorithms',
          'Data used to teach algorithms',
          'Data used for storage',
          'Data used for visualization'
        ],
        correctAnswer: 1,
        explanation: 'Training data is the dataset used to teach machine learning algorithms to make predictions or decisions.'
      }
    ]
  },
  {
    id: 'artificial-intelligence-beginner',
    title: 'Artificial Intelligence - Beginner',
    description: 'Test your knowledge of basic AI concepts',
    skillCategory: 'Artificial Intelligence',
    difficulty: 'beginner',
    questions: [
      {
        id: 'ai-basic-1',
        question: 'What is Artificial Intelligence?',
        options: [
          'Human intelligence',
          'Machine intelligence that mimics human cognitive functions',
          'Computer hardware',
          'Internet connectivity'
        ],
        correctAnswer: 1,
        explanation: 'AI is the simulation of human intelligence in machines that are programmed to think and learn like humans.'
      },
      {
        id: 'ai-basic-2',
        question: 'What is Natural Language Processing (NLP)?',
        options: [
          'Processing natural resources',
          'Enabling computers to understand human language',
          'Learning natural sciences',
          'Processing natural images'
        ],
        correctAnswer: 1,
        explanation: 'NLP is a branch of AI that helps computers understand, interpret, and generate human language.'
      },
      {
        id: 'ai-basic-3',
        question: 'What is computer vision?',
        options: [
          'Computer screens',
          'Enabling computers to interpret visual information',
          'Computer graphics',
          'Monitor resolution'
        ],
        correctAnswer: 1,
        explanation: 'Computer vision enables computers to identify and process visual information like images and videos.'
      },
      {
        id: 'ai-basic-4',
        question: 'What is an algorithm?',
        options: [
          'A computer program',
          'A step-by-step procedure for solving problems',
          'A programming language',
          'A database'
        ],
        correctAnswer: 1,
        explanation: 'An algorithm is a set of rules or instructions designed to solve a specific problem or perform a task.'
      },
      {
        id: 'ai-basic-5',
        question: 'What is deep learning?',
        options: [
          'Learning in deep water',
          'A subset of machine learning using neural networks',
          'Advanced human learning',
          'Learning complex subjects'
        ],
        correctAnswer: 1,
        explanation: 'Deep learning is a subset of machine learning that uses multi-layered neural networks to learn complex patterns.'
      }
    ]
  }
];
