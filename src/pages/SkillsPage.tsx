
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Database, Globe, Server } from 'lucide-react';

const SkillsPage = () => {
  const navigate = useNavigate();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 85, category: "Framework" },
        { name: "TypeScript", level: 80, category: "Language" },
        { name: "CSS/Tailwind", level: 90, category: "Styling" },
        { name: "JavaScript", level: 88, category: "Language" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 75, category: "Runtime" },
        { name: "Python", level: 70, category: "Language" },
        { name: "API Design", level: 80, category: "Architecture" },
        { name: "Authentication", level: 65, category: "Security" }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: [
        { name: "SQL", level: 85, category: "Query Language" },
        { name: "PostgreSQL", level: 80, category: "Database" },
        { name: "MongoDB", level: 70, category: "NoSQL" },
        { name: "Redis", level: 60, category: "Cache" }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90, category: "Web" },
        { name: "TypeScript", level: 85, category: "Web" },
        { name: "Python", level: 75, category: "General" },
        { name: "Java", level: 65, category: "Enterprise" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-green-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button 
          onClick={() => navigate(-1)}
          variant="outline"
          className="flex items-center gap-2 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Skills Development</h1>
        <p className="text-gray-600">Track and improve your technical skills</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {category.title}
                </CardTitle>
                <CardDescription>
                  Your progress in {category.title.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.category}
                          </Badge>
                        </div>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className={`h-2 ${getSkillColor(skill.level)}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Ready to Level Up?</h3>
            <p className="text-gray-600 mb-4">
              Take our programming quizzes to assess and improve your skills
            </p>
            <Button onClick={() => navigate('/quizzes')}>
              Start Learning
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillsPage;
