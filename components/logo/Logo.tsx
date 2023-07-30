import Link from "next/link";
import Title from "../Title";

const Logo = () => {
  return (
    <nav>
      <Link href={"/"}>
        <Title text={"Astraia"} />
      </Link>
    </nav>
  );
};

export default Logo;
