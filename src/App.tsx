/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import Services from "./components/Services";
import { useCountryGuard } from "./hooks/useCountryGuard";

export default function App() {
  const allowed = useCountryGuard();

  // Show loading state while checking location
  if (allowed === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-xl text-gray-700">Verificando localização...</p>
        </div>
      </div>
    );
  }

  // Show access denied message if not from Brazil
  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100">
        <div className="max-w-md text-center p-8 bg-white rounded-lg shadow-xl">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Acesso Restrito
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            Este site está disponível apenas para acessos do Brasil.
          </p>
          <p className="text-sm text-gray-500">
            Access restricted to Brazil only.
          </p>
        </div>
      </div>
    );
  }

  // Render full app if from Brazil
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
