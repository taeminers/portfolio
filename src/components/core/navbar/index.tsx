"use client";
import * as S from "./styles.css";
import Flex from "../Flex";
import { AnimatePresence, motion } from "framer-motion";
import { OpenedNavbar } from "./OpenedNavbar";

export const Navbar = () => {
  return (
    <div className={S.container}>
      <Flex items="center" flexDirection="column">
        <AnimatePresence>
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
            <OpenedNavbar />
          </motion.div>
        </AnimatePresence>
      </Flex>
    </div>
  );
};
