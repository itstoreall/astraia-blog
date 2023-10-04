import { Metadata } from "next";
import s from "./page.module.scss";
import HomeContent from "@/components/Home";
import metadataHandler from "@/utils/metadataHandler";
import services from "@/services";

export const metadata: Metadata = metadataHandler("/");

const Home = async () => {
  const articles = await services.getArticles();

  return (
    <div className={s.content}>
      <HomeContent articles={articles} />
    </div>
  );
};

export default Home;
