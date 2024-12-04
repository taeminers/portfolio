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
    <AnimatePresence>
      <Flex
        flexDirection="column"
        items={"center"}
        gap={16}
        className={S.outerBackground({ variant: isOpen })}
      >
        {isOpen && (
          <motion.div
            className={S.opened}
            layout
            initial={{ opacity: 0, scale: 0.95, y: -20 }} // Start slightly above
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.3 }, // Set the duration of the animation
            }} // Move to the original position
            exit={{
              opacity: 1,
              scale: 1,
              y: -25,
              transition: { duration: 0.5 }, // Set the duration of the animation
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
        <motion.div
          key="toggleButton"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          layout
          initial={{ opacity: 0, scale: 0.95, y: -20 }} // Start slightly above
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.1 }, // Set the duration of the animation
          }} // Move to the original position
          exit={{
            opacity: 0,
            scale: 1,
            y: -25,
            transition: { duration: 0.1 }, // Set the duration of the exit animation
          }}
        >
          {isOpen ? <Space height={16} /> : null}x
        </motion.div>
      </Flex>
    </AnimatePresence>
  );
};
