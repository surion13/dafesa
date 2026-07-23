export default function FinishesMaterials() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-outline-variant">
      <div className="space-y-6">
        <h3 className="font-headline-md text-headline-md text-primary">Acabados de Precisión</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border border-outline text-on-surface-variant rounded-lg font-label-md">Lincoln</span>
          <span className="px-4 py-2 border border-outline text-on-surface-variant rounded-lg font-label-md">Franjas de Seguridad</span>
          <span className="px-4 py-2 border border-outline text-on-surface-variant rounded-lg font-label-md">Autocopiantes</span>
          <span className="px-4 py-2 border border-outline text-on-surface-variant rounded-lg font-label-md">Con Adhesivo</span>
          <span className="px-4 py-2 border border-outline text-on-surface-variant rounded-lg font-label-md">Para desprender</span>
        </div>
      </div>
      <div className="space-y-6">
        <h3 className="font-headline-md text-headline-md text-primary">Materiales Premium</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-on-surface text-white rounded-lg font-label-md">Cuero</span>
          <span className="px-4 py-2 bg-on-surface text-white rounded-lg font-label-md">Plastificados</span>
          <span className="px-4 py-2 bg-on-surface text-white rounded-lg font-label-md">Tapa Dura / Blanda</span>
          <span className="px-4 py-2 bg-on-surface text-white rounded-lg font-label-md">Sellos de Seguridad</span>
          <span className="px-4 py-2 bg-on-surface text-white rounded-lg font-label-md">Metal o Madera</span>
          <span className="px-4 py-2 bg-on-surface text-white rounded-lg font-label-md">Papeles Especiales</span>
        </div>
      </div>
    </section>
  );
}