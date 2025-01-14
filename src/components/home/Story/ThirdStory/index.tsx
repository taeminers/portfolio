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
  const [mediumPosts, setMediumPosts] = useState<MediumPostResponse | null>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const publicationsResponse = await fetch(`/api/medium/publications`, {
          method: "GET",
        });
        if (!publicationsResponse.ok) {
          setMediumPosts(null);
        }
        const publicationsData = await publicationsResponse.json();
        setMediumPosts(publicationsData);
      } catch (error) {
        setMediumPosts(null);
      }
    };
    fetchData();
  }, []);
  return (
    <Flex className={S.container} flexDirection="column" gap={50}>
      <Separator />
      <Flex justify="between" className={S.topSection}>
        <Flex flexDirection="column">
          <Text variant={"body2"} color={"base-white"}>
            How I Think
          </Text>
          <Space height={12} />
          <Text variant={"body5"} color={"base-white"}>
            Dev Blog
          </Text>
        </Flex>
        {mediumPosts ? (
          <MediumAccount feed={mediumPosts?.feed} />
        ) : (
          <Flex>
            <Text color={"base-white"}>Uh Oh... Somethings Wrong</Text>
          </Flex>
        )}
      </Flex>

      <div className={S.grid}>
        {mediumPosts
          ? mediumPosts?.items
              ?.slice(0, 6)
              .map((post) => (
                <BlogCard
                  key={post.guid}
                  title={post.title}
                  description={filterNewline(post.description)}
                  date={post.pubDate}
                  link={post.link}
                  categories={post.categories}
                />
              ))
          : null}
        {
          <Flex
            className={S.seeMoreBlog}
            items={"center"}
            justify="center"
            onClick={() => window.open("https://notanordinarydev.medium.com/")}
          >
            {mediumPosts
              ? "Read More"
              : "Cant Load Posts... Click to Read More"}
          </Flex>
        }
      </div>
    </Flex>
  );
};
