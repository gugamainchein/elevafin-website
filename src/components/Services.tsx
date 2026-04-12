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
    title: "Captação de Recursos",
    description:
      "Acesso às melhores linhas de crédito bancário e fomento, com taxas competitivas e prazos adequados ao seu fluxo de caixa.",
    icon: Banknote,
    color: "bg-blue-500",
  },
  {
    title: "Crédito Estruturado",
    description:
      "Modelagem financeira avançada para operações complexas, garantindo a melhor estrutura de capital para sua empresa.",
    icon: LineChart,
    color: "bg-indigo-500",
  },
  {
    title: "IA para Análise de Risco",
    description:
      "Utilizamos algoritmos de IA para prever cenários e otimizar o rating da sua empresa perante as instituições financeiras.",
    icon: BrainCircuit,
    color: "bg-purple-500",
  },
  {
    title: "Automação Financeira",
    description:
      "Implementação de ferramentas inteligentes para automação de processos financeiros e redução de custos operacionais.",
    icon: Zap,
    color: "bg-amber-500",
  },
  {
    title: "Consultoria Estratégica",
    description:
      "Acompanhamento contínuo para gestão de passivos e planejamento de expansão com foco em sustentabilidade financeira.",
    icon: ShieldCheck,
    color: "bg-emerald-500",
  },
  {
    title: "Networking Bancário",
    description:
      "Relacionamento direto com os principais players do mercado, facilitando a aprovação e liberação de recursos.",
    icon: Network,
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
            <h2 className="text-3xl md:text-4xl mb-4 text-brand-primary">
              Soluções <span className="text-brand-accent">Inteligentes</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Combinamos expertise bancária tradicional com as mais avançadas
              tecnologias de Inteligência Artificial para maximizar seus
              resultados.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-accent/30 hover:shadow-xl transition-all group"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                  service.color,
                  "bg-opacity-10",
                )}
              >
                <service.icon
                  className={cn(
                    "w-7 h-7",
                    service.color.replace("bg-", "text-"),
                  )}
                />
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
