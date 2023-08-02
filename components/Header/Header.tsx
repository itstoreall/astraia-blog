"use client";
import { useTheme } from "next-themes";
import { getCurrentTheme } from "@/utils";
import s from "./Header.module.scss";
import HeaderContainer from "../Containers/HeaderContainer";
import Logo from "../logo";
import ArticlesButton from "../ArticlesButton";

const Header = () => {
  const { theme } = useTheme();

  const currentTheme = getCurrentTheme(theme);

  return (
    <header className={s.header}>
      <HeaderContainer>
        <div className={`${s.content} ${s[currentTheme]}`}>
          <Logo />
          <ArticlesButton />
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
