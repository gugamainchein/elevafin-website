# ElevaFin - Financial Consulting & AI

> Modern corporate website for financial consulting specialized in fundraising and intelligent analysis powered by AI.

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [TypeScript Configuration](#typescript-configuration)
- [SEO & Performance](#seo--performance)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

ElevaFin is a modern, SEO-optimized corporate website built for a financial consulting firm specializing in:

- Fundraising strategies
- Financial analysis with AI integration
- Business consulting services

The website features a clean, responsive design with advanced SEO capabilities, AI-powered interactions, and optimal performance scores.

---

## ✨ Features

- 🎨 **Modern UI/UX** - Smooth animations with Framer Motion
- 🤖 **AI Integration** - Google Gemini AI for intelligent interactions
- 🔍 **Advanced SEO** - Complete Schema.org implementation with 5+ structured data types
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Lightning Fast** - Optimized for Core Web Vitals
- 🎭 **Rich Snippets** - FAQ, Organization, LocalBusiness schemas
- 🌐 **Multilingual Ready** - i18n structure in place
- ♿ **Accessible** - WCAG compliant components
- 🔒 **CAPTCHA Protection** - Form spam prevention
- 📊 **Analytics Ready** - Google Analytics/Tag Manager integrated

---

## 🛠️ Tech Stack

### Core

- **React** `19.0.0` - UI library
- **TypeScript** `5.8.2` - Type-safe JavaScript
- **Vite** `6.2.0` - Build tool and dev server

### Styling & UI

- **Tailwind CSS** `4.1.14` - Utility-first CSS framework
- **Motion** `12.23.24` - Animation library (Framer Motion)
- **Lucide React** `0.546.0` - Icon library
- **clsx** + **tailwind-merge** - Conditional class utilities

### AI & Backend

- **Google Gemini AI** `1.29.0` - AI integration
- **Express** `4.21.2` - API server (optional)

### SEO & Performance

- Complete Schema.org implementation
- Dynamic meta tags (Open Graph, Twitter Cards)
- Sitemap & robots.txt
- Performance optimization components

### Development Tools

- **tsx** - TypeScript execution
- **@types/node** - Node.js type definitions
- **autoprefixer** - CSS vendor prefixing

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** >= 18.0.0 (recommended: 20.x LTS)
- **npm** >= 9.0.0 or **yarn** >= 1.22.0

Check your versions:

```bash
node --version
npm --version
```

### Installation

1. **Clone the repository:**

```bash
git clone git@github.com:gugamainchein/elevafin-website.git
cd elevafin-website
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

---

## 📜 Available Scripts

| Script      | Command           | Description                               |
| ----------- | ----------------- | ----------------------------------------- |
| **dev**     | `npm run dev`     | Starts development server on port 3000    |
| **build**   | `npm run build`   | Builds production-ready bundle to `dist/` |
| **preview** | `npm run preview` | Preview production build locally          |
| **clean**   | `npm run clean`   | Removes `dist/` directory                 |
| **lint**    | `npm run lint`    | Type-check with TypeScript (no emit)      |

### Usage Examples

```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking only
npm run lint

# Clean build artifacts
npm run clean
```

---

## 📁 Project Structure

```
elevafin-website/
├── public/
│   ├── favicon.svg           # SVG favicon
│   ├── robots.txt            # SEO: Search engine directives
│   └── sitemap.xml           # SEO: URL structure map
├── src/
│   ├── assets/               # Static assets (images, etc.)
│   ├── components/           # React components
│   │   ├── SEO/              # SEO-specific components
│   │   │   ├── index.tsx     # Main SEO wrapper
│   │   │   ├── MetaTags.tsx  # Dynamic meta tags
│   │   │   ├── SchemaOrganization.tsx
│   │   │   ├── SchemaWebsite.tsx
│   │   │   ├── SchemaBreadcrumb.tsx
│   │   │   ├── SchemaFAQ.tsx
│   │   │   ├── SchemaLocalBusiness.tsx
│   │   │   └── PerformanceOptimizer.tsx
│   │   ├── About.tsx         # About section
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Navbar.tsx        # Navigation bar
│   │   └── Services.tsx      # Services section
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── types/
│   │   └── assets.d.ts       # Asset type declarations
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── .gitignore                # Git ignore rules
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

### Key Directories

- **`src/components/`** - All React components, organized by feature
- **`src/components/SEO/`** - Complete SEO implementation with Schema.org
- **`src/lib/`** - Shared utilities and helper functions
- **`src/types/`** - TypeScript type definitions and interfaces
- **`public/`** - Static files served as-is (no processing)

---

## 🔷 TypeScript Configuration

### Key Settings

The project uses **TypeScript 5.8.2** with the following configuration:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": false,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "noEmit": true
  }
}
```

### Path Aliases

The project uses the `@/*` path alias for cleaner imports:

```typescript
// Instead of
import { utils } from "../../../lib/utils";

// Use
import { utils } from "@/lib/utils";
```

**Configuration:** See `tsconfig.json` and `vite.config.ts` for alias setup.

### Type Definitions

- **Asset Types:** `src/types/assets.d.ts` - Declarations for image imports
- **Dev Dependencies:** `@types/node`, `@types/express` - Node.js and Express types

### TypeScript Conventions

- Use `.tsx` extension for files containing JSX
- Use `.ts` extension for utility files and configurations
- Components export as default: `export default function ComponentName()`
- Props interfaces named with `Props` suffix (when needed)
- Enable `experimentalDecorators` for future features

---

## 🔍 SEO & Performance

### SEO Implementation

This project includes a **comprehensive SEO system** inspired by CNN Brasil's best practices:

#### Schema.org Structured Data

- ✅ **Organization/FinancialService** - Company information
- ✅ **WebSite** - Website metadata
- ✅ **BreadcrumbList** - Navigation hierarchy
- ✅ **FAQPage** - 8 structured FAQs
- ✅ **LocalBusiness** - Local SEO with geo-location

#### Meta Tags

- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Canonical URLs
- Dynamic title/description per page

#### Files

- **`public/robots.txt`** - Search engine directives
- **`public/sitemap.xml`** - Complete URL map with priorities

### Performance Optimization

- **Core Web Vitals Ready**
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- Lazy-loaded images
- Optimized bundle size
- Tree-shaking enabled

### Testing SEO

Use these tools to validate:

```bash
# Google Rich Results Test
https://search.google.com/test/rich-results

# Schema.org Validator
https://validator.schema.org/

# PageSpeed Insights
https://pagespeed.web.dev/
```

---

## 🧪 Testing

### Type Checking

```bash
npm run lint
```

This runs TypeScript compiler in check mode without emitting files.

### Future Testing Setup

The project is ready for:

- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **Cypress** - E2E testing
- **Playwright** - Browser automation

To add testing:

```bash
# Vitest + React Testing Library
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Add to package.json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Output directory: `dist/`

### Deployment Platforms

The project is optimized for:

#### **Vercel** (Recommended)

```bash
npm install -g vercel
vercel
```

#### **Netlify**

```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

#### **GitHub Pages**

```bash
# Add to vite.config.ts
export default defineConfig({
  base: '/elevafin-website/',
  // ... other config
})
```

#### **Docker**

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "run", "preview"]
```

### Post-Deployment Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Verify structured data in Rich Results Test
- [ ] Test all pages for mobile responsiveness
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure analytics tracking

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Branching Strategy

```bash
main            # Production-ready code
├── develop     # Development branch
├── feature/*   # New features
├── bugfix/*    # Bug fixes
└── hotfix/*    # Urgent production fixes
```

### Workflow

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** and commit:
   ```bash
   git commit -m "feat: add amazing feature"
   ```
4. **Push to your fork:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: resolve bug in component
docs: update README
style: format code
refactor: restructure component
test: add unit tests
chore: update dependencies
```

### Code Style

- Use **Prettier** for formatting (if configured)
- Follow **React best practices**
- Write **TypeScript** with proper types
- Add **comments** for complex logic
- Keep components **small and focused**

### Before Submitting PR

- [ ] Run `npm run lint` (no TypeScript errors)
- [ ] Test locally with `npm run build`
- [ ] Update documentation if needed
- [ ] Add meaningful commit messages

---

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

```
Copyright 2026 ElevaFin

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
```

---

## 📞 Support

For questions or issues:

- 📧 Email: contato@elevafin.com.br
- 🌐 Website: [elevafin.com.br](https://elevafin.com.br)

---

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

---

<div align="center">

**Developed with ❤️ by Gustavo Mainchein**

⭐ Star this repository if you found it helpful!

</div>
