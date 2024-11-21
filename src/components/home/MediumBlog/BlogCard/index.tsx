import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import Text from "@/components/core/Text";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
}

export const BlogCard = ({ title, description, date, link }: BlogCardProps) => {
  console.log("description", description);
  return (
    <Flex
      flexDirection="column"
      className={S.container}
      onClick={() => window.open(link)}
    >
      <Flex className={S.pictureArea} justify="center" items="center">
        {title}
      </Flex>
      <Flex
        className={S.descriptionArea}
        justify="between"
        flexDirection="column"
      >
        <div
          className={S.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Text variant={"heading11"} color={"blue-500"}>
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};
