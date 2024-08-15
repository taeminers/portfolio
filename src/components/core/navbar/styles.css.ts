import { style, keyframes } from "@vanilla-extract/css";

const dimming = keyframes({
  "0%": { opacity: 0 },
  "50%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const container = style({
  width: "100%",
  padding: "30px 200px",
  boxSizing: "border-box",
  alignItems: "center",
  marginTop: "20px",
  position: "fixed",
  zIndex: 100,
  animation: `${dimming} 10s ease-in-out`,
});

export const wrapper = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 60px",
});

export const scrolledWrapper = style({
  border: "1px solid white",
  borderRadius: "100px",
  display: "flex",
  justifyContent: "space-between",
  padding: "18px 58px",
});
