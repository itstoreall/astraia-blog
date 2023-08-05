import { Metadata } from "next";
import services from "@/services";
import s from "../page.module.scss";
// import Title from "@/components/Title";
import ArticleList from "@/components/Articles/List/List";

export const metadata: Metadata = {
  title: "Статьи про духовное саморазвитие",
  description: "Astraia blog - статьи про духовное саморазвитие",
};

const Articles = async () => {
  const articles = await services.getArticles();

  if (!articles?.length) return <p>no articles</p>;

  return (
    <div className={s.content}>
      {/* <Title tag={"h2"} text={"Articles!"} /> */}
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;

/*

export const dynamic = "force-dynamic";
export const revalidate = 10;

*/
