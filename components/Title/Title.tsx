import { FC } from "react";

interface TitleProps {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
}

const Title: FC<TitleProps> = ({ tag, text }) => {
  const Tag = tag || "h1";

  return <Tag>{text}</Tag>;
};

export default Title;
