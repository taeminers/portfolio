import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import * as S from "./styles.css";

export const ThirdJob = () => {
  return (
    <Flex justify="between">
      <Flex flexDirection="column">
        <Text variant={"heading6"}>Software Developer</Text>
        <Text variant={"body5"}>LG CNS: Intern</Text>
      </Flex>
      <Text variant={"body6"}>Jun 2023 - Aug 2023</Text>
    </Flex>
  );
};
