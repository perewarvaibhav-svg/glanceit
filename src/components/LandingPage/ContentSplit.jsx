import { ArrowRight, CheckCircle2 } from "lucide-react";
import { C } from "@/constants/designTokens";
import { PrimaryBtn } from "./PrimaryBtn";

export const ContentSplit = ({
  badge,
  title,
  subtitle,
  points,
  image,
  reverse,
}) => (
  <section
    style={{ background: reverse ? C.bg1 : C.bg0, padding: "100px 24px" }}
  >
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 72,
        alignItems: "center",
      }}
      className={`md:flex-row${reverse ? "-reverse" : ""}`}
    >
      {/* Text */}
      <div style={{ flex: 1 }}>
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
            padding: "4px 14px",
            borderRadius: 999,
            marginBottom: 24,
          }}
        >
          {badge}
        </span>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            color: C.textPrimary,
            margin: "0 0 16px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: C.textSecondary,
            lineHeight: 1.8,
            marginBottom: 28,
            fontSize: "1rem",
          }}
        >
          {subtitle}
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 36px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {points.map((p, i) => (
            <li
              key={i}
              style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
            >
              <CheckCircle2
                size={18}
                style={{ color: C.olive, marginTop: 2, flexShrink: 0 }}
              />
              <span
                style={{
                  color: C.textSecondary,
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                }}
              >
                {p}
              </span>
            </li>
          ))}
        </ul>
        <PrimaryBtn>
          Read More{" "}
          <ArrowRight
            size={15}
            style={{
              display: "inline",
              marginLeft: 6,
              verticalAlign: "middle",
            }}
          />
        </PrimaryBtn>
      </div>
      {/* Image */}
      <div
        style={{
          flex: 1,
          borderRadius: 20,
          overflow: "hidden",
          border: `1px solid ${C.border}`,
          boxShadow: "0 32px 80px rgba(60,45,30,0.08)",
        }}
      >
        <img
          src={image}
          alt={badge}
          style={{
            width: "100%",
            height: 440,
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  </section>
);
