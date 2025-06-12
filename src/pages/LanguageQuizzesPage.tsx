
import React, { useState } from 'react';
import { Quiz } from '@/types';
import LanguageQuizSelector from '@/components/LanguageQuizSelector';
import LanguageQuizTaker from '@/components/LanguageQuizTaker';
import { useToast } from '@/hooks/use-toast';

const TakeYourQuizzesPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const { toast } = useToast();

  const handleQuizSelect = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleQuizComplete = (result: any) => {
    toast({
      title: "Quiz Completed!",
      description: `You scored ${result.percentage.toFixed(0)}% on ${result.quiz.title}`,
    });
    
    console.log('Quiz result:', result);
  };

  const handleBackToSelection = () => {
    setSelectedQuiz(null);
  };

  if (selectedQuiz) {
    return (
      <LanguageQuizTaker
        quiz={selectedQuiz}
        onComplete={handleQuizComplete}
        onBackToSelection={handleBackToSelection}
      />
    );
  }

  return <LanguageQuizSelector onSelectQuiz={handleQuizSelect} />;
};

export default TakeYourQuizzesPage;
