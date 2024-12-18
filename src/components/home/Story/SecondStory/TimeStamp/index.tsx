import Text from "@/components/core/Text";
import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import { useState } from "react";
import { match } from "ts-pattern";
import { FirstJob } from "../FirstJob";
import { SecondJob } from "../SecondJob";
import { ThirdJob } from "../ThirdJob";
import { FourthJob } from "../FourthJob";
import { Carousel } from "@/components/core/Carousel";
import { MyJobs } from "@/assets/Job/My-Jobs";
import { JobCard } from "@/components/core/JobCard";
export const TimeStamp = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const years = [2021, 2022, 2023, 2024];
  return (
    <Flex flexDirection="column" gap={12} className={S.container}>
      <Text color={"gray-100"}>TimeStamp</Text>
      <Flex justify="between">
        {years.map((year, index) => (
          <div
            key={year}
            className={S.tab({ selected: selectedTab === index })}
            onClick={() => setSelectedTab(index)}
          >
            <Text color={"base-white"}>{year}</Text>
            {selectedTab === index && (
              <Text color={"blue-500"}>I turned {23 + index}</Text>
            )}
          </div>
        ))}
      </Flex>
      <Flex className={S.detailSection} gap={20}>
        {Object.entries(MyJobs).map(([key, value]) => (
          <JobCard key={key} {...value} />
        ))}
      </Flex>
    </Flex>
  );
};
