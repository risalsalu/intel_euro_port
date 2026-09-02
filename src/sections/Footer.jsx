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
        
        <div className="footer-grid">
          
          {/* Brand Area */}
          <div className="footer-brand">
            {isHome ? (
              <a href="#hero" style={{ display: "inline-block", width: "fit-content" }}>
                <img src={logoPrimary} alt="NEORIZ Solutions" style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }} />
              </a>
            ) : (
              <Link to="/" style={{ display: "inline-block", width: "fit-content" }}>
                <img src={logoPrimary} alt="NEORIZ Solutions" style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }} />
              </Link>
            )}
            <p className="footer-desc">
              Building thoughtful digital products and experiences for businesses moving forward.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-nav-links">
              {renderLink("/", "Home")}
              {renderLink("/about", "About")}
              {renderLink("/solutions", "Solutions")}
              {renderLink("/process", "Process")}
              {renderLink("/work", "Work")}
              {renderLink("/contact", "Contact")}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact</h4>
            <a href="mailto:hello@neorizsolutions.com" className="footer-email">
              hello@neorizsolutions.com
            </a>
          </div>

          {/* Location */}
          <div className="footer-location-col">
            <h4 className="footer-heading">Location</h4>
            <div className="footer-location-text">
              Kochi Infopark,<br />Kerala, India
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} NEORIZ Solutions. All rights reserved.
          </div>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">Twitter</a>
          </div>
        </div>

      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-right: 40px;
        }
        .footer-desc {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.125rem;
          line-height: 1.6;
          max-width: 340px;
          font-weight: 400;
        }
        .footer-nav-col, .footer-contact-col, .footer-location-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-heading {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--nr-white);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          opacity: 0.9;
        }
        .footer-nav-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
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
        .footer-email {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.2s ease;
          word-break: break-all; /* Critical for small mobile viewports */
        }
        .footer-email:hover {
          color: var(--nr-white);
        }
        .footer-location-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          line-height: 1.5;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }
        .footer-social {
          display: flex;
          gap: 24px;
        }
        .footer-social-link {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }
        .footer-social-link:hover {
          color: var(--nr-white);
        }

        /* Mobile specific layouts */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-brand {
            padding-right: 0;
            grid-column: 1 / -1; /* Make brand full width on tablet */
            margin-bottom: 20px;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr; /* Pure vertical stack */
            gap: 48px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-brand {
            margin-bottom: 0;
          }
        }
      `}</style>
    </footer>
  );
}
