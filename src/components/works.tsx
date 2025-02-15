import { AuroraText } from "@/components/magicui/aurora-text";
export default function Works() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center py-10">
        <AuroraText className="text-7xl font-bold text-center">WORKS</AuroraText>
        <div className="flex items-center justify-center w-full">
          <p className="text-4xl text-lime-500 mx-4">導入実績・クライアントの声</p>
        </div>
        <p className="text-4xl text-lime-500 mx-4">当社の展開する広告へ無料掲載</p>
      </div>
    </div>
  );
}