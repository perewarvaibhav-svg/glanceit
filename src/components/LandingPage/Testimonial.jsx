import { C, GRAD } from "@/constants/designTokens";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "VP Operations, Nexus Logistics",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "GlanceIt's AI video analytics completely transformed our warehouse efficiency. The real-time insights on dock utilization and safety compliance have saved us hundreds of hours.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Security, Apex Retail",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    text: "The best loss prevention platform we've ever used. By integrating GlanceIt with our existing IP cameras, we achieved a 40% reduction in shrinkage within the first quarter.",
  },
  {
    name: "Elena Rodriguez",
    role: "Facility Manager, Horizon Medical",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    text: "Privacy and compliance were our top concerns. GlanceIt delivered secure, edge-processed video intelligence that helps us monitor restricted zones without compromising patient data.",
  }
];

export const Testimonial = () => (
  <section
    style={{
      background: C.bg1,
      padding: "100px 20px",
      position: "relative",
    }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
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
            padding: "5px 16px",
            borderRadius: 999,
            marginBottom: 16,
          }}
        >
          Customer Reviews
        </span>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: C.textPrimary,
            margin: "0 0 16px",
          }}
        >
          Trusted by Industry Leaders
        </h2>
        <p style={{ color: C.textSecondary, fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
          See how enterprises are using our AI video intelligence to optimize their operations.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            style={{
              background: C.bg2,
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} color="#FFD700" fill="#FFD700" />
                ))}
              </div>
              <p
                style={{
                  color: C.textPrimary,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: 32,
                  fontStyle: "italic",
                }}
              >
                "{review.text}"
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <img
                src={review.image}
                alt={review.name}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `2px solid ${C.border}`,
                }}
              />
              <div>
                <div style={{ color: C.textPrimary, fontWeight: 700, fontSize: "0.95rem" }}>
                  {review.name}
                </div>
                <div style={{ color: C.textMuted, fontSize: "0.85rem", marginTop: 2 }}>
                  {review.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
