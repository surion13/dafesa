import useScrollReveal from "../hooks/useScrollReveal";

const ACABADOS = ["Lincoln", "Franjas de Seguridad", "Autocopiantes", "Con Adhesivo", "Para desprender"];

const MATERIALES = [
  "Cuero",
  "Plastificados",
  "Tapa Dura / Blanda",
  "Sellos de Seguridad",
  "Metal o Madera",
  "Papeles Especiales",
];

export default function AcabadosMateriales() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-outline-variant transition-all duration-700 opacity-0 translate-y-8"
    >
      <div className="space-y-6">
        <h3 className="font-headline-md text-headline-md text-primary">Acabados de Precisión</h3>
        <div className="flex flex-wrap gap-3">
          {ACABADOS.map((item) => (
            <span
              key={item}
              className="px-4 py-2 border border-outline text-on-surface-variant rounded-lg font-label-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-headline-md text-headline-md text-primary">Materiales Premium</h3>
        <div className="flex flex-wrap gap-3">
          {MATERIALES.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-on-surface text-white rounded-lg font-label-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}