import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import ProductQuoteModal from "../components/ProductQuoteModal";

const GRUPOS = [
  {
    title: "Administrativo",
    subtitle: "Documentación contable, legal y operativa para empresas",
    items: [
      {
        title: "Egresos e Ingresos",
        description: "Comprobantes numerados y membretados para el control contable riguroso y transparente de tu negocio.",
        icon: "receipt_long",
        image: "/productos/egresos_ingresos.jpg",
        images: ["/productos/egresos_ingresos.jpg"],
        papers: ["Papel Químico autocopiante", "Bond 75g de alta blancura", "Original + 2 copias"],
        formats: ["Media Carta (14 x 21 cm)", "Carta (21.5 x 28 cm)", "1/3 de Carta"],
        finishes: ["Numeración consecutiva en rojo", "Grapado y perforado", "Tapa envolvente protectora"],
        quantities: ["100", "250", "500", "1.000", "2.500+"],
      },
      {
        title: "Facturas & Talonarios",
        description: "Facturas de venta y talonarios numerados consecutivamente, adaptados a requisitos legales con tu identidad de marca.",
        icon: "description",
        image: "/productos/facturas_talonarios.jpg",
        images: ["/productos/facturas_talonarios.jpg"],
        papers: ["Químico 2 o 3 partes", "Bond blanco y de color", "Cartulina soporte"],
        formats: ["Carta", "Media Carta", "Formato continuo"],
        finishes: ["Microperforado de fácil desprendimiento", "Foliación correlativa", "Carátula envolvente"],
        quantities: ["100", "250", "500", "1.000", "2.500+"],
      },
      {
        title: "Contratos",
        description: "Formatos de contratos impresos con papel y acabados que transmiten seriedad, confianza y formalidad jurídica.",
        icon: "history_edu",
        image: "/productos/contratos.jpg",
        images: ["/productos/contratos.jpg"],
        papers: ["Bond de seguridad 90g", "Kimberly / Opalina", "Bond 75g"],
        formats: ["Oficio (21.5 x 33 cm)", "Carta (21.5 x 28 cm)"],
        finishes: ["Membrete de alta definición", "Encuadernado o perforado", "Foliación"],
        quantities: ["50", "100", "250", "500", "1.000+"],
      },
      {
        title: "Formularios",
        description: "Formularios a medida para procesos internos, auditorías, pedidos, remisiones o registros de tu empresa.",
        icon: "assignment",
        image: "/productos/formularios.jpg",
        images: ["/productos/formularios.jpg"],
        papers: ["Bond 75g", "Papel químico autocopiante", "Cartulina Bristol"],
        formats: ["Carta", "Media Carta", "Oficio"],
        finishes: ["Encolado en blocs x 50 o 100", "Perforado para archivo AZ", "Impresión 1 tinta o full color"],
        quantities: ["100", "250", "500", "1.000", "2.500+"],
      },
    ],
  },
  {
    title: "Identidad",
    subtitle: "Piezas corporativas de alto impacto para proyectar profesionalismo",
    items: [
      {
        title: "Sobres",
        description: "Sobres corporativos impresos a full color con tu logo y datos de contacto, con solapa engomada de seguridad.",
        icon: "mail",
        image: "/productos/sobres.jpg",
        images: ["/productos/sobres.jpg"],
        papers: ["Bond 90g / 115g", "Opalina lisa", "Manila resistente"],
        formats: ["Sobre Carta (10 x 24 cm)", "Sobre Oficio", "Sobre Manila 1/2 pliego / Carta"],
        finishes: ["Solapa con cinta siliconada", "Ventana transparente opcional", "Impresión tiro y retiro"],
        quantities: ["250", "500", "1.000", "2.500", "5.000+"],
      },
      {
        title: "Folletos & Plegables",
        description: "Folletos y plegables informativos de gran definición para campañas comerciales, eventos y ferias corporativas.",
        icon: "view_carousel",
        image: "/productos/folletos_plegables.jpg",
        images: ["/productos/folletos_plegables.jpg"],
        papers: ["Propalcote 115g / 150g / 200g", "Bond ecológico / EarthPact"],
        formats: ["Díptico Carta (2 cuerpos)", "Tríptico Carta (3 cuerpos)", "Políptico desplegable"],
        finishes: ["Plastificado mate o brillante", "Troquelado especial", "Barniz UV selectivo"],
        quantities: ["250", "500", "1.000", "2.500", "5.000+"],
      },
      {
        title: "Folders & Carpetas",
        description: "Folders y carpetas personalizadas para presentar propuestas comerciales, informes y contratos con elegancia.",
        icon: "folder",
        image: "/productos/folders_carpetas.jpg",
        images: ["/productos/folders_carpetas.jpg"],
        papers: ["Propalcote 300g (rigidez superior)", "Maule calibre 14 / 16", "Lino / Opalina"],
        formats: ["Para documentos tamaño Carta y Oficio"],
        finishes: ["Bolsillo interior con ranura para tarjeta", "Plastificado mate + reserva UV", "Repujado al calor"],
        quantities: ["100", "250", "500", "1.000", "2.000+"],
      },
      {
        title: "Tarjetas & Flyers",
        description: "Tarjetas de presentación y volantes publicitarios con impresión nítida y duradera que captan clientes al instante.",
        icon: "badge",
        image: "/productos/tarjetas_flyers.jpg",
        images: ["/productos/tarjetas_flyers.jpg"],
        papers: ["Propalcote 300g", "Papel Esmaltado 115g (Flyers)", "Papeles finos texturizados"],
        formats: ["Tarjetas 9 x 5.5 cm", "Flyers 1/4 carta (10 x 14 cm)", "Flyers media carta"],
        finishes: ["Plastificado mate tacto suave (Soft Touch)", "Brillo UV total o parcial", "Bordes redondeados"],
        quantities: ["500", "1.000", "2.000", "5.000", "10.000+"],
      },
    ],
  },
  {
    title: "Editorial",
    subtitle: "Publicaciones impresas con encuadernación rústica, cosida o anillada",
    items: [
      {
        title: "Libros & Revistas",
        description: "Impresión y encuadernación de libros y revistas con rigurosa fidelidad de color y acabados editoriales profesionales.",
        icon: "menu_book",
        image: "/productos/libros_revistas.jpg",
        images: ["/productos/libros_revistas.jpg"],
        papers: ["Interiores: Bond 75g / Esmaltado 115g", "Carátula: Propalcote 240g a 300g"],
        formats: ["Media Carta", "Carta", "Formatos a medida"],
        finishes: ["Cosido al hilo + pegado Hotmelt", "Grapa al caballete", "Tapa rústica o dura"],
        quantities: ["50", "100", "250", "500", "1.000+"],
      },
      {
        title: "Manuales & Cartillas",
        description: "Manuales y cartillas educativas o corporativas, claras, legibles y encuadernadas para uso continuo y duradero.",
        icon: "auto_stories",
        image: "/productos/manuales_cartillas.jpg",
        images: ["/productos/manuales_cartillas.jpg"],
        papers: ["Bond 75g / 90g", "Propalcote 115g", "Carátula laminada de alta resistencia"],
        formats: ["Carta", "Media Carta"],
        finishes: ["Anillado doble O metálico", "Espiral plástico", "Grapado al lomo"],
        quantities: ["50", "100", "200", "500", "1.000+"],
      },
      {
        title: "Cuadernos Empresariales",
        description: "Cuadernos personalizados con tu marca, tapa dura y hojas internas membretadas, ideales para merchandising corporativo.",
        icon: "book",
        image: "/productos/cuadernos_empresariales.jpg",
        images: ["/productos/cuadernos_empresariales.jpg"],
        papers: ["Carátula: Cartón prensado empastado", "Hojas: Bond 75g con marca de agua"],
        formats: ["Mediano (15 x 21 cm)", "Grande (20 x 27 cm)"],
        finishes: ["Resorte metálico doble O", "Cinta elástica de cierre", "Bolsillo portadocumentos interno"],
        quantities: ["50", "100", "250", "500", "1.000+"],
      },
      {
        title: "Catálogos & Portafolios",
        description: "Catálogos y portafolios que resaltan tus productos y servicios con gran calidad cromática y acabados premium.",
        icon: "library_books",
        image: "/productos/catalogos_portafolios.jpg",
        images: ["/productos/catalogos_portafolios.jpg"],
        papers: ["Propalcote 150g a 200g", "Carátula Propalcote 300g"],
        formats: ["Carta cerrado", "Cuadrado 20 x 20 cm", "Personalizado"],
        finishes: ["Plastificado mate antirayón", "Barniz UV sectorizado", "Encuadernación grapa o lomo cuadrado"],
        quantities: ["100", "250", "500", "1.000", "2.500+"],
      },
    ],
  },
];

export default function ServiciosComercialesPage() {
  const ref = useScrollReveal();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* Hero banner consistente con el Home */}
      <section className="relative overflow-hidden rounded-xl h-[300px] md:h-[400px] flex items-center bg-on-surface">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Papelería comercial y de oficina profesional"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjYlPhChPmYDp0yNumicYDLi2rO0LJ2Q05gmxfRIaxdWkymyoKkELyGJd8aIT1AegUx_Y3GkDUr2Jjk_vxobKeY-YtI3vbOPTSgVpMKB3-LslG1iaoQ4d-McSuTPyTBwBOVAFQKxQPuxYGBS13OR2OicF2rwZHRSlrpTbR79L8ErobdwAd8ZWPJ7JwRcmCVS9laRICNjNdZwrlB6wwHmUZx2NFbDKeC9bLeM09OJReOg3I9GIjcZL9"
          />
        </div>
        <div className="relative z-10 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-2xl">
          <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md mb-6">
            Papelería Comercial & Oficina
          </span>
          <h1 className="font-display-lg text-display-lg text-white mb-4">
            TODO EL PAPELEO QUE TU NEGOCIO NECESITA
          </h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed leading-relaxed">
            Con la calidad, precisión y consistencia que tu marca merece.
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