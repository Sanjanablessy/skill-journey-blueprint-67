
import React, { useState, useEffect } from 'react';
import { Quiz, QuizQuestion } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Check, X } from 'lucide-react';
import { calculateQuizResult, getLanguageTopics } from '@/utils/quizScoring';

interface LanguageQuizTakerProps {
  quiz: Quiz;
  onComplete: (result: any) => void;
  onBackToSelection: () => void;
}

const LanguageQuizTaker: React.FC<LanguageQuizTakerProps> = ({ 
  quiz, 
  onComplete, 
  onBackToSelection 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState<any>(null);
  const [timeRemaining, setTimeRemaining] = useState(600);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  // Timer effect
  useEffect(() => {
    if (isTimerActive && timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !showResults) {
      handleSubmit();
    }
  }, [timeRemaining, isTimerActive, showResults]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answerIndex
    });
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    setShowExplanation(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setIsTimerActive(false);
    
    // Calculate score
    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const result = calculateQuizResult(correctAnswers, quiz.questions.length, quiz.difficulty);
    
    // Add language-specific recommendations
    const language = quiz.title.split(' - ')[0];
    const topics = getLanguageTopics(language, quiz.difficulty);
    
    const enhancedResult = {
      ...result,
      quiz: quiz,
      language: language,
      suggestedTopics: topics,
      answeredQuestions: Object.keys(selectedAnswers).length,
      totalQuestions: quiz.questions.length
    };

    setQuizResult(enhancedResult);
    setShowResults(true);
    onComplete(enhancedResult);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizResult(null);
    setTimeRemaining(600);
    setIsTimerActive(true);
  };

  if (showResults && quizResult) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              {quizResult.level === 'high' ? (
                <CheckCircle className="h-8 w-8 text-green-500" />
              ) : (
                <XCircle className="h-8 w-8 text-yellow-500" />
              )}
              Quiz Completed!
            </CardTitle>
            <CardDescription>
              {quiz.title} - Results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score Display */}
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">
                {quizResult.percentage.toFixed(0)}%
              </div>
              <div className="text-lg text-muted-foreground">
                {quizResult.score} out of {quiz.questions.length} correct
              </div>
              <Badge 
                variant={quizResult.level === 'high' ? 'default' : quizResult.level === 'medium' ? 'secondary' : 'outline'}
                className="mt-2"
              >
                {quizResult.level.toUpperCase()} PERFORMANCE
              </Badge>
            </div>

            {/* Feedback */}
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Feedback</h3>
              <p className="text-muted-foreground">{quizResult.feedback}</p>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold mb-2 text-blue-900">Next Steps</h3>
              <p className="text-blue-800">{quizResult.nextStep}</p>
            </div>

            {/* Recommendations */}
            <div>
              <h3 className="font-semibold mb-3">Recommendations for Improvement</h3>
              <div className="grid gap-2">
                {quizResult.recommendations.map((rec: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                onClick={resetQuiz}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Retake Quiz
              </Button>
              <Button 
                onClick={onBackToSelection}
                className="flex items-center gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Back to Quizzes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">{quiz.title}</h1>
            <p className="text-muted-foreground">{quiz.description}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {formatTime(timeRemaining)}
            </div>
            <div className="text-sm text-muted-foreground">
              Time Remaining
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
            <span>{Object.keys(selectedAnswers).length} answered</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswers[currentQuestionIndex]?.toString()}
            onValueChange={(value) => handleAnswerSelect(parseInt(value))}
            disabled={showExplanation}
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className={`flex items-center space-x-2 p-3 rounded-lg hover:bg-muted ${
                showExplanation ? (
                  index === currentQuestion.correctAnswer ? 'bg-green-100 border-green-300 border' : 
                  index === selectedAnswers[currentQuestionIndex] && index !== currentQuestion.correctAnswer ? 'bg-red-100 border-red-300 border' : ''
                ) : ''
              }`}>
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer flex items-center gap-2">
                  {option}
                  {showExplanation && index === currentQuestion.correctAnswer && (
                    <Check className="h-4 w-4 text-green-600" />
                  )}
                  {showExplanation && index === selectedAnswers[currentQuestionIndex] && index !== currentQuestion.correctAnswer && (
                    <X className="h-4 w-4 text-red-600" />
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Explanation */}
          {showExplanation && currentQuestion.explanation && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">Explanation:</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <span className="font-medium text-green-700">✓ Why this is correct: </span>
                  <span className="text-green-800">{currentQuestion.explanation.correct}</span>
                </div>
                <div className="p-3 bg-red-50 rounded border border-red-200">
                  <span className="font-medium text-red-700">✗ Why others are wrong:</span>
                  <ul className="mt-2 space-y-1">
                    {currentQuestion.explanation.why_others_wrong.map((reason, idx) => (
                      <li key={idx} className="text-red-800 ml-4">• {reason}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          variant="outline"
        >
          Previous
        </Button>
        
        <div className="flex gap-2">
          <Button onClick={onBackToSelection} variant="outline">
            Exit Quiz
          </Button>
          
          {showExplanation && (
            currentQuestionIndex === quiz.questions.length - 1 ? (
              <Button onClick={handleSubmit}>
                Submit Quiz
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next Question
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageQuizTaker;
