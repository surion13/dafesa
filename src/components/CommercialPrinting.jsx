import { Link } from "react-router-dom";

export default function CommercialPrinting() {
  return (
    <section className="space-y-12" id="servicios">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Link
          to="/servicioscomerciales"
          className="inline-block group"
          aria-label="Ir a Papelería Comercial & Oficina"
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface transition-colors group-hover:text-primary">
            Papelería Comercial & Oficina
            <span className="material-symbols-outlined align-middle ml-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              chevron_right
            </span>
          </h2>
        </Link>
        <p className="text-secondary font-body-md">Soluciones integrales para la gestión administrativa y la identidad corporativa de tu negocio.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-gutter)]">
        <div className="bg-white p-8 rounded-xl border border-outline-variant hover:border-primary/30 transition-all group">
          <div className="w-12 h-12 bg-primary-container/20 text-primary flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">receipt_long</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Administrativo</h3>
          <ul className="space-y-3">
            <li className="flex items-center"><span className="custom-bullet"></span>Egresos e Ingresos</li>
            <li className="flex items-center"><span className="custom-bullet"></span>Facturas & Talonarios</li>
            <li className="flex items-center"><span className="custom-bullet"></span>Contratos</li>
            <li className="flex items-center"><span className="custom-bullet"></span>Formularios</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-xl border border-outline-variant hover:border-primary/30 transition-all group">
          <div className="w-12 h-12 bg-primary-container/20 text-primary flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">folder_open</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Identidad</h3>
          <ul className="space-y-3">
            <li className="flex items-center"><span className="custom-bullet"></span>Sobres</li>
            <li className="flex items-center"><span className="custom-bullet"></span>Folletos & Plegables</li>
            <li className="flex items-center"><span className="custom-bullet"></span>Folders & Carpetas</li>
            <li className="flex items-center"><span className="custom-bullet"></span>Tarjetas & Flyers</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-xl border border-outline-variant hover:border-primary/30 transition-all group">
          <div className="w-12 h-12 bg-primary-container/20 text-primary flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">menu_book</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Editorial</h3>
          <ul className="space-y-3">
            <li className="flex items-center"><span className="custom-bullet"></span>Libros & Revistas</li>
            <li className="flex items-center"><span className="custom-bullet"></span>Manuales & Cartillas</li>
            <li className="flex items-center"><span className="custom-bullet"></span>Cuadernos Empresariales</li>
            <li className="flex items-center"><span className="custom-bullet"></span>Catálogos & Portafolios</li>
          </ul>
        </div>
      </div>
    </section>
  );
}