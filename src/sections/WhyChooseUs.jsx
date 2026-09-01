import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    title: "Built for the business behind the brief.",
    desc: "We don't just write code. We analyze your commercial objectives and engineer digital solutions that directly support your growth metrics."
  },
  {
    title: "Design with absolute purpose.",
    desc: "Every pixel, animation, and layout decision is intentional. We combine premium aesthetic execution with rigorous UX strategy."
  },
  {
    title: "Technology that solves real problems.",
    desc: "We select the most appropriate modern stack for your specific needs, prioritizing speed, security, and long-term scalability over passing trends."
  },
  {
    title: "Clear, transparent communication.",
    desc: "Direct access to the engineers and designers building your product. No middle-men, no confusing technical jargon—just clear progress."
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="why" id="why" style={{ padding: "120px 0", background: "var(--nr-deep-navy)", color: "var(--nr-white)" }}>
      <div className="container">
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ color: "var(--nr-teal)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.875rem" }}>
              Why NEORIZ
            </div>
            <h2 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 700, color: "var(--nr-white)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px" }}>
              The partner for <br/>visionary brands.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: "500px" }}>
              We are an elite team of technical architects and digital designers who believe that great software should feel as good as it functions.
            </p>
          </motion.div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  padding: "32px", 
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.05)"
                }}
              >
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--nr-white)", marginBottom: "12px" }}>{reason.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
