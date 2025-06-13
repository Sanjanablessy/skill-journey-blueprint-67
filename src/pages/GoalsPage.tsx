
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const GoalsPage = () => {
  const navigate = useNavigate();
  
  const [goals] = useState([
    {
      id: 1,
      title: "Learn React Advanced Patterns",
      description: "Master hooks, context, and performance optimization",
      progress: 75,
      status: "in-progress",
      deadline: "2024-07-15",
      category: "Frontend"
    },
    {
      id: 2,
      title: "Complete AWS Certification",
      description: "Get AWS Solutions Architect Associate certification",
      progress: 40,
      status: "in-progress",
      deadline: "2024-08-30",
      category: "Cloud"
    },
    {
      id: 3,
      title: "Build Full-Stack Portfolio Project",
      description: "Create a complete application with React and Node.js",
      progress: 100,
      status: "completed",
      deadline: "2024-06-01",
      category: "Project"
    },
    {
      id: 4,
      title: "Learn TypeScript",
      description: "Understand advanced TypeScript concepts and patterns",
      progress: 25,
      status: "in-progress",
      deadline: "2024-09-15",
      category: "Language"
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'overdue':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Target className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Goals</h1>
            <p className="text-gray-600">Track your progress and stay motivated</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New Goal
          </Button>
        </div>
      </div>

      {/* Goals Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Target className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">{goals.length}</div>
                <div className="text-sm text-gray-600">Total Goals</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">
                  {goals.filter(g => g.status === 'completed').length}
                </div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">
                  {goals.filter(g => g.status === 'in-progress').length}
                </div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goals List */}
      <div className="space-y-4">
        {goals.map((goal) => (
          <Card key={goal.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon(goal.status)}
                    <CardTitle className="text-lg">{goal.title}</CardTitle>
                    <Badge variant="outline">{goal.category}</Badge>
                  </div>
                  <CardDescription>{goal.description}</CardDescription>
                </div>
                <Badge className={getStatusColor(goal.status)}>
                  {goal.status.replace('-', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Deadline: {formatDate(goal.deadline)}</span>
                  <Button variant="outline" size="sm">
                    Edit Goal
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="pt-6">
            <Target className="h-12 w-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Set Your Next Goal</h3>
            <p className="text-gray-600 mb-4">
              Define clear objectives to advance your IT career
            </p>
            <Button>Create New Goal</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoalsPage;
