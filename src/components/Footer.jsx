export default function Footer() {
  // Reemplaza '573004345839' con tu número de teléfono real en formato internacional
  const phoneNumber = "573004345839"; 
  const message = "Hola, estoy interesado en sus servicios de impresión y me gustaría cotizar un proyecto.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer id="contacto" className="w-full py-12 px-[var(--spacing-margin-desktop)] flex flex-col md:flex-row justify-between items-start gap-[var(--spacing-gutter)] bg-on-surface text-white" id="contacto">
      <div className="space-y-6 max-w-sm">
        <div className="text-headline-md font-headline-lg text-primary-fixed tracking-tight">
          Dafesa Impresores
        </div>
        <p className="text-secondary-fixed-dim text-body-md">Soluciones profesionales de impresión que elevan el estándar de tu marca.</p>
        <div className="space-y-3">
          <a className="flex items-center gap-3 text-secondary-fixed-dim hover:text-primary-fixed transition-colors" href="mailto:dafesaimpresores@gmail.com">
            <span className="material-symbols-outlined">mail</span> dafesaimpresores@gmail.com
          </a>
          <a className="flex items-center gap-3 text-secondary-fixed-dim hover:text-primary-fixed transition-colors" href="tel:3004345839">
            <span className="material-symbols-outlined">call</span> 300 434 5839
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="space-y-4">
          <h4 className="font-label-md text-white uppercase tracking-wider">Enlaces</h4>
          <nav className="flex flex-col gap-2">
            <a className="text-secondary-fixed-dim hover:text-primary-fixed hover:underline transition-all" href="#">Servicios</a>
            <a className="text-secondary-fixed-dim hover:text-primary-fixed hover:underline transition-all" href="#">Aviso de Privacidad</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-md text-white uppercase tracking-wider">Soporte</h4>
          <nav className="flex flex-col gap-2">
            <a className="text-secondary-fixed-dim hover:text-primary-fixed hover:underline transition-all" href="#">Preguntas Frecuentes</a>
            <a className="text-secondary-fixed-dim hover:text-primary-fixed hover:underline transition-all" href="#">Contacto</a>
          </nav>
        </div>
      </div>
      <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-4 mt-8 md:mt-0">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary-container text-on-primary-container px-6 py-3 rounded-full flex items-center gap-2 font-bold hover:scale-105 transition-transform cursor-pointer"
        >
          <span className="material-symbols-outlined">chat</span> Contáctanos ahora
        </a>
        <p className="text-label-sm text-secondary-fixed-dim">© 2024 Dafesa Impresores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}