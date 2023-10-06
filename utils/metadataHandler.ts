import { Metadata } from "next";
import { IArticle } from "@/interfaces";
import { SITE_DOMAIN, WEB3_STORAGE } from "@/constants";

const domain = SITE_DOMAIN;
const ipfs = WEB3_STORAGE;

const defaultImage = {
  url: `${domain}/_next/static/media/defaultImage.537bc5b3.jpg`,
  width: 1200,
  height: 675,
  alt: "Вселенная и тонкий мир",
};

const defaultFields = {
  url: domain,
  siteName: "Astraia",
  images: [defaultImage],
  type: "website",
};

export const home = {
  title: "Astraia",
  description:
    "Добро пожаловать в мир Астрая, блог о духовном саморазвитии! Здесь вы найдете вдохновение, практические советы и ресурсы, которые помогут вам на пути к гармонии, радости и саморазвитию. Блог Астрая создан с целью помочь людям искать глубинное понимание себя, своего места в мире и найти путь к росту и развитию своей души. Мы верим, что каждый из нас обладает внутренним потенциалом и способностью к преображению. Астрая поможет раскрыть этот потенциал.",
  openGraph: {
    title: "Astraia",
    description:
      "Добро пожаловать в мир Астрая, блог о духовном саморазвитии! Здесь вы найдете вдохновение, практические советы и ресурсы, которые помогут вам на пути к гармонии, радости и саморазвитию. Блог Астрая создан с целью помочь людям искать глубинное понимание себя, своего места в мире и найти путь к росту и развитию своей души. Мы верим, что каждый из нас обладает внутренним потенциалом и способностью к преображению. Астрая поможет раскрыть этот потенциал.",
    ...defaultFields,
  },
};

const articles = {
  title: "Cтатьи о тонком мире и духовном саморазвитии",
  description:
    "Cтатьи о тонком мире и духовном саморазвитии. Раскрываем темы жизни и смерти, души и тонкого тела, восприятия реальности и иллюзии. Исследуется: нумерология, эзотерика, тонкие энергии",
  openGraph: {
    title: "Cтатьи о тонком мире и духовном саморазвитии",
    description:
      "Cтатьи о тонком мире и духовном саморазвитии. Раскрываем темы жизни и смерти, души и тонкого тела, восприятия реальности и иллюзии. Исследуется: нумерология, эзотерика, тонкие энергии",
    ...defaultFields,
  },
};

const metadataHandler = (path: string, article?: IArticle): Metadata => {
  return path === "/"
    ? home
    : path === "/articles"
    ? articles
    : path === "/articles/id" && article
    ? {
        title: article.title,
        description: article.description,
        openGraph: {
          title: article.title,
          description: article.description,
          url: `${domain}/articles/${article.id}`,
          siteName: "Astraia",
          images: [
            {
              url: `https://${article.ipfs}.${ipfs}`,
              width: 900,
              height: 450,
              alt: article.title,
            },
          ],
          type: "website",
        },
      }
    : home;
};

export default metadataHandler;
