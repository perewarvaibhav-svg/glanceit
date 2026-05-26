import { C } from "@/constants/designTokens";
import { PrimaryBtn } from "./PrimaryBtn";

export const FooterCTA = () => (
  <section
    style={{
      background: C.bg0,
      padding: "120px 24px",
      borderTop: `1px solid ${C.border}`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse at 50% 100%, rgba(82,107,70,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
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
          marginBottom: 36,
        }}
      >
        Get started today
      </span>

      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: 800,
          color: C.textPrimary,
          margin: 0,
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
        }}
      >
        See the
      </h2>
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: 800,
          color: C.coral,
          margin: "0 0 32px",
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
        }}
      >
        unseen.
      </h2>

      <p
        style={{
          color: C.textSecondary,
          fontSize: "1.05rem",
          lineHeight: 1.8,
          maxWidth: 400,
          margin: "0 auto 48px",
        }}
      >
        Ready to eliminate blind spots and turn everyday camera feeds into measurable business value?
      </p>

      <PrimaryBtn style={{ fontSize: "1rem", padding: "16px 48px" }}>
        Get in touch
      </PrimaryBtn>
    </div>
  </section>
);
