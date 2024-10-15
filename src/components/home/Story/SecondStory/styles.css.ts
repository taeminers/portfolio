import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "0px 120px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "120px",
});

export const imageWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
