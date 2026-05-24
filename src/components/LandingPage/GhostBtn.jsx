import { C } from "@/constants/designTokens";

export const GhostBtn = ({ children, style = {} }) => (
  <button
    style={{
      background: "transparent",
      color: C.textPrimary,
      border: `1px solid ${C.border}`,
      padding: "13px 30px",
      borderRadius: 999,
      fontWeight: 600,
      fontSize: "0.95rem",
      cursor: "pointer",
      letterSpacing: "0.02em",
      transition: "border-color 0.2s, color 0.2s",
      ...style,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = C.olive;
      e.currentTarget.style.color = C.olive;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = C.border;
      e.currentTarget.style.color = C.textPrimary;
    }}
  >
    {children}
  </button>
);
