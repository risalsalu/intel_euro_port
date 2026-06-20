import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudiesData } from "../data/caseStudiesData";
import { projectsData } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";
import NotFound from "./NotFound";

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = caseStudiesData[slug];

  const otherProjects = projectsData.filter((p) => {
    return p.slug !== slug;
  }).slice(0, 3);

  useEffect(() => {
    if (!project) {
      return;
    }

    // Dynamic SEO Title and Metadata Update
    document.title = `${project.name} Case Study — Intel Euro Solutions`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", `${project.name} case study by Intel Euro Solutions. Detail on strategy, design system, development process, and results.`);
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [slug, project]);

  if (!project) return <NotFound />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="case-study-page"
      style={{ background: "#FFFFFF", color: "#000000", minHeight: "100vh", paddingBottom: "100px" }}
    >
      {/* Back to Home Nav */}
      <div className="container" style={{ paddingTop: "120px" }}>
        <Link to="/" className="work-item-btn" style={{ textTransform: "none", marginBottom: "40px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <span>←</span> Back to Portfolio
        </Link>
      </div>

      {/* 1. Project Hero */}
      <section style={{ paddingTop: "0", paddingBottom: "80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px", alignItems: "end", marginBottom: "60px" }}>
            <div>
              <div className="section-label">{project.industry} Case Study</div>
              <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "16px", letterSpacing: "-0.04em" }}>
                {project.name}
              </h1>
              <p className="section-description" style={{ fontSize: "1.25rem", color: "#6B6B6B" }}>
                {project.tagline}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <MagneticButton>
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit Live Site <span className="btn-arrow">→</span>
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Hero Screenshot */}
          <div className="work-item-image" style={{ width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", border: "1px solid #EAEAEA", marginBottom: "60px" }}>
            <img src={project.image} alt={project.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Overview */}
          <div style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "60px" }}>
            <h2 className="about-value-title" style={{ fontSize: "1.75rem", marginBottom: "20px" }}>Overview</h2>
            <p className="section-description" style={{ maxWidth: "800px" }}>{project.overview}</p>
          </div>
        </div>
      </section>

      {/* 2. The Challenge */}
      <section style={{ background: "#FAFAFA", padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
            <div>
              <div className="section-label">01</div>
              <h3 className="about-value-title" style={{ fontSize: "1.35rem", marginBottom: "12px" }}>The Client Goal</h3>
              <p style={{ fontSize: "0.9375rem", color: "#6B6B6B", lineHeight: "1.6" }}>{project.challenge.requirements}</p>
            </div>
            <div>
              <div className="section-label">02</div>
              <h3 className="about-value-title" style={{ fontSize: "1.35rem", marginBottom: "12px" }}>Business Problem</h3>
              <p style={{ fontSize: "0.9375rem", color: "#6B6B6B", lineHeight: "1.6" }}>{project.challenge.businessProblem}</p>
            </div>
            <div>
              <div className="section-label">03</div>
              <h3 className="about-value-title" style={{ fontSize: "1.35rem", marginBottom: "12px" }}>User Pain Points</h3>
              <p style={{ fontSize: "0.9375rem", color: "#6B6B6B", lineHeight: "1.6" }}>{project.challenge.userChallenges}</p>
            </div>
            <div>
              <div className="section-label">04</div>
              <h3 className="about-value-title" style={{ fontSize: "1.35rem", marginBottom: "12px" }}>Industry Hurdles</h3>
              <p style={{ fontSize: "0.9375rem", color: "#6B6B6B", lineHeight: "1.6" }}>{project.challenge.industryChallenges}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Research & Strategy */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="section-label">Research & Architecture</div>
          <h2 className="section-title" style={{ marginBottom: "50px" }}>Strategy & Discovery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="about-inner">
            <div>
              <div className="about-value" style={{ borderTop: "none" }}>
                <h4 className="about-value-title">UX Flow Mapping</h4>
                <p className="about-value-text">{project.strategy.uxPlanning}</p>
              </div>
              <div className="about-value">
                <h4 className="about-value-title">Information Architecture</h4>
                <p className="about-value-text">{project.strategy.infoArchitecture}</p>
              </div>
            </div>
            <div>
              <div className="about-value" style={{ borderTop: "none" }}>
                <h4 className="about-value-title">Wireframe Ideation</h4>
                <p className="about-value-text">{project.strategy.wireframes}</p>
              </div>
              <div className="about-value">
                <h4 className="about-value-title">Core Design Logic</h4>
                <p className="about-value-text">{project.strategy.designDecisions}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Design System */}
      <section style={{ background: "#FAFAFA", padding: "100px 0" }}>
        <div className="container">
          <div className="section-label">Design Language</div>
          <h2 className="section-title" style={{ marginBottom: "50px" }}>The Design System</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px" }} className="about-inner">
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div>
                <h4 className="about-value-title" style={{ fontSize: "1.1rem" }}>Visual Hierarchy & Scaling</h4>
                <p style={{ color: "#6B6B6B", fontSize: "0.9375rem", lineHeight: "1.6" }}>{project.designSystem.hierarchy}</p>
              </div>
              <div>
                <h4 className="about-value-title" style={{ fontSize: "1.1rem" }}>Layout & Component Structure</h4>
                <p style={{ color: "#6B6B6B", fontSize: "0.9375rem", lineHeight: "1.6" }}>{project.designSystem.components}</p>
              </div>
              <div>
                <h4 className="about-value-title" style={{ fontSize: "1.1rem" }}>Typography Systems</h4>
                <p style={{ color: "#6B6B6B", fontSize: "0.9375rem", lineHeight: "1.6" }}>{project.designSystem.typography}</p>
              </div>
            </div>
            <div style={{ borderLeft: "1px solid #EAEAEA", paddingLeft: "40px" }} className="why-item">
              <div className="about-value" style={{ border: "none", paddingTop: "0" }}>
                <h4 className="about-value-title">Spacing & Layout Grid</h4>
                <p className="about-value-text">{project.designSystem.spacing}</p>
              </div>
              <div className="about-value" style={{ borderBottom: "none" }}>
                <h4 className="about-value-title">Aesthetic Direction</h4>
                <p className="about-value-text">{project.designSystem.philosophy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Development Process */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="section-label">Implementation Journey</div>
          <h2 className="section-title" style={{ marginBottom: "50px" }}>Development Timeline</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
            <div style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "20px" }}>
              <div className="service-number">01</div>
              <h4 className="about-value-title" style={{ fontSize: "1.125rem", marginBottom: "8px" }}>Planning</h4>
              <p style={{ fontSize: "0.8125rem", color: "#6B6B6B", lineHeight: "1.5" }}>{project.process.planning}</p>
            </div>
            <div style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "20px" }}>
              <div className="service-number">02</div>
              <h4 className="about-value-title" style={{ fontSize: "1.125rem", marginBottom: "8px" }}>UI Design</h4>
              <p style={{ fontSize: "0.8125rem", color: "#6B6B6B", lineHeight: "1.5" }}>{project.process.design}</p>
            </div>
            <div style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "20px" }}>
              <div className="service-number">03</div>
              <h4 className="about-value-title" style={{ fontSize: "1.125rem", marginBottom: "8px" }}>Development</h4>
              <p style={{ fontSize: "0.8125rem", color: "#6B6B6B", lineHeight: "1.5" }}>{project.process.development}</p>
            </div>
            <div style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "20px" }}>
              <div className="service-number">04</div>
              <h4 className="about-value-title" style={{ fontSize: "1.125rem", marginBottom: "8px" }}>Testing</h4>
              <p style={{ fontSize: "0.8125rem", color: "#6B6B6B", lineHeight: "1.5" }}>{project.process.testing}</p>
            </div>
            <div style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "20px" }}>
              <div className="service-number">05</div>
              <h4 className="about-value-title" style={{ fontSize: "1.125rem", marginBottom: "8px" }}>Launch</h4>
              <p style={{ fontSize: "0.8125rem", color: "#6B6B6B", lineHeight: "1.5" }}>{project.process.launch}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Key Features */}
      <section style={{ background: "#FAFAFA", padding: "100px 0" }}>
        <div className="container">
          <div className="section-label">Functional Mechanics</div>
          <h2 className="section-title" style={{ marginBottom: "50px" }}>Key Features</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {project.features.map((feature, i) => (
              <div key={i} style={{ padding: "40px", background: "#FFFFFF", border: "1px solid #EAEAEA", borderRadius: "12px" }}>
                <div className="service-number" style={{ marginBottom: "16px" }}>F0{i+1}</div>
                <h4 className="about-value-title" style={{ fontSize: "1.25rem", marginBottom: "10px" }}>{feature.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: "1.6" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="section-label">Architecture</div>
          <h2 className="section-title" style={{ marginBottom: "40px" }}>Technology Stack</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: "600",
                  padding: "12px 30px",
                  background: "#FFFFFF",
                  border: "1px solid #EAEAEA",
                  borderRadius: "100px",
                  cursor: "default",
                  transition: "all 0.3s ease"
                }}
                className="marquee-item"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Results Section */}
      <section style={{ background: "#000000", color: "#FFFFFF", padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-inner">
            <div>
              <div className="section-label" style={{ color: "#888888" }}>The Outcome</div>
              <h2 className="section-title" style={{ color: "#FFFFFF", marginBottom: "20px" }}>Proven Results.</h2>
              <p style={{ color: "#A3A3A3", fontSize: "1.125rem", lineHeight: "1.7" }}>
                Through intentional UX strategy, clean code construction, and continuous testing, we achieved major metrics gains that directly helped the client scale.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {project.results.map((result, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div className="stat-number" style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>{result.number}</div>
                  <div className="stat-label" style={{ color: "#A3A3A3", fontSize: "0.75rem", marginTop: "8px" }}>{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section style={{ background: "#FAFAFA", padding: "100px 0", borderTop: "1px solid #EAEAEA", borderBottom: "1px solid #EAEAEA" }}>
        <div className="container">
          <div className="section-label">Showcase</div>
          <h2 className="section-title" style={{ marginBottom: "50px" }}>More Projects</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {otherProjects.map((p) => {
              return (
                <Link 
                  key={p.id}
                  to={`/project/${p.slug}`}
                  className="work-item"
                  data-cursor="case-study"
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <div className="work-item-card" style={{ border: "1px solid #EAEAEA", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", transition: "all 0.6s var(--ease-out-expo)" }}>
                    <div className="work-item-image" style={{ aspectRatio: "1.5", overflow: "hidden", position: "relative" }}>
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1.2s var(--ease-out-expo)" }}
                      />
                      <div className="work-item-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.01) 100%)" }} />
                    </div>

                    <div className="work-item-info" style={{ padding: "24px" }}>
                      <div className="work-item-meta" style={{ marginBottom: "10px" }}>
                        <span className="work-item-tag" style={{ fontSize: "10px", padding: "4px 12px", background: "#F5F5F5", borderRadius: "100px", color: "#525252" }}>
                          {p.industry}
                        </span>
                      </div>
                      <h3 className="work-item-name" style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px", letterSpacing: "-0.01em" }}>{p.name}</h3>
                      <p className="work-item-desc" style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: "1.5", marginBottom: "20px" }}>{p.description}</p>
                      
                      <div className="work-item-btn" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        View Case Study <span style={{ marginLeft: "4px" }}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Visit Website CTA */}
      <section style={{ padding: "120px 0 60px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-label">Experience The Application</div>
          <h2 className="section-title" style={{ marginBottom: "40px", fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Explore the Live Project.
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }} className="contact-buttons">
            <MagneticButton>
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit Website <span className="btn-arrow">→</span>
              </a>
            </MagneticButton>
            <MagneticButton>
              <Link to="/" className="btn-secondary">
                Back to Portfolio
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
