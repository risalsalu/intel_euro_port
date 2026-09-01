import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import logo from "../assets/brand/neoriz-logo-horizontal.svg";

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

  const renderLink = (path, label, isCta = false) => {
    const className = isCta ? "nav-cta" : "nav-link";
    return (
      <Link to={path} className={className}>
        {label}
      </Link>
    );
  };

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        {isHome ? (
          <a href="#hero" className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="NEORIZ Solutions" style={{ height: "40px", width: "auto" }} />
          </a>
        ) : (
          <Link to="/" className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="NEORIZ Solutions" style={{ height: "40px", width: "auto" }} />
          </Link>
        )}

        <div className="nav-links">
          {renderLink("/about", "About")}
          {renderLink("/solutions", "Solutions")}
          {renderLink("/work", "Work")}
          {renderLink("/process", "Process")}
          {renderLink("/contact", "Start a Project", true)}
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
