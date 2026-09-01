import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";

export default function FeaturedWork() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  // Slice to only show top 4 projects as featured
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section ref={containerRef} className="work" id="work" style={{ padding: "120px 0", background: "var(--nr-soft-white)" }}>
      <div className="container">
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", flexWrap: "wrap", gap: "24px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ color: "var(--nr-teal)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.875rem" }}>
              Selected Work
            </div>
            <h2 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>
              Proof of <br/>Performance.
            </h2>
          </motion.div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "80px", marginBottom: "80px" }}>
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(12, 1fr)", 
                  gap: "32px",
                  alignItems: "center"
                }}
                className="featured-project-row"
              >
                {/* Image Column */}
                <div style={{ 
                  gridColumn: isEven ? "1 / 8" : "6 / 13", 
                  gridRow: 1,
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                  position: "relative",
                  aspectRatio: "16/10",
                  backgroundColor: "var(--nr-light-gray)"
                }}>
                  <Link to={`/project/${project.slug}`} style={{ display: "block", width: "100%", height: "100%" }}>
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      src={project.image} 
                      alt={project.name} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                    />
                  </Link>
                </div>

                {/* Content Column */}
                <div style={{ 
                  gridColumn: isEven ? "8 / 13" : "1 / 6",
                  gridRow: 1,
                  padding: "0 20px",
                  zIndex: 2
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--nr-blue)" }}>{project.id}</span>
                    <span style={{ width: "24px", height: "1px", background: "var(--nr-light-gray)" }}></span>
                    <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-medium-gray)" }}>{project.industry}</span>
                  </div>
                  
                  <h3 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "16px", lineHeight: 1.2 }}>
                    <Link to={`/project/${project.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {project.name}
                    </Link>
                  </h3>
                  
                  <p style={{ color: "var(--nr-medium-gray)", fontSize: "1.125rem", lineHeight: 1.6, marginBottom: "32px" }}>
                    {project.description}
                  </p>

                  <MagneticButton>
                    <Link to={`/project/${project.slug}`} className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "100px", border: "1px solid var(--nr-light-gray)", color: "var(--nr-deep-navy)", fontWeight: 600 }}>
                      View Case Study <span style={{ fontSize: "1.2em" }}>→</span>
                    </Link>
                  </MagneticButton>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div style={{ textAlign: "center" }}>
          <MagneticButton>
            <Link to="/work" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 40px", borderRadius: "100px", border: "1px solid var(--nr-deep-navy)", background: "transparent", color: "var(--nr-deep-navy)", fontWeight: 600, fontSize: "1.125rem", textDecoration: "none" }}>
              Explore Our Work <span style={{ fontSize: "1.2em" }}>→</span>
            </Link>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
