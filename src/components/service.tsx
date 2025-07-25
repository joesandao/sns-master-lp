import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";
export default function Service() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center px-10">
        <AuroraText className="text-7xl font-bold text-center">SERVICE</AuroraText>
        <div className="flex items-center w-full">
          <div className="flex-grow border-t-2 border-lime-500"></div>
          <p className="text-2xl text-lime-500 mx-4">提供サービス</p>
          <div className="flex-grow border-t-2 border-lime-500"></div>
        </div>

        <p className="text-6xl font-bold text-center">1</p>
        <h2 className="text-5xl text-red-400">企業・店のSNSアカウントの代理運用</h2>
        <Image src="/create-account.jpeg" alt="marketing" width={1000} height={500} />
        {/*
        <Accordion type="single" collapsible className="px-20 w-[80%]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="rounded-md p-4 bg-red-400 text-white text-3xl">View More</AccordionTrigger>
            <AccordionContent className="w-[80%]">
              <p className="text-2xl">ここに詳細情報が入りますここに詳細情報が入ります</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        */ }
        <p className="text-6xl font-bold text-center">2</p>
        <h2 className="text-5xl text-red-400">広告運用</h2>
        <Image src="/marketing.jpg" alt="marketing" width={1000} height={500} />
        {/*
        <Accordion type="single" collapsible className="px-20 w-[80%]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="rounded-md p-4 bg-red-400 text-white text-3xl">View More</AccordionTrigger>
            <AccordionContent className="w-[80%]">
              <p className="text-2xl">ここに詳細情報が入りますここに詳細情報が入ります</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        */ }

        {/* 4つの画像を2x2グリッドで配置 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mt-8">
          <div className="flex justify-center">
            <Image 
              src="/左上.jpg" 
              alt="左上" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src="/右上.jpg" 
              alt="右上" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src="/左下.jpg" 
              alt="左下" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src="/右下.jpg" 
              alt="右下" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* サービスプランテーブル */}
        <div className=" max-w-6xl mt-12">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-blue-400 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">プラン名</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">金額</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">サービス区分</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">サービス内容</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="border border-gray-300 px-4 py-3 font-semibold" rowSpan={3}>SNS運用マスター</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold" rowSpan={3}>50,000円〜/月</td>
                  <td className="border border-gray-300 px-4 py-3">LINE公式アカウント サポート</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <ul className="list-disc list-inside space-y-1">
                      <li>投稿代行</li>
                      <li>企画立案</li>
                      <li>アカウント作成・アップデート</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="border border-gray-300 px-4 py-3">Instagram サポート</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <ul className="list-disc list-inside space-y-1">
                      <li>投稿代行</li>
                      <li>企画立案</li>
                      <li>アカウント作成・アップデート</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="border border-gray-300 px-4 py-3">Google連携</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Instagramとの連携</li>
                      <li>店舗情報の追加・更新</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}