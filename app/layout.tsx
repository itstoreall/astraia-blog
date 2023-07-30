import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
