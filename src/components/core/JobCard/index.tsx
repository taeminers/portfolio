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
      <Flex className={S.mainContentWrapper} flexDirection="column" gap={12}>
        <Flex className={S.imageWrapper} items="center" justify="center">
          <Image
            src={"/grids_logo_white.jpg"}
            width={100}
            height={100}
            alt="job"
          />
        </Flex>
        <Flex flexDirection="column" gap={8}>
          <Text>Title</Text>
          <Text>companyname</Text>
          <Text>
            Job description Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </Text>
        </Flex>
      </Flex>
      <Flex className={S.bottomSection} items="center" justify="center">
        asdf
      </Flex>
    </Flex>
  );
};
