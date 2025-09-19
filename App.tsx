import React, { useState, createContext, useContext } from 'react';
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import SkillDiagnostic from './components/SkillDiagnostic';
import CareerHub from './components/CareerHub';
import InterviewPrep from './components/InterviewPrep';
import ResumeBuilder from './components/ResumeBuilder';
import type { Page, ResumeAnalysis, ImprovementPlan } from './types';

// --- App Context for Global State ---
interface IAppContext {
  analysis: ResumeAnalysis | null;
  setAnalysis: (analysis: ResumeAnalysis | null) => void;
  improvementPlan: ImprovementPlan | null;
  setImprovementPlan: (plan: ImprovementPlan | null) => void;
  activePage: Page;
  setActivePage: (page: Page) => void;
  coachContext: string | null;
  setCoachContext: (context: string | null) => void;
}

const AppContext = createContext<IAppContext | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [improvementPlan, setImprovementPlan] = useState<ImprovementPlan | null>(null);
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [coachContext, setCoachContext] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ analysis, setAnalysis, improvementPlan, setImprovementPlan, activePage, setActivePage, coachContext, setCoachContext }}>
      {children}
    </AppContext.Provider>
  );
};


// --- Main App Component ---
const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

const AppContent: React.FC = () => {
  const { activePage } = useAppContext();

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'resume-analyzer':
        return <ResumeAnalyzer />;
      case 'skill-diagnostic':
        return <SkillDiagnostic />;
      case 'career-hub':
        return <CareerHub />;
      case 'interview-prep':
        return <InterviewPrep />;
      case 'resume-builder':
        return <ResumeBuilder />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-dark-purple-bg font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;