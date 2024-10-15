import { style, keyframes } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "0px 20px",
  boxSizing: "border-box",
  alignItems: "center",
  marginTop: "20px",
  position: "fixed",
  zIndex: 100,
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
