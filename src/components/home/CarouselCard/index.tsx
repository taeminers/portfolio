import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import Image from "next/image";

interface CarouselCardProps {
  content: string;
  children?: React.ReactNode;
}

export const CarouselCard = ({ content, children }: CarouselCardProps) => {
  return (
    <Flex
      className={S.container}
      items={"center"}
      justify="center"
      gap={12}
      flexDirection="column"
    >
      {children}
      {content}
    </Flex>
  );
};
