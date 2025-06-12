
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import JobsPage from './pages/JobsPage';
import QuizDetailPage from './pages/QuizDetailPage';
import GoalsPage from './pages/GoalsPage';
import TakeYourQuizzesPage from './pages/LanguageQuizzesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/quizzes/:id" element={<QuizDetailPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/take-your-quizzes" element={<TakeYourQuizzesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
