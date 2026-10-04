import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const contactChannels = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@elevafin.com.br",
    href: "mailto:contato@elevafin.com.br",
  },
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "+55 (11) 99814-4441",
    href: "https://wa.me/5511998144441?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20os%20seus%20servi%C3%A7os%20de%20consultoria%20para%20minha%20empresa.",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, SP - Brasil",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-brand-primary text-white overflow-hidden relative"
    >
      {/* Background patterns */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-brand-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-success/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-5xl mb-6 max-w-3xl mx-auto leading-tight">
            Pronto para transformar o{" "}
            <span className="text-brand-accent">financeiro</span> da sua
            empresa?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Converse com a gente sem compromisso. Vamos entender sua situação e
            mostrar como podemos ajudar, de forma clara e direta.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-14 relative rounded-3xl p-px bg-gradient-to-br from-brand-accent/60 via-white/10 to-transparent"
        >
          <div className="rounded-3xl bg-brand-secondary/80 backdrop-blur-sm px-6 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <p className="text-brand-accent font-bold mb-3 text-sm uppercase tracking-wider">
                Atendimento Rápido
              </p>
              <p className="text-2xl md:text-3xl font-display font-bold mb-3">
                Fale direto com um especialista
              </p>
              <p className="inline-flex items-center gap-2 text-slate-400 text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <Clock className="w-4 h-4" aria-hidden="true" />
                Resposta em até 2 horas úteis
              </p>
            </div>

            <a
              href="https://wa.me/5511998144441?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20empresa%20com%20cr%C3%A9dito."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:-translate-y-0.5 transition-all shadow-lg shadow-green-500/25"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Conversa sem compromisso
            </a>
          </div>
        </motion.div>

        <div className="mt-6 grid lg:grid-cols-3 gap-4 lg:gap-6">
          {contactChannels.map(({ icon: Icon, label, value, href }, index) => {
            const content = (
              <>
                <div className="w-14 h-14 mb-5 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/30 transition-colors">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">
                  {label}
                </p>
                <p className="text-base lg:text-lg font-medium break-words group-hover:text-brand-accent transition-colors">
                  {value}
                </p>
                {href && (
                  <ArrowUpRight
                    className="absolute top-6 right-6 w-5 h-5 text-slate-500 group-hover:text-brand-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    aria-hidden="true"
                  />
                )}
              </>
            );

            const cardClassName =
              "group relative flex flex-col items-center lg:items-start text-center lg:text-left h-full p-6 rounded-2xl bg-white/5 border border-white/10 transition-all";

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {href ? (
                  <a
                    href={href}
                    {...(href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={`${cardClassName} hover:bg-white/[0.07] hover:border-brand-accent/30 hover:-translate-y-1`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={cardClassName}>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-slate-500 text-sm mt-12">
          Conversa sem compromisso. Só seguimos se fizer sentido para você.
        </p>
      </div>
    </section>
  );
}
