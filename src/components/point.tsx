import { AuroraText } from "@/components/magicui/aurora-text";
export default function Point() {
  return (
    <div className="px-10">
      <div className="flex flex-col gap-8 items-center justify-center">
        <AuroraText className="text-7xl font-bold text-center py-3">POINT</AuroraText>
        <div className="flex items-center w-full">
          <div className="flex-grow border-t-2 border-lime-500"></div>
          <p className="text-2xl text-lime-500 mx-4">今のあなたは？</p>
          <div className="flex-grow border-t-2 border-lime-500"></div>
        </div>
        <div className="flex flex-col gap-20 px-20">
          <div className="flex"> 
            <p>本業もSNSも頑張りすぎてない？<br />
            本業も大切だけどSNSなどのメディア発信もとっても大切</p>
          </div>
          <div className="flex flex-row-reverse"> 
            <p>本業しながらSNSを継続してくのは思っているより難しい</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>投稿するにも・・・</p>
            <ul className="list-disc list-inside">
              <li>ネタを考える</li>
              <li>文章を作成する</li>
              <li>ハッシュタグをつける</li>
              <li>コメント返信やリアクション</li>
            </ul>
            <p>更に・・・数字を見て分析して伸びる為に改善してく</p>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center text-red-400">我々の強み</h2>
        <div className="flex flex-col gap-4">
          <p className="text-3xl text-lime-500 mx-4">「あなた以上にあなたの想いを発信する」</p>
          <p>あなたの事業や人柄を理解したSNS運用とあなたをサポートしていくこと</p>
        </div>
        <div className="flex">
          <p>ビジネスのアカウントで大切なのは【バズらせる】ではなく、【コンスタント】に継続してくこと</p>
        </div>

      </div>

    </div>
  );
}