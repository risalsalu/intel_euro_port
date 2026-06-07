import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { processSteps } from "../data/portfolioData";

export default function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  // Track scroll progress across the process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map progress to fill the vertical journey line (from 0% to 100%)
  const lineScale = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  return (
    <section ref={containerRef} className="process-journey" style={{ background: "#FFFFFF", padding: "120px 0" }} id="process">
      <div className="container">
        
        {/* Header */}
        <div className="process-header" style={{ marginBottom: "80px", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label">How We Build</div>
            <h2 className="section-title">The Animated Journey</h2>
            <p className="section-description" style={{ color: "#6B6B6B", margin: "0 auto" }}>
              Our step-by-step engineering roadmap. We maintain clear benchmarks from initial consult to release.
            </p>
          </motion.div>
        </div>

        {/* Vertical Timeline container */}
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", padding: "40px 0" }}>
          
          {/* Vertical progress line */}
          <div 
            style={{ 
              position: "absolute", 
              left: "20px", 
              top: "0", 
              bottom: "0", 
              width: "1px", 
              background: "#EAEAEA",
              transform: "translateX(-50%)"
            }}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                background: "#000000",
                scaleY: lineScale,
                transformOrigin: "top"
              }}
            />
          </div>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {processSteps.map((step, index) => (
              <JourneyStep 
                key={step.id} 
                step={step} 
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function JourneyStep({ step, index, scrollYProgress }) {
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { once: true, amount: 0.3 });

  // Dynamically activate dot based on section scroll progress
  const activationPoint = 0.15 + (index * 0.1);
  const activeTransform = useTransform(
    scrollYProgress,
    [activationPoint, activationPoint + 0.05],
    [0, 1]
  );

  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    return activeTransform.onChange(v => {
      setIsActive(v > 0.5);
    });
  }, [activeTransform]);

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "flex",
        gap: "40px",
        position: "relative",
        paddingLeft: "40px"
      }}
    >
      {/* Node Dot on line */}
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "8px",
          transform: "translateX(-50%)",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          border: `2px solid ${isActive ? "#000000" : "#EAEAEA"}`,
          background: isActive ? "#000000" : "#FFFFFF",
          zIndex: 2,
          transition: "all 0.4s ease"
        }}
      >
        {isActive && (
          <div 
            style={{
              width: "4px",
              height: "4px",
              background: "#FFFFFF",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          />
        )}
      </div>

      {/* Step details content */}
      <div style={{ flexGrow: 1 }}>
        <span 
          style={{ 
            fontFamily: "var(--font-display)", 
            fontSize: "0.75rem", 
            fontWeight: "700", 
            letterSpacing: "0.1em",
            color: isActive ? "#000000" : "#A3A3A3",
            transition: "color 0.4s ease"
          }}
        >
          Step {step.id}
        </span>
        <h3 
          style={{ 
            fontFamily: "var(--font-display)", 
            fontSize: "1.5rem", 
            fontWeight: "600", 
            letterSpacing: "-0.02em", 
            marginTop: "4px",
            color: isActive ? "#000000" : "#A3A3A3",
            transition: "color 0.4s ease"
          }}
        >
          {step.name}
        </h3>
        <p 
          style={{ 
            fontSize: "0.9375rem", 
            color: "#6B6B6B", 
            marginTop: "8px", 
            lineHeight: "1.6",
            maxWidth: "600px" 
          }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
