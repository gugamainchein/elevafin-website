import { Award, Briefcase, CheckCircle2, Target } from "lucide-react";
import { motion } from "motion/react";
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
                alt="Wanessa Mainchein - Especialista em Consultoria Financeira e Captação de Recursos"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
                loading="lazy"
                width="600"
                height="800"
                referrerPolicy="no-referrer"
              />

              {/* Name Badge */}
              <div className="absolute bottom-12 sm:bottom-8 left-0 right-0 mx-4 sm:mx-6 bg-gradient-to-r from-brand-primary/95 to-brand-secondary/95 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-brand-accent/20 z-20">
                <p className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                  Wanessa Mainchein
                </p>
                <p className="text-brand-accent text-xs sm:text-sm font-medium uppercase tracking-wider mt-1">
                  CEO & Fundadora
                </p>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 bg-brand-primary text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white z-30">
                <p className="text-3xl sm:text-5xl font-display font-bold mb-1">
                  15+
                </p>
                <p className="text-[10px] sm:text-sm font-medium uppercase tracking-widest opacity-80">
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
            <h2 className="text-3xl md:text-4xl mb-8 text-brand-primary">
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
                    <h3 className="font-bold text-brand-primary mb-1 text-base">
                      Case de Sucesso
                    </h3>
                    <p className="text-sm text-slate-600">
                      +R$ 80MM em crédito estruturado.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-primary mb-1 text-base">
                      Resultado Garantido
                    </h3>
                    <p className="text-sm text-slate-600">
                      Crédito aprovado em até 30 dias.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 px-4 py-6 sm:p-8 rounded-3xl border border-slate-100">
                <h3 className="font-bold text-brand-primary mb-4 flex items-center gap-2 text-lg">
                  <Briefcase
                    className="w-5 h-5 text-brand-accent"
                    aria-hidden="true"
                  />
                  Diferenciais Competitivos
                </h3>
                <ul className="space-y-3">
                  {[
                    "Conhecimento profundo dos critérios de aprovação bancária",
                    "Narrativas estratégicas que tornam sua empresa mais atrativa",
                    "Organização financeira que reduz riscos e melhora taxas",
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
