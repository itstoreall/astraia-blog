import { Inter } from "next/font/google";
import NextThemeProvider from "../providers/themeProvider";
import "@/styles/global.scss";
import { IRootLayoutProps } from "@/interfaces";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import MainContainer from "@/components/Containers/MainContainer";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NextThemeProvider>
          <Preloader />
          <div className="globalWrapper" id="global_wrapper">
            <Header />
            <main className="main">
              <MainContainer>{children}</MainContainer>
            </main>
            <Footer />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
