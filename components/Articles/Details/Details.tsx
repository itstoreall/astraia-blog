import s from "./Deatails.module.scss";
import Title from "../../Title";

const ArticleDetails = ({ article }: { article: any }) => {
  return (
    <div className={s.details}>
      <Title tag={"h2"} text={`Article ${article.title} ${article.id}`} />
    </div>
  );
};

export default ArticleDetails;
