import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "40px 80px",
  display: "flex",
  flexDirection: "column",
  gap: "120px",
});

export const name = style({
  fontSize: "100px",
  fontWeight: 600,
  width: "fit-content",
  background: "linear-gradient(90deg, #28313B 0%, #485461 50% , #ffffff 100%)", // Corrected color codes
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export const locationLottie = style({
  width: "50px",
  height: "50px",
});

export const outlinkButton = style({
  cursor: "pointer",
});
