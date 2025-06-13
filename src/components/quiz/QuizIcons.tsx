
import React from 'react';
import { BookOpen, Code, Database, Cpu, Globe, Server } from 'lucide-react';

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Programming Languages':
      return <Cpu className="h-6 w-6" />;
    case 'Web Technologies':
      return <Globe className="h-6 w-6" />;
    case 'Database Technologies':
      return <Server className="h-6 w-6" />;
    default:
      return <BookOpen className="h-6 w-6" />;
  }
};

export const getLanguageIcon = (language: string) => {
  switch (language.toLowerCase()) {
    case 'html':
    case 'css':
    case 'javascript':
      return <Code className="h-6 w-6" />;
    case 'sql':
    case 'nosql':
      return <Database className="h-6 w-6" />;
    default:
      return <BookOpen className="h-6 w-6" />;
  }
};
