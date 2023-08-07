import { GenMetadata } from "@/types";
import { IGenMetadataProps } from "@/interfaces";
// import { SITE_DOMAIN, WEB3_STORAGE } from "@/constants";
import s from "../../page.module.scss";
import services from "@/services";
import ArticleDetails from "@/components/Articles/Details";
import metadataHandler from "@/utils/metadataHandler";

// const domain = SITE_DOMAIN;
// const ipfs = WEB3_STORAGE;

export const generateMetadata: GenMetadata = async ({ params: { id } }) => {
  const article = await services.getArticle(id);
  return metadataHandler("/articles/id", article);

  // return {
  //   title: article.title,
  //   description: article.description,
  //   openGraph: {
  //     title: article.title,
  //     description: article.description,
  //     url: `${domain}/articles/${article.id}`,
  //     siteName: "Astraia",
  //     images: [
  //       {
  //         url: `https://${article.ipfs}.${ipfs}`,
  //         width: 900,
  //         height: 450,
  //         alt: article.title,
  //       },
  //     ],
  //     type: "website",
  //   },
  // };
};

const Article = async ({ params: { id } }: IGenMetadataProps) => {
  const article = await services.getArticle(id);

  if (!article) return <p>no article</p>;

  return (
    <div className={s.content}>
      <ArticleDetails article={article} />
    </div>
  );
};

export default Article;

/*

export const dynamic = "force-dynamic";
export const revalidate = 60;

*/
