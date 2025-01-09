import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  padding: "16px",
});

export const wrapper = style({
  background: "white",
  width: "100%",
  height: "100%",
  borderRadius: "16px",
  position: "relative",
});

export const mobileText = style({
  "@media": {
    "(max-width: 768px)": {
      fontSize: "14px",
    },
  },
});

export const mobileText2 = style({
  "@media": {
    "(max-width: 768px)": {
      fontSize: "11px",
    },
  },
});

export const mobileText3 = style({
  "@media": {
    "(max-width: 768px)": {
      fontSize: "7px",
    },
  },
});

export const content = style({
  height: "100%",
  width: "100%",
  padding: "200px",
  "@media": {
    "(max-width: 768px)": {
      padding: "40px",
      paddingTop: "100px",
    },
  },
});

export const topTabs = style({
  position: "absolute",
  top: "0",
  left: "0",
  padding: "40px 120px",
  width: "100%",
  "@media": {
    "(max-width: 768px)": {
      padding: "20px 40px",
    },
  },
});

export const bottomTabs = style({
  position: "absolute",
  bottom: "0",
  left: "0",
  padding: "40px 120px",
  width: "100%",
  "@media": {
    "(max-width: 768px)": {
      padding: "20px 40px",
    },
  },
});

export const tabWrap = style({
  width: "100%",
});

export const buttonStyle = style({
  cursor: "pointer",
});

export const photoCard = style({
  background: "cream",
  padding: "15px 15px 100px 15px",
  border: "1px solid grey",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  position: "relative",
  rotate: "5deg",
  "@media": {
    "(max-width: 768px)": {
      padding: "10px 10px 50px 10px",
    },
  },
});

export const yearForPhoto = style({
  position: "absolute",
  bottom: "0",
  right: "0",
  paddingRight: "10px",
  fontFamily: "fantasy",
});
