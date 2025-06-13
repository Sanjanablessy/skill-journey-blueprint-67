
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, DollarSign, Clock, Building, Users, Briefcase } from 'lucide-react';

const JobDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock job data - in a real app, this would come from an API
  const job = {
    id: parseInt(id || '1'),
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$80,000 - $120,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "We're looking for a skilled Frontend Developer to join our growing team. You'll be responsible for building user-facing features and ensuring great user experiences across our web applications.",
    requirements: [
      "3+ years of experience with React and JavaScript",
      "Strong understanding of HTML, CSS, and responsive design",
      "Experience with state management (Redux, Context API)",
      "Familiarity with modern build tools (Webpack, Vite)",
      "Knowledge of version control (Git)",
      "Strong problem-solving and communication skills"
    ],
    responsibilities: [
      "Develop and maintain user-facing web applications",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and mentor junior developers",
      "Work with backend developers to integrate APIs",
      "Stay up-to-date with emerging technologies and best practices"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Free lunch and snacks"
    ],
    companyInfo: {
      size: "50-100 employees",
      industry: "Technology",
      founded: "2018"
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Button 
          onClick={() => navigate(-1)}
          variant="outline"
          className="flex items-center gap-2 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Jobs
        </Button>
      </div>

      {/* Job Header */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
              <CardDescription className="text-xl font-medium text-primary mb-3">
                {job.company}
              </CardDescription>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Posted {job.posted}</span>
                </div>
              </div>
            </div>
            <Button size="lg">Apply Now</Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Description */}
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Benefits & Perks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Company Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Company Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-sm font-medium text-gray-700">Company Size</div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>{job.companyInfo.size}</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">Industry</div>
                <span>{job.companyInfo.industry}</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">Founded</div>
                <span>{job.companyInfo.founded}</span>
              </div>
            </CardContent>
          </Card>

          {/* Apply Card */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="font-semibold">Ready to Apply?</h3>
                <p className="text-sm text-gray-600">
                  Join {job.company} and take your career to the next level
                </p>
                <Button className="w-full" size="lg">
                  Apply for this Position
                </Button>
                <Button variant="outline" className="w-full">
                  Save Job
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Similar Jobs */}
          <Card>
            <CardHeader>
              <CardTitle>Similar Jobs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">React Developer</div>
                <div className="text-sm text-gray-600">StartupXYZ • Remote</div>
                <div className="text-sm text-primary">$75k - $110k</div>
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="font-medium">UI/UX Developer</div>
                <div className="text-sm text-gray-600">Design Co • Austin, TX</div>
                <div className="text-sm text-primary">$70k - $100k</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
