import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import * as S from "./styles.css";
import Image from "next/image";
export const FirstJob = () => {
  return (
    <Flex justify="center" flexDirection="column">
      <Flex flexDirection="column" gap={12}>
        <Text variant={"heading6"} color={"base-lighter"}>
          Startup CEO
        </Text>
        <Flex flexDirection="column" gap={12} className={S.container}>
          <Text variant={"body5"} color={"base-lighter"}>
            Grids: Buy Now Pay Later
          </Text>
          <Flex gap={8} items={"center"}>
            <Text
              variant={"body6"}
              color={"base-white"}
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1bj8roK-gQNuP17X_SWkno6emOfLo5N8Q/view?usp=sharing"
                )
              }
            >
              - Pitch Deck
            </Text>
            <Image src={"/outlink.png"} width={20} height={20} alt="outlink" />
          </Flex>
          <Text variant={"body6"} color={"base-white"}>
            - Learnings
          </Text>
        </Flex>
      </Flex>
      <Text variant={"body6"} color={"base-lighter"}>
        Mar 2021 - Oct 2021
      </Text>
    </Flex>
  );
};
