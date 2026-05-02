/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PainPoints from "./components/PainPoints";
import SEO from "./components/SEO";
import Services from "./components/Services";
import TargetAudience from "./components/TargetAudience";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <PainPoints />
          <Services />
          <TargetAudience />
          <About />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}
