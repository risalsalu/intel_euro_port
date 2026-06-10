import React, { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Navbar({ onToggleMenu, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">
          Intel Euro<span> Solutions</span>
        </a>

        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#contact" className="nav-cta">Start A Project</a>
        </div>

        <div 
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`} 
          onClick={onToggleMenu}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
