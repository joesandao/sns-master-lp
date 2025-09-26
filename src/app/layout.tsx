import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <footer className="bg-gradient-to-br from-blue-500 via-green-500 to-yellow-200 flex lg:flex-row flex-col justify-between items-center px-10 py-10 gap-10">
          <div className="flex gap-4 items-baseline sm:flex-row flex-col">
            <Link href="/terms-of-service">
              <p className="text-white border-b-2 border-white text-base h-[25px] ">利用規約</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="text-white border-b-2 border-white text-base h-[25px]">プライバシーポリシー</p>
            </Link>
            <Link href="/commerce-law">
              <p className="text-white border-b-2 border-white text-base h-[25px]">特定商取引法（通信販売）に基づく表示</p>
            </Link>
          </div>
          <p className="text-white text-base">© 2025 0UTL1ER. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
