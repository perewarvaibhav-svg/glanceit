import { C } from "@/constants/designTokens";
import { FeatureCard } from "./FeatureCard";
import { features } from "./featuresData";

export const Features = () => (
  <section style={{ background: C.bg0, padding: "100px 24px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      {/* Left-aligned header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 64,
          maxWidth: 600,
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "rgba(255,25,56,0.09)",
            border: "1px solid rgba(255,25,56,0.26)",
            color: C.coral,
            fontSize: "0.67rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: 999,
            marginBottom: 20,
          }}
        >
          Capabilities
        </span>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 800,
            color: C.textPrimary,
            margin: "0 0 16px",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Intelligence.
          <br />
          Unlocked.
        </h2>
        <p
          style={{
            color: C.textSecondary,
            fontSize: "1rem",
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          Our platform translates raw video into actionable insights, giving you the clarity needed to act instantly.
        </p>
      </div>

      {/* 4-column feature grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "48px 32px",
        }}
      >
        {features.map((f, i) => (
          <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </div>
    </div>
  </section>
);
