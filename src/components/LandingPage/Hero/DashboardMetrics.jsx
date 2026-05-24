import { C } from "@/constants/designTokens";

const metrics = [
  { label: "Total Assets", value: "24,891", change: "+12.4%" },
  { label: "Active Users", value: "3,204", change: "+8.1%" },
  { label: "Data Points", value: "1.2M", change: "+31%" },
  { label: "Uptime", value: "99.98%", change: "SLA" },
];

export const DashboardMetrics = () => (
  <div
    style={{
      padding: 24,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: 16,
    }}
  >
    {metrics.map((m, i) => (
      <div
        key={i}
        style={{
          background: C.bg0,
          borderRadius: 14,
          border: `1px solid ${C.border}`,
          padding: "20px 18px",
        }}
      >
        <div
          style={{
            color: C.textMuted,
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {m.label}
        </div>
        <div
          style={{
            color: C.textPrimary,
            fontSize: "1.5rem",
            fontWeight: 800,
            fontFamily: "Syne, sans-serif",
            marginBottom: 6,
          }}
        >
          {m.value}
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#10B981",
          }}
        >
          {m.change}
        </div>
      </div>
    ))}
  </div>
);
