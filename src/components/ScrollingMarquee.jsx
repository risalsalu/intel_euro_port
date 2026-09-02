import React from "react";

export default function ScrollingMarquee() {
  const row1Items = [
    "DIGITAL PRODUCTS",
    "MODERN WEB",
    "WEB PLATFORMS",
    "CLOUD SYSTEMS",
    "MOBILE EXPERIENCES",
    "BUSINESS AUTOMATION",
    "BUSINESS SYSTEMS",
    "AI INTEGRATION",
    "UI/UX DESIGN",
    "AI SOLUTIONS"
  ];

  const row2Items = [
    "IDEAS → PRODUCTS",
    "PRODUCTS → PLATFORMS",
    "PLATFORMS → GROWTH"
  ];

  return (
    <div className="marquee-wrapper">
      {/* Row 1: What we build */}
      <div className="marquee-row">
        <div className="marquee-track track-forward">
          {/* Original set */}
          <div className="marquee-content">
            {row1Items.map((item, index) => (
              <React.Fragment key={`r1-orig-${index}`}>
                <div className="marquee-item premium-text">{item}</div>
                <div className="marquee-separator">·</div>
              </React.Fragment>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className="marquee-content" aria-hidden="true">
            {row1Items.map((item, index) => (
              <React.Fragment key={`r1-dup-${index}`}>
                <div className="marquee-item premium-text">{item}</div>
                <div className="marquee-separator">·</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Business Journey */}
      <div className="marquee-row row-2">
        <div className="marquee-track track-reverse">
          {/* Original set */}
          <div className="marquee-content">
            {row2Items.map((item, index) => (
              <React.Fragment key={`r2-orig-${index}`}>
                <div className="marquee-item journey-text">{item}</div>
                <div className="marquee-separator">·</div>
              </React.Fragment>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className="marquee-content" aria-hidden="true">
            {row2Items.map((item, index) => (
              <React.Fragment key={`r2-dup-${index}`}>
                <div className="marquee-item journey-text">{item}</div>
                <div className="marquee-separator">·</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
