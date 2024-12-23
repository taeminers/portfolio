"use client";
import React, { Suspense } from "react";
import { FirstStory } from "./FirstStory";
import { ThirdStory } from "./ThirdStory";
import { FourthStory } from "./FourthStory";
import { TimeStamp } from "./SecondStory/TimeStamp";
import dynamic from "next/dynamic";

const SecondStory = dynamic(
  () => import("./SecondStory").then((mod) => mod.SecondStory),
  {
    ssr: false,
  }
);
export const Story = () => {
  return (
    <>
      <FirstStory />
      <SecondStory />
      <TimeStamp />
      <Suspense fallback={<div>Loading...</div>}>
        <ThirdStory />
      </Suspense>
      {/* <FourthStory /> */}
    </>
  );
};
