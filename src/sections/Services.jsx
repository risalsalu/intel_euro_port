import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const capabilities = [
  { id: "01", title: "Digital Experiences", detail: "Creating immersive, high-performance interfaces that connect brands with their audiences through fluid motion and premium aesthetic execution." },
  { id: "02", title: "Web Development", detail: "Engineering modern, fast, and accessible web applications using the latest scalable front-end and back-end technologies." },
  { id: "03", title: "Business Platforms", detail: "Architecting robust enterprise platforms that handle complex workflows, data management, and operational scale." },
  { id: "04", title: "Custom Software", detail: "Building tailored software solutions from the ground up to solve unique business challenges that off-the-shelf software cannot." },
  { id: "05", title: "UI/UX Systems", detail: "Developing comprehensive design systems and modular components that ensure consistency and speed up future development." }
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [hovered, setHovered] = useState(null);

  return (
    <section ref={containerRef} className="services" id="services" style={{ padding: "120px 0", background: "var(--nr-deep-navy)", color: "var(--nr-white)" }}>
      <div className="container">
        
        <div style={{ marginBottom: "80px", maxWidth: "800px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ color: "var(--nr-teal)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.875rem" }}>
              Core Capabilities
            </div>
            <h2 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 700, color: "var(--nr-white)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Precision execution across the digital spectrum.
            </h2>
          </motion.div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 4fr",
                alignItems: "center",
                padding: "40px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                position: "relative",
                cursor: "pointer"
              }}
              className="capability-row"
            >
              <div style={{ 
                position: "absolute", 
                left: "-20px", right: "-20px", top: 0, bottom: 0, 
                background: "rgba(255,255,255,0.02)", 
                opacity: hovered === idx ? 1 : 0, 
                transition: "opacity 0.3s ease",
                zIndex: 0,
                borderRadius: "12px"
              }} />
              
              <div style={{ fontSize: "1.25rem", color: hovered === idx ? "var(--nr-teal)" : "rgba(255,255,255,0.5)", fontWeight: 500, zIndex: 1, transition: "color 0.3s ease" }}>
                {cap.id}
              </div>
              
              <div style={{ zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }} className="capability-content">
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", margin: 0, fontWeight: 600, color: hovered === idx ? "var(--nr-white)" : "rgba(255,255,255,0.9)", transition: "color 0.3s ease" }}>
                  {cap.title}
                </h3>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "1.125rem", lineHeight: 1.6, opacity: hovered === idx ? 1 : 0.7, transition: "opacity 0.3s ease" }}>
                  {cap.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
