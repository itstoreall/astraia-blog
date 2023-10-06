import s from "./ArticleElements.module.scss";
import Paragraph from "../Paragraph";
import Title from "../Title";
import { IElementsProps } from "./types";

const ArticleElements = ({ elements }: IElementsProps) => {
  return (
    <div className={s.articleElements}>
      {elements.map((el: { name: string; text: string }, index: number) =>
        el.name === "title" ? (
          <Title key={index} tag={"h3"} text={el.text} style={"art_subtitle"} />
        ) : el.name === "paragraph" ? (
          <Paragraph key={index} text={el.text} style={"art_paragraph"} />
        ) : null
      )}
    </div>
  );
};

export default ArticleElements;
