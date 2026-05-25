import { C } from "@/constants/designTokens";

export const FeatureCard = ({ icon, title, desc }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: "rgba(82,107,70,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: C.olive,
      }}
    >
      {icon}
    </div>
    <h3
      style={{
        color: C.textPrimary,
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700,
        fontSize: "1rem",
        margin: 0,
        lineHeight: 1.3,
      }}
    >
      {title}
    </h3>
    <p
      style={{
        color: C.textSecondary,
        fontSize: "0.88rem",
        lineHeight: 1.7,
        margin: 0,
      }}
    >
      {desc}
    </p>
  </div>
);
