import { useState } from "react";
import { C, GRAD } from "@/constants/designTokens";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";

export const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/xpwzgdbv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company }),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      style={{
        background: C.bg0,
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "45vw",
          height: "45vw",
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,42,133,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(181,53,246,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="waitlist-grid"
      >
        {/* Left: Copy */}
        <div>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,42,133,0.10)",
              border: "1px solid rgba(255,42,133,0.25)",
              color: C.coral,
              fontSize: "0.67rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "5px 16px",
              borderRadius: 999,
              marginBottom: 24,
            }}
          >
            Early Access
          </span>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: C.textPrimary,
              margin: "0 0 20px",
              lineHeight: 1.1,
            }}
          >
            Be first to experience{" "}
            <span
              style={{
                background: GRAD.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GlanceIt.
            </span>
          </h2>
          <p
            style={{
              color: C.textSecondary,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              margin: "0 0 40px",
            }}
          >
            We're onboarding a limited number of enterprise partners in our private beta.
            Join the waitlist to get priority access, exclusive pricing, and direct support from our founding team.
          </p>

          {/* Perks */}
          {[
            "Priority access before public launch",
            "Locked-in early adopter pricing",
            "Direct onboarding support",
            "Influence the product roadmap",
          ].map((perk) => (
            <div
              key={perk}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 14,
              }}
            >
              <CheckCircle size={18} color={C.coral} />
              <span style={{ color: C.textSecondary, fontSize: "0.95rem" }}>{perk}</span>
            </div>
          ))}
        </div>

        {/* Right: Form */}
        <div
          style={{
            background: C.bg2,
            border: `1px solid ${C.border}`,
            borderRadius: 24,
            padding: "40px 36px",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎉</div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: C.textPrimary,
                  margin: "0 0 12px",
                }}
              >
                You're on the list!
              </h3>
              <p style={{ color: C.textMuted, lineHeight: 1.7 }}>
                We'll reach out with your early access invite as soon as a spot opens up. Keep an eye on your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: C.textPrimary,
                  margin: "0 0 8px",
                }}
              >
                Join the Waitlist
              </h3>
              <p style={{ color: C.textMuted, fontSize: "0.9rem", margin: "0 0 28px" }}>
                Free to join. No credit card required.
              </p>

              {[
                { label: "Full Name", placeholder: "Vaibhav Perewar", value: name, setter: setName, type: "text" },
                { label: "Work Email", placeholder: "you@company.com", value: email, setter: setEmail, type: "email" },
                { label: "Company Name", placeholder: "Acme Inc.", value: company, setter: setCompany, type: "text" },
              ].map(({ label, placeholder, value, setter, type }) => (
                <div key={label} style={{ marginBottom: 18 }}>
                  <label
                    style={{
                      display: "block",
                      color: C.textSecondary,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    style={{
                      width: "100%",
                      background: C.bg1,
                      border: `1px solid ${C.border}`,
                      borderRadius: 10,
                      padding: "12px 16px",
                      color: C.textPrimary,
                      fontSize: "0.95rem",
                      outline: "none",
                      boxSizing: "border-box",
                      fontFamily: "'Inter', sans-serif",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(255,42,133,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = C.border)}
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: GRAD.primary,
                  border: "none",
                  borderRadius: 12,
                  padding: "14px",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 700,
                  fontFamily: "'Inter', sans-serif",
                  cursor: loading ? "wait" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  opacity: loading ? 0.7 : 1,
                  transition: "opacity 0.2s, transform 0.2s",
                  marginTop: 8,
                }}
                onMouseEnter={(e) => !loading && (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {loading ? "Submitting..." : "Request Early Access"}
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
