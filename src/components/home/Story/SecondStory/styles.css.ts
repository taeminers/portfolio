import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "20px 120px",
  display: "flex",
  flexDirection: "column",
  gap: "120px",
});

export const name = style({
  fontSize: "52px",
  fontWeight: 700,
  background: "linear-gradient(90deg, white 0%, red 100%)", // Corrected color codes
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export const gradientText = style({
  background: "linear-gradient(90deg, #FJJ593 0%, #BC7198 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
});
