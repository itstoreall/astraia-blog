import { useEffect, useState } from "react";
import { IArticle } from "@/interfaces";
import { globalConfig as cfg } from "@/config";
import s from "./TopThree.module.scss";
import Label from "../Label";
import Cards from "../Cards";

const TopThree = ({ articles }: { articles: IArticle[] }) => {
  const [topThree, setTopThree] = useState<IArticle[] | null>(null);

  useEffect(() => {
    const _topThree = articles
      .filter((element) => element !== null)
      .sort((a, b) => Number(b.views) - Number(a.views))
      .slice(0, 3);

    if (_topThree?.length) {
      setTopThree(_topThree);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.topThree}>
      {topThree && (
        <>
          <Label text={cfg.topThree.label} />

          <div className={s.cards}>
            <Cards articles={topThree} />
          </div>
        </>
      )}
    </div>
  );
};

export default TopThree;
