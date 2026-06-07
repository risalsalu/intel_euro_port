import React from "react";
import { motion } from "framer-motion";

export default function ScrollingMarquee({ items = [] }) {
  // Triple the items to make sure it covers the screen width and loops seamlessly
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee-track"
        animate={{ x: [0, -1000] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
