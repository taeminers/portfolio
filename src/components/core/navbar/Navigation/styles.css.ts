import { style } from "@vanilla-extract/css";

export const container = style({
  background: "rgba(255, 255, 255, 0.2)",
  // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1), 0 0 20px 10px rgba(255, 255, 255, 0.5)", // Add a larger blur radius for the edges
  // backdropFilter: "blur(105px)",
  height: "200px",
  width: "700px",
  borderRadius: "0 0 1000px 1000px",
});
