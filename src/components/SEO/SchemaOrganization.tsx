/**
 * Schema.org - Organization
 * Informações estruturadas sobre a empresa ElevaFin
 */

export default function SchemaOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://elevafin.com.br/#organization",
    name: "ElevaFin",
    alternateName: "ElevaFin Consultoria Financeira",
    description:
      "Resolvemos problemas de crédito negado, caixa apertado, juros altos e financeiro desorganizado para empresários. Com +15 anos dentro de bancos, organizamos, estruturamos e captamos o recurso que sua empresa precisa para crescer.",
    url: "https://elevafin.com.br",
    logo: {
      "@type": "ImageObject",
      url: "https://elevafin.com.br/favicon.svg",
      width: "512",
      height: "512",
    },
    image: {
      "@type": "ImageObject",
      url: "https://elevafin.com.br/favicon.svg",
      width: "1200",
      height: "630",
    },
    telephone: "+55-11-99999-9999",
    email: "contato@elevafin.com.br",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      streetAddress: "São Paulo",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-23.5505",
      longitude: "-46.6333",
    },
    founder: {
      "@type": "Person",
      name: "Wanessa Mainchein",
      jobTitle: "CEO & Founder",
      description:
        "Especialista em captação de recursos com mais de 15 anos de experiência no mercado financeiro",
    },
    foundingDate: "2010",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    slogan:
      "Caixa apertado, crédito negado ou financeiro desorganizado? A gente organiza, estrutura e capta o recurso que sua empresa precisa para crescer.",
    knowsAbout: [
      "Crédito Negado",
      "Aprovação de Crédito Empresarial",
      "Redução de Juros",
      "Organização Financeira",
      "Capital de Giro",
      "Crédito para PME",
      "Negociação Bancária",
      "Consultoria Financeira para Pequenas Empresas",
      "Financeiro Desorganizado",
      "Separação de Financeiro Pessoal e Empresarial",
      "Caixa Apertado",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Financeiros",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diagnóstico Financeiro Completo",
            description:
              "Analisamos sua situação, identificamos gargalos e entendemos por que seu crédito foi negado",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Organização Financeira Empresarial",
            description:
              "Organizamos seu financeiro com dados reais e preparamos a documentação que o banco precisa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Preparação para Aprovação Bancária",
            description:
              "Analisamos seus números para o banco te ver como baixo risco, resultando em taxas menores",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Captação de Crédito Empresarial",
            description:
              "Negociamos diretamente com bancos as melhores condições de crédito para sua empresa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Acompanhamento Financeiro Contínuo",
            description:
              "Monitoramos seu financeiro e identificamos oportunidades de crédito com melhores taxas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ferramentas Inteligentes",
            description:
              "Implementamos ferramentas que te poupam tempo e mantêm seu financeiro sempre pronto para novas rodadas de crédito",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "50",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
