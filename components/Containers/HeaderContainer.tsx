import { ReactNode } from "react";
import s from "./Container.module.scss";

const HeaderContainer = ({ children }: { children: ReactNode }) => {
  return <div className={s.headerContainer}>{children}</div>;
};

export default HeaderContainer;
