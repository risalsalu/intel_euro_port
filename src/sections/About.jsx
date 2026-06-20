import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;

    const duration = 1.5;
    const fps = 60;
    const totalFrames = Math.round(duration * fps);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentVal = Math.round(end * (1 - (1 - progress) * (1 - progress)));
      setCount(currentVal);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, 1000 / fps);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const timelineData = [
  {
    stage: "01",
    title: "Company Foundation",
    description: "Intel Euro Solutions was founded at Kochi Infopark, Kerala, as an elite design and custom engineering studio aiming to build products that combine luxury design with enterprise-grade codebase systems."
  },
  {
    stage: "02",
    title: "Growth & Scale",
    description: "Expanded engineering workflows to build robust cloud setups, establishing ASP.NET Core integrations and high-fidelity React applications for clients globally."
  },
  {
    stage: "03",
    title: "Projects Delivered",
    description: "Successfully shipped over 20+ custom products across active domains, from advanced healthcare schedulers to contemporary online shopping stores, with high performance outcomes."
  },
  {
    stage: "04",
    title: "Industries Served",
    description: "Deepened domain expertise across 8+ specialized sectors, including health networks, education dashboards, luxury culinary sites, fashion lookbooks, and technical coding platforms."
  },
  {
    stage: "05",
    title: "Future Vision",
    description: "Pioneering high-speed web apps, edge rendered frameworks, and performance optimizations. We aim to keep positioning Kochi Infopark as a global center of software design excellence."
  }
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section ref={containerRef} className="about" id="about" style={{ padding: "120px 0" }}>
      <div className="container">

        {/* Upper Grid Layout */}
        <div className="about-inner" style={{ marginBottom: "100px" }}>
          <motion.div
            className="about-left"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-label">Who We Are</div>
            <h2 className="section-title" style={{ letterSpacing: "-0.03em" }}>Architecting Digital Frontiers.</h2>
            <p className="section-description">
              Intel Euro Solutions is a software development company based in Kochi Infopark, delivering modern digital experiences across healthcare, education, e-commerce, creative arts, and technology industries.
            </p>
            <p className="section-description" style={{ marginTop: "16px" }}>
              We partner with visionary businesses to transform raw ideas into performant, clean, and highly scalable software solutions.
            </p>

            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">
                  <AnimatedCounter value="8" suffix="+" />
                </div>
                <div className="stat-label">
                  Industries<br />Served
                </div>
              </div>
              <div className="stat">
                <div className="stat-number">
                  <AnimatedCounter value="20" suffix="+" />
                </div>
                <div className="stat-label">
                  Projects<br />Delivered
                </div>
              </div>
              <div className="stat">
                <div className="stat-number">
                  <AnimatedCounter value="100" suffix="%" />
                </div>
                <div className="stat-label">
                  Custom<br />Solutions
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="about-value" style={{ borderTop: "none" }}>
              <div className="about-value-title">Precision Engineering</div>
              <div className="about-value-text">
                We design and construct clean codebase architectures optimized for high efficiency, speed, security, and effortless updates.
              </div>
            </div>
            <div className="about-value">
              <div className="about-value-title">Design-First Culture</div>
              <div className="about-value-text">
                Great products are simple and beautiful. Our design principles prioritize balance, spacing, typography, and premium transitions.
              </div>
            </div>
            <div className="about-value" style={{ borderBottom: "none" }}>
              <div className="about-value-title">Absolute Transparency</div>
              <div className="about-value-text">
                We operate as a partner, not a vendor. Regular updates, collaborative sprints, and open communication lines guide every project.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Storytelling Sub-Section */}
        <div style={{ borderTop: "1px solid #EAEAEA", paddingTop: "80px" }}>
          <div className="section-label">Our Story</div>
          <h2 className="section-title" style={{ marginBottom: "50px" }}>Journey Milestones</h2>

          <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "60px" }} className="about-inner">

            {/* Left Timeline Stages Select */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStage(index)}
                  style={{
                    padding: "20px",
                    background: activeStage === index ? "#000000" : "transparent",
                    color: activeStage === index ? "#FFFFFF" : "#000000",
                    border: "1px solid #EAEAEA",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px"
                  }}
                >
                  <span style={{ fontWeight: "700", opacity: activeStage === index ? 0.8 : 0.4 }}>
                    {item.stage}
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "600" }}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Story Stage Details */}
            <div
              style={{
                background: "#FAFAFA",
                border: "1px solid #EAEAEA",
                borderRadius: "12px",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: "700", marginBottom: "20px", letterSpacing: "-0.02em" }}>
                {timelineData[activeStage].title}
              </h3>
              <p style={{ color: "#6B6B6B", lineHeight: "1.75", fontSize: "1rem" }}>
                {timelineData[activeStage].description}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
