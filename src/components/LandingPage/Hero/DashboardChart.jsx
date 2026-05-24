import { C } from "@/constants/designTokens";

export const DashboardChart = () => (
  <div
    style={{
      background: C.bg0,
      borderRadius: 14,
      border: `1px solid ${C.border}`,
      padding: 20,
      height: 160,
      overflow: "hidden",
      position: "relative",
    }}
  >
    <div
      style={{
        color: C.textMuted,
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: 16,
      }}
    >
      Analytics Overview
    </div>
    <svg
      width="100%"
      height="110"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.olive} stopOpacity="0.25" />
          <stop offset="100%" stopColor={C.olive} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 C60,60 100,30 160,45 C220,60 260,20 320,30 C360,38 380,25 400,20 L400,100 L0,100 Z"
        fill="url(#chartGrad)"
      />
      <path
        d="M0,80 C60,60 100,30 160,45 C220,60 260,20 320,30 C360,38 380,25 400,20"
        fill="none"
        stroke={C.olive}
        strokeWidth="2"
      />
    </svg>
  </div>
);
