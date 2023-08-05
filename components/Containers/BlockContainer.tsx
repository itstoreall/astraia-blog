import { IContainerProps } from "@/interfaces";
import s from "./Container.module.scss";

const BlockContainer = ({ children }: IContainerProps) => {
  return <div className={s.blockContainer}>{children}</div>;
};

export default BlockContainer;
