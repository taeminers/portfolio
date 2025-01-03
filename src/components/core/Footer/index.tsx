import Image from "next/image";
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
          className={S.content}
          flexDirection="column"
          gap={50}
          items={"center"}
        >
          <Text variant={"heading1"}>Let's Get To Work</Text>
          <Flex className={S.photoCard} items={"center"} gap={20}>
            <Image
              src={"/portfolio_profile.jpeg"}
              width={256}
              height={310}
              alt="profile"
            />
            <Text className={S.yearForPhoto}>@2024</Text>
          </Flex>
          <Text
            style={{
              textDecoration: "underline",
              textUnderlineOffset: 10,
              textEmphasis: "filled",
            }}
          >
            Send me a DM or Email
          </Text>
        </Flex>
        <Flex className={S.topTabs}>
          <Flex justify="between" className={S.tabWrap}>
            <Flex flexDirection="column" gap={10}>
              <Text variant={"heading5"} style={{ fontFamily: "sans-serif" }}>
                taeminers@gmail.com
              </Text>
              <Text variant={"heading4"}>
                Software <br /> Developer
              </Text>
            </Flex>
            <Flex flexDirection="column" gap={10}>
              <Text variant={"heading4"}>SNU CSE 17</Text>
              <Text variant={"heading4"}>LG CNS</Text>
              <Text variant={"heading4"}>FACTBLOCK</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex className={S.bottomTabs} justify={"end"}>
          <Flex
            items={"center"}
            onClick={scrollToTop}
            className={S.buttonStyle}
          >
            <Text variant={"heading1"}>^</Text>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};
