import { style, keyframes } from "@vanilla-extract/css";

// Define keyframes for flickering effect
const flicker = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const container = style({
  width: "100vw",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  backgroundColor: "black",
  gap: "6px",
});

export const text = style({
  position: "relative",
  zIndex: 1,
  animation: `${flicker} 7s ease-in-out`,
});
