/**
 * SEO Component Bundle
 * Agrupa todos os schemas estruturados do site
 */

import SchemaOrganization from "./SchemaOrganization";
import SchemaWebsite from "./SchemaWebsite";
import SchemaBreadcrumb from "./SchemaBreadcrumb";
import SchemaFAQ from "./SchemaFAQ";
import SchemaLocalBusiness from "./SchemaLocalBusiness";
import PerformanceOptimizer from "./PerformanceOptimizer";
import MetaTags from "./MetaTags";

export default function SEO() {
  // Breadcrumb para página inicial
  const breadcrumbItems = [{ name: "Home", url: "https://elevafin.com.br" }];

  return (
    <>
      <PerformanceOptimizer />
      <SchemaOrganization />
      <SchemaWebsite />
      <SchemaBreadcrumb items={breadcrumbItems} />
      <SchemaFAQ />
      <SchemaLocalBusiness />
    </>
  );
}

export {
  SchemaOrganization,
  SchemaWebsite,
  SchemaBreadcrumb,
  SchemaFAQ,
  SchemaLocalBusiness,
  PerformanceOptimizer,
  MetaTags,
};
