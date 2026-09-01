import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="contact" id="contact" style={{ padding: "160px 0", background: "var(--nr-white)", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label" style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px", fontSize: "0.875rem" }}>
            Start A Project
          </div>
          
          <h2 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "32px" }}>
            Have an idea worth building?
          </h2>
          
          <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", marginBottom: "48px", lineHeight: 1.6 }}>
            Let's turn it into something real. We are currently accepting new projects and would love to hear about what you're working on.
          </p>
          
          <MagneticButton>
            <Link to="/contact" className="btn-primary" style={{ background: "var(--nr-deep-navy)", color: "var(--nr-white)", padding: "20px 48px", borderRadius: "100px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "1.125rem" }}>
              Get In Touch
              <span className="btn-arrow" style={{ fontSize: "1.2em" }}>→</span>
            </Link>
          </MagneticButton>
        </motion.div>
        
      </div>
    </section>
  );
}
