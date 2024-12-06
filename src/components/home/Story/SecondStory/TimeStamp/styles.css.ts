import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  width: "100%",
  padding: "40px 80px",
});

export const tab = recipe({
  base: {
    color: "white",
    cursor: "pointer",
    padding: "8px 16px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  variants: {
    selected: {
      true: {
        background: "rgba(118, 135, 248, 0.17)",
        borderRadius: "8px",
      },
      false: {},
    },
  },
});

export const detailSection = style({
  marginTop: "28px",
});
