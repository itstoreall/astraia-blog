import { IMetaProps } from "./types";
import { globalConfig as cfg } from "@/config";
import s from "./Meta.module.scss";
import Title from "../Title";

const CardSmallMeta = ({ title, description }: IMetaProps) => {
  return (
    <div className={s.cardSmallMeta}>
      <Title tag={"h3"} text={title} style={cfg.tagTitle.h3.cardSmall} />
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default CardSmallMeta;
