import useScrollReveal from "../hooks/useScrollReveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

const SERVICIOS = [
  {
    title: "Agendas & Porta Agendas",
    description: "Diseños exclusivos y acabados premium.",
  },
  {
    title: "Diplomas, Menciones & Porta Diplomas",
    description: "Documentos oficiales de alta distinción.",
  },
  {
    title: "Invitaciones & Placas Conmemorativas",
    description: "Momentos que merecen perdurar.",
  },
];

export default function ServiciosEspecializadosPage() {
  const ref = useScrollReveal();

  return (
    <>
      {/* Hero banner consistente con el Home */}
      <section className="relative overflow-hidden rounded-xl h-[300px] md:h-[400px] flex items-center bg-on-surface">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Servicios especializados de impresión premium"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRqEzqpmavdiqbqjuuzGg1TR6GtUnIQiEcuX7dOClXN0zRoJnaOevdGH8hdPvuq8r9Y74ItHW64WyWjUHVFeZwwtQHigWU1V6iCI0exyk3N5Mf9WPSLiFrn-7joe7zOCxOtZYROy40WIQQ31cuSpFw28gL17J_-MXBQUEednnZr5L-MIVmV6kGBaDI9ceFr6OsV8HJPJ6Ie2KN6Vhj5JrRUogmAMY3iMHCj5uCrr3-kkzPFmP6L4A"
          />
        </div>
        <div className="relative z-10 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-2xl">
          <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md mb-6">Servicios Especializados</span>
          <h1 className="font-display-lg text-display-lg text-white mb-4">PRODUCTOS DE ALTA DISTINCIÓN</h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed leading-relaxed">Para los momentos que tu marca quiere celebrar.</p>
        </div>
      </section>

      <section ref={ref} className="space-y-12 transition-all duration-700 opacity-0 translate-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICIOS.map((servicio) => (
            <div
              key={servicio.title}
              className="bg-white rounded-xl border border-outline-variant overflow-hidden"
            >
              <PhotoPlaceholder label={servicio.title} />
              <div className="p-4">
                <p className="font-bold">{servicio.title}</p>
                <p className="text-sm text-secondary mt-1">{servicio.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}