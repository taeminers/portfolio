"use client";
import { MySocials } from "@/assets/Socials/My-Socials";
import Flex from "../../Flex";
import Text from "../../Text";
import * as S from "./styles.css";
import { SocialCard } from "./SocialCard";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Space } from "../../Space";

export const OpenedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      flexDirection="column"
      items={"center"}
      gap={16}
      className={S.outerBackground({ variant: isOpen })}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={S.opened}
            layout
            initial={{ opacity: 0, scale: 0.95, y: -100 }} // Start slightly above
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.4 }, // Set the duration of the animation
            }} // Move to the original position
            exit={{
              opacity: 0,
              scale: 1,
              y: -100,
              transition: { duration: 0.4 }, // Set the duration of the animation
            }}
          >
            <Flex flexDirection="column" items={"center"} gap={12}>
              <Text variant={"heading3"} color={"base-white"}>
                You've opened the navbar! Nice!
              </Text>
              <Text
                variant={"body3"}
                color={"base-white"}
                className={S.content}
              >
                I am currently open for new roles and opportunities. You can
                find my resume and contact info below.
              </Text>
              <div className={S.separator} />
              <Flex gap={16}>
                {Object.entries(MySocials).map(([key, value]) => (
                  <SocialCard key={key} {...value} />
                ))}
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="toggleButton"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            layout
            initial={{ opacity: 0, scale: 1, y: -100 }} // Start above the final position
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.4 }, // Set the duration of the animation
            }} // Move to the original position
          >
            X
          </motion.div>
        ) : (
          <motion.div
            key="toggleButtons"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            layout
            initial={{ opacity: 0, scale: 1, y: 0 }} // Start below the final position
            animate={{
              opacity: [0, 0, 1],
              scale: 1,
              y: 0, // Keyframes for the y property
              transition: { duration: 1, times: [0, 0.6, 1] }, // Set the duration and keyframe times
            }} // Move to the original position
          >
            ^
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};
