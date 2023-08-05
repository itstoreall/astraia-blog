// import Image from "next/image";
import { Metadata } from "next";
import Title from "@/components/Title/Title";
import s from "./page.module.scss";
import HomeContent from "@/components/Home";

export const metadata: Metadata = {
  title: "Astraia",
  description: "Astraia - статьи про духовное саморазвитие",
};

const Home = () => {
  return (
    <div className={s.content}>
      <HomeContent />
    </div>
  );
};

export default Home;
