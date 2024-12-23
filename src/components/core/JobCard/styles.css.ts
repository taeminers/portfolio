import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    borderRadius: "8px",
    width: "300px",
    flexShrink: 0,
    background: "white",
    padding: "20px",
    scale: 0.95,
  },
  variants: {
    selected: {
      true: {
        scale: 1,
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const topSection = style({
  width: "100%",
});

export const linkWrapper = style({
  border: "1px solid lightgrey",
  padding: "4px 8px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "box-shadow 300ms ease-in-out, color 300ms ease-in-out",
  ":hover": {
    boxShadow: "0 0 40px 40px black inset",
    color: "white",
  },
});

export const logoWrapper = style({
  outline: "1px solid lightgrey",
  borderRadius: "100%",
  padding: "6px",
});

export const companyLogo = style({
  borderRadius: "100%",
});

export const chip = style({
  background: "lightgrey",
  color: "black",
  fontSize: "12px",
  padding: "8px",
  borderRadius: "4px",
});

export const separator = style({
  width: "100%",
  height: "1px",
  background: "lightgrey",
  marginTop: "20px",
  marginBottom: "10px",
});

export const duration = style({
  fontSize: "10px",
  color: "black",
  fontWeight: "200",
});
