import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "../MagneticButton";

export default function FeaturedProject({ project, reversed = false }) {
  return (
    <div className={`featured-project-container ${reversed ? 'reversed' : ''}`}>
      <div className="featured-project-image-col" style={{ order: reversed ? 2 : 1 }}>
        <Link 
          to={`/project/${project.slug}`}
          data-cursor="case-study"
          style={{ display: "block", borderRadius: "24px", overflow: "hidden", aspectRatio: "16/10", background: "var(--nr-light-gray)" }}
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={project.image}
            alt={project.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Link>
      </div>
      
      <div className="featured-project-text-col" style={{ order: reversed ? 1 : 2, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--nr-blue)" }}>Featured</span>
          <span style={{ width: "24px", height: "1px", background: "var(--nr-medium-gray)" }}></span>
          <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-medium-gray)" }}>{project.industry}</span>
        </div>
        
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "20px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          <Link to={`/project/${project.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
            {project.name}
          </Link>
        </h2>
        
        <p style={{ color: "var(--nr-medium-gray)", fontSize: "1.25rem", lineHeight: 1.6, marginBottom: "40px", maxWidth: "480px" }}>
          {project.overview || project.description}
        </p>

        <MagneticButton>
          <Link 
            to={`/project/${project.slug}`}
            className="btn-primary" 
            style={{ 
              background: "var(--nr-deep-navy)", 
              color: "var(--nr-white)", 
              padding: "16px 40px", 
              borderRadius: "100px", 
              fontWeight: 600, 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "12px", 
              fontSize: "1rem" 
            }}
          >
            View Case Study
            <span style={{ fontSize: "1.2em" }}>→</span>
          </Link>
        </MagneticButton>
      </div>
    </div>
  );
}
