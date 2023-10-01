import { gql } from "@apollo/client";

const GET_ARTICLES = gql`
  query GetArticles($blog: String!) {
    articles(blog: $blog) {
      id
      title
      description
      text
      author
      ipfs
      views
      tags
      timestamp
    }
  }
`;

export default GET_ARTICLES;

/*
query GetArticles {
  articles {
    id
    title
    description
    text
    author
    ipfs
    views
    tags
    timestamp
  }
}
*/
