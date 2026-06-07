import React from "react";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <a href="#about" className="mobile-link" onClick={onClose}>About</a>
      <a href="#services" className="mobile-link" onClick={onClose}>Services</a>
      <a href="#work" className="mobile-link" onClick={onClose}>Work</a>
      <a href="#process" className="mobile-link" onClick={onClose}>Process</a>
      <a href="#contact" className="mobile-link" onClick={onClose}>Contact</a>
    </div>
  );
}
