import { C, GRAD } from "@/constants/designTokens";

const stats = [
  { val: "10M+", label: "Hours of Video Analyzed" },
  { val: "99.98%", label: "Detection Accuracy" },
  { val: "3,200+", label: "Active Camera Feeds" },
  { val: "<50ms", label: "Alert Latency" },
];

export const Stats = () => (
  <section
    style={{
      background: C.bg2,
      padding: "80px 24px",
      borderTop: `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`,
    }}
  >
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 40,
        textAlign: "center",
      }}
    >
      {stats.map((s, i) => (
        <div key={i}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "2.6rem",
              fontWeight: 800,
              background: GRAD.text,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: 8,
            }}
          >
            {s.val}
          </div>
          <div
            style={{
              color: C.textMuted,
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);
