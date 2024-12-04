import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import Text from "@/components/core/Text";
import { useEffect, useState } from "react";
import { BlogCard } from "../../MediumBlog/BlogCard";
import { MediumAccount } from "../../MediumBlog/MediumAccount";
import { MediumPostResponse } from "@/dto/response/MediumPostResponse";
import { filterNewline } from "@/utils/parse/filterNewline";
import { Separator } from "@/components/core/Separator";
import { Space } from "@/components/core/Space";

export const ThirdStory = () => {
  const [mediumPosts, setMediumPosts] = useState<MediumPostResponse>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const publicationsResponse = await fetch(`/api/medium/publications`, {
          method: "GET",
        });
        if (!publicationsResponse.ok) {
          throw new Error("Failed to fetch data from Medium API");
        }
        const publicationsData = await publicationsResponse.json();
        setMediumPosts(publicationsData);
      } catch (error) {
        console.error("Error fetching data from Medium API:", error);
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
      }
    };
    fetchData();
  }, []);
  // console.log("third story render");
  return (
    <Flex className={S.container} flexDirection="column" gap={50}>
      <Separator />
      <Space height={20} />
      <Flex justify="between">
        <Flex flexDirection="column">
          <Text variant={"body2"} color={"base-white"}>
            How I Think
          </Text>
          <Text variant={"body5"} color={"base-white"}>
            Dev Blog
          </Text>
        </Flex>
        {mediumPosts && <MediumAccount feed={mediumPosts?.feed} />}
      </Flex>

      <div className={S.grid}>
        {mediumPosts?.items.slice(0, 6).map((post) => (
          <BlogCard
            key={post.guid}
            title={post.title}
            description={filterNewline(post.description)}
            date={post.pubDate}
            link={post.link}
          />
        ))}
      </div>
    </Flex>
  );
};
