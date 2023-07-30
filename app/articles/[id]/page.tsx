import { Metadata } from "next";
import { getClient } from "@/lib/client";
import GET_ARTICLE_BY_ID from "@/gql/getArticleById";
import Title from "@/components/Title";

interface IProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params: { id },
}: IProps): Promise<Metadata> => {
  return { title: id };
};

export const revalidate = 60;

const Article = async ({ params: { id } }: IProps) => {
  const { data } = await getClient().query({
    query: GET_ARTICLE_BY_ID,
    variables: { id },
    // context: {
    //   fetchOptions: {
    //     next: { revalidate: 60 },
    //   },
    // },
  });

  if (!data) return <p>no article</p>;

  const article = data?.getArticleById;

  return (
    <main>
      <Title tag={"h2"} text={`Article ${article.title} ${article.id}`} />
    </main>
  );
};

export default Article;
