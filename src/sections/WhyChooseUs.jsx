import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { whyChooseUsData } from "../data/portfolioData";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="why" id="why">
      <div className="container">
        <div className="why-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label">Why Us</div>
            <h2 className="section-title">Why Choose Intel Euro Solutions</h2>
            <p className="section-description">
              We align design precision, modular software construction, and client partnership to launch digital applications that drive actual commercial impact.
            </p>
          </motion.div>
        </div>

        <div className="why-grid">
          {whyChooseUsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="why-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.08 }}
            >
              <div className="why-number">{item.id}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
