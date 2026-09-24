import React, { useState } from 'react';
import { useGuardian } from '../context/GuardianContext';
import { MISSIONS_DATA } from '../data/pedagogicalData';
import { 
  Award, 
  Calendar, 
  Printer, 
  FileText, 
  CheckCircle2, 
  Compass, 
  ExternalLink
} from 'lucide-react';

export const GuardianPassport: React.FC = () => {
  const { 
    activeProfile, 
    getReadingLevelBadges, 
    setCurrentView, 
    setActiveMissionId 
  } = useGuardian();

  const [activeTab, setActiveTab] = useState<'stamps' | 'evidences' | 'levels'>('stamps');

  const levelBadges = getReadingLevelBadges();
  const completedMissions = MISSIONS_DATA.filter(m => activeProfile.completedMissionIds.includes(m.id));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Cabecera del Pasaporte en Estilo Bitácora Luminosa */}
      <div className="bg-gradient-to-r from-emerald-800 via-forest-700 to-teal-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center text-3xl shadow-md shrink-0">
              📖
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full bg-amber-400 text-forest-950 text-xs font-bold font-mono shadow-xs">
                  DOCUMENTO OFICIAL DEL GUARDIÁN
                </span>
                <span className="text-xs text-emerald-100 font-medium">Edición Grado Séptimo</span>
              </div>
              <h1 className="font-display font-black text-2xl sm:text-4xl mt-1 tracking-tight text-white">
                Pasaporte de Exploración del Territorio
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100 font-serif italic mt-0.5">
                Custodio: <strong className="text-amber-300 font-sans font-bold">{activeProfile.name}</strong> • {activeProfile.grade} • Magangué, La Mojana y Región Caribe
              </p>
            </div>
          </div>

          {/* Botón de impresión/exportación */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-white hover:bg-emerald-50 text-forest-900 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
            >
              <Printer className="w-4 h-4 text-emerald-700" />
              <span>Imprimir Bitácora</span>
            </button>
          </div>
        </div>

        {/* Pestañas de Navegación del Pasaporte */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('stamps')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'stamps'
                ? 'bg-amber-400 text-forest-950 shadow-md scale-105'
                : 'bg-white/15 text-white hover:bg-white/25 border border-white/15'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Sellos e Insignias ({activeProfile.earnedBadges.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('evidences')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'evidences'
                ? 'bg-amber-400 text-forest-950 shadow-md scale-105'
                : 'bg-white/15 text-white hover:bg-white/25 border border-white/15'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Evidencias Ambientales ({Object.keys(activeProfile.evidences).length})</span>
          </button>

          <button
            onClick={() => setActiveTab('levels')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'levels'
                ? 'bg-amber-400 text-forest-950 shadow-md scale-105'
                : 'bg-white/15 text-white hover:bg-white/25 border border-white/15'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Niveles de Comprensión</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          PESTAÑA 1: SELLOS E INSIGNIAS DE CADA MISIÓN
          ======================================================== */}
      {activeTab === 'stamps' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl text-forest-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              Registro de Misiones Conquistadas en el Territorio
            </h3>
            <span className="text-xs font-bold text-forest-600">
              {completedMissions.length} de 15 páginas foliadas
            </span>
          </div>

          {completedMissions.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-emerald-300 rounded-3xl p-12 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-3xl">
                🧭
              </div>
              <h4 className="font-display font-bold text-lg text-forest-900">
                Tu pasaporte está esperando los primeros sellos
              </h4>
              <p className="text-xs sm:text-sm text-forest-700 max-w-md mx-auto">
                Inicia la primera misión en el Mapa del Territorio. Al completar la lectura, responder las preguntas y resolver el desafío, tu sello oficial quedará estampado aquí con fecha y reflexión.
              </p>
              <button
                onClick={() => setCurrentView('map')}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-amber-500 text-white rounded-xl text-xs font-bold tracking-wide shadow-md"
              >
                Ir al Mapa de Misiones
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedMissions.map((m) => {
                const entry = activeProfile.passportEntries.find(e => e.missionId === m.id);
                return (
                  <div
                    key={m.id}
                    className="bg-[#fffdf8] border-2 border-[#e6dbc0] rounded-3xl p-6 relative overflow-hidden shadow-sm flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-amber-700">
                          FOLIO {m.id} • {m.territoryZone}
                        </span>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {entry?.completedAt || 'Completado'}
                        </span>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-3xl shrink-0 shadow-xs">
                          {m.icon}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-base sm:text-lg text-slate-900">
                            {m.title}
                          </h4>
                          <p className="text-xs font-bold text-emerald-800 mt-0.5">
                            Insignia: {m.badgeName}
                          </p>
                        </div>
                      </div>

                      {/* Fotografía Oficial de Campo del Folio */}
                      <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-[#ded2b5] shadow-inner bg-slate-900 my-1">
                        <img 
                          src={`/imagenes_misiones/m${m.id}.png`}
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.dataset.triedAlt) {
                              target.dataset.triedAlt = 'true';
                              target.src = `/Imagenes misiones/m${m.id}.png`;
                            }
                          }}
                          alt={m.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-2 left-3 text-[10px] text-amber-200 font-mono font-bold">
                          Fotografía de Registro • {m.territoryZone}
                        </span>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#f7f2e4] border border-[#ded2b5] text-xs sm:text-sm text-[#3b2e21] font-reading italic leading-relaxed">
                        "{entry?.reflection || 'El Guardián ha restablecido una parte de la memoria ecológica de este territorio.'}"
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#eee5ce] flex items-center justify-between text-xs">
                      <span className="text-emerald-700 font-bold flex items-center gap-1.5 text-[11px]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Sello Oficial Certificado
                      </span>
                      <button
                        onClick={() => {
                          setActiveMissionId(m.id);
                          setCurrentView('mission');
                        }}
                        className="text-forest-700 hover:text-emerald-700 font-bold transition-colors text-[11px] flex items-center gap-1"
                      >
                        <span>Revisar caso</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          PESTAÑA 2: BITÁCORA DE EVIDENCIAS ENTREGADAS
          ======================================================== */}
      {activeTab === 'evidences' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl text-forest-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              Bitácora de Evidencias Ambientales del Estudiante
            </h3>
            <span className="text-xs font-bold text-forest-600">
              Registradas para evaluación pedagógica
            </span>
          </div>

          {Object.keys(activeProfile.evidences).length === 0 ? (
            <div className="bg-white border-2 border-dashed border-emerald-300 rounded-3xl p-12 text-center space-y-3 shadow-sm">
              <p className="text-sm font-bold text-forest-800">
                Aún no has generado evidencias de desafíos ambientales.
              </p>
              <p className="text-xs text-forest-600">
                Completa los retos de cada misión (alertas comunitarias, protocolos, tablas comparativas y rutas).
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(activeProfile.evidences).map(([missionIdStr, ev]) => {
                const missionObj = MISSIONS_DATA.find(m => m.id === Number(missionIdStr));
                return (
                  <div
                    key={missionIdStr}
                    className="bg-white border-2 border-emerald-200 rounded-3xl p-6 space-y-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-lg border border-emerald-300">
                          {missionObj?.icon || '📝'}
                        </span>
                        <div>
                          <span className="text-[11px] font-mono text-emerald-700 uppercase font-bold">
                            Misión {missionIdStr}: {missionObj?.title}
                          </span>
                          <h4 className="font-display font-bold text-base sm:text-lg text-forest-900">
                            {ev.challengeTitle}
                          </h4>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-slate-500">
                        {new Date(ev.submittedAt).toLocaleDateString('es-CO')}
                      </span>
                    </div>

                    {/* Campos de la evidencia claros */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                      {Object.entries(ev.submittedData).map(([key, val]) => (
                        <div key={key} className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-3.5 space-y-1">
                          <span className="font-bold text-emerald-900 uppercase text-[10px] tracking-wider block">
                            {key.replace(/_/g, ' ')}:
                          </span>
                          <p className="text-slate-800 leading-relaxed font-sans font-medium">
                            {String(val)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          PESTAÑA 3: NIVELES DE COMPRENSIÓN LECTORA CONQUISTADOS
          ======================================================== */}
      {activeTab === 'levels' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl text-forest-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-600" />
              Niveles de Comprensión Lectora Conquistados
            </h3>
            <span className="text-xs font-bold text-forest-600">
              Marco de Evaluación de Grado Séptimo
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Nivel 1: Literal */}
            <div className={`rounded-3xl border-2 p-6 flex flex-col justify-between transition-all ${
              levelBadges.observador
                ? 'bg-white border-emerald-400 shadow-md ring-2 ring-emerald-300/30'
                : 'bg-slate-50 border-slate-200 opacity-70'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Nivel 1
                  </span>
                  {levelBadges.observador && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-black">
                      CONQUISTADO
                    </span>
                  )}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-3xl">
                  👁️
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900">
                    Los ojos del Guardián
                  </h4>
                  <p className="text-xs font-bold text-emerald-700 mt-0.5">
                    Insignia: Guardián Observador
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Localizar e identificar datos explícitos en los textos: quién, qué, dónde, características y hechos biológicos.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Se entrena en la Etapa 04 de cada misión.
              </div>
            </div>

            {/* Nivel 2: Inferencial */}
            <div className={`rounded-3xl border-2 p-6 flex flex-col justify-between transition-all ${
              levelBadges.rastreador
                ? 'bg-white border-sky-400 shadow-md ring-2 ring-sky-300/30'
                : 'bg-slate-50 border-slate-200 opacity-70'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                    Nivel 2
                  </span>
                  {levelBadges.rastreador && (
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-300 text-[10px] font-black">
                      CONQUISTADO
                    </span>
                  )}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-3xl">
                  🔎
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900">
                    Las pistas ocultas
                  </h4>
                  <p className="text-xs font-bold text-sky-700 mt-0.5">
                    Insignia: Guardián Rastreador
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Relacionar indicios, deducir información implícita y establecer cadenas de causas y consecuencias ambientales.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Se entrena en la Etapa 05 de cada misión.
              </div>
            </div>

            {/* Nivel 3: Crítico */}
            <div className={`rounded-3xl border-2 p-6 flex flex-col justify-between transition-all ${
              levelBadges.equilibrio
                ? 'bg-white border-amber-400 shadow-md ring-2 ring-amber-300/30'
                : 'bg-slate-50 border-slate-200 opacity-70'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Nivel 3
                  </span>
                  {levelBadges.equilibrio && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-black">
                      CONQUISTADO
                    </span>
                  )}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-3xl">
                  ⚖️
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900">
                    La decisión del Guardián
                  </h4>
                  <p className="text-xs font-bold text-amber-700 mt-0.5">
                    Insignia: Guardián del Equilibrio
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Valorar posturas éticas, justificar decisiones de protección y proponer acciones fundadas en el texto.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Se entrena en la Etapa 06 de cada misión.
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
