import React from "react";

export default function ScrollingMarquee() {
  const items = [
    "DIGITAL PRODUCTS",
    "MODERN WEB",
    "WEB PLATFORMS",
    "CLOUD SYSTEMS",
    "MOBILE EXPERIENCES",
    "BUSINESS AUTOMATION",
    "BUSINESS SYSTEMS",
    "AI SOLUTIONS",
    "AI INTEGRATION",
    "UI/UX DESIGN",
    "E-COMMERCE",
    "CUSTOM SOFTWARE",
    "SAAS PLATFORMS",
    "RESTAURANT TECHNOLOGY",
    "DIGITAL TRANSFORMATION",
    "SCALABLE SYSTEMS",
    "PRODUCT DEVELOPMENT",
    "STARTUP SOLUTIONS",
    "BRAND EXPERIENCES",
    "INTELLIGENT AUTOMATION",
    "IT CONSULTING",
    "STRATEGY & OPERATIONS",
    "CLOUD MIGRATION",
    "CYBERSECURITY",
    "DATA ANALYTICS",
    "ENTERPRISE ARCHITECTURE",
    "TECH ADVISORY",
    "MANAGEMENT CONSULTING"
  ];

  return (
    <div className="marquee-wrapper single-row">
      <div className="marquee-row">
        <div className="marquee-track track-forward-fast">
          {/* Original set */}
          <div className="marquee-content">
            {items.map((item, index) => (
              <React.Fragment key={`orig-${index}`}>
                <div className="marquee-item premium-text">
                  {item}
                </div>
                <div className="marquee-separator">·</div>
              </React.Fragment>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className="marquee-content" aria-hidden="true">
            {items.map((item, index) => (
              <React.Fragment key={`dup-${index}`}>
                <div className="marquee-item premium-text">
                  {item}
                </div>
                <div className="marquee-separator">·</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
