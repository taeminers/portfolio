"use client";
import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import Text from "@/components/core/Text";
import Image from "next/image";
interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
  categories: string[];
}

export const BlogCard = ({
  title,
  description,
  date,
  link,
  categories,
}: BlogCardProps) => {
  return (
    <Flex flexDirection="column" className={S.container}>
      <Flex className={S.pictureArea} justify="center" items="center">
        <Text>{title}</Text>
      </Flex>
      <Flex
        className={S.descriptionArea}
        justify="between"
        flexDirection="column"
        gap={12}
      >
        <div
          className={S.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Flex items={"baseline"} gap={2}>
          <Text variant={"body6"}>Tags:</Text>
          {categories?.map((category) => (
            <Text variant={"body6"} color={"gray-300"} key={category}>
              #{category}
            </Text>
          ))}
        </Flex>

        <Flex justify="between" items="center">
          <Text variant={"body6"} color={"blue-500"}>
            {date}
          </Text>
          <Image
            className={S.outlink}
            src={"/outlink.png"}
            width={16}
            height={16}
            alt="title"
            onClick={() => window.open(link)}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
