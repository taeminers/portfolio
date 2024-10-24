import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import { Feed } from "@/dto/response/MediumPostResponse";
import Text from "@/components/core/Text";
import Image from "next/image";

interface MediumAccountProps {
  feed: Feed;
}
export const MediumAccount = ({ feed }: MediumAccountProps) => {
  console.log(feed);
  return (
    <Flex className={S.container} flexDirection="column">
      <Text variant="body1">{feed.description}</Text>
      <Image src={feed.image} width={200} height={200} alt={feed.title} />
    </Flex>
  );
};