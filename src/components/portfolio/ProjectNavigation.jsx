import React from "react";
import { Link } from "react-router-dom";

export default function ProjectNavigation({ prevProject, nextProject }) {
  return (
    <section style={{ borderTop: "1px solid #EAEAEA", borderBottom: "1px solid #EAEAEA" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        
        {/* Previous Project */}
        <div style={{ flex: "1 1 50%", minWidth: "300px", borderRight: "1px solid #EAEAEA" }}>
          {prevProject ? (
            <Link 
              to={`/project/${prevProject.slug}`}
              style={{ display: "block", padding: "60px 40px", textDecoration: "none", color: "inherit", transition: "background 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#FAFAFA"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ fontSize: "0.875rem", color: "#6B6B6B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                ← Previous Project
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em" }}>
                {prevProject.name}
              </h3>
            </Link>
          ) : (
            <div style={{ padding: "60px 40px", height: "100%", display: "flex", alignItems: "center" }}>
              <Link to="/work" style={{ color: "var(--nr-medium-gray)", textDecoration: "none", fontSize: "1rem", fontWeight: 500 }}>
                ← Back to Work
              </Link>
            </div>
          )}
        </div>
        
        {/* Next Project */}
        <div style={{ flex: "1 1 50%", minWidth: "300px", textAlign: "right" }}>
          {nextProject ? (
            <Link 
              to={`/project/${nextProject.slug}`}
              style={{ display: "block", padding: "60px 40px", textDecoration: "none", color: "inherit", transition: "background 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#FAFAFA"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ fontSize: "0.875rem", color: "#6B6B6B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                Next Project →
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em" }}>
                {nextProject.name}
              </h3>
            </Link>
          ) : (
            <div style={{ padding: "60px 40px", height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <Link to="/work" style={{ color: "var(--nr-medium-gray)", textDecoration: "none", fontSize: "1rem", fontWeight: 500 }}>
                Back to Work →
              </Link>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
}
