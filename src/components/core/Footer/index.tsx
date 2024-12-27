import Flex from "../Flex";
import Text from "../Text";
import * as S from "./styles.css";
import { IcChevronUpBlack } from "@/icons/IcChevronUpBlack";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <Flex
          justify="center"
          items="center"
          className={S.content}
          flexDirection="column"
          gap={20}
        >
          <Text variant={"heading1"}>Let's Get To Work</Text>
          <Text>Learn, Build, Grow</Text>
        </Flex>
        <Flex className={S.bottomTabs} justify={"between"}>
          <Flex
            gap={20}
            items={"center"}
            onClick={scrollToTop}
            className={S.buttonStyle}
          >
            <IcChevronUpBlack />
            <Text>Back Top</Text>
          </Flex>
          <Text>About</Text>
          <Flex gap={20} items={"center"}>
            <IcChevronUpBlack />
            <Text>Back Top</Text>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};
