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
    {/* Translucent Liquid Movement Background Orbs */}
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "5%",
        width: "45vw",
        height: "45vw",
        maxWidth: 600,
        maxHeight: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255, 42, 133, 0.12) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        animation: "float1 15s ease-in-out infinite",
        zIndex: 0,
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "30%",
        right: "0%",
        width: "50vw",
        height: "50vw",
        maxWidth: 700,
        maxHeight: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(181, 53, 246, 0.12) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        animation: "float2 18s ease-in-out infinite",
        zIndex: 0,
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
        className="hero-title fade-up"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(3rem, 7vw, 6.5rem)",
          fontWeight: 800,
          lineHeight: 0.95,
          margin: "0 0 40px",
          letterSpacing: "-0.04em",
          textAlign: "center",
          animation: "fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          opacity: 0,
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
