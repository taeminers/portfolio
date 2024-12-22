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
  selected?: boolean;
  year: number;
}

export const JobCard = ({
  image_url,
  job_title,
  company_name,
  job_description,
  duration,
  selected = false,
}: JobCardProps) => {
  return (
    <Flex
      className={S.container({ selected })}
      flexDirection="column"
      justify="between"
    >
      <Flex className={S.mainContentWrapper} flexDirection="column" gap={20}>
        <Flex flexDirection="column" gap={12}>
          <Text variant={"body2"}>{job_title}</Text>
          <Text variant={"body6"}>{job_description}</Text>
        </Flex>
      </Flex>
      <Flex className={S.bottomSection} items="center" gap={12}>
        <Image
          className={S.imageWrapper}
          src={image_url}
          width={50}
          height={50}
          alt="job"
        />
        <Text variant={"body4"}>{company_name}</Text>
      </Flex>
    </Flex>
  );
};
