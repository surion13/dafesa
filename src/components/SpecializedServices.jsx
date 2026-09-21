import { Link } from "react-router-dom";

export default function SpecializedServices() {
  return (
    <section className="bg-surface-container-low p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <Link
          to="/serviciosespecializados"
          className="inline-block group"
          aria-label="Ir a Servicios Especializados"
        >
          <h2 className="font-headline-lg text-headline-lg transition-colors group-hover:text-primary">
            Servicios Especializados
            <span className="material-symbols-outlined align-middle ml-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              chevron_right
            </span>
          </h2>
        </Link>
        <div className="grid grid-cols-1 gap-6">
          <Link to="/serviciosespecializados" className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary/100">
            <span className="material-symbols-outlined text-primary text-3xl">book</span>
            <div>
              <p className="font-bold">Agendas & Porta Agendas</p>
              <p className="text-sm text-secondary">Diseños exclusivos y acabados premium.</p>
            </div>
          </Link>
          <Link to="/serviciosespecializados" className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary/100">
            <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
            <div>
              <p className="font-bold">Diplomas, Menciones & Porta Diplomas</p>
              <p className="text-sm text-secondary">Documentos oficiales de alta distinción.</p>
            </div>
          </Link>
          <Link to="/serviciosespecializados" className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary/100">
            <span className="material-symbols-outlined text-primary text-3xl">mail</span>
            <div>
              <p className="font-bold">Invitaciones & Placas Conmemorativas</p>
              <p className="text-sm text-secondary">Momentos que merecen perdurar.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px]">
        <img 
          className="w-full h-full object-cover" 
          alt="Elegant close-up of a series of corporate awards and gold-stamped diplomas" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRqEzqpmavdiqbqjuuzGg1TR6GtUnIQiEcuX7dOClXN0zRoJnaOevdGH8hdPvuq8r9Y74ItHW64WyWjUHVFeZwwtQHigWU1V6iCI0exyk3N5Mf9WPSLiFrn-7joe7zOCxOtZYROy40WIQQ31cuSpFw28gL17J_-MXBQUEednnZr5L-MIVmV6kGBaDI9ceFr6OsV8HJPJ6Ie2KN6Vhj5JrRUogmAMY3iMHCj5uCrr3-kkzPFmP6L4A" 
        />
      </div>
    </section>
  );
}