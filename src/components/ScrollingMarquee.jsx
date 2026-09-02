import React from "react";

export default function ScrollingMarquee() {
  const items = [
    { text: "DIGITAL PRODUCTS", emphasize: true },
    { text: "MODERN WEB" },
    { text: "WEB PLATFORMS", emphasize: true },
    { text: "CLOUD SYSTEMS" },
    { text: "MOBILE EXPERIENCES" },
    { text: "BUSINESS AUTOMATION" },
    { text: "BUSINESS SYSTEMS", emphasize: true },
    { text: "AI SOLUTIONS", emphasize: true },
    { text: "AI INTEGRATION" },
    { text: "UI/UX DESIGN" },
    { text: "E-COMMERCE" },
    { text: "CUSTOM SOFTWARE", emphasize: true },
    { text: "SAAS PLATFORMS" },
    { text: "RESTAURANT TECHNOLOGY" },
    { text: "DIGITAL TRANSFORMATION" },
    { text: "SCALABLE SYSTEMS" },
    { text: "PRODUCT DEVELOPMENT" },
    { text: "STARTUP SOLUTIONS" },
    { text: "BRAND EXPERIENCES" },
    { text: "INTELLIGENT AUTOMATION" }
  ];

  return (
    <div className="marquee-wrapper single-row">
      <div className="marquee-row">
        <div className="marquee-track track-forward-fast">
          {/* Original set */}
          <div className="marquee-content">
            {items.map((item, index) => (
              <React.Fragment key={`orig-${index}`}>
                <div className={`marquee-item premium-text ${item.emphasize ? 'emphasized' : ''}`}>
                  {item.text}
                </div>
                <div className="marquee-separator">·</div>
              </React.Fragment>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className="marquee-content" aria-hidden="true">
            {items.map((item, index) => (
              <React.Fragment key={`dup-${index}`}>
                <div className={`marquee-item premium-text ${item.emphasize ? 'emphasized' : ''}`}>
                  {item.text}
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
