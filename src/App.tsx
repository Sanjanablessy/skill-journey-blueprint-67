import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import JobsPage from './pages/JobsPage';
import QuizDetailPage from './pages/QuizDetailPage';
import ResourcesPage from './pages/ResourcesPage';
import GoalsPage from './pages/GoalsPage';
import LanguageQuizzesPage from './pages/LanguageQuizzesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/quizzes/:id" element={<QuizDetailPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/quizzes" element={<LanguageQuizzesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
