import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import Text from "@/components/core/Text";
import { useEffect, useState } from "react";
import { BlogCard } from "../../MediumBlog/BlogCard";
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
        console.log("publicationsData", publicationsData);
        setMediumPosts(publicationsData);
      } catch (error) {
        console.error("Error fetching data from Medium API:", error);
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
      }
    };
    fetchData();
  }, []);
  return (
    <div className={S.container}>
      <Flex flexDirection="column">
        <Text variant={"heading3"}>How I Think</Text>
        <Text variant={"heading2"}>Think</Text>
      </Flex>
      <Flex gap={20} className={S.wrapper}>
        <div className={S.featured}>
          <div className={S.featuredImage}></div>
        </div>
        <div className={S.grid}>
          {mediumPosts?.items.slice(0, 4).map((post) => (
            <BlogCard
              key={post.guid}
              title={post.title}
              description={post.description}
              date={post.pubDate}
              link={post.link}
            />
          ))}
        </div>
      </Flex>
    </div>
  );
};
