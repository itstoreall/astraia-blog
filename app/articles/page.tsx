import { Metadata } from "next";
import services from "@/services";
import s from "../page.module.scss";
import ArticleList from "@/components/Articles/List/List";
import metadataHandler from "@/utils/metadataHandler";

export const metadata: Metadata = metadataHandler("/articles");

const Articles = async () => {
  const articles = await services.getArticles();

  if (!articles?.length) return <p>no articles</p>;

  return (
    <div className={s.content}>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;

/*

export const dynamic = "force-dynamic";
export const revalidate = 10;

*/
