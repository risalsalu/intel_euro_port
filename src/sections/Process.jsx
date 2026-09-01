import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const processSteps = [
  { id: "01", title: "Discover", desc: "Understanding the business behind the brief through deep technical and commercial analysis." },
  { id: "02", title: "Define", desc: "Mapping the architecture, requirements, and user journeys to ensure absolute clarity." },
  { id: "03", title: "Design", desc: "Crafting premium user interfaces and building scalable design systems for the product." },
  { id: "04", title: "Develop", desc: "Executing modular software construction using the latest performance-focused frameworks." },
  { id: "05", title: "Deliver", desc: "Testing, optimization, and seamless deployment with long-term scalability in mind." }
];

export default function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="process" id="process" style={{ padding: "120px 0", background: "var(--nr-white)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", marginBottom: "100px", maxWidth: "800px", margin: "0 auto 100px auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ color: "var(--nr-teal)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.875rem" }}>
              How We Work
            </div>
            <h2 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Engineered for success.
            </h2>
          </motion.div>
        </div>

        <div style={{ position: "relative", paddingBottom: "40px" }} className="process-timeline">
          {/* Connecting Line (Desktop only) */}
          <div className="process-line-bg hidden md:block" style={{ 
            position: "absolute", top: "40px", left: "10%", right: "10%", height: "1px", 
            background: "var(--nr-light-gray)" 
          }}></div>
          <motion.div className="process-line-active hidden md:block" 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            style={{ 
              position: "absolute", top: "39px", left: "10%", right: "10%", height: "2px", 
              background: "var(--nr-gradient-primary)",
              transformOrigin: "left"
            }}
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "24px" }} className="process-grid">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                className="process-step"
                style={{ position: "relative", zIndex: 2 }}
              >
                {/* Dot */}
                <div className="process-dot" style={{ 
                  width: "16px", height: "16px", borderRadius: "50%", 
                  background: "var(--nr-blue)", margin: "0 auto 32px auto",
                  boxShadow: "0 0 0 8px var(--nr-white), 0 0 0 9px var(--nr-light-gray)"
                }}></div>
                
                <div style={{ textAlign: "center" }} className="process-content">
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--nr-teal)", marginBottom: "8px" }}>{step.id}</div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "12px" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
