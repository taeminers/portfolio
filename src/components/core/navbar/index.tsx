"use client";
import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import * as S from "./styles.css";
import Flex from "../Flex";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={S.container}>
      <Flex items="center" flexDirection="column">
        {isOpen && <Navigation />}

        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Logo />
        </div>
      </Flex>
    </div>
  );
};
