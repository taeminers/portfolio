import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import Text from "@/components/core/Text";
export const ThirdStory = () => {
  return (
    <div className={S.container}>
      <Flex flexDirection="column">
        <Text variant={"heading3"}>How I Think</Text>
        <Text variant={"heading2"}>Think</Text>
      </Flex>
      <Flex gap={12}>
        <div className={S.featured}>
          <Flex>
            <div className={S.featuredImage}>Picture</div>
          </Flex>
        </div>
        <div className={S.grid}>
          <div>Picture</div>
          <div>Picture</div>
          <div>Picture</div>
          <div>Picture</div>
          <div>Picture</div>
        </div>
      </Flex>
    </div>
  );
};
