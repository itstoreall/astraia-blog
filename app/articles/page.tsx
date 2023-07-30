import { Metadata } from "next";
import services from "@/services";
import Title from "@/components/Title";
import ArticleList from "@/components/Articles/ArticleList";

export const metadata: Metadata = {
  title: "Astraia articles",
  description: "Astraia blog - articles",
};

const Articles = async () => {
  const articles = await services.getArticles();

  if (!articles?.length) return <p>no articles</p>;

  return (
    <main>
      <Title tag={"h2"} text={"Articles!"} />
      <ArticleList articles={articles} />
    </main>
  );
};

export default Articles;

/*

export const dynamic = "force-dynamic";
export const revalidate = 10;

*/
