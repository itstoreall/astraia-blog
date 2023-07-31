"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default NextThemeProvider;
