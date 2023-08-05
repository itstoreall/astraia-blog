import { IContainerProps } from "@/interfaces";
import s from "./Container.module.scss";

const FooterContainer = ({ children }: IContainerProps) => {
  return <div className={s.footerContainer}>{children}</div>;
};

export default FooterContainer;
