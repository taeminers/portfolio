import Flex from "../Flex";
import Text from "../Text";
import * as S from "./styles.css";
import Image from "next/image";
interface JobCardProps {
  image_url: string;
  job_title: string;
  company_name: string;
  job_description: string;
  duration: string;
  chip: string[];
  selected?: boolean;
  year: number;
  link: string;
}

export const JobCard = ({
  image_url,
  job_title,
  company_name,
  job_description,
  chip,
  duration,
  link,
  selected = false,
}: JobCardProps) => {
  return (
    <Flex className={S.container({ selected })} flexDirection="column" gap={20}>
      <Flex className={S.topSection} justify="between" items={"center"}>
        <Flex justify="center" items="center" className={S.logoWrapper}>
          <Image
            className={S.companyLogo}
            src={image_url}
            width={30}
            height={30}
            alt={job_title}
          />
        </Flex>
        <Flex
          items={"center"}
          gap={4}
          className={S.linkWrapper}
          onClick={() => window.open(link)}
        >
          <Text
            variant={"label1"}
            color={"gray-500"}
            style={{ fontWeight: "200" }}
          >
            link
          </Text>
          <Image src={"/outlink.png"} width={15} height={15} alt="outlink" />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap={12}>
        <Flex items={"center"} gap={6}>
          <Text variant={"heading9"}>{company_name}</Text>
          <div className={S.duration}>{duration}</div>
        </Flex>
        <Text variant={"heading6"}>{job_title}</Text>
        <Flex items={"center"} gap={4}>
          {chip.map((content, index) => (
            <Flex className={S.chip} key={index}>
              {content}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <div>
        <div className={S.separator} />
        <Flex>
          <Text variant={"body6"}>{job_description}</Text>
        </Flex>
      </div>
    </Flex>
  );
};
