"use client";
import { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
// import { THEME_BY_DEFAULT } from "@/constants";
import ThemeToggle from "./ThemeToggle";
import { getCurrentTheme } from "@/utils";

// const defaultTheme = THEME_BY_DEFAULT;

const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = getCurrentTheme(theme);
  // theme === "light" || theme === "dark" ? theme : defaultTheme;

  return (
    <div>
      <ThemeToggle theme={currentTheme} setTheme={setTheme} />
    </div>
  );
};

export default ThemeSwitcher;

/*

<button onClick={() => setTheme("light")}>Light</button>
<button onClick={() => setTheme("dark")}>Dark Mode</button>

*/
