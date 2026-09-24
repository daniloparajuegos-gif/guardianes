import React, { useState } from 'react';
import { useGuardian } from '../context/GuardianContext';
import { X, Check, Compass, KeyRound, LogOut, ShieldCheck, Award } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AVATAR_OPTIONS = [
  { id: 'fauna', label: 'Jaguar Guardián', icon: '🐆', desc: 'Protector de los grandes mamíferos y bosques de galería' },
  { id: 'rio', label: 'Garza Cenagosa', icon: '🪶', desc: 'Observadora de caños, aguas profundas e icoteas' },
  { id: 'bosque', label: 'Ceiba Ancestral', icon: '🌳', desc: 'Enraizamiento con el suelo, la sombra y el dosel verde' },
  { id: 'selva', label: 'Chigüiro Sabanero', icon: '🐗', desc: 'Convivencia en comunidad y equilibrio de pastizales' },
  { id: 'cielo', label: 'Águila Pescadora', icon: '🦅', desc: 'Visión aguda desde las alturas para rastrear pistas' },
];

export const StudentProfileModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { 
    activeProfile, 
    updateMyProfile,
    getReadingLevelBadges,
    logout 
  } = useGuardian();

  const [selectedAvatar, setSelectedAvatar] = useState(activeProfile.avatar);
  const [pin, setPin] = useState(activeProfile.pin || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateMyProfile(selectedAvatar, pin);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const levelBadges = getReadingLevelBadges();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white border-2 border-emerald-300 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Cabecera del Modal Clara */}
        <div className="px-6 py-4 border-b border-emerald-100 flex items-center justify-between bg-emerald-50/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-100 border border-emerald-300">
              <Compass className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 className="font-display font-black text-lg text-forest-900">
                Mi Perfil de Guardián
              </h2>
              <p className="text-xs text-forest-600 font-medium">
                Sesión individual y privada
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido scrolleable privado */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Tarjeta de identificación del estudiante */}
          <div className="bg-gradient-to-r from-emerald-50 to-amber-50/40 border-2 border-emerald-200 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-emerald-300 flex items-center justify-center text-3xl shadow-sm">
                {AVATAR_OPTIONS.find(a => a.id === selectedAvatar)?.icon || '🌿'}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
                    {activeProfile.grade}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    Usuario: <strong className="text-emerald-800">{activeProfile.username}</strong>
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  {activeProfile.name}
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  {activeProfile.completedMissionIds.length} de 15 misiones completadas • {activeProfile.earnedBadges.length} insignias
                </p>
              </div>
            </div>

            {/* Medallas troncales */}
            <div className="mt-4 pt-3 border-t border-emerald-200/80 grid grid-cols-4 gap-2">
              <div className={`p-2 rounded-xl border text-center ${levelBadges.observador ? 'bg-white border-emerald-300 text-emerald-900' : 'bg-slate-100 border-slate-200 text-slate-400 opacity-60'}`}>
                <div className="text-xs">👁️</div>
                <div className="text-[9px] font-bold mt-0.5">Observador</div>
              </div>
              <div className={`p-2 rounded-xl border text-center ${levelBadges.rastreador ? 'bg-white border-sky-300 text-sky-900' : 'bg-slate-100 border-slate-200 text-slate-400 opacity-60'}`}>
                <div className="text-xs">🔎</div>
                <div className="text-[9px] font-bold mt-0.5">Rastreador</div>
              </div>
              <div className={`p-2 rounded-xl border text-center ${levelBadges.equilibrio ? 'bg-white border-amber-300 text-amber-900' : 'bg-slate-100 border-slate-200 text-slate-400 opacity-60'}`}>
                <div className="text-xs">⚖️</div>
                <div className="text-[9px] font-bold mt-0.5">Equilibrio</div>
              </div>
              <div className={`p-2 rounded-xl border text-center ${levelBadges.granGuardian ? 'bg-amber-100 border-amber-400 text-amber-950' : 'bg-slate-100 border-slate-200 text-slate-400 opacity-60'}`}>
                <div className="text-xs">🌎</div>
                <div className="text-[9px] font-bold mt-0.5">Gran Guardián</div>
              </div>
            </div>
          </div>

          {/* Formulario para editar su propio avatar o PIN */}
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Cambiar mi Emblema de Guardián:
              </label>
              <div className="grid grid-cols-5 gap-2">
                {AVATAR_OPTIONS.map((avatar) => (
                  <button
                    type="button"
                    key={avatar.id}
                    onClick={() => setSelectedAvatar(avatar.id)}
                    className={`p-2.5 rounded-xl border-2 text-center transition-all ${
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
                  Mi PIN de 4 Dígitos:
                </label>
                <span className="text-[10px] text-slate-500">
                  Protege tus respuestas en este equipo
                </span>
              </div>
              <input
                type="password"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                placeholder="4 números (ej. 1234)"
                className="w-full px-3.5 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-xs sm:text-sm font-mono tracking-widest text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            {savedSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 font-bold flex items-center gap-2 animate-fadeIn">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>¡Cambios guardados con éxito en tu perfil!</span>
              </div>
            )}

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  logout();
                }}
                className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-300 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <LogOut className="w-4 h-4" />
                <span>Cerrar mi sesión</span>
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs tracking-wide shadow-md transition-all flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Guardar Cambios</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
};
