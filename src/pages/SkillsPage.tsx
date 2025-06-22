
import React, { useState, useEffect } from "react";
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
import { Search, X } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { Skill } from "@/types";

const SkillsPage = () => {
  const { skills, userSkills, addUserSkill, removeUserSkill, getMatchingJobs, clearUserSkills } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showUserSkills, setShowUserSkills] = useState(false);
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(24);
  
  // Get unique skill categories
  const categories = Array.from(new Set(skills.map((skill) => skill.category))).sort();
  
  // Filter skills based on search term and category
  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? skill.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  const visibleSkills = filteredSkills.slice(0, visibleSkillsCount);
  const hasMoreSkills = visibleSkillsCount < filteredSkills.length;

  const loadMoreSkills = () => {
    setVisibleSkillsCount(prev => Math.min(prev + 24, filteredSkills.length));
  };
  
  const matchingJobs = getMatchingJobs();
  
  const handleAddSkill = (skill: Skill) => {
    addUserSkill(skill, 3); // Default proficiency level
  };

  useEffect(() => {
    // Reset visible count when filters change
    setVisibleSkillsCount(24);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container px-4 md:px-6 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Skills Assessment</h1>
          <p className="text-muted-foreground mt-1">
            Track your skills and find matching job opportunities
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search skills..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            variant={showUserSkills ? "default" : "outline"}
            onClick={() => setShowUserSkills(!showUserSkills)}
          >
            My Skills
          </Button>
        </div>
      </div>

      {/* User's Skills Section */}
      {showUserSkills && (
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl">My Skills</CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={clearUserSkills}
              disabled={userSkills.length === 0}
            >
              Clear All
            </Button>
          </CardHeader>
          <CardContent>
            {userSkills && userSkills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {userSkills.map((skill) => (
                  skill && skill.id ? (
                    <Badge 
                      key={skill.id} 
                      className="px-3 py-1.5 flex items-center gap-1"
                    >
                      {skill.name}
                      <button 
                        className="ml-1 hover:bg-primary-foreground rounded-full"
                        onClick={() => removeUserSkill(skill.id)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ) : null
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-6">
                You haven't added any skills yet. Use the list below to add skills to your profile.
              </p>
            )}
          </CardContent>
          {userSkills && userSkills.length > 0 && matchingJobs && matchingJobs.length > 0 && (
            <CardFooter className="flex-col items-start">
              <h3 className="font-medium mb-2">Matching Jobs</h3>
              <div className="space-y-2 w-full">
                {matchingJobs.slice(0, 3).map((job) => (
                  job && job.id ? (
                    <div 
                      key={job.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <p className="font-medium">{job.title || 'Untitled Job'}</p>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary" 
                              style={{ width: `${job.matchPercentage || 0}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">{job.matchPercentage || 0}% match</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="whitespace-nowrap"
                      >
                        <a href={`/jobs/${job.id}`}>View Job</a>
                      </Button>
                    </div>
                  ) : null
                ))}
                {matchingJobs.length > 3 && (
                  <Button variant="ghost" className="w-full" asChild>
                    <a href="/jobs">View All Matching Jobs</a>
                  </Button>
                )}
              </div>
            </CardFooter>
          )}
        </Card>
      )}

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
          className="rounded-full"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Results count */}
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          Showing {visibleSkills.length} of {filteredSkills.length} skills
        </p>
      </div>

      {/* Skills List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleSkills.length > 0 ? (
          visibleSkills.map((skill) => {
            if (!skill || !skill.id) return null;
            
            const isAdded = userSkills && userSkills.some((s) => s && s.id === skill.id);
            
            return (
              <Card key={skill.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                  <CardDescription>{skill.category}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{skill.category}</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    variant={isAdded ? "outline" : "default"}
                    onClick={() => isAdded ? removeUserSkill(skill.id) : handleAddSkill(skill)}
                  >
                    {isAdded ? "Remove Skill" : "Add to My Skills"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium mb-2">No skills found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
      
      {/* Load More Button */}
      {hasMoreSkills && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={loadMoreSkills}
            variant="outline"
            className="px-8"
          >
            Load More Skills ({filteredSkills.length - visibleSkillsCount} remaining)
          </Button>
        </div>
      )}
    </div>
  );
};

export default SkillsPage;
