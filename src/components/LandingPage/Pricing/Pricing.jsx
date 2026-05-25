import { CheckCircle2, Minus } from "lucide-react";
import { C } from "@/constants/designTokens";
import { PrimaryBtn } from "../PrimaryBtn";
import { GhostBtn } from "../GhostBtn";
import { PricingCard } from "./PricingCard";
import { tiers } from "./pricingData";

const rows = [
  { feature: "Users", pro: "Up to 10", ent: "Unlimited", custom: "Unlimited" },
  { feature: "Data sync", pro: "Live", ent: "Live", custom: "Live" },
  {
    feature: "Visualizations",
    pro: "Custom",
    ent: "Custom",
    custom: "White-label",
  },
  { feature: "Support", pro: "Email", ent: "24/7 Phone", custom: "Dedicated" },
  { feature: "SLA guarantees", pro: false, ent: true, custom: true },
  { feature: "On-premise", pro: false, ent: false, custom: true },
  { feature: "Training", pro: false, ent: false, custom: true },
];

export const Pricing = () => (
  <section
    style={{
      background: C.bg1,
      padding: "80px 20px",
      borderTop: `1px solid ${C.border}`,
    }}
  >
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: 56,
        }}
      >
        <div>
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
            Pricing
          </span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              color: C.textPrimary,
              margin: "0 0 12px",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Why choose GlanceIt?
          </h2>
          <p
            style={{
              color: C.textSecondary,
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 400,
            }}
          >
            Flexible plans designed to grow with your business.
          </p>
        </div>
        <span
          style={{
            background: "rgba(255,25,56,0.09)",
            border: "1px solid rgba(255,25,56,0.26)",
            color: C.coral,
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "6px 18px",
            borderRadius: 999,
          }}
        >
          Compare
        </span>
      </div>

      {/* Mobile-only stack of Pricing Cards */}
      <div className="mobile-show" style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {tiers.map((t, idx) => (
            <PricingCard key={idx} tier={t} />
          ))}
        </div>
      </div>

      {/* Desktop-only comparison table */}
      <div
        className="mobile-hide"
        style={{
          background: C.surface,
          borderRadius: 20,
          border: `1px solid ${C.border}`,
          overflow: "hidden",
        }}
      >
        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            borderBottom: `2px solid ${C.border}`,
          }}
        >
          <div
            style={{
              padding: "28px 32px",
              color: C.textMuted,
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Feature
          </div>
          {[
            { name: "Pro", price: "$299/mo", highlight: false },
            { name: "Enterprise", price: "$899/mo", highlight: true },
            { name: "Custom", price: "Talk to us", highlight: false },
          ].map((t) => (
            <div
              key={t.name}
              style={{
                padding: "28px 24px",
                borderLeft: `1px solid ${C.border}`,
                background: t.highlight
                  ? "rgba(82,107,70,0.05)"
                  : "transparent",
                position: "relative",
              }}
            >
              {t.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: C.olive,
                  }}
                />
              )}
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: C.textPrimary,
                  marginBottom: 4,
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  color: t.highlight ? C.olive : C.textMuted,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {t.price}
              </div>
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              borderBottom:
                i < rows.length - 1 ? `1px solid ${C.border}` : "none",
            }}
          >
            <div
              style={{
                padding: "18px 32px",
                color: C.textSecondary,
                fontSize: "0.9rem",
              }}
            >
              {r.feature}
            </div>
            {[r.pro, r.ent, r.custom].map((val, j) => (
              <div
                key={j}
                style={{
                  padding: "18px 24px",
                  borderLeft: `1px solid ${C.border}`,
                  background: j === 1 ? "rgba(82,107,70,0.04)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {val === true ? (
                  <CheckCircle2 size={17} style={{ color: C.olive }} />
                ) : val === false ? (
                  <Minus
                    size={17}
                    style={{ color: C.textMuted, opacity: 0.4 }}
                  />
                ) : (
                  <span style={{ color: C.textSecondary, fontSize: "0.88rem" }}>
                    {val}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* CTA row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            borderTop: `2px solid ${C.border}`,
          }}
        >
          <div style={{ padding: "24px 32px" }} />
          {[false, true, false].map((highlight, i) => (
            <div
              key={i}
              style={{
                padding: "24px 24px",
                borderLeft: `1px solid ${C.border}`,
                background: highlight ? "rgba(82,107,70,0.04)" : "transparent",
              }}
            >
              {highlight ? (
                <PrimaryBtn
                  style={{
                    width: "100%",
                    padding: "10px 20px",
                    fontSize: "0.85rem",
                  }}
                >
                  Get Started
                </PrimaryBtn>
              ) : (
                <GhostBtn
                  style={{
                    width: "100%",
                    padding: "9px 20px",
                    fontSize: "0.85rem",
                  }}
                >
                  Get Started
                </GhostBtn>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
