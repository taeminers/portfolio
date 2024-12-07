"use client";
import React, { Suspense, useEffect, useState } from "react";
import { FirstStory } from "./FirstStory";
import { SecondStory } from "./SecondStory";
import { ThirdStory } from "./ThirdStory";
import { FourthStory } from "./FourthStory";
import { Footer } from "@/components/core/Footer";
import { Separator } from "@/components/core/Separator";
import { TimeStamp } from "./SecondStory/TimeStamp";
import { Carousel } from "@/components/core/Carousel";
import { CarouselCard } from "../CarouselCard";

export const Story = () => {
  return (
    <>
      <FirstStory />
      <SecondStory />

      <TimeStamp />
      <Suspense fallback={<div>Loading...</div>}>
        <ThirdStory />
      </Suspense>
    </>
  );
};
