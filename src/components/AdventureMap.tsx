import React, { useState } from 'react';
import { useGuardian } from '../context/GuardianContext';
import { MISSIONS_DATA } from '../data/pedagogicalData';
import { audioService } from '../services/audioService';
import { 
  Lock, 
  CheckCircle2, 
  Play, 
  Award, 
  Eye, 
  ArrowRight,
  Compass,
  MapPin,
  Sparkles,
  Search,
  Scale,
  Star,
  Layers,
  Map as MapIcon,
  X,
  Minimize2,
  ChevronDown,
  Maximize2,
  Check
} from 'lucide-react';

// Coordenadas geográficas porcentuales calculadas sobre la ilustración 16:9
interface MapNodeCoordinate {
  id: number;
  x: number; // Porcentaje de izquierda a derecha (0 - 100)
  y: number; // Porcentaje de arriba a abajo (0 - 100)
  zone: string;
  iconName: string;
}

const MAP_NODE_COORDINATES: MapNodeCoordinate[] = [
  // Zona 1: Bosque y Sabana (Cluster Oeste: Misiones 01, 05, 06, 08)
  { id: 1, x: 31, y: 41, zone: 'Bosque y Sabana', iconName: '🦎' },
  { id: 5, x: 37.5, y: 39, zone: 'Bosque y Sabana', iconName: '🦜' },
  { id: 6, x: 44, y: 39, zone: 'Bosque y Sabana', iconName: '🐒' },
  { id: 8, x: 44, y: 47, zone: 'Bosque y Sabana', iconName: '🌳' },

  // Zona 2: Ciénagas y Caños (Cluster Norte: Misiones 02, 03, 04)
  { id: 2, x: 54, y: 31, zone: 'Ciénagas y Caños', iconName: '🐢' },
  { id: 3, x: 61, y: 30, zone: 'Ciénagas y Caños', iconName: '🐗' },
  { id: 4, x: 68, y: 30, zone: 'Ciénagas y Caños', iconName: '🐆' },

  // Zona 3: Corazón Fluvial (Ribera y entrada a Magangué: Misión 7)
  { id: 7, x: 52, y: 51, zone: 'Comunidad y Territorio', iconName: '🐕' },

  // Zona 4: Ríos y Minería (Cluster Noreste: Misiones 10, 11)
  { id: 10, x: 80, y: 39, zone: 'Ríos y Minería', iconName: '☠️' },
  { id: 11, x: 87, y: 39, zone: 'Ríos y Minería', iconName: '⛏️' },

  // Zona 5: Comunidad y Territorio (Cluster Suroeste: Misiones 9, 12, 13)
  { id: 9, x: 25, y: 65, zone: 'Comunidad y Territorio', iconName: '🌾' },
  { id: 12, x: 33, y: 65, zone: 'Comunidad y Territorio', iconName: '🗑️' },
  { id: 13, x: 41, y: 65, zone: 'Comunidad y Territorio', iconName: '🌡️' },

  // Zona 6: Territorio Integrado (Portal y Gran Ceiba Sagrada: Misiones 14, 15)
  { id: 14, x: 76, y: 61, zone: 'Territorio Integrado', iconName: '🌿' },
  { id: 15, x: 89, y: 61, zone: 'Territorio Integrado', iconName: '🌳' },
];

const ZONE_LABELS = [
  { name: 'BOSQUE Y SABANA', x: 37.5, y: 32 },
  { name: 'CIÉNAGAS Y CAÑOS', x: 61, y: 22 },
  { name: 'MAGANGUÉ', x: 61, y: 46, isTown: true },
  { name: 'RÍOS Y MINERÍA', x: 83.5, y: 31 },
  { name: 'COMUNIDAD Y TERRITORIO', x: 33, y: 58 },
  { name: 'TERRITORIO INTEGRADO', x: 82.5, y: 53 }
];

export const AdventureMap: React.FC = () => {
  const { 
    activeProfile, 
    getMissionStatus, 
    setActiveMissionId, 
    setCurrentView,
    soundEnabled,
    getReadingLevelBadges
  } = useGuardian();

  const [activeTooltipId, setActiveTooltipId] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'visual_map' | 'cards'>('visual_map');
  const [showPassportCard, setShowPassportCard] = useState<boolean>(true);
  const [isPassportMinimized, setIsPassportMinimized] = useState<boolean>(false);

  const completedCount = activeProfile.completedMissionIds.length;
  const progressPercent = Math.round((completedCount / 15) * 100);
  const readingBadges = getReadingLevelBadges();

  const handleStartMission = (missionId: number) => {
    if (soundEnabled) {
      audioService.playClueDiscovered();
    }
    setActiveMissionId(missionId);
    setCurrentView('mission');
  };

  const handleNodeClick = (missionId: number) => {
    const status = getMissionStatus(missionId);
    if (soundEnabled) {
      audioService.playClueDiscovered();
    }
    if (activeTooltipId === missionId) {
      if (status !== 'locked') {
        handleStartMission(missionId);
      }
    } else {
      setActiveTooltipId(missionId);
    }
  };

  const activeMission = MISSIONS_DATA.find(m => m.id === activeTooltipId);

  return (
    <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6 animate-fadeIn">
      
      {/* Barra de Controles y Selector de Vista */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/95 border-2 border-emerald-200/90 rounded-2xl p-3 sm:px-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-forest-600 flex items-center justify-center text-amber-300 shadow-xs shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-black text-sm sm:text-base text-forest-900 tracking-wide">
                MAPA VIVO DEL TERRITORIO
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                15 MISIONES
              </span>
            </div>
            <p className="text-[11px] text-forest-600 font-serif">
              Cuenca de Magangué, La Mojana y Depresión Momposina
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Alternador de Vista: Mapa Ilustrado vs Fichas */}
          <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 text-xs">
            <button
              onClick={() => setViewMode('visual_map')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'visual_map'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>Mapa Ilustrado</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'cards'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Lista de Fichas</span>
            </button>
          </div>

          <button
            onClick={() => setShowPassportCard(!showPassportCard)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors flex items-center gap-1.5 ${
              showPassportCard 
                ? 'bg-amber-100 border-amber-300 text-amber-900' 
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Panel Pasaporte</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          VISTA 1: MAPA INTERACTIVO ILUSTRADO (CON LA IMAGEN DE FONDO EN ALTA CALIDAD)
          ========================================================================= */}
      {viewMode === 'visual_map' && (
        <div className="relative w-full rounded-3xl overflow-hidden border-4 border-amber-950/40 shadow-2xl bg-forest-950 select-none">
          
          {/* Contenedor con relación de aspecto 16:9 y scroll horizontal en móviles */}
          <div className="relative w-full aspect-[16/9] min-w-[760px] min-h-[440px]">
            
            {/* Imagen de fondo a resolución original directa sin pérdida (5.58 MB Master) */}
            <img
              src="/mapa_territorio.png"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.triedJpg) {
                  target.dataset.triedJpg = 'true';
                  target.src = '/mapa_territorio.jpg';
                }
              }}
              alt="Mapa del Territorio de Magangué y La Mojana"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />

            {/* Viñeta y atmósfera suave */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />

            {/* SVG de Senderos y Rutas Conectoras entre Misiones (Opción 1: Clusters por Zona + Travesía) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 1000 562.5" 
              preserveAspectRatio="none"
            >
              <defs>
                {/* Gradiente dorado / esmeralda de expedición */}
                <linearGradient id="clusterTrail" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#34d399" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.95" />
                </linearGradient>

                {/* Gradiente sutil para senderos interzonales (caminos de tierra y puentes) */}
                <linearGradient id="interzoneTrail" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d97706" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#b45309" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.7" />
                </linearGradient>

                {/* Gradiente ceremonial para la Misión Final 15 */}
                <linearGradient id="finalCeibaTrail" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#fbbf24" stopOpacity="1" />
                  <stop offset="100%" stopColor="#fffbeb" stopOpacity="1" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* =========================================================================
                  1. SENDEROS DE TRAVESÍA INTERZONAL (Rutas geográficas de puente, río y campo)
                  ========================================================================= */}
              {/* Travesía A: Bosque (8) -> Puente fluvial -> Magangué (7) */}
              <path
                d="M 440 264 Q 480 275 520 287"
                fill="none"
                stroke="url(#interzoneTrail)"
                strokeWidth="2.5"
                strokeDasharray="4 5"
              />

              {/* Travesía B: Magangué (7) -> Río meandro norte -> Ciénagas (2) */}
              <path
                d="M 520 287 Q 525 225 540 174"
                fill="none"
                stroke="url(#interzoneTrail)"
                strokeWidth="2.5"
                strokeDasharray="4 5"
              />

              {/* Travesía C: Ciénagas (4) -> Ribera noreste -> Ríos y Minería (10) */}
              <path
                d="M 680 169 Q 740 185 800 219"
                fill="none"
                stroke="url(#interzoneTrail)"
                strokeWidth="2.5"
                strokeDasharray="4 5"
              />

              {/* Travesía D: Magangué (7) -> Vía rural sur -> Comunidad (13) */}
              <path
                d="M 520 287 Q 465 325 410 366"
                fill="none"
                stroke="url(#interzoneTrail)"
                strokeWidth="2.5"
                strokeDasharray="4 5"
              />

              {/* Travesía E: Comunidad (13) -> Sabana baja -> Portal Ceiba (14) */}
              <path
                d="M 410 366 Q 585 410 760 343"
                fill="none"
                stroke="url(#interzoneTrail)"
                strokeWidth="2.5"
                strokeDasharray="4 5"
              />

              {/* Travesía F: Minería (11) -> Ladera este -> Ceiba Sagrada (15) */}
              <path
                d="M 870 219 Q 895 280 890 343"
                fill="none"
                stroke="url(#interzoneTrail)"
                strokeWidth="2.5"
                strokeDasharray="4 5"
              />

              {/* =========================================================================
                  2. SENDEROS LOCALES POR ZONA (CLUSTERS NATIVOS DE MISIONES)
                  ========================================================================= */}
              {/* Cluster 1: Bosque y Sabana (01 -> 05 -> 06 -> 08) */}
              <path
                d="M 310 231 L 375 219 L 440 219 L 440 264"
                fill="none"
                stroke="url(#clusterTrail)"
                strokeWidth="3.5"
                strokeDasharray="6 5"
                filter="url(#glow)"
                className="animate-pulse"
              />

              {/* Cluster 2: Ciénagas y Caños (02 -> 03 -> 04) */}
              <path
                d="M 540 174 L 610 169 L 680 169"
                fill="none"
                stroke="url(#clusterTrail)"
                strokeWidth="3.5"
                strokeDasharray="6 5"
                filter="url(#glow)"
              />

              {/* Cluster 3: Ríos y Minería (10 -> 11) */}
              <path
                d="M 800 219 L 870 219"
                fill="none"
                stroke="url(#clusterTrail)"
                strokeWidth="3.5"
                strokeDasharray="6 5"
                filter="url(#glow)"
              />

              {/* Cluster 4: Comunidad y Territorio (09 -> 12 -> 13) */}
              <path
                d="M 250 366 L 330 366 L 410 366"
                fill="none"
                stroke="url(#clusterTrail)"
                strokeWidth="3.5"
                strokeDasharray="6 5"
                filter="url(#glow)"
              />

              {/* Cluster 5: Umbral y Ceiba Sagrada (14 -> 15 Misión Final) */}
              <path
                d="M 760 343 L 890 343"
                fill="none"
                stroke="url(#finalCeibaTrail)"
                strokeWidth="4"
                strokeDasharray="7 6"
                filter="url(#glow)"
                className="animate-pulse"
              />
            </svg>

            {/* Rótulos Geográficos de las Zonas sobre el Paisaje */}
            {ZONE_LABELS.map((zone, idx) => (
              <div
                key={idx}
                style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
              >
                {zone.isTown ? (
                  <div className="flex flex-col items-center group">
                    <div className="w-8 h-8 rounded-full bg-amber-500/90 border-2 border-white text-forest-950 flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-4 h-4 fill-amber-300" />
                    </div>
                    <span className="mt-1 px-3 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-amber-300/60 text-amber-200 font-display font-black text-[11px] tracking-wider shadow-md">
                      {zone.name}
                    </span>
                  </div>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs border border-white/25 text-white font-sans font-bold text-[10px] tracking-widest uppercase shadow-sm">
                    {zone.name}
                  </span>
                )}
              </div>
            ))}

            {/* Elementos Decorativos Superiores: Rosa de los Vientos y Lema */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-3 pointer-events-none hidden sm:flex">
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-amber-300/40 flex items-center justify-center text-amber-300 shadow-md">
                <Compass className="w-7 h-7 animate-spin-slow" />
              </div>
              <div className="text-white drop-shadow-md">
                <h4 className="font-display font-bold text-xs tracking-wider text-amber-200">
                  Un territorio, muchas historias
                </h4>
                <p className="text-[10px] text-emerald-100 font-reading">
                  Explora, lee, comprende y actúa en la Mojana.
                </p>
              </div>
            </div>

            <div className="absolute top-4 right-4 z-20 hidden md:block pointer-events-none">
              <div className="px-3.5 py-2 rounded-xl bg-amber-950/75 backdrop-blur-md border border-amber-400/40 text-amber-200 font-serif italic text-xs shadow-lg max-w-[220px] text-center">
                "Leer también es cuidar el territorio"
              </div>
            </div>

            {/* Panel Flotante: MI PASAPORTE (Estilo Cuaderno de Cuero / Bitácora Realista) */}
            {showPassportCard && (
              isPassportMinimized ? (
                /* Versión Minimizada: Píldora compacta que deja 100% visible el mapa */
                <button
                  onClick={() => setIsPassportMinimized(false)}
                  className="absolute top-4 left-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#f7f2e7]/95 backdrop-blur-md border-2 border-[#8c6239] text-[#2c1a0e] shadow-xl hover:scale-105 transition-all cursor-pointer group"
                >
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-emerald-600 to-forest-600 text-amber-200 flex items-center justify-center font-bold text-xs shadow-xs">
                    {activeProfile.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono font-bold text-[#8c6239] uppercase tracking-wider block">
                      Mi Pasaporte
                    </span>
                    <span className="text-xs font-display font-bold block truncate max-w-[130px] text-[#2c1a0e]">
                      {activeProfile.name} • {progressPercent}%
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-[#8c6239] group-hover:translate-y-0.5 transition-transform ml-1" />
                </button>
              ) : (
                /* Versión Completa: Cuaderno de Campo con Pespunte y Textura de Pergamino */
                <div className="absolute top-4 left-4 z-20 w-60 sm:w-64 bg-gradient-to-b from-[#fbf8f0]/95 via-[#f5ede0]/95 to-[#ebdcc0]/95 border-2 border-[#8c6239] rounded-3xl p-4 text-[#2c1a0e] shadow-2xl backdrop-blur-md transition-all">
                  {/* Pespunte decorativo de cuero */}
                  <div className="absolute inset-1.5 border border-dashed border-[#b8956e]/50 rounded-[20px] pointer-events-none" />

                  {/* Cabecera del Pasaporte */}
                  <div className="relative flex items-center justify-between border-b border-[#cbb28b]/60 pb-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">📜</span>
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#7a4e25] font-black block">
                          MI PASAPORTE
                        </span>
                        <span className="text-xs font-display font-bold text-[#2c1a0e]">
                          Guardián del Territorio
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => setIsPassportMinimized(true)}
                        className="p-1 rounded-lg text-[#7a4e25] hover:bg-[#dfcead] text-xs transition-colors cursor-pointer"
                        title="Minimizar pasaporte para ver todo el mapa"
                      >
                        <Minimize2 className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => setShowPassportCard(false)} 
                        className="p-1 rounded-lg text-[#7a4e25] hover:bg-[#dfcead] text-xs transition-colors cursor-pointer"
                        title="Cerrar panel"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Info del Estudiante */}
                  <div className="relative flex items-center gap-2.5 mb-2.5 bg-white/70 p-2 rounded-2xl border border-[#d8c29d]">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-forest-600 text-amber-200 border border-emerald-400 flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                      {activeProfile.name.charAt(0)}
                    </div>
                    <div className="overflow-hidden">
                      <span className="font-bold text-xs text-[#2c1a0e] block truncate">
                        {activeProfile.name}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-800 font-bold block">
                        Grado {activeProfile.grade} • Explorador
                      </span>
                    </div>
                  </div>

                  {/* Barra de Progreso General */}
                  <div className="relative space-y-1 mb-2.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-[#5c3e23] font-medium">Progreso general</span>
                      <span className="font-bold text-[#2c1a0e] font-mono">{progressPercent}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#d8c7a6] rounded-full overflow-hidden border border-[#b89b70]">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-emerald-600 rounded-full transition-all duration-500" 
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-[#704d2c] block text-right font-mono font-medium">
                      {completedCount} de 15 misiones
                    </span>
                  </div>

                  {/* Nivel Actual */}
                  <div className="relative p-2 rounded-xl bg-white/60 border border-[#d8c29d] mb-2.5 space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-[#7a4e25] font-black block">
                      Nivel de Lectura Actual:
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-900 font-bold">
                      <Eye className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">
                        {completedCount >= 10 ? 'La decisión del Guardián' : completedCount >= 5 ? 'Las pistas ocultas' : 'Los ojos del Guardián'}
                      </span>
                    </div>
                  </div>

                  {/* Insignias Obtenidas */}
                  <div className="relative mb-3">
                    <div className="flex items-center justify-between text-[10px] text-[#5c3e23] mb-1">
                      <span>Insignias de Territorio</span>
                      <span className="font-bold text-[#2c1a0e]">{activeProfile.earnedBadges.length} / 15</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {activeProfile.earnedBadges.slice(0, 4).map((badge, idx) => (
                        <div 
                          key={idx} 
                          className="w-7 h-7 rounded-lg bg-amber-400/30 border border-amber-600/60 text-sm flex items-center justify-center shadow-xs"
                          title={badge}
                        >
                          🏅
                        </div>
                      ))}
                      {Array.from({ length: Math.max(0, 4 - activeProfile.earnedBadges.length) }).map((_, idx) => (
                        <div key={idx} className="w-7 h-7 rounded-lg bg-[#ddceb0]/60 border border-[#bfae8c] flex items-center justify-center text-[#8c7857] text-xs">
                          <Lock className="w-3 h-3" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón Ver Pasaporte Completo */}
                  <button
                    onClick={() => setCurrentView('passport')}
                    className="relative w-full py-2 bg-gradient-to-r from-emerald-700 to-forest-800 hover:from-emerald-600 hover:to-forest-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 border border-emerald-500/40 cursor-pointer"
                  >
                    <span>ABRIR PASAPORTE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                  </button>
                </div>
              )
            )}

            {/* =============================================================
                LOS 15 NODOS INTERACTIVOS SOBRE EL PAISAJE (MEDALLONES RPG)
                ============================================================= */}
            {MAP_NODE_COORDINATES.map((node) => {
              const mission = MISSIONS_DATA.find(m => m.id === node.id);
              if (!mission) return null;

              const status = getMissionStatus(node.id);
              const isCompleted = status === 'completed';
              const isAvailable = status === 'available';
              const isLocked = status === 'locked';
              const isFinal = mission.isFinalMission;
              const isSelected = activeTooltipId === node.id;

              return (
                <div
                  key={node.id}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  {/* Botón Circular del Nodo / Medallón de Expedición */}
                  <div className="relative group flex flex-col items-center">
                    
                    {/* Indicador Numérico Estilo Corona de Medalla (ej. 01, 02) */}
                    <div className="relative -mb-1 z-10 pointer-events-none">
                      <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded-full border shadow-md flex items-center gap-1 transition-all ${
                        isFinal
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-amber-950 border-amber-100 font-extrabold shadow-amber-400/80 animate-pulse'
                          : isAvailable
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-forest-950 border-amber-100 font-extrabold shadow-amber-400/60 animate-bounce'
                          : isCompleted
                          ? 'bg-emerald-800 text-emerald-100 border-emerald-400/80 shadow-xs'
                          : 'bg-black/85 text-amber-200/60 border-amber-900/40'
                      }`}>
                        {isCompleted && <Check className="w-2.5 h-2.5 text-emerald-300 stroke-[3]" />}
                        {isLocked && <Lock className="w-2 h-2 text-amber-400/50" />}
                        <span>{node.id}</span>
                      </span>
                    </div>

                    {/* Medallón Principal del Nodo */}
                    <button
                      onClick={() => handleNodeClick(node.id)}
                      className={`relative rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                        isFinal
                          ? 'w-18 h-18 sm:w-22 sm:h-22 bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 border-4 border-amber-100 shadow-[0_0_35px_rgba(251,191,36,0.9)] hover:scale-110'
                          : isAvailable
                          ? 'w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-emerald-700 via-emerald-500 to-teal-400 border-3 border-white shadow-[0_0_25px_rgba(16,185,129,0.95)] hover:scale-115 ring-4 ring-emerald-400/80 ring-offset-2 ring-offset-black/60'
                          : isCompleted
                          ? 'w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-tr from-teal-900 via-emerald-800 to-teal-950 border-2 border-amber-400/80 shadow-md shadow-emerald-950/80 hover:scale-105 hover:border-amber-300'
                          : 'w-10 h-10 sm:w-11 sm:h-11 bg-black/75 backdrop-blur-md border-2 border-amber-900/60 text-slate-400 hover:border-amber-600/70 hover:bg-black/90'
                      }`}
                      title={mission.title}
                    >
                      {/* Aura pulsante de ondas para misiones disponibles */}
                      {isAvailable && (
                        <>
                          <span className="absolute -inset-2.5 rounded-full border-2 border-emerald-400 animate-ping opacity-60 pointer-events-none" />
                          <span className="absolute inset-0 rounded-full bg-emerald-300/30 animate-pulse pointer-events-none" />
                        </>
                      )}

                      {/* Resplandor especial para la Misión Final 15 */}
                      {isFinal && (
                        <>
                          <span className="absolute -inset-3 rounded-full bg-amber-400/40 animate-pulse blur-md pointer-events-none" />
                          <span className="absolute -inset-2 rounded-full border-2 border-amber-200 animate-ping opacity-40 pointer-events-none" />
                        </>
                      )}

                      {/* Icono del Nodo con relieve */}
                      {isFinal ? (
                        <div className="text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          <span className="text-3xl sm:text-4xl block animate-pulse">🌳</span>
                        </div>
                      ) : isCompleted ? (
                        <div className="relative flex items-center justify-center">
                          <span className="text-lg sm:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{node.iconName}</span>
                          <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-400 text-forest-950 flex items-center justify-center text-[10px] font-black border border-white shadow-xs">
                            ✓
                          </span>
                        </div>
                      ) : isAvailable ? (
                        <span className="text-xl sm:text-2xl transform group-hover:scale-115 transition-transform drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                          {node.iconName}
                        </span>
                      ) : (
                        <div className="flex items-center justify-center text-amber-200/40 group-hover:text-amber-200/70 transition-colors">
                          <Lock className="w-4 h-4" />
                        </div>
                      )}
                    </button>

                    {/* Rótulo de la Misión Final */}
                    {isFinal && (
                      <div className="mt-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-2 border-amber-300 text-amber-200 text-center shadow-2xl">
                        <span className="text-[10px] font-mono font-black uppercase tracking-wider block text-amber-400">
                          ⭐ MISIÓN FINAL
                        </span>
                        <span className="text-xs font-display font-bold whitespace-nowrap text-white">
                          El equilibrio perdido
                        </span>
                      </div>
                    )}

                    {/* Popover / Tooltip interactivo con detalle y botón de entrada */}
                    {isSelected && (
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 w-64 sm:w-72 bg-white/95 backdrop-blur-md rounded-2xl p-4 border-2 border-emerald-400 shadow-2xl z-50 text-slate-900 animate-scaleUp">
                        <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{mission.icon}</span>
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 block">
                                Misión {mission.id} • {mission.territoryZone}
                              </span>
                              <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                                {mission.title}
                              </h4>
                            </div>
                          </div>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setActiveTooltipId(null); }}
                            className="text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Imagen de Portada de la Misión en Popover */}
                        <div className="relative w-full h-24 rounded-xl overflow-hidden mb-2.5 border border-emerald-300 shadow-inner bg-slate-900">
                          <img 
                            src={`/imagenes_misiones/m${mission.id}.png`}
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (!target.dataset.triedAlt) {
                                target.dataset.triedAlt = 'true';
                                target.src = `/Imagenes misiones/m${mission.id}.png`;
                              }
                            }}
                            alt={mission.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-1.5 left-2 text-[9px] font-mono text-amber-200 font-bold px-1.5 py-0.5 rounded-sm bg-black/60 backdrop-blur-xs border border-amber-300/30">
                            {mission.territoryZone}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-600 line-clamp-2 font-reading mb-3">
                          {mission.conflictSummary}
                        </p>

                        <div className="flex items-center justify-between text-[10px] mb-3 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                          <span className="text-emerald-900 font-medium">Insignia:</span>
                          <span className="font-bold text-emerald-800 flex items-center gap-1">
                            <Award className="w-3 h-3 text-amber-600" />
                            {mission.badgeName}
                          </span>
                        </div>

                        {status !== 'locked' ? (
                          <button
                            onClick={() => handleStartMission(mission.id)}
                            className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-500 hover:to-forest-600 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>{isCompleted ? 'REPASAR EXPEDICIÓN' : 'COMENZAR MISIÓN'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-center text-[10px] text-slate-500 font-medium flex items-center justify-center gap-1.5">
                            <Lock className="w-3 h-3 text-slate-400" />
                            <span>Completa la misión anterior para desbloquear</span>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              );
            })}

          </div>

          {/* =============================================================
              TABLERO INFERIOR: "NIVELES DE LA AVENTURA" (ESTILO MADERA TALLADA)
              ============================================================= */}
          <div className="bg-gradient-to-r from-[#2c1a0e] via-[#1f1208] to-[#2c1a0e] border-t-4 border-[#8c5930] p-4 sm:p-5 text-white shadow-2xl relative overflow-hidden">
            {/* Vetas y textura sutil de madera */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              
              {/* Los 3 Niveles de Comprensión con Orbes Radiantes */}
              <div className="space-y-2.5 w-full lg:w-auto">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 text-xs shadow-xs">
                    🧭
                  </div>
                  <span className="text-[11px] font-display font-black tracking-widest text-amber-300 uppercase">
                    NIVELES DE LA AVENTURA • PEDAGOGÍA DE COMPRENSIÓN
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Orbe 1: Comprensión Literal */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/45 border border-emerald-500/40 hover:border-emerald-400 transition-colors shadow-sm">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-700 to-emerald-400 border-2 border-emerald-300 flex items-center justify-center text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] shrink-0">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-xs text-emerald-200 block leading-tight">
                        Nivel 1: Los ojos del Guardián
                      </span>
                      <span className="text-[10px] text-emerald-100/70 font-medium">
                        Comprensión literal de hechos
                      </span>
                    </div>
                  </div>

                  {/* Orbe 2: Comprensión Inferencial */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/45 border border-sky-500/40 hover:border-sky-400 transition-colors shadow-sm">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-700 to-blue-400 border-2 border-sky-300 flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-xs text-sky-200 block leading-tight">
                        Nivel 2: Las pistas ocultas
                      </span>
                      <span className="text-[10px] text-sky-100/70 font-medium">
                        Comprensión inferencial de causas
                      </span>
                    </div>
                  </div>

                  {/* Orbe 3: Comprensión Crítica */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/45 border border-amber-500/40 hover:border-amber-400 transition-colors shadow-sm">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-400 border-2 border-amber-200 flex items-center justify-center text-white shadow-[0_0_15px_rgba(245,158,11,0.5)] shrink-0">
                      <Scale className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-xs text-amber-200 block leading-tight">
                        Nivel 3: La decisión del Guardián
                      </span>
                      <span className="text-[10px] text-amber-100/70 font-medium">
                        Comprensión crítica y valoración
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Lado Derecho: Nota en Pergamino y Leyenda Oficial */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-end lg:self-center">
                
                {/* Nota de Pergamino */}
                <div className="hidden xl:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#f7f2e4] border border-[#d8c7a6] text-[#3b2e21] shadow-sm">
                  <span className="text-xs">📜</span>
                  <span className="text-[11px] font-serif italic font-medium">
                    "Cada misión te acerca a un territorio más vivo"
                  </span>
                </div>

                {/* Leyenda de Estados */}
                <div className="flex flex-wrap items-center gap-3 bg-black/60 border border-amber-500/30 px-4 py-2.5 rounded-2xl text-[11px]">
                  <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    Disponible
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    Bloqueada
                  </span>
                  <span className="flex items-center gap-1.5 text-teal-300 font-bold">
                    <span className="w-3.5 h-3.5 rounded-full bg-teal-500 flex items-center justify-center text-[10px] text-white font-bold">✓</span>
                    Completada
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    Misión final
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      )}

      {/* =========================================================================
          VISTA 2: LISTA DE FICHAS DE EXPEDICIÓN (PARA ESTUDIANTES QUE PREFIERAN LISTA)
          ========================================================================= */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {MISSIONS_DATA.map((mission) => {
            const status = getMissionStatus(mission.id);
            const isCompleted = status === 'completed';
            const isAvailable = status === 'available';
            const isLocked = status === 'locked';

            return (
              <div
                key={mission.id}
                className={`rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group ${
                  isCompleted
                    ? 'bg-white border-emerald-300 shadow-md hover:shadow-lg hover:border-emerald-500'
                    : isAvailable
                    ? 'bg-white border-amber-400 shadow-xl ring-2 ring-amber-300/40 hover:scale-[1.02]'
                    : 'bg-slate-50/90 border-slate-200 opacity-80'
                }`}
              >
                {/* Portada Ilustrada de la Ficha */}
                <div className="relative w-full h-44 overflow-hidden bg-slate-900">
                  <img 
                    src={`/imagenes_misiones/m${mission.id}.png`}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedAlt) {
                        target.dataset.triedAlt = 'true';
                        target.src = `/Imagenes misiones/m${mission.id}.png`;
                      }
                    }}
                    alt={mission.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${isLocked ? 'grayscale opacity-60' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                  
                  {/* Badge de Zona Territorial */}
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-xs ${
                    isCompleted
                      ? 'bg-emerald-900/90 text-emerald-100 border-emerald-400/40'
                      : isAvailable
                      ? 'bg-amber-900/90 text-amber-100 border-amber-400/40'
                      : 'bg-black/70 text-slate-300 border-white/20'
                  }`}>
                    {mission.territoryZone}
                  </span>

                  {/* Estado de la Misión */}
                  <div className="absolute top-3 right-3">
                    {isCompleted && (
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white border border-emerald-300 text-[11px] font-bold shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        COMPLETADA
                      </span>
                    )}

                    {isAvailable && (
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-forest-950 border border-amber-200 text-[11px] font-black animate-pulse shadow-sm">
                        <Play className="w-3 h-3 fill-forest-950" />
                        DISPONIBLE
                      </span>
                    )}

                    {isLocked && (
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 text-slate-300 border border-white/20 text-[11px] font-semibold">
                        <Lock className="w-3 h-3 text-slate-400" />
                        BLOQUEADA
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 pb-3">

                  <div className="flex items-start gap-3.5 mt-2">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-sm border ${
                      isCompleted
                        ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                        : isAvailable
                        ? 'bg-amber-100 border-amber-300 text-amber-900'
                        : 'bg-slate-200 border-slate-300 text-slate-400'
                    }`}>
                      {mission.icon}
                    </div>
                    <div>
                      <span className={`text-[11px] font-black tracking-wider uppercase font-mono ${
                        isCompleted ? 'text-emerald-700' : isAvailable ? 'text-amber-700' : 'text-slate-500'
                      }`}>
                        {mission.isFinalMission ? 'MISIÓN FINAL' : `MISIÓN ${mission.id}`}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                        {mission.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {mission.conflictSummary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs">
                    <Award className={`w-4 h-4 ${isCompleted ? 'text-amber-500' : isAvailable ? 'text-amber-600' : 'text-slate-400'}`} />
                    <span className="text-slate-500 text-[11px] font-medium">Insignia:</span>
                    <span className={`text-[11px] font-bold ${isCompleted ? 'text-emerald-800' : isAvailable ? 'text-slate-900' : 'text-slate-500'}`}>
                      {mission.badgeName}
                    </span>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  {isAvailable && (
                    <button
                      onClick={() => handleStartMission(mission.id)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-bold text-xs tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:shadow-lg cursor-pointer"
                    >
                      <span>INICIAR MISIÓN</span>
                      <ArrowRight className="w-4 h-4 text-amber-100 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}

                  {isCompleted && (
                    <button
                      onClick={() => handleStartMission(mission.id)}
                      className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs rounded-xl border border-emerald-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>REPASAR EXPEDICIÓN</span>
                      <Eye className="w-3.5 h-3.5 text-emerald-700" />
                    </button>
                  )}

                  {isLocked && (
                    <div className="w-full py-2.5 px-4 bg-slate-100 rounded-xl border border-slate-200 text-center text-[11px] text-slate-500 font-medium flex items-center justify-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Completa la Misión {mission.id - 1} para desbloquear</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

