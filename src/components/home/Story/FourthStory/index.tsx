import * as S from "./styles.css";
import Text from "@/components/core/Text";
import { Carousel } from "@/components/core/Carousel";
import { CarouselCard } from "../../CarouselCard";
import Flex from "@/components/core/Flex";
import Image from "next/image";
export const FourthStory = () => {
  return (
    <Flex className={S.container} gap={50} flexDirection="column">
      <Text variant={"body2"} color={"base-white"}>
        Goals, Vision, and Dream
      </Text>
      <Carousel>
        <CarouselCard content={"Become better at React"}>
          <Image
            src={"/reactjs_nextjs.png"}
            width={200}
            height={100}
            alt="nextjs"
          />
        </CarouselCard>
        <CarouselCard content={"Excel at Leetcode"}>
          <Image
            src={"/reactjs_nextjs.png"}
            width={200}
            height={100}
            alt="nextjs"
          />
        </CarouselCard>
        <CarouselCard content={"Expand my vision through books"}>
          <Image
            src={"/reactjs_nextjs.png"}
            width={200}
            height={100}
            alt="nextjs"
          />
        </CarouselCard>
        <CarouselCard content={"Learn, Build, Grow"}>
          <Image
            src={"/reactjs_nextjs.png"}
            width={200}
            height={100}
            alt="nextjs"
          />
        </CarouselCard>
        <CarouselCard content={"KAIST masters"}>
          <Image
            src={"/reactjs_nextjs.png"}
            width={200}
            height={100}
            alt="nextjs"
          />
        </CarouselCard>
      </Carousel>
    </Flex>
  );
};
