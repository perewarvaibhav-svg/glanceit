import { C, GRAD } from "@/constants/designTokens";
import { Store, Factory, Truck, Activity, Building2, HardHat } from "lucide-react";

const industries = [
  {
    icon: <Store size={32} color={C.coral} />,
    title: "Retail Intelligence",
    description: "Transform physical stores with precise foot traffic analysis, queue management, and automated loss prevention protocols.",
    tags: ["Customer Flow", "Loss Prevention", "Queue Analytics"],
  },
  {
    icon: <Factory size={32} color={C.coral} />,
    title: "Manufacturing",
    description: "Enforce strict safety protocols, detect equipment anomalies, and monitor production line efficiency with zero latency.",
    tags: ["Safety Compliance", "Quality Assurance", "Line Efficiency"],
  },
  {
    icon: <Truck size={32} color={C.coral} />,
    title: "Logistics & Warehousing",
    description: "Automate dock management, track fleet vehicles, and optimize inventory movement across complex supply chains.",
    tags: ["Fleet Tracking", "Dock Management", "Inventory Flow"],
  },
  {
    icon: <Activity size={32} color={C.coral} />,
    title: "Healthcare Facilities",
    description: "Ensure patient privacy while monitoring restricted zones, fall detection, and operational hygiene compliance.",
    tags: ["Patient Safety", "Zone Monitoring", "Compliance Audits"],
  },
  {
    icon: <Building2 size={32} color={C.coral} />,
    title: "Corporate Campuses",
    description: "Deploy advanced access control, prevent unauthorized tailgating, and intelligently map space utilization metrics.",
    tags: ["Access Control", "Space Utilization", "Asset Protection"],
  },
  {
    icon: <HardHat size={32} color={C.coral} />,
    title: "Construction Sites",
    description: "Automatically verify PPE compliance, secure site perimeters, and mitigate liability risks through continuous monitoring.",
    tags: ["PPE Verification", "Perimeter Security", "Risk Mitigation"],
  },
];

export const Industries = () => (
  <section
    id="industries"
    style={{
      background: C.bg1,
      padding: "100px 20px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Background glow */}
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60vw",
        height: "40vw",
        maxWidth: 800,
        maxHeight: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(181,53,246,0.07) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />

    <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span
          style={{
            display: "inline-block",
            background: "rgba(181,53,246,0.10)",
            border: "1px solid rgba(181,53,246,0.25)",
            color: C.olive,
            fontSize: "0.67rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "5px 16px",
            borderRadius: 999,
            marginBottom: 20,
          }}
        >
          Built for Every Industry
        </span>
        <h2
          className="fade-up"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: C.textPrimary,
            margin: "0 0 16px",
          }}
        >
          One platform.{" "}
          <span
            style={{
              background: GRAD.primary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Every industry.
          </span>
        </h2>
        <p
          style={{
            color: C.textSecondary,
            fontSize: "1.1rem",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          GlanceIt deploys across any physical environment. If it has a camera, we can make it intelligent.
        </p>
      </div>

      {/* Industry Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {industries.map((industry, i) => (
          <div
            key={i}
            style={{
              background: C.bg2,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: "32px",
              transition: "border-color 0.3s, transform 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(181,53,246,0.40)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{industry.icon}</div>
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: C.textPrimary,
                margin: "0 0 12px",
              }}
            >
              {industry.title}
            </h3>
            <p
              style={{
                color: C.textMuted,
                fontSize: "0.92rem",
                lineHeight: 1.7,
                margin: "0 0 20px",
              }}
            >
              {industry.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {industry.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(255,42,133,0.08)",
                    border: "1px solid rgba(255,42,133,0.18)",
                    color: C.coral,
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    padding: "4px 12px",
                    borderRadius: 999,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
