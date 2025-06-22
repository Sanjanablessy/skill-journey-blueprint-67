
import React, { useState } from "react";
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
import { Progress } from "@/components/ui/progress";
import { Check, Briefcase, Flag, BookText, Eye, Star, Plus } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { toast } from "sonner";
import { RoadmapStep } from "@/types";
import { cn } from "@/lib/utils";

// Skills data organized by job categories
const jobSkillsMap: Record<string, { main: string[], additional: string[] }> = {
  "Web Development": {
    main: ["HTML & CSS", "JavaScript", "React / Angular / Vue.js", "Node.js / Express.js", "Git & GitHub"],
    additional: ["TypeScript", "Webpack / Babel", "REST APIs", "Responsive Design", "Next.js / Nuxt.js", "Bootstrap / Tailwind CSS", "Testing (Jest, Cypress)"]
  },
  "DevOps": {
    main: ["CI/CD (Jenkins, GitLab CI)", "Docker", "Kubernetes", "Git", "Linux/Unix", "Infrastructure as Code (Terraform, Ansible)"],
    additional: ["AWS / Azure / GCP", "Monitoring (Prometheus, Grafana)", "Scripting (Bash, Python)", "Load Balancing", "NGINX / Apache"]
  },
  "Data Science": {
    main: ["Python / R", "Pandas, NumPy, Scikit-learn", "SQL", "Data Visualization (Matplotlib, Seaborn)"],
    additional: ["Jupyter Notebooks", "Machine Learning (ML)", "Deep Learning (TensorFlow, PyTorch)", "Big Data Tools (Spark, Hadoop)", "Statistics & Probability", "APIs for data access"]
  },
  "Mobile App Development": {
    main: ["Java / Kotlin (Android)", "Swift / Objective-C (iOS)", "Flutter / Dart", "React Native"],
    additional: ["Android Studio / Xcode", "Firebase", "RESTful APIs", "UI/UX for mobile", "Testing (Appium, Espresso)"]
  },
  "Cybersecurity": {
    main: ["Network Security", "Ethical Hacking", "Penetration Testing", "Firewalls & IDS/IPS", "Security Tools (Wireshark, Metasploit)"],
    additional: ["Cryptography", "Security+ / CEH / CISSP", "Vulnerability Assessment", "Malware Analysis", "Linux / Windows Security", "SIEM Tools (Splunk, QRadar)"]
  },
  "Cloud Computing": {
    main: ["AWS / Azure / GCP", "Docker & Kubernetes", "Load Balancing & Auto Scaling", "VMs / Virtual Networks"],
    additional: ["Cloud Security", "DevOps Tools", "Terraform / Pulumi", "S3, EC2, Lambda (AWS)", "APIs & Serverless Computing"]
  },
  "AI / Machine Learning": {
    main: ["Python", "Scikit-learn", "TensorFlow / PyTorch", "Data Preprocessing", "Linear Algebra, Probability, Stats"],
    additional: ["NLP (spaCy, NLTK)", "Computer Vision (OpenCV)", "Model Deployment (Flask, FastAPI)", "GPU Computing", "MLOps tools (MLflow, DVC)"]
  },
  "Database Administration": {
    main: ["SQL (MySQL, PostgreSQL, Oracle)", "Database Design", "Backup & Recovery", "Performance Tuning"],
    additional: ["NoSQL (MongoDB, Cassandra)", "Data Warehousing", "ETL tools", "Shell Scripting", "DB Monitoring Tools"]
  },
  "UI/UX Design": {
    main: ["Figma / Adobe XD / Sketch", "User Research", "Wireframing & Prototyping", "Interaction Design"],
    additional: ["HTML/CSS (for handoff)", "Accessibility (WCAG)", "UX Writing", "Design Thinking", "A/B Testing"]
  },
  "Software Testing / QA": {
    main: ["Manual Testing", "Automation Testing (Selenium, TestNG)", "Test Case Design", "Bug Tracking (JIRA)"],
    additional: ["API Testing (Postman, REST Assured)", "Performance Testing (JMeter)", "Mobile App Testing", "Unit Testing Frameworks", "CI Integration"]
  },
  "System Admin / IT Support": {
    main: ["Windows / Linux Administration", "Troubleshooting", "Networking Basics", "Command Line / Shell"],
    additional: ["Active Directory", "Scripting (Bash, PowerShell)", "Ticketing Systems", "Virtualization (VMware)", "Backup and Recovery"]
  },
  "Blockchain Development": {
    main: ["Solidity / Ethereum", "Smart Contracts", "Web3.js / Ethers.js", "Blockchain Basics"],
    additional: ["NFTs", "dApp Development", "Truffle / Hardhat", "IPFS", "Crypto Wallet Integration"]
  },
  "Game Development": {
    main: ["Unity / Unreal Engine", "C# / C++", "Game Physics", "Game Design"],
    additional: ["3D Modeling (Blender, Maya)", "Animation", "Multiplayer Architecture", "VR/AR Development", "Asset Optimization"]
  },
  "BI / Data Analytics": {
    main: ["SQL", "Power BI / Tableau", "Excel (Advanced)", "Data Modeling"],
    additional: ["Python/R for Data Analysis", "ETL Tools", "KPIs and Dashboards", "Data Cleaning", "Business Acumen"]
  },
  "Robotics / Embedded Systems": {
    main: ["C / C++ / Embedded C", "Microcontrollers (Arduino, STM32)", "Sensors & Actuators", "Real-Time Operating Systems (RTOS)"],
    additional: ["PCB Design", "IoT Protocols (MQTT, CoAP)", "Raspberry Pi", "Robotics Simulation (ROS, Gazebo)"]
  },
  "Product / Project Management": {
    main: ["Agile / Scrum / Kanban", "Project Planning Tools (JIRA, Trello)", "Risk Management", "Roadmapping"],
    additional: ["Gantt Charts", "Communication Skills", "Technical Documentation", "Stakeholder Management", "Budgeting"]
  }
};

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { jobs, createGoalForJob, userSkills, getRecommendedSkills, goals } = useAppContext();
  const [isCreatingGoal, setIsCreatingGoal] = useState(false);
  
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
  
  // Separate skills into user has vs needs to learn
  const userHasSkills = job.requiredSkills.filter(skill => userSkillIds.includes(skill.id));
  const skillsToLearn = job.requiredSkills.filter(skill => !userSkillIds.includes(skill.id));
  
  // Check if user already has a goal for this job
  const existingGoal = goals.find(g => g.jobId === job.id);
  
  // Get detailed skills for this job category
  const detailedSkills = jobSkillsMap[job.category] || { main: [], additional: [] };
  
  const handleCreateGoal = () => {
    setIsCreatingGoal(true);
    
    setTimeout(() => {
      createGoalForJob(job.id);
      setIsCreatingGoal(false);
      toast.success(`Goal created for ${job.title}!`);
      navigate("/goals");
    }, 1000); // simulate some processing time
  };

  return (
    <div className="container px-4 md:px-6 py-8 max-w-5xl animate-[fade-in_0.3s_ease-out]">
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate("/jobs")}>
          ← Back to Jobs
        </Button>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                  </div>
                  {job.company && (
                    <CardDescription className="text-base mt-1">
                      {job.company}
                    </CardDescription>
                  )}
                </div>
                <Button 
                  onClick={handleCreateGoal} 
                  disabled={isCreatingGoal || !!existingGoal}
                  className="flex items-center gap-2"
                >
                  {isCreatingGoal ? (
                    "Creating Goal..."
                  ) : existingGoal ? (
                    <>
                      <Check className="h-4 w-4" />
                      Goal Created
                    </>
                  ) : (
                    <>
                      <Flag className="h-4 w-4" />
                      Set as Goal
                    </>
                  )}
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/5">{job.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Job Description</h3>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
                
                {/* Skills You Have */}
                {userHasSkills.length > 0 && (
                  <div className="bg-green-50 p-4 rounded-md border border-green-200">
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2 text-green-800">
                      <Check className="h-5 w-5 text-green-600" />
                      Skills You Already Have
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {userHasSkills.map((skill) => (
                        <Badge 
                          key={skill.id} 
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 text-sm shadow-sm"
                        >
                          <Check className="h-3.5 w-3.5 mr-1.5" />
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills You Need to Learn */}
                {skillsToLearn.length > 0 && (
                  <div className="bg-brand-50 p-4 rounded-md border border-brand-200">
                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2 text-brand-800">
                      <Eye className="h-5 w-5 text-brand-600" />
                      Skills You Need to Learn
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsToLearn.map((skill) => (
                        <Badge 
                          key={skill.id} 
                          variant="secondary"
                          className="bg-white border-brand-300 text-brand-800 px-3 py-1.5 text-sm shadow-sm"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Skills Section */}
          {(detailedSkills.main.length > 0 || detailedSkills.additional.length > 0) && (
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Skills Required for {job.category}
                </CardTitle>
                <CardDescription>
                  Essential and additional skills you'll need for success in this field
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {detailedSkills.main.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Main Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {detailedSkills.main.map((skill, index) => (
                        <Badge 
                          key={index}
                          className="bg-primary/10 text-primary border-primary/20 px-3 py-1.5"
                        >
                          <Star className="h-3 w-3 mr-1" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {detailedSkills.additional.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-muted-foreground">Additional Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {detailedSkills.additional.map((skill, index) => (
                        <Badge 
                          key={index}
                          variant="outline"
                          className="bg-muted/30 px-3 py-1.5"
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
          
          {missingSkills.length > 0 && (
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookText className="h-5 w-5 text-primary" />
                  Skills You Need to Learn
                </CardTitle>
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
                      <Link to={`/skills`}>
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
                  onClick={handleCreateGoal}
                  disabled={isCreatingGoal || !!existingGoal}
                >
                  {isCreatingGoal ? (
                    "Creating Learning Plan..."
                  ) : existingGoal ? (
                    "Learning Plan Created"
                  ) : (
                    "Create Learning Plan"
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
        
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flag className="h-5 w-5 text-primary" />
                Career Path
              </CardTitle>
              <CardDescription>Create a roadmap to become a {job.title}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">What you'll learn</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {skillsToLearn.map((skill) => (
                    <li key={skill.id}>{skill.name} fundamentals</li>
                  ))}
                  <li>Project portfolio development</li>
                  <li>Interview preparation</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Estimated time</h4>
                <p className="text-sm text-muted-foreground">
                  {skillsToLearn.length * 2}-{skillsToLearn.length * 4} months
                </p>
              </div>

              {existingGoal && (
                <div className="space-y-2 pt-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Goal in progress
                  </h4>
                  <Progress value={existingGoal.progress} className="h-2" />
                  <p className="text-xs text-center text-muted-foreground">{existingGoal.progress}% complete</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex-col gap-2">
              {existingGoal ? (
                <Link to="/goals" className="w-full">
                  <Button className="w-full">
                    View Your Roadmap
                  </Button>
                </Link>
              ) : (
                <Button 
                  onClick={handleCreateGoal} 
                  disabled={isCreatingGoal}
                  className="w-full"
                >
                  {isCreatingGoal ? "Creating..." : "Start Learning Journey"}
                </Button>
              )}
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
