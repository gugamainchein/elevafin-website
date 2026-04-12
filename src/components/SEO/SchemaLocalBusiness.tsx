/**
 * Schema.org - LocalBusiness
 * Schema complementar para negócio local
 */

export default function SchemaLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://elevafin.com.br/#localbusiness",
    name: "ElevaFin",
    image: "https://elevafin.com.br/favicon.svg",
    priceRange: "$$-$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Manoel de Carvalho",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "02912-020",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-23.5505",
      longitude: "-46.6333",
    },
    url: "https://elevafin.com.br",
    telephone: "+55-11-99814-4441",
    email: "contato@elevafin.com.br",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "São Paulo",
      },
      {
        "@type": "State",
        name: "São Paulo",
      },
      {
        "@type": "Country",
        name: "Brasil",
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
