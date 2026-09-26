import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  getDocs,
  writeBatch
} from 'firebase/firestore';
import { StudentProfile } from '../types';

const firebaseConfig = {
  apiKey: "AIzaSyC_NBvB9w72ELMiStmZlzOufViF7tX7hA4",
  authDomain: "guardianes73-d5d07.firebaseapp.com",
  projectId: "guardianes73-d5d07",
  storageBucket: "guardianes73-d5d07.firebasestorage.app",
  messagingSenderId: "756172430002",
  appId: "1:756172430002:web:0b34fb760ca82e5106c7ab",
  measurementId: "G-PCZ92WP6BL"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const PROFILES_COLLECTION = 'student_profiles';

/**
 * Escucha cambios en Firestore en tiempo real desde cualquier dispositivo o navegador
 */
export const subscribeToProfiles = (
  onProfilesUpdate: (profiles: StudentProfile[]) => void,
  onError?: (error: any) => void
) => {
  const colRef = collection(db, PROFILES_COLLECTION);
  return onSnapshot(
    colRef,
    (snapshot) => {
      const list: StudentProfile[] = [];
      snapshot.forEach((docSnap) => {
        list.push(docSnap.data() as StudentProfile);
      });
      onProfilesUpdate(list);
    },
    (err) => {
      console.warn('Firestore live sync aviso:', err);
      if (onError) onError(err);
    }
  );
};

/**
 * Guarda o actualiza un perfil de estudiante en la nube de Google Firestore
 */
export const saveProfileToCloud = async (profile: StudentProfile): Promise<boolean> => {
  try {
    const docRef = doc(db, PROFILES_COLLECTION, profile.id);
    // Elimina valores undefined para evitar rechazo de Firestore
    const cleanData = JSON.parse(JSON.stringify(profile));
    await setDoc(docRef, cleanData, { merge: true });
    return true;
  } catch (err) {
    console.error('Error guardando en Firestore:', err);
    return false;
  }
};

/**
 * Elimina un perfil de estudiante de la nube
 */
export const deleteProfileFromCloud = async (profileId: string): Promise<boolean> => {
  try {
    const docRef = doc(db, PROFILES_COLLECTION, profileId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.error('Error eliminando en Firestore:', err);
    return false;
  }
};

/**
 * Si la base de datos de Firestore está vacía, sube los perfiles de ejemplo iniciales
 */
export const seedInitialProfilesIfEmpty = async (initialProfiles: StudentProfile[]) => {
  try {
    const colRef = collection(db, PROFILES_COLLECTION);
    const snap = await getDocs(colRef);
    if (snap.empty && initialProfiles.length > 0) {
      const batch = writeBatch(db);
      for (const p of initialProfiles) {
        const ref = doc(db, PROFILES_COLLECTION, p.id);
        const cleanData = JSON.parse(JSON.stringify(p));
        batch.set(ref, cleanData);
      }
      await batch.commit();
      console.log('Perfiles base sembrados en Firestore exitosamente.');
    }
  } catch (err) {
    console.warn('Aviso al sembrar perfiles en Firestore:', err);
  }
};
