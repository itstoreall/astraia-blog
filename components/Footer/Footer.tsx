"use client";
import { useTheme } from "next-themes";
import { getCurrentTheme } from "@/utils";
import FooterContainer from "../Containers/FooterContainer";
import s from "./Footer.module.scss";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Copyright from "./Copyright";

const Footer = () => {
  const { theme } = useTheme();

  const currentTheme = getCurrentTheme(theme);

  return (
    <footer className={s.footer}>
      <FooterContainer>
        <div className={`${s.content} ${s[currentTheme]}`}>
          <ThemeSwitcher />
          <Copyright />
        </div>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
