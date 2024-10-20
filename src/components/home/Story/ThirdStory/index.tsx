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
      {/* <Flex gap={12}>
        <div className={S.featured}>
          <Flex>
            <div className={S.featuredImage}>Picture</div>
          </Flex>
        </div>
        <div className={S.grid}>
          <div style={{ background: "red" }}>Picture</div>
          <div style={{ background: "blue" }}>Picture</div>
          <div style={{ background: "green" }}>Picture</div>
          <div style={{ background: "orange" }}>Picture</div>
        </div>
      </Flex> */}
      <div className={S.grid}>
        <div style={{ background: "red", width: "40vw", height: "40vh" }}>
          Picture
        </div>
        <div style={{ background: "blue", width: "40vw", height: "40vh" }}>
          Picture
        </div>
        <div style={{ background: "green", width: "40vw", height: "40vh" }}>
          Picture
        </div>
        <div style={{ background: "orange", width: "40vw", height: "40vh" }}>
          Picture
        </div>
      </div>
    </div>
  );
};
