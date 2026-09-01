import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const industries = [
  "Healthcare",
  "Hospitality",
  "E-Commerce",
  "Education",
  "Creative Arts",
  "Fashion",
  "Consumer Electronics",
  "Travel & Real Estate",
  "Restaurant Technology"
];

export default function Industries() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="industries" style={{ padding: "120px 0", background: "var(--nr-soft-white)" }}>
      <div className="container">
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px" }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ color: "var(--nr-teal)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.875rem" }}>
              Domain Expertise
            </div>
            <h2 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Cross-industry intelligence.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignContent: "flex-start" }}
          >
            {industries.map((ind, idx) => (
              <motion.div 
                key={ind}
                whileHover={{ y: -2 }}
                style={{ 
                  padding: "16px 32px", 
                  background: "var(--nr-white)", 
                  border: "1px solid var(--nr-light-gray)", 
                  borderRadius: "100px", 
                  fontSize: "1.125rem", 
                  color: "var(--nr-deep-navy)",
                  fontWeight: 500,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.02)"
                }}
              >
                {ind}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
