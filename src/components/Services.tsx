import { cn } from "@/src/lib/utils";
import {
  Banknote,
  BrainCircuit,
  LineChart,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    step: "01",
    title: "Diagnóstico Financeiro Completo",
    description:
      "Analisamos sua situação atual, entendemos suas necessidades de caixa e identificamos os gargalos que impedem o acesso a crédito.",
    icon: LineChart,
    color: "bg-blue-500",
  },
  {
    step: "02",
    title: "Organização e Estruturação",
    description:
      "Colocamos seus números em ordem, organizamos o financeiro com dados reais e preparamos a documentação que o banco precisa ver.",
    icon: ShieldCheck,
    color: "bg-indigo-500",
  },
  {
    step: "03",
    title: "Preparação para o Banco",
    description:
      "Analisamos seus números de um jeito que faz o banco te enxergar como risco menor, o resultado são taxas mais baixas e aprovações que antes eram negadas.",
    icon: BrainCircuit,
    color: "bg-purple-500",
  },
  {
    step: "04",
    title: "Captação do Recurso",
    description:
      "Conhecemos os caminhos, enredos e narrativas que tornam sua empresa irresistível para os bancos. Apresentamos seu negócio da forma certa, no momento certo, para conseguir o crédito que você precisa.",
    icon: Banknote,
    color: "bg-emerald-500",
  },
  {
    step: "05",
    title: "Acompanhamento Contínuo",
    description:
      "Continuamos ao seu lado, monitorando seu financeiro e identificando novas oportunidades de crédito com melhores taxas.",
    icon: Network,
    color: "bg-amber-500",
  },
  {
    step: "06",
    title: "Ferramentas Inteligentes",
    description:
      "Implementamos ferramentas que te poupam tempo e mantêm seu financeiro sempre pronto para uma nova rodada de crédito.",
    icon: Zap,
    color: "bg-rose-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
              Um processo claro e seguro
            </div>
            <h2 className="text-3xl md:text-4xl mb-4 text-brand-primary">
              Como <span className="text-brand-accent">Transformamos</span> sua
              Situação Financeira
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Nosso método em 6 etapas transforma empresários que não conseguem
              crédito em clientes preferenciais dos bancos com taxas
              reduzidas.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Decorative connector line for large screens */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-accent/30 hover:shadow-xl transition-all group relative z-10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg text-white transition-transform group-hover:scale-110",
                    service.color,
                  )}
                >
                  {service.step}
                </div>
                <div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
                    service.color,
                    "bg-opacity-10",
                  )}
                >
                  <service.icon
                    className={cn(
                      "w-6 h-6",
                      service.color.replace("bg-", "text-"),
                    )}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-primary">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
