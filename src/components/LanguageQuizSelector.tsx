
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Code, Database, Trophy, Target, ArrowRight, Globe, Cpu, Server } from 'lucide-react';
import { Quiz } from '@/types';
import { getLanguageProgress, LanguageProgress } from '@/utils/quizScoring';
import { languageQuizzes } from '@/data/languageQuizzes';
import { webTechnologyQuizzes } from '@/data/webTechnologyQuizzes';
import { databaseQuizzes } from '@/data/databaseQuizzes';

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
  const getLanguageProgressDemo = (language: string): LanguageProgress => {
    return getLanguageProgress(language, null, null, null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Cpu className="h-6 w-6" />;
      case 'Web Technologies':
        return <Globe className="h-6 w-6" />;
      case 'Database Technologies':
        return <Server className="h-6 w-6" />;
      default:
        return <BookOpen className="h-6 w-6" />;
    }
  };

  const getLanguageIcon = (language: string) => {
    switch (language.toLowerCase()) {
      case 'html':
      case 'css':
      case 'javascript':
        return <Code className="h-6 w-6" />;
      case 'sql':
      case 'nosql':
        return <Database className="h-6 w-6" />;
      default:
        return <BookOpen className="h-6 w-6" />;
    }
  };

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
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {languageQuizzes.map((quiz) => (
            <Card key={quiz.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    <span>~{Math.ceil(quiz.questions.length * 0.5)} minutes</span>
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
                    onClick={() => onSelectQuiz(quiz)}
                    className="w-full mt-4"
                  >
                    Start Quiz
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
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
            const basicQuiz = quizzes.find(q => q.difficulty === 'beginner');
            const intermediateQuiz = quizzes.find(q => q.difficulty === 'intermediate');
            const advancedQuiz = quizzes.find(q => q.difficulty === 'advanced');
            
            return (
              <Card 
                key={language} 
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary"
                onClick={() => setSelectedLanguage(language)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    {getLanguageIcon(language)}
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
        {Object.entries(quizCategories).map(([category, quizzes]) => {
          const groupedQuizzes = groupQuizzesByLanguage(quizzes);
          const languageCount = Object.keys(groupedQuizzes).length;
          const totalQuestions = quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0);
          
          return (
            <Card 
              key={category} 
              className="overflow-hidden hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary"
              onClick={() => setSelectedCategory(category)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  {getCategoryIcon(category)}
                  <CardTitle className="text-xl">{category}</CardTitle>
                </div>
                <CardDescription>
                  {languageCount} technologies • {totalQuestions} total questions
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium mb-2">Available Technologies:</div>
                    <div className="flex flex-wrap gap-1">
                      {Object.keys(groupedQuizzes).map((language) => (
                        <Badge key={language} variant="outline" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-sm font-medium mb-1">Coverage</div>
                    <div className="text-xs text-muted-foreground">
                      From beginner fundamentals to advanced concepts
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    Explore {category}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageQuizSelector;
