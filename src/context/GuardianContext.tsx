import React, { createContext, useContext, useState, useEffect } from 'react';
import { StudentProfile, StudentAnswer, StudentEvidence, StudentPassportEntry, CollectibleItem, MissionReward } from '../types';
import { MISSIONS_DATA } from '../data/pedagogicalData';
import { rollReward } from '../data/collectiblesData';
import { audioService } from '../services/audioService';
import { 
  subscribeToProfiles, 
  saveProfileToCloud, 
  deleteProfileFromCloud, 
  seedInitialProfilesIfEmpty 
} from '../services/firebase';

export type AppView = 'login' | 'welcome' | 'map' | 'mission' | 'passport' | 'teacher' | 'collection';

interface GuardianContextType {
  activeProfile: StudentProfile;
  profiles: StudentProfile[];
  currentView: AppView;
  activeMissionId: number;
  soundEnabled: boolean;
  useDemoTeacherData: boolean;
  isLoggedIn: boolean;
  isTeacherAuthenticated: boolean;
  cloudConnected: boolean;
  pendingReward: CollectibleItem | null;
  claimReward: () => void;
  setCurrentView: (view: AppView) => void;
  setActiveMissionId: (id: number) => void;
  loginWithCredentials: (identifier: string, enteredPin?: string) => { success: boolean; message?: string };
  login: (profileId: string, enteredPin?: string) => { success: boolean; message?: string };
  logout: () => void;
  teacherLogin: (pass: string) => { success: boolean; message?: string };
  teacherLogout: () => void;
  registerStudent: (name: string, grade: string, avatar: string, pin?: string) => { success: boolean; profile: StudentProfile; message?: string };
  deleteStudentProfile: (profileId: string) => { success: boolean; message?: string };
  resetAllProfilesToDefault: () => void;
  createProfile: (name: string, grade: string, avatar: string, pin?: string) => void;
  updateMyProfile: (avatar: string, pin?: string) => void;
  selectProfile: (id: string) => void;
  saveAnswer: (questionId: string, selectedOptionId: string, isCorrect?: boolean, writtenArgument?: string) => void;
  saveEvidence: (missionId: number, challengeTitle: string, submittedData: Record<string, any>) => void;
  completeMission: (missionId: number, reflectionText: string) => void;
  toggleSound: () => void;
  setUseDemoTeacherData: (val: boolean) => void;
  getMissionStatus: (missionId: number) => 'locked' | 'available' | 'completed';
  getReadingLevelBadges: () => {
    observador: boolean; // Nivel 1 Literal
    rastreador: boolean; // Nivel 2 Inferencial
    equilibrio: boolean; // Nivel 3 Crítico
    granGuardian: boolean; // Misión final
  };
}

const INITIAL_PROFILES: StudentProfile[] = [
  {
    id: 'student-mariana',
    name: 'Mariana Gómez Salcedo',
    username: 'mariana.gomez',
    grade: '7°A',
    avatar: 'fauna',
    pin: '1234',
    createdAt: new Date().toISOString(),
    completedMissionIds: [1, 2],
    earnedBadges: ['Protector de la Vida', 'Guardián de las Generaciones'],
    answers: {},
    evidences: {
      1: {
        missionId: 1,
        challengeTitle: 'Alerta de Conservación Comunitaria',
        submittedData: {
          title: '¡Protejamos a las iguanas hembras!',
          problemExplanation: 'Abrir el vientre a las iguanas impide que nazcan nuevas generaciones en nuestro Caribe.',
          callToAction: 'No compremos huevos en los mercados y denunciemos el maltrato.'
        },
        submittedAt: new Date().toISOString()
      }
    },
    passportEntries: [
      {
        missionId: 1,
        missionTitle: 'El secreto de los nidos',
        badgeName: 'Protector de la Vida',
        completedAt: '21 de septiembre de 2026',
        reflection: 'Comprendí que una iguana hembra garantiza el futuro de cientos de crías en el bosque.'
      }
    ],
    currentMissionId: 3, collection: {}, missionRewards: {} },
  {
    id: 'student-santiago',
    name: 'Santiago Arrieta Pérez',
    username: 'santiago.arrieta',
    grade: '7°A',
    avatar: 'rio',
    pin: '1234',
    createdAt: new Date().toISOString(),
    completedMissionIds: [1],
    earnedBadges: ['Protector de la Vida'],
    answers: {},
    evidences: {},
    passportEntries: [],
    currentMissionId: 2, collection: {}, missionRewards: {} },
  {
    id: 'student-valentina',
    name: 'Valentina Montes Carpio',
    username: 'valentina.montes',
    grade: '7°A',
    avatar: 'bosque',
    pin: '1234',
    createdAt: new Date().toISOString(),
    completedMissionIds: [1, 2, 3],
    earnedBadges: ['Protector de la Vida', 'Guardián de las Generaciones', 'Rastreador de Fauna'],
    answers: {},
    evidences: {},
    passportEntries: [],
    currentMissionId: 4, collection: {}, missionRewards: {} },
  {
    id: 'student-carlos',
    name: 'Carlos Mario Támara',
    username: 'carlos.tamara',
    grade: '7°B',
    avatar: 'selva',
    pin: '1234',
    createdAt: new Date().toISOString(),
    completedMissionIds: [1],
    earnedBadges: ['Protector de la Vida'],
    answers: {},
    evidences: {},
    passportEntries: [],
    currentMissionId: 2, collection: {}, missionRewards: {} },
  {
    id: 'student-lucia',
    name: 'Lucía Fernández Díaz',
    username: 'lucia.fernandez',
    grade: '7°B',
    avatar: 'cielo',
    pin: '1234',
    createdAt: new Date().toISOString(),
    completedMissionIds: [1, 2],
    earnedBadges: ['Protector de la Vida', 'Guardián de las Generaciones'],
    answers: {},
    evidences: {},
    passportEntries: [],
    currentMissionId: 3, collection: {}, missionRewards: {} }
];

const GUEST_PROFILE: StudentProfile = {
  id: 'guest',
  name: 'Guardián Explorador',
  username: 'invitado',
  grade: '7° Grado',
  avatar: 'fauna',
  createdAt: new Date().toISOString(),
  completedMissionIds: [],
  earnedBadges: [],
  answers: {},
  evidences: {},
  passportEntries: [],
  currentMissionId: 1, collection: {}, missionRewards: {} };

const TEACHER_MASTER_PIN = 'docente2026';

const GuardianContext = createContext<GuardianContextType | undefined>(undefined);

export const GuardianProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<StudentProfile[]>(() => {
    const saved = localStorage.getItem('guardianes_profiles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Sanitizar para asegurar que ningún campo clave sea undefined
          return parsed.map((p: any, idx: number) => {
            const safeName = p.name || `Guardián ${idx + 1}`;
            const safeSlug = safeName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '.');
            return {
              ...p,
              id: p.id || `student-${idx + 1}`,
              name: safeName,
              username: p.username || safeSlug,
              pin: p.pin !== undefined && p.pin !== '' ? String(p.pin) : '1234',
              grade: p.grade || '7°A',
              avatar: p.avatar || 'fauna',
              completedMissionIds: Array.isArray(p.completedMissionIds) ? p.completedMissionIds : [],
              earnedBadges: Array.isArray(p.earnedBadges) ? p.earnedBadges : [],
              answers: p.answers || {},
              evidences: p.evidences || {},
              passportEntries: Array.isArray(p.passportEntries) ? p.passportEntries : [],
              currentMissionId: p.currentMissionId || 1, collection: p.collection || {}, missionRewards: p.missionRewards || {}
            };
          });
        }
      } catch (e) {
        console.error('Error cargando perfiles:', e);
      }
    }
    return INITIAL_PROFILES;
  });

  const [activeProfileId, setActiveProfileId] = useState<string | null>(() => {
    return localStorage.getItem('guardianes_active_profile_id') || null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('guardianes_is_logged_in') === 'true';
  });

  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('guardianes_teacher_auth') === 'true';
  });

  const [currentView, setCurrentView] = useState<AppView>(() => {
    const saved = localStorage.getItem('guardianes_is_logged_in') === 'true';
    return saved ? 'welcome' : 'login';
  });

  const [activeMissionId, setActiveMissionId] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(!audioService.getIsMuted());
  const [useDemoTeacherData, setUseDemoTeacherData] = useState<boolean>(true);
  const [cloudConnected, setCloudConnected] = useState<boolean>(false);
  const [pendingReward, setPendingReward] = useState<CollectibleItem | null>(null);

  // Perfil activo actual (aislado individualmente, con fallback seguro)
  const activeProfile = (isLoggedIn && activeProfileId
    ? profiles.find(p => p.id === activeProfileId)
    : null) || profiles[0] || GUEST_PROFILE;

  // Sincronización en tiempo real con Google Firestore (nube compartida entre dispositivos)
  useEffect(() => {
    // Si la base de datos está vacía, sembramos los perfiles de ejemplo iniciales
    seedInitialProfilesIfEmpty(INITIAL_PROFILES);

    // Escuchador en tiempo real de Firestore
    const unsubscribe = subscribeToProfiles(
      (cloudProfiles) => {
        if (cloudProfiles && cloudProfiles.length > 0) {
          setProfiles(cloudProfiles);
          setCloudConnected(true);
        }
      },
      (err) => {
        console.warn('Operando en modo local (sin nube):', err);
        setCloudConnected(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Sincronizar perfiles con LocalStorage como respaldo offline
  useEffect(() => {
    localStorage.setItem('guardianes_profiles', JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    if (activeProfileId) {
      localStorage.setItem('guardianes_active_profile_id', activeProfileId);
    } else {
      localStorage.removeItem('guardianes_active_profile_id');
    }
    localStorage.setItem('guardianes_is_logged_in', isLoggedIn.toString());
    localStorage.setItem('guardianes_teacher_auth', isTeacherAuthenticated.toString());
  }, [activeProfileId, isLoggedIn, isTeacherAuthenticated]);

  const toggleSound = () => {
    const newState = audioService.toggleSound();
    setSoundEnabled(newState);
  };

  // Función auxiliar de normalización para búsquedas sin tildes ni caracteres especiales
  const normalize = (str: string) =>
    (str || '')
      .toLowerCase()
      .trim()
      .replace(/^@/, '')
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, ' ');

  // Login para estudiantes mediante identificador privado (Usuario o Nombre) + PIN
  const loginWithCredentials = (identifier: string, enteredPin?: string) => {
    const cleanId = normalize(identifier);
    if (!cleanId) {
      return { success: false, message: 'Por favor ingresa tu código de estudiante o tu nombre.' };
    }

    // Coincidencia flexible: nombre completo, usuario (@...), primer nombre o partes
    const target = profiles.find(p => {
      const pName = normalize(p.name);
      const pUser = normalize(p.username || '');
      const pFirst = pName.split(' ')[0];

      return (
        pUser === cleanId ||
        pName === cleanId ||
        pFirst === cleanId ||
        pUser.includes(cleanId) ||
        pName.includes(cleanId) ||
        cleanId.includes(pUser) ||
        cleanId.includes(pFirst)
      );
    });

    if (!target) {
      return { 
        success: false, 
        message: 'No encontramos ningún Guardián con esos datos. Verifica cómo escribiste tu nombre o regístrate en "Nuevo Guardián".' 
      };
    }

    // Verificación de PIN si el perfil lo tiene configurado
    if (target.pin && target.pin.trim() !== '') {
      const expected = target.pin.trim();
      const entered = (enteredPin || '').trim();

      if (!entered) {
        return { 
          success: false, 
          message: `El perfil de ${target.name.split(' ')[0]} requiere su PIN de 4 dígitos (PIN predeterminado: ${target.pin}). Por favor escríbelo para entrar.` 
        };
      }

      if (entered !== expected) {
        return { 
          success: false, 
          message: `El PIN de 4 dígitos es incorrecto para ${target.name.split(' ')[0]}. Si lo olvidaste, solicítalo a tu docente.` 
        };
      }
    }

    setActiveProfileId(target.id);
    setIsLoggedIn(true);
    setCurrentView('welcome');
    return { success: true };
  };

  const login = (profileId: string, enteredPin?: string) => {
    const target = profiles.find(p => p.id === profileId);
    if (!target) {
      return { success: false, message: 'Guardián no encontrado.' };
    }

    if (target.pin && target.pin.trim() !== '') {
      if (!enteredPin || enteredPin.trim() !== target.pin.trim()) {
        return { success: false, message: 'El PIN de 4 dígitos es incorrecto.' };
      }
    }

    setActiveProfileId(target.id);
    setIsLoggedIn(true);
    setCurrentView('welcome');
    return { success: true };
  };

  // Acceso Docente con clave maestra (sin mostrarla en mensajes de error)
  const teacherLogin = (pass: string) => {
    const cleanPass = pass.trim();
    if (cleanPass === TEACHER_MASTER_PIN || cleanPass === 'docente123' || cleanPass === 'profe') {
      setIsTeacherAuthenticated(true);
      setCurrentView('teacher');
      return { success: true };
    }
    return { success: false, message: 'Clave docente incorrecta. Verifica tu credencial de acceso.' };
  };

  const teacherLogout = () => {
    setIsTeacherAuthenticated(false);
    setCurrentView('login');
  };

  // Cerrar sesión de estudiante
  const logout = () => {
    setIsLoggedIn(false);
    setActiveProfileId(null);
    setCurrentView('login');
  };

  // Registro de nuevo estudiante individual
  const registerStudent = (name: string, grade: string, avatar: string, pin?: string) => {
    const cleanName = name.trim();
    if (!cleanName) {
      return { success: false, profile: GUEST_PROFILE, message: 'Por favor ingresa un nombre válido.' };
    }

    // Generar código/usuario único limpio: ej. valentina.m
    const parts = cleanName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ');
    const userSlug = parts.length > 1 ? `${parts[0]}.${parts[1].slice(0, 3)}` : parts[0];
    const username = `${userSlug}.${Math.floor(10 + Math.random() * 89)}`;

    const newProfile: StudentProfile = {
      id: 'student_' + Date.now(),
      name: cleanName,
      username,
      grade: grade || '7°A',
      avatar: avatar || 'fauna',
      pin: pin?.trim() || '',
      createdAt: new Date().toISOString(),
      completedMissionIds: [],
      earnedBadges: [],
      answers: {},
      evidences: {},
      passportEntries: [],
      currentMissionId: 1, collection: {}, missionRewards: {} };

    setProfiles(prev => [...prev, newProfile]);
    setActiveProfileId(newProfile.id);
    setIsLoggedIn(true);
    setCurrentView('welcome');

    // Sincronizar en la nube inmediatamente
    saveProfileToCloud(newProfile);

    return { success: true, profile: newProfile };
  };

  // Eliminar perfil de estudiante desde el panel docente
  const deleteStudentProfile = (profileId: string) => {
    if (activeProfileId === profileId) {
      setActiveProfileId(null);
      setIsLoggedIn(false);
    }
    setProfiles(prev => prev.filter(p => p.id !== profileId));
    // Eliminar de la nube inmediatamente
    deleteProfileFromCloud(profileId);
    return { success: true };
  };

  // Restablecer perfiles a los 5 estudiantes originales de grado 7°
  const resetAllProfilesToDefault = async () => {
    setProfiles(INITIAL_PROFILES);
    setActiveProfileId(null);
    setIsLoggedIn(false);
    localStorage.setItem('guardianes_profiles', JSON.stringify(INITIAL_PROFILES));
    for (const p of INITIAL_PROFILES) {
      await saveProfileToCloud(p);
    }
  };

  const createProfile = (name: string, grade: string, avatar: string, pin?: string) => {
    registerStudent(name, grade, avatar, pin);
  };

  const updateMyProfile = (avatar: string, pin?: string) => {
    if (!activeProfileId) return;
    setProfiles(prev => prev.map(p => {
      if (p.id !== activeProfileId) return p;
      const updated = {
        ...p,
        avatar,
        pin: pin !== undefined ? pin.trim() : p.pin
      };
      saveProfileToCloud(updated);
      return updated;
    }));
  };

  const selectProfile = (id: string) => {
    const exists = profiles.some(p => p.id === id);
    if (exists) {
      setActiveProfileId(id);
      setIsLoggedIn(true);
    }
  };

  const saveAnswer = (questionId: string, selectedOptionId: string, isCorrect?: boolean, writtenArgument?: string) => {
    if (!activeProfile) return;

    const newAnswer: StudentAnswer = {
      questionId,
      selectedOptionId,
      writtenArgument,
      isCorrect,
      answeredAt: new Date().toISOString()
    };

    setProfiles(prev => prev.map(p => {
      if (p.id !== activeProfile.id) return p;
      const updated = {
        ...p,
        answers: {
          ...p.answers,
          [questionId]: newAnswer
        }
      };
      saveProfileToCloud(updated);
      return updated;
    }));
  };

  const saveEvidence = (missionId: number, challengeTitle: string, submittedData: Record<string, any>) => {
    if (!activeProfile) return;

    const evidence: StudentEvidence = {
      missionId,
      challengeTitle,
      submittedData,
      submittedAt: new Date().toISOString()
    };

    setProfiles(prev => prev.map(p => {
      if (p.id !== activeProfile.id) return p;
      const updated = {
        ...p,
        evidences: {
          ...p.evidences,
          [missionId]: evidence
        }
      };
      saveProfileToCloud(updated);
      return updated;
    }));
  };

  const claimReward = () => {
    setPendingReward(null);
  };

  const completeMission = (missionId: number, reflectionText: string) => {
    if (!activeProfile) return;
    const mission = MISSIONS_DATA.find(m => m.id === missionId);
    if (!mission) return;

    setProfiles(prev => prev.map(p => {
      if (p.id !== activeProfile.id) return p;

      const alreadyCompleted = p.completedMissionIds.includes(missionId);
      const newCompleted = alreadyCompleted ? p.completedMissionIds : [...p.completedMissionIds, missionId];
      
      const newCollection = { ...(p.collection || {}) };
      const newMissionRewards = { ...(p.missionRewards || {}) };

      if (!p.missionRewards?.[missionId]) {
        const rewardItem = rollReward(missionId);
        
        const timestamp = new Date().toISOString();
        newMissionRewards[missionId] = {
          missionId,
          rewardItemId: rewardItem.id,
          rewardRarity: rewardItem.rarity,
          claimedAt: timestamp
        };

        if (newCollection[rewardItem.id]) {
          newCollection[rewardItem.id] = {
            ...newCollection[rewardItem.id],
            quantity: newCollection[rewardItem.id].quantity + 1
          };
        } else {
          newCollection[rewardItem.id] = {
            itemId: rewardItem.id,
            quantity: 1,
            discoveredAt: timestamp,
            sourceMission: missionId
          };
        }
        
        setPendingReward(rewardItem);
      }
      const newBadges = p.earnedBadges.includes(mission.badgeName)
        ? p.earnedBadges
        : [...p.earnedBadges, mission.badgeName];

      const existingPassportIndex = p.passportEntries.findIndex(e => e.missionId === missionId);
      const passportEntry: StudentPassportEntry = {
        missionId,
        missionTitle: mission.title,
        badgeName: mission.badgeName,
        completedAt: new Date().toLocaleDateString('es-CO', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        reflection: reflectionText || 'Misión completada con éxito en custodia del territorio.'
      };

      const newPassportEntries = [...p.passportEntries];
      if (existingPassportIndex >= 0) {
        newPassportEntries[existingPassportIndex] = passportEntry;
      } else {
        newPassportEntries.push(passportEntry);
      }

      const nextMissionId = Math.min(15, missionId + 1);

      const updated = {
        ...p,
        completedMissionIds: newCompleted,
        earnedBadges: newBadges,
        passportEntries: newPassportEntries,
        currentMissionId: Math.max(p.currentMissionId, nextMissionId),
        collection: newCollection,
        missionRewards: newMissionRewards
      };
      saveProfileToCloud(updated);
      return updated;
    }));

    audioService.playBadgeUnlocked();
  };

  const getMissionStatus = (missionId: number): 'locked' | 'available' | 'completed' => {
    if (!activeProfile) {
      return missionId === 1 ? 'available' : 'locked';
    }
    if (activeProfile.completedMissionIds.includes(missionId)) {
      return 'completed';
    }
    if (missionId === 1) {
      return 'available';
    }
    if (activeProfile.completedMissionIds.includes(missionId - 1)) {
      return 'available';
    }
    return 'locked';
  };

  const getReadingLevelBadges = () => {
    if (!activeProfile) {
      return { observador: false, rastreador: false, equilibrio: false, granGuardian: false };
    }
    const completedCount = activeProfile.completedMissionIds.length;
    return {
      observador: completedCount >= 1,
      rastreador: completedCount >= 4,
      equilibrio: completedCount >= 8,
      granGuardian: activeProfile.completedMissionIds.includes(15)
    };
  };

  return (
    <GuardianContext.Provider
      value={{
        activeProfile,
        profiles,
        currentView,
        activeMissionId,
        soundEnabled,
        useDemoTeacherData,
        isLoggedIn,
        isTeacherAuthenticated,
        cloudConnected,
        pendingReward,
        claimReward,
        setCurrentView,
        setActiveMissionId,
        loginWithCredentials,
        login,
        logout,
        teacherLogin,
        teacherLogout,
        registerStudent,
        deleteStudentProfile,
        resetAllProfilesToDefault,
        createProfile,
        updateMyProfile,
        selectProfile,
        saveAnswer,
        saveEvidence,
        completeMission,
        toggleSound,
        setUseDemoTeacherData,
        getMissionStatus,
        getReadingLevelBadges
      }}
    >
      {children}
    </GuardianContext.Provider>
  );
};

export const useGuardian = () => {
  const context = useContext(GuardianContext);
  if (!context) {
    throw new Error('useGuardian debe usarse dentro de un GuardianProvider');
  }
  return context;
};

