import { style } from "@vanilla-extract/css";

export const content = style({
  textAlign: "center",
  width: "50%",
  lineHeight: "100%",
});

export const separator = style({
  width: "35%",
  height: "1px",
  background: "white",
});

export const opened = style({
  // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1), 0 0 20px 10px rgba(255, 255, 255, 0.5)", // Add a larger blur radius for the edges
  // backdropFilter: "blur(105px)",
  width: "700px",
  borderRadius: "0 0 1000px 1000px",
});
