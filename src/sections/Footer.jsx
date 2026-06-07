import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="footer-logo">
          Intel Euro<span> Solutions</span>
        </a>
        <div className="footer-copy">
          © {currentYear} Intel Euro Solutions. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#work" className="footer-link">Work</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}
