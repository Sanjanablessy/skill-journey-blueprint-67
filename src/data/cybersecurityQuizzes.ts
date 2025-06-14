
import { Quiz } from '@/types';

export const cybersecurityQuizzes: Quiz[] = [
  {
    id: 'cybersecurity-beginner',
    title: 'Cybersecurity - Beginner',
    description: 'Test your knowledge of basic cybersecurity concepts',
    skillCategory: 'Cybersecurity',
    difficulty: 'beginner',
    questions: [
      {
        id: 'cyber-basic-1',
        question: 'What is malware?',
        options: [
          'Good software',
          'Malicious software',
          'System software',
          'Web software'
        ],
        correctAnswer: 1,
        explanation: 'Malware is malicious software designed to damage, disrupt, or gain unauthorized access to computer systems.'
      },
      {
        id: 'cyber-basic-2',
        question: 'What is phishing?',
        options: [
          'A type of fishing',
          'A social engineering attack',
          'A programming language',
          'A network protocol'
        ],
        correctAnswer: 1,
        explanation: 'Phishing is a social engineering attack where attackers impersonate legitimate entities to steal sensitive information.'
      },
      {
        id: 'cyber-basic-3',
        question: 'What does VPN stand for?',
        options: [
          'Virtual Private Network',
          'Very Private Network',
          'Virtual Public Network',
          'Verified Private Network'
        ],
        correctAnswer: 0,
        explanation: 'VPN stands for Virtual Private Network, which creates a secure connection over the internet.'
      },
      {
        id: 'cyber-basic-4',
        question: 'What is two-factor authentication?',
        options: [
          'Using two passwords',
          'Additional security layer requiring two forms of verification',
          'Having two user accounts',
          'Using two different browsers'
        ],
        correctAnswer: 1,
        explanation: 'Two-factor authentication adds an extra security layer by requiring two different forms of verification.'
      },
      {
        id: 'cyber-basic-5',
        question: 'What is a firewall?',
        options: [
          'A physical wall',
          'A network security system',
          'A type of virus',
          'A programming tool'
        ],
        correctAnswer: 1,
        explanation: 'A firewall is a network security system that monitors and controls incoming and outgoing network traffic.'
      }
    ]
  },
  {
    id: 'ethical-hacking-beginner',
    title: 'Ethical Hacking - Beginner',
    description: 'Test your knowledge of basic ethical hacking concepts',
    skillCategory: 'Ethical Hacking',
    difficulty: 'beginner',
    questions: [
      {
        id: 'ethical-basic-1',
        question: 'What is ethical hacking?',
        options: [
          'Illegal hacking',
          'Authorized security testing',
          'Random system attacks',
          'Stealing data'
        ],
        correctAnswer: 1,
        explanation: 'Ethical hacking involves authorized security testing to identify vulnerabilities and improve security.'
      },
      {
        id: 'ethical-basic-2',
        question: 'What is penetration testing?',
        options: [
          'Physical testing of hardware',
          'Authorized testing of system security',
          'Performance testing',
          'User interface testing'
        ],
        correctAnswer: 1,
        explanation: 'Penetration testing is the authorized testing of systems to identify security vulnerabilities.'
      },
      {
        id: 'ethical-basic-3',
        question: 'What is a vulnerability assessment?',
        options: [
          'Evaluating system performance',
          'Identifying security weaknesses',
          'Testing user interfaces',
          'Checking code quality'
        ],
        correctAnswer: 1,
        explanation: 'A vulnerability assessment is the process of identifying and evaluating security weaknesses in systems.'
      },
      {
        id: 'ethical-basic-4',
        question: 'What is social engineering?',
        options: [
          'Building social networks',
          'Manipulating people to reveal information',
          'Engineering social media',
          'Creating social applications'
        ],
        correctAnswer: 1,
        explanation: 'Social engineering involves manipulating people to divulge confidential information or perform actions that compromise security.'
      },
      {
        id: 'ethical-basic-5',
        question: 'What is reconnaissance in ethical hacking?',
        options: [
          'Attacking systems',
          'Information gathering phase',
          'Installing malware',
          'Deleting data'
        ],
        correctAnswer: 1,
        explanation: 'Reconnaissance is the information gathering phase where ethical hackers collect data about target systems.'
      }
    ]
  }
];
