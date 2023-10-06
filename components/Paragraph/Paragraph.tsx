import s from "./Paragraph.module.scss";

const Paragraph = ({ text, style }: { text: string; style: string }) => {
  return <p className={`${s.paragraph} ${s[style ? style : ""]}`}>{text}</p>;
};

export default Paragraph;
