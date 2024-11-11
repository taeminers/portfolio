import Text from "@/components/core/Text";
import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import { useState } from "react";
import { match } from "ts-pattern";
import { FirstJob } from "../FirstJob";
import { SecondJob } from "../SecondJob";
import { ThirdJob } from "../ThirdJob";
import { FourthJob } from "../FourthJob";
export const TimeStamp = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const years = [2021, 2022, 2023, 2024];
  return (
    <Flex flexDirection="column" gap={12}>
      <Text color={"gray-100"}>TimeStamp</Text>
      <Flex justify="between">
        {years.map((year, index) => (
          <div
            key={year}
            className={selectedTab === index ? S.selectedTab : S.timeText}
            onClick={() => setSelectedTab(index)}
          >
            {year}
          </div>
        ))}
      </Flex>
      <div className={S.detailSection}>
        {match(selectedTab)
          .with(0, () => <FirstJob />)
          .with(1, () => <SecondJob />)
          .with(2, () => <ThirdJob />)
          .with(3, () => <FourthJob />)
          .otherwise(() => (
            <></>
          ))}
      </div>
    </Flex>
  );
};
