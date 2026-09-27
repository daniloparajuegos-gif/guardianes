import React, { useState } from 'react';
import { useGuardian } from '../context/GuardianContext';
import { 
  Compass, 
  UserCheck, 
  UserPlus, 
  KeyRound, 
  ArrowRight, 
  GraduationCap, 
  MapPin, 
  Check, 
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';

const AVATAR_OPTIONS = [
  { id: 'fauna', label: 'Jaguar Guardián', icon: '🐆', desc: 'Protector de los grandes mamíferos y bosques de galería' },
  { id: 'rio', label: 'Garza Cenagosa', icon: '🪶', desc: 'Observadora de caños, aguas profundas e icoteas' },
  { id: 'bosque', label: 'Ceiba Ancestral', icon: '🌳', desc: 'Enraizamiento con el suelo, la sombra y el dosel verde' },
  { id: 'selva', label: 'Chigüiro Sabanero', icon: '🐗', desc: 'Convivencia en comunidad y equilibrio de pastizales' },
  { id: 'cielo', label: 'Águila Pescadora', icon: '🦅', desc: 'Visión aguda desde las alturas para rastrear pistas' },
];

export const LoginScreen: React.FC = () => {
  const { 
    loginWithCredentials, 
    registerStudent, 
    teacherLogin
  } = useGuardian();

  const [activeTab, setActiveTab] = useState<'student_login' | 'student_register' | 'teacher_login'>('student_login');

  // Estado para Login Privado de Estudiante
  const [identifier, setIdentifier] = useState<string>('');
  const [studentPin, setStudentPin] = useState<string>('');
  const [showStudentPin, setShowStudentPin] = useState<boolean>(false);
  const [studentLoginError, setStudentLoginError] = useState<string>('');

  // Estado para Registro de Nuevo Estudiante
  const [newName, setNewName] = useState<string>('');
  const [newGrade, setNewGrade] = useState<string>('7°1');
  const [selectedAvatar, setSelectedAvatar] = useState<string>('fauna');
  const [newPin, setNewPin] = useState<string>('');
  const [registerError, setRegisterError] = useState<string>('');
  const [registeredSuccessUser, setRegisteredSuccessUser] = useState<string | null>(null);

  // Estado para Acceso Docente
  const [teacherPass, setTeacherPass] = useState<string>('');
  const [teacherError, setTeacherError] = useState<string>('');
  const [showTeacherPass, setShowTeacherPass] = useState<boolean>(false);

  // Mostrar sugerencias de prueba
  const [showDemoHelp, setShowDemoHelp] = useState<boolean>(false);

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentLoginError('');

    if (!identifier.trim()) {
      setStudentLoginError('Por favor ingresa tu código de estudiante o tu nombre.');
      return;
    }

    const res = loginWithCredentials(identifier.trim(), studentPin);
    if (!res.success) {
      setStudentLoginError(res.message || 'Error al iniciar sesión.');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError('');

    if (!newName.trim()) {
      setRegisterError('Por favor escribe tu nombre completo.');
      return;
    }

    const res = registerStudent(newName, newGrade, selectedAvatar, newPin);
    if (!res.success) {
      setRegisterError(res.message || 'Error al registrar.');
    } else {
      setRegisteredSuccessUser(res.profile.username);
    }
  };

  const handleTeacherLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setTeacherError('');

    if (!teacherPass) {
      setTeacherError('Por favor ingresa la clave docente.');
      return;
    }

    const res = teacherLogin(teacherPass);
    if (!res.success) {
      setTeacherError(res.message || 'Clave docente incorrecta.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#f7fbf7] via-emerald-50/50 to-[#eef7ee]">
      <div className="w-full max-w-4xl bg-white border-2 border-emerald-300 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Columna Izquierda: Identidad y Seguridad */}
        <div className="md:w-5/12 bg-gradient-to-br from-emerald-800 via-forest-700 to-teal-900 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-amber-300 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  ACCESO INDIVIDUAL Y SEGURO
                </span>
                <div className="text-[10px] text-emerald-200">Privacidad en Sala de Cómputo</div>
              </div>
            </div>

            <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
              GUARDIANES <br />
              <span className="text-amber-300 font-serif">DEL BOSQUE</span>
            </h1>

            <p className="text-xs sm:text-sm text-emerald-100 font-serif italic leading-relaxed">
              Tu progreso, lecturas, respuestas y sellos son estrictamente personales. Ningún otro compañero puede ver tus registros.
            </p>

            <div className="pt-4 border-t border-white/20 space-y-2 text-xs text-emerald-100 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Datos protegidos por PIN individual</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Magangué, La Mojana y Región Caribe</span>
              </div>
            </div>
          </div>

          {/* Botón Acceso Exclusivo Docente */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
            <button
              onClick={() => {
                setActiveTab('teacher_login');
                setTeacherError('');
              }}
              className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                activeTab === 'teacher_login'
                  ? 'bg-amber-400 text-forest-950 border-amber-300 shadow-md'
                  : 'bg-white/15 hover:bg-white/25 border-white/20 text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Solo para Docentes e Investigador</span>
            </button>
          </div>
        </div>

        {/* Columna Derecha: Formularios de Acceso */}
        <div className="md:w-7/12 p-6 sm:p-10 flex flex-col justify-between">
          
          <div>
            {/* Pestañas Superiores de Selección */}
            <div className="flex rounded-2xl bg-emerald-50 p-1.5 border border-emerald-200 mb-6">
              <button
                type="button"
                onClick={() => { setActiveTab('student_login'); setStudentLoginError(''); }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'student_login'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-forest-700 hover:text-emerald-900'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Ingresar (Tengo Cuenta)</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('student_register'); setRegisterError(''); }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'student_register'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-forest-700 hover:text-emerald-900'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                <span>Nuevo Guardián</span>
              </button>
            </div>

            {/* ========================================================
                TAB 1: INGRESO PRIVADO DE ESTUDIANTE (SIN LISTAR A OTROS)
                ======================================================== */}
            {activeTab === 'student_login' && (
              <form onSubmit={handleStudentLogin} className="space-y-4 animate-fadeIn">
                
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Tu Nombre Completo o Usuario de Guardián:
                  </label>
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Ej. Mariana Gómez o mariana.gomez"
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white font-medium"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Ingresa el nombre con el que te registraste en clase.
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-amber-600" />
                      PIN Secreto de 4 Dígitos:
                    </label>
                    <span className="text-[10px] text-slate-500">
                      (Si no tienes PIN, déjalo en blanco)
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      type={showStudentPin ? 'text' : 'password'}
                      maxLength={4}
                      value={studentPin}
                      onChange={(e) => setStudentPin(e.target.value.replace(/\D/g, ''))}
                      placeholder="****"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm font-mono tracking-widest text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowStudentPin(!showStudentPin)}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showStudentPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {studentLoginError && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-xs text-rose-800 flex items-center gap-2 animate-fadeIn font-medium">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{studentLoginError}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>ABRIR MI PASAPORTE Y CONTINUAR</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* ========================================================
                TAB 2: REGISTRO DE NUEVO GUARDIÁN
                ======================================================== */}
            {activeTab === 'student_register' && (
              <form onSubmit={handleRegister} className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Tu Nombre Completo:
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Ej. Carlos Mario Támara"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Grado Escolar:
                    </label>
                    <select
                      value={newGrade}
                      onChange={(e) => setNewGrade(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 font-bold"
                    >
                      <option value="7°1">7°1</option>
                      <option value="7°2">7°2</option>
                      <option value="7°3">7°3</option>
                      <option value="7°4">7°4</option>
                      <option value="7° Grado">7° General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Elige tu Emblema de Explorador:
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {AVATAR_OPTIONS.map((avatar) => (
                      <button
                        type="button"
                        key={avatar.id}
                        onClick={() => setSelectedAvatar(avatar.id)}
                        className={`p-2 rounded-xl border-2 text-center transition-all ${
                          selectedAvatar === avatar.id
                            ? 'bg-emerald-100 border-emerald-600 shadow-xs scale-105'
                            : 'bg-slate-50 border-slate-200 hover:border-emerald-300'
                        }`}
                      >
                        <div className="text-2xl">{avatar.icon}</div>
                        <div className="text-[9px] font-bold text-slate-800 mt-0.5 truncate">
                          {avatar.label.split(' ')[0]}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-amber-600" />
                      Crea un PIN Secreto de 4 Dígitos:
                    </label>
                    <span className="text-[10px] text-emerald-700 font-semibold">
                      ¡Memorízalo para tus próximas clases!
                    </span>
                  </div>
                  <input
                    type="password"
                    maxLength={4}
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value.replace(/\D/g, ''))}
                    placeholder="Ej. 1234"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-xs sm:text-sm font-mono tracking-widest text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>

                {registerError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-xs text-rose-800 flex items-center gap-2 animate-fadeIn font-medium">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{registerError}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>CREAR MI PASAPORTE Y COMENZAR</span>
                  </button>
                </div>
              </form>
            )}

            {/* ========================================================
                TAB 3: ACCESO EXCLUSIVO DOCENTE CON CLAVE MAESTRA
                ======================================================== */}
            {activeTab === 'teacher_login' && (
              <form onSubmit={handleTeacherLogin} className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <span className="font-bold block flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-amber-600" />
                    Zona Restringida para Docentes e Investigadores
                  </span>
                  <p>
                    Desde aquí el profesor puede consultar la lista completa de todos los estudiantes, auditar respuestas, revisar evidencias y exportar informes.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Clave de Acceso Docente:
                  </label>
                  <div className="relative">
                    <input
                      type={showTeacherPass ? 'text' : 'password'}
                      required
                      value={teacherPass}
                      onChange={(e) => setTeacherPass(e.target.value)}
                      placeholder="Ingresa la clave docente"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowTeacherPass(!showTeacherPass)}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showTeacherPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1.5 block">
                    Ingresa la clave institucional asignada para la investigación y evaluación.
                  </span>
                </div>

                {teacherError && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-xs text-rose-800 flex items-center gap-2 animate-fadeIn font-medium">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{teacherError}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-600 text-forest-950 font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>INGRESAR AL PANEL DOCENTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Ayuda y Cuentas de Demostración para Prueba */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowDemoHelp(!showDemoHelp)}
              className="text-[11px] font-semibold text-slate-500 hover:text-emerald-700 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showDemoHelp ? 'Ocultar estudiantes de prueba' : 'Ver estudiantes pre-registrados para prueba rápida'}</span>
            </button>

            {showDemoHelp && (
              <div className="mt-2.5 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-slate-700 space-y-2 animate-fadeIn">
                <p className="font-bold text-emerald-900 text-[11px] uppercase tracking-wide">
                  Toca un estudiante para autocompletar su acceso:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Mariana Gómez', user: 'mariana.gomez', pin: '1234' },
                    { name: 'Santiago Arrieta', user: 'santiago.arrieta', pin: '1234' },
                    { name: 'Valentina Montes', user: 'valentina.montes', pin: '1234' },
                    { name: 'Carlos Mario Támara', user: 'carlos.tamara', pin: '1234' },
                    { name: 'Lucía Fernández', user: 'lucia.fernandez', pin: '1234' }
                  ].map((demo, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setActiveTab('student_login');
                        setIdentifier(demo.name);
                        setStudentPin(demo.pin);
                        setStudentLoginError('');
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-emerald-300 text-[11px] font-bold text-emerald-800 hover:bg-emerald-100 transition-colors shadow-2xs flex items-center gap-1 cursor-pointer"
                    >
                      <span>{demo.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">PIN: 1234</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Pie de página institucional y autoría de investigación */}
      <footer className="mt-8 mb-4 text-center text-xs text-slate-500 space-y-1.5 max-w-2xl px-4">
        <p className="font-semibold text-slate-700 text-xs sm:text-sm">
          Guardianes del Bosque • Estrategia Pedagógica Gamificada
        </p>
        <p className="text-[11px] sm:text-xs text-slate-600">
          Investigación para la Maestría en Educación • <span className="font-medium text-slate-700">Corporación Universitaria Iberoamericana</span>
        </p>
        <p className="text-[11px] sm:text-xs text-slate-600">
          Autores: <span className="font-semibold text-slate-800">Danilo Enrique Insuasty Delgado</span> • <span className="font-semibold text-slate-800">María Fernanda Gutiérrez Chica</span>
        </p>
        <p className="text-[10px] sm:text-[11px] text-slate-400">
          Magangué y La Mojana, Colombia
        </p>
      </footer>

    </div>
  );
};
