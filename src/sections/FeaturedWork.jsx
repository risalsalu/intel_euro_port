import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";

export default function FeaturedWork() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  // Filter only featured projects
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <section ref={containerRef} className="work" id="work" style={{ background: "var(--nr-soft-white)" }}>
      <div className="container">
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "120px", flexWrap: "wrap", gap: "24px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              Selected Work
            </div>
            <h2 className="section-title" style={{ margin: 0, fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.05 }}>
              Proof of <br/>Performance.
            </h2>
          </motion.div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "160px", marginBottom: "120px" }}>
          {featuredProjects.map((project, index) => {
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="editorial-project-card"
              >
                <Link to={`/project/${project.slug}`} data-cursor="case-study" style={{ display: "block", marginBottom: "56px", borderRadius: "24px", overflow: "hidden", aspectRatio: "16/9", background: "var(--nr-light-gray)", position: "relative" }}>
                  <motion.img 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={project.image} 
                    alt={project.name} 
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                  />
                  {/* Premium overlay for depth */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 40%)", pointerEvents: "none" }}></div>
                </Link>
                
                <div className="editorial-project-info">
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--nr-blue)" }}>{String(index + 1).padStart(2, '0')}</span>
                      <span style={{ width: "24px", height: "1px", background: "var(--nr-light-gray)" }}></span>
                      <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-medium-gray)" }}>{project.industry}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: 0 }}>
                      <Link to={`/project/${project.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{project.name}</Link>
                    </h3>
                    
                    {/* Metrics / Results block if available */}
                    {project.results && project.results.length > 0 && (
                      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px" }}>
                        {project.results.slice(0, 2).map((r, i) => (
                          <div key={i} style={{ background: "var(--nr-white)", padding: "16px 24px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)" }}>
                            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--nr-blue)", marginBottom: "4px" }}>{r.number}</div>
                            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-medium-gray)", fontWeight: 600 }}>{r.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "8px" }}>
                    <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.6, marginBottom: "32px", maxWidth: "540px" }}>
                      {project.overview || project.description}
                    </p>
                    <div>
                      <MagneticButton>
                        <Link to={`/project/${project.slug}`} className="hover-arrow-link" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "0.9375rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-deep-navy)", textDecoration: "none" }}>
                          View Case Study <span style={{ fontSize: "1.2em", transition: "transform 0.3s ease" }}>→</span>
                        </Link>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div style={{ textAlign: "center" }}>
          <MagneticButton>
            <Link to="/work" className="btn-primary" style={{ padding: "16px 48px", fontSize: "1rem", borderRadius: "100px" }}>
              Explore All Projects <span className="btn-arrow" style={{ fontSize: "1.2em", marginLeft: "8px" }}>→</span>
            </Link>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
