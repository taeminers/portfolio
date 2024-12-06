import * as S from "./styles.css";

interface CarouselCardProps {
  content: string;
}

export const CarouselCard = ({ content }: CarouselCardProps) => {
  return <div className={S.container}>{content}</div>;
};
