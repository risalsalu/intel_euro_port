import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export default function RelatedProjects({ currentProject, allProjects }) {
  // Find related projects (same category, not the current one)
  let related = allProjects.filter(p => p.category === currentProject.category && p.slug !== currentProject.slug);
  
  // If not enough related projects in the same category, fill with others
  if (related.length < 2) {
    const others = allProjects.filter(p => p.category !== currentProject.category && p.slug !== currentProject.slug);
    related = [...related, ...others].slice(0, 2);
  } else {
    related = related.slice(0, 2);
  }

  if (related.length === 0) return null;

  return (
    <section style={{ background: "#FAFAFA", padding: "100px 0" }}>
      <div className="container">
        <div className="section-label">Showcase</div>
        <h2 className="section-title" style={{ marginBottom: "50px", fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
          Related Work
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px 40px" }}>
          {related.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
