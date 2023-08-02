import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextThemeProvider from "../providers/themeProvider";
import "@/styles/global.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContainer from "@/components/Containers/MainContainer";
// import ArticlesButton from "@/components/ArticlesButton";

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
          <div className="globalWrapper">
            <Header />
            <main className="main">
              <MainContainer>{children}</MainContainer>
            </main>
            {/* <ArticlesButton /> */}
            <Footer />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
