
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
import { Search, Briefcase, CheckSquare } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      title: "Explore IT Jobs",
      description: "Browse through hundreds of IT job roles and their requirements.",
      link: "/jobs",
      buttonText: "Browse Jobs",
    },
    {
      title: "Assess Your Skills",
      description: "Track your technical skills and find gaps to improve.",
      link: "/skills",
      buttonText: "Add Skills",
    },
    {
      title: "Test Your Knowledge",
      description: "Take quizzes to assess your proficiency in various technologies.",
      link: "/quizzes",
      buttonText: "Try Quizzes",
    },
    {
      title: "Set Career Goals",
      description: "Create personalized roadmaps for your career development.",
      link: "/goals",
      buttonText: "Set Goals",
    },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-600 to-brand-800 py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                Navigate Your Tech Career With Confidence
              </h1>
              <p className="text-lg text-white/90 md:text-xl">
                Find the right path for your IT career. Explore jobs, explore skills, and create personalized roadmaps.
              </p>
              <p className="text-lg font-medium italic text-purple-300">
                where ambition meets opportunity
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/jobs">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-brand-800 hover:bg-white/90 shadow-lg flex items-center gap-2 px-6 py-6 text-lg font-medium animate-pulse hover:animate-none">
                    <Briefcase className="h-6 w-6" /> Explore Jobs
                  </Button>
                </Link>
                <Link to="/skills">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-purple-500 text-white hover:bg-purple-600 shadow-lg flex items-center gap-2 px-6 py-6 text-lg font-medium"
                  >
                    <CheckSquare className="h-6 w-6" /> Assess Skills
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-brand-700/20 rounded-lg transform rotate-3 scale-105"></div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 relative shadow-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <Search className="h-8 w-8 text-brand-200" />
                    <h3 className="text-xl font-medium">Find Your Path</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-white/80">Popular searches:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 rounded-full px-3 py-1 text-xs">Frontend Developer</span>
                      <span className="bg-white/20 rounded-full px-3 py-1 text-xs">React</span>
                      <span className="bg-white/20 rounded-full px-3 py-1 text-xs">Data Scientist</span>
                      <span className="bg-white/20 rounded-full px-3 py-1 text-xs">DevOps</span>
                      <span className="bg-white/20 rounded-full px-3 py-1 text-xs">Cloud Computing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Banner Section */}
      <section className="bg-brand-50 py-8 border-y border-brand-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-brand-600" />
              <div>
                <h3 className="text-xl font-bold text-brand-800">Ready to find your next tech role?</h3>
                <p className="text-brand-600">Browse hundreds of IT job opportunities</p>
              </div>
            </div>
            <Link to="/jobs">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white shadow-md">
                Explore Jobs Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Banner Section */}
      <section className="bg-purple-50 py-8 border-b border-purple-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckSquare className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="text-xl font-bold text-purple-800">Want to know where you stand?</h3>
                <p className="text-purple-600">Assess your technical skills and find areas to improve</p>
              </div>
            </div>
            <Link to="/skills">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-md">
                Assess Your Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Our platform helps you navigate your tech career through personalized recommendations, skill assessments, and guided learning paths.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link to={feature.link} className="w-full">
                    <Button className="w-full">{feature.buttonText}</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to advance your career?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Start your tech career journey today by exploring jobs, assessing your skills, or setting career goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/jobs">
                <Button>Browse IT Jobs</Button>
              </Link>
              <Link to="/skills">
                <Button variant="outline">Assess Your Skills</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
