/**
 * Type declarations for asset imports
 */

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

/**
 * Vite environment variables types
 */
interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
  readonly VITE_GA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * Google Analytics gtag function types
 */
interface Window {
  dataLayer: unknown[];
  gtag: (
    command: "event" | "config" | "js" | "set",
    targetId: string | Date,
    config?: {
      event_category?: string;
      event_label?: string;
      value?: number;
      [key: string]: unknown;
    },
  ) => void;
}
