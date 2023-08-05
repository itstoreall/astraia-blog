import { IContainerProps } from "@/interfaces";
import s from "./Container.module.scss";

const HeaderContainer = ({ children }: IContainerProps) => {
  return <div className={s.headerContainer}>{children}</div>;
};

export default HeaderContainer;
