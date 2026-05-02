import { AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const painPoints = [
  "Você já tentou captar crédito e foi reprovado sem entender o porquê?",
  "Seu financeiro está organizado no feeling, não em dados?",
  "Você sente que paga juros altos porque não sabe negociar com o banco?",
  "Tem plano de crescimento, mas não sabe como financiá-lo?",
  "Seu caixa está sempre apertado, mesmo com vendas crescendo?",
  "Você mistura o financeiro pessoal com o da empresa e não sabe onde está o lucro de verdade?",
];

export default function PainPoints() {
  return (
    <section
      id="pain-points"
      className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-bold uppercase tracking-wider mb-6 border border-red-500/20">
            <AlertCircle className="w-4 h-4" />
            Reconhece alguma dessas situações?
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">
            Se você disse <span className="text-brand-accent">"sim"</span> para
            qualquer uma dessas perguntas...
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Você não está sozinho. Milhares de empresários passam pelo mesmo, e
            a gente resolve isso todos os dias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-brand-accent/30 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/20 border-2 border-brand-accent/50 mt-1 group-hover:bg-brand-accent/30 transition-colors" />
                <p className="text-slate-300 leading-relaxed">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-accent/10 to-brand-success/10 p-8 md:p-12 rounded-3xl border border-brand-accent/20 text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <CheckCircle2 className="w-8 h-8 text-brand-success" />
            <h3 className="text-2xl md:text-3xl font-bold">
              A solução existe, e é mais simples do que você imagina
            </h3>
          </div>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Com mais de 15 anos de experiência em bancos, sabemos exatamente o
            que as instituições financeiras precisam ver para aprovar seu
            crédito. Organizamos seu financeiro, preparamos sua empresa e
            negociamos as melhores condições para você.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-brand-accent/20"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
