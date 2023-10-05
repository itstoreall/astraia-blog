import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { getCurrentTheme } from "@/utils";
import { IArticle } from "@/interfaces";
import s from "./TopThree.module.scss";
import Title from "../Title";
import ImageHandler from "../Image/ImageHandler";
import Label from "../Label";
import ViewCounter from "../ViewCounter";

const TopThree = ({ articles }: { articles: IArticle[] }) => {
  const [topThree, setTopThree] = useState<IArticle[] | null>(null);

  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);
  const imgFilter = () => (currentTheme === "dark" ? 50 : 0);

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
    <div className={s.topThreeWrap}>
      {topThree && (
        <>
          <Label text={"Топ три"} />

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
                        {art?.views && (
                          <ViewCounter
                            views={art?.views}
                            left={"15px"}
                            bottom={"15px"}
                          />
                        )}

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
        </>
      )}
    </div>
  );
};

export default TopThree;
