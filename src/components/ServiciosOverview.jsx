import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const SERVICIOS = [
  {
    to: "/servicios-comerciales",
    icon: "receipt_long",
    title: "Papelería Comercial & Oficina",
    description: "Administrativo, identidad corporativa y editorial.",
  },
  {
    to: "/merchandising",
    icon: "redeem",
    title: "Merchandising & Regalos",
    description: "Textiles y detalles que marcan tu presencia.",
  },
  {
    to: "/gran-formato",
    icon: "ad_group",
    title: "Gran Formato & Publicidad Exterior",
    description: "Impacto visual resistente a la intemperie.",
  },
  {
    to: "/servicios-especializados",
    icon: "workspace_premium",
    title: "Servicios Especializados",
    description: "Agendas, diplomas e invitaciones de alta distinción.",
  },
];

export default function ServiciosOverview() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="servicios"
      className="space-y-12 transition-all duration-700 opacity-0 translate-y-8"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Nuestros Servicios</h2>
        <p className="text-secondary font-body-md">
          Soluciones integrales de impresión para cada necesidad de tu negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {SERVICIOS.map((servicio) => (
          <Link
            key={servicio.to}
            to={servicio.to}
            className="bg-white p-8 rounded-xl border border-outline-variant hover:border-primary/30 transition-all group flex items-start gap-6"
          >
            <div className="w-12 h-12 shrink-0 bg-primary-container/20 text-primary flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">{servicio.icon}</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md mb-2">{servicio.title}</h3>
              <p className="text-secondary text-sm">{servicio.description}</p>
              <span className="text-primary font-bold text-sm inline-flex items-center gap-1 mt-3 group-hover:gap-2 transition-all">
                Ver más
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}