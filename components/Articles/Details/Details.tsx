"use client";
import { useTheme } from "next-themes";
import s from "./Deatails.module.scss";
import * as constants from "@/constants";
import Title from "../../Title";
import InnerContainer from "@/components/Containers/InnerContainer";
import ImageHandler from "@/components/Image/ImageHandler";
import { getCurrentTheme } from "@/utils";

const convertDate = (timestamp: string) => {
  const today = "Сегодня";
  const date = timestamp ? timestamp.split("-") : today;
  const months = constants.MONTHS;
  return timestamp
    ? `${date[2]} ${months[Number(date[1]) - 1]} ${date[0]}`
    : today;
};

const ArticleDetails = ({ article }: { article: any }) => {
  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);
  const imgFilter = () => (theme === "dark" ? 50 : 0);

  const articleText = JSON.parse(article?.text).articleElements;

  // console.log("article.text", article);
  // console.log("articleText", articleText);

  return (
    <InnerContainer>
      <div className={`${s.details} ${s[currentTheme]}`}>
        <div className={s.articleDetails}>
          <Title tag={"h2"} text={article.title} />
          <p className={s.description}>{article.description}</p>
          <div className={s.publicationDate}>
            <p className={s.author}>{`Автор: ${article.author}`}</p>
            <p className={s.timestamp}>{`Публикация: ${convertDate(
              article.timestamp
            )}`}</p>
          </div>

          <div className={s.thumb}>
            <ImageHandler
              cid={article.ipfs}
              alt={article.title}
              grayscale={imgFilter()}
            />
          </div>
          {/* <div className={s.thumb}>
            <Image
              src={imageData ? imageData : setImageSrc(ipfs)}
              unoptimized
              alt="Uploaded 3"
              width={width}
              height={height}
            />
          </div> */}

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
      </div>
    </InnerContainer>
  );
};

export default ArticleDetails;
