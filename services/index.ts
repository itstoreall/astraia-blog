import getServerClient from "@/lib/serverClient";
import GET_ARTICLES from "@/gql/getArticles";
import GET_ARTICLE_BY_ID from "@/gql/getArticleById";
import UPDATE_ARTICLE_VIEWS from "@/gql/updateArticleViews";
import { BLOG_NAME } from "@/constants";

const blogName = BLOG_NAME;

const getServerArticles = async () => {
  const { data } = await getServerClient().query({
    query: GET_ARTICLES,
    variables: { blog: blogName },
    context: {
      fetchOptions: { cache: "no-store" },
    },
  });

  if (data) {
    return data?.articles;
  } else return [];
};

const getArticle = async (id: string) => {
  const { data } = await getServerClient().query({
    query: GET_ARTICLE_BY_ID,
    variables: { blog: blogName, id },
    context: {
      fetchOptions: { cache: "no-store" },
    },
  });

  if (data) {
    return data?.getArticleById;
  } else return null;
};

const updatetArticleViews = async (id: string) => {
  const { data } = await getServerClient().mutate({
    mutation: UPDATE_ARTICLE_VIEWS,
    variables: { blog: blogName, ID: id },
    context: {
      fetchOptions: { cache: "no-store" },
    },
  });

  if (data) {
    return data?.updateArticleViews;
  } else return null;
};

const services = {
  getServerArticles,
  getArticle,
  updatetArticleViews,
};

export default services;

/*
context: {
  fetchOptions: { next: { revalidate: 0 } },
  fetchOptions: { cache: "no-store" } },
},
*/
