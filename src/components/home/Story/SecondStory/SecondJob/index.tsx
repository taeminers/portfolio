import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import * as S from "./styles.css";
import Image from "next/image";
export const SecondJob = () => {
  return (
    <Flex justify="center" flexDirection="column">
      <Flex gap={32}>
        <Flex flexDirection="column" gap={12}>
          <Text variant={"heading6"} color={"base-lighter"}>
            Startup CEO
          </Text>
          <Flex flexDirection="column" gap={12} className={S.container}>
            <Text variant={"body5"} color={"base-lighter"}>
              Grids: Short form News
            </Text>
            <Flex gap={8} items={"center"}>
              <Text variant={"body6"} color={"base-white"}>
                - Pitch Deck
              </Text>
              <Image
                src={"/outlink.png"}
                width={20}
                height={20}
                alt="outlink"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DeaR1ZQtBqy1MFP5HWhuaMbigxeZtfWL/view?usp=sharing"
                  )
                }
              />
            </Flex>
            <Text variant={"body6"} color={"base-white"}>
              - Learnings
            </Text>
          </Flex>
        </Flex>
        <Image
          src={"/grids_logo_white.jpg"}
          width={50}
          height={50}
          alt="grids"
        />
      </Flex>
      <Text variant={"body6"} color={"base-lighter"}>
        Nov 2021 - Mar 2022
      </Text>
    </Flex>
  );
};
