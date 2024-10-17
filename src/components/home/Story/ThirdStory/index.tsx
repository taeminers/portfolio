import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import Text from "@/components/core/Text";
export const ThirdStory = () => {
  return (
    <div className={S.container}>
      <Flex flexDirection="column">
        <Text variant={"heading3"}>How I Think, Learn, Work.</Text>
        <Text variant={"heading2"}>Think</Text>
      </Flex>
    </div>
  );
};
