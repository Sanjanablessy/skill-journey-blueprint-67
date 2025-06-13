
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Quiz } from '@/types';

interface CategoryCardProps {
  category: string;
  quizzes: Quiz[];
  icon: React.ReactNode;
  onSelect: (category: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, quizzes, icon, onSelect }) => {
  // Group quizzes by language within a category
  const groupQuizzesByLanguage = (quizzes: Quiz[]) => {
    return quizzes.reduce((acc, quiz) => {
      const language = quiz.title.split(' - ')[0];
      if (!acc[language]) {
        acc[language] = [];
      }
      acc[language].push(quiz);
      return acc;
    }, {} as { [key: string]: Quiz[] });
  };

  const groupedQuizzes = groupQuizzesByLanguage(quizzes);
  const languageCount = Object.keys(groupedQuizzes).length;
  const totalQuestions = quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0);

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary"
      onClick={() => onSelect(category)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <CardTitle className="text-xl">{category}</CardTitle>
        </div>
        <CardDescription>
          {languageCount} technologies • {totalQuestions} total questions
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="text-sm">
            <div className="font-medium mb-2">Available Technologies:</div>
            <div className="flex flex-wrap gap-1">
              {Object.keys(groupedQuizzes).map((language) => (
                <Badge key={language} variant="outline" className="text-xs">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="pt-2">
            <div className="text-sm font-medium mb-1">Coverage</div>
            <div className="text-xs text-muted-foreground">
              From beginner fundamentals to advanced concepts
            </div>
          </div>
          
          <Button className="w-full mt-4" variant="outline">
            Explore {category}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
