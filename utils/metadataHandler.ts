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

const home = {
  title: "Astraia",
  description: "Astraia - статьи o духовном саморазвитии",
  openGraph: {
    title: "Astraia",
    description: "Астрая - статьи o духовном саморазвитии",
    ...defaultFields,
  },
};

const articles = {
  title: "Cтатьи o духовном саморазвитии",
  description: "Astraia blog - статьи про тонкий мир и духовное саморазвитие",
  openGraph: {
    title: "Cтатьи o духовном саморазвитии",
    description: "Astraia blog - статьи про тонкий мир и духовное саморазвитие",
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
