import Text from "@/components/core/Text";
import * as S from "./styles.css";
import Image from "next/image";
import Flex from "@/components/core/Flex";
import { TimeStamp } from "./TimeStamp";
import { Space } from "@/components/core/Space";
import * as animationData from "@/utils/lotti/location.json";
export const SecondStory = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={S.container}>
      <Flex flexDirection="column" gap={20}>
        <Text variant={"body6"} color={"base-white"}>
          Hey, I'm
        </Text>
        <Flex justify="between" items={"center"}>
          <div className={S.name}>Taemin Lee</div>
          <Flex items={"center"} gap={12}>
            <Text variant={"body4"} color={"gray-100"}>
              Seoul, South Korea
            </Text>
          </Flex>
        </Flex>
        <Text variant={"body4"} color={"gray-100"}>
          I'm a software engineer based in Seoul, South Korea. I'm passionate
          about building software products that make a difference. I'm a
          software engineer based in Toronto, Canada and also a communication
          and journalism student. I enjoy creating things that live on the
          internet, whether that be websites, applications, or anything in
          between. I have been freelancing for a year now while studying at the
          university and I've manage to gain a decent amount of experience and
          valuable knowledge from all different kinds of fields throughout my
          projects/work.
        </Text>
        <Space height={20} />
        <Flex gap={10} items={"center"}>
          <Text variant={"heading8"} color={"base-white"}>
            Say Hello
          </Text>
          <Flex items={"center"} gap={12}>
            <Image
              src={"/linkedin.png"}
              width={32}
              height={32}
              alt="linkedin"
            />
            <Image
              src={"/email_blue.png"}
              width={32}
              height={32}
              alt="linkedin"
            />
          </Flex>
        </Flex>
      </Flex>
      <TimeStamp />
    </div>
  );
};
