import { gql } from "@apollo/client";

const UPDATE_ARTICLE_VIEWS = gql`
  mutation UpdateArticleViews($blog: String!, $ID: String!) {
    updateArticleViews(blog: $blog, ID: $ID)
  }
`;

export default UPDATE_ARTICLE_VIEWS;
