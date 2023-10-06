"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { getCurrentTheme } from "@/utils";
import { IArticleDetailsProps } from "@/interfaces/articleDetails";
import * as constants from "@/constants";
import s from "./Deatails.module.scss";
import InnerContainer from "@/components/Containers/InnerContainer";
import PageMeta from "@/components/Meta/PageMeta";
import ImageHandler from "@/components/Image/ImageHandler";
import ViewCounter from "@/components/ViewCounter";

const lsViewsKey = constants.LS_VIEWS_KEY;

const convertDate = (timestamp: string) => {
  const today = "Сегодня";
  const date = timestamp ? timestamp.split("-") : today;
  const months = constants.MONTHS;
  return timestamp
    ? `${date[2]} ${months[Number(date[1]) - 1]} ${date[0]}`
    : today;
};

const ArticleDetails = ({ article, logView }: IArticleDetailsProps) => {
  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);
  const imgFilter = () => (currentTheme === "dark" ? 50 : 0);

  const articleText = JSON.parse(article?.text).articleElements;

  useEffect(() => {
    const storedViews = localStorage.getItem(lsViewsKey);

    if (storedViews !== null) {
      const views = JSON.parse(storedViews);

      if (Array.isArray(views)) {
        const id = views.find((view) => view === article.id);

        if (id) return;

        views.push(article.id);
        localStorage.setItem(lsViewsKey, JSON.stringify(views));
        logView(article.id);
      }
    } else {
      localStorage.setItem(lsViewsKey, JSON.stringify([article.id]));
      logView(article.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InnerContainer>
      <article className={`${s.details} ${s[currentTheme]}`}>
        <div className={s.articleDetails}>
          <PageMeta title={article.title} description={article.description} />

          <div className={s.publicationDate}>
            <p className={s.author}>{`Автор: ${article.author}`}</p>
            <p className={s.timestamp}>{`Публикация: ${convertDate(
              article.timestamp
            )}`}</p>
          </div>

          <div className={s.thumb}>
            {article?.views && (
              <ViewCounter
                views={article?.views}
                left={"15px"}
                bottom={"15px"}
              />
            )}

            <ImageHandler
              cid={article.ipfs}
              alt={article.title}
              grayscale={imgFilter()}
            />
          </div>

          <p className={s.id}>{`ID: ${article.id || "000"}`}</p>

          <div className={s.articleElements}>
            {articleText.map(
              (el: { name: string; text: string }, index: number) =>
                el.name === "title" ? (
                  <h3 className={s.subTitle} key={index}>
                    {el.text}
                  </h3>
                ) : (
                  <p className={s.paragraph} key={index}>
                    {el.text}
                  </p>
                )
            )}
          </div>
        </div>
      </article>
    </InnerContainer>
  );
};

export default ArticleDetails;
