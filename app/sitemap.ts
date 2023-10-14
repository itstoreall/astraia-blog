import GET_ARTICLES from "@/gql/getArticles";
import { BLOG_NAME, SITE_DOMAIN } from "@/constants";
import functionClient from "@/lib/functionClient";
import { IArticle } from "@/interfaces";

const baseUrl = SITE_DOMAIN;
const blog = BLOG_NAME;
const artsRoute = "articles";

const convertDate = (inputDate: string) => {
  const date = new Date(inputDate);
  date.setUTCHours(14);
  date.setUTCMinutes(18);
  date.setUTCSeconds(6);
  date.setUTCMilliseconds(754);
  return date.toISOString();
};

const sitemap = async () => {
  const { data }: { data: { articles: IArticle[] } } =
    await functionClient().query({
      query: GET_ARTICLES,
      variables: { blog },
      context: {
        fetchOptions: { cache: "no-store" },
      },
    });

  const articles = data.articles.map(({ id, timestamp }) => ({
    url: `${baseUrl}/${artsRoute}/${id}`,
    lastModified: convertDate(timestamp),
    changeFrequency: "weekly",
    priority: 1,
  }));

  const routes = ["/", `/${artsRoute}`].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...routes, ...articles];
};

export default sitemap;
