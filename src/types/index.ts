
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface UserSkill {
  id: string;
  skillId: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  progress: number;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
  description?: string;
  progress?: number;
  resources?: Resource[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary?: string;
  description: string;
  requirements: string[];
  skills: string[];
  posted: string;
  logo?: string;
  requiredSkills?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: {
    correct: string;
    why_others_wrong: string[];
  };
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  skillCategory: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: QuizQuestion[];
  timeLimit?: number;
  recommendations?: {
    lowScore: Resource[];
    mediumScore: Resource[];
    highScore: Resource[];
  };
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'course' | 'book' | 'tutorial';
  url: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  category?: string;
  rating?: number;
  duration?: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  targetDate: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  progress: number;
  milestones?: string[];
  jobId?: string;
  skillId?: string;
  roadmap?: RoadmapStep[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  resources: Resource[];
}

export interface LearningPath {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  skills: string[];
  courses: Resource[];
}
