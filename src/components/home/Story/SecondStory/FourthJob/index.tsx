import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import * as S from "./styles.css";
import Image from "next/image";
export const FourthJob = () => {
  return (
    <Flex justify="center" flexDirection="column" className={S.cardWrapper}>
      <Flex gap={32}>
        <Flex flexDirection="column" gap={12}>
          <Text variant={"heading6"} color={"base-lighter"}>
            Software Developer
          </Text>
          <Flex flexDirection="column" gap={12} className={S.container}>
            <Text variant={"body5"} color={"base-lighter"}>
              FACTBLOCK: Frontend Developer
            </Text>
            <Text variant={"body6"} color={"base-white"}>
              - Fablo App
            </Text>
            <Text variant={"body6"} color={"base-white"}>
              - Learnings
            </Text>
          </Flex>
        </Flex>
        <Image src={"/factblock_logo.jpg"} width={50} height={50} alt="grids" />
      </Flex>
      <Text variant={"body6"} color={"base-lighter"}>
        Feb 2024 - current
      </Text>
    </Flex>
  );
};
