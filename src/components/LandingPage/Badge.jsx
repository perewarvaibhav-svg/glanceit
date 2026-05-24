import { C, GRAD } from "@/constants/designTokens";

export const Badge = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      background: GRAD.subtle,
      border: `1px solid ${C.borderHover}`,
      color: C.olive,
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      padding: "5px 14px",
      borderRadius: 999,
      marginBottom: 20,
    }}
  >
    {children}
  </span>
);
