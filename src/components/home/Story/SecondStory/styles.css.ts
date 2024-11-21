import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "40px 80px",
  display: "flex",
  flexDirection: "column",
  gap: "120px",
  paddingBottom: "200px",
  cursor: "pointer",
});

export const name = style({
  fontSize: "100px",
  fontWeight: 600,
  width: "fit-content",
  background: "linear-gradient(90deg, #9845E8 0%, #33D2FF 50% , #DD5789 100%)", // Corrected color codes
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});
