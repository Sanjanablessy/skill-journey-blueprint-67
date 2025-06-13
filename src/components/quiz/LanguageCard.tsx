
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Quiz } from '@/types';
import { LanguageProgress } from '@/utils/quizScoring';

interface LanguageCardProps {
  language: string;
  quizzes: Quiz[];
  progress: LanguageProgress;
  icon: React.ReactNode;
  onSelect: (language: string) => void;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ 
  language, 
  quizzes, 
  progress, 
  icon, 
  onSelect 
}) => {
  const basicQuiz = quizzes.find(q => q.difficulty === 'beginner');
  const intermediateQuiz = quizzes.find(q => q.difficulty === 'intermediate');
  const advancedQuiz = quizzes.find(q => q.difficulty === 'advanced');

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary"
      onClick={() => onSelect(language)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <CardTitle className="text-xl">{language}</CardTitle>
        </div>
        <CardDescription>
          Complete quiz series with {quizzes.length} difficulty levels
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="text-sm">
            <div className="font-medium mb-2">Available Levels:</div>
            <div className="space-y-1">
              {basicQuiz && (
                <div className="flex justify-between">
                  <span>Basic</span>
                  <Badge variant="outline" className="text-xs">
                    {basicQuiz.questions.length} questions
                  </Badge>
                </div>
              )}
              {intermediateQuiz && (
                <div className="flex justify-between">
                  <span>Intermediate</span>
                  <Badge variant="outline" className="text-xs">
                    {intermediateQuiz.questions.length} questions
                  </Badge>
                </div>
              )}
              {advancedQuiz && (
                <div className="flex justify-between">
                  <span>Advanced</span>
                  <Badge variant="outline" className="text-xs">
                    {advancedQuiz.questions.length} questions
                  </Badge>
                </div>
              )}
            </div>
          </div>
          
          <div className="pt-2">
            <div className="text-sm font-medium mb-1">Your Progress</div>
            <Progress value={0} className="h-2" />
            <div className="text-xs text-muted-foreground mt-1">
              Start with the Basic level
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageCard;
