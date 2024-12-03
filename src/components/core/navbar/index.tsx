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
                  initial={{ opacity: 0, scale: 0.95, y: -20 }} // Start slightly above
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transform: "translateY(20px)",
                  }} // Move to the original position
                  exit={{
                    opacity: 0,
                    scale: 1,
                    y: -25,
                    transform: "translateY(-20px)",
                  }}
                >
                  <OpenedNavbar setIsOpen={setIsOpen} />
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
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  exit={{
                    opacity: 0,
                  }}
                >
                  ^
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Flex>
      </div>
    </div>
  );
};
