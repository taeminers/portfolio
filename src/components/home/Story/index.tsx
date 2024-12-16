"use client";
import React, { Suspense } from "react";
import { FirstStory } from "./FirstStory";
import { SecondStory } from "./SecondStory";
import { ThirdStory } from "./ThirdStory";
import { FourthStory } from "./FourthStory";
import { TimeStamp } from "./SecondStory/TimeStamp";
import Flex from "@/components/core/Flex";

export const Story = () => {
  return (
    <>
      <FirstStory />
      <SecondStory />
      <TimeStamp />
      <Suspense fallback={<div>Loading...</div>}>
        <ThirdStory />
      </Suspense>
      <FourthStory />
    </>
  );
};
