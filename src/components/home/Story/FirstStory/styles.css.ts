import { style } from "@vanilla-extract/css";

export const container = style({
  background: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  overflowY: "scroll", // Ensure the container is scrollable
});

export const first = style({
  padding: "20px",
  backgroundColor: "black", // Background for the part above the content
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const contentContainer = style({
  width: "100%",
  backgroundImage: "url('/Jamsil.png')", // Replace with your background image path
  backgroundAttachment: "fixed",
  backgroundSize: "cover", // Adjust as needed
  backgroundPosition: "center", // Adjust as needed
});

export const content = style({
  display: "flex",
  width: "100vw",
  height: "fit-content",
  flexDirection: "column",
  padding: "0 40px",
  position: "relative",
});

export const second = style({
  margin: "20px 0",
  height: "100vh",
});

export const wrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontSize: "36px",
  gap: "30px",
});
