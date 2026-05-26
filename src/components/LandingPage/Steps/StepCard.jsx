import { C } from "@/constants/designTokens";

export const StepCard = ({ num, title, desc }) => (
  <div
    style={{
      background: C.bg1,
      border: `1px solid ${C.border}`,
      borderRadius: 20,
      padding: "36px 32px",
      position: "relative",
    }}
  >
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "4.5rem",
        fontWeight: 900,
        color: C.olive,
        opacity: 0.18,
        lineHeight: 1,
        marginBottom: 20,
        letterSpacing: "-0.03em",
      }}
    >
      {num}
    </div>
    <h3
      style={{
        fontFamily: "'Inter', sans-serif",
        color: C.textPrimary,
        fontWeight: 800,
        fontSize: "1.15rem",
        marginBottom: 12,
        letterSpacing: "-0.01em",
      }}
    >
      {title}
    </h3>
    <p
      style={{
        color: C.textSecondary,
        fontSize: "0.9rem",
        lineHeight: 1.75,
        margin: 0,
      }}
    >
      {desc}
    </p>
  </div>
);
