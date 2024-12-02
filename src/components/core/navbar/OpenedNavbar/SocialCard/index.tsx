import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import Image from "next/image";
import * as S from "./styles.css";
interface SocialCardProps {
  icon: string;
  name: string;
  link: string;
}
export const SocialCard = ({ icon, name, link }: SocialCardProps) => {
  return (
    <Flex
      onClick={() => (window.location.href = link)}
      items={"center"}
      className={S.container}
      gap={4}
    >
      <Image src={icon} width={16} height={16} alt={name} />
      <Text>{name}</Text>
    </Flex>
  );
};
