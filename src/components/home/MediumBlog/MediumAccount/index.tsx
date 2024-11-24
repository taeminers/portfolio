import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import { Feed } from "@/dto/response/MediumPostResponse";
import Text from "@/components/core/Text";
import Image from "next/image";

interface MediumAccountProps {
  feed: Feed;
}
export const MediumAccount = ({ feed }: MediumAccountProps) => {
  return (
    <Flex
      gap={20}
      items={"center"}
      onClick={() => window.open("https://notanordinarydev.medium.com/")}
      className={S.container}
    >
      <Image
        className={S.avatar}
        src={feed.image}
        width={200}
        height={200}
        alt={feed.title}
      />
      <Text variant="body1" color={"base-white"}>
        {feed.description}
      </Text>
    </Flex>
  );
};
