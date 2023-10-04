"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { IArticle } from "@/interfaces";
import s from "./index.module.scss";
// import { getCurrentTheme } from "@/utils";
import Title from "../Title";
import ImageHandler from "../Image/ImageHandler";
import InnerContainer from "../Containers/InnerContainer";

const HomeContent = ({ articles }: { articles: IArticle[] }) => {
  const [latestArt, setLatestArt] = useState<IArticle | null>(null);
  const [topThree, setTopThree] = useState<IArticle[] | null>(null);

  const { theme } = useTheme();
  // const currentTheme = getCurrentTheme(theme);
  const imgFilter = () => (theme === "dark" ? 50 : 0);

  useEffect(() => {
    // let viewCount = 0;
    // let;

    // for (let i = 0; i < articles?.length; i += 1) {
    //   const element = articles[i];

    //   console.log("===---> element", element.views);
    // }
    const _topThree = articles
      .filter((element) => element !== null)
      .sort((a, b) => Number(b.views) - Number(a.views))
      .slice(0, 3);

    // ----

    let latestDate: number = new Date(0).getTime();
    let _latestArt: IArticle | null = null;

    for (const art of articles) {
      const currentDate = new Date(art.timestamp).getTime();

      if (currentDate > latestDate) {
        latestDate = currentDate;
        _latestArt = art;
      }
    }

    /*
    const latestTimestampString = new Date(latestDate)
      .toISOString()
      .split("T")[0];
    // * */

    // console.log("latestObject:", _topThree);

    // ---

    // let latestArt: number = new Date(0).getTime();

    // for (const art of articles) {
    //   const currentArt = new Date(art.timestamp).getTime();
    //   if (currentArt > latestArt) latestArt = currentArt;
    // }

    // const latestTimestampString = new Date(latestArt)
    //   .toISOString()
    //   .split("T")[0];

    // console.log("Latest Timestamp:", latestTimestampString);

    // ----

    if (_topThree?.length && _latestArt) {
      setTopThree(_topThree);
      setLatestArt(_latestArt);
    }

    // console.log("sortedByViews", _topThree);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("latestArt", latestArt);
  console.log("topThree", topThree);

  return (
    <InnerContainer>
      <div className={s.home}>
        {theme && (
          <article className={`${s.homeContent} ${s[theme]}`}>
            <Title tag={"h2"} text={"Astraia - блог о духовном саморазвитии"} />

            <p className={s.paragraph}>
              Добро пожаловать в мир Астрая, блог о духовном саморазвитии! Здесь
              вы найдете вдохновение, практические советы и ресурсы, которые
              помогут вам на пути к гармонии, радости и саморазвитию. Блог
              Astraia создан с целью помочь людям искать глубинное понимание
              себя, своего места в мире и найти путь к росту и развитию своей
              души. Мы верим, что каждый из нас обладает внутренним потенциалом
              и способностью к преображению. Астрая поможет раскрыть этот
              потенциал.
            </p>

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
                      {/* <h3 className={s.metaTitle}>
                      {
                        "Блог Astraia о духовном саморазвитии и всякое прикольное для поржать и поделиться в соцсетях бла-бла-бла"
                      }
                    </h3> */}
                      <p className={s.metaDescription}>
                        {latestArt.description}
                      </p>
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
                  <ul className={`${s.list} ${s[theme]}`}>
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
                              <Title
                                tag={"h3"}
                                text={art.title}
                                style={"card"}
                              />
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
        )}
      </div>
    </InnerContainer>
  );
};

export default HomeContent;

/*
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
                  <h3 className={s.metaTitle}>
                    {
                      "Блог Astraia о духовном саморазвитии и всякое прикольное для поржать и поделиться в соцсетях бла-бла-бла"
                    }
                  </h3>
                  <p className={s.metaDescription}>{latestArt.description}</p>
                </div>
              </div >
                */
