import { GenMetadata } from "@/types";
import { IGenMetadataProps } from "@/interfaces";
import s from "../../page.module.scss";
import services from "@/services";
import ArticleDetails from "@/components/Articles/Details";
import metadataHandler from "@/utils/metadataHandler";
import { updatetArticleViews } from "@/actions/serverActions";

export const generateMetadata: GenMetadata = async ({ params: { id } }) => {
  const article = await services.getArticle(id);
  return metadataHandler("/articles/id", article);
};

const Article = async ({ params: { id } }: IGenMetadataProps) => {
  const article = await services.getArticle(id);

  if (!article) return <p>no article</p>;

  return (
    <div className={s.content}>
      <ArticleDetails article={article} logView={updatetArticleViews} />
    </div>
  );
};

export default Article;
