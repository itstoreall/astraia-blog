import { globalConfig as cfg } from "@/config";
import s from "./PublicationInfoWrapper.module.scss";

const PublicationInfoWrapper = ({ children, article }: any) => {
  const { today, author, publication, id } = cfg.details.content;

  const convertDate = (timestamp: string) => {
    const date = timestamp ? timestamp.split("-") : today;
    const months = cfg.gen.months;
    return timestamp
      ? `${date[2]} ${months[Number(date[1]) - 1]} ${date[0]}`
      : today;
  };

  return (
    <>
      <div className={s.publicationDate}>
        <p className={s.author}>{`${author}: ${article.author}`}</p>
        <p className={s.timestamp}>{`${publication}: ${convertDate(
          article.timestamp
        )}`}</p>
      </div>

      {children}

      <p className={s.id}>{`${id.key}: ${article.id || id.defaultValue}`}</p>
    </>
  );
};

export default PublicationInfoWrapper;
