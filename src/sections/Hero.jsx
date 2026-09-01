import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../components/MagneticButton";

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top
    });
  };
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="hero bg-grid-pattern bg-radial-gradient" id="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background Overlay */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 1) 100%)', zIndex: 1 }} />

      {/* Cursor Responsive Glow */}
      <div 
        className="hero-cursor-glow hidden sm:block"
        style={{
          position: 'absolute',
          left: mousePosition.x,
          top: mousePosition.y,
          width: '800px',
          height: '800px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.04) 0%, rgba(46, 49, 146, 0.02) 40%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'width 0.2s, height 0.2s'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div 
          className="hero-inner"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ y: y1, opacity, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}
        >
          <motion.div variants={itemVariants} className="hero-eyebrow" style={{ color: 'var(--nr-blue)', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '32px', fontSize: '0.8125rem' }}>
            Digital Innovation Studio
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-headline" style={{ fontFamily: 'var(--nr-font-display)', fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 700, lineHeight: 1.02, color: 'var(--nr-deep-navy)', letterSpacing: '-0.04em', marginBottom: '32px' }}>
            DESIGNING <br/>
            <span style={{ background: 'var(--nr-gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>WHAT'S NEXT.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-description" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'var(--nr-medium-gray)', maxWidth: '580px', margin: '0 auto 56px auto', lineHeight: 1.7, letterSpacing: '0.01em' }}>
            We architect and build premium digital platforms, custom software, and modern web applications that move business forward.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <MagneticButton>
              <Link to="/contact" className="btn-primary" style={{ background: 'var(--nr-deep-navy)', color: 'var(--nr-white)', padding: '16px 36px', borderRadius: '100px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                Start a Project
                <span className="btn-arrow">→</span>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/work" className="btn-secondary" style={{ background: 'transparent', border: '1px solid var(--nr-light-gray)', color: 'var(--nr-deep-navy)', padding: '16px 36px', borderRadius: '100px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                Explore Our Work
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Geometric Elements */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', top: '5%', right: '5%', width: '600px', height: '600px', border: '1px solid rgba(10, 25, 47, 0.03)', borderRadius: '50%', pointerEvents: 'none' }}
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '800px', height: '800px', border: '1px solid rgba(10, 25, 47, 0.02)', borderRadius: '50%', pointerEvents: 'none' }}
      />
      {/* Animated Technical Lines */}
      <motion.div 
        animate={{ y: [0, 50, 0], opacity: [0.1, 0.3, 0.1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '30%', left: '15%', width: '1px', height: '150px', background: 'linear-gradient(to bottom, transparent, var(--nr-blue), transparent)', pointerEvents: 'none' }}
      />
      <motion.div 
        animate={{ x: [0, -50, 0], opacity: [0.1, 0.4, 0.1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: 'absolute', bottom: '30%', right: '15%', width: '200px', height: '1px', background: 'linear-gradient(to left, transparent, var(--nr-teal), transparent)', pointerEvents: 'none' }}
      />
    </section>
  );
}
