import { useEffect, useState } from "react";

// Modal moderno de detalle + cotización interactiva
export default function ProductQuoteModal({ product, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState("500");
  const [selectedFinish, setSelectedFinish] = useState("");
  const [copied, setCopied] = useState(false);

  // Reiniciar estado cada vez que se abre un producto nuevo
  useEffect(() => {
    if (product) {
      setCurrentSlide(0);
      const defaultQty =
        product.quantities && product.quantities.length > 0
          ? product.quantities[Math.min(2, product.quantities.length - 1)]
          : "500";
      setSelectedQuantity(defaultQty);
      setSelectedFinish(
        product.finishes && product.finishes.length > 0 ? product.finishes[0] : "Estándar"
      );
      setCopied(false);
    }
  }, [product]);

  // Cierre con Escape y bloqueo de scroll en el fondo
  useEffect(() => {
    if (!product) return undefined;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : null;
  const totalImages = images ? images.length : 0;

  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + totalImages) % totalImages);
  const goNext = () => setCurrentSlide((prev) => (prev + 1) % totalImages);

  const category = product.category || "Papelería Comercial";
  const icon = product.icon || "receipt_long";
  const quantities = product.quantities || ["100", "250", "500", "1.000", "2.500+"];
  const papers = product.papers || [
    "Papel de alta blancura / Propalcote",
    "Opciones ecológicas disponibles",
  ];
  const formats = product.formats || ["Formatos estándar y a medida"];
  const finishes = product.finishes || ["Acabado profesional", "Plastificado mate o brillante"];
  const materialsTitle = product.materialsTitle || "📄 Papeles & Materiales:";
  const formatsTitle = product.formatsTitle || "📐 Formatos habituales:";
  const finishesTitle = product.finishesTitle || "✨ Selecciona tu acabado preferido:";
  const badgeLabel = product.badge || "Calidad Garantizada HD";

  const phoneNumber = "573004345839";
  const messageText = `¡Hola Dafesa Impresores! 👋
Me gustaría cotizar el siguiente producto:
📄 *Producto:* ${product.title}
📂 *Categoría:* ${category}
🔢 *Cantidad estimada:* ${selectedQuantity} unidades
✨ *Acabado preferido:* ${selectedFinish || "Estándar"}

¿Podrían indicarme precios y tiempos de entrega? ¡Muchas gracias!`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 overflow-hidden my-auto flex flex-col md:flex-row max-h-[92vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar flotante */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute top-3.5 right-3.5 z-30 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-on-surface hover:text-primary shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border border-outline-variant/30"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* COLUMNA IZQUIERDA: Vitrina visual & Garantías (42% desktop) */}
        <div className="md:w-5/12 bg-gradient-to-br from-surface-container-low via-surface to-surface-container/60 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-outline-variant/30 relative overflow-hidden shrink-0">
          {/* Acento CMYK de imprenta moderna */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00a8e8]" title="Cyan" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#e0245e]" title="Magenta" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffc837]" title="Yellow" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#1a1c1c]" title="Black" />
              <span className="text-[11px] font-semibold tracking-wider text-secondary uppercase ml-1.5">
                {badgeLabel}
              </span>
            </div>
            <span className="text-[11px] font-medium text-primary bg-primary-container/25 px-2.5 py-0.5 rounded-full">
              Dafesa Calidad
            </span>
          </div>

          {/* Tarjeta de previsualización / Fotografía */}
          <div className="relative aspect-4/3 sm:aspect-square md:aspect-auto md:min-h-[260px] rounded-2xl bg-white shadow-sm border border-outline-variant/30 overflow-hidden flex items-center justify-center my-auto">
            {images ? (
              <div className="relative w-full h-full">
                <img
                  src={images[currentSlide]}
                  alt={`${product.title} - muestra ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                {totalImages > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Imagen anterior"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-on-surface shadow-md transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Imagen siguiente"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-on-surface shadow-md transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1 bg-black/30 backdrop-blur-xs px-2 py-1 rounded-full">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Slide ${idx + 1}`}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentSlide ? "bg-white w-4" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-gradient-to-b from-white to-surface-container-low">
                {/* Patrón de fondo geométrico sutil */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3 shadow-inner ring-8 ring-primary/5">
                  <span className="material-symbols-outlined text-4xl">{icon}</span>
                </div>
                <p className="font-bold text-base text-on-surface">{product.title}</p>
                <p className="text-xs text-secondary mt-0.5">Muestra y diseño 100% personalizable</p>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-primary font-medium bg-primary/5 px-2.5 py-1 rounded-full border border-primary/15">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  Impresión certificada
                </div>
              </div>
            )}
          </div>

          {/* Garantías Dafesa */}
          <div className="mt-4 pt-4 border-t border-outline-variant/30 space-y-2">
            <div className="flex items-center gap-2 text-xs text-secondary">
              <span className="material-symbols-outlined text-primary text-base shrink-0">
                check_circle
              </span>
              <span>Revisión técnica de tus archivos antes de impresión</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-secondary">
              <span className="material-symbols-outlined text-primary text-base shrink-0">
                local_shipping
              </span>
              <span>Despachos puntuales en Bogotá y a nivel nacional</span>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Especificaciones & Cotizador interactivo (58% desktop) */}
        <div className="md:w-7/12 p-6 sm:p-7 md:p-8 flex flex-col justify-between overflow-y-auto space-y-5">
          {/* Cabecera */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {category}
              </span>
              <span className="text-[11px] text-secondary bg-surface-container px-2 py-0.5 rounded-md font-medium">
                Corporativo
              </span>
            </div>
            <h3
              id="modal-product-title"
              className="font-headline-md text-2xl sm:text-3xl text-on-surface font-extrabold tracking-tight"
            >
              {product.title}
            </h3>
            <p className="font-body-md text-sm sm:text-base text-secondary mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Ficha técnica compacta */}
          <div className="bg-surface-container-low/70 rounded-xl p-4 border border-outline-variant/40 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-primary">
              <span className="material-symbols-outlined text-sm">tune</span>
              Ficha Técnica Sugerida
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-on-surface block mb-1">{materialsTitle}</span>
                <ul className="space-y-0.5 text-secondary pl-2 border-l border-primary/30">
                  {papers.map((p, idx) => (
                    <li key={idx} className="leading-tight">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-semibold text-on-surface block mb-1">{formatsTitle}</span>
                <ul className="space-y-0.5 text-secondary pl-2 border-l border-primary/30">
                  {formats.map((f, idx) => (
                    <li key={idx} className="leading-tight">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Acabados disponibles como pills interactivas */}
            {finishes && finishes.length > 0 && (
              <div className="pt-2 border-t border-outline-variant/30">
                <span className="font-semibold text-on-surface block text-xs mb-1.5">
                  {finishesTitle}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {finishes.map((finish) => {
                    const isSelected = selectedFinish === finish;
                    return (
                      <button
                        key={finish}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-primary text-white border-primary font-medium shadow-xs"
                            : "bg-white text-secondary border-outline-variant/50 hover:border-primary/50 hover:text-on-surface"
                        }`}
                      >
                        {finish}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Selector de cantidad estimada */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-on-surface uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm">layers</span>
                Cantidad estimada para cotización:
              </label>
              <span className="text-xs text-primary font-semibold">
                {selectedQuantity} unidades
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {quantities.map((qty) => {
                const active = selectedQuantity === qty;
                return (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setSelectedQuantity(qty)}
                    className={`py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all cursor-pointer text-center ${
                      active
                        ? "bg-primary text-white border-primary shadow-sm scale-102"
                        : "bg-white text-on-surface border-outline-variant/60 hover:border-primary/40 hover:bg-surface-container-low"
                    }`}
                  >
                    {qty}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Resumen & Botones de Acción */}
          <div className="space-y-2.5 pt-2 border-t border-outline-variant/30">
            {/* Botón principal de WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:shadow-[#25D366]/20 active:scale-[0.99] transition-all cursor-pointer group"
            >
              <svg
                className="w-5 h-5 fill-current shrink-0 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>
                Cotizar {product.title} ({selectedQuantity} uds.)
              </span>
            </a>

            {/* Acciones secundarias: copiar y llamada directa */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-semibold transition-colors cursor-pointer border border-outline-variant/40"
              >
                <span className="material-symbols-outlined text-sm">
                  {copied ? "check" : "content_copy"}
                </span>
                {copied ? "¡Mensaje copiado!" : "Copiar detalle de cotización"}
              </button>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-semibold transition-colors cursor-pointer border border-outline-variant/40"
                title="Llamar directamente a un asesor de Dafesa"
              >
                <span className="material-symbols-outlined text-sm text-primary">call</span>
                <span className="hidden sm:inline">Llamar asesor</span>
              </a>
            </div>

            <p className="text-center text-[11px] text-secondary">
              Atención inmediata de lunes a sábado • Asesoría técnica sin compromiso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
