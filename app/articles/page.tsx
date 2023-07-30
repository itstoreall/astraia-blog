import { Metadata } from "next";
// import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getClient } from "@/lib/client";
import GET_ARTICLES from "@/gql/getArticles";
import Title from "@/components/Title";
import ArticleList from "@/components/Articles/ArticleList";

export const metadata: Metadata = {
  title: "Astraia articles",
  description: "Astraia blog - articles",
};

const Articles = async () => {
  const { data } = await getClient().query({
    query: GET_ARTICLES,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  if (!data) return <p>no articles</p>;

  const articles = data?.articles || [];

  return (
    <main>
      <Title tag={"h2"} text={"Articles!"} />
      <ArticleList articles={articles} />
    </main>
  );
};

export default Articles;
