import { style, keyframes } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "0px 20px",
  boxSizing: "border-box",
  alignItems: "center",
  position: "fixed",
  zIndex: 100,
  background: "linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 50%)", // Adjusted gradient background
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
