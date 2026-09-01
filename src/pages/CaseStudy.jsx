import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudiesData } from "../data/caseStudiesData";
import { projectsData } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";
import NotFound from "./NotFound";
import ProjectNavigation from "../components/portfolio/ProjectNavigation";
import RelatedProjects from "../components/portfolio/RelatedProjects";

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = caseStudiesData[slug];

  useEffect(() => {
    if (!project) return;

    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    const setMetaTag = (attrName, attrValue, contentValue) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      let created = false;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
        created = true;
      }
      const previousValue = element.getAttribute("content");
      element.setAttribute("content", contentValue);
      return { element, previousValue, created };
    };

    const setLinkTag = (relValue, hrefValue) => {
      let element = document.querySelector(`link[rel="${relValue}"]`);
      let created = false;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", relValue);
        document.head.appendChild(element);
        created = true;
      }
      const previousValue = element.getAttribute("href");
      element.setAttribute("href", hrefValue);
      return { element, previousValue, created };
    };

    document.title = `${project.name} Case Study — NEORIZ Solutions`;
    if (metaDescription) {
      metaDescription.setAttribute("content", project.overview || `${project.name} case study by NEORIZ Solutions.`);
    }

    const ogUrl = setMetaTag("property", "og:url", `https://inteleurosolutions.com/project/${slug}`);
    const ogTitle = setMetaTag("property", "og:title", `${project.name} Case Study — NEORIZ Solutions`);
    const ogDesc = setMetaTag("property", "og:description", project.overview || `${project.name} case study by NEORIZ Solutions.`);
    const ogImage = setMetaTag("property", "og:image", `https://inteleurosolutions.com${project.image}`);

    const canonical = setLinkTag("canonical", `https://inteleurosolutions.com/project/${slug}`);

    window.scrollTo(0, 0);

    return () => {
      document.title = originalTitle;
      if (metaDescription) {
        metaDescription.setAttribute("content", originalDescription);
      }
      const cleanMeta = (metaInfo) => {
        if (!metaInfo) return;
        if (metaInfo.created) {
          metaInfo.element.remove();
        } else if (metaInfo.previousValue !== null) {
          metaInfo.element.setAttribute("content", metaInfo.previousValue);
        }
      };
      const cleanLink = (linkInfo) => {
        if (!linkInfo) return;
        if (linkInfo.created) {
          linkInfo.element.remove();
        } else if (linkInfo.previousValue !== null) {
          linkInfo.element.setAttribute("href", linkInfo.previousValue);
        }
      };

      cleanMeta(ogUrl);
      cleanMeta(ogTitle);
      cleanMeta(ogDesc);
      cleanMeta(ogImage);
      cleanLink(canonical);
    };
  }, [slug, project]);

  if (!project) return <NotFound />;

  // Find previous and next projects dynamically from projectsData
  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ background: "#FFFFFF", color: "#000000", minHeight: "100vh" }}
    >
      {/* 1. Project Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="container">
          <Link to="/work" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--nr-medium-gray)", textDecoration: "none", marginBottom: "60px", fontSize: "0.875rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            <span>←</span> Back to Portfolio
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px", alignItems: "end", marginBottom: "60px" }}>
            <div>
              <div style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.875rem" }}>
                {project.category} / {project.industry}
              </div>
              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "24px" }}>
                {project.name}
              </h1>
              <p style={{ fontSize: "1.5rem", color: "var(--nr-medium-gray)", lineHeight: 1.4 }}>
                {project.tagline || project.description}
              </p>
            </div>
            <div style={{ textAlign: "right", paddingBottom: "8px" }}>
              {project.website && (
                <MagneticButton>
                  <a href={project.website} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "var(--nr-deep-navy)", color: "var(--nr-white)", padding: "16px 32px", borderRadius: "100px", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}>
                    View Live Experience <span style={{ fontSize: "1.2em" }}>↗</span>
                  </a>
                </MagneticButton>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Full Bleed Visual */}
      <section style={{ marginBottom: "120px" }}>
        <div style={{ width: "100%", height: "80vh", minHeight: "500px", maxHeight: "800px", background: "var(--nr-light-gray)" }}>
          <img src={project.image} alt={project.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
        </div>
      </section>

      {/* 2. Project Information */}
      <section style={{ paddingBottom: "120px" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", borderTop: "1px solid #EAEAEA", borderBottom: "1px solid #EAEAEA", padding: "40px 0" }}>
            <div style={{ flex: "1 1 200px" }}>
              <div style={{ fontSize: "0.875rem", color: "#6B6B6B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Industry</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--nr-deep-navy)" }}>{project.industry}</div>
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <div style={{ fontSize: "0.875rem", color: "#6B6B6B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Project Type</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--nr-deep-navy)" }}>{project.category}</div>
            </div>
            {project.techStack && (
              <div style={{ flex: "2 1 300px" }}>
                <div style={{ fontSize: "0.875rem", color: "#6B6B6B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Technologies</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.techStack.map(tech => (
                    <span key={tech} style={{ padding: "6px 12px", background: "#F5F5F5", borderRadius: "100px", fontSize: "0.875rem", color: "#525252" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. The Story */}
      <section style={{ paddingBottom: "120px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "80px", maxWidth: "900px", margin: "0 auto" }}>
            
            {/* Context */}
            {project.overview && (
              <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "40px" }}>
                <div style={{ fontSize: "0.875rem", color: "var(--nr-blue)", fontWeight: 600, borderTop: "2px solid var(--nr-blue)", paddingTop: "12px" }}>
                  01 —<br/>Context
                </div>
                <div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "var(--nr-deep-navy)", marginBottom: "24px", letterSpacing: "-0.01em" }}>The Background</h3>
                  <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.7 }}>
                    {project.overview}
                  </p>
                </div>
              </div>
            )}

            {/* Challenge */}
            {project.challenge && (
              <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "40px" }}>
                <div style={{ fontSize: "0.875rem", color: "var(--nr-blue)", fontWeight: 600, borderTop: "2px solid var(--nr-blue)", paddingTop: "12px" }}>
                  02 —<br/>Challenge
                </div>
                <div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "var(--nr-deep-navy)", marginBottom: "24px", letterSpacing: "-0.01em" }}>The Problem</h3>
                  <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.7, marginBottom: "24px" }}>
                    <strong>Requirements:</strong> {project.challenge.requirements}
                  </p>
                  <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.7 }}>
                    <strong>Business Problem:</strong> {project.challenge.businessProblem}
                  </p>
                </div>
              </div>
            )}

            {/* Approach */}
            {project.strategy && (
              <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "40px" }}>
                <div style={{ fontSize: "0.875rem", color: "var(--nr-blue)", fontWeight: 600, borderTop: "2px solid var(--nr-blue)", paddingTop: "12px" }}>
                  03 —<br/>Approach
                </div>
                <div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "var(--nr-deep-navy)", marginBottom: "24px", letterSpacing: "-0.01em" }}>The Strategy</h3>
                  <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.7, marginBottom: "24px" }}>
                    {project.strategy.uxPlanning}
                  </p>
                  <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.7 }}>
                    {project.strategy.designDecisions}
                  </p>
                </div>
              </div>
            )}

            {/* Solution */}
            {project.features && (
              <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "40px" }}>
                <div style={{ fontSize: "0.875rem", color: "var(--nr-blue)", fontWeight: 600, borderTop: "2px solid var(--nr-blue)", paddingTop: "12px" }}>
                  04 —<br/>Solution
                </div>
                <div>
                  <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "var(--nr-deep-navy)", marginBottom: "32px", letterSpacing: "-0.01em" }}>The Execution</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                    {project.features.map((feature, i) => (
                      <div key={i}>
                        <h4 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px", color: "var(--nr-deep-navy)" }}>{feature.title}</h4>
                        <p style={{ fontSize: "1rem", color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Navigation & Related */}
      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
      <RelatedProjects currentProject={project} allProjects={projectsData} />
      
    </motion.div>
  );
}
