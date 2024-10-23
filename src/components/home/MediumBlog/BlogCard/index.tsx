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
  return (
    <Flex flexDirection="column">
      <Flex className={S.pictureArea} justify="center" items="center">
        {title}
      </Flex>
      <Flex
        className={S.descriptionArea}
        justify="between"
        flexDirection="column"
      >
        <Text className={S.description}>{description}</Text>
        <Text>{date}</Text>
      </Flex>
    </Flex>
  );
};
