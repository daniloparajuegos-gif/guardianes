import React from 'react';
import { FlaskConical } from 'lucide-react';

/** Etiqueta para identificar perfiles de ejemplo (no son estudiantes reales). */
export const DemoBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    className={`inline-flex items-center gap-0.5 shrink-0 text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-violet-100 text-violet-800 border border-violet-300 ${className}`}
    title="Perfil de ejemplo para pruebas: no es un estudiante real"
  >
    <FlaskConical className="w-3 h-3" />
    Ejemplo
  </span>
);
