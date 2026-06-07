import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to container center (-1 to 1)
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Headline words for reveal animation
  const headlineWords = "Building Digital Products That Drive Business Growth.".split(" ");

  // Container motion variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  const textFadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.8,
      },
    },
  };

  return (
    <section ref={containerRef} className="hero" id="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-eyebrow">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Software Development Studio
            </motion.span>
          </div>

          <h1 className="hero-headline">
            {headlineWords.map((word, i) => (
              <span key={i} className="word" style={{ overflow: "hidden", display: "inline-block" }}>
                <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="hero-description" variants={textFadeVariants}>
            Intel Euro Solutions crafts modern web applications, business platforms, e-commerce solutions, and digital experiences that help businesses scale.
          </motion.p>

          <motion.div className="hero-buttons" variants={textFadeVariants}>
            <MagneticButton>
              <a href="#work" className="btn-primary">
                View Our Work
                <span className="btn-arrow" style={{ marginLeft: "6px" }}>→</span>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="btn-secondary">
                Start A Project
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Hero Visual Column */}
        <div className="hero-visual">
          <div className="hero-canvas">
            {/* Grid background */}
            <div className="hero-grid">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="hero-grid-cell" />
              ))}
            </div>

            {/* Geometric floating shapes reacting to mouse */}
            <motion.div
              className="hero-shape hero-shape-1"
              animate={{
                x: mousePos.x * 25,
                y: mousePos.y * 25,
                rotate: 15 + mousePos.x * 10,
              }}
              transition={{ type: "tween", ease: "linear", duration: 0.2 }}
            />
            <motion.div
              className="hero-shape hero-shape-2"
              animate={{
                x: mousePos.x * -20,
                y: mousePos.y * -20,
                rotate: -10 + mousePos.y * 12,
              }}
              transition={{ type: "tween", ease: "linear", duration: 0.2 }}
            />
            <div className="hero-shape hero-shape-3" />
            <div className="hero-shape hero-shape-4" />

            {/* Animated Dots */}
            <div className="hero-dot hero-dot-1" />
            <div className="hero-dot hero-dot-2" />

            {/* Cursor following element */}
            <motion.div
              className="hero-cursor-element"
              animate={{
                x: mousePos.x * 40,
                y: mousePos.y * 40,
              }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              <div className="hero-cursor-inner"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
