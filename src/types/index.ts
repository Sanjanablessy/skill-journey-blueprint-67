
export interface Skill {
  id: string;
  name: string;
  category: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  description: string;
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
  matchPercentage?: number; // Added this field to fix TypeScript errors
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  skillCategory: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
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
