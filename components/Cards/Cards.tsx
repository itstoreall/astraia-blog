import { useTheme } from "next-themes";
import Link from "next/link";
import { getCurrentTheme } from "@/utils";
import { IArticle } from "@/interfaces";
import s from "./Cards.module.scss";
import ViewCounter from "../ViewCounter";
import ImageHandler from "../Image/ImageHandler";
// import Title from "../Title";
import CardSmallMeta from "../Meta/CardSmallMeta";

const Cards = ({ articles }: { articles: IArticle[] }) => {
  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);
  const imgFilter = () => (currentTheme === "dark" ? 50 : 0);

  return (
    <ul className={`${s.cardList} ${s[currentTheme]}`}>
      {articles.map((art: IArticle) => (
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
