import { IContainerProps } from "@/interfaces";
import s from "./Container.module.scss";

const InnerContainer = ({ children }: IContainerProps) => {
  return <div className={s.innerContainer}>{children}</div>;
};

export default InnerContainer;
