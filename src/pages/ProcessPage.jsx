import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import MagneticButton from "../components/MagneticButton";

const processSteps = [
  { id: "01", title: "Discover", subtitle: "Understand the business, audience, and actual problem.", desc: "Before we write a single line of code, we analyze your commercial objectives, technical constraints, and user needs to ensure we are solving the right problem." },
  { id: "02", title: "Define", subtitle: "Create clarity around goals, requirements, and direction.", desc: "We map out the architecture, define feature scopes, and align on exactly what the final product will look and function like." },
  { id: "03", title: "Design", subtitle: "Translate strategy into an intuitive user experience.", desc: "We craft premium user interfaces and establish scalable design systems that feel fluid, responsive, and unmistakably yours." },
  { id: "04", title: "Develop", subtitle: "Build the technology with scalable, practical architecture.", desc: "Our engineering team executes modular software construction using the latest performance-focused frameworks, ensuring robustness and speed." },
  { id: "05", title: "Deliver", subtitle: "Test, refine, launch, and prepare for the next stage.", desc: "Rigorous quality assurance, performance optimization, and a seamless deployment process ensure long-term stability and success." }
];

import useSEO from "../hooks/useSEO";

export default function ProcessPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useSEO({
    title: "Our Process — NEORIZ Solutions",
    description: "Discover the NEORIZ methodology: Discover, Define, Design, Develop, and Deliver.",
    url: "https://neorizsolutions.com/process"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "120px", background: "var(--nr-white)" }}>
        
        {/* Process Hero */}
        <section className="bg-grid-pattern bg-radial-gradient" style={{ padding: "80px 0 120px 0" }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: "800px" }}>
              <div style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "24px", fontSize: "0.8125rem" }}>
                Our Methodology
              </div>
              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: "32px" }}>
                How we move from problem to solution.
              </h1>
              <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.6, letterSpacing: "0.01em" }}>
                Our process is designed to eliminate ambiguity. We combine strategic clarity with rigorous technical execution to build platforms that scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section style={{ padding: "0 0 120px 0" }}>
          <div className="container">
            <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
              
              {/* Vertical connecting line */}
              <div style={{ position: "absolute", left: "24px", top: "0", bottom: "0", width: "2px", background: "var(--nr-light-gray)", zIndex: 0 }}></div>

              <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
                {processSteps.map((step, idx) => (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ display: "flex", gap: "40px", position: "relative", zIndex: 1 }}
                  >
                    {/* Number / Dot */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50px", flexShrink: 0 }}>
                      <div style={{ 
                        width: "48px", height: "48px", borderRadius: "50%", 
                        background: "var(--nr-deep-navy)", color: "var(--nr-white)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 700, fontSize: "1.125rem",
                        boxShadow: "0 0 0 10px var(--nr-white)"
                      }}>
                        {step.id}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div style={{ paddingTop: "8px" }}>
                      <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "16px", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                        {step.title}
                      </h2>
                      <h3 style={{ fontSize: "1.25rem", color: "var(--nr-teal)", marginBottom: "16px", fontWeight: 600 }}>
                        {step.subtitle}
                      </h3>
                      <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Cross-Page CTA */}
        <section style={{ padding: "120px 0", background: "var(--nr-soft-white)", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "48px", letterSpacing: "-0.03em" }}>
              See the results of our process.
            </h2>
            <MagneticButton>
              <Link to="/work" className="btn-primary">
                Explore Our Work
                <span className="btn-arrow" style={{ fontSize: "1.2em", marginLeft: "8px" }}>→</span>
              </Link>
            </MagneticButton>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
