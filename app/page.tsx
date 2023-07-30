// import Image from "next/image";
import Title from "@/components/Title/Title";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <div className={styles.main}>
      <Title tag={"h2"} text={"Home"} />
    </div>
  );
};

export default Home;
