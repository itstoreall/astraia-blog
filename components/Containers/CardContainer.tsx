import { IContainerProps } from "@/interfaces";
import s from "./Container.module.scss";

const CardContainer = ({ children }: IContainerProps) => {
  return <div className={s.cardContainer}>{children}</div>;
};

export default CardContainer;
