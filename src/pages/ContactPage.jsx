import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import MagneticButton from "../components/MagneticButton";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us — NEORIZ Solutions";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Please enter your project details.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success response simulation
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", projectType: "", message: "" });
    }, 4000);
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
          
          <Link to="/" className="work-item-btn" style={{ textTransform: "none", marginBottom: "40px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <span>←</span> Back to Portfolio
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", marginTop: "20px" }} className="about-inner">
            
            {/* Left Column: Details */}
            <div>
              <div className="section-label">Connect</div>
              <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em", marginBottom: "32px", lineHeight: "1.1" }}>
                Let's construct something<br />significant.
              </h1>
              <p className="section-description" style={{ color: "#6B6B6B", marginBottom: "48px" }}>
                Whether you are a startup needing an MVP, a medical network aiming for secure accessibility, or a luxury merchant setting up e-commerce pipelines, we are ready.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", alignItems: "start", gap: "16px" }}>
                  <div className="service-number" style={{ marginBottom: "0", fontSize: "0.875rem" }}>01</div>
                  <div>
                    <div style={{ fontSize: "0.6875rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#A3A3A3" }}>Email Inquiry</div>
                    <a href="mailto:hello@inteleurosolutions.com" style={{ fontSize: "1.125rem", fontWeight: "600", color: "#000000" }}>hello@inteleurosolutions.com</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "start", gap: "16px" }}>
                  <div className="service-number" style={{ marginBottom: "0", fontSize: "0.875rem" }}>02</div>
                  <div>
                    <div style={{ fontSize: "0.6875rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#A3A3A3" }}>WhatsApp Channel</div>
                    <a href="https://wa.me/917736361739" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.125rem", fontWeight: "600", color: "#000000" }}>+91 7736361739</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "start", gap: "16px" }}>
                  <div className="service-number" style={{ marginBottom: "0", fontSize: "0.875rem" }}>03</div>
                  <div>
                    <div style={{ fontSize: "0.6875rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#A3A3A3" }}>Studio Address</div>
                    <span style={{ fontSize: "1.125rem", fontWeight: "600", color: "#000000" }}>Kochi Infopark, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div style={{ background: "#FAFAFA", border: "1px solid #EAEAEA", borderRadius: "16px", padding: "48px" }}>
              <h2 className="about-value-title" style={{ fontSize: "1.5rem", marginBottom: "32px", letterSpacing: "-0.02em" }}>Submit Project Inquiry</h2>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", flexDirection: "column", gap: "24px" }}
                  >
                    {/* Name input */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#525252" }}>Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        style={{ padding: "14px 18px", border: errors.name ? "1px solid #FF0000" : "1px solid #EAEAEA", borderRadius: "8px", background: "#FFFFFF", fontSize: "0.9375rem", outline: "none", transition: "border-color 0.3s ease" }}
                        placeholder="Your full name"
                        onFocus={(e) => e.target.style.borderColor = "#000000"}
                        onBlur={(e) => e.target.style.borderColor = errors.name ? "#FF0000" : "#EAEAEA"}
                      />
                      {errors.name && <span style={{ fontSize: "0.75rem", color: "#FF0000" }}>{errors.name}</span>}
                    </div>

                    {/* Email input */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#525252" }}>Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        style={{ padding: "14px 18px", border: errors.email ? "1px solid #FF0000" : "1px solid #EAEAEA", borderRadius: "8px", background: "#FFFFFF", fontSize: "0.9375rem", outline: "none", transition: "border-color 0.3s ease" }}
                        placeholder="you@domain.com"
                        onFocus={(e) => e.target.style.borderColor = "#000000"}
                        onBlur={(e) => e.target.style.borderColor = errors.email ? "#FF0000" : "#EAEAEA"}
                      />
                      {errors.email && <span style={{ fontSize: "0.75rem", color: "#FF0000" }}>{errors.email}</span>}
                    </div>

                    {/* Project Type select */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#525252" }}>Project Segment</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        style={{ padding: "14px 18px", border: "1px solid #EAEAEA", borderRadius: "8px", background: "#FFFFFF", fontSize: "0.9375rem", outline: "none", transition: "border-color 0.3s ease", appearance: "none" }}
                        onFocus={(e) => e.target.style.borderColor = "#000000"}
                        onBlur={(e) => e.target.style.borderColor = "#EAEAEA"}
                      >
                        <option value="">Choose a segment...</option>
                        <option value="Healthcare">Healthcare Portal</option>
                        <option value="E-Commerce">E-Commerce Engine</option>
                        <option value="Custom Software">Custom Platform</option>
                        <option value="Design">UI/UX Design</option>
                      </select>
                    </div>

                    {/* Message input */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#525252" }}>Tell us about the project</label>
                      <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        style={{ padding: "14px 18px", border: errors.message ? "1px solid #FF0000" : "1px solid #EAEAEA", borderRadius: "8px", background: "#FFFFFF", fontSize: "0.9375rem", outline: "none", transition: "border-color 0.3s ease", resize: "none" }}
                        placeholder="Brief overview of features, timeline, and goals..."
                        onFocus={(e) => e.target.style.borderColor = "#000000"}
                        onBlur={(e) => e.target.style.borderColor = errors.message ? "#FF0000" : "#EAEAEA"}
                      />
                      {errors.message && <span style={{ fontSize: "0.75rem", color: "#FF0000" }}>{errors.message}</span>}
                    </div>

                    <MagneticButton style={{ marginTop: "12px" }}>
                      <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                        Send Inquiry <span className="btn-arrow" style={{ marginLeft: "6px" }}>→</span>
                      </button>
                    </MagneticButton>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: "center", padding: "40px 0" }}
                  >
                    <div className="stat-number" style={{ fontSize: "3rem", marginBottom: "16px" }}>✓</div>
                    <h3 className="about-value-title" style={{ fontSize: "1.25rem", marginBottom: "10px" }}>Message Received</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: "1.6" }}>
                      Thank you. An engineering representative from NEORIZ Solutions will review your requirements and follow up within 24 business hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
}
