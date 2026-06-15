import { useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  label?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfter({ before, after, label, beforeLabel = "Antes", afterLabel = "Depois" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div className="group">
      <div
        ref={ref}
        className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-luxe select-none"
        onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onClick={(e) => onMove(e.clientX)}
      >
        <img src={after} alt={afterLabel} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={before}
            alt={beforeLabel}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
            loading="lazy"
          />
        </div>
        <div className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.3)]" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-gold flex items-center justify-center cursor-ew-resize">
            <span className="text-gold-deep text-xs tracking-widest">‹ ›</span>
          </div>
        </div>
        <span className="absolute top-3 left-3 bg-ink/70 text-cream text-[10px] tracking-[0.2em] px-2.5 py-1 rounded-full uppercase">{beforeLabel}</span>
        <span className="absolute top-3 right-3 bg-gold text-ink text-[10px] tracking-[0.2em] px-2.5 py-1 rounded-full uppercase">{afterLabel}</span>
      </div>
      {label && <p className="mt-3 text-center text-sm text-muted-foreground tracking-wide">{label}</p>}
    </div>
  );
}
