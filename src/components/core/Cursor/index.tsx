"use client";
import React, { useEffect } from "react";
import { customCursor, customCursorActive } from "./styles.css";
const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.className = customCursor;
    document.body.appendChild(cursor);

    const handleMouseMove = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handleClick = () => {
      cursor.classList.add(customCursorActive);
      setTimeout(() => {
        cursor.classList.remove(customCursorActive);
      }, 200); // Duration of the color change
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      document.body.removeChild(cursor);
    };
  }, []);

  return null; // This component does not render anything itself
};

export default CustomCursor;
