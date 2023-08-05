"use client";
import { useTheme } from "next-themes";
import { getCurrentTheme } from "@/utils";
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
        <div className={s.content}>
          <nav>
            <Link href={"/"}>
              <Title text={"Astraia"} />
            </Link>
          </nav>

          <ArticlesButton />
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
