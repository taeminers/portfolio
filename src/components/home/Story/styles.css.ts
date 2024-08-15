import { style, keyframes } from "@vanilla-extract/css";

// Function to generate a random color
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `${r}, ${g}, ${b}`;
};

// Define keyframe animations
const moveInCircle = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "50%": {
    transform: "rotate(180deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const moveVertical = keyframes({
  "0%": {
    transform: "translateY(-50%)",
  },
  "50%": {
    transform: "translateY(50%)",
  },
  "100%": {
    transform: "translateY(-50%)",
  },
});

const moveHorizontal = keyframes({
  "0%": {
    transform: "translateX(-50%) translateY(-10%)",
  },
  "50%": {
    transform: "translateX(50%) translateY(10%)",
  },
  "100%": {
    transform: "translateX(-50%) translateY(-10%)",
  },
});

// Define CSS variables
const rootVariables = {
  "--color-bg1": "rgb(0, 0, 0)", // Black background
  "--color1": getRandomColor(),
  "--color2": getRandomColor(),
  "--color3": getRandomColor(),
  "--color4": getRandomColor(),
  "--color5": getRandomColor(),
  "--color-interactive": getRandomColor(),
  "--circle-size": "55%",
  "--blending": "hard-light",
};

// Define styles
export const textContainer = style({
  zIndex: 100,
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "absolute",
  top: 0,
  left: 0,
  justifyContent: "center",
  alignItems: "center",
  fontSize: "30px",
  color: "white",
  opacity: 0.8,
  userSelect: "none",
  textShadow: "1px 1px rgba(0,0,0,0.1)",
});

export const gradientBg = style({
  width: "100vw",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  background: rootVariables["--color-bg1"],
  top: 0,
  left: 0,
});

export const gradientsContainer = style({
  filter: "url(#goo) blur(40px)",
  width: "100%",
  height: "100%",
});

export const g1 = style({
  position: "absolute",
  background: `radial-gradient(circle at center, rgba(${rootVariables["--color1"]}, 0.8) 0, rgba(${rootVariables["--color1"]}, 0) 50%) no-repeat`,
  width: rootVariables["--circle-size"],
  height: rootVariables["--circle-size"],
  top: `calc(50% - ${rootVariables["--circle-size"]} / 2)`,
  left: `calc(50% - ${rootVariables["--circle-size"]} / 2)`,
  transformOrigin: "center center",
  animation: `${moveVertical} 30s ease infinite`,
  opacity: 1,
});

export const g2 = style({
  position: "absolute",
  background: `radial-gradient(circle at center, rgba(${rootVariables["--color2"]}, 0.8) 0, rgba(${rootVariables["--color2"]}, 0) 50%) no-repeat`,
  width: rootVariables["--circle-size"],
  height: rootVariables["--circle-size"],
  top: `calc(50% - ${rootVariables["--circle-size"]} / 2)`,
  left: `calc(50% - ${rootVariables["--circle-size"]} / 2)`,
  transformOrigin: "calc(50% - 400px)",
  animation: `${moveInCircle} 20s reverse infinite`,
  opacity: 1,
});

export const g3 = style({
  position: "absolute",
  background: `radial-gradient(circle at center, rgba(${rootVariables["--color3"]}, 0.8) 0, rgba(${rootVariables["--color3"]}, 0) 50%) no-repeat`,
  width: rootVariables["--circle-size"],
  height: rootVariables["--circle-size"],
  top: `calc(50% - ${rootVariables["--circle-size"]} / 2 + 200px)`,
  left: `calc(50% - ${rootVariables["--circle-size"]} / 2 - 500px)`,
  transformOrigin: "calc(50% + 400px)",
  animation: `${moveInCircle} 40s linear infinite`,
  opacity: 1,
});

export const g4 = style({
  position: "absolute",
  background: `radial-gradient(circle at center, rgba(${rootVariables["--color4"]}, 0.8) 0, rgba(${rootVariables["--color4"]}, 0) 50%) no-repeat`,
  width: rootVariables["--circle-size"],
  height: rootVariables["--circle-size"],
  top: `calc(50% - ${rootVariables["--circle-size"]} / 2)`,
  left: `calc(50% - ${rootVariables["--circle-size"]} / 2)`,
  transformOrigin: "calc(50% - 200px)",
  animation: `${moveHorizontal} 40s ease infinite`,
  opacity: 0.7,
});

export const g5 = style({
  position: "absolute",
  background: `radial-gradient(circle at center, rgba(${rootVariables["--color5"]}, 0.8) 0, rgba(${rootVariables["--color5"]}, 0) 50%) no-repeat`,
  width: `calc(${rootVariables["--circle-size"]} * 2)`,
  height: `calc(${rootVariables["--circle-size"]} * 2)`,
  top: `calc(50% - ${rootVariables["--circle-size"]})`,
  left: `calc(50% - ${rootVariables["--circle-size"]})`,
  transformOrigin: "calc(50% - 800px) calc(50% + 200px)",
  animation: `${moveInCircle} 20s ease infinite`,
  opacity: 1,
});

export const interactive = style({
  position: "absolute",
  background: `radial-gradient(circle at center, rgba(${rootVariables["--color-interactive"]}, 0.8) 0, rgba(${rootVariables["--color-interactive"]}, 0) 50%) no-repeat`,
  width: "50%",
  height: "50%",
  top: "-25%",
  left: "-25%",
  opacity: 0.7,
});

export const scrollText = style({
  position: "absolute",
  bottom: 20,
  left: "50%",
  transform: "translateX(-50%)",
  color: "white",
});
