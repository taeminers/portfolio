import { style, keyframes } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "0px 20px",
  paddingTop: "20px",
  boxSizing: "border-box",
  alignItems: "center",
  position: "fixed",
  zIndex: 100,
  background: "linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 50%)", // Adjusted gradient background
});

export const opened = style({
  background: "rgba(255, 255, 255, 0.2)",
  // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1), 0 0 20px 10px rgba(255, 255, 255, 0.5)", // Add a larger blur radius for the edges
  // backdropFilter: "blur(105px)",
  height: "200px",
  width: "700px",
  borderRadius: "0 0 1000px 1000px",
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

export const scrolled = style({});
