import { Metadata } from "next";
import s from "../../page.module.scss";
import services from "@/services";
import ArticleDetails from "@/components/Articles/Details";
import { SITE_DOMAIN, WEB3_STORAGE } from "@/constants";

interface IProps {
  params: { id: string };
}

type GenMetadata = ({ params: { id } }: IProps) => Promise<Metadata>;

export const generateMetadata: GenMetadata = async ({ params: { id } }) => {
  const article = await services.getArticle(id);

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: SITE_DOMAIN,
      siteName: "Astraia",
      images: [
        {
          url: `https://${article.ipfs}.${WEB3_STORAGE}`,
          width: 900,
          height: 450,
          alt: article.title,
        },
      ],
      type: "website",
    },
  };
};

/*
{
  title: "Astraia",
  description: "Astraia - статьи o духовном саморазвитии",
  openGraph: {
    title: "Astraia",
    description: "Астрая - статьи o духовном саморазвитии",
    url: SITE_DOMAIN,
    siteName: "Astraia",
    images: [
      {
        url: `${SITE_DOMAIN}/_next/static/media/defaultImage.537bc5b3.jpg`,
        width: 1200,
        height: 675,
        alt: "вселенная и тонкий мир",
      },
    ],
    type: "website",
  },
};
*/

const Article = async ({ params: { id } }: IProps) => {
  const article = await services.getArticle(id);

  if (!article) return <p>no article</p>;

  return (
    <div className={s.content}>
      <ArticleDetails article={article} />
      {/* <Title tag={"h2"} text={`Article ${article.title} ${article.id}`} /> */}
    </div>
  );
};

export default Article;

/*

export const dynamic = "force-dynamic";
export const revalidate = 60;

*/
