import Flex from "@/components/core/Flex";
import * as S from "./styles.css";
import Text from "@/components/core/Text";
import { useEffect } from "react";
export const ThirdStory = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/medium/me", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data from Medium API");
        }
        const { data } = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data from Medium API:", error);
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
      }
    };
    fetchData();
  }, []);
  return (
    <div className={S.container}>
      <Flex flexDirection="column">
        <Text variant={"heading3"}>How I Think</Text>
        <Text variant={"heading2"}>Think</Text>
      </Flex>
      <div className={S.grid}>
        <div style={{ background: "red", width: "40vw", height: "40vh" }}>
          Picture
        </div>
        <div style={{ background: "blue", width: "40vw", height: "40vh" }}>
          Picture
        </div>
        <div style={{ background: "green", width: "40vw", height: "40vh" }}>
          Picture
        </div>
        <div style={{ background: "orange", width: "40vw", height: "40vh" }}>
          Picture
        </div>
      </div>
    </div>
  );
};
