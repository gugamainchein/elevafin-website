/**
 * Schema.org - WebSite
 * Schema do site principal com busca interna
 */

export default function SchemaWebsite() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://elevafin.com.br/#website",
    name: "ElevaFin - Consultoria Financeira",
    alternateName: "ElevaFin",
    url: "https://elevafin.com.br",
    description:
      "Transformamos sua necessidade de crédito em soluções estruturadas. Mais de 15 anos de mercado financeiro unindo experiência bancária e tecnologia de IA.",
    publisher: {
      "@id": "https://elevafin.com.br/#organization",
    },
    inLanguage: "pt-BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
