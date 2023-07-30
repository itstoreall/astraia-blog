import s from "./Header.module.scss";
import Navbar from "../Navbar";
import Logo from "../logo";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
