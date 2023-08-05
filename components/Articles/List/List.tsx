import Link from "next/link";
import { IArticle } from "@/interfaces";
import s from "./List.module.scss";
import ImageHandler from "@/components/Image/ImageHandler";
import Title from "@/components/Title";
import CardContainer from "@/components/Containers/CardContainer";

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
  return (
    <ul className={s.list}>
      {articles.map((art: IArticle) => (
        <li key={art.id} className={s.item}>
          <Link href={`/articles/${art.id}`}>
            <div className={s.card}>
              <CardContainer>
                <div className={s.thumb}>
                  <ImageHandler
                    cid={art.ipfs}
                    alt={art.title}
                    size={"halved"}
                  />
                </div>
                <div className={s.meta}>
                  <Title tag={"h3"} text={art.title} style={"card"} />
                  <p className={s.description}>{art.description}</p>
                </div>
              </CardContainer>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
