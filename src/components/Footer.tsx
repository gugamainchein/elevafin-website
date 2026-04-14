export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-end">
            <img src="/logo.png" alt="ElevaFin" className="h-8 w-auto" />
            <img src="/logo_second_part.png" alt="" className="h-3 w-auto" />
          </div>

          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a
              href="#home"
              className="hover:text-brand-accent transition-colors"
            >
              Início
            </a>
            <a
              href="#services"
              className="hover:text-brand-accent transition-colors"
            >
              Serviços
            </a>
            <a
              href="#about"
              className="hover:text-brand-accent transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="hover:text-brand-accent transition-colors"
            >
              Contato
            </a>
          </div>

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} ElevaFin Consultoria. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
