export default function Hero() {
  return (
    <section id="servicios" className="relative overflow-hidden rounded-xl h-[600px] flex items-center bg-on-surface">
      <div className="absolute inset-0 opacity-40">
        <img 
          className="w-full h-full object-cover" 
          alt="A professional printing workshop with high-end industrial machinery" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjYlPhChPmYDp0yNumicYDLi2rO0LJ2Q05gmxfRIaxdWkymyoKkELyGJd8aIT1AegUx_Y3GkDUr2Jjk_vxobKeY-YtI3vbOPTSgVpMKB3-LslG1iaoQ4d-McSuTPyTBwBOVAFQKxQPuxYGBS13OR2OicF2rwZHRSlrpTbR79L8ErobdwAd8ZWPJ7JwRcmCVS9laRICNjNdZwrlB6wwHmUZx2NFbDKeC9bLeM09OJReOg3I9GIjcZL9" 
        />
      </div>
      <div className="relative z-10 px-(--spacing-margin-desktop) max-w-2xl">
        <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md mb-6">Excelencia en Impresión</span>
        <h1 className="font-display-lg text-display-lg text-white mb-6">TU MARCA, NUESTRA IMPRESIÓN</h1>
        <p className="font-body-lg text-body-lg text-secondary-fixed mb-8 leading-relaxed">Transformamos tus ideas en realidades físicas de alta calidad. Desde papelería comercial hasta soluciones de gran formato.</p>
        <div className="flex gap-4">
          {/* <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-label-md text-label-md hover:brightness-110 transition-all flex items-center gap-2">
            Ver Catálogo <span className="material-symbols-outlined">arrow_forward</span>
          </button> */}
        </div>
      </div>
    </section>
  );
}