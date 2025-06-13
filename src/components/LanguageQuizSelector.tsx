
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Quiz } from '@/types';
import { getLanguageProgress } from '@/utils/quizScoring';
import { languageQuizzes } from '@/data/languageQuizzes';
import { webTechnologyQuizzes } from '@/data/webTechnologyQuizzes';
import { databaseQuizzes } from '@/data/databaseQuizzes';
import QuizCard from './quiz/QuizCard';
import ProgressCard from './quiz/ProgressCard';
import { getLanguageIcon } from './quiz/QuizIcons';

interface LanguageQuizSelectorProps {
  onSelectQuiz: (quiz: Quiz) => void;
}

const LanguageQuizSelector: React.FC<LanguageQuizSelectorProps> = ({ onSelectQuiz }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Combine all quizzes into a single flat array
  const allQuizzes = [
    ...languageQuizzes,
    ...webTechnologyQuizzes,
    ...databaseQuizzes
  ];

  // Get language progress (for demo, using empty results)
  const getLanguageProgressDemo = (language: string) => {
    return getLanguageProgress(language, null, null, null);
  };

  // Group quizzes by language/technology
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

  const groupedQuizzes = groupQuizzesByLanguage(allQuizzes);

  // If a specific language is selected, show its quizzes
  if (selectedLanguage) {
    const languageQuizzes = groupedQuizzes[selectedLanguage] || [];
    const progress = getLanguageProgressDemo(selectedLanguage);
    
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <Button 
            onClick={() => setSelectedLanguage(null)}
            variant="outline"
            className="mb-4"
          >
            ← Back to All Technologies
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            {getLanguageIcon(selectedLanguage)}
            <h1 className="text-3xl font-bold">{selectedLanguage} Quizzes</h1>
          </div>
          
          <ProgressCard language={selectedLanguage} progress={progress} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {languageQuizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              onSelect={onSelectQuiz}
            />
          ))}
        </div>
      </div>
    );
  }

  // Main view showing all technologies
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Comprehensive Quiz System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Test your knowledge across programming languages, web technologies, and databases. 
          Progress from basic to advanced levels and track your improvement.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.entries(groupedQuizzes).map(([language, quizzes]) => {
          const progress = getLanguageProgressDemo(language);
          
          return (
            <div
              key={language}
              className="cursor-pointer group"
              onClick={() => setSelectedLanguage(language)}
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  {getLanguageIcon(language)}
                  <h3 className="text-xl font-semibold">{language}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">
                    {quizzes.length} quiz{quizzes.length !== 1 ? 'es' : ''} available
                  </div>
                  <div className="text-sm">
                    Current Level: <span className="font-medium">{progress.overallLevel}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="font-bold text-green-600">
                      {quizzes.filter(q => q.difficulty === 'beginner').length}
                    </div>
                    <div className="text-xs text-muted-foreground">Basic</div>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-600">
                      {quizzes.filter(q => q.difficulty === 'intermediate').length}
                    </div>
                    <div className="text-xs text-muted-foreground">Inter.</div>
                  </div>
                  <div>
                    <div className="font-bold text-red-600">
                      {quizzes.filter(q => q.difficulty === 'advanced').length}
                    </div>
                    <div className="text-xs text-muted-foreground">Adv.</div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  Start Learning
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageQuizSelector;
