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
        name: "Por que meu crédito foi negado pelo banco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Os principais motivos incluem: financeiro desorganizado, falta de documentação adequada, histórico de crédito ruim, garantias insuficientes ou forma inadequada de apresentar os números para o banco. Com +15 anos dentro de bancos, sabemos exatamente o que precisa ser ajustado.",
        },
      },
      {
        "@type": "Question",
        name: "Como a ElevaFin consegue aprovar crédito que foi negado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Organizamos seu financeiro com dados reais, preparamos a documentação correta e apresentamos seus números de forma que o banco te enxergue como baixo risco. Temos relacionamento direto com tomadores de decisão em bancos, o que facilita a aprovação.",
        },
      },
      {
        "@type": "Question",
        name: "Por que pago juros tão altos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Juros altos geralmente significam que o banco te vê como alto risco. Melhoramos seu rating de crédito através de organização financeira, garantias adequadas e negociação direta com os bancos, resultando em taxas até 40% menores.",
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
        name: "Como funciona o processo da ElevaFin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Em 6 etapas: 1) Diagnóstico completo da sua situação, 2) Organização do financeiro, 3) Preparação para o banco, 4) Captação do crédito, 5) Acompanhamento contínuo, 6) Ferramentas que mantêm seu financeiro sempre pronto para novas rodadas de crédito. Cada etapa é transparente e você participa de todas as decisões.",
        },
      },
      {
        "@type": "Question",
        name: "Para qual porte de empresa a ElevaFin atende?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atendemos empresas de todos os portes nos setores de comércio, indústria e serviços, em todo o Brasil. De pequenas empresas com caixa apertado a médias empresas buscando expansão.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a experiência da fundadora Wanessa Mainchein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wanessa Mainchein possui mais de 15 anos de experiência no mercado financeiro, com passagem por instituições bancárias de primeira linha e expertise em estruturação de operações de crédito complexas.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona a primeira conversa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre em contato pelo WhatsApp +55 11 99814-4441 ou formulário do site. Fazemos uma conversa inicial sem compromisso para entender sua situação e explicar como podemos ajudar. Resposta em até 2 horas úteis.",
        },
      },
      {
        "@type": "Question",
        name: "Meu financeiro pessoal está misturado com o da empresa, vocês resolvem isso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Essa é uma situação muito comum em PMEs e um dos principais motivos de crédito negado. Organizamos a separação entre financeiro pessoal e empresarial, estabelecemos controles adequados e mostramos o lucro real da sua empresa para os bancos.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto custa a consultoria da ElevaFin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre em contato para discutir seu caso específico e entender a melhor forma de trabalharmos juntos. Cada situação é única e personalizamos nossa abordagem para cada empresa.",
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
