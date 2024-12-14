import Flex from "@/components/core/Flex";
import Text from "@/components/core/Text";
import * as S from "./styles.css";

export const ThirdJob = () => {
  return (
    <Flex justify="between" gap={32}>
      <Flex className={S.jobContainer} justify="center" flexDirection="column">
        <Flex flexDirection="column" gap={12}>
          <Text variant={"heading6"} color={"base-lighter"}>
            Software Developer
          </Text>
          <Flex justify="between">
            <Flex flexDirection="column" gap={12} className={S.container}>
              <Text variant={"body5"} color={"base-lighter"}>
                LG CNS: Intern
              </Text>
              <Text variant={"body6"} color={"base-white"}>
                - Turning React Project into NextJS
              </Text>
              <Text variant={"body6"} color={"base-white"}>
                - Learnings
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Text variant={"body6"} color={"base-lighter"}>
          Jun 2023 - Aug 2023
        </Text>
      </Flex>
      <Flex className={S.jobContainer} justify="center" flexDirection="column">
        <Flex flexDirection="column" gap={12}>
          <Text variant={"heading6"} color={"base-lighter"}>
            Software Developer
          </Text>
          <Flex justify="between">
            <Flex flexDirection="column" gap={12} className={S.container}>
              <Text variant={"body5"} color={"base-lighter"}>
                Bondit: Frontend Developer
              </Text>
              <Text variant={"body6"} color={"base-white"}>
                - Building Landing Page
              </Text>
              <Text variant={"body6"} color={"base-white"}>
                - Log-in flow for igotin app (flutter)
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Text variant={"body6"} color={"base-lighter"}>
          Aug 2023 - Dec 2023
        </Text>
      </Flex>
    </Flex>
  );
};
