import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Industries from "../sections/Industries";
import FeaturedWork from "../sections/FeaturedWork";
import ScrollingMarquee from "../components/ScrollingMarquee";
import Process from "../sections/Process";
import WhyChooseUs from "../sections/WhyChooseUs";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import { technologiesData } from "../data/portfolioData";

import useSEO from "../hooks/useSEO";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useSEO({
    title: "NEORIZ Solutions | Digital Products, Websites & Platforms",
    description: "NEORIZ Solutions builds premium custom web applications, digital platforms, and business systems focused on performance and seamless user experiences.",
    url: "https://neorizsolutions.com"
  });


  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <>

      {/* Premium custom cursor */}
      <CustomCursor />


      {/* Navigation */}
      <Navbar onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />

      {/* Main Content */}
      <main style={{ position: "relative" }}>
        
        {/* 02. Hero */}
        <Hero />
        
        {/* 03. Brand Introduction / What We Build (mapped to About.jsx) */}
        <About />
        
        {/* 04. Selected Work */}
        <FeaturedWork />
        
        {/* 05. Capabilities (mapped to Services.jsx) */}
        <Services />
        
        {/* 06. Industries */}
        <Industries />
        
        {/* 09. Technology Marquee Section */}
        <section className="marquee-section" style={{ background: "var(--nr-soft-white)", paddingBottom: "60px" }}>
          <ScrollingMarquee />
        </section>

        {/* 07. Process / How We Work */}
        <Process />
        
        {/* 08. Why NEORIZ */}
        <WhyChooseUs />
        
        {/* 10. Final Call To Action */}
        <Contact />
        
      </main>

      {/* 11. Premium Footer */}
      <Footer />
    </>
  );
}
