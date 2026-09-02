import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import MagneticButton from "../components/MagneticButton";
import { projectsData } from "../data/portfolioData";

const solutions = [
  {
    id: "01",
    title: "Digital Experiences",
    desc: "Premium websites and digital experiences built around narrative and performance.",
    problem: "Brands struggle to translate their physical premium feel into a digital environment without sacrificing loading speed.",
    builds: "Immersive landing pages, WebGL experiences, portfolio sites, and luxury brand platforms.",
    projectSlug: "gems-health-center",
    projectLabel: "Healthcare"
  },
  {
    id: "02",
    title: "Web Applications",
    desc: "Interactive applications and platforms designed around complex user workflows.",
    problem: "Users abandon applications that feel slow, confusing, or lack native-like responsiveness on the web.",
    builds: "Client portals, booking systems, dashboards, and progressive web apps (PWAs).",
    projectSlug: "elevate-academy",
    projectLabel: "Education"
  },
  {
    id: "03",
    title: "Business Platforms",
    desc: "Digital systems that support business operations and heavy transactions.",
    problem: "Off-the-shelf software forces businesses to adapt their workflows to the software, instead of the other way around.",
    builds: "E-Commerce engines, multi-vendor marketplaces, and operational management systems.",
    projectSlug: "haya-mart",
    projectLabel: "E-Commerce"
  },
  {
    id: "04",
    title: "Custom Software",
    desc: "Tailored solutions designed around specific, unique business problems.",
    problem: "Legacy systems slow down growth and cannot easily integrate with modern APIs and mobile platforms.",
    builds: "Internal tools, ERP extensions, data visualization suites, and specialized industry software.",
    projectSlug: "maison-estate",
    projectLabel: "Real Estate"
  },
  {
    id: "05",
    title: "UI/UX Systems",
    desc: "Interfaces and design systems focused on absolute usability and clarity.",
    problem: "Inconsistent design across a product ecosystem leads to poor brand perception and slow engineering velocity.",
    builds: "Component libraries, design tokens, wireframing, and comprehensive user experience audits.",
    projectSlug: "restroie",
    projectLabel: "Restaurant"
  }
];

import useSEO from "../hooks/useSEO";

export default function SolutionsPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useSEO({
    title: "Solutions & Capabilities — NEORIZ Solutions",
    description: "Explore our capabilities in building digital experiences, web applications, and custom software for enterprises.",
    url: "https://inteleurosolutions.com/solutions"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getProject = (slug) => projectsData.find(p => p.slug === slug);

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "120px" }}>
        
        {/* Solutions Hero */}
        <section className="bg-grid-pattern bg-radial-gradient" style={{ padding: "120px 0 80px 0" }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: "800px" }}>
              <div style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "24px", fontSize: "0.8125rem" }}>
                Capabilities
              </div>
              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "32px" }}>
                Precision execution across the digital spectrum.
              </h1>
              <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>
                We combine technical depth with premium design to build digital solutions that function as well as they look. Here is what we can build for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions List */}
        <section style={{ padding: "80px 0", background: "var(--nr-white)" }}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
              {solutions.map((sol, idx) => {
                const project = getProject(sol.projectSlug);
                return (
                  <motion.div 
                    key={sol.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid-system grid-2-col"
                    style={{ alignItems: "center" }}
                  >
                    {/* Content */}
                    <div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--nr-blue)", marginBottom: "16px" }}>{sol.id}</div>
                      <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "24px", lineHeight: 1.2 }}>
                        {sol.title}
                      </h2>
                      <p style={{ fontSize: "1.25rem", color: "var(--nr-deep-navy)", marginBottom: "32px", lineHeight: 1.5, fontWeight: 500 }}>
                        {sol.desc}
                      </p>
                      
                      <div style={{ marginBottom: "24px" }}>
                        <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-teal)", marginBottom: "8px" }}>The Problem It Solves</h4>
                        <p style={{ color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>{sol.problem}</p>
                      </div>

                      <div style={{ marginBottom: "40px" }}>
                        <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-teal)", marginBottom: "8px" }}>What Can Be Built</h4>
                        <p style={{ color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>{sol.builds}</p>
                      </div>
                    </div>

                    {/* Related Project Card */}
                    {project && (
                      <div style={{ background: "var(--nr-white)", borderRadius: "24px", padding: "32px", border: "1px solid var(--nr-light-gray)", boxShadow: "var(--nr-shadow-md)" }}>
                        <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--nr-deep-navy)", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Related Work — {sol.projectLabel}
                        </div>
                        <Link to={`/project/${project.slug}`} style={{ display: "block", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
                          <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            src={project.image} 
                            alt={project.name} 
                            style={{ width: "100%", height: "auto", display: "block" }} 
                          />
                        </Link>
                        <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "12px" }}>{project.name}</h3>
                        <p style={{ color: "var(--nr-medium-gray)", lineHeight: 1.6, marginBottom: "24px" }}>{project.description}</p>
                        
                        <Link to={`/project/${project.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--nr-blue)", fontWeight: 600, textDecoration: "none" }}>
                          View Case Study <span>→</span>
                        </Link>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cross-Page CTA */}
        <section className="bg-grid-pattern-dark" style={{ padding: "120px 0", background: "var(--nr-deep-navy)", textAlign: "center", color: "var(--nr-white)" }}>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, marginBottom: "48px", letterSpacing: "-0.03em" }}>
              How do we get there?
            </h2>
            <MagneticButton>
              <Link to="/process" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--nr-white)" }}>
                View Our Process
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
