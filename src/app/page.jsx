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

export default function LandingPage() {
  return (
      <div
      style={{
        fontFamily: "'Outfit', system-ui, sans-serif",
        background: C.bg0,
        color: C.textPrimary,
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        
        <section id="platform">
          <Features />
        </section>

        <FullWidthImage
          src="/content-dashboard.png"
          alt="AI City Map Dashboard"
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
          alt="Security Control Room"
          height={440}
        />
        <FooterCTA />
      </main>
      <Footer />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FAF8F4; }
        html { scroll-behavior: smooth; }
        
        /* Mobile vs Desktop Display Utilities */
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; }
          .mobile-hide { display: none !important; }
          .mobile-show { display: block !important; }
          .mobile-flex { display: flex !important; }
          .mobile-stack { flex-direction: column !important; }
          
          /* Hero mobile overrides */
          .hero-title {
            line-height: 1.15 !important;
            font-size: 2.8rem !important;
          }
          
          /* Metric Cards responsive overlay */
          .metric-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            bottom: 12px !important;
            left: 12px !important;
            right: 12px !important;
            gap: 8px !important;
          }
          .metric-card {
            padding: 8px 10px !important;
          }
        }
        
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .metric-grid {
            grid-template-columns: 1fr !important;
            position: relative !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            margin-top: 16px !important;
            padding: 0 16px 16px !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-show { display: none !important; }
          .desktop-grid { display: grid !important; }
        }
        
        .md\\:flex-row { flex-direction: row !important; }
        .md\\:flex-row-reverse { flex-direction: row-reverse !important; }
        @media (max-width: 768px) {
          .md\\:flex-row, .md\\:flex-row-reverse { flex-direction: column !important; }
          .hidden.md\\:flex { display: none !important; }
          .hidden.md\\:block { display: none !important; }
        }
        @media (min-width: 769px) {
          .hidden.md\\:flex { display: flex !important; }
          .hidden.md\\:block { display: block !important; }
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
