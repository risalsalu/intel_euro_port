import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import MagneticButton from "../components/MagneticButton";

import useSEO from "../hooks/useSEO";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    company: "",
    projectType: "", 
    budget: "",
    timeline: "",
    message: "" 
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useSEO({
    title: "Start a Project — NEORIZ Solutions",
    description: "Ready to build something? Contact NEORIZ Solutions to discuss your project requirements.",
    url: "https://inteleurosolutions.com/contact"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Please tell us about your project.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Simulated network delay for UX, but always fails because no backend is configured yet.
    // PRODUCTION REQUIREMENT: Integrate with Formspree, Web3Forms, or custom backend.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitError("Form submission service is not yet configured for production. Please use the email or phone number listed.");
    }, 1500);
  };

  const inputStyle = (error) => ({
    width: "100%",
    padding: "16px 20px",
    border: error ? "1px solid #FF3333" : "1px solid #EAEAEA",
    borderRadius: "12px",
    background: "#FFFFFF",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "var(--font-primary)",
    color: "var(--nr-deep-navy)"
  });

  const labelStyle = {
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "var(--nr-medium-gray)",
    marginBottom: "8px",
    display: "block"
  };

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{ background: "#FFFFFF", color: "#000000", minHeight: "100vh", paddingTop: "140px", paddingBottom: "100px" }}
      >
        <div className="container">
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "80px", marginTop: "40px" }} className="about-inner">
            
            {/* Left Column: Details */}
            <div>
              <div style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px", fontSize: "0.875rem" }}>
                Start a Conversation
              </div>
              <h1 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em", marginBottom: "32px", lineHeight: "1.1", color: "var(--nr-deep-navy)" }}>
                WHAT ARE YOU<br />READY TO BUILD?
              </h1>
              <p className="section-description" style={{ color: "var(--nr-medium-gray)", fontSize: "1.25rem", lineHeight: 1.6, marginBottom: "60px", maxWidth: "480px" }}>
                Whether you have a clear plan or just the beginning of an idea, NEORIZ can help turn it into an engineered digital solution. Let's discuss your objectives.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <div style={{ display: "flex", alignItems: "start", gap: "20px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--nr-soft-white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--nr-blue)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--nr-medium-gray)", marginBottom: "4px" }}>Email Inquiry</div>
                    <a href="mailto:hello@inteleurosolutions.com" style={{ fontSize: "1.25rem", fontWeight: "500", color: "var(--nr-deep-navy)", textDecoration: "none" }}>hello@inteleurosolutions.com</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "start", gap: "20px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--nr-soft-white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--nr-blue)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--nr-medium-gray)", marginBottom: "4px" }}>WhatsApp / Direct</div>
                    <a href="https://wa.me/917736361739" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.25rem", fontWeight: "500", color: "var(--nr-deep-navy)", textDecoration: "none" }}>+91 7736361739</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "start", gap: "20px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--nr-soft-white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--nr-blue)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--nr-medium-gray)", marginBottom: "4px" }}>Headquarters</div>
                    <div style={{ fontSize: "1.25rem", fontWeight: "500", color: "var(--nr-deep-navy)" }}>Kochi / Infopark, Kerala, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div style={{ background: "var(--nr-soft-white)", border: "1px solid var(--nr-light-gray)", borderRadius: "24px", padding: "48px" }}>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "32px", letterSpacing: "-0.02em" }}>Project Inquiry</h2>
                    
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }} noValidate>
                      
                      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                        <div style={{ flex: "1 1 200px" }}>
                          <label style={labelStyle}>Name *</label>
                          <input 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle(errors.name)}
                            placeholder="Full name"
                            onFocus={(e) => e.target.style.borderColor = "var(--nr-deep-navy)"}
                            onBlur={(e) => e.target.style.borderColor = errors.name ? "#FF3333" : "#EAEAEA"}
                            disabled={isSubmitting}
                          />
                          {errors.name && <span style={{ fontSize: "0.75rem", color: "#FF3333", marginTop: "6px", display: "block" }}>{errors.name}</span>}
                        </div>
                        
                        <div style={{ flex: "1 1 200px" }}>
                          <label style={labelStyle}>Email *</label>
                          <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle(errors.email)}
                            placeholder="Email address"
                            onFocus={(e) => e.target.style.borderColor = "var(--nr-deep-navy)"}
                            onBlur={(e) => e.target.style.borderColor = errors.email ? "#FF3333" : "#EAEAEA"}
                            disabled={isSubmitting}
                          />
                          {errors.email && <span style={{ fontSize: "0.75rem", color: "#FF3333", marginTop: "6px", display: "block" }}>{errors.email}</span>}
                        </div>
                      </div>

                      <div>
                        <label style={labelStyle}>Company / Organization (Optional)</label>
                        <input 
                          type="text" 
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          style={inputStyle(false)}
                          placeholder="Your company name"
                          onFocus={(e) => e.target.style.borderColor = "var(--nr-deep-navy)"}
                          onBlur={(e) => e.target.style.borderColor = "#EAEAEA"}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                        <div style={{ flex: "1 1 200px" }}>
                          <label style={labelStyle}>Project Type</label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            style={{ ...inputStyle(false), appearance: "none", cursor: "pointer" }}
                            onFocus={(e) => e.target.style.borderColor = "var(--nr-deep-navy)"}
                            onBlur={(e) => e.target.style.borderColor = "#EAEAEA"}
                            disabled={isSubmitting}
                          >
                            <option value="">Select an option...</option>
                            <option value="Website / Digital Experience">Website / Digital Experience</option>
                            <option value="Web Application">Web Application</option>
                            <option value="Business Platform">Business Platform</option>
                            <option value="Custom Software">Custom Software</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div style={{ flex: "1 1 200px" }}>
                          <label style={labelStyle}>Estimated Budget (Optional)</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            style={{ ...inputStyle(false), appearance: "none", cursor: "pointer" }}
                            onFocus={(e) => e.target.style.borderColor = "var(--nr-deep-navy)"}
                            onBlur={(e) => e.target.style.borderColor = "#EAEAEA"}
                            disabled={isSubmitting}
                          >
                            <option value="">Select range...</option>
                            <option value="<$5k">Under $5k</option>
                            <option value="$5k - $10k">$5k - $10k</option>
                            <option value="$10k - $25k">$10k - $25k</option>
                            <option value="$25k+">$25k+</option>
                            <option value="To be discussed">To be discussed</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={labelStyle}>Project Details *</label>
                        <textarea 
                          name="message" 
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          style={{ ...inputStyle(errors.message), resize: "vertical" }}
                          placeholder="Tell us about your goals, features, and timeline..."
                          onFocus={(e) => e.target.style.borderColor = "var(--nr-deep-navy)"}
                          onBlur={(e) => e.target.style.borderColor = errors.message ? "#FF3333" : "#EAEAEA"}
                          disabled={isSubmitting}
                        />
                        {errors.message && <span style={{ fontSize: "0.75rem", color: "#FF3333", marginTop: "6px", display: "block" }}>{errors.message}</span>}
                      </div>

                      {submitError && (
                        <div style={{ padding: "16px", background: "#FFEBEB", border: "1px solid #FF3333", borderRadius: "8px", color: "#D10000", fontSize: "0.875rem", lineHeight: 1.5 }}>
                          {submitError}
                        </div>
                      )}

                      <div style={{ marginTop: "16px" }}>
                        <MagneticButton disabled={isSubmitting}>
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            style={{ 
                              width: "100%", 
                              background: isSubmitting ? "var(--nr-medium-gray)" : "var(--nr-deep-navy)", 
                              color: "var(--nr-white)", 
                              padding: "20px 40px", 
                              borderRadius: "100px", 
                              fontWeight: 600, 
                              fontSize: "1.125rem",
                              border: "none",
                              cursor: isSubmitting ? "not-allowed" : "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "12px",
                              transition: "background 0.3s ease"
                            }}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="spinner" viewBox="0 0 50 50" style={{ width: "24px", height: "24px", animation: "rotate 2s linear infinite" }}>
                                  <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" stroke="#ffffff" strokeLinecap="round" strokeDasharray="90, 150" style={{ animation: "dash 1.5s ease-in-out infinite" }}></circle>
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                Submit Inquiry <span style={{ fontSize: "1.2em" }}>→</span>
                              </>
                            )}
                          </button>
                        </MagneticButton>
                      </div>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", padding: "60px 0" }}
                  >
                    <div style={{ width: "80px", height: "80px", background: "var(--nr-blue)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                      MESSAGE RECEIVED.
                    </h2>
                    <p style={{ color: "var(--nr-medium-gray)", fontSize: "1.125rem", lineHeight: 1.6, marginBottom: "40px" }}>
                      Thanks for reaching out. We will review your message and get back to you as soon as possible.
                    </p>
                    <MagneticButton>
                      <button 
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", company: "", projectType: "", budget: "", timeline: "", message: "" });
                        }}
                        style={{ background: "transparent", border: "1px solid var(--nr-deep-navy)", color: "var(--nr-deep-navy)", padding: "16px 32px", borderRadius: "100px", fontWeight: 600, cursor: "pointer", fontSize: "1rem" }}
                      >
                        Send Another Inquiry
                      </button>
                    </MagneticButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </motion.div>
      
      {/* Inline styles for spinner animation */}
      <style>{`
        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }
        @keyframes dash {
          0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
        }
      `}</style>
    </>
  );
}
