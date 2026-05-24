import { GRAD } from "@/constants/designTokens";

export const PrimaryBtn = ({ children, style = {} }) => (
  <button
    style={{
      background: GRAD.primary,
      color: "#fff",
      border: "none",
      padding: "14px 32px",
      borderRadius: 999,
      fontWeight: 700,
      fontSize: "0.95rem",
      cursor: "pointer",
      letterSpacing: "0.02em",
      transition: "opacity 0.2s, transform 0.2s",
      ...style,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.opacity = "0.85";
      e.currentTarget.style.transform = "scale(1.03)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.opacity = "1";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    {children}
  </button>
);
