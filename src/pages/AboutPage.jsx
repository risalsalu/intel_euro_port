import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import MagneticButton from "../components/MagneticButton";

import useSEO from "../hooks/useSEO";

const values = [
  { id: "01", title: "Build with purpose.", desc: "Every line of code and every pixel must serve a specific business objective." },
  { id: "02", title: "Keep complexity behind the experience.", desc: "The user should only feel speed and intuition, while the heavy lifting happens out of sight." },
  { id: "03", title: "Design for real people.", desc: "We prioritize accessibility, clear navigation, and performance over flashy but unusable trends." },
  { id: "04", title: "Think beyond launch.", desc: "Our systems are engineered to scale, adapt, and remain maintainable years after deployment." },
  { id: "05", title: "Make technology useful.", desc: "Technology is a tool for human progress and commercial success, not an end in itself." }
];

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useSEO({
    title: "About Us — NEORIZ Solutions",
    description: "Learn about NEORIZ Solutions, our approach, and our principles for building premium digital platforms.",
    url: "https://inteleurosolutions.com/about"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "120px" }}>
        
        {/* 1. Hero */}
        <section className="about-hero" style={{ padding: "80px 0 120px 0", background: "var(--nr-soft-white)" }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px", fontSize: "0.875rem" }}>
                Who is NEORIZ?
              </div>
              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3.5rem, 6vw, 6rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "40px", maxWidth: "900px" }}>
                We Build What Businesses <span style={{ background: "var(--nr-gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Move Toward.</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* 2. The NEORIZ Perspective */}
        <section style={{ padding: "120px 0", background: "var(--nr-white)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px" }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                  Technology should not exist just for appearance.
                </h2>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.6, marginBottom: "24px" }}>
                  It must solve real problems, simplify operations, and support growth. At NEORIZ Solutions, we believe in creating digital experiences that create measurable business value.
                </p>
                <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>
                  Our approach combines deep technical engineering with premium aesthetic design to deliver scalable, intelligent digital systems.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. What We Build & 4. Built Around Real Problems */}
        <section style={{ padding: "120px 0", background: "var(--nr-deep-navy)", color: "var(--nr-white)", overflow: "hidden" }}>
          <div className="container" style={{ position: "relative" }}>
            {/* Directional geometry background */}
            <div style={{ position: "absolute", top: 0, right: "-10%", width: "40vw", height: "40vw", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%", opacity: 0.5 }}></div>
            
            <div style={{ maxWidth: "800px", marginBottom: "80px", position: "relative", zIndex: 2 }}>
              <div style={{ color: "var(--nr-teal)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.875rem" }}>
                Built Around Real Problems
              </div>
              <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                From Idea to System.
              </h2>
              <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginTop: "24px", lineHeight: 1.6 }}>
                We don't begin with technology. We begin with understanding the business challenge, mapping the solution, and only then architecting the code.
              </p>
            </div>

            {/* 5. From Idea to System Narrative Sequence */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", position: "relative", zIndex: 2 }}>
              {["IDEA", "CLARITY", "STRATEGY", "DESIGN", "TECHNOLOGY", "SOLUTION"].map((step, idx, arr) => (
                <motion.div 
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <div style={{ padding: "16px 24px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", fontWeight: 600, letterSpacing: "0.05em" }}>
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <div style={{ color: "var(--nr-teal)", fontWeight: 700 }}>→</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Company Values */}
        <section style={{ padding: "120px 0", background: "var(--nr-soft-white)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em" }}>
                Our Principles.
              </h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", maxWidth: "900px", margin: "0 auto" }}>
              {values.map((val, idx) => (
                <motion.div 
                  key={val.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{ display: "flex", gap: "32px", alignItems: "baseline", padding: "40px", background: "var(--nr-white)", borderRadius: "16px", border: "1px solid var(--nr-light-gray)" }}
                >
                  <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--nr-blue)" }}>{val.id}</div>
                  <div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "12px" }}>{val.title}</h3>
                    <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.6, margin: 0 }}>{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Page CTA */}
        <section style={{ padding: "120px 0", background: "var(--nr-white)", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "32px", letterSpacing: "-0.02em" }}>
              Ready to see what we can build?
            </h2>
            <MagneticButton>
              <Link to="/solutions" className="btn-primary" style={{ background: "var(--nr-deep-navy)", color: "var(--nr-white)", padding: "16px 40px", borderRadius: "100px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "1.125rem", textDecoration: "none" }}>
                Explore Our Solutions
                <span style={{ fontSize: "1.2em" }}>→</span>
              </Link>
            </MagneticButton>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
