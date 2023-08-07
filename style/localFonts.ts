import localFont from "next/font/local";

export const pretendardFont = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const climateCrisisFont = localFont({
  src: "../assets/fonts/ClimateCrisisKRVF.woff2",
  display: "swap",
  variable: "--font-climate-crisis",
  weight: "900",
});
