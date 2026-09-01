import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../components/MagneticButton";

export default function Hero() {
  const containerRef = useRef(null);
  
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
    <section ref={containerRef} className="hero" id="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'var(--nr-soft-white)' }}>
      {/* Background Geometric Grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4 }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '10%', width: '1px', background: 'var(--nr-light-gray)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '30%', width: '1px', background: 'var(--nr-light-gray)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: '30%', width: '1px', background: 'var(--nr-light-gray)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: '10%', width: '1px', background: 'var(--nr-light-gray)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div 
          className="hero-inner"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ y: y1, opacity, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}
        >
          <motion.div variants={itemVariants} className="hero-eyebrow" style={{ color: 'var(--nr-blue)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px', fontSize: '0.875rem' }}>
            Digital Innovation Studio
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-headline" style={{ fontFamily: 'var(--nr-font-display)', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 700, lineHeight: 1.05, color: 'var(--nr-deep-navy)', letterSpacing: '-0.03em', marginBottom: '32px' }}>
            DESIGNING <br/>
            <span style={{ background: 'var(--nr-gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>WHAT'S NEXT.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-description" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.35rem)', color: 'var(--nr-medium-gray)', maxWidth: '600px', margin: '0 auto 48px auto', lineHeight: 1.6 }}>
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
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', top: '15%', right: '15%', width: '300px', height: '300px', border: '1px solid var(--nr-light-gray)', borderRadius: '50%', opacity: 0.5, pointerEvents: 'none' }}
      />
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '20%', left: '10%', width: '100px', height: '100px', background: 'var(--nr-gradient-primary)', opacity: 0.05, borderRadius: '16px', pointerEvents: 'none', transform: 'rotate(45deg)' }}
      />
    </section>
  );
}
