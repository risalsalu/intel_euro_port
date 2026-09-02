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
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="abstract-svg"
              style={{ width: "100%", height: "auto", overflow: "visible" }}
            >
              {/* STAGE 1: IDEAS (Nodes and loose connections) */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{
                  x: shouldReduceMotion ? 0 : smoothMouseX.get() * -4,
                  y: shouldReduceMotion ? 0 : smoothMouseY.get() * -4,
                }}
              >
                {/* Abstract Nodes */}
                <circle cx="50" cy="300" r="2.5" fill="var(--nr-deep-navy)" opacity="0.5" />
                <circle cx="90" cy="360" r="2" fill="var(--nr-deep-navy)" opacity="0.3" />
                <circle cx="130" cy="290" r="3" fill="var(--nr-deep-navy)" opacity="0.6" />
                <circle cx="80" cy="240" r="1.5" fill="var(--nr-deep-navy)" opacity="0.4" />
                
                {/* Connecting Lines (Ideas forming) */}
                <path d="M50 300 L90 360 L130 290 L50 300" stroke="var(--nr-deep-navy)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
                <path d="M50 300 L80 240 L130 290" stroke="var(--nr-deep-navy)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
                
                {/* Trajectory to Structure */}
                <path d="M130 290 L180 250" stroke="var(--nr-deep-navy)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
              </motion.g>

              {/* STAGE 2: STRUCTURE (Blueprint / Grid system) */}
              <motion.g
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.9 }}
                style={{
                  x: shouldReduceMotion ? 0 : smoothMouseX.get() * 2,
                  y: shouldReduceMotion ? 0 : smoothMouseY.get() * 2,
                }}
              >
                {/* Architectural Blueprint Grid */}
                <rect x="160" y="140" width="120" height="120" stroke="var(--nr-deep-navy)" strokeWidth="1" opacity="0.15" />
                <path d="M160 180 L280 180 M160 220 L280 220" stroke="var(--nr-deep-navy)" strokeWidth="0.5" opacity="0.15" />
                <path d="M200 140 L200 260 M240 140 L240 260" stroke="var(--nr-deep-navy)" strokeWidth="0.5" opacity="0.15" />
                
                {/* Structural Node Points */}
                <circle cx="200" cy="220" r="3" fill="var(--nr-teal)" opacity="0.9" />
                <circle cx="240" cy="180" r="2" fill="var(--nr-deep-navy)" opacity="0.5" />
                
                {/* Central processing indicator */}
                <rect x="195" y="175" width="50" height="50" fill="var(--nr-deep-navy)" opacity="0.03" />
                
                {/* Connection moving to final stage */}
                <motion.line 
                  x1="280" y1="140" x2="330" y2="90" 
                  stroke="var(--nr-blue)" 
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 1.4 }}
                />
              </motion.g>

              {/* STAGE 3: DIGITAL SOLUTION (Solid blocks/UI elements) */}
              <motion.g
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                style={{
                  x: shouldReduceMotion ? 0 : smoothMouseX.get() * 6,
                  y: shouldReduceMotion ? 0 : smoothMouseY.get() * 6,
                }}
              >
                {/* Final structured interface panel */}
                <rect x="290" y="40" width="100" height="70" rx="6" fill="#FFFFFF" stroke="var(--nr-deep-navy)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.03))" }} />
                
                {/* UI abstractions inside panel */}
                <rect x="305" y="55" width="30" height="6" rx="3" fill="var(--nr-blue)" />
                <rect x="305" y="70" width="70" height="4" rx="2" fill="var(--nr-deep-navy)" opacity="0.15" />
                <rect x="305" y="80" width="50" height="4" rx="2" fill="var(--nr-deep-navy)" opacity="0.15" />
                
                {/* Secondary data/module block */}
                <rect x="340" y="95" width="50" height="45" rx="6" fill="var(--nr-teal)" />
                <rect x="350" y="105" width="30" height="4" rx="2" fill="#FFFFFF" opacity="0.8" />
                <rect x="350" y="115" width="20" height="4" rx="2" fill="#FFFFFF" opacity="0.5" />
              </motion.g>

              {/* DYNAMIC DATA / IDEA PULSE */}
              <motion.circle 
                r="3" 
                fill="var(--nr-blue)"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ 
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 1, 0] 
                }}
                transition={{ 
                  duration: 4.5, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  delay: 2.2
                }}
                style={{
                  offsetPath: "path('M130 290 L180 250 L180 140 L280 140 L330 90')",
                  filter: "drop-shadow(0px 0px 6px rgba(46, 49, 146, 0.4))"
                }}
              />
            </svg>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
