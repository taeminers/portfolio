import Flex from "../Flex";
import Text from "../Text";
import * as S from "./styles.css";

export const Footer = () => {
  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <Flex justify="between">
          <Text variant={"heading1"}>Let's get to work </Text>
          <Text>This website is in Progress</Text>
        </Flex>
      </div>
    </div>
  );
};
