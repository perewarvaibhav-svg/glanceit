import { C } from "@/constants/designTokens";

export const Testimonial = () => (
  <section
    style={{
      background: C.bg0,
      padding: "100px 24px",
      borderTop: `1px solid ${C.border}`,
    }}
  >
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}
      className="testimonial-grid"
    >
      {/* Left: image */}
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          border: `1px solid ${C.border}`,
          boxShadow: "0 24px 60px rgba(60,45,30,0.08)",
          lineHeight: 0,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=800"
          alt="Abstract forms"
          style={{
            width: "100%",
            height: 460,
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Right: quote */}
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
            marginBottom: 32,
          }}
        >
          Testimonial
        </span>

        <blockquote
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
            fontWeight: 700,
            color: C.textPrimary,
            lineHeight: 1.45,
            margin: "0 0 40px",
            fontStyle: "italic",
          }}
        >
          "GlanceIt has completely transformed how we monitor our facilities. The level of real-time intelligence and accuracy is unparalleled in the industry."
        </blockquote>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              overflow: "hidden",
              border: `2px solid rgba(255,25,56,0.30)`,
              flexShrink: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
              alt="Julianne Sterling"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div
              style={{
                color: C.textPrimary,
                fontWeight: 700,
                fontSize: "0.95rem",
              }}
            >
              Julianne Sterling
            </div>
            <div
              style={{ color: C.textMuted, fontSize: "0.82rem", marginTop: 2 }}
            >
              COO, Global Dynamics
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
