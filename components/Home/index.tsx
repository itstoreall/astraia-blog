"use client";
import s from "./index.module.scss";
import { useTheme } from "next-themes";
import Title from "../Title";
import ArticleImage from "../Image/ImageHandler";
import InnerContainer from "../Containers/InnerContainer";

const HomeContent = () => {
  const { theme } = useTheme();
  const imgFilter = () => (theme === "dark" ? 50 : 0);

  return (
    <InnerContainer>
      <div className={s.home}>
        <Title tag={"h2"} text={"Духовное саморазвитие"} />

        <div className={s.thumb}>
          <ArticleImage
            cid={""}
            alt={"Вселенная и тонкий мир"}
            grayscale={imgFilter()}
          />
        </div>

        <article className={s.article}>
          <p>
            Добро пожаловать на сайт Astraia, сайт о духовном саморазвитии!
            Здесь вы найдете вдохновение, практические советы и ресурсы, которые
            помогут вам на пути к гармонии, радости и саморазвитию.
          </p>
          <p>
            Сайт Astraia создан с целью помочь людям искать глубинное понимание
            себя, своего места в мире и найти путь к росту и развитию своей
            души. Мы верим, что каждый из нас обладает внутренним потенциалом и
            способностью к преображению, и наша миссия - помочь вам раскрыть
            этот потенциал.
          </p>
          <p>
            На сайте Astraia вы найдете множество материалов, включая статьи,
            блоги, видео и аудиозаписи, которые охватывают различные аспекты
            духовного развития. Мы обсуждаем темы, связанные с медитацией,
            йогой, самоанализом, осознанностью, энергетикой и многими другими
            методами и практиками, которые помогут вам стать лучшей версией
            себя.
          </p>
        </article>
      </div>
    </InnerContainer>
  );
};

export default HomeContent;
