"use client";
import React, { useEffect } from "react";
import * as S from "./styles.css";
import { DescriptionLoop } from "./DescriptionLoop";

export const FirstStory = () => {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(
      `.${S.interactive}`
    )!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <div className={S.gradientBg}>
      <div className={S.gradientsContainer}>
        <div className={S.g1}></div>
        <div className={S.g2}></div>
        <div className={S.g3}></div>
        <div className={S.g4}></div>
        <div className={S.g5}></div>
        <div className={S.interactive}></div>
      </div>
      <div className={S.textContainer}>
        <div className={S.leftSide}>I am</div>
        <div className={S.rightSide}>
          <DescriptionLoop />
        </div>
      </div>
      <div className={S.scrollText}>Scroll to Start</div>
    </div>
  );
};
