import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, BarChart3, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-brand-success/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
              <Cpu className="w-3 h-3" />
              Consultoria & Finanças
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-brand-primary">
              Captação de Recursos com <span className="text-brand-accent">Inteligência Estratégica</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Transformamos sua necessidade de crédito em soluções estruturadas. 
              Mais de 15 anos de mercado financeiro unindo experiência bancária e tecnologia de IA de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20 group"
              >
                Solicitar Consultoria
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 bg-white text-brand-primary border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Nossos Serviços
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-success" />
                <span className="text-sm font-medium">Crédito Estruturado</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-brand-success" />
                <span className="text-sm font-medium">Análise Preditiva</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Financial Analysis Dashboard"
                className="rounded-2xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-success/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-brand-success" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Crédito Captado</p>
                    <p className="text-2xl font-display font-bold text-brand-primary">+R$ 80 Milhões</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-success/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
