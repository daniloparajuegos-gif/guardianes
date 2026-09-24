import React from 'react';
import { GuardianProvider, useGuardian } from './context/GuardianContext';
import { Navbar } from './components/Navbar';
import { HeroScreen } from './components/HeroScreen';
import { AdventureMap } from './components/AdventureMap';
import { MissionView } from './components/MissionView';
import { GuardianPassport } from './components/GuardianPassport';
import { TeacherDashboard } from './components/TeacherDashboard';
import { LoginScreen } from './components/LoginScreen';

const MainContent: React.FC = () => {
  const { currentView, isLoggedIn } = useGuardian();

  // Si no ha iniciado sesión y quiere acceder a misión o pasaporte personal, requerir login
  const renderView = () => {
    if (currentView === 'login') return <LoginScreen />;
    if (currentView === 'teacher') return <TeacherDashboard />;
    if (!isLoggedIn && (currentView === 'mission' || currentView === 'passport')) {
      return <LoginScreen />;
    }
    if (currentView === 'welcome') return <HeroScreen />;
    if (currentView === 'map') return <AdventureMap />;
    if (currentView === 'mission') return <MissionView />;
    if (currentView === 'passport') return <GuardianPassport />;
    return <HeroScreen />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5faf5] text-[#132a13] selection:bg-emerald-500 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1">
        {renderView()}
      </main>

      {/* Pie de página institucional claro y profesional */}
      <footer className="border-t border-emerald-200/80 bg-white/90 py-6 text-xs text-forest-700 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-display font-bold text-forest-900 tracking-wide">
              GUARDIANES DEL BOSQUE
            </span>
            <span className="mx-2 text-emerald-400">•</span>
            <span className="font-medium text-forest-700">Estrategia Gamificada de Comprensión Lectora</span>
          </div>
          <div className="text-[11px] text-forest-600 font-serif">
            Contexto ambiental de Magangué, La Mojana y región Caribe • Leer • Comprender • Reflexionar • Actuar
          </div>
        </div>
      </footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <GuardianProvider>
      <MainContent />
    </GuardianProvider>
  );
};

export default App;
