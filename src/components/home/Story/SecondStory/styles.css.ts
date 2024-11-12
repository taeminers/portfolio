import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "40px 80px",
  display: "flex",
  flexDirection: "column",
  gap: "120px",
  paddingBottom: "200px",
});

export const name = style({
  fontSize: "100px",
  fontWeight: 700,
  background: "linear-gradient(90deg, #9845E8 0%, #33D2FF 55% , #DD5789 100%)", // Corrected color codes
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export const gradientText = style({
  background: "linear-gradient(90deg, #9845E8 0%, #33D2FF 55% ,DD5789 100%)", // Corrected color codes
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
});
