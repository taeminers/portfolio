import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
});

export const pictureArea = style({
  borderRadius: "12px 12px 0px 0px",
  height: "200px",
  color: "white",
  background: "blue",
});

export const descriptionArea = style({
  background: "lightgrey",
  padding: "16px",
  borderRadius: "0px 0px 12px 12px",
  minHeight: "120px",
  width: "100%",
});

export const description = style({
  overflow: "hidden", // Ensure overflow is hidden
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  fontSize: "14px",
  maxWidth: "250px",
  textOverflow: "ellipsis", // Add text overflow ellipsis
  height: "fit-content",
});
