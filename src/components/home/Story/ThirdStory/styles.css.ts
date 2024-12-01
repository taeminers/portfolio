import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  background: "black",
  color: "black",
  padding: "40px 60px",
  overflow: "hidden",
  marginBottom: "150px",
});

export const contentWrapper = style({
  display: "flex",
  gap: "20px",
  "@media": {
    "screen and (max-width: 920px)": {
      flexDirection: "column",
    },
  },
});

export const featured = style({
  // flex: "0 0 33%", // Takes up 33% of the available space
  backgroundColor: "red", // Example background color
});

export const grid = style({
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gridAutoRows: "minmax(100px, auto)",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    },
    "screen and (max-width: 480px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    },
  },
});

export const featuredImage = style({
  width: "100%",
  minHeight: "500px",
  flexShrink: 0,
});
