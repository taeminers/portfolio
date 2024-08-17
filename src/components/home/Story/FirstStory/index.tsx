import React from "react";
import * as S from "./styles.css";

export const FirstStory = () => {
  return (
    <div className={S.container}>
      <div className={S.first}>
        <div>Chapter 1.</div>
        <div>Drive & Motivation</div>
      </div>
      <div className={S.contentContainer}>
        <div className={S.content}>
          <div className={S.second}>
            <div className={S.wrapper}>
              <div>I've always wanted to be a Someone.</div>
              <div>Help bring positive change to the world.</div>
            </div>
          </div>
          <div className={S.second}>
            <div className={S.wrapper}>
              <div>I've found the meaning of life.</div>
              <div>
                Something that I would do happily for the rest of my life.
              </div>
            </div>
          </div>
          <div className={S.second}>
            <div className={S.wrapper}>
              <div>I've found the meaning of life.</div>
              <div>
                Something that I would do happily for the rest of my life.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
