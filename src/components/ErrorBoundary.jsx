import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an uncaught error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
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
              System Error
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "700",
                letterSpacing: "-0.04em",
                lineHeight: "1.1",
                marginBottom: "24px"
              }}
            >
              An unexpected error has occurred.
            </h1>
            <p
              style={{
                color: "#6B6B6B",
                fontSize: "1.0625rem",
                lineHeight: "1.6",
                marginBottom: "40px"
              }}
            >
              We encountered a runtime application error. This has been logged, and we suggest returning to the home screen.
            </p>
            <button
              onClick={this.handleReset}
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
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#262626";
                e.currentTarget.style.borderColor = "#262626";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#000000";
                e.currentTarget.style.borderColor = "#000000";
              }}
            >
              Go to Home Screen <span style={{ transition: "transform 0.3s ease" }}>→</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
