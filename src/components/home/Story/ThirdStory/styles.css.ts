import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  background: "white",
  color: "black",
  padding: "40px 60px",
});

export const featured = style({
  flex: "0 0 33%", // Takes up 33% of the available space
  backgroundColor: "#f0f0f0", // Example background color
});

export const grid = style({
  flex: "0 0 66%", // Takes up 66% of the available space
  backgroundColor: "#e0e0e0",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
  gridTemplateRows: "repeat(2, 1fr)", // 2 rows
  gap: "10px",
});
export const featuredImage = style({
  border: "1px solid black",
  background: "black",
  width: "100%",
  minHeight: "300px",
});
