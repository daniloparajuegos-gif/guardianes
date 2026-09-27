import React, { useState } from 'react';
import { useGuardian } from '../context/GuardianContext';
import { MISSIONS_DATA } from '../data/pedagogicalData';
import { Question, QuestionOption } from '../types';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Eye, 
  Search, 
  Scale, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Info,
  Sun,
  Moon,
  Send
} from 'lucide-react';

import { RewardModal } from './collection/RewardModal';

export const MissionView: React.FC = () => {
  const { 
    activeMissionId, 
    setCurrentView, 
    setActiveMissionId, 
    activeProfile, 
    saveAnswer, 
    saveEvidence, 
    completeMission,
    pendingReward,
    claimReward
  } = useGuardian();

  const mission = MISSIONS_DATA.find(m => m.id === activeMissionId) || MISSIONS_DATA[0];

  // Etapas de la misión:
  // 0: Llegada, 1: Observa, 2: Lee, 3: Rastreo (Literal), 4: Investigación (Inferencial), 5: Decisión (Crítico), 6: Desafío Ambiental, 7: Insignia
  const [stage, setStage] = useState<number>(0);

  // Estados de lectura: tamaño de letra y modo pergamino/claro
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [readingTheme, setReadingTheme] = useState<'light' | 'cream'>('light');

  // Estado de respuestas seleccionadas en la sesión actual
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    Object.values(activeProfile.answers).forEach(ans => {
      initial[ans.questionId] = ans.selectedOptionId;
    });
    return initial;
  });

  const [writtenArguments, setWrittenArguments] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    Object.values(activeProfile.answers).forEach(ans => {
      if (ans.writtenArgument) initial[ans.questionId] = ans.writtenArgument;
    });
    return initial;
  });

  // Estado del desafío ambiental
  const [challengeData, setChallengeData] = useState<Record<string, string>>(() => {
    const saved = activeProfile.evidences[mission.id]?.submittedData;
    return saved || {};
  });

  // Estado de reflexión para el pasaporte
  const [passportReflection, setPassportReflection] = useState<string>('');

  // Sistema de Puntos de Pista: 3 pistas compartidas para toda la misión
  // Se reinician a 3 cada vez que se avanza a una nueva misión
  const [hintPoints, setHintPoints] = useState<number>(3);
  const [revealedHints, setRevealedHints] = useState<Set<string>>(new Set());

  // Resetear pistas al cambiar de misión
  React.useEffect(() => {
    setHintPoints(3);
    setRevealedHints(new Set());
  }, [mission.id]);

  const handleRevealHint = (questionId: string) => {
    if (revealedHints.has(questionId)) return;
    if (hintPoints <= 0) return;
    setHintPoints(prev => prev - 1);
    setRevealedHints(prev => new Set([...prev, questionId]));
  };


  const STAGE_NAMES = [
    { title: 'Llegada', icon: Compass, label: '01. Llegada' },
    { title: 'Observa', icon: Eye, label: '02. Observa' },
    { title: 'Lee', icon: BookOpen, label: '03. Lee' },
    { title: 'Rastreo', icon: Eye, label: '04. Literal' },
    { title: 'Investiga', icon: Search, label: '05. Inferencial' },
    { title: 'Decide', icon: Scale, label: '06. Crítico' },
    { title: 'Desafío', icon: Sparkles, label: '07. Desafío' },
    { title: 'Insignia', icon: Award, label: '08. Insignia' },
  ];

  const handleSelectOption = (question: Question, option: QuestionOption) => {
    setSelectedAnswers(prev => ({ ...prev, [question.id]: option.id }));
    saveAnswer(
      question.id, 
      option.id, 
      option.isCorrect, 
      writtenArguments[question.id] || ''
    );
  };

  const handleWrittenArgumentChange = (questionId: string, text: string) => {
    setWrittenArguments(prev => ({ ...prev, [questionId]: text }));
    if (selectedAnswers[questionId]) {
      saveAnswer(questionId, selectedAnswers[questionId], true, text);
    }
  };

  const handleChallengeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveEvidence(mission.id, mission.environmentalChallenge.title, challengeData);
    
    // Disparar celebración
    triggerCelebration();
    setStage(7); // Pasar a etapa de Insignia
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#f59e0b', '#3b82f6', '#ec4899']
      });
    } catch {}
  };

  const handleFinishMission = () => {
    completeMission(mission.id, passportReflection);
    if (mission.id < 15) {
      setActiveMissionId(mission.id + 1);
      setStage(0);
    } else {
      setCurrentView('map');
    }
  };

  // Renderizador de bloque de preguntas
  const renderQuestionBlock = (questions: Question[], levelTitle: string, levelBadge: string, levelIcon: React.ReactNode) => {
    const answeredCount = questions.filter(q => selectedAnswers[q.id]).length;
    const allAnswered = answeredCount === questions.length;
    const availableHints = hintPoints;

    return (
      <div className="space-y-6">
        <div className="bg-white border-2 border-emerald-300 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-xs">
              {levelIcon}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                Comprensión de Lectura • {levelBadge}
              </span>
              <h3 className="font-display font-bold text-xl text-forest-900">
                {levelTitle}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Contador de pistas disponibles */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border ${
              availableHints > 0
                ? 'bg-amber-50 border-amber-300 text-amber-800'
                : 'bg-slate-100 border-slate-200 text-slate-400'
            }`}>
              <Info className="w-3.5 h-3.5" />
              <span>
                {availableHints > 0
                  ? `${availableHints} pista${availableHints !== 1 ? 's' : ''} disponible${availableHints !== 1 ? 's' : ''}`
                  : 'Sin pistas disponibles'}
              </span>
              {/* Indicadores visuales */}
              <div className="flex gap-0.5 ml-1">
                {[0, 1].map(i => (
                  <span key={i} className={`w-2 h-2 rounded-full ${i < availableHints ? 'bg-amber-400' : 'bg-slate-300'}`} />
                ))}
              </div>
            </div>

            <div className="text-xs font-bold text-emerald-900 bg-emerald-100 px-4 py-2 rounded-xl border border-emerald-300">
              Respondidas: <span className="text-emerald-700">{answeredCount}</span> de {questions.length}
            </div>
          </div>
        </div>

        {/* Lista de preguntas claras */}
        <div className="space-y-5">
          {questions.map((q, idx) => {
            const selectedOptId = selectedAnswers[q.id];
            const selectedOpt = q.options.find(o => o.id === selectedOptId);

            return (
              <div 
                key={q.id}
                className="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4 hover:border-emerald-400 transition-colors shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-mono font-black text-xs flex items-center justify-center shrink-0 border border-emerald-300">
                      {idx + 1}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {q.questionText}
                    </h4>
                  </div>
                  {selectedOptId && (
                    <span className="text-emerald-600 shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </span>
                  )}
                </div>

                {/* Opciones */}
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {q.options.map((opt) => {
                    const isSelected = selectedOptId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(q, opt)}
                        className={`w-full text-left p-4 rounded-2xl border-2 text-sm transition-all flex items-start gap-3.5 ${
                          isSelected
                            ? 'bg-emerald-50/90 border-emerald-500 text-forest-950 font-medium ring-2 ring-emerald-400/30 shadow-sm'
                            : 'bg-slate-50/80 border-slate-200 text-slate-800 hover:bg-emerald-50/40 hover:border-emerald-300'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs uppercase shrink-0 border ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-white text-slate-600 border-slate-300'
                        }`}>
                          {opt.id}
                        </span>
                        <span className="flex-1 leading-relaxed text-slate-800">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Pista: se revela solo al gastar un punto de pista */}
                {selectedOpt && selectedOpt.feedback && (
                  <div className="mt-2">
                    {revealedHints.has(q.id) ? (
                      <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5 animate-fadeIn">
                        <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{selectedOpt.feedback}</span>
                      </div>
                    ) : availableHints > 0 ? (
                      <button
                        type="button"
                        onClick={() => handleRevealHint(q.id)}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 hover:border-amber-400 text-xs font-semibold transition-all"
                      >
                        <Info className="w-3.5 h-3.5" />
                        Usar una pista
                        <span className="ml-1 px-1.5 py-0.5 rounded-md bg-amber-200 text-amber-900 text-[10px] font-bold">
                          {availableHints} restante{availableHints !== 1 ? 's' : ''}
                        </span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 text-xs font-semibold">
                        <Info className="w-3.5 h-3.5" />
                        Sin pistas disponibles en este nivel
                      </div>
                    )}
                  </div>
                )}

                {/* Campo de argumentación escrita para preguntas críticas */}
                {q.requiresWrittenArgument && (
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <label className="block text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-emerald-600" />
                      Argumenta tu decisión con evidencias del texto:
                    </label>
                    <textarea
                      rows={2}
                      value={writtenArguments[q.id] || ''}
                      onChange={(e) => handleWrittenArgumentChange(q.id, e.target.value)}
                      placeholder="Explica las razones de tu postura como Guardián basándote en la lectura..."
                      className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Botones de navegación */}
        <div className="pt-4 flex justify-between items-center">
          <button
            onClick={() => setStage(prev => prev - 1)}
            className="px-5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            ← Volver a etapa anterior
          </button>

          <button
            onClick={() => setStage(prev => prev + 1)}
            disabled={!allAnswered}
            className={`px-7 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center gap-2 ${
              allAnswered
                ? 'bg-gradient-to-r from-emerald-600 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white shadow-md shadow-emerald-600/25'
                : 'bg-slate-200 text-slate-400 border border-slate-300 cursor-not-allowed'
            }`}
          >
            <span>{allAnswered ? 'CONTINUAR SIGUIENTE ETAPA' : `RESPONDE LAS ${questions.length} PREGUNTAS`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn">
      
      {/* Barra de cabecera con botón de regreso y datos de la misión */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-200/80 pb-5">
        <button
          onClick={() => setCurrentView('map')}
          className="flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-600 transition-colors bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Mapa de Misiones</span>
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-mono font-bold">
            {mission.isFinalMission ? 'MISIÓN FINAL' : `MISIÓN ${mission.id}`}
          </span>
          <span className="text-emerald-300">•</span>
          <span className="text-forest-800 font-bold">{mission.territoryZone}</span>
        </div>
      </div>

      {/* Selector de Etapas Tipo Línea de Tiempo Luminosa */}
      <div className="bg-white border-2 border-emerald-200 rounded-2xl p-2 sm:p-2.5 overflow-x-auto shadow-sm">
        <div className="flex items-center justify-between min-w-[620px] gap-1.5">
          {STAGE_NAMES.map((s, idx) => {
            const Icon = s.icon;
            const isCurrent = stage === idx;
            const isPassed = stage > idx;

            return (
              <button
                key={s.label}
                onClick={() => setStage(idx)}
                className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                  isCurrent
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                    : isPassed
                    ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Icon className={`w-4 h-4 ${isCurrent ? 'text-amber-200' : isPassed ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span className="text-[10px] tracking-tight">{s.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          ETAPA 0: LLEGADA AL ESCENARIO Y PRESENTACIÓN DEL CONFLICTO
          ======================================================== */}
      {stage === 0 && (
        <div className="bg-white border-2 border-emerald-300 rounded-3xl p-6 sm:p-10 space-y-6 shadow-md relative overflow-hidden">
          <div className="flex items-center gap-3 text-emerald-700 font-mono text-xs font-black uppercase tracking-wider">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Etapa 01 — Llegada al Territorio</span>
          </div>

          {/* Ilustración Panorámica de Llegada al Escenario */}
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-emerald-300 shadow-md aspect-[16/9] max-h-[380px] bg-slate-900 group">
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
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-xs text-[11px] font-mono font-bold uppercase tracking-wider border border-emerald-400/40 shadow-sm">
                  {mission.territoryZone}
                </span>
                <h3 className="font-display font-black text-xl sm:text-3xl mt-2 text-amber-200 drop-shadow-md">
                  {mission.title}
                </h3>
              </div>
              <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-400/40 text-right">
                <span className="text-[10px] text-amber-300 font-mono block font-bold uppercase">Insignia en Juego</span>
                <span className="text-xs font-serif italic text-white font-bold">{mission.badgeName}</span>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Contexto de la Llegada
            </h4>
            <p className="text-sm sm:text-base text-forest-900 leading-relaxed font-reading">
              {mission.arrivalContext}
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800">
              El Conflicto a Investigar
            </h4>
            <p className="text-sm sm:text-base text-amber-950 leading-relaxed font-medium">
              {mission.conflictSummary}
            </p>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setStage(1)}
              className="px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>PASAR A OBSERVAR EL ESCENARIO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================
          ETAPA 1: OBSERVA — EXPLORACIÓN VISUAL DEL ESCENARIO
          ======================================================== */}
      {stage === 1 && (
        <div className="bg-white border-2 border-emerald-300 rounded-3xl p-6 sm:p-10 space-y-6 shadow-md">
          <div className="flex items-center gap-3 text-emerald-700 font-mono text-xs font-black uppercase tracking-wider">
            <Eye className="w-4 h-4 text-emerald-600" />
            <span>Etapa 02 — Observación de Campo</span>
          </div>

          <div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-forest-900">
              {mission.observationDetails.spotlightTitle}
            </h2>
            <p className="text-xs sm:text-sm text-forest-700 mt-1">
              Antes de leer, el Guardián inspecciona las señales visibles en el ecosistema.
            </p>
          </div>

          {/* Fotografía de Inspección Visual de Campo */}
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-emerald-300 shadow-md aspect-[16/9] max-h-[380px] bg-slate-900 group">
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
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>Evidencia Fotográfica de Campo</span>
            </div>
            <div className="absolute bottom-3 left-4 text-white">
              <span className="text-xs font-serif italic text-amber-200 drop-shadow">
                "Observa los detalles ecológicos que sustentan la situación ambiental."
              </span>
            </div>
          </div>

          {/* Tarjetas de detalles observados claros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-emerald-50/70 border-2 border-emerald-200 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-600" />
                Pistas y Rastros Detectados
              </h4>
              <ul className="space-y-3">
                {mission.observationDetails.details.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-forest-900 flex items-start gap-2.5 leading-relaxed font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sky-50/70 border-2 border-sky-200 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-900 flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-600" />
                Aspectos Ecológicos en Juego
              </h4>
              <ul className="space-y-3">
                {mission.observationDetails.environmentalAspects.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-sky-950 flex items-start gap-2.5 leading-relaxed font-medium">
                    <span className="w-2 h-2 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 flex justify-between items-center">
            <button
              onClick={() => setStage(0)}
              className="px-5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              ← Volver
            </button>
            <button
              onClick={() => setStage(2)}
              className="px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>CONTINUAR A LA LECTURA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================
          ETAPA 2: LEE — LECTURA DEL CASO CONTEXTUALIZADO (100% FIEL)
          ======================================================== */}
      {stage === 2 && (
        <div className="space-y-4">
          
          {/* Barra de herramientas de confort de lectura */}
          <div className="bg-white border-2 border-emerald-200 rounded-2xl px-5 py-3 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest-800">
                  Lectura del Caso
                </span>
                <span className="text-xs text-forest-600 ml-2 font-medium">
                  ({mission.readingWordCount} palabras • ~2 min)
                </span>
              </div>
            </div>

            {/* Controles de Accesibilidad: Tamaño y Tema */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-emerald-50 rounded-xl p-1 border border-emerald-200 text-xs">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2.5 py-1 rounded-lg ${fontSize === 'normal' ? 'bg-emerald-600 text-white font-bold' : 'text-forest-700'}`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2.5 py-1 rounded-lg ${fontSize === 'large' ? 'bg-emerald-600 text-white font-bold' : 'text-forest-700'}`}
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2.5 py-1 rounded-lg ${fontSize === 'xlarge' ? 'bg-emerald-600 text-white font-bold' : 'text-forest-700'}`}
                >
                  A++
                </button>
              </div>

              <button
                onClick={() => setReadingTheme(prev => prev === 'light' ? 'cream' : 'light')}
                title="Cambiar tono de fondo"
                className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100"
              >
                {readingTheme === 'light' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Caja de Instrucciones del Guardián */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs sm:text-sm text-emerald-950 flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              <strong className="text-forest-900">Instrucciones del Guardián: </strong>
              {mission.instructions}
            </p>
          </div>

          {/* Texto de lectura con diseño editorial de alto contraste */}
          <div className={`rounded-3xl p-6 sm:p-12 shadow-md transition-all border-2 ${
            readingTheme === 'light'
              ? 'bg-white border-emerald-200 text-slate-900'
              : 'bg-[#fffdf5] border-[#e9dcbe] text-[#2b2118]'
          }`}>
            <div className="max-w-3xl mx-auto space-y-6 font-reading leading-relaxed">
              <div className="border-b pb-4 mb-6 opacity-30 border-current">
                <span className="text-xs uppercase tracking-widest font-sans font-bold text-emerald-800">
                  Documento Oficial de la Expedición • Magangué y La Mojana
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-forest-900">
                  {mission.title}
                </h3>
              </div>

              {/* Cabecera Ilustrada de la Lectura */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-emerald-300 shadow-sm max-h-[320px] bg-slate-900 mb-6">
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
                  className="w-full h-full object-cover object-center max-h-[320px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-3 text-[11px] text-amber-200 font-serif italic drop-shadow">
                  Ilustración del caso: {mission.title}
                </span>
              </div>

              {/* Párrafos del texto original sin alterar */}
              <div className={`space-y-6 text-slate-900 ${
                fontSize === 'normal' 
                  ? 'text-base sm:text-lg' 
                  : fontSize === 'large' 
                  ? 'text-lg sm:text-xl' 
                  : 'text-xl sm:text-2xl'
              }`}>
                {mission.fullReadingText.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="indent-4 sm:indent-8 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Botón para pasar al rastreo de pistas */}
          <div className="pt-4 flex justify-between items-center">
            <button
              onClick={() => setStage(1)}
              className="px-5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              ← Volver a observar
            </button>
            <button
              onClick={() => setStage(3)}
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>INICIAR RASTREO DE PISTAS (LITERAL)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================
          ETAPA 3: RASTREO DE PISTAS — COMPRENSIÓN LITERAL
          ======================================================== */}
      {stage === 3 && renderQuestionBlock(
        mission.literalQuestions,
        'Rastreo de pistas — Nivel 1',
        'Guardián Observador',
        <Eye className="w-6 h-6 text-emerald-700" />
      )}

      {/* ========================================================
          ETAPA 4: INVESTIGACIÓN — COMPRENSIÓN INFERENCIAL
          ======================================================== */}
      {stage === 4 && renderQuestionBlock(
        mission.inferentialQuestions,
        'Investigación — Nivel 2',
        'Guardián Rastreador',
        <Search className="w-6 h-6 text-sky-700" />
      )}

      {/* ========================================================
          ETAPA 5: DECISIÓN DEL GUARDIÁN — COMPRENSIÓN CRÍTICA
          ======================================================== */}
      {stage === 5 && renderQuestionBlock(
        mission.criticalQuestions,
        'Decisión del Guardián — Nivel 3',
        'Guardián del Equilibrio',
        <Scale className="w-6 h-6 text-amber-700" />
      )}


      {/* ========================================================
          ETAPA 6: DESAFÍO AMBIENTAL DE APLICACIÓN Y REFLEXIÓN
          ======================================================== */}
      {stage === 6 && (
        <form onSubmit={handleChallengeSubmit} className="bg-white border-2 border-emerald-300 rounded-3xl p-6 sm:p-10 space-y-6 shadow-md">
          <div className="flex items-center gap-3 text-emerald-700 font-mono text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Etapa 07 — Desafío Ambiental de Aplicación</span>
          </div>

          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
              Generación de Evidencia Pedagógica
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-forest-900 mt-2">
              {mission.environmentalChallenge.title}
            </h2>
            <p className="text-sm text-forest-700 font-serif italic mt-1 leading-relaxed font-medium">
              {mission.environmentalChallenge.instruction}
            </p>
          </div>

          {/* Formulario adaptativo claro */}
          <div className="space-y-4 pt-2">
            {mission.environmentalChallenge.fields.map((field) => (
              <div key={field.id} className="space-y-1.5">
                <label className="block text-xs font-bold text-forest-900">
                  {field.label}
                </label>
                {field.type === 'text' ? (
                  <input
                    type="text"
                    required
                    value={challengeData[field.id] || ''}
                    onChange={(e) => setChallengeData(prev => ({ ...prev, [field.id]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                ) : (
                  <textarea
                    rows={3}
                    required
                    value={challengeData[field.id] || ''}
                    onChange={(e) => setChallengeData(prev => ({ ...prev, [field.id]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStage(5)}
              className="px-5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              ← Volver a etapa crítica
            </button>

            <button
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>REGISTRAR EVIDENCIA Y OBTENER INSIGNIA</span>
              <Send className="w-4 h-4 text-amber-100" />
            </button>
          </div>
        </form>
      )}

      {/* ========================================================
          ETAPA 7: OBTENCIÓN DE INSIGNIA Y SELLADO EN PASAPORTE
          ======================================================== */}
      {stage === 7 && (
        <div className="bg-gradient-to-br from-emerald-50 via-amber-50/50 to-white border-2 border-amber-400 rounded-3xl p-6 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden animate-fadeIn">
          
          <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-amber-400 to-emerald-600 border-2 border-amber-300 flex items-center justify-center text-5xl shadow-lg animate-bounce">
            {mission.icon}
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-700 font-mono">
              ¡MISIÓN CUMPLIDA, GUARDIÁN!
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-forest-900">
              Insignia Desbloqueada: {mission.badgeName}
            </h2>
            <p className="text-sm text-forest-800 max-w-xl mx-auto font-serif leading-relaxed font-medium">
              {mission.badgeDescription}
            </p>
          </div>

          {/* Tarjeta Postal de Celebración del Territorio */}
          <div className="max-w-md mx-auto relative rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-lg aspect-[16/9] bg-slate-900">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-3 text-xs font-serif italic text-amber-200 drop-shadow">
              Territorio protegido: {mission.territoryZone}
            </span>
          </div>

          {/* Campo para la bitácora del pasaporte */}
          <div className="max-w-xl mx-auto text-left space-y-2 pt-2">
            <label className="block text-xs font-bold text-forest-900">
              Tu Reflexión de Campo para el Pasaporte del Guardián:
            </label>
            <textarea
              rows={3}
              value={passportReflection}
              onChange={(e) => setPassportReflection(e.target.value)}
              placeholder="Escribe en una o dos frases qué aprendizaje principal te llevas sobre el territorio y sus especies..."
              className="w-full px-4 py-3 bg-white border-2 border-emerald-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 shadow-inner"
            />
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleFinishMission}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>{mission.id < 15 ? 'SELLAR PASAPORTE Y SIGUIENTE MISIÓN' : 'COMPLETAR EXPEDICIÓN'}</span>
              <ArrowRight className="w-4 h-4 text-amber-100" />
            </button>

            <button
              onClick={() => {
                completeMission(mission.id, passportReflection);
                setCurrentView('passport');
              }}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-emerald-50 text-forest-800 border-2 border-emerald-300 rounded-xl text-xs font-bold transition-colors"
            >
              Ver en mi Pasaporte
            </button>
          </div>
        </div>
      )}

      {pendingReward && (
        <RewardModal 
          reward={pendingReward}
          onContinue={() => {
            claimReward();
            if (stage === 7) {
              const nextId = Math.min(15, mission.id + 1);
              setActiveMissionId(nextId);
              setStage(0);
              setCurrentView('map');
            }
          }}
          onViewCollection={() => {
            claimReward();
            setCurrentView('collection');
          }}
        />
      )}

    </div>
  );
};
