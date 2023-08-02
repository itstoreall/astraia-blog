import { ReactNode } from "react";
import s from "./Container.module.scss";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return <section className={s.mainContainer}>{children}</section>;
};

export default MainContainer;
