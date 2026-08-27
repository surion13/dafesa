export default function Navbar({ whatsappUrl }) {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-[var(--spacing-margin-desktop)] h-20 bg-surface/90 backdrop-blur-md border-b border-outline-variant">
      
      <a href="/" className="flex items-center">
        <img
          src="/dafesa_logo.webp"
          alt="Dafesa Impresores"
          className="h-18 w-auto object-contain"
        />
      </a>

      <nav className="hidden md:flex items-center gap-8">
        <a
          className="text-primary font-bold border-b-2 border-primary font-label-md text-label-md"
          href="#servicios"
        >
          Servicios
        </a>

        <a
          className="text-secondary hover:text-primary transition-colors font-label-md text-label-md"
          href="#nosotros"
        >
          Nosotros
        </a>

        <a
          className="text-secondary hover:text-primary transition-colors font-label-md text-label-md"
          href="#contacto"
        >
          Contacto
        </a>
      </nav>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95 inline-flex items-center justify-center cursor-pointer"
      >
        Cotizar
      </a>
    </header>
  );
}