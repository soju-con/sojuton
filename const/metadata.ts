import { Metadata } from "next";

const title = "2023 소주톤 - 얼레벌레 바캉스";
const description = `2회 소주톤은 주니어 여러분의 성장을 위한 협업과 네트워킹 기회를 만들기 위한 12시간 해커톤입니다.
  지리적 한계를 넘어, 2회 소주톤:얼레벌레바캉스는 사람들이 멋지고, 풍경이 아름다운 🌊부산🌊에서 진행됩니다.
  다들 부산 하면 어떤 단어가 떠오르시나요! 여름, 바다, 휴가, 대선소주..
  
  눈치채셨듯 이번 해커톤의 주제는 '바캉스🍹'와 관련된 모든 것입니다. 9월인데 바캉스가 주제라고요?
  참가하는 모두에게 바캉스와 같은 휴식과 재충전의 시간을 드리기 위해서니까 우리 얼레벌레 넘어가요!`;

export const globalMetadata: Metadata = {
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
    images: ["/images/sojuton-poster.png"],
    countryName: "Korea, Republic of",
    emails: ["soujucon.community@gmail.com"],
    siteName: title,
  },
  metadataBase: new URL("https://sojuton.vercel.app"),
};
