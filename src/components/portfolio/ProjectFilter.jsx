import React from "react";
import { motion } from "framer-motion";

export default function ProjectFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      gap: "12px", 
      marginBottom: "60px",
      alignItems: "center"
    }}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          style={{
            background: "none",
            border: "none",
            padding: "8px 16px",
            fontSize: "0.9375rem",
            fontWeight: 500,
            cursor: "pointer",
            position: "relative",
            color: activeCategory === category ? "var(--nr-deep-navy)" : "var(--nr-medium-gray)",
            transition: "color 0.3s ease",
            outline: "none"
          }}
          aria-pressed={activeCategory === category}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "var(--nr-blue)",
                borderRadius: "2px"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
