import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextThemeProvider from "../providers/themeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astraia Layout",
  description: "Astraia blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NextThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
