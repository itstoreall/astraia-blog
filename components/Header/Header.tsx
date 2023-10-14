"use client";
import { useTheme } from "next-themes";
import { getCurrentTheme } from "@/utils";
import { globalConfig as cfg } from "@/config";
import s from "./Header.module.scss";
import HeaderContainer from "../Containers/HeaderContainer";
import Link from "next/link";
import Title from "../Title";
import ArticlesButton from "../ArticlesButton";

const Header = () => {
  const { theme } = useTheme();

  const currentTheme = getCurrentTheme(theme);

  return (
    <header className={`${s.header} ${s[currentTheme]}`}>
      <HeaderContainer>
        <ArticlesButton />
        <div className={s.content}>
          <nav className={s.logo}>
            <Link href={cfg.home.pathname}>
              <Title text={cfg.gen.blogTitle} />
            </Link>
          </nav>
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
