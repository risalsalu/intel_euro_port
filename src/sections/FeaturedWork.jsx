import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/portfolioData";

export default function FeaturedWork() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const calculateScroll = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      const padding = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--container-padding')) || 80;
      const calculatedMax = Math.max(0, trackWidth - viewportWidth + padding);
      setMaxScroll(calculatedMax);
    };

    calculateScroll();
    
    window.addEventListener("load", calculateScroll);
    window.addEventListener("resize", calculateScroll);
    
    return () => {
      window.removeEventListener("load", calculateScroll);
      window.removeEventListener("resize", calculateScroll);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${maxScroll}px`]);

  return (
    <section ref={targetRef} className="work-scroll-container" style={{ position: "relative", height: "350vh" }}>
      {/* Sticky viewport frame */}
      <div 
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
        <div className="container" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 0" }}>
          
          {/* Header titles */}
          <div className="work-header" style={{ marginBottom: "40px", flexShrink: 0, paddingLeft: "var(--container-padding)" }}>
            <div>
              <div className="section-label">Portfolio Showcase</div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0", letterSpacing: "-0.03em" }}>
                Featured Projects
              </h2>
            </div>
            <div className="work-header-right" style={{ fontSize: "0.875rem", color: "#6B6B6B" }}>
              Selected cases — Scroll down to browse
            </div>
          </div>

          {/* Horizontal Track container */}
          <motion.div 
            ref={trackRef}
            style={{ x, display: "flex", gap: "48px", paddingLeft: "var(--container-padding)", paddingRight: "var(--container-padding)" }} 
            className="work-horizontal-track"
          >
            {projectsData.map((project) => {
              // Create dynamic URL slug
              const slug = project.name.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
              return (
                <div 
                  key={project.id} 
                  style={{ width: "450px", flexShrink: 0 }}
                  className="horizontal-project-card"
                >
                  <Link 
                    to={`/project/${slug}`}
                    className="work-item"
                    data-cursor="case-study"
                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                  >
                    <div className="work-item-card" style={{ border: "1px solid #EAEAEA", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", transition: "all 0.6s var(--ease-out-expo)" }}>
                      
                      {/* Image block */}
                      <div className="work-item-image" style={{ aspectRatio: "1.4", overflow: "hidden", position: "relative" }}>
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1.2s var(--ease-out-expo)" }}
                        />
                        <div className="work-item-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.01) 100%)" }} />
                      </div>

                      {/* Content details */}
                      <div className="work-item-info" style={{ padding: "28px" }}>
                        <div className="work-item-meta" style={{ marginBottom: "12px" }}>
                          <span className="work-item-tag" style={{ fontSize: "10px", padding: "4px 12px", background: "#F5F5F5", borderRadius: "100px", color: "#525252" }}>
                            {project.industry}
                          </span>
                        </div>
                        <h3 className="work-item-name" style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px", letterSpacing: "-0.01em" }}>{project.name}</h3>
                        <p className="work-item-desc" style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: "1.5", marginBottom: "20px" }}>{project.description}</p>
                        
                        <div className="work-item-btn" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          View Case Study <span style={{ marginLeft: "4px" }}>→</span>
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
