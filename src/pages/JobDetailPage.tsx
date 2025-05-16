
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAppContext } from "@/context/AppContext";

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { jobs, createGoalForJob, userSkills, getRecommendedSkills } = useAppContext();
  
  const job = jobs.find((j) => j.id === id);
  
  if (!job) {
    return (
      <div className="container px-4 md:px-6 py-8 max-w-7xl">
        <Alert variant="destructive">
          <AlertDescription>
            Job not found. The job you're looking for may have been removed or doesn't exist.
          </AlertDescription>
        </Alert>
        <div className="mt-4">
          <Button onClick={() => navigate("/jobs")}>Back to Jobs</Button>
        </div>
      </div>
    );
  }
  
  // Check which skills the user already has
  const userSkillIds = userSkills.map(s => s.id);
  const missingSkills = getRecommendedSkills(job.id);

  return (
    <div className="container px-4 md:px-6 py-8 max-w-5xl">
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate("/jobs")}>
          Back to Jobs
        </Button>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <CardTitle className="text-2xl">{job.title}</CardTitle>
                  {job.company && (
                    <CardDescription className="text-base mt-1">
                      {job.company}
                    </CardDescription>
                  )}
                </div>
                <Button onClick={() => createGoalForJob(job.id)}>Set as Goal</Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/5">{job.category}</Badge>
                {job.experience && <Badge variant="outline">{job.experience}</Badge>}
                {job.salaryRange && <Badge variant="outline">{job.salaryRange}</Badge>}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Job Description</h3>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.requiredSkills.map((skill) => (
                      <Badge 
                        key={skill.id} 
                        variant={userSkillIds.includes(skill.id) ? "default" : "secondary"}
                        className={userSkillIds.includes(skill.id) ? "" : "bg-secondary/10"}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {missingSkills.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Skills You Need to Learn</CardTitle>
                <CardDescription>
                  These are the skills you should develop to qualify for this role
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {missingSkills.map((skill) => (
                    <div key={skill.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">{skill.name}</p>
                        <p className="text-sm text-muted-foreground">{skill.category}</p>
                      </div>
                      <Link to={`/skills/${skill.id}`}>
                        <Button variant="outline" size="sm">Learn More</Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => createGoalForJob(job.id)}
                >
                  Create Learning Plan
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Career Path</CardTitle>
              <CardDescription>Create a roadmap to become a {job.title}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">What you'll learn</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {job.requiredSkills.map((skill) => (
                    <li key={skill.id}>{skill.name} fundamentals</li>
                  ))}
                  <li>Project portfolio development</li>
                  <li>Interview preparation</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Estimated time</h4>
                <p className="text-sm text-muted-foreground">
                  {job.requiredSkills.length * 2}-{job.requiredSkills.length * 4} months
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button onClick={() => createGoalForJob(job.id)} className="w-full">
                Start Learning Journey
              </Button>
              <Link to="/skills" className="w-full">
                <Button variant="outline" className="w-full">
                  Assess Your Skills
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
