import { style } from "@vanilla-extract/css";

export const container = style({
  background: "white",
  borderRadius: "8px",
  width: "300px",
  flexShrink: 0,
});

export const mainContentWrapper = style({
  padding: "12px 16px 0px 16px",
  marginBottom: "10px",
});

export const imageWrapper = style({
  width: "100%",
  padding: "16px",
  background: "black",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  // borderRadius: "8px",
});

export const bottomSection = style({
  borderRadius: "0 0 8px 8px",
  padding: "16px",
  background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, grey 100%)",
  width: "100%",
});
