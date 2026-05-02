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
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center">
              <Building2 className="w-7 h-7 text-brand-accent" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                Perfil Ideal
              </p>
              <p className="text-lg font-bold text-brand-primary">
                Empresas de todos os portes
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-slate-200" />

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-brand-accent" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                Setores
              </p>
              <p className="text-lg font-bold text-brand-primary">
                Comércio, Indústria e Serviços
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-slate-200" />

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-brand-accent" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                Atuação
              </p>
              <p className="text-lg font-bold text-brand-primary">
                Todo o Brasil
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
