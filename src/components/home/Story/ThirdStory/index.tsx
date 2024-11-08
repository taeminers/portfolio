import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import Text from "@/components/core/Text";
import { useEffect, useState } from "react";
import { BlogCard } from "../../MediumBlog/BlogCard";
import { MediumAccount } from "../../MediumBlog/MediumAccount";
import { MediumPostResponse } from "@/dto/response/MediumPostResponse";

export const ThirdStory = () => {
  const [mediumPosts, setMediumPosts] = useState<MediumPostResponse>();
  console.log("mediumPosts", mediumPosts);
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
      <Flex flexDirection="column">
        <Text variant={"heading3"}>How I Think</Text>
        <Text variant={"heading2"}>Dev Blog</Text>
      </Flex>
      <div className={S.contentWrapper}>
        {mediumPosts && <MediumAccount feed={mediumPosts?.feed} />}
        <div className={S.grid}>
          {mediumPosts?.items.slice(0, 6).map((post) => (
            <BlogCard
              key={post.guid}
              title={post.title}
              description={post.description}
              date={post.pubDate}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </Flex>
  );
};
