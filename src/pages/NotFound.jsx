import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomCursor from "../components/CustomCursor";

export default function NotFound() {
  return (
    <>
      <CustomCursor />
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
          background: "#FFFFFF",
          color: "#000000",
          padding: "40px",
          fontFamily: "var(--font-primary, sans-serif)",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#737373",
              marginBottom: "24px",
              display: "block"
            }}
          >
            404 — Page Not Found
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: "700",
              letterSpacing: "-0.04em",
              lineHeight: "1.05",
              marginBottom: "24px"
            }}
          >
            This page has been relocated.
          </h1>
          <p
            style={{
              color: "#6B6B6B",
              fontSize: "1.125rem",
              lineHeight: "1.7",
              marginBottom: "40px"
            }}
          >
            The link you followed may be broken or the page might have been removed. Let's redirect you back to the portfolio showcase.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Link
              to="/"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                background: "#000000",
                color: "#FFFFFF",
                fontSize: "0.875rem",
                fontWeight: "600",
                letterSpacing: "0.02em",
                borderRadius: "100px",
                border: "1px solid #000000",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
            >
              Back to Portfolio <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
