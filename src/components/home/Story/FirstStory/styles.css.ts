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
  transition: "opacity 0.5s ease, transform 0.5s ease", // Ensure smooth transition
});

const dimming = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const gradientBg = style({
  width: "100vw",
  height: "150vh",
  position: "relative",
  overflow: "hidden",
  background: rootVariables["--color-bg1"],
  top: 0,
  left: 0,
  animation: `${dimming} 4s ease-in-out`,
  // Add the pseudo-element for the gradient overlay
  "::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "20%", // Adjust the height as needed
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)", // Adjust colors as needed
    pointerEvents: "none", // Ensure it doesn't interfere with interactions
  },
});

export const gradientsContainer = style({
  filter: "url(#goo) blur(40px)",
  width: "80%",
  height: "80%",
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

const flicker = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0.1 },
  "100%": { opacity: 1 },
});

export const scrollText = style({
  position: "absolute",
  bottom: "40%",
  cursor: "pointer",
  left: "50%",
  transform: "translateX(-50%)",
  color: "white",
  animation: `${flicker} 3s infinite`,
});

const textFlyUp = keyframes({
  "0%": { opacity: 1, transform: "translateY(0)" },
  "100%": { opacity: 0, transform: "translateY(-200px)" },
});

export const textContainerAnimated = style({
  animation: `${textFlyUp} 3s forwards`, // Apply the animation
});

const fadeOut = keyframes({
  "0%": { opacity: 0.6 },
  "100%": { opacity: 0 },
});

export const scrollTextAnimated = style({
  animation: `${fadeOut} 3s forwards`, // Apply the animation
});
