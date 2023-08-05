import { IContainerProps } from "@/interfaces";
import s from "./Container.module.scss";

const MainContainer = ({ children }: IContainerProps) => {
  return <section className={s.mainContainer}>{children}</section>;
};

export default MainContainer;
