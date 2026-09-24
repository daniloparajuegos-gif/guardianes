import React, { useState } from 'react';
import { useGuardian } from '../context/GuardianContext';
import { 
  Compass, 
  BookOpen, 
  Map, 
  Volume2, 
  VolumeX, 
  GraduationCap, 
  ChevronDown,
  LogOut,
  LogIn
} from 'lucide-react';
import { StudentProfileModal } from './StudentProfileModal';

export const Navbar: React.FC = () => {
  const { 
    activeProfile, 
    currentView, 
    setCurrentView, 
    soundEnabled, 
    toggleSound,
    isLoggedIn,
    logout
  } = useGuardian();

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const completedCount = activeProfile?.completedMissionIds.length || 0;
  const progressPercent = Math.round((completedCount / 15) * 100);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-200/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo y título */}
          <div 
            onClick={() => setCurrentView(isLoggedIn ? 'welcome' : 'login')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-forest-600 border border-emerald-400/40 flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-amber-200 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl text-forest-900 tracking-wider">
                  GUARDIANES <span className="text-emerald-700 font-serif">DEL BOSQUE</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full">
                  7° GRADO
                </span>
              </div>
              <p className="text-[11px] text-forest-600 font-sans tracking-tight hidden md:block">
                Estrategia Gamificada de Comprensión Lectora • Magangué y La Mojana
              </p>
            </div>
          </div>

          {/* Navegación Principal Clara */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            <button
              onClick={() => setCurrentView('map')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                currentView === 'map'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                  : 'text-forest-700 hover:text-emerald-900 hover:bg-emerald-50'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>Mapa del Territorio</span>
            </button>

            <button
              onClick={() => setCurrentView('passport')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                currentView === 'passport'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                  : 'text-forest-700 hover:text-emerald-900 hover:bg-emerald-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Pasaporte</span>
              {activeProfile && activeProfile.earnedBadges.length > 0 && (
                <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  currentView === 'passport'
                    ? 'bg-amber-400 text-forest-950'
                    : 'bg-amber-100 text-amber-800 border border-amber-300'
                }`}>
                  {activeProfile.earnedBadges.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setCurrentView('teacher')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                currentView === 'teacher'
                  ? 'bg-amber-500 text-forest-950 shadow-sm shadow-amber-500/30'
                  : 'text-forest-700 hover:text-amber-800 hover:bg-amber-50 border border-amber-200/60'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>Panel Docente</span>
            </button>
          </nav>

          {/* Controles de la derecha: Sonido, Perfil de Estudiante / Iniciar o Cerrar Sesión */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Control de Audio Ambiental */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Silenciar audio ambiental" : "Activar sonido ambiental suave"}
              className={`p-2 rounded-xl transition-colors border ${
                soundEnabled 
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300 shadow-xs' 
                  : 'bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200 hover:text-slate-800'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {isLoggedIn && activeProfile ? (
              <div className="flex items-center gap-2">
                {/* Perfil del Estudiante */}
                <button
                  onClick={() => setIsProfileModalOpen(true)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white border border-emerald-200 hover:border-emerald-400 transition-all text-left shadow-xs hover:shadow-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-forest-500 flex items-center justify-center text-amber-200 font-bold text-xs shadow-xs">
                    {activeProfile.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-forest-900 max-w-[110px] truncate">
                        {activeProfile.name}
                      </span>
                      <ChevronDown className="w-3 h-3 text-forest-500 group-hover:text-emerald-700 transition-colors" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-forest-600">
                      <span>{activeProfile.grade}</span>
                      <span className="text-emerald-400">•</span>
                      <span className="text-emerald-700 font-bold">{completedCount}/15 mis.</span>
                    </div>
                  </div>
                </button>

                {/* Botón Salir / Cerrar Sesión */}
                <button
                  onClick={logout}
                  title="Cerrar sesión de este estudiante para que ingrese otro compañero"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200 hover:border-rose-300 transition-all flex items-center gap-1.5 text-xs font-bold"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden lg:inline">Salir</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCurrentView('login')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span>Ingresar</span>
              </button>
            )}
          </div>

        </div>

        {/* Barra de progreso de aventura vibrante */}
        <div className="h-1.5 w-full bg-emerald-100 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-500 transition-all duration-700 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Modal de perfil de estudiante */}
      <StudentProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </>
  );
};
