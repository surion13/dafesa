import { useState } from "react";

import useScrollReveal from "../hooks/useScrollReveal";

import PhotoPlaceholder from "../components/PhotoPlaceholder";

import ProductQuoteModal from "../components/ProductQuoteModal";

const SERVICIOS = [
  {
    title: "Agendas & Porta Agendas",
    description:
      "Agendas personalizadas con opciones de impresión y acabados premium, ideales para regalos corporativos, eventos y marcas que buscan una presentación profesional.",
    icon: "menu_book",
    image: "/productos/agendas.png",
    images: ["/productos/agendas.png"],
    badge: "Papelería Premium",

    materialsTitle: "Materiales disponibles:",
    papers: [
      "Papel bond de alta blancura",
      "Papel propalcote para separadores y páginas especiales",
      "Cartón rígido para tapas",
      "Materiales sintéticos disponibles bajo solicitud",
    ],

    formatsTitle: "Formatos habituales:",
    formats: [
      "Agenda A5 (14,8 x 21 cm)",
      "Agenda media carta",
      "Agenda personalizada a la medida",
      "Porta agenda corporativo personalizado",
    ],

    finishesTitle: "Acabados disponibles:",
    finishes: [
      "Tapa dura laminada mate",
      "Laminado brillante",
      "Encuadernación en espiral",
      "Encuadernación tipo libro",
      "Personalización de portada",
    ],

    quantities: ["10", "25", "50", "100", "250+"],
  },

  {
    title: "Diplomas, Menciones & Porta Diplomas",
    description:
      "Diplomas y menciones con presentación elegante para reconocimientos académicos, empresariales, institucionales y ceremonias especiales.",
    icon: "workspace_premium",
    image: "/productos/diplomas.png",
    images: ["/productos/diplomas.png"],
    badge: "Reconocimiento Premium",

    materialsTitle: "Materiales disponibles:",
    papers: [
      "Cartulina opalina de alta calidad",
      "Papel pergamino para diplomas",
      "Cartulina propalcote de alto gramaje",
      "Cartón rígido para porta diplomas",
    ],

    formatsTitle: "Formatos habituales:",
    formats: [
      "Carta (21,6 x 27,9 cm)",
      "A4 (21 x 29,7 cm)",
      "Oficio (21,6 x 33 cm)",
      "Medidas personalizadas",
    ],

    finishesTitle: "Acabados disponibles:",
    finishes: [
      "Laminado mate",
      "Laminado brillante",
      "Hot stamping dorado o plateado",
      "Borde decorativo",
      "Porta diploma personalizado",
    ],

    quantities: ["1", "10", "25", "50", "100+"],
  },

  {
    title: "Invitaciones & Placas Conmemorativas",
    description:
      "Invitaciones y placas personalizadas para celebraciones, reconocimientos, inauguraciones y momentos especiales que merecen una presentación memorable.",
    icon: "card_giftcard",
    image: "/productos/placa_conmemorativas.png",
    images: ["/productos/placa_conmemorativas.png"],
    badge: "Diseño Conmemorativo",

    materialsTitle: "Materiales disponibles:",
    papers: [
      "Cartulina propalcote de alto gramaje",
      "Cartulina opalina premium",
      "Cartón rígido para placas",
      "Acrílico y materiales especiales bajo solicitud",
    ],

    formatsTitle: "Formatos habituales:",
    formats: [
      "Invitación 10 x 15 cm",
      "Invitación 13 x 18 cm",
      "Formatos cuadrados personalizados",
      "Placas conmemorativas a la medida",
    ],

    finishesTitle: "Acabados disponibles:",
    finishes: [
      "Laminado mate",
      "Laminado brillante",
      "Hot stamping dorado o plateado",
      "Troquelado especial",
      "Grabado o personalización",
    ],

    quantities: ["10", "25", "50", "100", "250+"],
  },
];

export default function ServiciosEspecializadosPage() {
  const ref = useScrollReveal();

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden rounded-xl h-[300px] md:h-[400px] flex items-center bg-on-surface">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Servicios especializados de impresión premium"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRqEzqpmavdiqbqjuuzGg1TR6GtUnIQiEcuX7dOClXN0zRoJnaOevdGH8hdPvuq8r9Y74ItHW64WyWjUHVFeZwwtQHigWU1V6iCI0exyk3N5Mf9WPSLiFrn-7joe7zOCxOtZYROy40WIQQ31cuSpFw28gL17J_-MXBQUEednnZr5L-MIVmV6kGBaDI9ceFr6OsV8HJPJ6Ie2KN6Vhj5JrRUogmAMY3iMHCj5uCrr3-kkzPFmP6L4A"
          />
        </div>

        <div className="relative z-10 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-2xl">
          <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md mb-6">
            Servicios Especializados
          </span>

          <h1 className="font-display-lg text-display-lg text-white mb-4">
            PRODUCTOS DE ALTA DISTINCIÓN
          </h1>

          <p className="font-body-lg text-body-lg text-secondary-fixed leading-relaxed">
            Para los momentos que tu marca quiere celebrar.
          </p>
        </div>
      </section>

      {/* Productos */}
      <section
        ref={ref}
        className="space-y-12 transition-all duration-700 opacity-0 translate-y-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICIOS.map((servicio) => (
            <button
              key={servicio.title}
              type="button"
              onClick={() =>
                setSelectedProduct({
                  ...servicio,
                  category: "Servicios Especializados",
                })
              }
              className="group text-left bg-white rounded-2xl border border-outline-variant/60 overflow-hidden hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Imagen / Placeholder */}
              <div className="relative aspect-square w-full rounded-t-2xl overflow-hidden bg-surface-container-low">
                {servicio.image ? (
                  <img
                    src={servicio.image}
                    alt={servicio.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <PhotoPlaceholder
                    label={servicio.title}
                    icon={servicio.icon}
                  />
                )}

                {/* Badge Cotizar */}
                <span className="absolute top-2.5 right-2.5 bg-white/95 text-xs text-primary font-semibold px-2 py-0.5 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Cotizar
                </span>
              </div>

              {/* Información */}
              <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                    {servicio.title}
                  </p>

                  <p className="text-xs text-secondary line-clamp-3 mt-1 leading-relaxed">
                    {servicio.description}
                  </p>
                </div>

                {/* Footer de tarjeta */}
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
      </section>

      {/* Modal de cotización */}
      <ProductQuoteModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}