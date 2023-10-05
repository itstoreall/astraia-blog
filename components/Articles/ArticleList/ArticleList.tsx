"use client";

import { IArticle } from "@/interfaces";
import InnerContainer from "@/components/Containers/InnerContainer";
import Cards from "@/components/Cards";

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
  return (
    <InnerContainer>
      <Cards articles={articles} />
    </InnerContainer>
  );
};

export default ArticleList;
