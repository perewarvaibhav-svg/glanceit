import React from "react";
import { C } from "@/constants/designTokens";
import { Navbar } from "@/components/LandingPage/Navbar";
import { Hero } from "@/components/LandingPage/Hero/Hero";
import { LogoCloud } from "@/components/LandingPage/LogoCloud";
import { Features } from "@/components/LandingPage/Features/Features";
import { ContentSplit } from "@/components/LandingPage/ContentSplit";
import { Pricing } from "@/components/LandingPage/Pricing/Pricing";
import { Testimonial } from "@/components/LandingPage/Testimonial";
import { Steps } from "@/components/LandingPage/Steps/Steps";
import { FooterCTA } from "@/components/LandingPage/FooterCTA";
import { Footer } from "@/components/LandingPage/Footer/Footer";

const FullWidthImage = ({ src, alt, height = 500 }) => (
  <div style={{ width: "100%", lineHeight: 0 }}>
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height, objectFit: "cover", display: "block" }}
    />
  </div>
);

export function meta() {
  return [
    { title: "GlanceIt | AI Video Intelligence Platform" },
    { name: "description", content: "GlanceIt is the unified video intelligence platform for modern enterprises. Turn everyday camera feeds into measurable business value and eliminate blind spots." },
    { property: "og:title", content: "GlanceIt | AI Video Intelligence Platform" },
    { property: "og:description", content: "The unified video intelligence platform for modern enterprises. Connect your cameras, extract actionable KPIs, and eliminate blind spots." },
    { property: "og:image", content: "https://glanceit.vercel.app/hero-dashboard.png" },
    { property: "og:url", content: "https://glanceit.vercel.app" },
    { name: "twitter:card", content: "summary_large_image" }
  ];
}

export default function LandingPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GlanceIt",
    "operatingSystem": "Web Browser",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "49.00",
      "priceCurrency": "USD"
    },
    "description": "GlanceIt is the unified video intelligence platform for modern enterprises. Turn everyday camera feeds into measurable business value.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "84"
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Outfit', system-ui, sans-serif",
        background: C.bg0,
        color: C.textPrimary,
        minHeight: "100vh",
      }}
    >
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />

        <section id="platform">
          <Features />
        </section>

        <FullWidthImage
          src="/content-dashboard.png"
          alt="GlanceIt AI Security Camera Dashboard"
          height={480}
        />

        <section id="solutions">
          <ContentSplit
            badge="Real-time AI"
            title="Turn everyday camera feeds into measurable business value."
            subtitle="Because critical insights are hidden in plain sight, and businesses shouldn't miss them. We understand what your cameras see."
            points={[
              "Eliminate blind spots in physical environments",
              "Replace reactive monitoring with proactive intelligence",
              "Instant smart alerts",
              "Actionable KPI extraction from video",
            ]}
            image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=900"
            reverse={false}
          />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="resources">
          <Testimonial />
          <Steps />
        </section>

        <FullWidthImage
          src="/footer-dashboard.png"
          alt="GlanceIt Security Control Room"
          height={440}
        />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}
