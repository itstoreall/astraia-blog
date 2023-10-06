"use client";
import { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import { getCurrentTheme } from "@/utils";

const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = getCurrentTheme(theme);

  return (
    <div>
      <ThemeToggle theme={currentTheme} setTheme={setTheme} />
    </div>
  );
};

export default ThemeSwitcher;
