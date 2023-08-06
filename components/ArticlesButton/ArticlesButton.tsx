"use client";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation"; // useRouter, useSearchParams
import Link from "next/link";
import { getCurrentTheme } from "@/utils";
import s from "./ArticlesButton.module.scss";

const ArticlesButton = () => {
  const { theme } = useTheme();

  const pathname = usePathname();

  const desc = {
    width: "29",
    height: "29",
    viewBox: "0 0 32 32",
  };

  const width = "25";
  const height = "25";
  const viewBox = "0 0 32 32";

  const currentTheme = getCurrentTheme(theme);

  return (
    <>
      {pathname !== "/articles" && (
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
      )}
    </>
  );
};

export default ArticlesButton;
