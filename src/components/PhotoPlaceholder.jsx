// Espacio reservado para la foto de cada producto con diseño moderno.
// Soporta prop icon opcional y mantiene compatibilidad total con imágenes futuras.
export default function PhotoPlaceholder({ label, icon = "add_photo_alternate" }) {
  return (
    <div className="aspect-square w-full rounded-t-xl border-b border-outline-variant/40 bg-gradient-to-br from-surface-container-low via-surface to-surface-container/80 flex flex-col items-center justify-center gap-2 text-on-surface-variant p-4 relative overflow-hidden">
      {/* Patrón de puntos sutil de imprenta */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
      <div className="w-12 h-12 rounded-xl bg-white/90 shadow-sm border border-outline-variant/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <span className="text-xs font-medium text-center px-2 text-secondary group-hover:text-on-surface transition-colors line-clamp-1">
        {label}
      </span>
    </div>
  );
}