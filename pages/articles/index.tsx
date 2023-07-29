import GET_ARTICLES from '@/gql/getArticles';
import client from '@/utils/apolloClient';
import Title from '@/components/Title';
import Head from 'next/head';
import ArticleList from '@/components/Articles';

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ARTICLES,
  });

  if (!data) return { notFound: true };

  return {
    props: { articles: data.articles },
  };
};

const Articles = ({ articles }: { articles: any }) => {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name='description' content='Articles' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title tag={'h2'} text={'Articles'} />

      <main>
        <ArticleList articles={articles} />
      </main>
    </>
  );
};

export default Articles;
