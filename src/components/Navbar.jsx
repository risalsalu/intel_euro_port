import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";

export default function Navbar({ onToggleMenu, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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

  const renderLink = (hash, label, isCta = false) => {
    const className = isCta ? "nav-cta" : "nav-link";
    if (isHome) {
      return (
        <a href={`#${hash}`} className={className}>
          {label}
        </a>
      );
    } else {
      return (
        <Link to={`/#${hash}`} className={className}>
          {label}
        </Link>
      );
    }
  };

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        {isHome ? (
          <a href="#hero" className="nav-logo">
            Intel Euro<span> Solutions</span>
          </a>
        ) : (
          <Link to="/" className="nav-logo">
            Intel Euro<span> Solutions</span>
          </Link>
        )}

        <div className="nav-links">
          {renderLink("about", "About")}
          {renderLink("services", "Services")}
          {renderLink("work", "Work")}
          {renderLink("process", "Process")}
          {renderLink("contact", "Start A Project", true)}
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
