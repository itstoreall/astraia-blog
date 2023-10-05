import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { getCurrentTheme } from "@/utils";
import { IArticle } from "@/interfaces";
import s from "./LatestArticle.module.scss";
import ImageHandler from "../Image/ImageHandler";
import Title from "../Title";
import Label from "../Label";
import ViewCounter from "../ViewCounter";

const LatestArticle = ({ articles }: { articles: IArticle | IArticle[] }) => {
  const [latestArt, setLatestArt] = useState<IArticle | null>(null);

  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);
  const imgFilter = () => (currentTheme === "dark" ? 50 : 0);

  useEffect(() => {
    let latestDate: number = new Date(0).getTime();
    let _latestArt: IArticle | null = null;

    if (Array.isArray(articles)) {
      for (const art of articles) {
        const currentDate = new Date(art.timestamp).getTime();

        if (currentDate > latestDate) {
          latestDate = currentDate;
          _latestArt = art;
        }
      }
    } else _latestArt = articles;

    if (_latestArt) {
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
    <div className={s.latestArticleWrap}>
      <Label text={"Недавняя публикация"} />

      {latestArt && (
        <Link href={`/articles/${latestArt.id}`}>
          <div
            className={s.latestArticle}
            onClick={() => console.log("click latestArticle")}
          >
            <div className={s.thumb}>
              {latestArt?.views && (
                <ViewCounter
                  views={latestArt?.views}
                  left={"15px"}
                  bottom={"15px"}
                />
              )}

              <ImageHandler
                cid={latestArt.ipfs}
                alt={"Вселенная и тонкий мир"}
                grayscale={imgFilter()}
              />
            </div>

            <div className={s.metaWrap}>
              <div className={s.metaContent}>
                <Title
                  tag={"h3"}
                  text={latestArt.title}
                  style={"card_medium"}
                />
                <p className={s.metaDescription}>{latestArt.description}</p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default LatestArticle;
