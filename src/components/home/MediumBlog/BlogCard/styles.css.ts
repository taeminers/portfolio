import { style } from "@vanilla-extract/css";

export const container = style({
  background: "red",
});

export const pictureArea = style({
  borderRadius: "12px 12px 0px 0px",
  height: "200px",
  color: "white",
  background: "red",
});

export const descriptionArea = style({
  background: "lightgrey",
  padding: "16px",
  borderRadius: "0px 0px 12px 12px",
  minHeight: "120px",
});

export const description = style({
  overflow: "hidden", // Ensure overflow is hidden
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  fontSize: "14px",
  textOverflow: "ellipsis", // Add text overflow ellipsis
  height: "fit-content",
});
