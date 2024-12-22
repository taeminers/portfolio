"use client";
import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import * as S from "./styles.css";
import Image from "next/image";
import { JobCard } from "@/components/core/JobCard";
export const FirstJob = () => {
  return (
    <Flex items="center" flexDirection="column" className={S.cardWrapper}>
      <Flex gap={8} flexDirection="column" items="center">
        <Image
          src={"/grids_logo_white.jpg"}
          width={50}
          height={50}
          alt="grids"
        />
        <Flex flexDirection="column" gap={12}>
          <Text variant={"heading6"} color={"base-lighter"}>
            Startup CEO
          </Text>
          <Flex flexDirection="column" gap={12} className={S.container}>
            <Text variant={"body5"} color={"base-lighter"}>
              Grids: Buy Now Pay Later
            </Text>
            <Flex gap={8} items={"center"}>
              <Text variant={"body6"} color={"base-white"}>
                - Pitch Deck
              </Text>
              <Image
                src={"/outlink.png"}
                width={20}
                height={20}
                alt="outlink"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1bj8roK-gQNuP17X_SWkno6emOfLo5N8Q/view?usp=sharing"
                  )
                }
              />
            </Flex>
            <Text variant={"body6"} color={"base-white"}>
              - Learnings
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text variant={"body6"} color={"base-lighter"}>
        Mar 2021 - Oct 2021
      </Text>
    </Flex>
  );
};
