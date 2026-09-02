import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/brand/neoriz-logo-horizontal.svg";

export default function Navbar({ onToggleMenu, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (path, label) => {
    const isActive = location.pathname === path;
    const className = `nav-link-premium ${isActive ? "active" : ""}`;
    return (
      <Link to={path} className={className}>
        {label}
      </Link>
    );
  };

  return (
    <nav className={`nav-premium ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner-premium">
        {/* LOGO */}
        {isHome ? (
          <a href="#hero" className="nav-logo-premium">
            <img src={logo} alt="NEORIZ Solutions" />
          </a>
        ) : (
          <Link to="/" className="nav-logo-premium">
            <img src={logo} alt="NEORIZ Solutions" />
          </Link>
        )}

        {/* LINKS */}
        <div className="nav-links-premium">
          {renderLink("/", "Home")}
          {renderLink("/about", "About")}
          {renderLink("/solutions", "Solutions")}
          {renderLink("/process", "Process")}
          {renderLink("/work", "Work")}
          
          {/* PRIMARY CTA (Only pill element) */}
          <div className="nav-cta-wrapper">
            <Link to="/contact" className="nav-cta-premium">
              Start a Project
            </Link>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <div 
          className={`nav-toggle-premium ${isMenuOpen ? "active" : ""}`} 
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
