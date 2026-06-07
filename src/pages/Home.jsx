import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Loader from "../components/Loader";
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

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // Scroll progress bar logic
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Intro Loader */}
      <AnimatePresence>
        {showLoader && (
          <Loader onComplete={() => setShowLoader(false)} />
        )}
      </AnimatePresence>

      {/* Premium custom cursor */}
      <CustomCursor />

      {/* Global Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <Navbar onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />

      {/* Main Content */}
      <main style={{ position: "relative" }}>
        <Hero />
        
        <div className="container">
          <div className="divider" />
        </div>
        
        <About />
        
        <div className="container">
          <div className="divider" />
        </div>
        
        <Services />
        
        <Industries />
        
        <FeaturedWork />

        {/* Technology Marquee Section */}
        <section className="marquee-section">
          <ScrollingMarquee items={technologiesData} />
        </section>

        <Process />
        
        <div className="container">
          <div className="divider" />
        </div>
        
        <WhyChooseUs />
        
        <Contact />
      </main>

      <Footer />
    </>
  );
}
