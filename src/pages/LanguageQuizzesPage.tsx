
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Quiz } from '@/types';
import LanguageQuizSelector from '@/components/LanguageQuizSelector';
import LanguageQuizTaker from '@/components/LanguageQuizTaker';
import { useToast } from '@/hooks/use-toast';

const LanguageQuizzesPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleQuizSelect = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleQuizComplete = (result: any) => {
    toast({
      title: "Quiz Completed!",
      description: `You scored ${result.percentage.toFixed(0)}% on ${result.quiz.title}`,
    });
    
    // Here you could save the result to localStorage or a backend
    console.log('Quiz result:', result);
  };

  const handleBackToSelection = () => {
    setSelectedQuiz(null);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (selectedQuiz) {
    return (
      <LanguageQuizTaker
        quiz={selectedQuiz}
        onComplete={handleQuizComplete}
        onBackToSelection={handleBackToSelection}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <Button 
          onClick={handleBackToHome}
          variant="outline"
          className="flex items-center gap-2 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>
      <LanguageQuizSelector onSelectQuiz={handleQuizSelect} />
    </div>
  );
};

export default LanguageQuizzesPage;
