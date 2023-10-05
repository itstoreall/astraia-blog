import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { getCurrentTheme } from "@/utils";
import { IArticle } from "@/interfaces";
import s from "./TopThree.module.scss";
import Title from "../Title";
import ImageHandler from "../Image/ImageHandler";
import Label from "../Label";
import Cards from "../Cards";
import ViewCounter from "../ViewCounter";

const TopThree = ({ articles }: { articles: IArticle[] }) => {
  const [topThree, setTopThree] = useState<IArticle[] | null>(null);

  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);
  const imgFilter = () => (currentTheme === "dark" ? 50 : 0);

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
    <div className={s.topThreeWrap}>
      {topThree && (
        <>
          <Label text={"Топ три"} />

          <div
            className={s.topThree}
            onClick={() => console.log("click topThree")}
          >
            <Cards articles={topThree} />
          </div>
        </>
      )}
    </div>
  );
};

export default TopThree;
