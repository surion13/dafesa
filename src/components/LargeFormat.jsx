import { Link } from "react-router-dom";

export default function LargeFormat() {
  return (
    <section id="nosotros" className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-xl space-y-4">
          <Link
            to="/granformato"
            className="inline-block group"
            aria-label="Ir a Gran Formato & Publicidad Exterior"
          >
            <h2 className="font-headline-lg text-headline-lg text-on-surface transition-colors group-hover:text-primary">
              Gran Formato & Publicidad Exterior
              <span className="material-symbols-outlined align-middle ml-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                chevron_right
              </span>
            </h2>
          </Link>
          <p className="text-secondary">Impacto visual que no pasa desapercibido. Materiales resistentes a la intemperie con colores vibrantes.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-gutter)]">
        <Link to="/granformato" className="aspect-square bg-white border border-outline-variant p-4 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary-container/5 hover:border-primary/100 transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary">foundation</span>
          <p className="font-bold">Vallas & Avisos</p>
        </Link>
        <Link to="/granformato" className="aspect-square bg-white border border-outline-variant p-4 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary-container/5 hover:border-primary/100 transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary">flag</span>
          <p className="font-bold">Pendones & Banderas</p>
        </Link>
        <Link to="/granformato" className="aspect-square bg-white border border-outline-variant p-4 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary-container/5 hover:border-primary/100 transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary">ad_group</span>
          <p className="font-bold">Carteles & Colombinas</p>
        </Link>
        <Link to="/granformato" className="aspect-square bg-white border border-outline-variant p-4 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary-container/5 hover:border-primary/100 transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary">view_carousel</span>
          <p className="font-bold">Laterales & Rompetráficos</p>
        </Link>
      </div>
    </section>
  );
}