import { motion } from "motion/react";
import { Award, Briefcase, Target, CheckCircle2 } from "lucide-react";
import Wanessa from "../assets/1774298601282.png";

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={Wanessa}
                alt="Wanessa Miranda"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
                referrerPolicy="no-referrer"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-10 -right-10 bg-brand-primary text-white p-8 rounded-3xl shadow-2xl border-4 border-white">
                <p className="text-5xl font-display font-bold mb-1">15+</p>
                <p className="text-sm font-medium uppercase tracking-widest opacity-80">
                  Anos de Mercado
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-brand-primary">
              Expertise que Gera{" "}
              <span className="text-brand-accent">Confiança</span>
            </h2>

            <div className="space-y-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                Com uma trajetória sólida de mais de 15 anos no coração do
                mercado financeiro, atuei em grandes instituições bancárias,
                desenvolvendo uma visão 360º sobre captação e estruturação de
                crédito.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary mb-1">
                      Case de Sucesso
                    </h4>
                    <p className="text-sm text-slate-600">
                      +R$ 80M em crédito estruturado.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary mb-1">
                      Foco em IA
                    </h4>
                    <p className="text-sm text-slate-600">
                      Automação e análise inteligente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-brand-primary mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-brand-accent" />
                  Diferenciais Competitivos
                </h4>
                <ul className="space-y-3">
                  {[
                    "Acesso direto a tomadores de decisão em bancos",
                    "Modelagem financeira personalizada para cada setor",
                    "Uso de IA para otimização de garantias e taxas",
                    "Transparência total em todas as etapas do processo",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
