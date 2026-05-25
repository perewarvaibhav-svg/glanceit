import { C } from "@/constants/designTokens";

export const Footer = () => (
  <footer
    style={{
      background: C.bg2,
      borderTop: `1px solid ${C.border}`,
      padding: "28px 24px",
    }}
  >
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            background: GRAD.primary,
            WebkitMaskImage: 'url(/logo.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: 'url(/logo.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            color: C.textPrimary,
            fontWeight: 800,
            fontFamily: "Syne, sans-serif",
            letterSpacing: "0.05em",
            fontSize: "0.95rem",
          }}
        >
          GLANCEIT
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
        {["Features", "Pricing", "About", "Contact", "Privacy", "Terms"].map(
          (l) => (
            <a
              key={l}
              href="#"
              style={{
                color: C.textMuted,
                textDecoration: "none",
                fontSize: "0.83rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.coral)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              {l}
            </a>
          ),
        )}
      </div>

      {/* Copyright */}
      <p style={{ color: C.textMuted, fontSize: "0.8rem", margin: 0 }}>
        © 2026 GlanceIt
      </p>
    </div>
  </footer>
);
