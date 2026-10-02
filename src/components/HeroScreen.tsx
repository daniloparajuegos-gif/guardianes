import React from 'react';
import { useGuardian } from '../context/GuardianContext';
import { PEDAGOGICAL_METADATA } from '../data/pedagogicalData';
import { 
  MapPin, 
  ArrowRight, 
  Eye, 
  Search, 
  Scale, 
  BookOpen
} from 'lucide-react';

export const HeroScreen: React.FC = () => {
  const { setCurrentView, activeProfile } = useGuardian();

  const hasStarted = activeProfile.completedMissionIds.length > 0;

  return (
    <div className="w-full relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f7fbf7] via-emerald-50/50 to-[#eef7ee]">
      
      {/* Elementos visuales luminosos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -right-32 w-[450px] h-[450px] bg-amber-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-[550px] h-96 bg-sky-200/30 rounded-full blur-3xl" />
        
        {/* Patrón de mapa de fondo tenue */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: `radial-gradient(#2d6a4f 1.5px, transparent 1.5px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="w-full relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-12 flex-1 flex flex-col justify-center min-w-0">
        
        {/* Insignia de contexto territorial */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-300 text-forest-800 text-xs font-semibold shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>{PEDAGOGICAL_METADATA.context}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-900 text-xs font-bold">
            <span>{PEDAGOGICAL_METADATA.grade}</span>
            <span className="text-emerald-400">•</span>
            <span className="text-amber-700">{PEDAGOGICAL_METADATA.slogan}</span>
          </div>
        </div>

        {/* Título Principal de Alto Impacto */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-forest-900 tracking-tight leading-tight">
            GUARDIANES <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-forest-600 to-amber-600 font-serif">
              DEL BOSQUE
            </span>
          </h1>

          <p className="text-xl sm:text-3xl text-emerald-800 font-serif font-medium italic max-w-2xl leading-snug">
            Aprende a leer el territorio y los textos que hablan de él.
          </p>

          <p className="text-sm sm:text-base text-forest-800 font-sans max-w-3xl leading-relaxed pt-1">
            El territorio enfrenta profundas situaciones ambientales. Como Guardián, tu misión no es solo responder preguntas: deberás observar, leer atentamente, encontrar pistas, inferir causas y consecuencias, argumentar y tomar decisiones para proteger los ecosistemas de Magangué y La Mojana.
          </p>
        </div>

        {/* Botones de Acción Vivos y Luminosos */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={() => setCurrentView('map')}
            className="group px-8 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-display font-bold text-sm sm:text-base tracking-wider rounded-2xl shadow-lg shadow-emerald-700/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
          >
            <span>{hasStarted ? 'CONTINUAR LA AVENTURA' : 'COMENZAR LA AVENTURA'}</span>
            <ArrowRight className="w-5 h-5 text-amber-100 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => setCurrentView('passport')}
            className="px-6 py-4 bg-white hover:bg-emerald-50 text-forest-800 border-2 border-emerald-300 hover:border-emerald-500 rounded-2xl text-sm font-bold tracking-wide transition-all shadow-xs flex items-center justify-center gap-2.5"
          >
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Ver Pasaporte del Guardián</span>
          </button>
        </div>

        {/* Tarjetas de Introducción Narrativa Claras y Vívidas */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          
          {/* Tarjeta 1: Nivel 1 Literal */}
          <div className="bg-white border-2 border-emerald-200/90 rounded-2xl p-6 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md relative group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-700">
                  Nivel 1 • Comprensión Literal
                </span>
                <h3 className="font-display font-bold text-base text-forest-900">
                  Los ojos del Guardián
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-forest-700 leading-relaxed">
              Identificar información explícita en los textos: quién, qué, dónde, datos y hechos del caso ambiental.
            </p>
            <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>Insignia: Guardián Observador</span>
              <span className="bg-emerald-100 px-2 py-0.5 rounded text-emerald-900 font-mono">3 preguntas</span>
            </div>
          </div>

          {/* Tarjeta 2: Nivel 2 Inferencial */}
          <div className="bg-white border-2 border-sky-200/90 rounded-2xl p-6 hover:border-sky-500 transition-all duration-300 shadow-sm hover:shadow-md relative group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-700">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-sky-700">
                  Nivel 2 • Comprensión Inferencial
                </span>
                <h3 className="font-display font-bold text-base text-forest-900">
                  Las pistas ocultas
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-forest-700 leading-relaxed">
              Relacionar pistas, deducir información no explícita y establecer cadenas de causas y consecuencias en el hábitat.
            </p>
            <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-semibold text-sky-800">
              <span>Insignia: Guardián Rastreador</span>
              <span className="bg-sky-100 px-2 py-0.5 rounded text-sky-900 font-mono">3 preguntas</span>
            </div>
          </div>

          {/* Tarjeta 3: Nivel 3 Crítico */}
          <div className="bg-white border-2 border-amber-200/90 rounded-2xl p-6 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md relative group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-amber-700">
                  Nivel 3 • Comprensión Crítica
                </span>
                <h3 className="font-display font-bold text-base text-forest-900">
                  La decisión del Guardián
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-forest-700 leading-relaxed">
              Valorar situaciones éticas, argumentar posturas y proponer acciones de cuidado utilizando evidencias del texto.
            </p>
            <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>Insignia: Guardián del Equilibrio</span>
              <span className="bg-amber-100 px-2 py-0.5 rounded text-amber-900 font-mono">3 preguntas</span>
            </div>
          </div>

        </div>

      </div>

      {/* Franja de resumen clara */}
      <div className="w-full relative z-10 border-t border-emerald-200/80 bg-white/80 backdrop-blur-sm py-4">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-forest-700 font-medium">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span>14 Misiones territoriales + Misión Final de Síntesis</span>
            <span className="text-emerald-300">•</span>
            <span>15 Desafíos con generación de evidencias</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Adaptado para dispositivos móviles y computador</span>
            <span className="text-emerald-300">•</span>
            <span className="text-forest-900 font-bold">100% fiel al documento pedagógico</span>
          </div>
        </div>
      </div>

    </div>
  );
};
