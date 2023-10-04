"use client";
import { useTheme } from "next-themes";
// import { getCurrentTheme } from "@/utils";
import s from "./Header.module.scss";
import HeaderContainer from "../Containers/HeaderContainer";
import Link from "next/link";
import Title from "../Title";
import ArticlesButton from "../ArticlesButton";

const Header = () => {
  const { theme } = useTheme();

  // const currentTheme = getCurrentTheme(theme);

  return (
    <>
      {theme && (
        <header className={`${s.header} ${s[theme]}`}>
          <HeaderContainer>
            <ArticlesButton />
            <div className={s.content}>
              <nav className={s.logo}>
                <Link href={"/"}>
                  <Title text={"Astraia"} />
                </Link>
              </nav>
            </div>
          </HeaderContainer>
        </header>
      )}
    </>
  );
};

export default Header;
