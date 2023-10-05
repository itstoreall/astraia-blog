"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { getCurrentTheme } from "@/utils";
import { IArticle } from "@/interfaces";
import s from "./List.module.scss";
import InnerContainer from "@/components/Containers/InnerContainer";
import ImageHandler from "@/components/Image/ImageHandler";
import Title from "@/components/Title";

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);
  const imgFilter = () => (currentTheme === "dark" ? 50 : 0);

  return (
    <InnerContainer>
      <ul className={`${s.list} ${s[currentTheme]}`}>
        {articles.map((art: IArticle) => (
          <li key={art.id} className={s.item}>
            <Link href={`/articles/${art.id}`}>
              <div className={s.card}>
                <div className={s.thumb}>
                  <ImageHandler
                    cid={art.ipfs}
                    alt={art.title}
                    grayscale={imgFilter()}
                  />
                </div>
                <div className={s.meta}>
                  <Title tag={"h3"} text={art.title} style={"card"} />
                  <p className={s.description}>{art.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </InnerContainer>
  );
};

export default ArticleList;
