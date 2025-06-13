
import React, { useState, useEffect } from 'react';
import { Quiz, QuizQuestion } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, AlertCircle } from 'lucide-react';
import { calculateQuizResult, getLanguageTopics } from '@/utils/quizScoring';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState<any>(null);
  const [timeRemaining, setTimeRemaining] = useState(900); // 15 minutes
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [showExplanation, setShowExplanation] = useState(false);
  const [questionResults, setQuestionResults] = useState<{ [key: number]: { correct: boolean; explanation: string } }>({});

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

  const handleAnswerSelect = (value: string) => {
    const answerIndex = parseInt(value);
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: answerIndex
    });
    setShowExplanation(false);
  };

  const handleNext = () => {
    const selectedAnswer = userAnswers[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Store the result and explanation for this question
    setQuestionResults(prev => ({
      ...prev,
      [currentQuestionIndex]: {
        correct: isCorrect,
        explanation: currentQuestion.explanation
      }
    }));

    if (!isCorrect) {
      setShowExplanation(true);
      return;
    }

    proceedToNext();
  };

  const proceedToNext = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setShowExplanation(false);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setIsTimerActive(false);
    
    // Calculate score
    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
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
      answeredQuestions: Object.keys(userAnswers).length,
      totalQuestions: quiz.questions.length,
      questionResults: questionResults
    };

    setQuizResult(enhancedResult);
    setShowResults(true);
    onComplete(enhancedResult);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResults(false);
    setQuizResult(null);
    setTimeRemaining(900); // Reset to 15 minutes
    setIsTimerActive(true);
    setShowExplanation(false);
    setQuestionResults({});
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

            {/* Suggested Topics */}
            {quizResult.suggestedTopics && quizResult.suggestedTopics.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Topics to Focus On</h3>
                <div className="flex flex-wrap gap-2">
                  {quizResult.suggestedTopics.map((topic: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

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
            <span>{Object.keys(userAnswers).length} answered</span>
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
          <div className="space-y-4">
            <RadioGroup 
              value={userAnswers[currentQuestionIndex]?.toString() || ""} 
              onValueChange={handleAnswerSelect}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="text-base cursor-pointer flex-1 p-2 rounded hover:bg-muted/50"
                  >
                    <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Show explanation if answer is wrong */}
            {showExplanation && questionResults[currentQuestionIndex] && (
              <Alert className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Explanation:</strong> {questionResults[currentQuestionIndex].explanation}
                </AlertDescription>
              </Alert>
            )}
          </div>
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
          
          {showExplanation ? (
            <Button onClick={proceedToNext}>
              Continue
            </Button>
          ) : currentQuestionIndex === quiz.questions.length - 1 ? (
            <Button 
              onClick={handleSubmit}
              disabled={userAnswers[currentQuestionIndex] === undefined}
            >
              Submit Quiz
            </Button>
          ) : (
            <Button 
              onClick={handleNext}
              disabled={userAnswers[currentQuestionIndex] === undefined}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageQuizTaker;
