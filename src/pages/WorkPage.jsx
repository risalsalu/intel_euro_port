import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import MagneticButton from "../components/MagneticButton";
import { projectsData } from "../data/portfolioData";
import ProjectCard from "../components/portfolio/ProjectCard";
import ProjectFilter from "../components/portfolio/ProjectFilter";
import FeaturedProject from "../components/portfolio/FeaturedProject";

const CATEGORIES = [
  "All",
  "Healthcare",
  "Hospitality",
  "Commerce",
  "Education",
  "Lifestyle",
  "Creative",
  "Technology",
  "Travel",
  "Real Estate"
];

import useSEO from "../hooks/useSEO";

export default function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useSEO({
    title: "Selected Work — NEORIZ Solutions",
    description: "Explore our portfolio of premium digital platforms, custom software, and modern web applications.",
    url: "https://inteleurosolutions.com/work"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Determine projects to show based on filter
  const filteredProjects = projectsData.filter(project => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  // If viewing 'All', separate featured projects from the regular grid
  const showFeaturedLayout = activeCategory === "All";
  const featuredProjects = showFeaturedLayout ? filteredProjects.filter(p => p.featured).slice(0, 2) : [];
  
  // The rest of the projects (if All, exclude the ones shown as featured; otherwise show all filtered)
  const gridProjects = showFeaturedLayout 
    ? filteredProjects.filter(p => !featuredProjects.some(fp => fp.id === p.id))
    : filteredProjects;

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "120px", background: "var(--nr-soft-white)", minHeight: "100vh" }}>
        
        {/* Work Hero */}
        <section className="bg-grid-pattern bg-radial-gradient" style={{ padding: "120px 0 80px 0" }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: "900px" }}>
              <div style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "24px", fontSize: "0.8125rem" }}>
                Our Portfolio
              </div>
              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3.5rem, 7vw, 6rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: "32px" }}>
                ONE APPROACH.<br />
                MANY POSSIBILITIES.
              </h1>
              <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.7, maxWidth: "600px", letterSpacing: "0.01em" }}>
                Every project starts with a different business problem. We build engineered digital experiences tailored for varying industries and objectives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Discovery Filter */}
        <section style={{ padding: "0 0 60px 0" }}>
          <div className="container">
            <ProjectFilter 
              categories={CATEGORIES} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>
        </section>

        {/* Projects Display */}
        <section style={{ padding: "0 0 120px 0" }}>
          <div className="container">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Featured Projects (Only shown when "All" is selected) */}
                {showFeaturedLayout && featuredProjects.length > 0 && (
                  <div style={{ marginBottom: "120px" }}>
                    {featuredProjects.map((project, index) => (
                      <FeaturedProject key={project.id} project={project} reversed={index % 2 !== 0} />
                    ))}
                  </div>
                )}

                {/* Grid Projects */}
                {gridProjects.length > 0 ? (
                  <div className="grid-system grid-2-col" style={{ rowGap: "80px" }}>
                    {gridProjects.map((project, idx) => (
                      <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: "80px 0", textAlign: "center", color: "var(--nr-medium-gray)" }}>
                    <p style={{ fontSize: "1.25rem" }}>No projects found in this category.</p>
                    <button 
                      onClick={() => setActiveCategory("All")}
                      style={{ background: "none", border: "none", color: "var(--nr-blue)", marginTop: "16px", cursor: "pointer", fontSize: "1rem", fontWeight: 600 }}
                    >
                      View All Projects
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* Cross-Page CTA */}
        <section style={{ padding: "120px 0", background: "var(--nr-white)", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "48px", letterSpacing: "-0.03em" }}>
              Ready to start your project?
            </h2>
            <MagneticButton>
              <Link to="/contact" className="btn-primary">
                Start a Project
                <span className="btn-arrow" style={{ fontSize: "1.2em", marginLeft: "8px" }}>→</span>
              </Link>
            </MagneticButton>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
