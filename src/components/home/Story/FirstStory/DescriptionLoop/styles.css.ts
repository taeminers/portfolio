import { style, keyframes } from "@vanilla-extract/css";

// Define the keyframes for the downward animation

// Define the container style
export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  position: "relative",
  overflow: "hidden",
});

// Define the description item style with animation
export const descriptionItem = style({
  margin: "10px 0",
});
