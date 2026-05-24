import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { C, GRAD } from "@/constants/designTokens";
import { PrimaryBtn } from "./PrimaryBtn";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(59,130,246,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "none",
          transition: "all 0.3s",
        }}
      >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: C.coral,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontWeight: 900,
                fontSize: "1rem",
                fontFamily: "Syne, sans-serif",
              }}
            >
              G
            </span>
          </div>
          <span
            style={{
              color: C.textPrimary,
              fontWeight: 800,
              fontSize: "1.1rem",
              fontFamily: "Syne, sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            GLANCEIT
          </span>
        </div>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ gap: 36, alignItems: "center" }}
        >
          {["Platform", "Solutions", "Pricing", "Resources"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                color: C.textSecondary,
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = C.textPrimary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = C.textSecondary)
              }
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: C.textSecondary,
              fontWeight: 500,
              fontSize: "0.875rem",
              cursor: "pointer",
            }}
            className="hidden md:block"
          >
            Login
          </button>
          <PrimaryBtn style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            Get Started
          </PrimaryBtn>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              color: C.textPrimary,
              cursor: "pointer",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: C.bg1,
            borderTop: `1px solid ${C.border}`,
            padding: "20px 24px 28px",
          }}
        >
          {["Platform", "Solutions", "Pricing", "Resources", "Login"].map(
            (l) => (
              <a
                key={l}
                href="#"
                style={{
                  display: "block",
                  color: C.textSecondary,
                  textDecoration: "none",
                  padding: "12px 0",
                  fontSize: "1rem",
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                {l}
              </a>
            ),
          )}
          <PrimaryBtn
            style={{ marginTop: 20, width: "100%", display: "block" }}
          >
            Get Started
          </PrimaryBtn>
        </div>
      )}
    </nav>
  );
};
