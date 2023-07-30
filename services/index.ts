import { getClient } from "@/lib/client";
import GET_ARTICLES from "@/gql/getArticles";
import GET_ARTICLE_BY_ID from "@/gql/getArticleById";

const getArticles = async () => {
  const { data } = await getClient().query({
    query: GET_ARTICLES,
    context: {
      fetchOptions: { next: { revalidate: 0 } }, // *
      // fetchOptions: { cache: "no-store" } }, // *
    },
  });

  if (data) {
    return data?.articles;
  } else return [];
};

const getArticle = async (id: string) => {
  const { data } = await getClient().query({
    query: GET_ARTICLE_BY_ID,
    variables: { id },
    context: {
      fetchOptions: { next: { revalidate: 0 } }, // *
      // fetchOptions: { cache: "no-store" } }, // *
    },
  });

  if (data) {
    return data?.getArticleById;
  } else return null;
};

const services = {
  getArticles,
  getArticle,
};

export default services;
