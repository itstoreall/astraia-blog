import { IViewCounterProps } from "./types";
import { middleGrey } from "@/theme";
import s from "./ViewCounter.module.scss";
import Eye from "./Eye";

const ViewCounter = ({ views, left, bottom }: IViewCounterProps) => {
  const inlineStyle = { left, bottom };

  return (
    <span className={s.viewCounter} style={inlineStyle}>
      <Eye />
      <span className={s.value}>{views}</span>
    </span>
  );
};

export default ViewCounter;
