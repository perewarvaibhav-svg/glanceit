import { C, GRAD } from "@/constants/designTokens";

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
        <svg
          width="32"
          height="32"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
        >
          <defs>
            <linearGradient id="gBrandGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d66" />
              <stop offset="30%" stopColor="#ff1938" />
              <stop offset="100%" stopColor="#b3001b" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 10 75 L 10 40 C 10 20 25 10 45 10 L 90 10 C 95 10 100 15 100 25 L 100 90 C 100 95 95 100 90 100 L 35 100 L 10 75 Z M 40 80 L 40 70 L 75 70 L 75 50 L 40 50 L 40 35 C 40 32 42 30 45 30 L 80 30 L 80 80 L 40 80 Z"
            fill="url(#gBrandGradFooter)"
          />
          <circle cx="60" cy="40" r="7" fill="url(#gBrandGradFooter)" />
        </svg>
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
