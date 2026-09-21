import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import ProductQuoteModal from "../components/ProductQuoteModal";

const GRUPOS = [
  {
    title: "Gran Formato Exterior",
    subtitle: "Impresiones de alto impacto para espacios abiertos y fachadas comerciales",
    items: [
      {
        title: "Vallas & Avisos",
        description: "Vallas publicitarias y avisos de gran formato con tintas UV resistentes a la intemperie, viento y lluvia sin perder brillo ni nitidez.",
        icon: "photo_size_select_large",
        image: "/productos/vallas_avisos.jpg",
        images: ["/productos/vallas_avisos.jpg"],
        badge: "Impresion UV Exterior",
        materialsTitle: "Sustratos disponibles:",
        papers: [
          "Lona solvente 440g / 500g costuras selladas",
          "Vinilo adhesivo alta adherencia (3M / Avery)",
          "Malla mesh transpirable 50% perforacion",
          "Rigido forex PVC expandido 3mm / 5mm",
        ],
        formatsTitle: "Medidas comunes:",
        formats: [
          "Valla 4 x 2 m / 6 x 3 m / 8 x 3 m",
          "Avisos de fachada a la medida",
          "Tamanos personalizados sin restriccion",
        ],
        finishesTitle: "Acabados y montaje:",
        finishes: [
          "Ojales metalicos reforzados cada 50 cm",
          "Costura perimetral doble refuerzo",
          "Bastidor de aluminio o madera",
          "Instalacion incluida en Bogota",
        ],
        quantities: ["1", "2", "5", "10", "20+"],
      },
      {
        title: "Pendones & Banderas",
        description: "Pendones retractiles y banderas publicitarias para puntos de venta, ferias, eventos y exhibiciones con soporte incluido.",
        icon: "flag",
        image: "/productos/pendones_banderas.jpg",
        images: ["/productos/pendones_banderas.jpg"],
        badge: "Alta Visibilidad",
        materialsTitle: "Sustratos disponibles:",
        papers: [
          "Tela Satin 110g para sublimacion",
          "Lona backlit retroiluminada",
          "Vinilo traslucido para cajas de luz",
          "Lona banner opaca 440g",
        ],
        formatsTitle: "Formatos estandar:",
        formats: [
          "Pendon retractil 80 x 200 cm",
          "Pendon retractil 100 x 200 cm",
          "Bandera tipo pluma (Feather Flag) 60 x 250 cm",
          "Bandera tipo gota (Teardrop) hasta 4 m",
        ],
        finishesTitle: "Acabados y estructura:",
        finishes: [
          "Base de agua con bolsa de transporte",
          "Base de gravedad para exteriores",
          "Asta telescopica de aluminio",
          "Impresion doble cara disponible",
        ],
        quantities: ["1", "2", "5", "10", "25+"],
      },
      {
        title: "Carteles & Colombinas",
        description: "Señalizacion visual de doble cara en puntos de venta, pasillos y areas peatonales con disenos llamativos a todo color.",
        icon: "emergency",
        image: "/productos/carteles_colombinas.jpg",
        images: ["/productos/carteles_colombinas.jpg"],
        badge: "Senalizacion POP",
        materialsTitle: "Sustratos disponibles:",
        papers: [
          "Rigido PVC 5mm / 10mm alta resistencia",
          "Coroplast alveolar 3mm / 5mm",
          "Carton pluma 5mm / 10mm",
          "Forex laminado con vinilo",
        ],
        formatsTitle: "Tamanos frecuentes:",
        formats: [
          "Colombina estandar 60 x 120 cm (2 caras)",
          "Cartel A1 (59 x 84 cm)",
          "Cartel A0 (84 x 119 cm)",
          "Medidas personalizadas",
        ],
        finishesTitle: "Terminados posibles:",
        finishes: [
          "Troquelado con forma especial",
          "Pie metalico cromado o plegable",
          "Laminado mate o brillante UV",
          "Impresion dos caras",
        ],
        quantities: ["1", "2", "5", "10", "25+"],
      },
      {
        title: "Laterales & Rompetraficos",
        description: "Publicidad de via publica en paraderos, mobiliario urbano y espacios de transito con maxima cobertura de audiencia.",
        icon: "image",
        image: "/productos/laterales_rompetraficos.jpg",
        images: ["/productos/laterales_rompetraficos.jpg"],
        badge: "Publicidad Via Publica",
        materialsTitle: "Sustratos disponibles:",
        papers: [
          "Vinilo adhesivo de alta durabilidad",
          "Lona solvente 440g / 500g",
          "Papel fotografico para interiores",
          "Lona malla para grandes alturas",
        ],
        formatsTitle: "Formatos y aplicaciones:",
        formats: [
          "Lateral de bus / TransMilenio",
          "Rompetraf ico 60 x 160 cm",
          "Publicidad en paraderos",
          "Valla caminera",
        ],
        finishesTitle: "Opciones de instalacion:",
        finishes: [
          "Vinilo de remocion en fachadas",
          "Laminado anti-rayaduras",
          "Acabado retro-reflectivo",
          "Instalacion profesional incluida",
        ],
        quantities: ["1", "5", "10", "25", "50+"],
      },
    ],
  },
];

export default function GranFormatoPage() {
  const ref = useScrollReveal();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative overflow-hidden rounded-xl h-[300px] md:h-[400px] flex items-center bg-on-surface">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Impresion de gran formato y publicidad exterior"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjYlPhChPmYDp0yNumicYDLi2rO0LJ2Q05gmxfRIaxdWkymyoKkELyGJd8aIT1AegUx_Y3GkDUr2Jjk_vxobKeY-YtI3vbOPTSgVpMKB3-LslG1iaoQ4d-McSuTPyTBwBOVAFQKxQPuxYGBS13OR2OicF2rwZHRSlrpTbR79L8ErobdwAd8ZWPJ7JwRcmCVS9laRICNjNdZwrlB6wwHmUZx2NFbDKeC9bLeM09OJReOg3I9GIjcZL9"
          />
        </div>
        <div className="relative z-10 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-2xl">
          <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md mb-6">
            Gran Formato y Publicidad Exterior
          </span>
          <h1 className="font-display-lg text-display-lg text-white mb-4">IMPRESIONES A GRAN ESCALA</h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed leading-relaxed">
            Listas para resistir la intemperie sin perder color ni nitidez.
          </p>
        </div>
      </section>

      <section ref={ref} className="space-y-16 transition-all duration-700 opacity-0 translate-y-8">
        {GRUPOS.map((grupo) => (
          <div key={grupo.title} className="space-y-6">
            <div className="border-b border-outline-variant/30 pb-3">
              <h2 className="font-headline-md text-headline-md text-on-surface">{grupo.title}</h2>
              {grupo.subtitle && (
                <p className="text-sm text-secondary mt-1">{grupo.subtitle}</p>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-gutter">
              {grupo.items.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedProduct({ ...item, category: grupo.title })}
                  className="group text-left bg-white rounded-2xl border border-outline-variant/60 overflow-hidden hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full rounded-t-2xl overflow-hidden bg-surface-container-low">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <PhotoPlaceholder label={item.title} icon={item.icon} />
                    )}
                    <span className="absolute top-2.5 right-2.5 bg-white/95 text-xs text-primary font-semibold px-2 py-0.5 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Cotizar
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                      <p className="text-xs text-secondary line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between text-xs text-primary font-semibold">
                      <span>Ver opciones</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      <ProductQuoteModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}