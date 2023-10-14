import { globalConfig as cfg } from "@/config";

// ---------- Theme:

export const getCurrentTheme = (theme: string | undefined) =>
  theme === "light" || theme === "dark" ? theme : cfg.gen.defaultTheme;

export const imgFilter = (currentTheme: string) =>
  currentTheme === "dark" ? 50 : 0;

// ---------- Other:

export const isLandscape = () =>
  typeof window !== "undefined"
    ? window.innerWidth > window.innerHeight
    : false;
