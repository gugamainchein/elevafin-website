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
      "Consultoria financeira especializada em captação de recursos e crédito estruturado com inteligência artificial. Mais de 15 anos de experiência no mercado financeiro.",
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
      name: "Wanessa Miranda",
      jobTitle: "CEO & Founder",
      description:
        "Especialista em captação de recursos com mais de 15 anos de experiência no mercado financeiro",
    },
    foundingDate: "2010",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    slogan: "Captação de Recursos com Inteligência Estratégica",
    knowsAbout: [
      "Captação de Recursos",
      "Crédito Estruturado",
      "Consultoria Financeira",
      "Inteligência Artificial Financeira",
      "Análise de Risco",
      "Automação Financeira",
      "Gestão de Passivos",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Financeiros",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Captação de Recursos",
            description:
              "Acesso às melhores linhas de crédito bancário e fomento com análise estratégica de mercado",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Crédito Estruturado",
            description:
              "Modelagem financeira avançada para operações complexas de crédito",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IA para Análise de Risco",
            description:
              "Algoritmos de inteligência artificial para prever cenários e otimizar rating de crédito",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automação Financeira",
            description:
              "Implementação de ferramentas inteligentes para automação de processos financeiros",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultoria Estratégica",
            description:
              "Acompanhamento contínuo para gestão de passivos e planejamento financeiro estratégico",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Networking Bancário",
            description:
              "Relacionamento direto com os principais players do mercado financeiro",
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
