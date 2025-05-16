
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAppContext } from "@/context/AppContext";

const QuizDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { quizzes } = useAppContext();
  
  const quiz = quizzes.find((q) => q.id === id);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  useEffect(() => {
    if (!quiz) navigate("/quizzes");
  }, [quiz, navigate]);
  
  if (!quiz) {
    return null;
  }
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  
  const handleAnswerSelect = (value: string) => {
    const answerIndex = parseInt(value);
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score
      let correctAnswers = 0;
      quiz.questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correctAnswer) {
          correctAnswers++;
        }
      });
      
      const finalScore = Math.round((correctAnswers / quiz.questions.length) * 100);
      setScore(finalScore);
      setIsQuizCompleted(true);
      setShowResults(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const getScoreMessage = () => {
    if (score >= 90) return "Excellent job! You have mastered this topic.";
    if (score >= 70) return "Good job! You have a solid understanding of this topic.";
    if (score >= 50) return "Not bad! You have a basic understanding of this topic.";
    return "There's room for improvement. Consider studying this topic more.";
  };
  
  return (
    <div className="container px-4 md:px-6 py-8 max-w-5xl">
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate("/quizzes")}>
          Back to Quizzes
        </Button>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <CardTitle className="text-2xl">{quiz.title}</CardTitle>
              <CardDescription className="text-base mt-1">
                {quiz.skillCategory}
              </CardDescription>
            </div>
            <Badge variant={
              quiz.difficulty === "beginner" ? "outline" :
              quiz.difficulty === "intermediate" ? "secondary" : "default"
            }>
              {quiz.difficulty}
            </Badge>
          </div>
        </CardHeader>
      </Card>
      
      {!isQuizCompleted ? (
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
              </CardTitle>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
          <CardContent className="pt-4">
            <h3 className="text-xl font-medium mb-4">{currentQuestion.question}</h3>
            <RadioGroup 
              value={selectedAnswers[currentQuestionIndex]?.toString() || ""} 
              onValueChange={handleAnswerSelect}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <label 
                    htmlFor={`option-${index}`} 
                    className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestionIndex] === undefined}
            >
              {currentQuestionIndex < quiz.questions.length - 1 ? "Next" : "Finish"}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <AlertDialog open={showResults} onOpenChange={setShowResults}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Quiz Results</AlertDialogTitle>
              <AlertDialogDescription>
                You scored {score}% on the {quiz.title} quiz.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="py-4">
              <div className="mb-4">
                <div className="h-4 w-full bg-gray-200 rounded-full">
                  <div 
                    className={`h-full rounded-full ${
                      score >= 70 ? "bg-green-500" : 
                      score >= 40 ? "bg-yellow-500" : 
                      "bg-red-500"
                    }`}
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-lg font-medium mb-2">{getScoreMessage()}</p>
              
              {score < 70 && (
                <div className="border-t mt-4 pt-4">
                  <h4 className="font-medium mb-2">Recommended Resources:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Online tutorials on {quiz.skillCategory}</li>
                    <li>Practice exercises</li>
                    <li>Review documentation</li>
                  </ul>
                </div>
              )}
            </div>
            <AlertDialogFooter>
              <AlertDialogAction asChild>
                <Button onClick={() => navigate("/quizzes")}>Back to Quizzes</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default QuizDetailPage;
