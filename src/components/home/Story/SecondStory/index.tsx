import Text from "@/components/core/Text";
import * as S from "./styles.css";
import { color } from "@/components/core/Text/styles.css";
import Image from "next/image";

export const SecondStory = () => {
  return (
    <div className={S.container}>
      <Text variant={"heading2"} color={"base-white"}>
        My name is Taemin Lee (Kyle), and I am 27 years old (born in 1998).{" "}
        <br />
        I am a software engineer who loves to create things. <br />
        But I am also passionate about start ups, and solving problems.
      </Text>
      <div className={S.imageWrapper}>
        <Image
          src={"/introduction.webp"}
          width={500}
          height={500}
          alt="intro"
        />
      </div>
    </div>
  );
};
