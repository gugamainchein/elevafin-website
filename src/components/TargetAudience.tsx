import { Building2, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export default function TargetAudience() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:flex md:flex-row items-center justify-center gap-6 md:gap-12"
        >
          <div className="flex items-center gap-4 w-full md:w-auto px-4 md:px-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 md:w-7 md:h-7 text-brand-accent" />
            </div>
            <div>
              <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wider">
                Perfil Ideal
              </p>
              <p className="text-base md:text-lg font-bold text-brand-primary whitespace-nowrap">
                Empresas de todos os portes
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-slate-200" />
          <div className="md:hidden w-full h-px bg-slate-100 mx-4" />

          <div className="flex items-center gap-4 w-full md:w-auto px-4 md:px-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-brand-accent" />
            </div>
            <div>
              <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wider">
                Setores
              </p>
              <p className="text-base md:text-lg font-bold text-brand-primary whitespace-nowrap">
                Comércio, Indústria e Serviços
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-slate-200" />
          <div className="md:hidden w-full h-px bg-slate-100 mx-4" />

          <div className="flex items-center gap-4 w-full md:w-auto px-4 md:px-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-brand-accent" />
            </div>
            <div>
              <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wider">
                Atuação
              </p>
              <p className="text-base md:text-lg font-bold text-brand-primary whitespace-nowrap">
                Todo o Brasil
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
