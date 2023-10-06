"use client";

import { useTheme } from "next-themes";
import { getCurrentTheme } from "@/utils";
import { IArticle } from "@/interfaces";
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
        <Label text={"Статьи"} />
        <Cards articles={articles} />
      </div>
    </InnerContainer>
  );
};

export default ArticleList;
