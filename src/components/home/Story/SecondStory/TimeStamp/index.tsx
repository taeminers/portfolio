import Text from "@/components/core/Text";
import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import { useState } from "react";
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
    </Flex>
  );
};
