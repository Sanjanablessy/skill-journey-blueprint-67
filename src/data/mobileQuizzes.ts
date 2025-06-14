
import { Quiz } from '@/types';

export const mobileQuizzes: Quiz[] = [
  {
    id: 'react-native-beginner',
    title: 'React Native - Beginner',
    description: 'Test your knowledge of basic React Native concepts',
    skillCategory: 'React Native',
    difficulty: 'beginner',
    questions: [
      {
        id: 'rn-basic-1',
        question: 'What is React Native?',
        options: [
          'A web framework',
          'A mobile app development framework',
          'A database system',
          'A testing tool'
        ],
        correctAnswer: 1,
        explanation: 'React Native is a framework for building mobile applications using React and JavaScript.'
      },
      {
        id: 'rn-basic-2',
        question: 'Which platforms does React Native support?',
        options: [
          'iOS only',
          'Android only',
          'Both iOS and Android',
          'Web only'
        ],
        correctAnswer: 2,
        explanation: 'React Native allows you to build apps for both iOS and Android platforms using a single codebase.'
      },
      {
        id: 'rn-basic-3',
        question: 'What is JSX in React Native?',
        options: [
          'A database query language',
          'A syntax extension for JavaScript',
          'A styling language',
          'A testing framework'
        ],
        correctAnswer: 1,
        explanation: 'JSX is a syntax extension that allows you to write HTML-like code in JavaScript.'
      },
      {
        id: 'rn-basic-4',
        question: 'Which component is used for displaying text in React Native?',
        options: [
          'TextView',
          'Text',
          'Label',
          'Paragraph'
        ],
        correctAnswer: 1,
        explanation: 'The Text component is used to display text in React Native applications.'
      },
      {
        id: 'rn-basic-5',
        question: 'What is the equivalent of div in React Native?',
        options: [
          'Container',
          'View',
          'Box',
          'Panel'
        ],
        correctAnswer: 1,
        explanation: 'View is the fundamental component for building UI and is equivalent to div in web development.'
      }
    ]
  },
  {
    id: 'android-beginner',
    title: 'Android - Beginner',
    description: 'Test your knowledge of basic Android development',
    skillCategory: 'Android',
    difficulty: 'beginner',
    questions: [
      {
        id: 'android-basic-1',
        question: 'What is the main programming language for Android development?',
        options: [
          'Java',
          'Kotlin',
          'Both Java and Kotlin',
          'C++'
        ],
        correctAnswer: 2,
        explanation: 'Both Java and Kotlin are officially supported for Android development, with Kotlin being the preferred language.'
      },
      {
        id: 'android-basic-2',
        question: 'What is an Activity in Android?',
        options: [
          'A background service',
          'A single screen with user interface',
          'A database table',
          'A configuration file'
        ],
        correctAnswer: 1,
        explanation: 'An Activity represents a single screen with a user interface in an Android application.'
      },
      {
        id: 'android-basic-3',
        question: 'What file defines the app structure and components?',
        options: [
          'build.gradle',
          'AndroidManifest.xml',
          'strings.xml',
          'MainActivity.java'
        ],
        correctAnswer: 1,
        explanation: 'AndroidManifest.xml defines the app structure, components, and permissions.'
      },
      {
        id: 'android-basic-4',
        question: 'What is used for designing user interfaces in Android?',
        options: [
          'HTML',
          'CSS',
          'XML',
          'JSON'
        ],
        correctAnswer: 2,
        explanation: 'XML is used to define layouts and user interfaces in Android development.'
      },
      {
        id: 'android-basic-5',
        question: 'What is the Android SDK?',
        options: [
          'Software Development Kit',
          'System Development Kit',
          'Security Development Kit',
          'Standard Development Kit'
        ],
        correctAnswer: 0,
        explanation: 'SDK stands for Software Development Kit, which provides tools and APIs for Android development.'
      }
    ]
  },
  {
    id: 'ios-beginner',
    title: 'iOS - Beginner',
    description: 'Test your knowledge of basic iOS development',
    skillCategory: 'iOS',
    difficulty: 'beginner',
    questions: [
      {
        id: 'ios-basic-1',
        question: 'What is the primary programming language for iOS development?',
        options: [
          'Objective-C',
          'Swift',
          'Both Objective-C and Swift',
          'Java'
        ],
        correctAnswer: 2,
        explanation: 'Both Objective-C and Swift can be used for iOS development, with Swift being the modern preferred language.'
      },
      {
        id: 'ios-basic-2',
        question: 'What is Xcode?',
        options: [
          'A programming language',
          'An IDE for iOS development',
          'A testing framework',
          'A database system'
        ],
        correctAnswer: 1,
        explanation: 'Xcode is Apple\'s integrated development environment (IDE) for iOS, macOS, and other Apple platform development.'
      },
      {
        id: 'ios-basic-3',
        question: 'What is a ViewController in iOS?',
        options: [
          'A data model',
          'A network manager',
          'Manages a view hierarchy',
          'A storage system'
        ],
        correctAnswer: 2,
        explanation: 'A ViewController manages a view hierarchy and handles user interactions in iOS applications.'
      },
      {
        id: 'ios-basic-4',
        question: 'What is Interface Builder?',
        options: [
          'A code editor',
          'A visual tool for designing user interfaces',
          'A debugging tool',
          'A testing framework'
        ],
        correctAnswer: 1,
        explanation: 'Interface Builder is a visual tool in Xcode for designing user interfaces using drag and drop.'
      },
      {
        id: 'ios-basic-5',
        question: 'What file format is used for iOS app distribution?',
        options: [
          '.apk',
          '.ipa',
          '.exe',
          '.zip'
        ],
        correctAnswer: 1,
        explanation: '.ipa (iOS App Store Package) is the file format used for distributing iOS applications.'
      }
    ]
  }
];
