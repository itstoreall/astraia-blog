import { ReactNode } from "react";
import s from "./Container.module.scss";

const FooterContainer = ({ children }: { children: ReactNode }) => {
  return <div className={s.footerContainer}>{children}</div>;
};

export default FooterContainer;
