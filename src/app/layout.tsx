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
