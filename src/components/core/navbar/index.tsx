"use client";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import * as S from "./styles.css";

export const Navbar = () => {
  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};
