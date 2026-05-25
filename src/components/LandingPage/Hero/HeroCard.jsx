import { C } from "@/constants/designTokens";

export const HeroCard = () => (
  <div
    style={{
      borderRadius: "20px 20px 0 0",
      overflow: "hidden",
      border: `1px solid ${C.border}`,
      borderBottom: "none",
      boxShadow: `0 -8px 80px rgba(82,107,70,0.12), 0 0 0 1px ${C.border}`,
      background: C.bg2,
    }}
  >
    {/* Browser chrome */}
    <div
      style={{
        background: C.bg2,
        borderBottom: `1px solid ${C.border}`,
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {["#EF4444", "#F59E0B", "#10B981"].map((c) => (
        <div
          key={c}
          style={{ width: 11, height: 11, borderRadius: "50%", background: c }}
        />
      ))}
      <div
        style={{
          flex: 1,
          margin: "0 14px",
          background: C.bg0,
          borderRadius: 6,
          height: 24,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
        }}
      >
        <span style={{ color: C.textMuted, fontSize: "0.68rem" }}>
          app.glanceit.ai/dashboard
        </span>
      </div>
    </div>

    {/* Landscape image with overlay */}
    <div style={{ position: "relative", lineHeight: 0, minHeight: 380 }}>
      <img
        src="/hero-dashboard.png"
        alt="AI Video Dashboard"
        style={{
          width: "100%",
          height: 380,
          objectFit: "cover",
          objectPosition: "top center",
          display: "block",
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(248,249,250,0.0) 30%, rgba(248,249,250,0.70) 100%)",
        }}
      />
      {/* Dashboard metrics overlay */}
      <div
        className="metric-grid"
        style={{
          position: "absolute",
          bottom: 24,
          left: 24,
          right: 24,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
        }}
      >
        {[
          { label: "Active Cameras", value: "1,204", change: "+45 Feeds" },
          { label: "Incidents Detected", value: "482", change: "-12% Avg" },
          { label: "Response Time", value: "<200ms", change: "Real-time" },
          { label: "AI Accuracy", value: "99.98%", change: "Verified" },
        ].map((m, i) => (
          <div
            key={i}
            className="metric-card"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: 12,
              border: `1px solid rgba(33,37,41,0.10)`,
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div
              style={{
                color: C.textMuted,
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {m.label}
            </div>
            <div
              style={{
                color: C.textPrimary,
                fontSize: "1.15rem",
                fontWeight: 800,
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.1,
              }}
            >
              {m.value}
            </div>
            <div
              style={{ fontSize: "0.7rem", fontWeight: 600, color: C.coral, lineHeight: 1.2 }}
            >
              {m.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
