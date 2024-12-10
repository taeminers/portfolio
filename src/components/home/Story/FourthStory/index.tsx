import * as S from "./styles.css";
import Text from "@/components/core/Text";
import { Carousel } from "@/components/core/Carousel";
import { CarouselCard } from "../../CarouselCard";
import Flex from "@/components/core/Flex";
export const FourthStory = () => {
  return (
    <Flex className={S.container} gap={50} flexDirection="column">
      <Text variant={"body2"} color={"base-white"}>
        Goals, Vision, and Dream
      </Text>
      <Carousel>
        <CarouselCard content={"Become better at React"} />
        <CarouselCard content={"Excel at Leetcode"} />
        <CarouselCard content={"Expand my vision through books"} />
        <CarouselCard content={"Learn, Build, Grow"} />
        <CarouselCard content={"KAIST masters"} />
      </Carousel>
    </Flex>
  );
};
