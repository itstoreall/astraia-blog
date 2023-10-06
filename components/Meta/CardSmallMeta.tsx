import { IMetaProps } from "./types";
import s from "./Meta.module.scss";
import Title from "../Title";

const CardSmallMeta = ({ title, description }: IMetaProps) => {
  return (
    <div className={s.cardSmallMeta}>
      <Title tag={"h3"} text={title} style={"card_small"} />
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default CardSmallMeta;
