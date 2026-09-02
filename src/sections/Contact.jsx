import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="contact bg-grid-pattern-dark" id="contact" style={{ background: "var(--nr-deep-navy)", textAlign: "center", position: "relative", overflow: "hidden", padding: "120px 0" }}>
      {/* Subtle Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(circle at center, rgba(0, 229, 255, 0.05) 0%, rgba(46, 49, 146, 0.05) 40%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      
      <div className="container" style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label" style={{ color: "var(--nr-teal)", marginBottom: "24px" }}>
            Start A Project
          </div>
          
          <h2 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: "var(--nr-white)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "32px" }}>
            Have an idea worth building?
          </h2>
          
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "48px", lineHeight: 1.6 }}>
            Let's turn it into something real. We are currently accepting new projects and would love to hear about what you're working on.
          </p>
          
          <MagneticButton>
            <Link to="/contact" className="btn-primary">
              Start a Project
              <span className="btn-arrow" style={{ fontSize: "1.2em", marginLeft: "8px" }}>→</span>
            </Link>
          </MagneticButton>
        </motion.div>
        
      </div>
    </section>
  );
}
