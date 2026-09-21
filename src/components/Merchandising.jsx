import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const TEXTILE_TAGS = ["Camisetas", "Gorras", "Tulas", "Bolsas"];

const DETAILS = [
  { icon: "stars", title: "Mugs & Pads", subtitle: "Oficina con estilo" },
  { icon: "edit_square", title: "Esferos & Cajas", subtitle: "Regalos premium" },
  { icon: "military_tech", title: "Medallas & Sellos", subtitle: "Reconocimientos" },
  { icon: "badge", title: "Carnets & Empaques", subtitle: "Seguridad y marca" },
];

export default function Merchandising() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="space-y-12 transition-all duration-700 opacity-0 translate-y-8">
      <Link
        to="/merchandising"
        className="inline-block group"
        aria-label="Ir a Merchandising & Regalos"
      >
        <h2 className="font-headline-lg text-headline-lg text-on-surface transition-colors group-hover:text-primary">
          Merchandising & Regalos
          <span className="material-symbols-outlined align-middle ml-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            chevron_right
          </span>
        </h2>
      </Link>

      <div className="bento-grid ">
        {/* Textiles */}
        <Link
          to="/merchandising"
          className="col-span-12 md:col-span-4 bg-white border border-outline-variant p-6 rounded-xl flex flex-col justify-between hover:border-primary/100"
        >
          <div>
            <h4 className="font-headline-md text-headline-md mb-2">Textiles</h4>
            <p className="text-secondary text-sm mb-4">
              Prendas personalizadas de alta duración.
            </p>
            <div className="flex flex-wrap gap-2">
              {TEXTILE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-container text-on-surface rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 h-48 relative rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Close-up of a high-quality embroidered logo on a black textile surface, featuring vibrant green thread. The lighting is soft and artistic, showing the texture of the fabric and the precision of the stitching. Minimalist, premium fashion brand photography style."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAQc7bx6cQvPqY4q1A78zPZ7PM4FUU6-_wRBceAih8-M4U6CbYo-kfCgD7D5LEkEULvWTrf42DyuH14Cx8484phWPnizl3H4igRQDh5lCrZIH0GBeuo3NiSm6FuUFI7g7150eNtbpLENPHR4l7PR1btQC1EES3odWA0oVasll5P3vi2IdHQ9XRA3_0d1UbB89y6hrBBiE5Bq52PidbFOeBOGwtTEh9xHKLvimXIGPcm8dl2aw01l5V"
            />
          </div>
        </Link>

        {/* Detalles que Marcan */}
        <Link
          to="/merchandising"
          className="col-span-12 md:col-span-8 bg-on-surface text-white p-8 rounded-xl relative overflow-hidden flex flex-col justify-center"
        >
          <div className="relative z-10 max-w-md">
            <h4 className="font-headline-lg text-headline-lg mb-4">Detalles que Marcan</h4>
            <div className="grid grid-cols-2 gap-4">
              {DETAILS.map((detail) => (
                <div key={detail.title} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary-container">
                    {detail.icon}
                  </span>
                  <div>
                    <p className="font-bold">{detail.title}</p>
                    <p className="text-xs text-secondary-fixed-dim">{detail.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
            <img
              className="w-full h-full object-cover"
              alt="A curated collection of branded corporate gifts including a matte black water bottle, a high-end metal pen, and a premium textured notebook. The items are arranged in a modern, symmetrical flat-lay composition on a neutral gray background, lit with soft directional light to create elegant shadows."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvoOuVCeTQi7zu4ArE35daNNQCOuqbDJr5cuqKjXrgOyx5v7KQTEj9AoXbOEhBBt2IiTsZtoEiSTHfo5Daq6OPK91r1EDkS4vtqpqV1yvJNeuZC0PiyjbkdNbXUHk1wX0paPypITXYKbUY0ErGOAFCn6ijDO87siPAm5k9uKU1K44ZweET2w3vfZEMBzvQfIANlHuQ2YRlTN3bYfp4BEmDZWBVkL5wU4D5opEM0LHZvKzsAUtuJJXq"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}