import { AuroraText } from "@/components/magicui/aurora-text";
export default function Company() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center">
        <AuroraText className="text-7xl font-bold text-center">COMPANY</AuroraText>
        <div className="flex items-center justify-center w-full">
          <p className="text-4xl text-lime-500 mx-4">導入実績・クライアントの声</p>
        </div>
      </div>
    </div>
  );
}