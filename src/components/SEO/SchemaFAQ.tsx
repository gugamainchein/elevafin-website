/**
 * Schema.org - FAQPage
 * Perguntas frequentes estruturadas para rich snippets
 */

export default function SchemaFAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é a ElevaFin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A ElevaFin é uma consultoria financeira especializada em captação de recursos e crédito estruturado, combinando mais de 15 anos de experiência no mercado financeiro com tecnologia de inteligência artificial para oferecer soluções estratégicas personalizadas.",
        },
      },
      {
        "@type": "Question",
        name: "Quais serviços a ElevaFin oferece?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oferecemos captação de recursos, crédito estruturado, análise de risco com IA, automação financeira, consultoria estratégica e networking bancário. Nossa abordagem integra tecnologia e experiência para maximizar resultados.",
        },
      },
      {
        "@type": "Question",
        name: "Como a ElevaFin utiliza inteligência artificial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utilizamos algoritmos de IA para análise preditiva de cenários, otimização de rating de crédito, automação de processos financeiros e análise avançada de risco. Isso permite decisões mais rápidas e precisas na captação de recursos.",
        },
      },
      {
        "@type": "Question",
        name: "Qual o valor já estruturado pela ElevaFin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A ElevaFin já estruturou mais de R$ 80 milhões em crédito para empresas de diversos setores, utilizando nossa expertise e rede de relacionamento bancário.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o processo de captação de recursos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nosso processo inclui: 1) Análise diagnóstica da necessidade, 2) Modelagem financeira personalizada, 3) Acesso às melhores linhas de crédito, 4) Negociação com instituições financeiras, 5) Acompanhamento pós-contratação.",
        },
      },
      {
        "@type": "Question",
        name: "A ElevaFin atende que tipo de empresas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atendemos empresas de todos os portes que buscam soluções estruturadas de crédito, desde PMEs até grandes corporações, em diversos setores da economia brasileira.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a experiência da fundadora Wanessa Miranda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wanessa Miranda possui mais de 15 anos de experiência no mercado financeiro, com passagem por instituições bancárias de primeira linha e expertise em estruturação de operações de crédito complexas.",
        },
      },
      {
        "@type": "Question",
        name: "Como entrar em contato com a ElevaFin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Você pode entrar em contato através do formulário em nosso site, pelo e-mail contato@elevafin.com.br ou pelo telefone +55 11 99999-9999. Nossa equipe responde em até 24 horas.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
