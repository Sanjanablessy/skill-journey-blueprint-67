
import { Quiz } from '@/types';

export const dataScienceQuizzes: Quiz[] = [
  {
    id: 'data-science-beginner',
    title: 'Data Science - Beginner',
    description: 'Test your knowledge of basic data science concepts',
    skillCategory: 'Data Science',
    difficulty: 'beginner',
    questions: [
      {
        id: 'ds-basic-1',
        question: 'What is data science?',
        options: [
          'The science of databases',
          'Extracting insights from data using scientific methods',
          'Computer science with data',
          'The study of data storage'
        ],
        correctAnswer: 1,
        explanation: 'Data science is an interdisciplinary field that uses scientific methods to extract knowledge and insights from data.'
      },
      {
        id: 'ds-basic-2',
        question: 'What is the data science process?',
        options: [
          'Collect, Clean, Analyze, Visualize',
          'Store, Backup, Restore, Delete',
          'Input, Process, Output, Feedback',
          'Plan, Code, Test, Deploy'
        ],
        correctAnswer: 0,
        explanation: 'The typical data science process involves collecting, cleaning, analyzing, and visualizing data to extract insights.'
      },
      {
        id: 'ds-basic-3',
        question: 'What is data visualization?',
        options: [
          'Making data visible',
          'Representing data graphically',
          'Storing data visually',
          'Hiding sensitive data'
        ],
        correctAnswer: 1,
        explanation: 'Data visualization is the representation of data in graphical format to help understand patterns and insights.'
      },
      {
        id: 'ds-basic-4',
        question: 'What is Python commonly used for in data science?',
        options: [
          'Web development only',
          'Data analysis and machine learning',
          'Mobile app development',
          'Game development'
        ],
        correctAnswer: 1,
        explanation: 'Python is widely used in data science for data analysis, machine learning, and statistical computing.'
      },
      {
        id: 'ds-basic-5',
        question: 'What is a dataset?',
        options: [
          'A collection of data',
          'A database table',
          'A spreadsheet',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'A dataset is a collection of data that can be stored in various formats like tables, spreadsheets, or files.'
      }
    ]
  },
  {
    id: 'statistics-beginner',
    title: 'Statistics - Beginner',
    description: 'Test your knowledge of basic statistics concepts',
    skillCategory: 'Statistics',
    difficulty: 'beginner',
    questions: [
      {
        id: 'stats-basic-1',
        question: 'What is statistics?',
        options: [
          'The study of data collection and analysis',
          'A type of mathematics',
          'Computer programming',
          'Database management'
        ],
        correctAnswer: 0,
        explanation: 'Statistics is the science of collecting, organizing, analyzing, and interpreting data.'
      },
      {
        id: 'stats-basic-2',
        question: 'What is the difference between population and sample?',
        options: [
          'No difference',
          'Population is entire group, sample is subset',
          'Sample is larger than population',
          'Population is always smaller'
        ],
        correctAnswer: 1,
        explanation: 'Population is the entire group being studied, while a sample is a subset of the population.'
      },
      {
        id: 'stats-basic-3',
        question: 'What is the mean?',
        options: [
          'The middle value',
          'The most frequent value',
          'The average value',
          'The range of values'
        ],
        correctAnswer: 2,
        explanation: 'The mean is the average value calculated by adding all values and dividing by the number of values.'
      },
      {
        id: 'stats-basic-4',
        question: 'What is the median?',
        options: [
          'The average value',
          'The middle value when data is ordered',
          'The most frequent value',
          'The difference between max and min'
        ],
        correctAnswer: 1,
        explanation: 'The median is the middle value when data is arranged in ascending or descending order.'
      },
      {
        id: 'stats-basic-5',
        question: 'What is standard deviation?',
        options: [
          'The average value',
          'The middle value',
          'A measure of data spread',
          'The maximum value'
        ],
        correctAnswer: 2,
        explanation: 'Standard deviation measures how spread out the data points are from the mean.'
      }
    ]
  }
];
