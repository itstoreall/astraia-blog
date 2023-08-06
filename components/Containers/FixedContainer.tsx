import { IContainerProps } from "@/interfaces";
import s from "./Container.module.scss";

const FixedContainer = ({ children }: IContainerProps) => {
  return <div className={s.fixedContainer}>{children}</div>;
};

export default FixedContainer;
