export default function CommerceLow() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center py-5 h-screen">
        <div className="flex items-center justify-center w-full">
          <p className="text-4xl mx-4">特定商取引法（通信販売）に基づく表示</p>
        </div>
        <dl className="flex flex-col gap-5 py-8 text-xl  w-[100%] md:w-[80%] ">
          <div className="flex gap-5 border-b-2"> 
            <dt className="w-1/5">事業者</dt>
            <dd>北島 天貴</dd>
          </div>
          <div className="flex gap-5 border-b-2"> 
            <dt className="w-1/5">住所</dt>
            <dd>埼玉県久喜市久喜東5-31-9 205</dd>
          </div>
          <div className="flex gap-5 border-b-2 "> 
            <dt className="w-1/5">メールアドレス</dt>
            <dd>support@sns-master.jp</dd>
          </div>
          <div className="flex gap-5 border-b-2 "> 
            <dt className="w-1/5">役務の対価</dt>
            <dd>各サービスの申し込みページに記載</dd>
          </div>
          <div className="flex gap-5 border-b-2 "> 
            <dt className="w-1/5">対価以外に必要となる費用</dt>
            <dd>なし（但し、インターネット接続料金その他の電気通信回線の通信に関する費用及び通信機器はユーザーにて負担して頂きます）。</dd>
          </div>
          <div className="flex gap-5 border-b-2 "> 
            <dt className="w-1/5">代金の支払い方法</dt>
            <dd>クレジットカード決済・銀行振込</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}