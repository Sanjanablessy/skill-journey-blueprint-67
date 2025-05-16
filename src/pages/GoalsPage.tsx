
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useAppContext } from "@/context/AppContext";

const GoalsPage = () => {
  const { goals, jobs, skills, updateRoadmapStep } = useAppContext();
  
  const getJobOrSkillName = (goal: any) => {
    if (goal.jobId) {
      const job = jobs.find(j => j.id === goal.jobId);
      return job ? job.title : "Unknown Job";
    } else if (goal.skillId) {
      const skill = skills.find(s => s.id === goal.skillId);
      return skill ? skill.name : "Unknown Skill";
    }
    return goal.title;
  };
  
  return (
    <div className="container px-4 md:px-6 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Learning Goals</h1>
          <p className="text-muted-foreground mt-1">
            Track your progress towards career and skill development goals
          </p>
        </div>
        <div className="flex space-x-2">
          <Link to="/jobs">
            <Button variant="outline">Browse Jobs</Button>
          </Link>
          <Link to="/skills">
            <Button>Add Skills</Button>
          </Link>
        </div>
      </div>

      {goals.length === 0 ? (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>No Goals Set Yet</CardTitle>
            <CardDescription>
              Start by setting career goals or skill learning paths
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-10 space-y-6">
            <div className="text-center max-w-md">
              <p className="mb-6 text-muted-foreground">
                Get started by exploring jobs or skills and creating your personalized learning roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/jobs">
                  <Button variant="outline" className="w-full">Browse Jobs</Button>
                </Link>
                <Link to="/skills">
                  <Button className="w-full">Explore Skills</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {goals.map((goal) => (
            <Card key={goal.id} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <div>
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {getJobOrSkillName(goal)}
                    </CardDescription>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{goal.progress}%</span>
                      <Progress value={goal.progress} className="h-2 w-24" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative space-y-4">
                  {goal.roadmap.length > 0 && <div className="roadmap-line"></div>}
                  
                  {goal.roadmap.map((step, index) => (
                    <div 
                      key={step.id} 
                      className={`pl-12 pb-4 relative ${
                        index !== goal.roadmap.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <div className="absolute left-4 top-1 w-3 h-3 rounded-full bg-white border-2 border-brand-300 z-10"></div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <Checkbox 
                              id={`step-${step.id}`} 
                              checked={step.completed}
                              onCheckedChange={(checked) => {
                                updateRoadmapStep(goal.id, step.id, checked === true);
                              }}
                            />
                            <label
                              htmlFor={`step-${step.id}`}
                              className={`font-medium ${step.completed ? "line-through text-muted-foreground" : ""}`}
                            >
                              {step.title}
                            </label>
                          </div>
                          <p className={`mt-1 ml-7 text-sm ${step.completed ? "text-muted-foreground/70" : "text-muted-foreground"}`}>
                            {step.description}
                          </p>
                          
                          {step.resources && step.resources.length > 0 && (
                            <div className="mt-2 ml-7">
                              <p className="text-xs text-muted-foreground mb-1">Suggested resources:</p>
                              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                                {step.resources.map((resource, i) => (
                                  <li key={i}>{resource}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoalsPage;
