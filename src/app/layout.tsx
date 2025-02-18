import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SNS運用マスター | 煩わしいマーケティングを解決します",
  description: "SNS運用マスターは、お客様の時間を第一とし、アカウント作成から運用までほとんどの業務を代行します。",
  
  openGraph: {
    title: "SNS運用マスター | 煩わしいマーケティングを解決します",
    description: "SNS運用マスターは、お客様の時間を第一とし、アカウント作成から運用までほとんどの業務を代行します。",
    url: "https://sns-master.jp/",
    siteName: "SNS運用マスター",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SNS運用マスターのOGP画像",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  
  // その他のSEO関連プロパティ
  robots: "index,follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={robotoSlab.className}
      >
        <main>
          {children}
        </main>
        <footer className="bg-gradient-to-br from-blue-500 via-green-500 to-yellow-200 h-[50px] flex flex-row items-center px-20">
          <p className="text-white text-xl">© 2025 Cirrus. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
