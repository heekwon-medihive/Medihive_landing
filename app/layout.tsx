import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MediHive - 차세대 혈관 접합 Coupler",
  description: "미세접합 수술을 위한 차세대 혈관 접합 Coupler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-pretendard">
        {children}
      </body>
    </html>
  );
}
