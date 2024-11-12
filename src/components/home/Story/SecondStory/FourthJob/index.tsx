import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import * as S from "./styles.css";

export const FourthJob = () => {
  return (
    <Flex justify="between">
      <Flex flexDirection="column">
        <Text variant={"heading6"}>Software Developer</Text>
        <Text variant={"body5"}>FACTBLOCK: Frontend Developer</Text>
      </Flex>
      <Text variant={"body6"}>Feb 2024 - current</Text>
    </Flex>
  );
};
