import { TitleType } from "@/types";
import s from "./Title.module.scss";

const Title: TitleType = ({ tag, text, style }) => {
  const Tag = tag || "h1";

  return <Tag className={`${s.title} ${s[style ? style : ""]}`}>{text}</Tag>;
};

export default Title;
