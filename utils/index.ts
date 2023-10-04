// import { THEME_BY_DEFAULT } from "@/constants";

// const defaultTheme = THEME_BY_DEFAULT;

// export const getCurrentTheme = (theme: string | undefined) =>
//   theme === "light" || theme === "dark" ? theme : defaultTheme;

export const isLandscape = () =>
  typeof window !== "undefined"
    ? window.innerWidth > window.innerHeight
    : false;
