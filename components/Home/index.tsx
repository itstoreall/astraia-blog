"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IArticle } from "@/interfaces";
import { getCurrentTheme } from "@/utils";
import { home } from "@/utils/metadataHandler";
import s from "./index.module.scss";
import Title from "../Title";
import InnerContainer from "../Containers/InnerContainer";
import LatestArticle from "../LatestArticle";
import TopThree from "../TopThree";

const HomeContent = ({ articles }: { articles: IArticle[] }) => {
  const [latestArt, setLatestArt] = useState<IArticle | null>(null);
  const [topThree, setTopThree] = useState<IArticle[] | null>(null);

  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);
  // const imgFilter = () => (currentTheme === "dark" ? 50 : 0);

  useEffect(() => {
    const _topThree = articles
      .filter((element) => element !== null)
      .sort((a, b) => Number(b.views) - Number(a.views))
      .slice(0, 3);

    if (_topThree?.length) {
      setTopThree(_topThree);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InnerContainer>
      <div className={s.home}>
        <article className={`${s.homeContent} ${s[currentTheme]}`}>
          <Title tag={"h2"} text={"Блог о духовном саморазвитии"} />
          <p className={s.paragraph}>{home.description}</p>

          {articles && <LatestArticle articles={articles} />}
          {topThree && <TopThree topThree={topThree} />}
        </article>
      </div>
    </InnerContainer>
  );
};

export default HomeContent;
