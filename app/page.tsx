import { Metadata } from "next";
import s from "./page.module.scss";
import HomeContent from "@/components/Home";
// import { SITE_DOMAIN } from "@/constants";
import metadataHandler from "@/utils/metadataHandler";
import services from "@/services";

// export const metadata: Metadata = {
//   title: "Astraia",
//   description: "Astraia - статьи o духовном саморазвитии",
//   openGraph: {
//     title: "Astraia",
//     description: "Астрая - статьи o духовном саморазвитии",
//     url: SITE_DOMAIN,
//     siteName: "Astraia",
//     images: [
//       {
//         url: `${SITE_DOMAIN}/_next/static/media/defaultImage.537bc5b3.jpg`,
//         width: 1200,
//         height: 675,
//         alt: "Вселенная и тонкий мир",
//       },
//     ],
//     type: "website",
//   },
// };

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
