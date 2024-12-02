import { MySocials } from "@/assets/Socials/My-Socials";
import Flex from "../../Flex";
import Text from "../../Text";
import * as S from "./styles.css";
import { SocialCard } from "./SocialCard";
export const OpenedNavbar = () => {
  return (
    <Flex flexDirection="column" items={"center"} gap={16}>
      <Flex flexDirection="column" items={"center"} gap={12}>
        <Text variant={"heading3"} color={"base-white"}>
          You've opened the navbar! Nice!
        </Text>
        <Text variant={"body3"} color={"base-white"} className={S.content}>
          I am currently open for new roles and opportunities. You can find my
          resume and contact info below.
        </Text>
      </Flex>
      <div className={S.separator} />
      <Flex gap={16}>
        {Object.entries(MySocials).map(([key, value]) => (
          <SocialCard key={key} {...value} />
        ))}
      </Flex>
    </Flex>
  );
};
