export default function Merchandising() {
  return (
    <section className="space-y-12">
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Merchandising &amp; Regalos</h2>
      <div className="bento-grid">
        <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant p-6 rounded-xl flex flex-col justify-between">
          <div>
            <h4 className="font-headline-md text-headline-md mb-2">Textiles</h4>
            <p className="text-secondary text-sm mb-4">Prendas personalizadas de alta duración.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container text-on-surface rounded-full text-xs">Camisetas</span>
              <span className="px-3 py-1 bg-surface-container text-on-surface rounded-full text-xs">Gorras</span>
              <span className="px-3 py-1 bg-surface-container text-on-surface rounded-full text-xs">Tulas</span>
              <span className="px-3 py-1 bg-surface-container text-on-surface rounded-full text-xs">Bolsas</span>
            </div>
          </div>
          <div className="mt-8 h-48 relative rounded-lg overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              alt="Close-up of a high-quality embroidered logo" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAQc7bx6cQvPqY4q1A78zPZ7PM4FUU6-_wRBceAih8-M4U6CbYo-kfCgD7D5LEkEULvWTrf42DyuH14Cx8484phWPnizl3H4igRQDh5lCrZIH0GBeuo3NiSm6FuUFI7g7150eNtbpLENPHR4l7PR1btQC1EES3odWA0oVasll5P3vi2IdHQ9XRA3_0d1UbB89y6hrBBiE5Bq52PidbFOeBOGwtTEh9xHKLvimXIGPcm8dl2aw01l5V" 
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 bg-on-surface text-white p-8 rounded-xl relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10 max-w-md">
            <h4 className="font-headline-lg text-headline-lg mb-4">Detalles que Marcan</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary-container">stars</span>
                <div><p className="font-bold">Mugs &amp; Pads</p><p className="text-xs text-secondary-fixed-dim">Oficina con estilo</p></div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary-container">edit_square</span>
                <div><p className="font-bold">Esferos &amp; Cajas</p><p className="text-xs text-secondary-fixed-dim">Regalos premium</p></div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary-container">military_tech</span>
                <div><p className="font-bold">Medallas &amp; Sellos</p><p className="text-xs text-secondary-fixed-dim">Reconocimientos</p></div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary-container">badge</span>
                <div><p className="font-bold">Carnets &amp; Empaques</p><p className="text-xs text-secondary-fixed-dim">Seguridad y marca</p></div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
            <img 
              className="w-full h-full object-cover" 
              alt="A curated collection of branded corporate gifts" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvoOuVCeTQi7zu4ArE35daNNQCOuqbDJr5cuqKjXrgOyx5v7KQTEj9AoXbOEhBBt2IiTsZtoEiSTHfo5Daq6OPK91r1EDkS4vtqpqV1yvJNeuZC0PiyjbkdNbXUHk1wX0paPypITXYKbUY0ErGOAFCn6ijDO87siPAm5k9uKU1K44ZweET2w3vfZEMBzvQfIANlHuQ2YRlTN3bYfp4BEmDZWBVkL5wU4D5opEM0LHZvKzsAUtuJJXq" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}