export default function LargeFormat( {whatsappUrl} ) {
  return (
    <section id="nosotros" className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-xl space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Gran Formato &amp; Publicidad Exterior</h2>
          <p className="text-secondary">Impacto visual que no pasa desapercibido. Materiales resistentes a la intemperie con colores vibrantes.</p>
        </div>
        <a className="text-primary font-bold flex items-center gap-2 group"
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"    
        >
          Cotizar Proyecto <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-gutter)]">
        <div className="aspect-square bg-white border border-outline-variant p-4 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary-container/5 transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary">foundation</span>
          <p className="font-bold">Vallas &amp; Avisos</p>
        </div>
        <div className="aspect-square bg-white border border-outline-variant p-4 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary-container/5 transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary">flag</span>
          <p className="font-bold">Pendones &amp; Banderas</p>
        </div>
        <div className="aspect-square bg-white border border-outline-variant p-4 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary-container/5 transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary">ad_group</span>
          <p className="font-bold">Carteles &amp; Colombinas</p>
        </div>
        <div className="aspect-square bg-white border border-outline-variant p-4 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary-container/5 transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary">view_carousel</span>
          <p className="font-bold">Laterales &amp; Rompetráficos</p>
        </div>
      </div>
    </section>
  );
}