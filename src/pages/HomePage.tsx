
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Target, Brain, Trophy, Code } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Explore IT Jobs",
      description: "Discover thousands of IT job opportunities tailored to your skills and experience level.",
      link: "/jobs"
    },
    {
      icon: Brain,
      title: "Develop Skills",
      description: "Build and enhance your technical skills with curated learning paths and resources.",
      link: "/skills"
    },
    {
      icon: Trophy,
      title: "Take Quizzes",
      description: "Test your knowledge and identify areas for improvement with interactive quizzes.",
      link: "/quizzes"
    },
    {
      icon: Code,
      title: "Language Quizzes",
      description: "Comprehensive programming language quizzes with basic, intermediate, and advanced levels.",
      link: "/language-quizzes"
    },
    {
      icon: Target,
      title: "Set Goals",
      description: "Create and track your career goals to stay motivated and focused on growth.",
      link: "/goals"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your IT Career Journey Starts Here
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Navigate your path in the tech industry with personalized guidance, skill development, and career opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/jobs">
            <Button size="lg" className="w-full sm:w-auto">
              Explore Jobs
            </Button>
          </Link>
          <Link to="/language-quizzes">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Start Learning
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  {feature.description}
                </CardDescription>
                <Link to={feature.link} className="block">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-6">Join Thousands of IT Professionals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-gray-600">Job Opportunities</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Skill Assessments</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
