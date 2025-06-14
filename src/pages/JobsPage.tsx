
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Search, Building, Clock } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { cn } from "@/lib/utils";

const JobsPage = () => {
  const { jobs } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredJobs, setFilteredJobs] = useState<typeof jobs>([]);
  const [visibleJobsCount, setVisibleJobsCount] = useState(12);

  // Get unique job categories and sort them alphabetically
  const categories = Array.from(new Set(jobs.map((job) => job.category))).sort();

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (job.company && job.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.requiredSkills.some(skill => 
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          skill.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredJobs(filtered);
    setVisibleJobsCount(12); // Reset visible count when filters change
  }, [searchTerm, selectedCategory, jobs]);

  const visibleJobs = filteredJobs.slice(0, visibleJobsCount);
  const hasMoreJobs = visibleJobsCount < filteredJobs.length;

  const loadMoreJobs = () => {
    setVisibleJobsCount(prev => Math.min(prev + 12, filteredJobs.length));
  };

  return (
    <div className="container px-4 md:px-6 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-primary" />
            IT Jobs
          </h1>
          <p className="text-muted-foreground mt-1">
            Explore available jobs in the IT industry and find your perfect role
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search jobs..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
          className="rounded-full bg-primary/80 hover:bg-primary"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "rounded-full",
              selectedCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "bg-accent/60 text-accent-foreground hover:bg-accent"
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Results count */}
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          Showing {visibleJobs.length} of {filteredJobs.length} jobs
        </p>
      </div>

      {/* Jobs List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleJobs.length > 0 ? (
          visibleJobs.map((job, index) => (
            <Card 
              key={job.id} 
              className={cn(
                "overflow-hidden transition-all hover:shadow-md fade-in",
                { "animate-[fade-in_0.3s_ease-out]": true }
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  {job.company && (
                    <div className="flex items-center gap-1">
                      <Building className="h-3.5 w-3.5" />
                      <span>{job.company}</span>
                    </div>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {job.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                    {job.category}
                  </Badge>
                  {job.experience && (
                    <Badge variant="outline" className="bg-secondary/5 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {job.experience}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-1">
                  {job.requiredSkills.slice(0, 3).map((skill) => (
                    <Badge key={skill.id} variant="secondary" className="bg-secondary/30 text-foreground">
                      {skill.name}
                    </Badge>
                  ))}
                  {job.requiredSkills.length > 3 && (
                    <Badge variant="secondary" className="bg-secondary/30 text-foreground">
                      +{job.requiredSkills.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/jobs/${job.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium mb-2">No jobs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {hasMoreJobs && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={loadMoreJobs}
            variant="outline"
            className="px-8"
          >
            Load More Jobs ({filteredJobs.length - visibleJobsCount} remaining)
          </Button>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
