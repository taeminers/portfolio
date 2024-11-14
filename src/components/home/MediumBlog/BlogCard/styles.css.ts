import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
});

export const pictureArea = style({
  height: "200px",
  color: "white",
  background: "black",
  outline: "1px dotted gray",
});

export const descriptionArea = style({
  // minHeight: "100px",
  width: "100%",
  fontSize: "11px",
});

export const description = style({
  overflow: "hidden", // Ensure overflow is hidden
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  fontSize: "11px",
  textOverflow: "ellipsis", // Add text overflow ellipsis
  height: "fit-content",
  color: "white",
});
