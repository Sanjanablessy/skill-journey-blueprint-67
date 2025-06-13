
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target } from 'lucide-react';
import { LanguageProgress } from '@/utils/quizScoring';

interface ProgressCardProps {
  language: string;
  progress: LanguageProgress;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ language, progress }) => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Your Progress</h3>
            <p className="text-muted-foreground">
              Current Level: <span className="font-medium">{progress.overallLevel}</span>
            </p>
          </div>
          <Trophy className="h-8 w-8 text-yellow-500" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-sm text-muted-foreground">Basic</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">0</div>
            <div className="text-sm text-muted-foreground">Intermediate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">0</div>
            <div className="text-sm text-muted-foreground">Advanced</div>
          </div>
        </div>
        
        <div className="space-y-2">
          {progress.recommendations.map((rec, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Target className="h-4 w-4 text-blue-500" />
              <span>{rec}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
