import { recipe } from "@vanilla-extract/recipes";

// ----------------------------------------------
export const color = {
  "primary-50": { color: "#FFF7F3" },
  "primary-100": { color: "#F8D7C7" },
  "primary-200": { color: "#ffb68d" },
  "primary-300": { color: "#ff955a" },
  "primary-400": { color: "#ff8139" },
  "primary-500": { color: "#ff6108" },
  "primary-600": { color: "#D36229" },
  "primary-700": { color: "#b54506" },
  "primary-800": { color: "#8c3504" },
  "primary-900": { color: "#6b2903" },
  "gray-50": { color: "#F9FAFB" },
  "gray-100": { color: "#F4F6F8" },
  "gray-200": { color: "#DFE3E8" },
  "gray-300": { color: "#C4CDD5" },
  "gray-400": { color: "#B5BFC9" },
  "gray-500": { color: "#919EAB" },
  "gray-600": { color: "#637381" },
  "gray-700": { color: "#454F5B" },
  "gray-800": { color: "#212B36" },
  "gray-900": { color: "#161C24" },
  "base-white": { color: "#FFFFFF" },
  "base-lighter": { color: "#F4F5F7" },
  "base-Indigo": { color: "#151A20" },
  "base-black": { color: "#000000" },
  second: { color: "#3c3c43" },
  "base-mediumblack": { color: "#090B0E" },
  "red-50": { color: "#fce7ea" },
  "red-100": { color: "#f7b5be" },
  "red-200": { color: "#f3919f" },
  "red-300": { color: "#ee5f73" },
  "red-400": { color: "#ea4058" },
  "red-500": { color: "#e5102e" },
  "red-600": { color: "#d00f2a" },
  "red-700": { color: "#a30b21" },
  "red-800": { color: "#7e0919" },
  "red-900": { color: "#600713" },
  "green-50": { color: "#e9faf0" },
  "green-100": { color: "#b9f0d1" },
  "green-200": { color: "#98e8bb" },
  "green-300": { color: "#68de9c" },
  "green-400": { color: "#4bd889" },
  "green-500": { color: "#1ece6b" },
  "green-600": { color: "#1bbb61" },
  "green-700": { color: "#15924c" },
  "green-800": { color: "#11713b" },
  "green-900": { color: "#0d572d" },
  "yellow-50": { color: "#fff9e7" },
  "yellow-100": { color: "#ffebb5" },
  "yellow-200": { color: "#ffe291" },
  "yellow-300": { color: "#ffd45e" },
  "yellow-400": { color: "#ffcc3f" },
  "yellow-500": { color: "#ffbf0f" },
  "yellow-600": { color: "#e8ae0e" },
  "yellow-700": { color: "#b5880b" },
  "yellow-800": { color: "#8c6908" },
  "yellow-900": { color: "#6b5006" },
  "blue-50": { color: "#eaefff" },
  "blue-100": { color: "#bdccff" },
  "blue-200": { color: "#9db4ff" },
  "blue-300": { color: "#7091ff" },
  "blue-400": { color: "#547cff" },
  "blue-500": { color: "#2b5397" },
  "blue-600": { color: "#0d3579" },
  "blue-700": { color: "#1d41b5" },
  "blue-800": { color: "#17328c" },
  "blue-900": { color: "#11266b" },
};
// ----------------------------------------------
export const textVariant = {
  heading1: {
    fontSize: "52px",
    fontWeight: "800",
    letterSpacing: "-0.52px",
  },
  heading2: {
    fontSize: "40px",
    fontWeight: "800",
    letterSpacing: "-0.40px",
  },
  heading3: {
    fontSize: "32px",
    fontWeight: "800",
    letterSpacing: "-0.32px",
  },
  heading4: {
    fontSize: "28px",
    fontWeight: "600",
    letterSpacing: "-0.84px",
  },
  heading5: {
    fontSize: "24px",
    fontWeight: "600",
    letterSpacing: "-0.24px",
  },
  heading6: {
    fontSize: "20px",
    fontWeight: "600",
    letterSpacing: "-0.60px",
  },
  heading7: {
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "-0.54px",
  },
  heading8: {
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "-0.16px",
  },
  heading9: {
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "-0.14px",
  },
  heading10: {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "-0.12px",
  },
  heading11: {
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "-0.12px",
  },
  body1: {
    fontSize: "20px",
    fontWeight: "400",
    letterSpacing: "-0.20px",
  },
  body2: {
    fontSize: "18px",
    fontWeight: "400",
    letterSpacing: "-0.36px",
  },
  body3: {
    fontSize: "16px",
    fontWeight: "400",
    letterSpacing: "-0.16px",
  },
  body4: {
    fontSize: "14px",
    fontWeight: "400",
    letterSpacing: "-0.14px",
  },
  body5: {
    fontSize: "12px",
    fontWeight: "400",
    letterSpacing: "-0.12px",
  },
  body6: {
    fontSize: "13px",
    fontWeight: "400",
    letterSpacing: "-0.12px",
  },
  label1: {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "-0.12px",
  },
  label2: {
    fontSize: "10px",
    fontWeight: "400",
    letterSpacing: "-0.10px",
  },
  caption1: {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "-0.12px",
  },
};
// ----------------------------------------------
const text = recipe({
  base: {
    color: color["gray-800"].color,
    lineHeight: "150%",
  },
  variants: {
    variant: textVariant,
    bold: {
      true: {
        fontWeight: "600",
      },
    },
    color: color,
    defaultVariants: {
      fontSize: "16px",
      fontWeight: "400",
      color: "gray-800",
      letterSpacing: "-0.16px",
    },
  },
});

export default text;
