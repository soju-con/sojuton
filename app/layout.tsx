import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { climateCrisisFont, pretendardFont } from "@/style/localFonts";
import type { Metadata } from "next";
import "./globals.css";

const title = "2023 소주톤 - 얼레벌레 바캉스";
const description =
  "누구나 감탄할 수 있는 결과물을 만들어 내는 것도 좋지만,  시간 제한이 있는 해커톤에서 대단한 수준의 서비스를 기획, 디자인,  개발하기는 어렵습니다.  그렇기에 소주톤은 주니어 여러분의 성장을 위한 협업과 네트워킹의 기회를 만들고자 합니다.   해커톤으로 그 계기를 만들고자 합니다.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "소주톤",
    "소주콘",
    "해커톤",
    "소프트웨어",
    "개발",
    "디자인",
    "기획",
    "네트워킹",
    "프로그래밍",
    "코딩",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title,
    description,
    images: [],
    countryName: "Korea, Republic of",
    emails: ["soujucon.community@gmail.com"],
    siteName: title,
  },
  metadataBase: new URL("https://sojuton.vercel.app"),
};

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
