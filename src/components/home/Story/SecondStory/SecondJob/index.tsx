import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import * as S from "./styles.css";
export const SecondJob = () => {
  return (
    <Flex justify="between">
      <Flex flexDirection="column">
        <Text variant={"heading6"}>Startup CEO</Text>
        <Text variant={"body5"}>Grids: Short form News</Text>
      </Flex>
      <Text variant={"body6"}>Nov 2021 - Mar 2022</Text>
    </Flex>
  );
};
