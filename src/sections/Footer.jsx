import React from "react";
import { Link, useLocation } from "react-router-dom";

import logoPrimary from "../assets/brand/neoriz-logo-primary.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const renderLink = (path, label) => {
    return (
      <Link to={path} className="footer-link-premium">
        {label}
      </Link>
    );
  };

  return (
    <footer className="footer-premium" style={{ background: "var(--nr-deep-navy)", color: "var(--nr-white)", padding: "100px 0 40px 0" }}>
      <div className="container">
        
        <div className="grid-system grid-4-col" style={{ gap: "60px", marginBottom: "80px", gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
          
          {/* Brand Area */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingRight: "40px" }}>
            {isHome ? (
              <a href="#hero" style={{ display: "inline-block", width: "fit-content" }}>
                <img src={logoPrimary} alt="NEORIZ Solutions" style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }} />
              </a>
            ) : (
              <Link to="/" style={{ display: "inline-block", width: "fit-content" }}>
                <img src={logoPrimary} alt="NEORIZ Solutions" style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }} />
              </Link>
            )}
            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1.125rem", lineHeight: 1.6, maxWidth: "340px", fontWeight: 400 }}>
              Building thoughtful digital products and experiences for businesses moving forward.
            </p>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--nr-white)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px", opacity: 0.9 }}>Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {renderLink("/", "Home")}
              {renderLink("/about", "About")}
              {renderLink("/solutions", "Solutions")}
              {renderLink("/process", "Process")}
              {renderLink("/work", "Work")}
              {renderLink("/contact", "Contact")}
            </div>
          </div>

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--nr-white)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px", opacity: 0.9 }}>Contact</h4>
            <a href="mailto:hello@neorizsolutions.com" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "1rem", transition: "color 0.2s ease" }} onMouseOver={(e) => e.target.style.color = "var(--nr-white)"} onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.7)"}>
              hello@neorizsolutions.com
            </a>
          </div>

          {/* Location */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--nr-white)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px", opacity: 0.9 }}>Location</h4>
            <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1rem", lineHeight: 1.5 }}>
              Kochi Infopark,<br />Kerala, India
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", paddingTop: "40px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <div style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.875rem" }}>
            © {currentYear} NEORIZ Solutions. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255, 255, 255, 0.5)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s ease" }} onMouseOver={(e) => e.target.style.color = "var(--nr-white)"} onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.5)"}>LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255, 255, 255, 0.5)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s ease" }} onMouseOver={(e) => e.target.style.color = "var(--nr-white)"} onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.5)"}>Twitter</a>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link-premium {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.2s ease;
          display: inline-block;
          width: fit-content;
        }
        .footer-link-premium:hover {
          color: var(--nr-white);
        }
        @media (max-width: 1024px) {
          .footer-premium .grid-system.grid-4-col {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-premium .grid-system > div:first-child {
            padding-right: 0;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </footer>
  );
}
