"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { getCurrentTheme, imgFilter } from "@/utils";
import { IArticleDetailsProps } from "@/interfaces/articleDetails";
import { globalConfig as cfg } from "@/config";
import s from "./Deatails.module.scss";
import InnerContainer from "@/components/Containers/InnerContainer";
import PageMeta from "@/components/Meta/PageMeta";
import PublicationInfoWrapper from "@/components/PublicationInfoWrapper";
import ImageHandler from "@/components/Image/ImageHandler";
import ViewCounter from "@/components/ViewCounter";
import ArticleElements from "@/components/ArticleElements";

const ArticleDetails = ({ article, logView }: IArticleDetailsProps) => {
  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);

  const articleText = JSON.parse(article?.text).articleElements;

  useEffect(() => {
    const storedViews = localStorage.getItem(cfg.gen.lsViewsKey);

    if (storedViews !== null) {
      const views = JSON.parse(storedViews);

      if (Array.isArray(views)) {
        const id = views.find((view) => view === article.id);

        if (id) return;

        views.push(article.id);
        localStorage.setItem(cfg.gen.lsViewsKey, JSON.stringify(views));
        logView(article.id);
      }
    } else {
      localStorage.setItem(cfg.gen.lsViewsKey, JSON.stringify([article.id]));
      logView(article.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InnerContainer>
      <article className={`${s.details} ${s[currentTheme]}`}>
        <div className={s.articleDetails}>
          <PageMeta title={article.title} description={article.description} />

          <PublicationInfoWrapper article={article}>
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
                grayscale={imgFilter(currentTheme)}
              />
            </div>
          </PublicationInfoWrapper>

          <div className={s.articleElementsWrap}>
            <ArticleElements elements={articleText} />
          </div>
        </div>
      </article>
    </InnerContainer>
  );
};

export default ArticleDetails;
