import { AuroraText } from "@/components/magicui/aurora-text";
export default function Point() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center">
        <AuroraText className="text-7xl font-bold text-center py-3">POINT</AuroraText>
        <div className="flex items-center w-full">
          <div className="flex-grow border-t-2 border-lime-500"></div>
          <p className="text-2xl text-lime-500 mx-4">我々の強み</p>
          <div className="flex-grow border-t-2 border-lime-500"></div>
        </div>
        <h2 className="text-4xl font-bold text-center text-red-300">SNSを利用していて<br />こんなお悩みありませんか？</h2>
      </div>
      <div className="flex flex-col gap-20 px-20">
        <div className="flex"> 
          <p>集客のためにSNSを導入したいけど、そのために何をしたらいいのかわからない...</p>
        </div>
        <div className="flex flex-row-reverse"> 
          <p>SNSのアカウントを作成したけど、時間がなくて触れていない...</p>
        </div>
      </div>
    </div>
  );
}