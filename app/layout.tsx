import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { climateCrisisFont, pretendardFont } from "@/style/localFonts";
import type { Metadata } from "next";
import "./globals.css";
import { globalMetadata } from "@/const/metadata";

export const metadata: Metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${pretendardFont.variable} ${climateCrisisFont.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
