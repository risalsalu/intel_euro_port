import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const renderLink = (hash, label) => {
    if (isHome) {
      return (
        <a href={`#${hash}`} className="footer-link">
          {label}
        </a>
      );
    } else {
      return (
        <Link to={`/#${hash}`} className="footer-link">
          {label}
        </Link>
      );
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {isHome ? (
          <a href="#hero" className="footer-logo">
            Intel Euro<span> Solutions</span>
          </a>
        ) : (
          <Link to="/" className="footer-logo">
            Intel Euro<span> Solutions</span>
          </Link>
        )}
        <div className="footer-copy">
          © {currentYear} Intel Euro Solutions. All rights reserved.
        </div>
        <div className="footer-links">
          {renderLink("about", "About")}
          {renderLink("services", "Services")}
          {renderLink("work", "Work")}
          {renderLink("contact", "Contact")}
        </div>
      </div>
    </footer>
  );
}
