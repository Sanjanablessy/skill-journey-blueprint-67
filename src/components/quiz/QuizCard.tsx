
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Quiz } from '@/types';

interface QuizCardProps {
  quiz: Quiz;
  onSelect: (quiz: Quiz) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onSelect }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">
            {quiz.title.split(' - ')[1]} Level
          </CardTitle>
          <Badge className={getDifficultyColor(quiz.difficulty)}>
            {quiz.difficulty}
          </Badge>
        </div>
        <CardDescription>{quiz.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {quiz.questions.length} Questions
            </span>
            <span>~15 minutes</span>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm font-medium">Quiz Covers:</div>
            <div className="text-sm text-muted-foreground">
              {quiz.difficulty === 'beginner' && "Basic syntax, fundamental concepts, core operations"}
              {quiz.difficulty === 'intermediate' && "Advanced concepts, problem-solving, best practices"}
              {quiz.difficulty === 'advanced' && "Expert topics, optimization, complex implementations"}
            </div>
          </div>
          
          <Button 
            onClick={() => onSelect(quiz)}
            className="w-full mt-4"
          >
            Start Quiz
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
