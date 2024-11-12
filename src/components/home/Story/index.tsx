"use client";
import React, { useEffect, useState } from "react";
import { FirstStory } from "./FirstStory";
import { SecondStory } from "./SecondStory";
import { ThirdStory } from "./ThirdStory";
import { FourthStory } from "./FourthStory";

export const Story = () => {
  return (
    <>
      <FirstStory />
      <SecondStory />
      <ThirdStory />
      <FourthStory />
    </>
  );
};
