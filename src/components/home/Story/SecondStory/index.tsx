import Text from "@/components/core/Text";
import * as S from "./styles.css";
import { color } from "@/components/core/Text/styles.css";
import Image from "next/image";
import Flex from "@/components/core/Flex";

export const SecondStory = () => {
  return (
    <div className={S.container}>
      <Flex flexDirection="column" gap={20}>
        <Text variant={"body6"} color={"base-white"}>
          Hey, I'm
        </Text>
        <div className={S.name}>Taemin Lee</div>
        <Text variant={"body4"} color={"blue-100"}>
          I'm a software engineer based in Seoul, South Korea. I'm passionate
          about building software products that make a difference.
        </Text>
        <Flex gap={10} items={"center"}>
          <Text variant={"heading8"} color={"base-white"}>
            Say Hello
          </Text>
          <div>{"----->"}</div>
        </Flex>
      </Flex>
    </div>
  );
};
