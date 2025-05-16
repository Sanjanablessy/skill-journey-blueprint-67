
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            TechPathfinder
          </span>
        </Link>
        <nav className="ml-auto flex gap-1 sm:gap-2 md:gap-4 items-center">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for jobs, skills..."
              className="w-full pl-8 bg-muted/30 border-muted-foreground/20 md:w-[200px] lg:w-[300px]"
            />
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
    </header>
  );
};

export default Header;
