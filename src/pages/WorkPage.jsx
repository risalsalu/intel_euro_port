import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import MagneticButton from "../components/MagneticButton";
import { projectsData } from "../data/portfolioData";

export default function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    document.title = "Selected Work — NEORIZ Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "120px", background: "var(--nr-soft-white)" }}>
        
        {/* Work Hero */}
        <section style={{ padding: "80px 0 80px 0" }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: "800px" }}>
              <div style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px", fontSize: "0.875rem" }}>
                Portfolio
              </div>
              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "32px" }}>
                Selected Work.
              </h1>
              <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>
                A curated selection of digital platforms, applications, and experiences engineered by NEORIZ Solutions for forward-thinking brands.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section style={{ padding: "0 0 120px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "60px 40px" }}>
              {projectsData.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Link to={`/project/${project.slug}`} style={{ display: "block", borderRadius: "16px", overflow: "hidden", marginBottom: "24px", aspectRatio: "16/10", background: "var(--nr-light-gray)" }}>
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={project.image} 
                      alt={project.name} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                    />
                  </Link>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--nr-blue)" }}>{project.id}</span>
                    <span style={{ width: "16px", height: "1px", background: "var(--nr-light-gray)" }}></span>
                    <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-medium-gray)" }}>{project.industry}</span>
                  </div>
                  
                  <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "12px" }}>
                    <Link to={`/project/${project.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {project.name}
                    </Link>
                  </h2>
                  
                  <p style={{ color: "var(--nr-medium-gray)", fontSize: "1.125rem", lineHeight: 1.6, flexGrow: 1 }}>
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Page CTA */}
        <section style={{ padding: "120px 0", background: "var(--nr-white)", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "32px", letterSpacing: "-0.02em" }}>
              Ready to start your project?
            </h2>
            <MagneticButton>
              <Link to="/contact" className="btn-primary" style={{ background: "var(--nr-deep-navy)", color: "var(--nr-white)", padding: "16px 40px", borderRadius: "100px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "1.125rem" }}>
                Get In Touch
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
