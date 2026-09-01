import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/brand/neoriz-logo-primary/logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const renderLink = (path, label) => {
    return (
      <Link to={path} className="footer-link" style={{ color: "var(--nr-medium-gray)", textDecoration: "none", fontSize: "0.9375rem" }}>
        {label}
      </Link>
    );
  };

  return (
    <footer className="footer" style={{ background: "var(--nr-soft-white)", borderTop: "1px solid var(--nr-light-gray)", padding: "80px 0 40px 0" }}>
      <div className="container">
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "60px", marginBottom: "80px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {isHome ? (
              <a href="#hero" style={{ display: "inline-block" }}>
                <img src={logo} alt="NEORIZ Solutions" style={{ height: "40px", width: "auto" }} />
              </a>
            ) : (
              <Link to="/" style={{ display: "inline-block" }}>
                <img src={logo} alt="NEORIZ Solutions" style={{ height: "40px", width: "auto" }} />
              </Link>
            )}
            <p style={{ color: "var(--nr-medium-gray)", fontSize: "0.9375rem", lineHeight: 1.6, maxWidth: "300px" }}>
              Architecting premium digital platforms and software solutions for modern business.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--nr-deep-navy)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Company</h4>
            {renderLink("/about", "About")}
            {renderLink("/solutions", "Solutions")}
            {renderLink("/work", "Work")}
            {renderLink("/process", "Process")}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--nr-deep-navy)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Contact</h4>
            <a href="mailto:hello@inteleurosolutions.com" style={{ color: "var(--nr-medium-gray)", textDecoration: "none", fontSize: "0.9375rem" }}>
              hello@inteleurosolutions.com
            </a>
            <div style={{ color: "var(--nr-medium-gray)", fontSize: "0.9375rem" }}>
              Kochi Infopark, Kerala
            </div>
          </div>
          
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", paddingTop: "40px", borderTop: "1px solid var(--nr-light-gray)" }}>
          <div style={{ color: "var(--nr-medium-gray)", fontSize: "0.875rem" }}>
            © {currentYear} NEORIZ Solutions. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--nr-medium-gray)", textDecoration: "none", fontSize: "0.875rem" }}>LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--nr-medium-gray)", textDecoration: "none", fontSize: "0.875rem" }}>Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
