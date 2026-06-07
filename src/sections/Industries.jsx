import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/portfolioData";

const industriesList = [
  { id: "ind-1", name: "Healthcare", description: "Clinics, diagnostics, and patient portals.", filter: "Healthcare" },
  { id: "ind-2", name: "Restaurant", description: "Food photography, ordering, and reservations.", filter: "Restaurant" },
  { id: "ind-3", name: "E-Commerce", description: "Digital storefronts and optimized checkouts.", filter: "E-Commerce" },
  { id: "ind-4", name: "Food-Delivery", description: "Learning dashboards and hostel food delivery systems.", filter: "Hostel Food Delivery" },
  { id: "ind-5", name: "Wedding Digital", description: "Custom digital invitations and RSVP management.", filter: "Wedding Invitation Digital" },
  { id: "ind-6", name: "Creative Arts", description: "Fine art, calligraphy, and luxury showrooms.", filter: "Calligraphy & Artwork" },
  { id: "ind-7", name: "Fashion", description: "Bespoke lookbooks and campaign storytelling.", filter: "Fashion & Lifestyle" },
  { id: "ind-8", name: "Technology", description: "Curriculums, SaaS, and platform dashboards.", filter: "Technology" }
];

export default function Industries() {
  const [activeInd, setActiveInd] = useState(industriesList[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Get projects related to hovered industry
  const relatedProjects = projectsData.filter(proj => proj.industry === activeInd.filter);

  return (
    <section ref={sectionRef} className="industries-section" style={{ background: "#FFFFFF", padding: "120px 0", borderTop: "1px solid #EAEAEA" }} id="industries">
      <div className="container">
        <div style={{ marginBottom: "60px" }}>
          <div className="section-label">Focus Areas</div>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-description" style={{ color: "#6B6B6B" }}>
            We build specialized products tailored to the technical requirements and compliance standards of each sector.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px" }} className="about-inner">

          {/* Left: Industries List */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {industriesList.map((ind) => (
              <div
                key={ind.id}
                onMouseEnter={() => setActiveInd(ind)}
                style={{
                  padding: "24px 0",
                  borderBottom: "1px solid #EAEAEA",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                      fontWeight: "600",
                      letterSpacing: "-0.02em",
                      color: activeInd.id === ind.id ? "#000000" : "#A3A3A3",
                      transition: "color 0.3s ease"
                    }}
                  >
                    {ind.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#6B6B6B",
                      marginTop: "4px",
                      opacity: activeInd.id === ind.id ? 1 : 0.6,
                      transition: "opacity 0.3s ease"
                    }}
                  >
                    {ind.description}
                  </p>
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    color: activeInd.id === ind.id ? "#000000" : "#D4D4D4",
                    transform: activeInd.id === ind.id ? "translateX(5px)" : "none",
                    transition: "all 0.3s ease"
                  }}
                >
                  →
                </div>
              </div>
            ))}
          </div>

          {/* Right: Dynamic Related Projects Preview */}
          <div
            style={{
              background: "#FAFAFA",
              borderRadius: "16px",
              padding: "40px",
              border: "1px solid #EAEAEA",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "450px"
            }}
          >
            <div className="section-label" style={{ marginBottom: "20px" }}>Related Showcase</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeInd.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                    {activeInd.name} Solutions
                  </h4>

                  {relatedProjects.length > 0 ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      {relatedProjects.map((proj) => {
                        const slug = proj.name.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
                        return (
                          <Link
                            key={proj.id}
                            to={`/project/${slug}`}
                            style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "inherit" }}
                            className="work-item"
                          >
                            <img
                              src={proj.image}
                              alt={proj.name}
                              style={{ width: "80px", height: "60px", objectFit: "cover", borderRadius: "6px", border: "1px solid #EAEAEA" }}
                            />
                            <div>
                              <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>{proj.name}</div>
                              <div style={{ fontSize: "0.75rem", color: "#6B6B6B" }}>View Case Study ↗</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p style={{ fontSize: "0.875rem", color: "#6B6B6B" }}>Case studies coming soon.</p>
                  )}
                </div>

                <div style={{ borderTop: "1px solid #EAEAEA", paddingTop: "24px", marginTop: "24px" }}>
                  <p style={{ fontSize: "0.8125rem", color: "#6B6B6B", lineHeight: "1.5" }}>
                    Our custom {activeInd.name} modules target efficiency, secure database integrations, and legacy migration services.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
