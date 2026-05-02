import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    captcha: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [validationErrors, setValidationErrors] = useState<{
    email?: string;
    message?: string;
    captcha?: string;
  }>({});

  useEffect(() => {
    loadCaptchaEnginge(6, "#1e293b", "#60a5fa", "upper");
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear validation errors as user types
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    setValidationErrors({});

    // Validate email
    if (!validateEmail(formData.email)) {
      setValidationErrors((prev) => ({
        ...prev,
        email: "Por favor, insira um e-mail válido.",
      }));
      setIsSubmitting(false);
      return;
    }

    // Validate message length
    if (formData.message.trim().length < 10) {
      setValidationErrors((prev) => ({
        ...prev,
        message: "A mensagem deve ter no mínimo 10 caracteres.",
      }));
      setIsSubmitting(false);
      return;
    }

    // Validate captcha
    if (!validateCaptcha(formData.captcha, false)) {
      setValidationErrors((prev) => ({
        ...prev,
        captcha: "Captcha inválido. Por favor, tente novamente.",
      }));
      loadCaptchaEnginge(6, "#1e293b", "#60a5fa", "upper");
      setFormData((prev) => ({ ...prev, captcha: "" }));
      setIsSubmitting(false);
      return;
    }

    try {
      const apiEndpoint = import.meta.env.VITE_API_ENDPOINT!;
      const response = await fetch(`${apiEndpoint}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Enviar evento para Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "form_submit", {
            event_category: "engagement",
            event_label: "Formulário de Contato",
          });
        }

        setSubmitStatus({
          type: "success",
          message:
            "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          captcha: "",
        });
        loadCaptchaEnginge(6, "#1e293b", "#60a5fa", "upper");
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Erro ao enviar mensagem. Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-brand-primary text-white overflow-hidden relative"
    >
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-success/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Pronto para transformar o{" "}
              <span className="text-brand-accent">financeiro</span> da sua
              empresa?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Converse com a gente sem compromisso. Vamos entender sua situação
              e mostrar como podemos ajudar, de forma clara e direta.
            </p>

            <div className="mb-12 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-brand-accent font-bold mb-2 text-sm uppercase tracking-wider">
                Atendimento Rápido
              </p>
              <a
                href="https://wa.me/5511998144441?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20empresa%20com%20cr%C3%A9dito."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg"
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
              <p className="text-slate-400 text-sm mt-3">
                Resposta em até 2 horas úteis
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                    E-mail
                  </p>
                  <a
                    href="mailto:contato@elevafin.com.br"
                    className="text-xl font-medium hover:text-brand-accent transition-colors"
                  >
                    contato@elevafin.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                    Telefone / WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5511998144441?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20mais%20sobre%20os%20seus%20servi%C3%A7os%20de%20consultoria%20para%20minha%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium hover:text-brand-accent transition-colors"
                  >
                    +55 (11) 99814-4441
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                    Localização
                  </p>
                  <p className="text-xl font-medium">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all ${
                      validationErrors.email
                        ? "border-red-500"
                        : "border-slate-200"
                    }`}
                    placeholder="seu@email.com"
                  />
                  {validationErrors.email && (
                    <p className="text-red-600 text-sm mt-1">
                      {validationErrors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Mensagem (mínimo 10 caracteres)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={4}
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all resize-none ${
                    validationErrors.message
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                  placeholder="Como podemos ajudar seu negócio?"
                />
                {validationErrors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {validationErrors.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Verificação de Segurança
                </label>
                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 p-3 rounded-xl border border-slate-200">
                    <LoadCanvasTemplate reloadColor="#3b82f6" />
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all ${
                      validationErrors.captcha
                        ? "border-red-500"
                        : "border-slate-200"
                    }`}
                    placeholder="Digite o código acima"
                  />
                  {validationErrors.captcha && (
                    <p className="text-red-600 text-sm">
                      {validationErrors.captcha}
                    </p>
                  )}
                </div>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-accent text-white font-bold py-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={
                  isSubmitting ? "Enviando mensagem" : "Falar com especialista"
                }
              >
                {isSubmitting ? "Enviando..." : "Falar com especialista"}
                <Send className="w-5 h-5" aria-hidden="true" />
              </button>
              <p className="text-center text-slate-500 text-sm mt-4">
                Conversa sem compromisso. Só seguimos se fizer sentido para
                você.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
