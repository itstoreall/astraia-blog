import GET_ARTICLE_BY_ID from '@/gql/getArticleById';
import client from '@/utils/apolloClient';

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;

  const { data } = await client.query({
    query: GET_ARTICLE_BY_ID,
    variables: { id },
  });

  if (!data) return { notFound: true };

  return {
    props: { article: data.getArticleById },
  };
};

const Article = ({ article }: { article: any }) => {
  console.log('article --->', article);
  return <p>{`${article.title} ${article.id}`}</p>;
};

export default Article;
