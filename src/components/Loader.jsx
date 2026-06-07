import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 1: Intel Euro Solutions (0 to 1.5s)
    // Step 2: Transforming Ideas... (1.5s to 3s)
    // Step 3: Complete (3s)
    const t1 = setTimeout(() => setStep(1), 1500);
    const t2 = setTimeout(() => setStep(2), 3200);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "#000000",
        color: "#FFFFFF",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        overflow: "hidden"
      }}
    >
      <div style={{ padding: "0 24px", textAlign: "center" }}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.h2
              key="brand"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em"
              }}
            >
              Intel Euro Solutions
            </motion.h2>
          )}

          {step === 1 && (
            <motion.p
              key="tagline"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                fontWeight: "400",
                color: "#A3A3A3",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}
            >
              Transforming Ideas Into Scalable Software
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Modern progressive load bar */}
      <div 
        style={{ 
          width: "140px", 
          height: "1px", 
          background: "rgba(255,255,255,0.1)", 
          position: "relative", 
          overflow: "hidden",
          marginTop: "20px"
        }}
      >
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 3.2, ease: "easeInOut" }}
          onAnimationComplete={onComplete}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            background: "#FFFFFF"
          }}
        />
      </div>
    </motion.div>
  );
}
