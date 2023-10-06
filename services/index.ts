import { getClient } from "@/lib/client";
import GET_ARTICLES from "@/gql/getArticles";
import GET_ARTICLE_BY_ID from "@/gql/getArticleById";
import UPDATE_ARTICLE_VIEWS from "@/gql/updateArticleViews";
import { BLOG_NAME } from "@/constants";

const blogName = BLOG_NAME;

const getArticles = async () => {
  const { data } = await getClient().query({
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
  const { data } = await getClient().query({
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
  const { data } = await getClient().mutate({
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
  getArticles,
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
