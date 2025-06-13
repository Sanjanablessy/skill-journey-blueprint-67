
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Quiz } from '@/types';
import { getLanguageProgress } from '@/utils/quizScoring';
import { languageQuizzes } from '@/data/languageQuizzes';
import { webTechnologyQuizzes } from '@/data/webTechnologyQuizzes';
import { databaseQuizzes } from '@/data/databaseQuizzes';
import CategoryCard from './quiz/CategoryCard';
import LanguageCard from './quiz/LanguageCard';
import QuizCard from './quiz/QuizCard';
import ProgressCard from './quiz/ProgressCard';
import { getCategoryIcon, getLanguageIcon } from './quiz/QuizIcons';

interface LanguageQuizSelectorProps {
  onSelectQuiz: (quiz: Quiz) => void;
}

const LanguageQuizSelector: React.FC<LanguageQuizSelectorProps> = ({ onSelectQuiz }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  // All quiz categories
  const quizCategories = {
    'Programming Languages': languageQuizzes,
    'Web Technologies': webTechnologyQuizzes,
    'Database Technologies': databaseQuizzes
  };

  // Get language progress (for demo, using empty results)
  const getLanguageProgressDemo = (language: string) => {
    return getLanguageProgress(language, null, null, null);
  };

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

  // If a specific language is selected, show its quizzes
  if (selectedLanguage && selectedCategory) {
    const categoryQuizzes = quizCategories[selectedCategory as keyof typeof quizCategories];
    const groupedQuizzes = groupQuizzesByLanguage(categoryQuizzes);
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
            ← Back to {selectedCategory}
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

  // If a category is selected, show languages in that category
  if (selectedCategory) {
    const categoryQuizzes = quizCategories[selectedCategory as keyof typeof quizCategories];
    const groupedQuizzes = groupQuizzesByLanguage(categoryQuizzes);
    
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <Button 
            onClick={() => setSelectedCategory(null)}
            variant="outline"
            className="mb-4"
          >
            ← Back to Categories
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            {getCategoryIcon(selectedCategory)}
            <h1 className="text-3xl font-bold">{selectedCategory}</h1>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Object.entries(groupedQuizzes).map(([language, quizzes]) => {
            const progress = getLanguageProgressDemo(language);
            
            return (
              <LanguageCard
                key={language}
                language={language}
                quizzes={quizzes}
                progress={progress}
                icon={getLanguageIcon(language)}
                onSelect={setSelectedLanguage}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Main category selection view
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Comprehensive Quiz System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Test your knowledge across programming languages, web technologies, and databases. 
          Progress from basic to advanced levels and track your improvement.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {Object.entries(quizCategories).map(([category, quizzes]) => (
          <CategoryCard
            key={category}
            category={category}
            quizzes={quizzes}
            icon={getCategoryIcon(category)}
            onSelect={setSelectedCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageQuizSelector;
