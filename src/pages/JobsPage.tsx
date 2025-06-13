
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Briefcase, MapPin, DollarSign } from 'lucide-react';

const JobsPage = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      salary: "$80,000 - $120,000",
      type: "Full-time",
      description: "We're looking for a skilled Frontend Developer..."
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$90,000 - $130,000",
      type: "Full-time",
      description: "Join our growing team as a Backend Engineer..."
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Digital Agency",
      location: "New York, NY",
      salary: "$85,000 - $125,000",
      type: "Contract",
      description: "Exciting opportunity for a Full Stack Developer..."
    }
  ];

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">IT Job Opportunities</h1>
        <p className="text-gray-600">Discover your next career opportunity in technology</p>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {job.company}
                  </CardDescription>
                </div>
                <Button variant="outline" onClick={() => navigate(`/jobs/${job.id}`)}>
                  View Details
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="h-4 w-4" />
                  <span>{job.type}</span>
                </div>
                <p className="text-gray-700 mt-3">{job.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
