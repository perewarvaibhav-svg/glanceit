import { C } from "@/constants/designTokens";

const companies = ["Vercel", "Linear", "Stripe", "Notion", "Figma"];

export const LogoCloud = () => (
  <section
    style={{
      background: C.bg1,
      borderTop: `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`,
      padding: "40px 24px",
    }}
  >
    <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
      <p
        style={{
          color: C.textMuted,
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: 28,
        }}
      >
        Trusted by leading teams worldwide
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px 48px",
          opacity: 0.35,
        }}
      >
        {companies.map((n) => (
          <span
            key={n}
            style={{
              color: C.textPrimary,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "0.04em",
            }}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  </section>
);
