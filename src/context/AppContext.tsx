
import React, { createContext, useState, useContext, ReactNode } from "react";
import { skillsData, jobsData, quizzesData, goalsData } from "@/data/mockData";
import { Skill, Job, Quiz, Goal, UserSkill, RoadmapStep } from "@/types";
import { toast } from "sonner";
import { v4 as uuidv4 } from "@/lib/utils";

interface AppContextProps {
  skills: Skill[];
  jobs: Job[];
  quizzes: Quiz[];
  goals: Goal[];
  userSkills: UserSkill[];
  addUserSkill: (skill: Skill, proficiency: number) => void;
  removeUserSkill: (skillId: string) => void;
  updateUserSkill: (skillId: string, proficiency: number) => void;
  createGoalForJob: (jobId: string) => void;
  createGoalForSkill: (skillId: string) => void;
  updateRoadmapStep: (goalId: string, stepId: string, completed: boolean) => void;
  getMatchingJobs: () => Job[];
  getRecommendedSkills: (jobId: string) => Skill[];
  clearUserSkills: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [goals, setGoals] = useState<Goal[]>(goalsData);
  const [userSkills, setUserSkills] = useState<UserSkill[]>([]);

  const addUserSkill = (skill: Skill, proficiency: number) => {
    if (userSkills.find((s) => s.id === skill.id)) {
      toast.error("You already have this skill in your profile.");
      return;
    }
    
    setUserSkills([...userSkills, { ...skill, proficiency }]);
    toast.success(`${skill.name} added to your skills.`);
  };

  const removeUserSkill = (skillId: string) => {
    setUserSkills(userSkills.filter((skill) => skill.id !== skillId));
    toast.info("Skill removed from your profile.");
  };

  const updateUserSkill = (skillId: string, proficiency: number) => {
    setUserSkills(
      userSkills.map((skill) =>
        skill.id === skillId ? { ...skill, proficiency } : skill
      )
    );
  };

  const clearUserSkills = () => {
    setUserSkills([]);
    toast.info("All skills cleared from your profile.");
  };

  const createRoadmapForJob = (jobId: string): RoadmapStep[] => {
    const job = jobsData.find((j) => j.id === jobId);
    if (!job) return [];

    const steps: RoadmapStep[] = [];
    
    // Add learning steps for each required skill
    job.requiredSkills.forEach((skill) => {
      steps.push({
        id: uuidv4(),
        title: `Learn ${skill.name}`,
        description: `Master the basics of ${skill.name} for ${job.title} role.`,
        completed: userSkills.some((s) => s.id === skill.id),
        resources: [
          `${skill.name} documentation`,
          `${skill.name} beginner course`,
        ],
      });
    });

    // Add portfolio and project steps
    steps.push(
      {
        id: uuidv4(),
        title: "Build Portfolio Project",
        description: `Create a project that demonstrates your ${job.requiredSkills.map(s => s.name).join(", ")} skills.`,
        completed: false,
        resources: ["Project ideas", "Github repository templates"],
      },
      {
        id: uuidv4(),
        title: "Prepare Resume",
        description: "Update your resume to highlight relevant skills and experience.",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Practice Technical Interviews",
        description: "Prepare for technical interviews by practicing common questions.",
        completed: false,
        resources: ["Interview question bank", "Mock interview service"],
      }
    );

    return steps;
  };

  const createRoadmapForSkill = (skillId: string): RoadmapStep[] => {
    const skill = skillsData.find((s) => s.id === skillId);
    if (!skill) return [];

    return [
      {
        id: uuidv4(),
        title: `Learn ${skill.name} Basics`,
        description: `Master the fundamentals of ${skill.name}.`,
        completed: false,
        resources: [`${skill.name} documentation`, "Online tutorials"],
      },
      {
        id: uuidv4(),
        title: `Build Simple ${skill.name} Project`,
        description: `Create a small project using ${skill.name}.`,
        completed: false,
      },
      {
        id: uuidv4(),
        title: `Advanced ${skill.name} Concepts`,
        description: `Deepen your understanding of advanced ${skill.name} topics.`,
        completed: false,
      },
      {
        id: uuidv4(),
        title: `Real-world ${skill.name} Application`,
        description: `Apply ${skill.name} in a complex, real-world scenario.`,
        completed: false,
      },
      {
        id: uuidv4(),
        title: `${skill.name} Certification (Optional)`,
        description: `Consider getting certified in ${skill.name} if applicable.`,
        completed: false,
      },
    ];
  };

  const createGoalForJob = (jobId: string) => {
    const job = jobsData.find((j) => j.id === jobId);
    if (!job) return;

    const roadmap = createRoadmapForJob(jobId);
    const newGoal: Goal = {
      id: uuidv4(),
      title: `Become a ${job.title}`,
      jobId,
      roadmap,
      progress: calculateProgress(roadmap),
    };

    setGoals([...goals, newGoal]);
    toast.success(`Goal created for ${job.title}!`);
  };

  const createGoalForSkill = (skillId: string) => {
    const skill = skillsData.find((s) => s.id === skillId);
    if (!skill) return;

    const roadmap = createRoadmapForSkill(skillId);
    const newGoal: Goal = {
      id: uuidv4(),
      title: `Learn ${skill.name}`,
      skillId,
      roadmap,
      progress: calculateProgress(roadmap),
    };

    setGoals([...goals, newGoal]);
    toast.success(`Goal created for learning ${skill.name}!`);
  };

  const updateRoadmapStep = (goalId: string, stepId: string, completed: boolean) => {
    setGoals(
      goals.map((goal) => {
        if (goal.id === goalId) {
          const updatedRoadmap = goal.roadmap.map((step) =>
            step.id === stepId ? { ...step, completed } : step
          );
          return {
            ...goal,
            roadmap: updatedRoadmap,
            progress: calculateProgress(updatedRoadmap),
          };
        }
        return goal;
      })
    );
  };

  const calculateProgress = (roadmap: RoadmapStep[]): number => {
    if (roadmap.length === 0) return 0;
    const completedSteps = roadmap.filter((step) => step.completed).length;
    return Math.round((completedSteps / roadmap.length) * 100);
  };

  const getMatchingJobs = (): Job[] => {
    if (userSkills.length === 0) return [];
    
    const userSkillIds = userSkills.map((skill) => skill.id);
    
    return jobsData
      .map((job) => {
        const requiredSkillIds = job.requiredSkills.map((skill) => skill.id);
        const matchedSkills = requiredSkillIds.filter((id) => userSkillIds.includes(id));
        
        // Calculate match percentage
        const matchPercentage = Math.round((matchedSkills.length / requiredSkillIds.length) * 100);
        
        return { ...job, matchPercentage };
      })
      .filter((job) => job.matchPercentage > 0) // Only include jobs with some skills matched
      .sort((a, b) => b.matchPercentage - a.matchPercentage); // Sort by match percentage
  };

  const getRecommendedSkills = (jobId: string): Skill[] => {
    const job = jobsData.find((j) => j.id === jobId);
    if (!job) return [];
    
    const userSkillIds = userSkills.map((skill) => skill.id);
    
    // Return skills required for the job that the user doesn't have yet
    return job.requiredSkills.filter((skill) => !userSkillIds.includes(skill.id));
  };

  return (
    <AppContext.Provider
      value={{
        skills: skillsData,
        jobs: jobsData,
        quizzes: quizzesData,
        goals,
        userSkills,
        addUserSkill,
        removeUserSkill,
        updateUserSkill,
        createGoalForJob,
        createGoalForSkill,
        updateRoadmapStep,
        getMatchingJobs,
        getRecommendedSkills,
        clearUserSkills,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
