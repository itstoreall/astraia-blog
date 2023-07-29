import Link from 'next/link';

const ArticleList = ({ articles }: { articles: any }) => {
  return (
    <ul>
      <>
        {articles.map((art: any) => (
          <li key={art.id}>
            <Link href={`/articles/${art.id}`}>{art.id}</Link>
          </li>
        ))}
      </>
    </ul>
  );
};

export default ArticleList;
