import { AuroraText } from "@/components/magicui/aurora-text";
export default function Service() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center">
        <AuroraText className="text-7xl font-bold text-center">SERVICE</AuroraText>
        <div className="flex items-center w-full">
          <div className="flex-grow border-t-2 border-lime-500"></div>
          <p className="text-2xl text-lime-500 mx-4">我々は何々を提供します</p>
          <div className="flex-grow border-t-2 border-lime-500"></div>
        </div>

        <p className="text-6xl font-bold text-center">1</p>
        <h2 className="text-5xl text-red-400">企業・店のSNSアカウントの代理運用</h2>
        <button className="bg-red-400 text-white text-3xl px-4 py-2 rounded-md">VIEW MORE</button>
        <p className="text-6xl font-bold text-center">2</p>
        <h2 className="text-5xl text-red-400">広告運用</h2>

        <h2 className="text-6xl font-bold text-center text-red-300">3</h2>

      </div>
    </div>
  );
}