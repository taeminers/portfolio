import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    borderRadius: "8px",
    width: "300px",
    flexShrink: 0,
    background: "white",
    height: "250px",
  },
  variants: {
    selected: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const mainContentWrapper = style({
  margin: "12px",
  padding: "16px",
  height: "100%",
  background: "pink",
});

export const imageWrapper = style({
  borderRadius: "100%",
});

export const bottomSection = style({
  padding: "6px 16px",
  background: "white",
  width: "100%",
  borderRadius: "0 0 8px 8px",
});
