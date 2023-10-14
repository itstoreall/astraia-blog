import { Metadata } from "next";
import { globalConfig as cfg } from "@/config";
import s from "./page.module.scss";
import HomeContent from "@/components/Home";
import metadataHandler from "@/utils/metadataHandler";
import services from "@/services";

export const metadata: Metadata = metadataHandler(cfg.home.pathname);

const Home = async () => {
  const articles = await services.getServerArticles();

  return (
    <div className={s.content}>
      <HomeContent articles={articles} />
    </div>
  );
};

export default Home;
