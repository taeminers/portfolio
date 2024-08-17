import * as S from "./styles.css";

export const PreLoader = () => {
  return (
    <div className={S.container}>
      <div className={S.text}>Discipline is </div>
      <div className={S.text}>not about perfection.</div>
    </div>
  );
};
