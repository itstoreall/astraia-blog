"use client";
import { useTheme } from "next-themes";
import s from "./Preloader.module.scss";
import { useEffect, useState } from "react";
import Spinner from "../Loading/Spinner";

const Preloader = () => {
  const [isPreloader, setIsPreloader] = useState<boolean>(true);

  const { setTheme } = useTheme();

  useEffect(() => {
    const globalWrapperElement = document.getElementById("global_wrapper");
    if (globalWrapperElement) {
      globalWrapperElement.style.display = "none";
      const lsTheme = localStorage.getItem("theme");
      setTheme(lsTheme ? lsTheme : "dark");
      globalWrapperElement.style.display = "block";
      setTimeout(() => setIsPreloader(false), 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isPreloader && (
        <div className={s.preloader}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Preloader;
