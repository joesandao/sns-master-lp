import { AuroraText } from "@/components/magicui/aurora-text";
export default function Company() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center py-5">
        <AuroraText className="text-7xl font-bold text-center">INFO</AuroraText>
        <div className="flex items-center justify-center w-full">
          <p className="text-4xl text-lime-500 mx-4">サービス情報</p>
        </div>
        <dl className="flex flex-col gap-5 text-red-400 py-8 text-xl border-lime-500 w-[100%] md:w-[60%] ">
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">商品名</dt>
            <dd>Series3</dd>
          </div>
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">代表名</dt>
            <dd>0UTL1ER株式会社</dd>
          </div>
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">電話番号</dt>
            <dd>080-2679-7117</dd>
          </div>
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">Email</dt>
            <dd>info@0utl1er.tech</dd>
          </div>
          <div className="flex gap-5 border-b-2 border-red-400"> 
            <dt className="w-1/5">所在地</dt>
            <dd>東京都千代田区神田松永町13番地 VORT秋葉原II</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}