import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  width: "100%",
  padding: "40px 80px",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "20px",
    },
  },
});

export const tab = recipe({
  base: {
    color: "white",
    cursor: "pointer",
    padding: "8px 16px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "@media": {
      "screen and (max-width: 768px)": {
        padding: "8px 12px",
        flexDirection: "column",
      },
    },
  },
  variants: {
    selected: {
      true: {
        background: "rgba(118, 135, 248, 0.17)",
        borderRadius: "8px",
        gap: "8px",
      },
      false: {},
    },
  },
});

export const detailSection = style({
  marginTop: "28px",
  overflowX: "scroll",
  scrollbarColor: "lightgrey transparent",
  scrollbarGutter: "stable",
  scrollbarWidth: "thin",
  paddingBottom: "28px", // Add padding to create space between content and scrollbar
  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      overflowX: "auto",
    },
  },
});
