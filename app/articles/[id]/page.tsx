import { Metadata } from "next";
import services from "@/services";
import Title from "@/components/Title";

interface IProps {
  params: { id: string };
}

export const generateMetadata = async ({
  params: { id },
}: IProps): Promise<Metadata> => {
  const article = await services.getArticle(id);

  return { title: article.title };
};

const Article = async ({ params: { id } }: IProps) => {
  const article = await services.getArticle(id);

  if (!article) return <p>no article</p>;

  return (
    <main>
      <Title tag={"h2"} text={`Article ${article.title} ${article.id}`} />
    </main>
  );
};

export default Article;

/*

export const dynamic = "force-dynamic";
export const revalidate = 60;

*/
