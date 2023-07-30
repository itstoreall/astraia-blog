import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/articles"}>{"Articles"}</Link>
    </nav>
  );
};

export default Navbar;
