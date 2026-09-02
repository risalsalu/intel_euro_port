import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const processStages = [
  {
    id: "01",
    title: "Understand",
    description: "Business, users and problems."
  },
  {
    id: "02",
    title: "Design",
    description: "Clear experiences and solutions."
  },
  {
    id: "03",
    title: "Build",
    description: "Reliable digital products and systems."
  },
  {
    id: "04",
    title: "Grow",
    description: "Solutions that can evolve with the business."
  }
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="about-minimal" id="about">
      <div className="container">
        
        {/* EDITORIAL STATEMENT */}
        <motion.div 
          className="about-header-minimal"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="about-statement-minimal">
            GOOD DIGITAL SOLUTIONS START WITH <span className="text-gradient">UNDERSTANDING THE BUSINESS.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="about-desc-minimal">
            NEORIZ understands the business first, then designs and builds the right digital solution.
          </motion.p>
        </motion.div>

        {/* CONNECTED PROCESS LAYOUT */}
        <motion.div 
          className="process-horizontal"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Subtle connection line */}
          <div className="process-line" />

          {processStages.map((stage, index) => (
            <motion.div key={stage.id} variants={itemVariants} className="process-stage-minimal">
              <div className="process-node-minimal" />
              <div className="process-content-minimal">
                <span className="process-id-minimal">{stage.id} —</span>
                <h3 className="process-title-minimal">{stage.title}</h3>
                <p className="process-text-minimal">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
