"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { IArticle } from "@/interfaces";
import { getCurrentTheme } from "@/utils";
import { home } from "@/utils/metadataHandler";
import s from "./index.module.scss";
import Title from "../Title";
import ImageHandler from "../Image/ImageHandler";
import InnerContainer from "../Containers/InnerContainer";

const HomeContent = ({ articles }: { articles: IArticle[] }) => {
  const [latestArt, setLatestArt] = useState<IArticle | null>(null);
  const [topThree, setTopThree] = useState<IArticle[] | null>(null);

  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);
  const imgFilter = () => (theme === "dark" ? 50 : 0);

  useEffect(() => {
    const _topThree = articles
      .filter((element) => element !== null)
      .sort((a, b) => Number(b.views) - Number(a.views))
      .slice(0, 3);

    let latestDate: number = new Date(0).getTime();
    let _latestArt: IArticle | null = null;

    for (const art of articles) {
      const currentDate = new Date(art.timestamp).getTime();

      if (currentDate > latestDate) {
        latestDate = currentDate;
        _latestArt = art;
      }
    }

    if (_topThree?.length && _latestArt) {
      setTopThree(_topThree);
      setLatestArt(_latestArt);
    }

    /*
    const latestTimestampString = new Date(latestDate)
      .toISOString()
      .split("T")[0];
    // * */

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InnerContainer>
      <div className={s.home}>
        <article className={`${s.homeContent} ${s[currentTheme]}`}>
          <Title tag={"h2"} text={"Блог о духовном саморазвитии"} />

          <p className={s.paragraph}>{home.description}</p>

          {latestArt && (
            <div className={s.latestArticleWrap}>
              <div className={s.labelWrap}>
                <span className={s.labelTitle}>Недавняя публикация</span>
                <span className={s.labelLine} />
              </div>

              <div
                className={s.latestArticle}
                onClick={() => console.log("click latestArticle")}
              >
                <div className={s.thumb}>
                  <ImageHandler
                    cid={latestArt.ipfs}
                    alt={"Вселенная и тонкий мир"}
                    grayscale={imgFilter()}
                  />
                </div>

                <div className={s.metaWrap}>
                  <div className={s.metaContent}>
                    <h3 className={s.metaTitle}>{latestArt.title}</h3>
                    <p className={s.metaDescription}>{latestArt.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {topThree && (
            <div className={s.topThreeWrap}>
              <div className={s.labelWrap}>
                <span className={s.labelTitle}>Топ три</span>
                <span className={s.labelLine} />
              </div>

              <div
                className={s.topThree}
                onClick={() => console.log("click topThree")}
              >
                <ul className={`${s.list} ${s[currentTheme]}`}>
                  {topThree.map((art: IArticle) => (
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
              </div>
            </div>
          )}
        </article>
      </div>
    </InnerContainer>
  );
};

export default HomeContent;
