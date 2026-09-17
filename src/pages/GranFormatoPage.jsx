import useScrollReveal from "../hooks/useScrollReveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

const FORMATOS = [
  { title: "Vallas & Avisos" },
  { title: "Pendones & Banderas" },
  { title: "Carteles & Colombinas" },
  { title: "Laterales & Rompetráficos" },
];

export default function GranFormatoPage() {
  const ref = useScrollReveal();

  return (
    <>
      {/* Hero banner consistente con el Home */}
      <section className="relative overflow-hidden rounded-xl h-[300px] md:h-[400px] flex items-center bg-on-surface">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Impresión de gran formato y publicidad exterior"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjYlPhChPmYDp0yNumicYDLi2rO0LJ2Q05gmxfRIaxdWkymyoKkELyGJd8aIT1AegUx_Y3GkDUr2Jjk_vxobKeY-YtI3vbOPTSgVpMKB3-LslG1iaoQ4d-McSuTPyTBwBOVAFQKxQPuxYGBS13OR2OicF2rwZHRSlrpTbR79L8ErobdwAd8ZWPJ7JwRcmCVS9laRICNjNdZwrlB6wwHmUZx2NFbDKeC9bLeM09OJReOg3I9GIjcZL9"
          />
        </div>
        <div className="relative z-10 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-2xl">
          <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md mb-6">Gran Formato & Publicidad Exterior</span>
          <h1 className="font-display-lg text-display-lg text-white mb-4">IMPRESIONES A GRAN ESCALA</h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed leading-relaxed">Listas para resistir la intemperie sin perder color ni nitidez.</p>
        </div>
      </section>

      <section ref={ref} className="space-y-12 transition-all duration-700 opacity-0 translate-y-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-gutter">
          {FORMATOS.map((formato) => (
            <div
              key={formato.title}
              className="bg-white rounded-xl border border-outline-variant overflow-hidden"
            >
              <PhotoPlaceholder label={formato.title} />
              <div className="p-4">
                <p className="font-bold text-sm">{formato.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}