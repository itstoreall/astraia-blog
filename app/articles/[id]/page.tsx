import { Metadata } from "next";
import s from "../../page.module.scss";
import services from "@/services";
import ArticleDetails from "@/components/Articles/Details";

interface IProps {
  params: { id: string };
}

type GenMetadata = ({ params: { id } }: IProps) => Promise<Metadata>;

export const generateMetadata: GenMetadata = async ({ params: { id } }) => {
  const article = await services.getArticle(id);

  return {
    title: article.title,
    description: article.description,
  };
};

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
