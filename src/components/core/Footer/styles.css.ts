import { style } from "@vanilla-extract/css";

export const container = style({
  height: "100vh",
  width: "100%",
  padding: "16px",
});

export const wrapper = style({
  background: "white",
  width: "100%",
  height: "100%",
  borderRadius: "16px",
  padding: "16px",
  position: "relative",
});

export const content = style({
  height: "100%",
  width: "100%",
});

export const bottomTabs = style({
  position: "absolute",
  bottom: "0",
  left: "0",
  padding: "40px 120px",
  width: "100%",
});

export const tabWrap = style({
  width: "100%",
});
