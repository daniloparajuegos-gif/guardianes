import React, { useState } from 'react';
import { useGuardian } from '../context/GuardianContext';
import { DEMO_TEACHER_STUDENTS } from '../data/pedagogicalData';
import { 
  GraduationCap, 
  Users, 
  Download, 
  Eye, 
  AlertTriangle, 
  Compass, 
  ShieldAlert,
  Award,
  Scale,
  Lock,
  KeyRound,
  ArrowRight,
  ShieldCheck,
  LogOut,
  Key,
  Trash2,
  RefreshCw,
  CheckCircle2,
  X
} from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const { 
    profiles, 
    useDemoTeacherData, 
    setUseDemoTeacherData,
    isTeacherAuthenticated,
    teacherLogin,
    teacherLogout,
    deleteStudentProfile,
    resetAllProfilesToDefault,
    setCurrentView
  } = useGuardian();

  const [enteredPin, setEnteredPin] = useState('');
  const [authError, setAuthError] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [studentToDelete, setStudentToDelete] = useState<{ id: string; name: string } | null>(null);
  const [actionFeedback, setActionFeedback] = useState<string>('');
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  // Si no está autenticado como docente, mostrar pantalla de bloqueo / acceso seguro
  if (!isTeacherAuthenticated) {
    const handleAuthSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const res = teacherLogin(enteredPin);
      if (!res.success) {
        setAuthError(res.message || 'Clave docente incorrecta.');
      } else {
        setAuthError('');
        setEnteredPin('');
      }
    };

    return (
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16 animate-fadeIn">
        <div className="bg-white border-2 border-emerald-300/80 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 text-center">
          
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center mx-auto shadow-md shadow-amber-500/30">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-[11px] font-bold text-emerald-900 uppercase tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              Acceso Exclusivo para Docentes e Investigadores
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
              Observatorio Pedagógico de Grado 7°
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-reading leading-relaxed">
              Por privacidad y protección de los estudiantes, la lista completa del salón, los resultados individuales de comprensión lectora y las credenciales están resguardadas en este panel.
            </p>
          </div>

          <form onSubmit={handleAuthSubmit} className="max-w-sm mx-auto space-y-4 pt-2">
            <div className="text-left space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <KeyRound className="w-4 h-4 text-amber-600" />
                Ingresa la Clave Maestra de Docente:
              </label>
              <input
                type="password"
                value={enteredPin}
                onChange={(e) => setEnteredPin(e.target.value)}
                placeholder="Ingresa la clave confidencial"
                className="w-full px-4 py-3 rounded-2xl border-2 border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm font-mono text-slate-900 tracking-wider transition-all"
                autoFocus
              />
              <p className="text-[11px] text-slate-500 italic">
                Acceso restringido para el cuerpo docente e investigadores de grado 7°.
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2 text-left">
                <AlertTriangle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-500 hover:to-forest-600 text-white font-display font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <span>Desbloquear Observatorio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setCurrentView('map')}
              className="text-xs text-slate-500 hover:text-emerald-700 font-medium transition-colors"
            >
              ← Volver al Mapa de la Aventura Estudiantil
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Determinar los estudiantes a mostrar (Demostración vs Reales)
  const studentList = useDemoTeacherData
    ? DEMO_TEACHER_STUDENTS.map(s => ({
        ...s,
        username: s.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '.'),
        pin: '1234'
      }))
    : profiles.map(p => {
        const completedCount = p.completedMissionIds.length;
        const answersList = Object.values(p.answers);
        
        const literalAnswers = answersList.filter(a => a.questionId.includes('_l'));
        const inferentialAnswers = answersList.filter(a => a.questionId.includes('_i'));
        const criticalAnswers = answersList.filter(a => a.questionId.includes('_c'));

        const literalAcc = literalAnswers.length > 0 
          ? Math.round((literalAnswers.filter(a => a.isCorrect).length / literalAnswers.length) * 100)
          : 0;
        const inferentialAcc = inferentialAnswers.length > 0
          ? Math.round((inferentialAnswers.filter(a => a.isCorrect).length / inferentialAnswers.length) * 100)
          : 0;
        const criticalAcc = criticalAnswers.length > 0
          ? Math.round((criticalAnswers.filter(a => a.isCorrect).length / criticalAnswers.length) * 100)
          : 0;

        return {
          id: p.id,
          name: p.name,
          username: p.username || p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '.'),
          pin: p.pin || 'Sin PIN',
          grade: p.grade,
          avatar: p.avatar,
          completedMissionCount: completedCount,
          completedMissionIds: p.completedMissionIds,
          earnedBadges: p.earnedBadges,
          literalAccuracy: literalAcc,
          inferentialAccuracy: inferentialAcc,
          criticalAccuracy: criticalAcc,
          lastActive: new Date(p.createdAt).toLocaleDateString('es-CO'),
          evidencesCount: Object.keys(p.evidences).length,
          sampleReflection: p.passportEntries[0]?.reflection || 'Sin reflexiones aún',
          isDemonstration: false
        };
      });

  const totalStudents = studentList.length;
  const avgMissions = totalStudents > 0 
    ? (studentList.reduce((acc, s) => acc + s.completedMissionCount, 0) / totalStudents).toFixed(1)
    : '0';

  const avgLiteral = totalStudents > 0
    ? Math.round(studentList.reduce((acc, s) => acc + s.literalAccuracy, 0) / totalStudents)
    : 0;
  const avgCritical = totalStudents > 0
    ? Math.round(studentList.reduce((acc, s) => acc + s.criticalAccuracy, 0) / totalStudents)
    : 0;

  const selectedStudent = studentList.find(s => s.id === selectedStudentId) || studentList[0];

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(studentList, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `reporte_pedagogico_docente_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Cabecera del Panel Docente Clara y Profesional */}
      <div className="bg-gradient-to-r from-emerald-800 via-forest-700 to-amber-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center text-amber-300 shrink-0 shadow-sm">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full bg-amber-400 text-forest-950 text-xs font-bold font-mono shadow-xs">
                  OBSERVATORIO DOCENTE EXCLUSIVO
                </span>
                <span className="text-xs text-emerald-100 font-medium">Grado 7° • Magangué y La Mojana</span>
              </div>
              <h1 className="font-display font-black text-2xl sm:text-3xl mt-1 text-white">
                Panel del Docente e Investigador Pedagógico
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100 font-serif italic mt-0.5">
                Seguimiento del grupo, recuperación de credenciales y analítica de los niveles literal, inferencial y crítico.
              </p>
            </div>
          </div>

          {/* Selector de Modo y Acciones del Docente */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-1.5 flex items-center gap-1 text-xs">
              <button
                onClick={() => setUseDemoTeacherData(false)}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  !useDemoTeacherData 
                    ? 'bg-white text-forest-900 shadow-md' 
                    : 'text-white hover:bg-white/15'
                }`}
              >
                Datos Reales de Sala ({profiles.length})
              </button>
              <button
                onClick={() => setUseDemoTeacherData(true)}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  useDemoTeacherData 
                    ? 'bg-amber-400 text-forest-950 shadow-md' 
                    : 'text-white hover:bg-white/15'
                }`}
              >
                Datos de Demostración (5)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportData}
                className="px-3 py-2 bg-white hover:bg-emerald-50 text-forest-900 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                title="Descargar datos en JSON"
              >
                <Download className="w-3.5 h-3.5 text-emerald-700" />
                <span>Exportar</span>
              </button>

              <button
                onClick={() => setShowResetConfirm(true)}
                className="px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer border border-white/30"
                title="Restablecer perfiles a los 5 estudiantes iniciales"
              >
                <RefreshCw className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Restablecer</span>
              </button>

              <button
                onClick={teacherLogout}
                className="px-3 py-2 bg-red-500/90 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                title="Bloquear y salir del observatorio docente"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Bloquear</span>
              </button>
            </div>
          </div>
        </div>

        {/* Banner de Aviso de Datos de Demostración */}
        {useDemoTeacherData && (
          <div className="mt-5 px-4 py-2.5 rounded-2xl bg-amber-400/20 border border-amber-300/40 flex items-center gap-2.5 text-xs text-amber-100">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-300" />
            <span>
              <strong>MODO DEMOSTRACIÓN ACTIVO:</strong> Estás observando perfiles simulados de ejemplo pedagógico. Cambia a "Datos Reales de Sala" para visualizar y gestionar a los estudiantes registrados en este computador.
            </span>
          </div>
        )}
      </div>

      {/* Notificación de Acción (Eliminación / Restablecimiento) */}
      {actionFeedback && (
        <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-xs text-emerald-950 font-bold flex items-center justify-between shadow-sm animate-fadeIn">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            {actionFeedback}
          </span>
          <button 
            type="button" 
            onClick={() => setActionFeedback('')} 
            className="text-emerald-700 hover:text-emerald-950 p-1 rounded-lg hover:bg-emerald-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Tarjetas de Métricas Cuantitativas Generales Claras */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white border-2 border-emerald-200 rounded-3xl p-6 space-y-1 shadow-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-emerald-600" />
            Estudiantes en Registro
          </span>
          <div className="text-3xl font-display font-black text-slate-900">
            {totalStudents}
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Grados 7°A y 7°B • Participación activa
          </p>
        </div>

        <div className="bg-white border-2 border-emerald-200 rounded-3xl p-6 space-y-1 shadow-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-emerald-600" />
            Promedio de Misiones
          </span>
          <div className="text-3xl font-display font-black text-slate-900">
            {avgMissions} <span className="text-sm font-sans font-normal text-slate-400">/ 15</span>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Ritmo de avance territorial
          </p>
        </div>

        <div className="bg-white border-2 border-emerald-200 rounded-3xl p-6 space-y-1 shadow-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-emerald-600" />
            Precisión Literal Media
          </span>
          <div className="text-3xl font-display font-black text-emerald-600">
            {avgLiteral}%
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Nivel 1: Los ojos del Guardián
          </p>
        </div>

        <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 space-y-1 shadow-sm">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-amber-600" />
            Precisión Crítica Media
          </span>
          <div className="text-3xl font-display font-black text-amber-600">
            {avgCritical}%
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Nivel 3: La decisión del Guardián
          </p>
        </div>

      </div>

      {/* Tabla de Estudiantes y Visor de Respuestas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Lista de Alumnos con Usuario y PIN visible para el Docente */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                Estudiantes Registrados
              </h3>
              <p className="text-[11px] text-slate-500">Solo visible para el docente</p>
            </div>
            <span className="text-xs text-emerald-800 font-mono font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              {studentList.length} alumnos
            </span>
          </div>

          <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
            {studentList.map((st) => {
              const isSelected = selectedStudent?.id === st.id;
              return (
                <div
                  key={st.id}
                  onClick={() => setSelectedStudentId(st.id)}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 shadow-sm ring-2 ring-emerald-400/30'
                      : 'bg-slate-50/70 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 truncate max-w-[130px]">
                      {st.name}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-white text-emerald-800 border border-emerald-300">
                        {st.grade}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setStudentToDelete({ id: st.id, name: st.name });
                        }}
                        className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title={`Eliminar perfil de ${st.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Fila con Usuario y PIN para asistencia rápida en clase */}
                  <div className="mt-1.5 flex items-center gap-2 text-[11px]">
                    <span className="font-mono text-emerald-700 font-bold bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                      @{st.username}
                    </span>
                    {st.pin && st.pin !== 'Sin PIN' && (
                      <span className="font-mono text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 text-[10px]">
                        PIN: {st.pin}
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                    <span>Misiones: {st.completedMissionCount}/15</span>
                    <span className="text-slate-400 text-[10px]">{st.lastActive}</span>
                  </div>

                  {/* Micro barra de avance */}
                  <div className="w-full h-2 bg-slate-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" 
                      style={{ width: `${(st.completedMissionCount / 15) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detalle del Estudiante Seleccionado */}
        <div className="lg:col-span-2 space-y-6">
          {selectedStudent ? (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {selectedStudent.grade}
                    </span>
                    {selectedStudent.isDemonstration && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                        DEMOSTRACIÓN
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-black text-2xl text-slate-900 mt-1">
                    {selectedStudent.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Última actividad registrada: {selectedStudent.lastActive}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-right bg-emerald-50 px-4 py-2.5 rounded-2xl border border-emerald-200">
                    <div className="text-[11px] text-emerald-800 font-bold uppercase">Insignias Obtenidas</div>
                    <div className="text-2xl font-black font-mono text-emerald-700">
                      {selectedStudent.earnedBadges.length} <span className="text-xs font-normal text-slate-400">/ 15</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStudentToDelete({ id: selectedStudent.id, name: selectedStudent.name })}
                    className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-2xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 shadow-2xs cursor-pointer group"
                    title={`Eliminar el registro de ${selectedStudent.name}`}
                  >
                    <Trash2 className="w-4 h-4 text-rose-500 group-hover:text-rose-700 transition-transform group-hover:scale-110" />
                    <span className="text-[10px]">Eliminar</span>
                  </button>
                </div>
              </div>

              {/* Tarjeta de Asistencia del Docente: Credenciales de Acceso */}
              <div className="bg-amber-50/70 border-2 border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center shrink-0">
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wide block">
                      Credenciales de Acceso para el Estudiante
                    </span>
                    <p className="text-xs text-amber-800">
                      Usa estos datos si el estudiante olvida cómo ingresar en su computador.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <div className="bg-white px-3 py-1.5 rounded-xl border border-amber-300 text-slate-800 font-bold shadow-xs">
                    Usuario: <span className="text-emerald-700">@{selectedStudent.username}</span>
                  </div>
                  <div className="bg-white px-3 py-1.5 rounded-xl border border-amber-300 text-slate-800 font-bold shadow-xs">
                    PIN: <span className="text-amber-700">{selectedStudent.pin}</span>
                  </div>
                </div>
              </div>

              {/* Radar de Competencia de Comprensión Lectora */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Desempeño por Nivel de Comprensión Lectora
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="bg-emerald-50/70 border-2 border-emerald-200 rounded-2xl p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-900">Literal</span>
                      <span className="font-black text-emerald-700">{selectedStudent.literalAccuracy}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-emerald-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${selectedStudent.literalAccuracy}%` }} />
                    </div>
                    <span className="text-[10px] text-emerald-800 block font-medium">Identificación de datos explícitos</span>
                  </div>

                  <div className="bg-sky-50/70 border-2 border-sky-200 rounded-2xl p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-sky-900">Inferencial</span>
                      <span className="font-black text-sky-700">{selectedStudent.inferentialAccuracy}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-sky-200 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-600 rounded-full" style={{ width: `${selectedStudent.inferentialAccuracy}%` }} />
                    </div>
                    <span className="text-[10px] text-sky-800 block font-medium">Deducción de causas y efectos</span>
                  </div>

                  <div className="bg-amber-50/70 border-2 border-amber-200 rounded-2xl p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-900">Crítico</span>
                      <span className="font-black text-amber-700">{selectedStudent.criticalAccuracy}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-amber-200 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-600 rounded-full" style={{ width: `${selectedStudent.criticalAccuracy}%` }} />
                    </div>
                    <span className="text-[10px] text-amber-800 block font-medium">Argumentación con el texto</span>
                  </div>
                </div>
              </div>

              {/* Muestra de Reflexión del Pasaporte */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                  Muestra de Reflexión Registrada en el Pasaporte:
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-reading italic leading-relaxed">
                  "{selectedStudent.sampleReflection}"
                </p>
              </div>

              {/* Insignias Obtenidas por el Estudiante */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Insignias Ganadas ({selectedStudent.earnedBadges.length})
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedStudent.earnedBadges.map((badgeName, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-amber-50 border border-amber-300 text-[11px] text-amber-900 font-bold flex items-center gap-1.5 shadow-xs"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      {badgeName}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 text-center text-xs text-slate-500 font-medium">
              Selecciona un estudiante para visualizar su informe detallado.
            </div>
          )}

          {/* Recomendación Metodológica para la Investigación (Sección 17 del Documento) */}
          <div className="bg-emerald-50/80 border-2 border-emerald-300 rounded-3xl p-6 sm:p-7 space-y-3 shadow-xs">
            <h4 className="font-display font-bold text-base text-emerald-950 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-emerald-700" />
              Recomendación Metodológica para la Investigación (Sección 17)
            </h4>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-reading font-medium">
              "Las actividades de las misiones funcionan como intervención pedagógica. Para medir el cambio en comprensión lectora, conviene mantener separados los instrumentos de diagnóstico y evaluación final de las preguntas trabajadas durante las misiones, evitando que el entrenamiento haga que el estudiante simplemente recuerde respuestas. La guía de cada misión corresponde al material de trabajo del estudiante; el diario de campo corresponde al registro reflexivo del docente sobre el desarrollo de la intervención."
            </p>
          </div>

        </div>

      </div>

      {/* Modal de Confirmación para Eliminar Estudiante */}
      {studentToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white border-2 border-rose-300 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto border border-rose-200">
              <Trash2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1.5">
              <h3 className="font-display font-black text-xl text-slate-900">
                ¿Eliminar estudiante del registro?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Vas a eliminar el perfil de <strong className="text-slate-900 font-bold">{studentToDelete.name}</strong>.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-[11px] text-rose-900 space-y-1">
              <span className="font-bold block flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                Advertencia importante:
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                <li>Se eliminarán sus 15 misiones, pasaporte, insignias y respuestas.</li>
                <li>El estudiante ya no podrá ingresar con su usuario ni PIN.</li>
                <li>Esta acción es permanente para este computador.</li>
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStudentToDelete(null)}
                className="flex-1 py-2.5 px-4 rounded-xl border-2 border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteStudentProfile(studentToDelete.id);
                  setActionFeedback(`El perfil de "${studentToDelete.name}" ha sido eliminado del sistema.`);
                  setStudentToDelete(null);
                  if (selectedStudentId === studentToDelete.id) {
                    setSelectedStudentId(null);
                  }
                  setTimeout(() => setActionFeedback(''), 4500);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>Sí, Eliminar</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmación para Restablecer Salón */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto border border-amber-200">
              <RefreshCw className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1.5">
              <h3 className="font-display font-black text-xl text-slate-900">
                ¿Restablecer grupo a valores iniciales?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Esto restaurará a los 5 estudiantes originales del proyecto pedagógico (Mariana, Santiago, Valentina, Carlos Mario y Lucía) con PIN estándar 1234.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2.5 px-4 rounded-xl border-2 border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  resetAllProfilesToDefault();
                  setShowResetConfirm(false);
                  setSelectedStudentId(null);
                  setActionFeedback('Se han restablecido los 5 perfiles originales de grado 7°.');
                  setTimeout(() => setActionFeedback(''), 4500);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Restablecer</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
