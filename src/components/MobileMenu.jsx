import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const renderLink = (path, label) => {
    return (
      <Link to={path} className="mobile-link" onClick={onClose}>
        {label}
      </Link>
    );
  };

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      {renderLink("/about", "About")}
      {renderLink("/solutions", "Solutions")}
      {renderLink("/work", "Work")}
      {renderLink("/process", "Process")}
      {renderLink("/contact", "Contact")}
    </div>
  );
}
