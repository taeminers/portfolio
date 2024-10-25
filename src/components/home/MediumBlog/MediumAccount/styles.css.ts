import { style } from "@vanilla-extract/css";

export const container = style({
  flex: "0 0 33%", // Takes up 33% of the available space
  width: "100%",
  flexShrink: 0,
  height: "100%",
  color: "red",
  textAlign: "center",
});
