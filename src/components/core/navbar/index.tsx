"use client";
import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import * as S from "./styles.css";
import Flex from "../Flex";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={S.container}>
      <Flex items="center" flexDirection="column">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={S.opened}
              layout
              exit={{ opacity: 0, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
            ></motion.div>
          )}
        </AnimatePresence>

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
