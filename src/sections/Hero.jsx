import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || isMobile || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Normalize -1 to 1
    const normalizedX = ((e.clientX - left) / width) * 2 - 1;
    const normalizedY = ((e.clientY - top) / height) * 2 - 1;
    setMousePosition({ x: normalizedX, y: normalizedY });
  };

  // Ultra-subtle physics springs for the abstract architecture layer
  const springConfig = { damping: 60, stiffness: 30, mass: 1.5 };
  const smoothMouseX = useSpring(0, springConfig);
  const smoothMouseY = useSpring(0, springConfig);

  useEffect(() => {
    if (!isMobile && !shouldReduceMotion) {
      smoothMouseX.set(mousePosition.x);
      smoothMouseY.set(mousePosition.y);
    }
  }, [mousePosition, smoothMouseX, smoothMouseY, isMobile, shouldReduceMotion]);

  // Entrance variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="hero-white" 
      id="hero"
    >
      <div className="container hero-container-white">
        
        {/* LEFT: MINIMAL EDITORIAL TYPOGRAPHY */}
        <motion.div 
          className="hero-content-white"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={itemVariants} className="hero-headline-white">
            WE BUILD <br/> WHAT MOVES <br/> BUSINESS <br/> FORWARD.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-desc-white">
            NEORIZ Solutions creates thoughtful digital products, brands, platforms and experiences designed for real business growth.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions-white">
            <Link to="/contact" className="btn-primary-white">
              START A PROJECT <span className="btn-arrow">→</span>
            </Link>
            <Link to="/work" className="btn-secondary-white">
              EXPLORE OUR WORK
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT: ABSTRACT ARCHITECTURAL VISUAL */}
        <div className="hero-abstract-wrapper">
          <motion.div 
            className="hero-abstract-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          >
            <svg 
              viewBox="0 0 300 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="abstract-svg"
            >
              {/* Structural Deep Navy Line (Diagonal) */}
              <motion.line 
                x1="20" y1="380" x2="280" y2="20" 
                stroke="var(--nr-deep-navy)" 
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                style={{
                  x: shouldReduceMotion ? 0 : smoothMouseX.get() * -8,
                  y: shouldReduceMotion ? 0 : smoothMouseY.get() * -8,
                }}
              />

              {/* Vertical Teal Plane/Line */}
              <motion.line 
                x1="180" y1="50" x2="180" y2="350" 
                stroke="var(--nr-teal)" 
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                style={{
                  x: shouldReduceMotion ? 0 : smoothMouseX.get() * 6,
                  y: shouldReduceMotion ? 0 : smoothMouseY.get() * 6,
                }}
              />

              {/* Horizontal Subtle Structural Line */}
              <motion.line 
                x1="100" y1="180" x2="260" y2="180" 
                stroke="var(--nr-deep-navy)" 
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
              />

              {/* Minimal Glowing Connection Point (Moves along diagonal) */}
              <motion.circle 
                r="4" 
                fill="var(--nr-blue)"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ 
                  offsetDistance: ["10%", "90%"],
                  opacity: [0, 1, 1, 0] 
                }}
                transition={{ 
                  duration: 8, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  delay: 1.5
                }}
                style={{
                  offsetPath: "path('M20 380 L280 20')",
                  filter: "drop-shadow(0px 0px 8px rgba(46, 49, 146, 0.6))"
                }}
              />

              {/* Static Intersection Dot */}
              <motion.circle 
                cx="180" cy="158" 
                r="2.5" 
                fill="var(--nr-teal)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
                style={{
                  x: shouldReduceMotion ? 0 : smoothMouseX.get() * 2,
                  y: shouldReduceMotion ? 0 : smoothMouseY.get() * 2,
                }}
              />
            </svg>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
