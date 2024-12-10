import * as S from "./styles.css";
import Text from "@/components/core/Text";
import { Carousel } from "@/components/core/Carousel";
import { CarouselCard } from "../../CarouselCard";
import Flex from "@/components/core/Flex";
export const FourthStory = () => {
  return (
    <Flex className={S.container} gap={50} flexDirection="column">
      <Text variant={"body2"} color={"base-white"}>
        My Current Interests
      </Text>
      <Carousel>
        <CarouselCard content={"First card"} />
        <CarouselCard content={"Second card"} />
        <CarouselCard content={"Third card"} />
        <CarouselCard content={"Foiurthg card"} />
        <CarouselCard content={"Fifth card"} />
      </Carousel>
    </Flex>
  );
};
