
export interface Skill {
  id: string;
  name: string;
  category: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  resources?: Resource[];  // Added resources for learning this skill
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: 'article' | 'video' | 'course' | 'book';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description?: string;
}

export interface Job {
  id: string;
  title: string;
  company?: string;
  description: string;
  requiredSkills: Skill[];
  salaryRange?: string;
  experience?: string;
  category: string;
  matchPercentage?: number;
  roadmap?: RoadmapStep[];  // Added roadmap for job preparation
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  skillCategory: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: QuizQuestion[];
  recommendations?: {
    lowScore: Resource[];
    mediumScore: Resource[];
    highScore: Resource[];
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  resources?: string[];
}

export interface Goal {
  id: string;
  title: string;
  jobId?: string;
  skillId?: string;
  roadmap: RoadmapStep[];
  progress: number;
}

export interface UserSkill extends Skill {
  proficiency: number;
}
