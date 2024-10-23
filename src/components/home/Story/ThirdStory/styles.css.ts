import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  background: "white",
  color: "black",
  padding: "40px 60px",
  overflow: "hidden",
  transition: "height 1s",
});

export const featured = style({
  flex: "0 0 33%", // Takes up 33% of the available space
  backgroundColor: "#f0f0f0", // Example background color
});

export const grid = style({
  flex: "0 0 66%", // Takes up 66% of the available space
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
  gridTemplateRows: "repeat(2, 1fr)", // 2 rows
  gap: "10px",
  gridAutoRows: "1fr", // Ensures each row has equal height
  height: "100%", // Ensures the grid container takes up the full height of its parent
  boxSizing: "border-box",
});

export const featuredImage = style({
  border: "1px solid black",
  background: "black",
  width: "100%",
  minHeight: "500px",
  flexShrink: 0,
});

export const test = style({
  background: "red",
  height: "50vh",
  width: "50vw",
});
