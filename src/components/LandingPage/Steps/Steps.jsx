import { C } from "@/constants/designTokens";
import { StepCard } from "./StepCard";
import { steps } from "./stepsData";

export const Steps = () => (
  <section
    style={{
      background: C.bg0,
      padding: "100px 24px",
      borderTop: `1px solid ${C.border}`,
    }}
  >
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: 56,
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              color: C.textPrimary,
              margin: "0",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Proactive,
            <br />
            Not Reactive.
          </h2>
        </div>
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
            marginTop: 8,
          }}
        >
          How it works
        </span>
      </div>

      {/* Step cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {steps.map((s, i) => (
          <StepCard key={i} num={s.num} title={s.title} desc={s.desc} />
        ))}
      </div>
    </div>
  </section>
);
