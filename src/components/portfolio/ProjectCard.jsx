import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Link 
        to={`/project/${project.slug}`} 
        className="project-card-image-wrapper"
        data-cursor="case-study"
        style={{ 
          display: "block", 
          borderRadius: "16px", 
          overflow: "hidden", 
          marginBottom: "24px", 
          aspectRatio: "16/10", 
          background: "var(--nr-light-gray)",
          position: "relative"
        }}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={project.image}
          alt={project.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Subtle hover overlay using CSS */}
        <div 
          className="project-card-overlay" 
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 50%)",
            opacity: 0,
            transition: "opacity 0.4s ease"
          }}
        />
      </Link>
      
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--nr-blue)" }}>{project.category}</span>
        <span style={{ width: "16px", height: "1px", background: "var(--nr-light-gray)" }}></span>
        <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-medium-gray)" }}>{project.industry}</span>
      </div>
      
      <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "12px", letterSpacing: "-0.01em" }}>
        <Link to={`/project/${project.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
          {project.name}
        </Link>
      </h2>
      
      <p style={{ color: "var(--nr-medium-gray)", fontSize: "1.125rem", lineHeight: 1.6, flexGrow: 1, marginBottom: "20px" }}>
        {project.description}
      </p>

      <div style={{ marginTop: "auto" }}>
        <Link 
          to={`/project/${project.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "var(--nr-deep-navy)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            textDecoration: "none"
          }}
          className="hover-arrow-link"
        >
          View Case Study <span style={{ transition: "transform 0.3s ease" }}>→</span>
        </Link>
      </div>
    </motion.div>
  );
}
