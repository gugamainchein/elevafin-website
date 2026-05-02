/**
 * Meta Tags Dinâmicas
 * Componente para gerenciar meta tags adicionais via React
 */

import { useEffect } from "react";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export default function MetaTags({
  title = "ElevaFin - Crédito Negado? Caixa Apertado? Financeiro Desorganizado? A gente resolve",
  description = "Caixa apertado, crédito negado ou financeiro desorganizado? Com +15 anos dentro de bancos, organizamos, estruturamos e captamos o recurso que sua empresa precisa para crescer. Aprovação em até 30 dias, juros reduzidos. +R$ 80MM estruturados.",
  keywords = "crédito negado, caixa apertado, juros altos, financeiro desorganizado, aprovação de crédito, crédito empresarial, consultoria financeira empresarial, como conseguir crédito, crédito para PME, organização financeira, capital de giro, crédito estruturado, redução de juros, negociação bancária, financeiro pessoal e empresarial misturado",
  ogImage = "https://elevafin.com.br/favicon.svg",
  canonical = "https://elevafin.com.br",
}: MetaTagsProps) {
  useEffect(() => {
    // Atualiza o título da página
    document.title = title;

    // Atualiza meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Atualiza meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Atualiza OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute("content", ogImage);
    }

    // Atualiza canonical
    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute("href", canonical);
    }
  }, [title, description, keywords, ogImage, canonical]);

  return null; // Este componente não renderiza nada visualmente
}
