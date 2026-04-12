/**
 * Performance Optimizer
 * Otimizações adicionais de performance para SEO
 */

import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preconnect para recursos externos críticos
    const preconnectDomains = [
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
    ];

    preconnectDomains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = domain;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });

    // DNS Prefetch para recursos secundários
    const dnsPrefetchDomains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
    ];

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = domain;
      document.head.appendChild(link);
    });

    // Adiciona atributo de linguagem se não existir
    if (!document.documentElement.getAttribute("lang")) {
      document.documentElement.setAttribute("lang", "pt-BR");
    }

    // Verifica e adiciona meta theme-color se não existir
    if (!document.querySelector('meta[name="theme-color"]')) {
      const metaTheme = document.createElement("meta");
      metaTheme.name = "theme-color";
      metaTheme.content = "#1a1a1a"; // Cor do tema (ajustar conforme design)
      document.head.appendChild(metaTheme);
    }

    // Cleanup ao desmontar
    return () => {
      // Remover links adicionados se necessário
    };
  }, []);

  return null;
}
