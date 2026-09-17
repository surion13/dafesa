import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import ProductQuoteModal from "../components/ProductQuoteModal";

const GRUPOS = [
  {
    title: "Textiles",
    subtitle: "Prendas personalizadas con estampados y bordados de alta duración",
    items: [
      {
        title: "Camisetas",
        description: "Camisetas corporativas en algodón peinado o poliéster deportivo, con bordado fino o estampado DTF de alta fidelidad.",
        icon: "apparel",
        image: "/productos/camisetas.jpg",
        images: ["/productos/camisetas.jpg"],
        badge: "Textil Premium",
        materialsTitle: "🧵 Telas & Gramajes:",
        papers: ["Algodón 100% 180g (Pima / Peinado)", "Poliéster deportivo transpirable", "Mezcla Algodón / Poliéster"],
        formatsTitle: "📏 Tallas disponibles:",
        formats: ["Dama y Caballero (XS, S, M, L, XL, XXL)", "Línea infantil (Tallas 4 al 16)"],
        finishesTitle: "🎨 Técnica de personalización:",
        finishes: ["Bordado computarizado", "Estampado DTF full color", "Serigrafía textil (Screen)", "Sublimación"],
        quantities: ["25", "50", "100", "250", "500+"],
      },
      {
        title: "Gorras",
        description: "Gorras tipo beisbolera o camionera con frente rígido, costuras reforzadas y apliques bordados o en cuero grabado.",
        icon: "sports_baseball",
        image: "/productos/gorras.jpg",
        images: ["/productos/gorras.jpg"],
        badge: "Bordado & Apliques",
        materialsTitle: "🧵 Materiales:",
        papers: ["Dril pesado 100% algodón", "Malla camionera transpirable", "Microfibra acrílica"],
        formatsTitle: "📐 Estructura y ajuste:",
        formats: ["6 cascos con botón superior", "Frente plano o curvado", "Cierre con hebilla metálica o velcro"],
        finishesTitle: "🎨 Técnica de personalización:",
        finishes: ["Bordado 3D de alto relieve", "Aplique en cuero grabado láser", "Estampado en vinilo textil"],
        quantities: ["25", "50", "100", "250", "500+"],
      },
      {
        title: "Tulas",
        description: "Tulas y mochilas deportivas con cordón ajustable, livianas, resistentes al agua y con gran área para exhibir tu marca.",
        icon: "backpack",
        image: "/productos/tulas.jpg",
        images: ["/productos/tulas.jpg"],
        badge: "Alta Resistencia",
        materialsTitle: "🧵 Telas sugeridas:",
        papers: ["Lona impermeable Lafayette", "Tela no tejida ecológica (Cambrel)", "Antifluido de alta resistencia"],
        formatsTitle: "📐 Dimensiones:",
        formats: ["Estándar (35 x 42 cm)", "Grande (40 x 48 cm)", "Con bolsillo frontal y cremallera"],
        finishesTitle: "🎨 Técnica de personalización:",
        finishes: ["Estampado en serigrafía", "Sublimación total full color", "Vinilo textil reflectivo"],
        quantities: ["50", "100", "250", "500", "1.000+"],
      },
      {
        title: "Bolsas",
        description: "Bolsas ecológicas reutilizables en lienzo, tocuyo o cambrel, perfectas para ferias, eventos corporativos y empaque responsable.",
        icon: "shopping_bag",
        image: "/productos/bolsas.jpg",
        images: ["/productos/bolsas.jpg"],
        badge: "Eco-Friendly",
        materialsTitle: "🧵 Materiales ecológicos:",
        papers: ["Lienzo 100% algodón crudo", "Cambrel ecológico (Notex) 80g", "Papel Kraft reforzado con asas"],
        formatsTitle: "📐 Tamaños comunes:",
        formats: ["Pequeña (20 x 25 cm)", "Mediana (35 x 40 cm)", "Grande con fuelle lateral (45 x 40 x 10 cm)"],
        finishesTitle: "🎨 Técnica de personalización:",
        finishes: ["Serigrafía 1 a 4 tintas", "Estampado DTF a color", "Asas largas reforzadas"],
        quantities: ["50", "100", "250", "500", "1.000+"],
      },
    ],
  },
  {
    title: "Detalles que Marcan",
    subtitle: "Regalos corporativos memorables para colaboradores, clientes y eventos especiales",
    items: [
      {
        title: "Mugs & Pads",
        description: "Mugs de cerámica AAA de 11 oz y mouse pads ergonómicos antideslizantes impresos a todo color con resolución fotográfica.",
        icon: "coffee",
        image: "/productos/mugs_pads.jpg",
        images: ["/productos/mugs_pads.jpg"],
        badge: "Sublimación HD",
        materialsTitle: "☕ Materiales:",
        papers: ["Cerámica blanca AAA de alto brillo", "Pads con base de goma antideslizante y tela suave", "Mugs con interior de color o mágicos"],
        formatsTitle: "📐 Formatos:",
        formats: ["Mug cilíndrico 11 oz (325 ml)", "Mug cónico 12 oz", "Mouse pad circular (20 cm) o rectangular (22 x 18 cm)"],
        finishesTitle: "🎨 Técnica de personalización:",
        finishes: ["Sublimación digital a todo color", "Acabado brillante de alta durabilidad", "Caja individual para regalo"],
        quantities: ["12", "36", "72", "150", "300+"],
      },
      {
        title: "Esferos & Cajas",
        description: "Bolígrafos metálicos o ecológicos de bambú y plástico reciclado, presentados en elegantes estuches corporativos.",
        icon: "edit",
        image: "/productos/esferos_cajas.jpg",
        images: ["/productos/esferos_cajas.jpg"],
        badge: "Grabado Láser",
        materialsTitle: "🖊️ Materiales:",
        papers: ["Aluminio anodizado mate", "Bambú natural sostenible", "Plástico ABS de alta resistencia"],
        formatsTitle: "📐 Presentaciones:",
        formats: ["Tinta negra o azul de gel 0.7mm", "Puntero táctil touch", "Estuche individual rígido o funda de gamuza"],
        finishesTitle: "🎨 Técnica de personalización:",
        finishes: ["Grabado láser indeleble", "Tampografía full color", "Estuche con fajilla impresa"],
        quantities: ["50", "100", "250", "500", "1.000+"],
      },
      {
        title: "Medallas & Sellos",
        description: "Medallas conmemorativas fundidas en metal con cinta estampada y sellos automáticos con tinta de larga duración.",
        icon: "military_tech",
        image: "/productos/medallas_sellos.jpg",
        images: ["/productos/medallas_sellos.jpg"],
        badge: "Distinción & Reconocimiento",
        materialsTitle: "🏅 Materiales:",
        papers: ["Aleación metálica Zamak con baño dorado/plateado", "Cinta satinada de 2.5 cm", "Sellos automáticos Trodat / Shiny"],
        formatsTitle: "📐 Tamaños:",
        formats: ["Medallas de 5 cm, 6 cm y 7 cm de diámetro", "Sellos de bolsillo o de escritorio (38 x 14 mm hasta 70 x 25 mm)"],
        finishesTitle: "🎨 Técnica de personalización:",
        finishes: ["Esmaltado a color con resina", "Cinta sublimada con logo", "Sello con placa grabada en caucho láser"],
        quantities: ["25", "50", "100", "250", "500+"],
      },
      {
        title: "Carnets & Empaques",
        description: "Credenciales en PVC de alta seguridad con cinta colgante corporativa y cajas troqueladas de empaque para regalos.",
        icon: "badge",
        image: "/productos/carnets_empaques.jpg",
        images: ["/productos/carnets_empaques.jpg"],
        badge: "Identidad & Seguridad",
        materialsTitle: "📦 Materiales:",
        papers: ["PVC calibre 30 (tipo tarjeta de crédito)", "Cinta de poliéster de 2 cm", "Cartulina Maule o Kraft plegadiza para cajas"],
        formatsTitle: "📐 Formatos:",
        formats: ["Carnet estándar 8.5 x 5.4 cm", "Yoyo retráctil o mosquetón metálico", "Cajas a la medida del producto"],
        finishesTitle: "🎨 Técnica de personalización:",
        finishes: ["Impresión térmica doble cara", "Laminado de seguridad holográfico", "Cinta sublimada con broche de seguridad"],
        quantities: ["20", "50", "100", "250", "500+"],
      },
    ],
  },
];

export default function MerchandisingPage() {
  const ref = useScrollReveal();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* Hero banner consistente con el Home */}
      <section className="relative overflow-hidden rounded-xl h-[300px] md:h-[400px] flex items-center bg-on-surface">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Merchandising y regalos corporativos premium"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvoOuVCeTQi7zu4ArE35daNNQCOuqbDJr5cuqKjXrgOyx5v7KQTEj9AoXbOEhBBt2IiTsZtoEiSTHfo5Daq6OPK91r1EDkS4vtqpqV1yvJNeuZC0PiyjbkdNbXUHk1wX0paPypITXYKbUY0ErGOAFCn6ijDO87siPAm5k9uKU1K44ZweET2w3vfZEMBzvQfIANlHuQ2YRlTN3bYfp4BEmDZWBVkL5wU4D5opEM0LHZvKzsAUtuJJXq"
          />
        </div>
        <div className="relative z-10 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-2xl">
          <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md mb-6">
            Merchandising & Regalos
          </span>
          <h1 className="font-display-lg text-display-lg text-white mb-4">
            PIEZAS QUE TUS CLIENTES VAN A QUERER USAR
          </h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed leading-relaxed">
            Con tu marca siempre presente en los momentos que importan.
          </p>
        </div>
      </section>

      {/* Listado de grupos y productos interactivos */}
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
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <PhotoPlaceholder label={item.title} icon={item.icon} />
                    )}
                    <span className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-[11px] text-primary font-semibold px-2 py-0.5 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xs">
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

      {/* Modal moderno de detalle y cotización */}
      <ProductQuoteModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}