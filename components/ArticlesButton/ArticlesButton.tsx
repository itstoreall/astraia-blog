"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import s from "./ArticlesButton.module.scss";

const ArticlesButton = () => {
  const { theme } = useTheme();

  const width = "29";
  const height = "29";
  const viewBox = "0 0 32 32";

  const currentTheme = theme === "light" || theme === "dark" ? theme : "dark";

  return (
    <>
      <Link href={"/articles"}>
        <div className={`${s.articlesButtonWrap} ${s[currentTheme]}`}>
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
        </div>
      </Link>
    </>
  );
};

export default ArticlesButton;
