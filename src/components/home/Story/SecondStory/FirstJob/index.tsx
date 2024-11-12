import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import * as S from "./styles.css";
export const FirstJob = () => {
  return (
    <Flex justify="between">
      <Flex flexDirection="column">
        <Text variant={"heading6"}>Startup CEO</Text>
        <Text variant={"body5"}>Grids: Buy Now Pay Later</Text>
      </Flex>
      <Text variant={"body6"}>Mar 2021 - Oct 2021</Text>
    </Flex>
  );
};
