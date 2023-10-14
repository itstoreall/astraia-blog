import { Metadata } from "next";
import services from "@/services";
import { globalConfig as cfg } from "@/config";
import s from "../page.module.scss";
import ArticleList from "@/components/Articles/ArticleList";
import metadataHandler from "@/utils/metadataHandler";

export const metadata: Metadata = metadataHandler(cfg.articles.pathname);

const Articles = async () => {
  const articles = await services.getServerArticles();

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
