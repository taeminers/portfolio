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
}

export const JobCard = ({
  image_url,
  job_title,
  company_name,
  job_description,
  duration,
}: JobCardProps) => {
  return (
    <Flex className={S.container} flexDirection="column" gap={12}>
      <Flex className={S.mainContentWrapper} flexDirection="column" gap={20}>
        <Flex className={S.imageWrapper} items="center" justify="center">
          <Image src={image_url} width={100} height={100} alt="job" />
        </Flex>
        <Flex flexDirection="column" gap={12}>
          <Text variant={"body2"}>{job_title}</Text>
          <Text variant={"body4"}>{company_name}</Text>
          <Text variant={"body6"}>{job_description}</Text>
        </Flex>
      </Flex>
      <Flex className={S.bottomSection} items="center" justify="center">
        {duration}
      </Flex>
    </Flex>
  );
};
