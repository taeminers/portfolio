import { useRouter } from "next/navigation";
import * as S from "./styles.css";

export const Logo = () => {
  const router = useRouter();
  return <div className={S.container}>Kyle</div>;
};
