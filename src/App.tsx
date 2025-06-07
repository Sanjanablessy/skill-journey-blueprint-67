
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import JobsPage from "@/pages/JobsPage";
import JobDetailPage from "@/pages/JobDetailPage";
import SkillsPage from "@/pages/SkillsPage";
import QuizzesPage from "@/pages/QuizzesPage";
import QuizDetailPage from "@/pages/QuizDetailPage";
import GoalsPage from "@/pages/GoalsPage";
import AuthPage from "@/pages/AuthPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/jobs" element={<JobsPage />} />
                  <Route path="/jobs/:id" element={<JobDetailPage />} />
                  <Route path="/skills" element={<SkillsPage />} />
                  <Route path="/quizzes" element={<QuizzesPage />} />
                  <Route path="/quizzes/:id" element={<QuizDetailPage />} />
                  <Route path="/goals" element={<GoalsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </AppProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
