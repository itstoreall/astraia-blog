import { FC } from "react";
import { ThemeToggleProps } from "@/interfaces";
import s from "./ThemeToggle.module.scss";

const ThemeToggle: FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <label className={`${s.switchButton} ${s[theme]}`}>
      <input type="checkbox" onChange={toggleTheme} />
      <span></span>
    </label>
  );
};

export default ThemeToggle;
