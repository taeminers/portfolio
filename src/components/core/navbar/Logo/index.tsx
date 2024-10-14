import { useRouter } from "next/navigation";
import * as S from "./styles.css";

export const Logo = () => {
  const router = useRouter();
  return (
    <div className={S.container} onClick={() => router.push("/hello")}>
      Kyle
    </div>
  );
};
