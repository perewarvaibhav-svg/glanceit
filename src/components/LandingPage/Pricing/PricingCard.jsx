import { CheckCircle2 } from "lucide-react";
import { C, GRAD } from "@/constants/designTokens";
import { PrimaryBtn } from "../PrimaryBtn";
import { GhostBtn } from "../GhostBtn";

export const PricingCard = ({ tier }) => (
  <div
    style={{
      background: tier.highlight ? "transparent" : C.surface,
      border: `1px solid ${tier.highlight ? "transparent" : C.border}`,
      borderRadius: 24,
      padding: 36,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      ...(tier.highlight
        ? {
            background: GRAD.subtle,
            border: `1px solid ${C.borderHover}`,
            boxShadow: `0 0 60px rgba(82,107,70,0.10)`,
          }
        : {}),
    }}
  >
    {tier.highlight && (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: GRAD.primary,
        }}
      />
    )}
    {tier.highlight && (
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 20,
          background: C.olive,
          color: "#fff",
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "4px 12px",
          borderRadius: 999,
        }}
      >
        Popular
      </div>
    )}
    <div style={{ marginBottom: 8 }}>
      <h3
        style={{
          fontFamily: "Syne, sans-serif",
          color: C.textPrimary,
          fontWeight: 800,
          fontSize: "1.2rem",
          marginBottom: 4,
        }}
      >
        {tier.name}
      </h3>
      <p style={{ color: C.textMuted, fontSize: "0.85rem" }}>{tier.desc}</p>
    </div>
    <div
      style={{
        fontFamily: "Syne, sans-serif",
        fontSize: "3rem",
        fontWeight: 800,
        color: C.textPrimary,
        margin: "20px 0 24px",
      }}
    >
      {tier.price}
      {tier.price.startsWith("$") && (
        <span
          style={{
            fontSize: "0.9rem",
            color: C.textMuted,
            fontWeight: 400,
            marginLeft: 4,
          }}
        >
          /mo
        </span>
      )}
    </div>
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: "0 0 32px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {tier.features.map((f, j) => (
        <li key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CheckCircle2
            size={16}
            style={{
              color: tier.highlight ? C.olive : C.oliveLight,
              flexShrink: 0,
            }}
          />
          <span style={{ color: C.textSecondary, fontSize: "0.9rem" }}>
            {f}
          </span>
        </li>
      ))}
    </ul>
    {tier.highlight ? (
      <PrimaryBtn style={{ width: "100%" }}>Get Started</PrimaryBtn>
    ) : (
      <GhostBtn style={{ width: "100%" }}>Get Started</GhostBtn>
    )}
  </div>
);
