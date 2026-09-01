import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import MagneticButton from "../components/MagneticButton";

export default function NotFound() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "var(--nr-soft-white)",
          color: "var(--nr-black)",
          padding: "40px",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "600px", marginTop: "80px" }}>
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--nr-blue)",
              marginBottom: "24px",
              display: "block"
            }}
          >
            404 Error
          </span>
          <h1
            style={{
              fontFamily: "var(--nr-font-display)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: "700",
              letterSpacing: "-0.04em",
              lineHeight: "1.05",
              marginBottom: "24px",
              color: "var(--nr-deep-navy)"
            }}
          >
            Page Not Found.
          </h1>
          <p
            style={{
              color: "var(--nr-medium-gray)",
              fontSize: "1.25rem",
              lineHeight: "1.6",
              marginBottom: "40px"
            }}
          >
            The link you followed may be broken or the page might have been removed. Let's get you back to the portfolio.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <MagneticButton>
              <Link
                to="/work"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 36px",
                  background: "var(--nr-deep-navy)",
                  color: "var(--nr-white)",
                  fontSize: "1rem",
                  fontWeight: "600",
                  letterSpacing: "0.02em",
                  borderRadius: "100px",
                  textDecoration: "none"
                }}
              >
                Back to Portfolio <span className="btn-arrow">→</span>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/"
                className="btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 36px",
                  background: "transparent",
                  color: "var(--nr-deep-navy)",
                  fontSize: "1rem",
                  fontWeight: "600",
                  letterSpacing: "0.02em",
                  borderRadius: "100px",
                  border: "1px solid var(--nr-light-gray)",
                  textDecoration: "none"
                }}
              >
                Return Home
              </Link>
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </>
  );
}
