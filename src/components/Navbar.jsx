export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-[var(--spacing-margin-desktop)] h-20 bg-surface/90 backdrop-blur-md border-b border-outline-variant">
      <div className="text-headline-md font-headline-lg text-primary tracking-tight">
        Dafesa Impresores
      </div>
      <nav className="hidden md:flex gap-8">
        <a className="text-primary font-bold border-b-2 border-primary font-label-md text-label-md" href="#servicios">Servicios</a>
        <a className="text-secondary hover:text-primary transition-colors font-label-md text-label-md" href="#nosotros">Nosotros</a>
        <a className="text-secondary hover:text-primary transition-colors font-label-md text-label-md" href="#contacto">Contacto</a>
      </nav>
      <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95">
        Cotizar
      </button>
    </header>
  );
}