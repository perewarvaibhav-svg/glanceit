import { ArrowRight } from "lucide-react";
import { C } from "@/constants/designTokens";
import { PrimaryBtn } from "../PrimaryBtn";
import { GhostBtn } from "../GhostBtn";
import { HeroCard } from "./HeroCard";

export const Hero = () => (
  <section
    style={{
      background: C.bg0,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "120px 20px 0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "18%",
        left: "8%",
        width: 380,
        height: 380,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(82,107,70,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "25%",
        right: "6%",
        width: 320,
        height: 320,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }}
    />

    <div
      style={{
        maxWidth: 900,
        width: "100%",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <span
        style={{
          display: "inline-block",
          background: "rgba(82,107,70,0.09)",
          border: "1px solid rgba(82,107,70,0.26)",
          color: C.olive,
          fontSize: "0.67rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "5px 16px",
          borderRadius: 999,
          marginBottom: 40,
        }}
      >
        Now in public beta
      </span>

      <h1
        className="hero-title"
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(3rem, 7vw, 6.5rem)",
          fontWeight: 800,
          lineHeight: 0.95,
          margin: "0 0 40px",
          letterSpacing: "-0.03em",
          textAlign: "center",
        }}
      >
        <span style={{ color: C.textPrimary, display: "block" }}>Know what's happening.</span>
        <span style={{ color: C.coral, display: "block" }}>The moment it matters.</span>
      </h1>

      <p
        style={{
          color: C.textSecondary,
          fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
          lineHeight: 1.8,
          maxWidth: 600,
          margin: "0 auto 44px",
          textAlign: "center",
        }}
      >
        The unified video intelligence platform for modern enterprises. One place to
        connect your cameras, extract actionable KPIs, and eliminate blind spots.
      </p>

      <div
        className="mobile-stack"
        style={{
          display: "flex",
          gap: 14,
          justifyContent: "center",
        }}
      >
        <PrimaryBtn style={{ width: "auto" }}>
          Get Started Free{" "}
          <ArrowRight
            size={15}
            style={{
              display: "inline",
              marginLeft: 6,
              verticalAlign: "middle",
            }}
          />
        </PrimaryBtn>
        <GhostBtn style={{ width: "auto" }}>Watch Demo</GhostBtn>
      </div>
    </div>

    <div
      style={{
        maxWidth: 1060,
        width: "100%",
        marginTop: 80,
        position: "relative",
        zIndex: 1,
      }}
    >
      <HeroCard />
    </div>
  </section>
);
