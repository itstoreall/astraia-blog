import { useTheme } from "next-themes";
import Link from "next/link";
import { getCurrentTheme, imgFilter } from "@/utils";
import { IArticle } from "@/interfaces";
import { globalConfig as cfg } from "@/config";
import s from "./Cards.module.scss";
import ViewCounter from "../ViewCounter";
import ImageHandler from "../Image/ImageHandler";
import CardSmallMeta from "../Meta/CardSmallMeta";

const Cards = ({ articles }: { articles: IArticle[] }) => {
  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);

  return (
    <ul className={`${s.cardList} ${s[currentTheme]}`}>
      {articles.map((art: IArticle) => (
        <li key={art.id} className={s.item}>
          <Link href={`${cfg.articles.pathname}/${art.id}`}>
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
                  grayscale={imgFilter(currentTheme)}
                />
              </div>
              <div className={s.meta}>
                <CardSmallMeta
                  title={art.title}
                  description={art.description}
                />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
