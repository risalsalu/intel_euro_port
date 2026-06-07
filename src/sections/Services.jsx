import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesData } from "../data/portfolioData";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="services" id="services">
      <div className="container">
        <div className="services-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              We engineer custom digital solutions that solve real business problems, keeping speed and clean design at the absolute core.
            </p>
          </motion.div>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, isInView }) {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="service-item"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      whileHover="hover"
    >
      {/* Background slide-up effect */}
      <motion.div
        className="service-item-bg"
        variants={{
          hover: { scaleY: 1 },
          rest: { scaleY: 0 }
        }}
        initial="rest"
        style={{ transformOrigin: "bottom" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="service-item-content">
        <motion.div
          className="service-number"
          variants={{
            hover: { color: "#888888" },
            rest: { color: "#A3A3A3" }
          }}
        >
          {service.id}
        </motion.div>

        <motion.h3
          className="service-name"
          variants={{
            hover: { color: "#FFFFFF" },
            rest: { color: "#000000" }
          }}
        >
          {service.name}
        </motion.h3>

        <motion.p
          className="service-desc"
          variants={{
            hover: { color: "rgba(255, 255, 255, 0.65)" },
            rest: { color: "#525252" }
          }}
        >
          {service.description}
        </motion.p>

        <motion.div
          className="service-arrow"
          variants={{
            hover: { x: 5, opacity: 1, color: "#FFFFFF" },
            rest: { x: -10, opacity: 0, color: "#000000" }
          }}
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
}
