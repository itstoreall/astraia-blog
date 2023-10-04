import { IArticle } from ".";

export interface IArticleDetailsProps {
  article: IArticle;
  logView(id: string): void;
}
