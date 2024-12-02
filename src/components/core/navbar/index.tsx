"use client";
import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import * as S from "./styles.css";
import Flex from "../Flex";
import { AnimatePresence, motion } from "framer-motion";
import { OpenedNavbar } from "./OpenedNavbar";
import { Space } from "../Space";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={S.outerBackground({ variant: isOpen })}>
      <div className={S.container}>
        <Flex items="center" flexDirection="column">
          <div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className={S.opened}
                  layout
                  exit={{ opacity: 0, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                >
                  <OpenedNavbar />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Space height={16} />
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <Logo />
          </div>
        </Flex>
      </div>
    </div>
  );
};
