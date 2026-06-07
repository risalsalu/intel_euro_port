import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorState, setCursorState] = useState({
    type: "default", // default, project, case-study, visit, magnetic
    text: ""
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      
      // Look for data-cursor attributes
      const cursorTarget = target.closest("[data-cursor]");
      
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        let text = "";
        if (type === "project") text = "Project";
        if (type === "case-study") text = "View Case";
        if (type === "visit") text = "Visit Site";
        
        setCursorState({ type, text });
      } else {
        // Fallback checks for basic anchors and buttons
        const isInteractive = 
          target.tagName === "A" || 
          target.tagName === "BUTTON" || 
          target.closest("a") || 
          target.closest("button") || 
          target.closest(".service-item") ||
          target.closest(".work-item");

        if (isInteractive) {
          setCursorState({ type: "hover", text: "" });
        }
      }
    };

    const onMouseOut = (e) => {
      // If we move away from standard interactive elements or data-cursors
      setCursorState({ type: "default", text: "" });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    let animationFrameId;
    const updateCursor = () => {
      const lerpFactor = 0.15;
      currentX += (targetX - currentX) * lerpFactor;
      currentY += (targetY - currentY) * lerpFactor;

      if (cursor) {
        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;
        cursor.style.opacity = isVisible ? "1" : "0";
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // Determine classes based on state
  const getCursorClass = () => {
    switch (cursorState.type) {
      case "project":
        return "custom-cursor hover-project";
      case "case-study":
        return "custom-cursor hover-case";
      case "visit":
        return "custom-cursor hover-visit";
      case "magnetic":
        return "custom-cursor hover-magnetic";
      case "hover":
        return "custom-cursor hover";
      default:
        return "custom-cursor";
    }
  };

  return (
    <div
      ref={cursorRef}
      className={getCursorClass()}
      style={{
        transform: "translate(-50%, -50%)",
        position: "fixed",
        pointerEvents: "none",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#000000",
        fontFamily: "var(--font-primary)",
        fontSize: "10px",
        fontWeight: "700",
        letterSpacing: "0.05em",
        textTransform: "uppercase"
      }}
    >
      {cursorState.text && (
        <span style={{ opacity: 1, whiteSpace: "nowrap" }}>
          {cursorState.text}
        </span>
      )}
    </div>
  );
}
