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
  title = "ElevaFin - Captação de Recursos com Inteligência Estratégica | Consultoria Financeira",
  description = "Transformamos sua necessidade de crédito em soluções estruturadas. Mais de 15 anos de mercado financeiro unindo experiência bancária e tecnologia de IA. +R$ 80MM em crédito estruturado.",
  keywords = "captação de recursos, crédito empresarial, consultoria financeira, inteligência artificial, IA financeira, crédito estruturado, análise de risco, automação financeira, consultoria bancária, linhas de crédito",
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
