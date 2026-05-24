import { C } from "@/constants/designTokens";

const activities = [
  ["Deploy", "2m ago"],
  ["Sync", "8m ago"],
  ["Alert", "1h ago"],
];

export const DashboardActivity = () => (
  <div
    style={{
      background: C.bg0,
      borderRadius: 14,
      border: `1px solid ${C.border}`,
      padding: 20,
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
      Activity
    </div>
    {activities.map(([a, t]) => (
      <div
        key={a}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "9px 0",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <span style={{ color: C.textSecondary, fontSize: "0.8rem" }}>{a}</span>
        <span style={{ color: C.textMuted, fontSize: "0.72rem" }}>{t}</span>
      </div>
    ))}
  </div>
);
