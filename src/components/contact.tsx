import { AuroraText } from "@/components/magicui/aurora-text";

export default function Contact() {
  return (
    <div>
      <AuroraText className="text-7xl font-bold text-center">CONTACT</AuroraText>

      <input type="text" placeholder="お名前" />
      <input type="text" placeholder="メールアドレス" />
      <input type="text" placeholder="お問い合わせ内容" />
      <button>送信</button>
    </div>
  );
}