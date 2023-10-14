"use client";

import { useTheme } from "next-themes";
import { getCurrentTheme } from "@/utils";
import { IArticle } from "@/interfaces";
import { globalConfig as cfg } from "@/config";
import s from "./ArticleList.module.scss";
import InnerContainer from "@/components/Containers/InnerContainer";
import Cards from "@/components/Cards";
import Label from "@/components/Label";

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);

  return (
    <InnerContainer>
      <div className={`${s.articlesWrap} ${s[currentTheme]}`}>
        <Label text={cfg.articles.content.articleList.label} />
        <Cards articles={articles} />
      </div>
    </InnerContainer>
  );
};

export default ArticleList;
