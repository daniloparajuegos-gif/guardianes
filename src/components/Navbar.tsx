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
  LogIn,
  Sparkles
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
    cloudConnected,
    logout,
    activeMissionId
  } = useGuardian();

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const completedCount = activeProfile?.completedMissionIds.length || 0;
  const progressPercent = Math.round((completedCount / 15) * 100);

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-200/90 shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-16 py-2 flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Logo y título */}
          <div 
            onClick={() => setCurrentView(isLoggedIn ? 'welcome' : 'login')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-forest-600 border border-emerald-400/40 flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform shrink-0">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
                <span className="font-display font-bold text-xs sm:text-base lg:text-xl text-forest-900 tracking-wider truncate">
                  GUARDIANES <span className="text-emerald-700 font-serif">DEL BOSQUE</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full shrink-0">
                  7° GRADO
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <p className="text-[11px] text-forest-600 font-sans tracking-tight hidden md:block">
                  Estrategia Gamificada • Magangué y La Mojana
                </p>
                {cloudConnected && (
                  <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full shrink-0" title="Conectado a la base de datos en la nube (Google Firebase)">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Nube Activa
                  </span>
                )}
              </div>
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
              onClick={() => setCurrentView('collection')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                currentView === 'collection'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                  : 'text-forest-700 hover:text-emerald-900 hover:bg-emerald-50'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8v13H3V8"></path>
                <path d="M1 3h22v5H1z"></path>
                <path d="M10 12h4"></path>
              </svg>
              <span>Colección</span>
              {activeProfile && activeProfile.collection && Object.keys(activeProfile.collection).length > 0 && (
                <span className={`px-1.5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  currentView === 'collection'
                    ? 'bg-amber-400 text-forest-950'
                    : 'bg-amber-100 text-amber-800 border border-amber-300'
                }`}>
                  {Object.keys(activeProfile.collection).length}/30
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
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Control de Audio Ambiental */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Silenciar audio ambiental" : "Activar sonido ambiental suave"}
              className={`p-1.5 sm:p-2 rounded-xl transition-colors border ${
                soundEnabled 
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300 shadow-xs' 
                  : 'bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200 hover:text-slate-800'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            {isLoggedIn && activeProfile ? (
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Perfil del Estudiante */}
                <button
                  onClick={() => setIsProfileModalOpen(true)}
                  className="flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-xl bg-white border border-emerald-200 hover:border-emerald-400 transition-all text-left shadow-xs hover:shadow-sm group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-forest-500 flex items-center justify-center text-amber-200 font-bold text-xs shadow-xs">
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
                  className="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200 hover:border-rose-300 transition-all flex items-center gap-1.5 text-xs font-bold"
                >
                  <LogOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden lg:inline">Salir</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCurrentView('login')}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
              >
                <LogIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Ingresar</span>
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

      {/* Barra de Navegación Inferior para Dispositivos Móviles (Táctil y Cómoda) */}
      <nav 
        aria-label="Navegación móvil"
        className="md:hidden fixed bottom-0 left-0 right-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-emerald-200/90 py-1 px-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center justify-around gap-1 w-full max-w-lg mx-auto">
          {isLoggedIn ? (
            <>
              {/* Mapa */}
              <button
                type="button"
                onClick={() => setCurrentView('map')}
                className={`flex-1 py-1 px-1 rounded-xl flex flex-col items-center gap-0.5 text-[10px] font-bold transition-all ${
                  currentView === 'map'
                    ? 'text-emerald-700 bg-emerald-50/80 font-black'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                <div className={`p-1 rounded-lg ${currentView === 'map' ? 'bg-emerald-600 text-white shadow-xs' : ''}`}>
                  <Map className="w-4 h-4" />
                </div>
                <span className="truncate">Mapa</span>
              </button>

              {/* Misión actual */}
              <button
                type="button"
                onClick={() => setCurrentView('mission')}
                className={`flex-1 py-1 px-1 rounded-xl flex flex-col items-center gap-0.5 text-[10px] font-bold transition-all ${
                  currentView === 'mission'
                    ? 'text-emerald-700 bg-emerald-50/80 font-black'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                <div className={`p-1 rounded-lg ${currentView === 'mission' ? 'bg-emerald-600 text-white shadow-xs' : ''}`}>
                  <Compass className="w-4 h-4" />
                </div>
                <span className="truncate">Misión {activeMissionId || 1}</span>
              </button>

              {/* Pasaporte */}
              <button
                type="button"
                onClick={() => setCurrentView('passport')}
                className={`flex-1 py-1 px-1 rounded-xl flex flex-col items-center gap-0.5 text-[10px] font-bold transition-all relative ${
                  currentView === 'passport'
                    ? 'text-emerald-700 bg-emerald-50/80 font-black'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                <div className={`p-1 rounded-lg ${currentView === 'passport' ? 'bg-emerald-600 text-white shadow-xs' : ''}`}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="truncate">Pasaporte</span>
                {activeProfile && activeProfile.earnedBadges.length > 0 && (
                  <span className="absolute top-0.5 right-1 w-4 h-4 rounded-full bg-amber-400 text-forest-950 text-[9px] font-black flex items-center justify-center shadow-xs">
                    {activeProfile.earnedBadges.length}
                  </span>
                )}
              </button>

              {/* Colección */}
              <button
                type="button"
                onClick={() => setCurrentView('collection')}
                className={`flex-1 py-1 px-1 rounded-xl flex flex-col items-center gap-0.5 text-[10px] font-bold transition-all relative ${
                  currentView === 'collection'
                    ? 'text-emerald-700 bg-emerald-50/80 font-black'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                <div className={`p-1 rounded-lg ${currentView === 'collection' ? 'bg-emerald-600 text-white shadow-xs' : ''}`}>
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="truncate">Colección</span>
                {activeProfile && activeProfile.collection && Object.keys(activeProfile.collection).length > 0 && (
                  <span className="absolute top-0.5 right-0.5 px-1 rounded-full bg-amber-400 text-forest-950 text-[9px] font-black flex items-center justify-center shadow-xs">
                    {Object.keys(activeProfile.collection).length}
                  </span>
                )}
              </button>

              {/* Panel Docente */}
              <button
                type="button"
                onClick={() => setCurrentView('teacher')}
                className={`flex-1 py-1 px-1 rounded-xl flex flex-col items-center gap-0.5 text-[10px] font-bold transition-all ${
                  currentView === 'teacher'
                    ? 'text-amber-900 bg-amber-50/80 font-black'
                    : 'text-slate-600 hover:text-amber-800'
                }`}
              >
                <div className={`p-1 rounded-lg ${currentView === 'teacher' ? 'bg-amber-500 text-white shadow-xs' : ''}`}>
                  <GraduationCap className="w-4 h-4 text-amber-600 group-hover:text-amber-700" />
                </div>
                <span className="truncate">Docente</span>
              </button>
            </>
          ) : (
            <>
              {/* Inicio */}
              <button
                type="button"
                onClick={() => setCurrentView('welcome')}
                className={`flex-1 py-1.5 px-2 rounded-xl flex flex-col items-center gap-0.5 text-[11px] font-bold transition-all ${
                  currentView === 'welcome'
                    ? 'text-emerald-700 bg-emerald-50 font-black'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Inicio</span>
              </button>

              {/* Ingresar */}
              <button
                type="button"
                onClick={() => setCurrentView('login')}
                className={`flex-1 py-1.5 px-2 rounded-xl flex flex-col items-center gap-0.5 text-[11px] font-bold transition-all ${
                  currentView === 'login'
                    ? 'text-emerald-700 bg-emerald-50 font-black'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>Ingresar</span>
              </button>

              {/* Panel Docente */}
              <button
                type="button"
                onClick={() => setCurrentView('teacher')}
                className={`flex-1 py-1.5 px-2 rounded-xl flex flex-col items-center gap-0.5 text-[11px] font-bold transition-all ${
                  currentView === 'teacher'
                    ? 'text-amber-900 bg-amber-50 font-black'
                    : 'text-slate-600 hover:text-amber-800'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>Docente</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
