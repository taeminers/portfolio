import { style } from "@vanilla-extract/css";

export const customCursor = style({
  position: "absolute",
  width: "15px",
  height: "15px",
  backgroundColor: "white",
  borderRadius: "50%",
  pointerEvents: "none", // Ensure the custom cursor does not interfere with interactions
  zIndex: 1001,
  transition: "background-color 0.2s ease", // Smooth transition for color change
});

export const customCursorActive = style({
  backgroundColor: "black",
});
