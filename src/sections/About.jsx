import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const capabilities = [
  {
    id: "01",
    title: "Digital Experiences",
    description: "Immersive, premium front-end interfaces that combine motion design with deep technical precision to captivate audiences."
  },
  {
    id: "02",
    title: "Web Platforms",
    description: "Robust, scalable architectures for modern web platforms, e-commerce systems, and data-heavy applications."
  },
  {
    id: "03",
    title: "Custom Software",
    description: "Bespoke operational tools and cloud-based software engineered from the ground up for complex business requirements."
  },
  {
    id: "04",
    title: "Business Solutions",
    description: "End-to-end digital transformation, aligning technology with commercial strategy to drive measurable business growth."
  }
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="about" id="about" style={{ padding: "120px 0", background: "var(--nr-white)" }}>
      <div className="container">
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "80px", alignItems: "start" }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.875rem" }}>
              What We Build
            </div>
            <h2 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Engineering <br/>Digital Futures.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ paddingTop: "20px" }}
          >
            <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>
              NEORIZ Solutions partners with visionary organizations to architect and deploy technology that matters. We don't just write code; we build the foundational systems that power modern businesses.
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
              style={{
                padding: "40px",
                background: "var(--nr-soft-white)",
                border: "1px solid var(--nr-light-gray)",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "24px"
              }}
            >
              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--nr-teal)" }}>{cap.id}</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--nr-deep-navy)", margin: 0 }}>{cap.title}</h3>
              <p style={{ color: "var(--nr-medium-gray)", margin: 0, lineHeight: 1.6 }}>{cap.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
