import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "../components/MagneticButton";

import { Link } from "react-router-dom";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="contact" id="contact">
      <div className="container contact-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-label">Get In Touch</div>
          <h2 className="contact-headline">
            Let's Build Something<br />Exceptional.
          </h2>
        </motion.div>

        <div className="contact-details">
          <motion.div
            className="contact-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="contact-detail-label">Company</div>
            <div className="contact-detail-value">Intel Euro Solutions</div>
          </motion.div>

          <motion.div
            className="contact-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-detail-label">Location</div>
            <div className="contact-detail-value">Kochi Infopark, Kerala</div>
          </motion.div>

          <motion.div
            className="contact-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="contact-detail-label">Phone</div>
            <div className="contact-detail-value">
              <a href="tel:+917736361739">+91 7736361739</a>
            </div>
          </motion.div>

          <motion.div
            className="contact-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="contact-detail-label">Email</div>
            <div className="contact-detail-value">
              <a href="mailto:hello@inteleurosolutions.com">hello@inteleurosolutions.com</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <MagneticButton>
            <Link to="/contact" className="btn-primary">
              Start A Project
              <span className="btn-arrow" style={{ marginLeft: "6px" }}>→</span>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <a href="tel:+917736361739" className="btn-secondary">
              Schedule A Call
            </a>
          </MagneticButton>

          <MagneticButton>
            <a 
              href="https://wa.me/917736361739" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              WhatsApp Contact
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
