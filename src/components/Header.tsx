
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, X, Compass } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAppContext } from "@/context/AppContext";
import { 
  CommandDialog, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from "@/components/ui/command";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { jobs, skills, quizzes } = useAppContext();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-primary" />
          <span className="text-2xl font-bold text-primary">
            WeGuideYou
          </span>
        </Link>
        <nav className="ml-auto flex gap-1 sm:gap-2 md:gap-4 items-center">
          <div className="relative hidden md:block">
            <form onSubmit={handleSearch} className="flex items-center">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for jobs, skills... (Ctrl+K)"
                className="w-full pl-8 bg-muted/30 border-muted-foreground/20 md:w-[200px] lg:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={() => setOpen(true)}
              />
            </form>
          </div>
          <Link to="/">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              className="font-medium"
              size="sm"
            >
              Home
            </Button>
          </Link>
          <Link to="/jobs">
            <Button
              variant={isActive("/jobs") ? "default" : "ghost"}
              className="font-medium"
              size="sm"
            >
              Jobs
            </Button>
          </Link>
          <Link to="/skills">
            <Button
              variant={isActive("/skills") ? "default" : "ghost"}
              className="font-medium"
              size="sm"
            >
              Skills
            </Button>
          </Link>
          <Link to="/quizzes">
            <Button
              variant={isActive("/quizzes") ? "default" : "ghost"}
              className="font-medium"
              size="sm"
            >
              Quizzes
            </Button>
          </Link>
          <Link to="/goals">
            <Button
              variant={isActive("/goals") ? "default" : "ghost"}
              className="font-medium"
              size="sm"
            >
              Goals
            </Button>
          </Link>
        </nav>
      </div>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search for jobs, skills, or quizzes..." 
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Jobs">
            {jobs
              .filter((job) => 
                job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (job.company && job.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
                job.category.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .slice(0, 5)
              .map((job) => (
                <CommandItem
                  key={job.id}
                  onSelect={() => {
                    setOpen(false);
                    setSearchQuery("");
                    window.location.href = `/jobs/${job.id}`;
                  }}
                >
                  <div className="flex flex-col">
                    <span>{job.title}</span>
                    <span className="text-xs text-muted-foreground">{job.company || job.category}</span>
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Skills">
            {skills
              .filter((skill) => 
                skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                skill.category.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .slice(0, 5)
              .map((skill) => (
                <CommandItem
                  key={skill.id}
                  onSelect={() => {
                    setOpen(false);
                    setSearchQuery("");
                    window.location.href = `/skills`;
                  }}
                >
                  <div className="flex flex-col">
                    <span>{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.category}</span>
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Quizzes">
            {quizzes
              .filter((quiz) => 
                quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                quiz.skillCategory.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .slice(0, 5)
              .map((quiz) => (
                <CommandItem
                  key={quiz.id}
                  onSelect={() => {
                    setOpen(false);
                    setSearchQuery("");
                    window.location.href = `/quizzes/${quiz.id}`;
                  }}
                >
                  <div className="flex flex-col">
                    <span>{quiz.title}</span>
                    <span className="text-xs text-muted-foreground">{quiz.difficulty} • {quiz.skillCategory}</span>
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Header;
