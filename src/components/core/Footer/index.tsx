import Flex from "../Flex";
import Text from "../Text";
import * as S from "./styles.css";

export const Footer = () => {
  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <Flex>
          <Text variant={"heading1"}>Let's work.</Text>
        </Flex>
      </div>
    </div>
  );
};
