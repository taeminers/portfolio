import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  background: "black",
  color: "black",
  padding: "40px 80px",
  overflow: "hidden",
  marginBottom: "120px",
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
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
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

export const seeMoreBlog = style({
  height: "200px",
  color: "white",
  background:
    "linear-gradient(90deg, rgba(57,45,232,1) 0%, rgba(109,109,244,1) 35%, rgba(0,212,255,1) 100%)",
  outline: "1px dotted gray",
  padding: "16px",
  textAlign: "center",
  cursor: "pointer",
  ":hover": {
    scale: 1.01,
    filter: "brightness(1.1)",
  },
});
