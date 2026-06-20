import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const renderLink = (hash, label) => {
    if (isHome) {
      return (
        <a href={`#${hash}`} className="mobile-link" onClick={onClose}>
          {label}
        </a>
      );
    } else {
      return (
        <Link to={`/#${hash}`} className="mobile-link" onClick={onClose}>
          {label}
        </Link>
      );
    }
  };

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      {renderLink("about", "About")}
      {renderLink("services", "Services")}
      {renderLink("work", "Work")}
      {renderLink("process", "Process")}
      {renderLink("contact", "Contact")}
    </div>
  );
}
