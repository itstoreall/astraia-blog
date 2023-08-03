import { FC } from "react";
import s from "./Title.module.scss";

interface TitleProps {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
}

const Title: FC<TitleProps> = ({ tag, text }) => {
  const Tag = tag || "h1";

  return <Tag className={s.title}>{text}</Tag>;
};

export default Title;
