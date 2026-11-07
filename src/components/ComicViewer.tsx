import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { COMICS, getComicPanelImage } from '../data/comicsData';

interface Props {
  missionId: number;
  fontSize: 'normal' | 'large' | 'xlarge';
}

/**
 * Visor de historieta: muestra una viñeta a la vez con su cuadro de narración
 * (texto idéntico a la lectura) y, si existe, un globo de diálogo sobre la imagen.
 */
export const ComicViewer: React.FC<Props> = ({ missionId, fontSize }) => {
  const panels = COMICS[missionId] || [];
  const [index, setIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  // Proporción real de la imagen (ancho / alto), para no recortar la viñeta
  const [ratio, setRatio] = useState(4 / 3);
  // Corrimiento (px) del globo para que no se salga de la viñeta en pantallas pequeñas
  const frameRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState({ x: 0, y: 0, frameW: 1, frameH: 1 });

  useLayoutEffect(() => {
    const fit = () => {
      const frame = frameRef.current, bubble = bubbleRef.current;
      if (!frame || !bubble) return;
      const f = frame.getBoundingClientRect();
      const b = bubble.getBoundingClientRect();
      const margin = 6;
      setShift(prev => {
        // Posición sin corrimiento
        const left = b.left - prev.x, right = b.right - prev.x;
        const top = b.top - prev.y, bottom = b.bottom - prev.y;
        let x = 0, y = 0;
        if (left < f.left + margin) x = f.left + margin - left;
        else if (right > f.right - margin) x = f.right - margin - right;
        if (top < f.top + margin) y = f.top + margin - top;
        else if (bottom > f.bottom - margin) y = f.bottom - margin - bottom;
        if (x === prev.x && y === prev.y && f.width === prev.frameW && f.height === prev.frameH) return prev;
        return { x, y, frameW: f.width, frameH: f.height };
      });
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [index, missionId, ratio, fontSize]);

  useEffect(() => {
    setIndex(0);
  }, [missionId]);

  useEffect(() => {
    setImageFailed(false);
  }, [index, missionId]);

  // Precargar la siguiente viñeta para que el cambio sea inmediato
  useEffect(() => {
    if (index + 1 < panels.length) {
      const img = new Image();
      img.src = getComicPanelImage(missionId, index + 1);
    }
  }, [index, missionId, panels.length]);

  const goPrev = () => setIndex(i => Math.max(0, i - 1));
  const goNext = () => setIndex(i => Math.min(panels.length - 1, i + 1));

  // Navegación con flechas del teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [panels.length]);

  if (panels.length === 0) return null;
  const panel = panels[index];

  const textSize =
    fontSize === 'normal' ? 'text-sm sm:text-base' : fontSize === 'large' ? 'text-base sm:text-lg' : 'text-lg sm:text-xl';

  return (
    <div className="space-y-3 font-sans">
      {/* Página de la historieta: cuadro de narración + viñeta */}
      <div className="rounded-2xl border-[3px] border-slate-900 bg-white shadow-[6px_6px_0_0_rgba(15,23,42,0.85)] overflow-hidden">
        {/* Cuadro de narración (estilo cómic) */}
        <div className="bg-amber-100 border-b-[3px] border-slate-900 px-4 py-3 sm:px-5 sm:py-4">
          <p className={`font-reading text-slate-900 leading-relaxed ${textSize}`}>
            {panel.narration}
          </p>
        </div>

        {/* Viñeta */}
        <div ref={frameRef} className="relative bg-slate-900" style={{ aspectRatio: String(ratio) }}>
          {!imageFailed ? (
            <img
              key={`${missionId}-${index}`}
              src={getComicPanelImage(missionId, index)}
              alt={`Viñeta ${index + 1}: ${panel.title}`}
              onLoad={e => {
                const img = e.currentTarget;
                if (img.naturalWidth && img.naturalHeight) setRatio(img.naturalWidth / img.naturalHeight);
              }}
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover animate-fadeIn"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm p-6 text-center">
              La imagen de esta viñeta todavía no está disponible.
            </div>
          )}

          {/* Globo libre: ubicado junto a quien habla, con cola que apunta a su boca */}
          {panel.dialogue && panel.bubbleX !== undefined && panel.bubbleY !== undefined && (() => {
            // Coordenadas en un lienzo con la misma proporción de la imagen (alto 300)
            const W = 300 * ratio, H = 300;
            // Centro del globo, ya corrido si no cabía
            const bx = (panel.bubbleX / 100) * W + (shift.x / shift.frameW) * W;
            const by = (panel.bubbleY / 100) * H + (shift.y / shift.frameH) * H;
            const tx = ((panel.tailX ?? panel.bubbleX) / 100) * W, ty = ((panel.tailY ?? panel.bubbleY + 15) / 100) * H;
            const dx = tx - bx, dy = ty - by;
            const len = Math.hypot(dx, dy) || 1;
            const px = (-dy / len) * 9, py = (dx / len) * 9; // media base de la cola
            const tail = `${bx + px},${by + py} ${tx},${ty} ${bx - px},${by - py}`;
            return (
              <>
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox={`0 0 ${W} ${H}`}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon
                    points={tail}
                    fill="white"
                    stroke="#0f172a"
                    strokeWidth={3}
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <div
                  ref={bubbleRef}
                  className="absolute w-max max-w-[60%] sm:max-w-[42%]"
                  style={{
                    left: `${panel.bubbleX}%`,
                    top: `${panel.bubbleY}%`,
                    transform: `translate(calc(-50% + ${shift.x}px), calc(-50% + ${shift.y}px))`,
                  }}
                >
                  <div className="bg-white border-[3px] border-slate-900 rounded-[1.25rem] px-3 py-2 sm:px-4 sm:py-2.5 shadow-md text-center">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-emerald-700">
                      {panel.speaker}
                    </span>
                    <p className={`font-bold text-slate-900 leading-snug ${textSize}`}>
                      {panel.dialogue}
                    </p>
                  </div>
                </div>
              </>
            );
          })()}

          {/* Globo en esquina (cuando aún no se ha definido la posición exacta) */}
          {panel.dialogue && panel.bubbleX === undefined && (() => {
            const pos = panel.bubblePosition || 'bottom-left';
            const isTop = pos.startsWith('top');
            const isRight = pos.endsWith('right');
            const tailRight = (panel.bubbleTail || (isRight ? 'left' : 'right')) === 'right';
            const tailX = tailRight ? 'right-8' : 'left-8';
            const tailXInner = tailRight ? 'right-[34px]' : 'left-[34px]';
            return (
              <div className={`absolute ${isTop ? 'top-3' : 'bottom-3'} ${isRight ? 'right-3' : 'left-3'} max-w-[85%] sm:max-w-[55%]`}>
                <div className="relative bg-white border-[3px] border-slate-900 rounded-[1.25rem] px-4 py-2.5 shadow-md">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-emerald-700">
                    {panel.speaker}
                  </span>
                  <p className={`font-bold text-slate-900 leading-snug ${textSize}`}>
                    {panel.dialogue}
                  </p>
                  {isTop ? (
                    <>
                      <span className={`absolute -bottom-[13px] ${tailX} w-0 h-0 border-l-[10px] border-r-[10px] border-t-[13px] border-l-transparent border-r-transparent border-t-slate-900`} />
                      <span className={`absolute -bottom-[8px] ${tailXInner} w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-white`} />
                    </>
                  ) : (
                    <>
                      <span className={`absolute -top-[13px] ${tailX} w-0 h-0 border-l-[10px] border-r-[10px] border-b-[13px] border-l-transparent border-r-transparent border-b-slate-900`} />
                      <span className={`absolute -top-[8px] ${tailXInner} w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-white`} />
                    </>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Número de viñeta */}
          <span className={`absolute ${panel.dialogue && (panel.bubblePosition === 'top-right' || (panel.bubbleX !== undefined && panel.bubbleX > 60 && (panel.bubbleY ?? 50) < 25)) ? 'bottom-2' : 'top-2'} right-2 bg-slate-900/80 text-white text-[11px] font-bold px-2 py-0.5 rounded-md`}>
            {index + 1} / {panels.length}
          </span>
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="flex items-center gap-1 px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-white text-xs font-bold text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-50 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </button>

        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {panels.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir a la viñeta ${i + 1}: ${p.title}`}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === index ? 'bg-emerald-600 scale-125' : i < index ? 'bg-emerald-300' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={index === panels.length - 1}
          className="flex items-center gap-1 px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-emerald-600 text-xs font-bold text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-700 cursor-pointer"
        >
          Siguiente
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {index === panels.length - 1 && (
        <p className="text-center text-xs text-emerald-800 font-semibold">
          ¡Terminaste la historieta! Ya puedes iniciar el rastreo de pistas.
        </p>
      )}
    </div>
  );
};
