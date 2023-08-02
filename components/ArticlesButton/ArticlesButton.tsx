"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
// import { THEME_BY_DEFAULT } from "@/constants";
import { getCurrentTheme } from "@/utils";
import s from "./ArticlesButton.module.scss";

// const defaultTheme = THEME_BY_DEFAULT;

const ArticlesButton = () => {
  const { theme } = useTheme();

  const width = "29";
  const height = "29";
  const viewBox = "0 0 32 32";

  const currentTheme = getCurrentTheme(theme);
  // const currentTheme =
  //   theme === "light" || theme === "dark" ? theme : defaultTheme;

  return (
    <nav className={`${s.articlesButtonWrap} ${s[currentTheme]}`}>
      <Link href={"/articles"}>
        <div className={s.articlesButton}>
          <svg
            width={width}
            height={height}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h8v8H0zm12 2h20v4H12zM0 12h8v8H0zm12 2h20v4H12zM0 24h8v8H0zm12 2h20v4H12z" />
          </svg>
        </div>
      </Link>
    </nav>
  );
};

export default ArticlesButton;
