import { AuroraText } from "@/components/magicui/aurora-text";
export default function Company() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center">
        <AuroraText className="text-7xl font-bold text-center">COMPANY</AuroraText>
        <div className="flex items-center justify-center w-full">
          <p className="text-4xl text-lime-500 mx-4">会社情報</p>
        </div>
        <dl className="flex flex-col gap-5 text-red-400 py-8 text-2xl border-lime-500 w-[100%] md:w-[60%] ">
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">社名</dt>
            <dd>株式会社Cirrus</dd>
          </div>
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">代表者名</dt>
            <dd>佐藤 忍</dd>
          </div>
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">資本金</dt>
            <dd>100万円</dd>
          </div>
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">設立</dt>
            <dd>2020年3月</dd>
          </div>
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">所在地</dt>
            <dd>東京都千代田区神田松永町13<br />ＶＯＲＴ秋葉原ＩＩ</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}