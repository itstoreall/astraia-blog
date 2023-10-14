import Link from "next/link";
import { globalConfig as cfg } from "@/config";
import s from "./Footer.module.scss";

const Copyright = () => {
  return (
    <div className={s.copyrightBlock}>
      <div className={s.copyright}>
        <Link href={cfg.home.pathname} className={s.logoLink}>
          {cfg.gen.blogTitle}
        </Link>
        <span className={s.copyrightIcon}>&copy;</span>
        <time>{new Date().getFullYear()}</time>
      </div>
    </div>
  );
};

export default Copyright;
