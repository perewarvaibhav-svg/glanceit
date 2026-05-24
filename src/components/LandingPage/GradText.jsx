import { GRAD } from "@/constants/designTokens";

export const GradText = ({ children, style = {} }) => (
  <span
    style={{
      background: GRAD.text,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      ...style,
    }}
  >
    {children}
  </span>
);
