import React, { useState, useRef } from 'react';
import { useGuardian } from '../context/GuardianContext';
import { DEMO_TEACHER_STUDENTS, MISSIONS_DATA } from '../data/pedagogicalData';
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
  X,
  Database,
  FileSpreadsheet,
  Upload,
  FileText,
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  BookOpen,
  MessageSquare,
  Check
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
    restoreBackupProfiles,
    cloudConnected,
    setCurrentView
  } = useGuardian();

  const [enteredPin, setEnteredPin] = useState('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [gradeFilter, setGradeFilter] = useState<string>('todos');
  const [expandedMissionId, setExpandedMissionId] = useState<number | null>(null);
  const [showSessionHistory, setShowSessionHistory] = useState<boolean>(false);
  const [authError, setAuthError] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [studentToDelete, setStudentToDelete] = useState<{ id: string; name: string } | null>(null);
  const [actionFeedback, setActionFeedback] = useState<string>('');
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [showBackupModal, setShowBackupModal] = useState<boolean>(false);
  const [isRestoring, setIsRestoring] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      <div className="w-full max-w-2xl mx-auto px-4 py-12 sm:py-16 animate-fadeIn min-w-0">
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

    // Helper para formatear fechas de manera amigable
  const formatFriendlyDate = (isoString?: string): string => {
    if (!isoString) return 'Sin fecha registrada';
    try {
      const d = new Date(isoString);
      if (isNaN(d.getTime())) return isoString;
      return d.toLocaleDateString('es-CO', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch {
      return isoString;
    }
  };

  // Helper para calcular la última actividad real del estudiante
  const getStudentLatestActivity = (p: any) => {
    const dates: number[] = [];
    if (p.lastLoginAt) dates.push(new Date(p.lastLoginAt).getTime());
    if (p.createdAt) dates.push(new Date(p.createdAt).getTime());
    
    Object.values(p.answers || {}).forEach((a: any) => {
      if (a.answeredAt) dates.push(new Date(a.answeredAt).getTime());
    });
    Object.values(p.evidences || {}).forEach((e: any) => {
      if (e.submittedAt) dates.push(new Date(e.submittedAt).getTime());
    });
    
    if (dates.length === 0) {
      return { date: new Date(), text: 'Sin actividad' };
    }
    
    const maxTime = Math.max(...dates.filter(t => !isNaN(t)));
    const latestDate = new Date(maxTime);
    
    const now = new Date();
    const isToday = latestDate.toDateString() === now.toDateString();
    const timeStr = latestDate.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', hour12: true });
    
    if (isToday) {
      return { date: latestDate, text: `Hoy, ${timeStr}` };
    }
    
    const dateStr = latestDate.toLocaleDateString('es-CO', { day: '2-digit', month: 'short' });
    return { date: latestDate, text: `${dateStr}, ${timeStr}` };
  };

  // Siempre mostramos los datos reales de Firebase (modo demo eliminado)
  const studentList = profiles.map(p => {
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

    const activity = getStudentLatestActivity(p);

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
      lastActive: activity.text,
      createdAtText: formatFriendlyDate(p.createdAt),
      lastLoginAtText: p.lastLoginAt ? formatFriendlyDate(p.lastLoginAt) : 'Sin login registrado',
      loginCount: p.loginSessions?.length || (p.lastLoginAt ? 1 : 0),
      loginSessions: p.loginSessions || [],
      evidencesCount: Object.keys(p.evidences).length,
      sampleReflection: p.passportEntries[0]?.reflection || 'Sin reflexiones aún',
      rawProfile: p,
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

  // 1. Descarga del respaldo completo del sistema (100% de los datos de todos los estudiantes)
  const handleExportFullBackup = () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const dateFormatted = new Date().toLocaleDateString('es-CO');
    
    const backupData = {
      sistema: "Guardianes del Bosque",
      tipo: "COPIA_DE_SEGURIDAD_COMPLETA",
      version: "1.0",
      fechaExportacion: new Date().toISOString(),
      fechaFormateada: dateFormatted,
      totalEstudiantes: profiles.length,
      institucion: "Corporación Universitaria Iberoamericana",
      programa: "Maestría en Educación",
      autores: [
        "Danilo Enrique Insuasty Delgado",
        "María Fernanda Gutiérrez Chica"
      ],
      perfilesEstudiantes: profiles
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `copia_seguridad_completa_guardianes_${timestamp}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    
    setActionFeedback(`¡Copia de seguridad completa descargada exitosamente (${profiles.length} perfiles con todas sus respuestas y avances)!`);
    setTimeout(() => setActionFeedback(''), 5000);
  };

  // 2. Exportación a Excel / CSV de las respuestas detalladas por pregunta y nivel de lectura
  const handleExportCSV = () => {
    const BOM = "\uFEFF"; // Para que Excel en español reconozca caracteres con tildes y ñ
    const headers = [
      "ID Estudiante",
      "Nombre Estudiante",
      "Usuario",
      "Grado",
      "Misión ID",
      "Título Misión",
      "Zona Territorial",
      "Nivel de Comprensión",
      "ID Pregunta",
      "Pregunta Formulada",
      "Opción Seleccionada (ID)",
      "Respuesta Seleccionada (Texto)",
      "¿Es Correcta?",
      "Argumentación Escrita del Estudiante",
      "Fecha y Hora de Respuesta"
    ];

    const escapeCsv = (val: any) => {
      if (val === undefined || val === null) return '""';
      const str = String(val).replace(/"/g, '""').replace(/\r?\n/g, ' ');
      return `"${str}"`;
    };

    const rows: string[] = [headers.join(",")];

    const questionMap = new Map<string, { missionId: number; missionTitle: string; zone: string; level: string; questionText: string; options: Record<string, string> }>();
    
    MISSIONS_DATA.forEach(m => {
      const allQ = [
        ...m.literalQuestions.map(q => ({ q, level: 'Literal' })),
        ...m.inferentialQuestions.map(q => ({ q, level: 'Inferencial' })),
        ...m.criticalQuestions.map(q => ({ q, level: 'Crítico' }))
      ];
      allQ.forEach(({ q, level }) => {
        const optMap: Record<string, string> = {};
        q.options.forEach(opt => {
          optMap[opt.id] = opt.text;
        });
        questionMap.set(q.id, {
          missionId: m.id,
          missionTitle: m.title,
          zone: m.territoryZone,
          level,
          questionText: q.questionText,
          options: optMap
        });
      });
    });

    profiles.forEach(p => {
      const answersList = Object.values(p.answers || {});
      if (answersList.length === 0) {
        rows.push([
          escapeCsv(p.id),
          escapeCsv(p.name),
          escapeCsv(p.username),
          escapeCsv(p.grade),
          escapeCsv("-"),
          escapeCsv("Sin misiones iniciadas"),
          escapeCsv("-"),
          escapeCsv("-"),
          escapeCsv("-"),
          escapeCsv("-"),
          escapeCsv("-"),
          escapeCsv("-"),
          escapeCsv("-"),
          escapeCsv("-"),
          escapeCsv("-")
        ].join(","));
      } else {
        answersList.forEach(ans => {
          const qInfo = questionMap.get(ans.questionId);
          const missionId = qInfo ? qInfo.missionId : (ans.questionId.split('_')[0] || '-');
          const missionTitle = qInfo ? qInfo.missionTitle : `Misión ${missionId}`;
          const zone = qInfo ? qInfo.zone : '-';
          const level = qInfo ? qInfo.level : (ans.questionId.includes('_l') ? 'Literal' : ans.questionId.includes('_i') ? 'Inferencial' : 'Crítico');
          const questionText = qInfo ? qInfo.questionText : ans.questionId;
          const optionText = qInfo && qInfo.options[ans.selectedOptionId] ? qInfo.options[ans.selectedOptionId] : ans.selectedOptionId;
          const isCorrectStr = ans.isCorrect === true ? "SÍ" : ans.isCorrect === false ? "NO" : "Formativa/Crítica";

          rows.push([
            escapeCsv(p.id),
            escapeCsv(p.name),
            escapeCsv(p.username),
            escapeCsv(p.grade),
            escapeCsv(missionId),
            escapeCsv(missionTitle),
            escapeCsv(zone),
            escapeCsv(level),
            escapeCsv(ans.questionId),
            escapeCsv(questionText),
            escapeCsv(ans.selectedOptionId),
            escapeCsv(optionText),
            escapeCsv(isCorrectStr),
            escapeCsv(ans.writtenArgument || ""),
            escapeCsv(ans.answeredAt ? new Date(ans.answeredAt).toLocaleString('es-CO') : "")
          ].join(","));
        });
      }
    });

    const csvContent = BOM + rows.join("\r\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    downloadAnchor.setAttribute("href", url);
    downloadAnchor.setAttribute("download", `respuestas_comprension_lectora_guardianes_${timestamp}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    URL.revokeObjectURL(url);

    setActionFeedback("¡Reporte de respuestas descargado en formato Excel / CSV para tu investigación!");
    setTimeout(() => setActionFeedback(''), 5000);
  };

  // 3. Exportación a Excel / CSV de reflexiones del pasaporte y desafíos ambientales
  const handleExportReflectionsCSV = () => {
    const BOM = "\uFEFF";
    const headers = [
      "ID Estudiante",
      "Nombre Estudiante",
      "Grado",
      "Tipo de Registro",
      "Misión ID",
      "Título Misión / Desafío",
      "Insignia Obtenida",
      "Texto de Reflexión / Acción Comunitaria",
      "Fecha de Realización"
    ];

    const escapeCsv = (val: any) => {
      if (val === undefined || val === null) return '""';
      const str = String(val).replace(/"/g, '""').replace(/\r?\n/g, ' ');
      return `"${str}"`;
    };

    const rows: string[] = [headers.join(",")];

    profiles.forEach(p => {
      (p.passportEntries || []).forEach(entry => {
        rows.push([
          escapeCsv(p.id),
          escapeCsv(p.name),
          escapeCsv(p.grade),
          escapeCsv("Reflexión Pasaporte"),
          escapeCsv(entry.missionId),
          escapeCsv(entry.missionTitle),
          escapeCsv(entry.badgeName),
          escapeCsv(entry.reflection),
          escapeCsv(entry.completedAt)
        ].join(","));
      });

      Object.values(p.evidences || {}).forEach(ev => {
        const submittedText = typeof ev.submittedData === 'object'
          ? Object.entries(ev.submittedData).map(([k, v]) => `${k}: ${v}`).join(' | ')
          : String(ev.submittedData);

        rows.push([
          escapeCsv(p.id),
          escapeCsv(p.name),
          escapeCsv(p.grade),
          escapeCsv("Desafío Ambiental"),
          escapeCsv(ev.missionId),
          escapeCsv(ev.challengeTitle),
          escapeCsv("-"),
          escapeCsv(submittedText),
          escapeCsv(ev.submittedAt ? new Date(ev.submittedAt).toLocaleString('es-CO') : "-")
        ].join(","));
      });
    });

    const csvContent = BOM + rows.join("\r\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    downloadAnchor.setAttribute("href", url);
    downloadAnchor.setAttribute("download", `reflexiones_y_desafios_guardianes_${timestamp}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    URL.revokeObjectURL(url);

    setActionFeedback("¡Reporte de reflexiones y desafíos descargado en CSV / Excel!");
    setTimeout(() => setActionFeedback(''), 5000);
  };

  // 4. Restauración de copia de seguridad desde archivo .JSON
  const handleFileRestore = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsRestoring(true);
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const profilesToRestore = Array.isArray(parsed) 
        ? parsed 
        : (parsed.perfilesEstudiantes || parsed.profiles || []);

      if (!Array.isArray(profilesToRestore) || profilesToRestore.length === 0) {
        alert('El archivo no contiene un formato válido de copia de seguridad de Guardianes del Bosque.');
        setIsRestoring(false);
        return;
      }

      const res = await restoreBackupProfiles(profilesToRestore);
      if (res.success) {
        setActionFeedback(`¡Copia de seguridad restaurada exitosamente! Se actualizaron ${res.count} estudiantes con sus respuestas y avances.`);
        setShowBackupModal(false);
        setTimeout(() => setActionFeedback(''), 5000);
      } else {
        alert(res.message || 'Error al restaurar copia de seguridad.');
      }
    } catch (err) {
      console.error(err);
      alert('Error al leer el archivo. Asegúrate de seleccionar un archivo .json válido.');
    } finally {
      setIsRestoring(false);
      if (e.target) e.target.value = '';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8 animate-fadeIn min-w-0">
      
      {/* Cabecera del Panel Docente Clara y Profesional */}
      <div className="bg-gradient-to-r from-emerald-800 via-forest-700 to-amber-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center text-amber-300 shrink-0 shadow-sm">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full bg-amber-400 text-forest-950 text-xs font-bold font-mono shadow-xs">
                  OBSERVATORIO DOCENTE EXCLUSIVO
                </span>
                <span className="text-xs text-emerald-100 font-medium">Grado 7° • Magangué y La Mojana</span>
                {cloudConnected ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-400/25 text-emerald-100 border border-emerald-300/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Sincronizado en Nube (Firebase)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/25 text-amber-200 border border-amber-300/40">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    Modo Local
                  </span>
                )}
              </div>
              <h1 className="font-display font-black text-2xl sm:text-3xl mt-1 text-white">
                Panel del Docente e Investigador Pedagógico
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100 font-serif italic mt-0.5">
                Seguimiento del grupo, recuperación de credenciales y analítica de los niveles literal, inferencial y crítico.
              </p>
            </div>
          </div>


          <div className="flex items-center gap-2">
              <button
                onClick={() => setShowBackupModal(true)}
                className="px-3.5 py-2 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-forest-950 rounded-xl text-xs font-black transition-all flex items-center gap-2 shadow-md shadow-amber-900/20 cursor-pointer active:scale-98"
                title="Centro de copias de seguridad, reportes para Excel y restauración"
              >
                <Database className="w-4 h-4 text-forest-950 shrink-0" />
                <span>Copias y Reportes</span>
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
        
        {/* Lista de Alumnos con Buscador, Filtro y Último Acceso */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
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

          {/* Buscador de estudiantes */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nombre o @usuario..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-900 placeholder-slate-400"
            />
          </div>

          {/* Filtro por Grado */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px]">
            {['todos', '7°1', '7°2', '7°3', '7°4', '7°A'].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGradeFilter(g)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-colors shrink-0 cursor-pointer ${
                  gradeFilter === g
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {g === 'todos' ? 'Todos' : g}
              </button>
            ))}
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            {studentList
              .filter(st => {
                const matchesSearch = st.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                      st.username.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesGrade = gradeFilter === 'todos' || st.grade === gradeFilter;
                return matchesSearch && matchesGrade;
              })
              .map((st) => {
                const isSelected = selectedStudent?.id === st.id;
                return (
                  <div
                    key={st.id}
                    onClick={() => setSelectedStudentId(st.id)}
                    className={`p-3 rounded-2xl border-2 cursor-pointer transition-all ${
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

                    {/* Fila con Usuario y PIN */}
                    <div className="mt-1 flex items-center gap-2 text-[11px]">
                      <span className="font-mono text-emerald-700 font-bold bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                        @{st.username}
                      </span>
                      {st.pin && st.pin !== 'Sin PIN' && (
                        <span className="font-mono text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 text-[10px]">
                          PIN: {st.pin}
                        </span>
                      )}
                    </div>

                    <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                      <span>Misiones: <strong>{st.completedMissionCount}/15</strong></span>
                      <span className="flex items-center gap-0.5 text-slate-600">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {st.lastActive}
                      </span>
                    </div>

                    {/* Micro barra de avance */}
                    <div className="w-full h-1.5 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
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

              {/* Objetos de Colección */}
              <div className="space-y-2 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Objetos de Colección ({profiles.find(p => p.id === selectedStudent.id)?.collection ? Object.keys(profiles.find(p => p.id === selectedStudent.id)!.collection).length : 0}/30)
                </span>
                <p className="text-[10px] text-slate-500 font-medium">Actividad exploratoria no evaluativa del territorio.</p>
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

      {/* Ficha Técnica y Créditos Académicos de la Investigación */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base">
              🎓
            </div>
            <div>
              <h3 className="font-display font-black text-base text-slate-800">
                Ficha Técnica y Créditos de Investigación
              </h3>
              <p className="text-xs text-slate-500">
                Proyecto de Grado • Maestría en Educación • Corporación Universitaria Iberoamericana
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 self-start sm:self-auto">
            Magangué y La Mojana, Colombia
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5">
            <div className="flex items-center justify-between">
              <p className="font-bold text-emerald-950 text-sm">
                Danilo Enrique Insuasty Delgado
              </p>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200/70 text-emerald-900">
                Autor
              </span>
            </div>
            <p className="text-emerald-700 font-semibold text-xs">
              Diseño y Desarrollo de la Plataforma Web
            </p>
            <p className="text-slate-600 text-[11px] leading-relaxed pt-1">
              Desarrollo de la aplicación interactiva, arquitectura de software, experiencia de usuario y sistema de gamificación de Guardianes del Bosque.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-1.5">
            <div className="flex items-center justify-between">
              <p className="font-bold text-amber-950 text-sm">
                María Fernanda Gutiérrez Chica
              </p>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/70 text-amber-900">
                Autora
              </span>
            </div>
            <p className="text-amber-800 font-semibold text-xs">
              Diseño Pedagógico, Material y Temáticas Ambientales
            </p>
            <p className="text-slate-600 text-[11px] leading-relaxed pt-1">
              Estructura didáctica, redacción de lecturas contextualizadas, formulación de preguntas por niveles de lectura y diseño de los desafíos ambientales.
            </p>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center pt-1 border-t border-slate-100">
          Estrategia pedagógica gamificada para el fortalecimiento de la comprensión lectora en educación ambiental con estudiantes de Grado 7°.
        </p>
      </div>

      {/* Input oculto para restaurar copias de seguridad */}
      <input 
        ref={fileInputRef} 
        type="file" 
        accept=".json" 
        onChange={handleFileRestore} 
        className="hidden" 
      />

      {/* Modal del Centro de Copias de Seguridad y Reportes */}
      {showBackupModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn overflow-y-auto">
          <div className="bg-white border-2 border-emerald-300 rounded-3xl p-5 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 animate-scaleUp my-auto">
            
            {/* Cabecera del Modal */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-slate-900">
                    Centro de Copias de Seguridad y Reportes
                  </h3>
                  <p className="text-xs text-slate-500 font-reading">
                    Respaldo del avance de los estudiantes, respuestas de misiones y exportación para la tesis.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowBackupModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
                title="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Opciones de Copia y Exportación */}
            <div className="grid grid-cols-1 gap-3.5 max-h-[60vh] overflow-y-auto pr-1">
              
              {/* Opción 1: Respaldo Completo JSON */}
              <div className="p-4 sm:p-4.5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-emerald-600 text-white shadow-xs">
                      <Database className="w-4 h-4" />
                    </span>
                    <h4 className="font-display font-bold text-sm text-emerald-950">
                      Copia de Seguridad Maestra (.JSON)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-reading">
                    Descarga el <strong>100% de la información</strong>: todos los perfiles de los niños, cada una de sus respuestas, justificaciones escritas, reflexiones del pasaporte, desafíos y avances. Sirve como respaldo total que puede restaurarse en cualquier momento.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleExportFullBackup}
                  className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Respaldo</span>
                </button>
              </div>

              {/* Opción 2: Reporte Excel/CSV de Respuestas por Nivel */}
              <div className="p-4 sm:p-4.5 rounded-2xl border-2 border-sky-200 bg-sky-50/50 hover:bg-sky-50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-sky-600 text-white shadow-xs">
                      <FileSpreadsheet className="w-4 h-4" />
                    </span>
                    <h4 className="font-display font-bold text-sm text-sky-950">
                      Matriz de Respuestas para Excel (.CSV)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-reading">
                    Genera una tabla lista para <strong>Microsoft Excel</strong> o <strong>Google Sheets</strong> con el detalle de cada pregunta: misión, nivel (Literal, Inferencial, Crítico), pregunta, opción elegida, acierto y los argumentos escritos redactados por el estudiante.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleExportCSV}
                  className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar a Excel</span>
                </button>
              </div>

              {/* Opción 3: Reporte Excel/CSV de Reflexiones y Desafíos */}
              <div className="p-4 sm:p-4.5 rounded-2xl border-2 border-amber-200 bg-amber-50/50 hover:bg-amber-50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-amber-600 text-white shadow-xs">
                      <FileText className="w-4 h-4" />
                    </span>
                    <h4 className="font-display font-bold text-sm text-amber-950">
                      Bitácora de Reflexiones y Desafíos (.CSV)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-reading">
                    Exporta todos los textos cualitativos redactados por los estudiantes en su <strong>Pasaporte del Guardián</strong> y las propuestas de acción comunitaria enviadas en los desafíos ambientales.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleExportReflectionsCSV}
                  className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar Bitácora</span>
                </button>
              </div>

              {/* Opción 4: Restaurar Copia */}
              <div className="p-4 sm:p-4.5 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/80 hover:bg-slate-100/80 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-slate-700 text-white shadow-xs">
                      <Upload className="w-4 h-4" />
                    </span>
                    <h4 className="font-display font-bold text-sm text-slate-900">
                      Restaurar Copia de Seguridad
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-reading">
                    Si formateaste el equipo o deseas cargar datos de otra jornada, selecciona un archivo <code>.json</code> previamente respaldado para restaurar a los estudiantes y sus respuestas.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={isRestoring}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 disabled:opacity-50 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{isRestoring ? 'Restaurando...' : 'Subir Archivo .JSON'}</span>
                </button>
              </div>

            </div>

            {/* Pie del Modal */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Total estudiantes actuales: <strong>{profiles.length}</strong>
              </span>
              <button
                type="button"
                onClick={() => setShowBackupModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}

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
